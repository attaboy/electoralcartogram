import * as React from 'react';
import {Map} from '../components/map';
import { RidingData, ProvinceData } from '../components/data';

interface State {
  currentHover: string
}

class Home extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      currentHover: ""
    };
  }

  onHoverOn(ridingData: RidingData, provinceData: ProvinceData): void {
    const province = provinceData.label;
    const riding = ridingData.label;
    const text = province === riding ? province : `${province}: ${riding}`;
    this.setState({
      currentHover: text
    });
  }

  onHoverOff(): void {
    this.setState({
      currentHover: ""
    });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "black", color: "white" }}>{this.state.currentHover}<br /></div>
        <Map onHoverOn={(r, p) => this.onHoverOn(r, p)} onHoverOff={() => this.onHoverOff()} />
      </div>
    )
  }
}

export default Home;
