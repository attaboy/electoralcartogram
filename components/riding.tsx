import React, { CSSProperties } from 'react';
import { DateResults, Result } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Lang } from '../pages';
import Party from '../data/party';

interface Props {
  data: RidingData
  results: DateResults[]
  onMouseOver: (result: Result | undefined, date: string | undefined) => void
  onMouseOut: () => void
}

interface State {
  hover: boolean
}

class Riding extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHoverOn(result: Result | undefined, date: string | undefined): void {
    this.setState({ hover: true });
    this.props.onMouseOver(result, date);
  }

  onHoverOff(): void {
    this.setState({ hover: false });
    this.props.onMouseOut();
  }

  colorForParty(result: Result | undefined): string {
    if (this.state.hover) {
      return "white";
    } else {
      const partyId = result ? (result.currentParty || result.party) : "";
      const party = Party.findByRawName(partyId);
      return party.color;
    }
  }

  getResult(): {
    winner: Result | undefined,
    date: string | undefined
  } {
    let winner: Result | undefined;
    let date: string | undefined;
    this.props.results.forEach((dateResults) => {
      const resultWinner = dateResults.results.find((ea) => ea.majority > 0);
      if (resultWinner) {
        winner = resultWinner;
        date = dateResults.date;
      }
    });
    return {
      winner: winner,
      date: date
    };
  }

  ridingStyle(result: Result | undefined): CSSProperties {
    return {
      fill: this.colorForParty(result),
      fillRule: "nonzero",
      stroke: "black",
      strokeWidth: "0.5px",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10
    };
  }

  render() {
    const result = this.getResult();
    return (
      <g id={this.props.data.id} transform={this.props.data.transform}
        onMouseOver={() => this.onHoverOn(result.winner, result.date)}
        onMouseOut={() => this.onHoverOff()}
      >
        <path d={this.props.data.pathD} style={this.ridingStyle(result.winner)} />
        {/* <g transform="matrix(1,0,0,1,310.576,282.495)">
          <text x="0px" y="0px" style={this.textStyle()}>42</text>
        </g> */}
      </g>
    );
  }
}

export {Riding};
