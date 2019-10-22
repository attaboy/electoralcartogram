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
    if (this.props.searchText === this.props.data[this.props.lang]) {
      return {
        fill: "white"
      }
    } else {
      return {};
    }
  }

  ridingClassName(result: Result | undefined): string {
    const partyId = result ? (result.currentParty || result.party) : "";
    const party = Party.findByRawName(partyId);
    return party.className;
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
        <path className={`ridingPath ${this.ridingClassName(result.winner)}`} d={this.props.data.pathD} style={this.ridingStyle(result.winner)} />
      </g>
    );
  }
}

export {Riding};
