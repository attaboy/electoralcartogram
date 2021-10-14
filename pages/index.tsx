import Head from 'next/head';
import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData, ridingDataSet } from '../data/riding_data';
import { DateResults, Result, findWinnerFor, getSummaryByParty, Summary } from '../data/result_data';
import Party from '../data/party';
import { Coordinates } from '../components/riding';
import { Utils } from '../data/utils';
import { Parliaments } from '../data/parliaments';

interface RidingWinner {
  candidate: string
  party: string
  originalParty: string | undefined
  changedDate: string | undefined
  votes: number
  votePercentage: number
  majorityPercentage: number
}

interface RidingLoser {
  candidate: string
  party: string
  votes: number
  votePercentage: number
}

interface CurrentRidingInfo {
  province: string
  flag: string
  flagDescription: string
  riding: string
  winner: RidingWinner
  losers: RidingLoser[]
  date: string
}

export enum Lang {
  en="en", fr="fr"
}

const Elections = [
  "2015-10-19",
  "2016-05-31",
  "2016-10-24",
  "2017-04-03",
  "2017-10-23",
  "2017-12-11",
  "2018-05-11",
  "2018-06-18",
  "2018-09-14",
  "2018-09-17",
  "2018-11-07",
  "2018-11-30",
  "2018-12-03",
  "2019-02-25",
  "2019-03-20",
  "2019-04-02",
  "2019-05-06",
  "2019-08-16",
  "2019-10-21",
  "2020-10-26",
  "2020-11-09",
  "2021-01-20",
  "2021-01-25",
  "2021-06-10",
  "2021-09-20"
] as const;

export type Election = typeof Elections[number]

interface ElectionTypes {
  "general": ReadonlyArray<Election>
  "by-election": ReadonlyArray<Election>
}

const ElectionTypes: ElectionTypes = {
  "general": ["2015-10-19", "2019-10-21", "2021-09-20"],
  "by-election": ["2016-10-24", "2017-04-03", "2017-10-23", "2017-12-11", "2018-06-18", "2018-12-03", "2019-02-25", "2019-05-06", "2020-10-26"]
};

interface Props {}

interface State {
  election: Election
  currentRiding: CurrentRidingInfo | null
  coords: Coordinates
  searchText: string
  searchResultsVisible: boolean
  lang: Lang
}

class Home extends React.Component<Props, State> {
  updateTimer: number | undefined;
  searchResultsTimer: number | undefined;
  electionSelector?: HTMLSelectElement | null;
  constructor(props: Props) {
    super(props);
    this.state = {
      election: Elections[Elections.length - 1],
      currentRiding: null,
      coords: { x: 0, y: 0 },
      searchText: "",
      searchResultsVisible: false,
      lang: Lang.en
    };
    this.handleBodyKeyUp = this.handleBodyKeyUp.bind(this);
  }

  componentDidMount(): void {
    if (window && /^fr\b/.test(window.navigator.language)) {
      this.setState({
        lang: Lang.fr
      });
    }
    document.body.addEventListener('keyup', this.handleBodyKeyUp);
  }

  componentWillUnmount(): void {
    document.body.removeEventListener('keyup', this.handleBodyKeyUp);
  }

  handleBodyKeyUp(ev: KeyboardEvent): void {
    if (ev.target !== document.body && ev.target !== this.electionSelector) {
      return;
    }
    const key = ev.key;
    if (key === 'ArrowLeft') {
      this.setNextOrPreviousElection(-1);
    } else if (key === 'ArrowRight') {
      this.setNextOrPreviousElection(1);
    }
  }

  setNextOrPreviousElection(nextOrPrevious: -1 | 1): void {
    const currentElectionIndex = Elections.indexOf(this.state.election);
    const lastElectionIndex = Elections.length - 1;
    let newIndex: number;
    if (currentElectionIndex === -1) {
      throw new Error(`Current election (${this.state.election}) not found in election set`);
    } else if (nextOrPrevious === -1) {
      newIndex = currentElectionIndex === 0 ? lastElectionIndex : currentElectionIndex - 1;
    } else {
      newIndex = currentElectionIndex === lastElectionIndex ? 0 : currentElectionIndex + 1;
    }
    this.setElection(Elections[newIndex]);
  }

