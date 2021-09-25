import { PreliminaryResult, prelimResults20211020TSV } from './preliminary_data';
import { Election } from '../pages';
import { RidingData } from './riding_data';
import { Utils } from './utils';
import { results20151019 } from './results20151019';
import { results20161024 } from './results20161024';
import { results20170403 } from './results20170403';
import { results20171023 } from './results20171023';
import { results20171211 } from './results20171211';
import { results20180618 } from './results20180618';
import { results20181203 } from './results20181203';
import { results20190225 } from './results20190225';
import { results20190506 } from './results20190506';
import { results20191021 } from './results20191021';
import { results20201026 } from './results20201026';

export interface Result {
  "index": number
  "candidate": string
  "party": string
  "currentParty"?: string
  "changedParty"?: Election
  "votes": number
  "votePercentage": number
  "majority": number
  "majorityPercentage": number
}

export interface DateResults {
  "date": Election
  "results": Result[]
}

export interface Summary {
  [partyId: string]: number
}

const resultsSet: DateResults[] = [{
  date: "2015-10-19",
  results: results20151019
}, {
  date: "2016-10-24",
  results: results20161024
}, {
  date: "2017-04-03",
  results: results20170403
}, {
  date: "2017-10-23",
  results: results20171023
}, {
  date: "2017-12-11",
  results: results20171211
}, {
  date: "2018-06-18",
  results: results20180618
}, {
  date: "2018-12-03",
  results: results20181203
}, {
  date: "2019-02-25",
  results: results20190225
}, {
  date: "2019-05-06",
  results: results20190506
}, {
  date: "2019-10-21",
  results: results20191021
}, {
  date: "2020-10-26",
  results: results20201026
}, {
  date: "2021-09-20",
  results: convertPreliminaryResults(PreliminaryResult.fromRows(prelimResults20211020TSV.split("\n")))
}];

interface DateResult {
  winner: Result
  date: Date
}

function convertPreliminaryResults(prelims: PreliminaryResult[]): Result[] {
  return prelims.map((outer) => {
    const ridingSortedDescending = prelims.filter((inner) => inner.index === outer.index).sort((a, b) => b.votes - a.votes);
    const totalForRiding = ridingSortedDescending.reduce((subtotal, next) => subtotal + next.votes, 0);
    const isWinner = ridingSortedDescending[0] === outer;
    const challenger = isWinner ? ridingSortedDescending[1] : null;
    const majority = isWinner && challenger ? outer.votes - challenger.votes : 0;
    const majorityPercentage = isWinner && challenger ? outer.votePercentage - challenger.votePercentage : 0;
    return {
      index: outer.index,
      candidate: outer.name,
      party: `${outer.partyEn}/${outer.partyFr}`,
      votes: outer.votes,
      votePercentage: outer.votePercentage,
      majority: majority,
      majorityPercentage: majorityPercentage
    };
  });
}

function getResultsFor(election: Election): DateResults[] {
  const electionDate = new Date(Utils.electionToDate(election));
  return resultsSet.filter((ea) => {
    const resultDate = new Date(Utils.electionToDate(ea.date));
    return resultDate <= electionDate;
  });
}

function findWinnerFor(ridingIndex: number, election: Election): DateResult | null {
  let winner: Result | undefined;
  let date: Date | undefined;
  const allResults = getResultsFor(election);
  allResults.forEach((dateResults, index) => {
    const resultWinner = dateResults.results.find((ea) => ea.index === ridingIndex && ea.majority > 0);
    const prevWinner = allResults[index - 1] ? allResults[index - 1].results.find((ea) => ea.index === ridingIndex && ea.majority > 0) : null;
    if (resultWinner) {
      winner = resultWinner;
      date = Utils.electionToDate(dateResults.date);
    }
  });
  return winner && date ? {
    winner: winner,
    date: date
  } : null;
}

function getSummaryByParty(election: Election): Summary {
  const partyByRiding: { [ridingId: string]: string } = {};
  const byParty: { [partyId: string]: number } = {};
  getResultsFor(election).forEach((dateResults) => {
    dateResults.results.forEach((result) => {
      if (result.majority > 0) {
        const hasChanged = result.changedParty && Utils.electionToDate(result.changedParty) <= Utils.electionToDate(election);
        const party = hasChanged && result.currentParty ? result.currentParty : result.party;
        partyByRiding[`${result.index}`] = party;
      }
    });
  });
  Object.keys(partyByRiding).forEach((ridingId) => {
    const party = partyByRiding[ridingId];
    if (typeof byParty[party] !== "number") {
      byParty[party] = 0;
    }
    byParty[party] = byParty[party] + 1;
  });
  return byParty;
}

function getResultsForRiding(riding: RidingData, election: Election): DateResults[] {
  return getResultsFor(election).map((dateResults) => {
    return Object.assign({}, dateResults, {
      results: dateResults.results.filter((result) => result.index === riding.index)
    });
  });
}

export { findWinnerFor, getSummaryByParty, getResultsForRiding }
