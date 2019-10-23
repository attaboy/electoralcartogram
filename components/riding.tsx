import React, { CSSProperties } from 'react';
import { DateResults, Result, findWinnerFor } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Lang, Election } from '../pages';
import Party from '../data/party';

interface Props {
  data: RidingData
  results: DateResults[]
  onMouseOver: (coords: Coordinates) => void
  onClick: (data: RidingData) => void
  onMouseOut: () => void
  searchText: string
  lang: Lang
  election: Election
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

  onHoverOn(coords: Coordinates): void {
    this.setState({ hover: true });
    this.props.onMouseOver(coords);
  }

  onHoverOff(): void {
    this.setState({ hover: false });
    this.props.onMouseOut();
  }

  onClick(e: React.MouseEvent<SVGGElement>): void {
    this.props.onClick(this.props.data);
    e.stopPropagation();
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
    const result = findWinnerFor(this.props.data.index, this.props.election);
    return (
      <g className="riding" id={this.props.data.id} transform={this.props.data.transform}
        onMouseOver={(event) => this.onHoverOn({
          x: event.clientX,
          y: event.clientY
        })}
        onMouseOut={() => this.onHoverOff()}
        onClick={(e) => this.onClick(e)}
      >
        <path className={`ridingPath ${result ? this.ridingClassName(result.winner) : ""}`} d={this.props.data.pathD} style={result ? this.ridingStyle(result.winner) : undefined} />
      </g>
    );
  }
}

export {Riding};
