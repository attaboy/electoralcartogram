import Head from 'next/head';
import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData, ridingDataSet } from '../data/riding_data';
import { DateResults, Result, resultsSet } from '../data/result_data';
import Party from '../data/party';
import "../css/styles.less";

interface CurrentRidingInfo {
  province: string
  flag: string
  riding: string
  candidate: string
  party: string
  originalParty: string | undefined
  date: string
  votePercentage: number
  majorityPercentage: number
}

export enum Lang {
  en="en", fr="fr"
}

interface State {
  currentRiding: CurrentRidingInfo | null
  lang: Lang
}

interface Summary {
  [partyId: string]: number
}

class Home extends React.Component<{}, State> {
  updateTimer: number | undefined;
  summaryByParty: Summary

  constructor(props: {}) {
    super(props);
    this.state = {
      currentRiding: null,
      lang: Lang.en
    };
    this.summaryByParty = this.getSummaryByParty();
  }

  componentDidMount(): void {
    if (window && /^fr\b/.test(window.navigator.language)) {
      this.setState({
        lang: Lang.fr
      });
    }
  }

  getSummaryByParty(): Summary {
    const partyByRiding: { [ridingId: string]: string } = {};
    const byParty: { [partyId: string]: number } = {};
    resultsSet.forEach((dateResults) => {
      dateResults.results.forEach((result) => {
        if (result.majority > 0) {
          const party = result.currentParty || result.party;
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

  delayUpdate(riding: CurrentRidingInfo | null, timing: number) {
    window.clearTimeout(this.updateTimer);
    this.updateTimer = window.setTimeout(() => {
      this.setState({
        currentRiding: riding
      });
    }, timing);
  }

  formatDate(date: Date): string {
    const locale = `${this.state.lang}-CA`;
    if (Intl && Intl.DateTimeFormat.supportedLocalesOf(locale).length > 0) {
      return Intl.DateTimeFormat(locale).format(date);
    } else {
      return date.toLocaleDateString();
    }
  }

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData, result: Result | undefined, date: string | undefined): void {
    const province = provinceData[this.state.lang];
    const riding = ridingData[this.state.lang];
    const dateString = date ? this.formatDate(new Date(date)) : "unknown date";
    this.delayUpdate(result ? {
      province: province,
      flag: provinceData.flagUrl,
      riding: riding,
      candidate: result.candidate,
      date: dateString,
      party: result.currentParty || result.party,
      originalParty: result.currentParty ? result.party : undefined,
      votePercentage: result.votePercentage,
      majorityPercentage: result.majorityPercentage
    } : null, 50);
  }

  onHoverOff(): void {
    this.delayUpdate(null, 500);
  }

  labelForReElected(date: string): string {
    if (this.state.lang === Lang.fr) {
      return `Réélu(e) ${date}`;
    } else {
      return `Re-elected ${date}`;
    }
  }

  labelForElected(date: string): string {
    if (this.state.lang === Lang.fr) {
      return `Élu(e) ${date}`;
    } else {
      return `Elected ${date}`;
    }
  }

  electedAs(party: Party): string {
    return this.state.lang === Lang.fr ? ` — élu(e) comme ${party[this.state.lang]}` : ` — elected as ${party[this.state.lang]}`;
  }

  renderSummary() {
    const partyIds = Object.keys(this.summaryByParty).sort((a, b) => {
      return this.summaryByParty[b] - this.summaryByParty[a];
    });
    const total = partyIds.reduce((subtotal, partyId) => subtotal + this.summaryByParty[partyId], 0);
    return (
      <div>
        <table>
          <thead>
            <td colSpan={2}>
              {this.state.lang === Lang.fr ? (
                <span>
                  <b>42<sup>me</sup> Parlement</b> (de 2015 à aujourd’hui)
                </span>
              ) : (
                <span>
                  <b>42<sup>nd</sup> Parliament</b> (2015–Present)
                </span>
              )}
            </td>
          </thead>
          <tbody>
            {partyIds.map((partyId) => {
              const party = Party.findByRawName(partyId);
              return (
                <tr key={partyId}>
                  <td>{this.renderPartyInfo(party)}</td>
                  <td align="right">{this.summaryByParty[partyId]}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td><b>Total</b></td>
              <td align="right"><b>{total}</b></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  renderPartyInfo(party: Party, content?: React.ReactNode) {
    return (
      <span>
        <span style={{ display: "inline-block", width: "0.9rem", height: "0.9rem", verticalAlign: "middle", backgroundColor: party.color, marginRight: "0.4em", marginBottom: "0.1rem", border: "1px solid black" }}></span>
        <span>{party[this.state.lang]}</span>
      </span>
    )
  }

  renderInfo(ridingInfo: CurrentRidingInfo) {
    const candidate = ridingInfo.candidate.replace(/ \*\*$/, "");
    const elected = / \*\*$/.test(ridingInfo.candidate) ? this.labelForReElected(ridingInfo.date) : this.labelForElected(ridingInfo.date);
    const ridingName = ridingInfo.riding.replace(/\/.+$/, "");
    const party = Party.findByRawName(ridingInfo.party);
    const originalParty = ridingInfo.originalParty ? Party.findByRawName(ridingInfo.originalParty) : null;
    return (
      <div>
        <h5>
          <img src={ridingInfo.flag} style={{ height: "24px", marginRight: "0.5em", verticalAlign: "bottom" }} />
          {ridingName === ridingInfo.province ? null : (
            <span>{ridingInfo.province}</span>
          )}
        </h5>
        <h3 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.5)", paddingBottom: "0.25em", marginBottom: "0.25em" }}>{ridingName}</h3>
        <div>{candidate}</div>
        <div style={{ marginBottom: "0.25em" }}>
          <b>{this.renderPartyInfo(party)} </b>
          {originalParty ? (
            <i>{this.electedAs(originalParty)}</i>
          ) : null}
        </div>
        <div style={{ fontSize: "0.9rem" }}>
          <div>{elected}</div>
          <div>{this.renderVoteSummary(ridingInfo.votePercentage, ridingInfo.majorityPercentage)}</div>
        </div>
      </div>
    );
  }

  renderVoteSummary(votePercentage: number, majorityPercentage: number) {
    return this.state.lang === "fr" ? `${votePercentage} % du vote (+${majorityPercentage} points en avant)` :
      `${votePercentage}% of vote (${majorityPercentage} points ahead)`;
  }

  setEnglish(): void {
    this.setState({
      lang: Lang.en
    });
  }

  setFrench(): void {
    this.setState({
      lang: Lang.fr
    });
  }

  render() {
    const title = this.state.lang === Lang.fr ? "Cartogramme électorale du Canada" : "Electoral Cartogram of Canada";
    const ridingInfo = this.state.currentRiding;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,600&display=swap" rel="stylesheet" />
        </Head>
        <header>
          <h1>
            <img src="/images/flags/Flag_of_Canada.svg" style={{ height: "0.8em", paddingBottom: "0.2em", marginRight: "0.4em", verticalAlign: "bottom" }} />
            <span>{title} </span>
          </h1>
          <div id="langButtons" className="radioButtons">
            <button className={`radio ${this.state.lang === Lang.en ? "active" : ""}`} type="button" onClick={() => this.setEnglish()}>English</button>
            <button className={`radio ${this.state.lang === Lang.fr ? "active" : ""}`} type="button" onClick={() => this.setFrench()}>Français</button>
          </div>
        </header>
        <div style={{ position: "relative" }}>
          <div className="map">
            <Map onHoverOn={(r, p, rs, d) => this.onHoverOn(r, p, rs, d)} onHoverOff={() => this.onHoverOff()} lang={this.state.lang} />
          </div>
          <div className="overlay">
            {ridingInfo ? this.renderInfo(ridingInfo) : this.renderSummary()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
