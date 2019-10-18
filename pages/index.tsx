import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData, ridingDataSet } from '../data/riding_data';
import { DateResults, Result, resultsSet } from '../data/result_data';
import Party from '../data/party';

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

class Home extends React.Component<{}, State> {
  updateTimer: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentRiding: null,
      lang: Lang.fr
    };
  }

  delayUpdate(riding: CurrentRidingInfo | null) {
    window.clearTimeout(this.updateTimer);
    this.updateTimer = window.setTimeout(() => {
      this.setState({
        currentRiding: riding
      });
    }, 50);
  }

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData, result: Result | undefined, date: string | undefined): void {
    const province = provinceData[this.state.lang];
    const riding = ridingData[this.state.lang];
    const dateString = date ? new Date(date).toLocaleDateString() : "unknown date";
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
    } : null);
  }

  onHoverOff(): void {
    this.delayUpdate(null);
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
    return this.state.lang === Lang.fr ? `(élu(e) comme ${party[this.state.lang]})` : `(elected as ${party[this.state.lang]})`;
  }

  renderSummary() {
    const partyByRiding: { [ridingId: string] : string } = {};
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
    return (
      <div>
        {Object.keys(byParty).sort((a, b) => {
          return byParty[b] - byParty[a];
        }).map((party) => {
          return (
            <div key={party}>
              {party}: {byParty[party]}
            </div>
          );
        })}
      </div>
    );
  }

  renderInfo(ridingInfo: CurrentRidingInfo) {
    const candidate = ridingInfo.candidate.replace(/ \*\*$/, "");
    const elected = / \*\*$/.test(ridingInfo.candidate) ? this.labelForReElected(ridingInfo.date) : this.labelForElected(ridingInfo.date);
    const ridingName = ridingInfo.riding.replace(/\/.+$/, "");
    const party = Party.findByRawName(ridingInfo.party);
    const originalParty = ridingInfo.originalParty ? Party.findByRawName(ridingInfo.originalParty) : null;
    return (
      <div>
        <div><img src={ridingInfo.flag} style={{ height: "1.5rem", marginBottom: "0.25em" }} /></div>
        {ridingName === ridingInfo.province ? null : (
          <h5>{ridingInfo.province}</h5>
        )}
        <h3 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.5)", paddingBottom: "0.25em", marginBottom: "0.25em" }}>{ridingName}</h3>
        <div>{candidate}</div>
        <div style={{ marginBottom: "0.25em" }}>
          <div style={{ display: "inline-block", width: "0.9rem", height: "0.9rem", verticalAlign: "middle", backgroundColor: party.color, marginRight: "0.5em" }}></div>
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <b>{party[this.state.lang]} </b>
            {originalParty ? (
              <i>{this.electedAs(originalParty)}</i>
            ) : null}
          </div>
        </div>
        <div style={{ fontSize: "0.9rem" }}>
          <div>{elected}</div>
          <div>{ridingInfo.votePercentage}% of vote (+{ridingInfo.majorityPercentage} point lead)</div>
        </div>
      </div>
    );
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
    const ridingInfo = this.state.currentRiding;
    return (
      <div>
        <style global jsx>{`
          body {
            font-family: 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', sans-serif;
            background-color: black;
            margin: 0;
            padding: 0;
          }

          h1, h2, h3, h4, h5, h6 { margin: 0 }
          h5 { text-transform: uppercase }

        `}</style>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white",
            padding: "1em",
            lineHeight: 1.3,
            width: "30vw",
            height: "25vw",
            overflow: "auto"
          }}>
            {ridingInfo ? this.renderInfo(ridingInfo) : this.renderSummary()}
          </div>
          <div style={{ backgroundColor: "black", padding: "1em" }}>
            <button type="button" onClick={() => this.setEnglish()}>English</button>
            <button type="button" onClick={() => this.setFrench()}>Français</button>
          </div>
          <Map onHoverOn={(r, p, rs, d) => this.onHoverOn(r, p, rs, d)} onHoverOff={() => this.onHoverOff()} lang={this.state.lang} />
        </div>
      </div>
    )
  }
}

export default Home;