  delayUpdate(riding: CurrentRidingInfo | null, coords: Coordinates | null, timing: number) {
    window.clearTimeout(this.updateTimer);
    this.updateTimer = window.setTimeout(() => {
      this.setState({
        currentRiding: riding,
        coords: coords ? coords : this.state.coords
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

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData, coords: Coordinates): void {
    this.delayUpdate(this.getRidingInfoFromRiding(ridingData, provinceData), coords, 100);
  }

  onClickRiding(ridingData: RidingData): void {
    const newText = ridingData[this.state.lang];
    this.setState({
      searchText: this.state.searchText === newText ? "" : newText
    });
  }

  onClickNoRiding(): void {
    this.setState({
      searchText: ""
    });
  }

  onHoverOff(): void {
    this.delayUpdate(null, null, 500);
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

  electedAs(party: Party, changedDate: string | undefined): string {
    if (this.state.lang === Lang.fr) {
      return ` (changé(e) de ${party[this.state.lang]}${changedDate ? `, ${changedDate}` : ""})`;
    } else {
      return ` (changed from ${party[this.state.lang]}${changedDate ? `, ${changedDate}` : ""})`;
    }
  }

  renderElectionTitle() {
    const electionDate = Utils.electionToDate(this.state.election);
    if (electionDate >= Utils.electionToDate(Parliaments.P44)) {
      if (this.state.lang === Lang.fr) {
        return (
          <span><b>Le 44<sup>e</sup> Parlement</b> ({this.state.election})</span>
        );
      } else {
        return (
          <span><b>44<sup>th</sup> Parliament</b> ({this.state.election})</span>
        );
      }
    } else if (electionDate >= Utils.electionToDate(Parliaments.P43)) {
      if (this.state.lang === Lang.fr) {
        return (
          <span><b>Le 43<sup>e</sup> Parlement</b> ({this.state.election})</span>
        );
      } else {
        return (
          <span><b>43<sup>rd</sup> Parliament</b> ({this.state.election})</span>
        );
      }
    } else {
      if (this.state.lang === Lang.fr) {
        return (
          <span><b>Le 42<sup>e</sup> Parlement</b> ({this.state.election})</span>
        );
      } else {
        return (
          <span><b>42<sup>nd</sup> Parliament</b> ({this.state.election})</span>
        );
      }
    }
  }

  renderSummary() {
    const summary = getSummaryByParty(this.state.election);
    const partyIds = Object.keys(summary).sort((a, b) => {
      return summary[b] - summary[a];
    });
    const total = partyIds.reduce((subtotal, partyId) => subtotal + summary[partyId], 0);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td colSpan={3}>{this.renderElectionTitle()}</td>
            </tr>
          </thead>
          <tbody>
            {partyIds.map((partyId) => {
              const party = Party.findByRawName(partyId);
              return (
                <tr key={partyId}>
                  <td className="partyCell">{this.renderPartyDecorator(party)}</td>
                  <td className="candidateName">{party[this.state.lang]}</td>
                  <td className="voteCount">{summary[partyId]}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}><b>Total</b></td>
              <td className="voteCount"><b>{total}</b></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  renderPartyDecorator(party: Party) {
    return (
      <span className={`partyDecorator ${party.className}`} />
    );
  }

  renderInfo(ridingInfo: CurrentRidingInfo) {
    const winner = ridingInfo.winner.candidate.replace(/ \*\*$/, "");
    const elected = this.labelForElected(ridingInfo.date);
    const ridingName = ridingInfo.riding.replace(/\/.+$/, "");
    const winningParty = Party.findByRawName(ridingInfo.winner.party);
    const originalParty = ridingInfo.winner.originalParty ? Party.findByRawName(ridingInfo.winner.originalParty) : null;
    const pctFormatter = Intl.NumberFormat(this.state.lang + '-CA', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });
    const voteFormatter = Intl.NumberFormat(this.state.lang + '-CA', { maximumFractionDigits: 0 });
    return (
      <div>
        <h5>
          <img src={ridingInfo.flag}
            style={{ height: "24px", marginRight: "0.5em", verticalAlign: "bottom" }}
            alt={ridingInfo.flagDescription}
          />
          {ridingName === ridingInfo.province ? null : (
            <span>{ridingInfo.province}</span>
          )}
        </h5>
        <table>
          <thead>
            <tr>
              <td colSpan={4}><h3>{ridingName}</h3></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="partyCell">{this.renderPartyDecorator(winningParty)}</td>
              <td className="candidateName">
                <div>
                  <span><b>{winner}, {winningParty[this.state.lang]}</b></span>
                </div>
                <div style={{ fontSize: "0.9rem" }}>
                  {elected}{originalParty ? (
                    <i>{this.electedAs(originalParty, ridingInfo.winner.changedDate)}</i>
                  ) : null}
                </div>
              </td>
              <td className="votePctg">
                <b>{pctFormatter.format(ridingInfo.winner.votePercentage / 100)}</b>
              </td>
              <td className="voteCount">
                <b>{voteFormatter.format(ridingInfo.winner.votes)}</b>
              </td>
            </tr>
            {ridingInfo.losers.filter((loser) => loser.votePercentage >= 1).map((loser) => {
              const party = Party.findByRawName(loser.party);
              const name = loser.candidate.replace(/ \*\*/, "");
              return (
                <tr key={`${name}-${party.rawName}`}>
                  <td className="partyCell">
                    {this.renderPartyDecorator(party)}
                  </td>
                  <td className="candidateName">
                    <div>
                      <span>{name}, {party[this.state.lang]}</span>
                    </div>
                  </td>
                  <td className="votePctg">{pctFormatter.format(loser.votePercentage / 100)}</td>
                  <td className="voteCount">{voteFormatter.format(loser.votes)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  renderVoteSummary(votePercentage: number, majorityPercentage: number) {
    const majorityAsString = majorityPercentage.toFixed(1);
    if (this.state.lang === Lang.fr) {
      return `${votePercentage} % du vote (${majorityAsString} ${majorityPercentage === 1 ? "point" : "points"} en avant)`;
    } else {
      return `${votePercentage}% of vote (${majorityAsString} ${majorityPercentage === 1 ? "point" : "points"} ahead)`;
    }
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

  updateSearchText(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchText: event.currentTarget.value
    });
  }

  handleInputKeyUp(event: React.KeyboardEvent<HTMLInputElement>, sortedResults: RidingData[]): void {
    if (event.key === "Enter") {
      event.preventDefault();
      const target = event.currentTarget;
      if (sortedResults[0]) {
        this.setState({
          searchText: sortedResults[0][this.state.lang]
        }, () => {
          target.blur();
        });
      }
    }
  }

  handleInputFocus(): void {
    window.clearTimeout(this.searchResultsTimer);
    this.setState({
      searchResultsVisible: true
    });
  }

  handleInputBlur(): void {
    this.searchResultsTimer = window.setTimeout(() => {
      this.setState({
        searchResultsVisible: false
      });
    }, 50);
  }

  getRidingsFromSearch(): ProvinceData[] {
    if (!this.state.searchText.trim().length) {
      return [];
    }
    const searchTokens = this.state.searchText.toLowerCase().trim().split(" ");
    return ridingDataSet.map((province) => {
      return Object.assign({}, province, {
        ridings: province.ridings.filter((riding) => {
          const ridingTokens = riding[this.state.lang].toLowerCase().trim().split(" ");
          return searchTokens.every((searchToken) => ridingTokens.some((ridingToken) => ridingToken.includes(searchToken)));
        })
      });
    }).filter((province) => province.ridings.length > 0);
  }

  getRidingInfoFromRiding(riding: RidingData, province: ProvinceData): CurrentRidingInfo | null {
    const result = findWinnerFor(riding.index, this.state.election);
    if (result) {
      const flagDescriptionKey = this.state.lang === Lang.fr ? "flagDescription-fr" : "flagDescription-en";
      const changedPartyDate = result.winner.changedParty ? Utils.electionToDate(result.winner.changedParty) : undefined;
      const changedParty = changedPartyDate ? changedPartyDate <= Utils.electionToDate(this.state.election) : undefined;
      return {
        province: province[this.state.lang],
        flag: province.flagUrl,
        flagDescription: province[flagDescriptionKey],
        riding: riding[this.state.lang],
        winner: {
          candidate: result.winner.candidate,
          party: changedParty && result.winner.currentParty ? result.winner.currentParty : result.winner.party,
          originalParty: changedParty && result.winner.currentParty ? result.winner.party : undefined,
          changedDate: changedPartyDate ? this.formatDate(changedPartyDate) : undefined,
          votes: result.winner.votes,
          votePercentage: result.winner.votePercentage,
          majorityPercentage: result.winner.majorityPercentage
        },
        losers: result.losers,
        date: this.formatDate(result.date)
      };
    } else {
      return null;
    }
  }

  sortedSearchResults(provinces: ProvinceData[]): RidingData[] {
    const results = provinces.reduce<RidingData[]>((all, prov) => {
      return all.concat(prov.ridings.map((ea) => {
        return Object.assign({}, ea, {
          province: prov
        });
      }));
    }, []).sort((a, b) => {
      const aName = a[this.state.lang].toLowerCase();
      const bName = b[this.state.lang].toLowerCase();
      const aStartsWith = aName.startsWith(this.state.searchText.toLowerCase());
      const bStartsWith = bName.startsWith(this.state.searchText.toLowerCase());
      if (aStartsWith === bStartsWith) {
        if (aName < bName) {
          return -1;
        } else if (aName < bName) {
          return 1;
        } else {
          return 0;
        }
      } else if (aStartsWith && !bStartsWith) {
        return -1;
      } else if (bStartsWith && !aStartsWith) {
        return 1;
      } else {
        return 0;
      }
    });

    if (results.length >= 1 && results[0][this.state.lang] === this.state.searchText) {
      return [results[0]];
    } else {
      return results.slice(0, 10);
    }
  }

  setElection(election: Election): void {
    this.setState({
      election
    });
  }

  getElectionTypeFor(election: Election): string {
    if (ElectionTypes.general.includes(election)) {
      return this.state.lang === Lang.en ? "General election" : "élection générale";
    } else if (ElectionTypes['by-election'].includes(election)) {
      return this.state.lang === Lang.en ? "By-election" : "élection partielle";
    } else {
      return this.state.lang === Lang.en ? "Party change" : "changement de parti";
    }
  }

  renderSearchResult(riding: RidingData) {
    const text = riding[this.state.lang];
    const sub = this.state.searchText;
    const onClick = () => this.setState({
      searchText: text
    });
    if (!sub) {
      return (
        <div className="searchResult" key={riding.id} onMouseDown={onClick}>{text}</div>
      );
    }
    const choppedLowercase = text.toLowerCase().split(sub.toLowerCase());
    const highlightLength = sub.length;
    let startIndex = 0;
    return (
      <div className="searchResult" key={riding.id} onMouseDown={onClick}>
        {choppedLowercase.map((lowercaseFragment, index) => {
          const fragmentLength = lowercaseFragment.length;
          const displayFragment = text.substr(startIndex, fragmentLength);
          const highlighted = text.substr(startIndex + fragmentLength, highlightLength);
          startIndex += fragmentLength + highlightLength;

          return (
            <span key={`fragment${index}`}>
              <span>{displayFragment}</span>
              {highlighted ? (
                <b>{highlighted}</b>
              ) : null}
            </span>
          );
        })}
      </div>
    );
  }

  renderTooltip(currentRiding: CurrentRidingInfo) {
    const windowWidth = window.innerWidth;
    const style: React.CSSProperties = {
      top: `${this.state.coords.y}px`
    };
    if (this.state.coords.x > windowWidth / 2) {
      style.right = `${windowWidth - this.state.coords.x}px`;
    } else {
      style.left = `${this.state.coords.x}px`;
    }
    return (
      <div id="mapTooltip" style={style}>{currentRiding.riding}</div>
    );
  }

  render() {
    const title = this.state.lang === Lang.fr ? "Cartogramme électorale du Canada" : "Electoral Cartogram of Canada";
    const searchProvinces = this.getRidingsFromSearch();
    const sortedResults = this.sortedSearchResults(searchProvinces);
    const ridingInfoFromSearch = (sortedResults.length === 1) ?
      this.getRidingInfoFromRiding(sortedResults[0], searchProvinces[0]) : null;
    const ridingInfo = ridingInfoFromSearch || this.state.currentRiding;
    const thisYear = new Date().getFullYear();
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description"
            content="Federal election results for Canada displayed visually in a cartogram map which emphasizes population distribution rather than vast, empty spaces. Each electoral district is represented by a single hexagon of the same size."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,600&display=swap" rel="stylesheet" />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-615474-5" />
          <script dangerouslySetInnerHTML={{
            __html:
              `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-615474-5');
          `
          }}></script>
        </Head>
        <header>
          <h1 lang={this.state.lang}>
            <img src="/images/flags/Flag_of_Canada.png"
              alt={this.state.lang === Lang.fr ? "Le drapeau du Canada" : "Flag of Canada"}
              style={{ height: "0.8em", paddingBottom: "0.2em", marginRight: "0.4em", verticalAlign: "bottom" }}
            />
            <span>{title} </span>
          </h1>
          <div id="langButtons" className="radioButtons">
            <button className={`radio ${this.state.lang === Lang.en ? "active" : ""}`} type="button" onClick={() => this.setEnglish()}>En</button>
            <button className={`radio ${this.state.lang === Lang.fr ? "active" : ""}`} type="button" onClick={() => this.setFrench()}>Fr</button>
          </div>
          <div id="electionSelector">
            <button className="button-transparent" type="button" title={
              this.state.lang === Lang.fr ? "Élection précédente" : "Previous election"
            } onClick={() => this.setNextOrPreviousElection(-1)}>◀︎</button>
            <label htmlFor="electionSelectorSelect" className="selectContainer">
              <select ref={(el) => this.electionSelector = el}
                className="select"
                id="electionSelectorSelect"
                value={this.state.election}
                onChange={(evt) => this.setElection(evt.currentTarget.value as Election)}>
                {Elections.map((election) => {
                  const electionType = this.getElectionTypeFor(election);
                  return (
                    <option key={election} value={election}>{election} {electionType}</option>
                  )}
                )}
              </select>
            </label>
            <button className="button-transparent" type="button" title={
              this.state.lang === Lang.fr ? "Élection suivante" : "Next election"
            } onClick={() => this.setNextOrPreviousElection(1)}>▶︎</button>
          </div>
          <div id="search">
            <input
              type="search"
              placeholder={this.state.lang === Lang.fr ? "Rechercher par circonscription" : "Search by riding name"} onKeyUp={(e) => this.handleInputKeyUp(e, sortedResults)}
              onChange={(e) => this.updateSearchText(e)} value={this.state.searchText}
              onFocus={() => this.handleInputFocus()}
              onBlur={() => this.handleInputBlur()}
            />
            {this.state.searchResultsVisible ? (
              <div id="searchResults">
                {sortedResults.map((riding) => this.renderSearchResult(riding))}
              </div>
            ) : null}
          </div>
        </header>
        <div style={{ position: "relative" }}>
          <div className="map" onClick={() => this.onClickNoRiding()}>
            <Map
              onClick={(r) => this.onClickRiding(r)}
              onHoverOn={(r, p, c) => this.onHoverOn(r, p, c)}
              onHoverOff={() => this.onHoverOff()}
              lang={this.state.lang}
              election={this.state.election}
              searchText={this.state.searchText}
            />
            {this.state.currentRiding ? this.renderTooltip(this.state.currentRiding) : null}
          </div>
          <div className="overlay">
            {ridingInfo ? this.renderInfo(ridingInfo) : this.renderSummary()}
          </div>
        </div>
        <footer>
          {this.state.lang === Lang.fr ? (
            <div className="columns">
              <div className="column">
                <h4>C’est quoi ça?</h4>

                <p>Au Canada, chaqun des 338 membres du Parlement à <a href="https://www.ourcommons.ca/fr">la Chambre des communes</a> représente une circonscription. Pour la plupart, les circonscriptions sont réparties uniformément par la population au lieu de la géographie.* En 2021, la population moyenne d’une circonscription est d’environ 112&nbsp;800.</p>

                <p>Ce <a href="https://fr.wikipedia.org/wiki/Cartogramme">cartogramme</a> fait chaque circonscription la même taille et la même forme. L’accent est mis sur la répartition de la population. En général, les circonscriptions voisines sont proches les unes des autres, et la forme du pays reste évidente.</p>

                <p><small>*Certaines zones rurales, les trois territoires, et l’Île-du-Prince-Edouard ont des circonscriptions dont la population est notablement moins nombreuse.</small></p>
              </div>

              <div className="column">
                <h4>Crédits</h4>

                <p>Copyright &copy; 2019 <a href="https://attaboy.ca/">Luke Andrews</a></p>

                <p>
                  <a href="https://github.com/attaboy/electoralcartogram">Code source sur GitHub</a>
                  <span> · Résultats des élections copiés de <a href="https://elections.ca/content.aspx?section=ele&dir=pas&document=index&lang=f">Élections Canada</a></span>
                </p>

                <p>Commentaires (et corrections de français) encouragés: <a href="https://twitter.com/attaboy">@attaboy</a></p>

                <p>Édition précédente: <a href="/2011/">2011</a></p>

                {process.env.buildTimestamp ? (
                  <p>v{process.env.version}, dernière modification: {this.formatDate(new Date(process.env.buildTimestamp))}</p>
                ) : null}
              </div>
            </div>
          ): (
            <div className="columns">
              <div className="column">
                <h4>What’s this?</h4>

                <p>In Canada, each of the 338 Members of Parliament in the <a href="https://www.ourcommons.ca/en">House of Commons</a> represent a riding (also known as an electoral district). In general, the ridings are divided evenly by population rather than geographical size.* As of 2021, the average population of a riding is approximately 112,800.</p>

                <p>In this <a href="https://en.wikipedia.org/wiki/Cartogram">cartogram</a>, each riding is the same size and shape, so population distribution is emphasized. In general, ridings that border each other geographically are shown near each other, with the rough shape of the country preserved.</p>

                <p><small>*Some rural areas, the three territories, and Prince Edward Island have ridings with notably smaller populations.</small></p>
              </div>

              <div className="column">
                <h4>Credits</h4>

                <p>Copyright &copy; 2019 <a href="https://attaboy.ca/">Luke Andrews</a></p>

                <p>
                  <a href="https://github.com/attaboy/electoralcartogram">Source code on GitHub</a>
                  <span> · Electoral results copied from <a href="https://elections.ca/content.aspx?section=ele&dir=pas&document=index&lang=e">Elections Canada</a></span>
                </p>

                <p>Feedback welcome: <a href="https://twitter.com/attaboy">@attaboy</a></p>

                <p>Previous edition: <a href="/2011/">2011</a></p>

                {process.env.buildTimestamp ? (
                  <p>v{process.env.version}, last modified: {this.formatDate(new Date(process.env.buildTimestamp))}</p>
                ) : null}
              </div>
            </div>
          )}
        </footer>
      </div>
    )
  }
}

export default Home;
