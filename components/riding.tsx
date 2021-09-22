import React, { CSSProperties } from 'react';
import { DateResults, Result, findWinnerFor } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Lang, Election } from '../pages';
import Party from '../data/party';
import { Utils } from '../data/utils';

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

  isActiveRiding(): boolean {
    return this.props.searchText === this.props.data[this.props.lang];
  }

  ridingClassName(result: Result | undefined): string {
    const hasChangedParty = result && result.changedParty && Utils.electionToDate(result.changedParty) <= Utils.electionToDate(this.props.election);
    const partyId = result ? (
      hasChangedParty && result.currentParty ? result.currentParty : result.party
    ) : (
      ""
    );
    const party = Party.findByRawName(partyId);
    return party.className;
  }

  render() {
    const result = findWinnerFor(this.props.data.index, this.props.election);
    const className = result ? this.ridingClassName(result.winner) : "";
    return (
      <g className={`riding ${className}`} id={this.props.data.id} transform={this.props.data.transform}
        onMouseOver={(event) => this.onHoverOn({
          x: event.clientX,
          y: event.clientY
        })}
        onMouseOut={() => this.onHoverOff()}
        onClick={(e) => this.onClick(e)}
      >
        <path className={`ridingPath ${className}`} d={this.props.data.pathD}>
          {this.isActiveRiding() ? (
            <animate attributeType="CSS" attributeName="fill" values={
              `#FFFFFF; #FFFFFF; inherit; inherit; #FFFFFF; #FFFFFF`
            } keyTimes="0; 0.25; 0.45; 0.55; 0.75; 1" dur="3s" repeatCount="indefinite" />
          ) : null}
        </path>
      </g>
    );
  }
}

export {Riding};
