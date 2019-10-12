import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData, ridingDataSet } from '../data/riding_data';
import { DateResults, Result } from '../data/result_data';
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

interface State {
  currentRiding: CurrentRidingInfo | null
}

class Home extends React.Component<{}, State> {
  updateTimer: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentRiding: null
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
    const province = provinceData.en;
    const riding = ridingData.en;
    const ridingText = province === riding ? province : `${province}: ${riding}`;
    const dateString = date ? new Date(date).toLocaleDateString() : "unknown date";
    const partyString = result ? (
      result.currentParty ? `${result.currentParty} (originally ${result.party})` : result.party
    ) : ""
    const resultText = result ? `${partyString} — ${result.candidate} (${dateString})` : "(unknown)"
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

  renderInfo(ridingInfo: CurrentRidingInfo) {
    const candidate = ridingInfo.candidate.replace(/ \*\*$/, "");
    const elected = / \*\*$/.test(ridingInfo.candidate) ? `Re-elected ${ridingInfo.date}` : `Elected ${ridingInfo.date}`;
    const ridingName = ridingInfo.riding.replace(/\/.+$/, "");
    const party = Party.findByRawName(ridingInfo.party);
    const originalParty = ridingInfo.originalParty ? Party.findByRawName(ridingInfo.originalParty) : null;
    return (
      <div>
        <div><img src={ridingInfo.flag} style={{ height: "1.5rem", marginBottom: "0.25em" }} /></div>
        <h5>{ridingInfo.province}</h5>
        <h3 style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.5)", paddingBottom: "0.25em", marginBottom: "0.25em" }}>{ridingName}</h3>
        <div>{candidate}</div>
        <div style={{ marginBottom: "0.25em" }}>
          <div style={{ display: "inline-block", width: "0.9rem", height: "0.9rem", verticalAlign: "middle", backgroundColor: party.color, marginRight: "0.5em" }}></div>
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <b>{party.en} </b>
            {originalParty ? (
              <i>(originally {originalParty.en})</i>
            ) : null}
          </div>
        </div>
        <div style={{ fontSize: "0.9rem" }}>
          <div>{elected}</div>
          <div>{ridingInfo.votePercentage}% of vote (+{ridingInfo.majorityPercentage}% lead)</div>
        </div>
      </div>
    );
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
            width: "33vw",
            height: "25vw",
            overflow: "auto"
          }}>
            {ridingInfo ? this.renderInfo(ridingInfo) : null}
          </div>
          <Map onHoverOn={(r, p, rs, d) => this.onHoverOn(r, p, rs, d)} onHoverOff={() => this.onHoverOff()} />
        </div>
      </div>
    )
  }
}

export default Home;
