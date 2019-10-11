import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData } from '../data/riding_data';
import { DateResults, Result } from '../data/result_data';

interface State {
  currentRiding: string
  currentResult: string
}

class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentRiding: "",
      currentResult: ""
    };
  }

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData, result: Result | undefined, date: string | undefined): void {
    const province = provinceData.label;
    const riding = ridingData.label;
    const ridingText = province === riding ? province : `${province}: ${riding}`;
    const dateString = date ? new Date(date).toLocaleDateString() : "unknown date";
    const partyString = result ? (
      result.currentParty ? `${result.currentParty} (originally ${result.party})` : result.party
    ) : ""
    const resultText = result ? `${partyString} — ${result.candidate} (${dateString})` : "(unknown)"
    this.setState({
      currentRiding: ridingText,
      currentResult: resultText
    });
  }

  onHoverOff(): void {
    this.setState({
      currentRiding: "",
      currentResult: ""
    });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "black", color: "white" }}>
          <div>{this.state.currentRiding}<br /></div>
          <div>{this.state.currentResult}<br /></div>
        </div>
        <Map onHoverOn={(r, p, rs, d) => this.onHoverOn(r, p, rs, d)} onHoverOff={() => this.onHoverOff()} />
      </div>
    )
  }
}

export default Home;
