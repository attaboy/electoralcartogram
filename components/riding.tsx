import React, { CSSProperties } from 'react';
import { DateResults, Result } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Lang } from '../pages';
import Party from '../data/party';

interface Props {
  data: RidingData
  results: DateResults[]
  onMouseOver: (result: Result | undefined, date: string | undefined, coords: Coordinates) => void
  onClick: (data: RidingData) => void
  onMouseOut: () => void
  searchText: string
  lang: Lang
}

interface State {
  hover: boolean
}

export interface Coordinates {
  x: number
  y: number
}

class Riding extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHoverOn(result: Result | undefined, date: string | undefined, coords: Coordinates): void {
    this.setState({ hover: true });
    this.props.onMouseOver(result, date, coords);
  }

  onHoverOff(): void {
    this.setState({ hover: false });
    this.props.onMouseOut();
  }

  onClick(e: React.MouseEvent<SVGGElement>): void {
    this.props.onClick(this.props.data);
    e.stopPropagation();
  }

  colorForParty(result: Result | undefined): string {
    const partyId = result ? (result.currentParty || result.party) : "";
    const party = Party.findByRawName(partyId);
    const color = party.color;
    if (this.props.searchText === this.props.data[this.props.lang]) {
      return "white";
    } else {
      return color;
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
      <g className="riding" id={this.props.data.id} transform={this.props.data.transform}
        onMouseOver={(event) => this.onHoverOn(result.winner, result.date, {
          x: event.clientX,
          y: event.clientY
        })}
        onMouseOut={() => this.onHoverOff()}
        onClick={(e) => this.onClick(e)}
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
