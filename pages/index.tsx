import Head from 'next/head';
import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData, ridingDataSet } from '../data/riding_data';
import { DateResults, Result, resultsSet, findWinnerFor } from '../data/result_data';
import Party from '../data/party';
import "../css/styles.less";
import { Coordinates } from '../components/riding';

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
  election: 2015 | 2019
  currentRiding: CurrentRidingInfo | null
  coords: Coordinates
  searchText: string
  searchResultsVisible: boolean
  lang: Lang
}

interface Summary {
  [partyId: string]: number
}

class Home extends React.Component<{}, State> {
  updateTimer: number | undefined;
  searchResultsTimer: number | undefined;
  summaryByParty: Summary

  constructor(props: {}) {
    super(props);
    this.state = {
      election: 2015,
      currentRiding: null,
      coords: { x: 0, y: 0 },
      searchText: "",
      searchResultsVisible: false,
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

  getRidingInfo(ridingData: RidingData, provinceData: ProvinceData, result: Result | undefined, date: string | undefined): CurrentRidingInfo | null {
    const province = provinceData[this.state.lang];
    const riding = ridingData[this.state.lang];
    const dateString = date ? this.formatDate(new Date(date)) : "unknown date";
    return result ? {
      province: province,
      flag: provinceData.flagUrl,
      riding: riding,
      candidate: result.candidate,
      date: dateString,
      party: result.currentParty || result.party,
      originalParty: result.currentParty ? result.party : undefined,
      votePercentage: result.votePercentage,
      majorityPercentage: result.majorityPercentage
    } : null
  }

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData, result: Result | undefined, date: string | undefined, coords: Coordinates): void {
    this.delayUpdate(this.getRidingInfo(ridingData, provinceData, result, date), coords, 100);
  }

  onClickRiding(ridingData: RidingData): void {
    this.setState({
      searchText: ridingData[this.state.lang]
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
            <tr>
              <td colSpan={2}>
                {this.state.lang === Lang.fr ? (
                  <span>
                    <b>42<sup>me</sup> Parlement</b> (2015-10-19—2019-10-20)
                  </span>
                ) : (
                  <span>
                    <b>42<sup>nd</sup> Parliament</b> (2015-10-19—2019-10-20)
                  </span>
                )}
              </td>
            </tr>
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
    if (this.state.lang === Lang.fr) {
      return `${votePercentage} % du vote (+${majorityPercentage === 1 ? "point" : "points"} en avant)`;
    } else {
      return `${votePercentage}% of vote (${majorityPercentage === 1 ? "point" : "points"} ahead)`;
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
    const result = findWinnerFor(riding.index);
    if (result) {
      return {
        province: province[this.state.lang],
        flag: province.flagUrl,
        riding: riding[this.state.lang],
        candidate: result.winner.candidate,
        party: result.winner.currentParty || result.winner.party,
        originalParty: result.winner.currentParty ? result.winner.party : undefined,
        date: this.formatDate(new Date(result.date)),
        votePercentage: result.winner.votePercentage,
        majorityPercentage: result.winner.majorityPercentage
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
    return (
      <div>
        <Head>
          <title>{title}</title>
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <h1>
            <img src="/images/flags/Flag_of_Canada.png" style={{ height: "0.8em", paddingBottom: "0.2em", marginRight: "0.4em", verticalAlign: "bottom" }} />
            <span>{title} </span>
          </h1>
          <div id="langButtons" className="radioButtons">
            <button className={`radio ${this.state.lang === Lang.en ? "active" : ""}`} type="button" onClick={() => this.setEnglish()}>English</button>
            <button className={`radio ${this.state.lang === Lang.fr ? "active" : ""}`} type="button" onClick={() => this.setFrench()}>Français</button>
          </div>
          <div id="electionButtons" className="radioButtons">
            <button className={`radio ${this.state.election === 2015 ? "active" : ""}`} type="button" onClick={() => {}}>2015</button>
            <button title={this.state.lang === Lang.fr ? "À venir" : "Coming soon"} className={`radio ${this.state.election === 2019 ? "active" : ""}`} type="button" onClick={() => {}} disabled={true}>2019</button>
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
              onHoverOn={(r, p, rs, d, c) => this.onHoverOn(r, p, rs, d, c)}
              onHoverOff={() => this.onHoverOff()}
              lang={this.state.lang}
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

                <p>Au Canada, chaqun des 338 membres du Parlement à <a href="https://www.ourcommons.ca/fr">la Chambre des communes</a> représente une circonscription. Pour la plupart, les circonscriptions sont réparties uniformément par la population au lieu de la géographie.* En 2019, la population moyenne d’une circonscription est d’environ 111&nbsp;200.</p>

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

                <p>Version précédente: <a href="/2011/">2011</a></p>
              </div>
            </div>
          ): (
            <div className="columns">
              <div className="column">
                <h4>What’s this?</h4>

                <p>In Canada, each of the 338 Members of Parliament in the <a href="https://www.ourcommons.ca/en">House of Commons</a> represent a riding (also known as an electoral district). In general, the ridings are divided evenly by population rather than geographical size.* As of 2019, the average population of a riding is approximately 111,200.</p>

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

                <p>Previous version: <a href="/2011/">2011</a></p>
              </div>
            </div>
          )}
        </footer>
      </div>
    )
  }
}

export default Home;
