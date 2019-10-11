import React, { CSSProperties } from 'react';

interface RidingData {
  id: string
  label: string
  transform: string
  pathD: string
}

class Riding extends React.PureComponent<{
  data: RidingData
  onMouseOver: (r: RidingData) => void
  onMouseOut: () => void
}> {
  ridingStyle(): CSSProperties {
    return {
      fill: "white",
      fillRule: "nonzero",
      stroke: "black",
      strokeWidth: "0.5px",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10
    };
  }

  render() {
    return (
      <g id={this.props.data.id} data-label={this.props.data.label} transform={this.props.data.transform}
        onMouseOver={() => this.props.onMouseOver(this.props.data)}
        onMouseOut={() => this.props.onMouseOut()}
      >
        <path d={this.props.data.pathD} style={this.ridingStyle()} />
        {/* <g transform="matrix(1,0,0,1,310.576,282.495)">
          <text x="0px" y="0px" style={this.textStyle()}>42</text>
        </g> */}
      </g>
    );
  }
}

export {Riding};
