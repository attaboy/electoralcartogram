import React, { CSSProperties } from 'react';
import { DateResults, Result } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Lang } from '../pages';

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
    const party = result ? (result.currentParty || result.party) : "";
    const alpha = this.state.hover ? "0.75" : "1.0";

    if (/Liberal/.test(party)) {
      return `hsla(359, 78%, 47%, ${alpha})`;
    } else if (/Conservative/.test(party)) {
      return `hsla(214, 63%, 31%, ${alpha})`;
    } else if (/NDP/.test(party)) {
      return `hsla(33, 94%, 55%, ${alpha})`;
    } else if (/Green/.test(party)) {
      return `hsla(116, 49%, 41%, ${alpha})`;
    } else if (/Bloc Québécois/.test(party)) {
      return `hsla(200, 70%, 50%, ${alpha})`;
    } else if (/People's Party/.test(party)) {
      return `hsla(280, 57%, 56%, ${alpha})`;
    } else {
      return `hsla(0, 0%, 58%, ${alpha})`;
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
