import React, { CSSProperties } from 'react';
import { Province } from './province';
import { Riding } from './riding';
import {ridingDataSet, RidingData, ProvinceData} from "../data/riding_data";
import {resultsSet, DateResults, Result} from '../data/result_data';

class Map extends React.PureComponent<{
  onHoverOn: (riding: RidingData, province: ProvinceData, result: Result | undefined, date: string | undefined) => void
  onHoverOff: () => void
}> {
  svgStyle(): CSSProperties {
    return {
      "fill": "none",
      "fillRule": "evenodd",
      "clipRule": "evenodd",
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 1.5
    };
  }

  oceanStyle(): CSSProperties {
    return {
      "fill": "rgb(206,223,239)"
    }
  }

  foreignLandStyle(): CSSProperties {
    return {
      fill: "rgb(178, 190, 200)",
      fillRule: "nonzero"
    }
  }

  foreignLandBorderStyle(): CSSProperties {
    return {
      fill: "none",
      stroke: "rgb(178, 190, 200)",
      strokeWidth: 2
    };
  }

  canadaLandStyle(): CSSProperties {
    return {
      fill: "rgb(168, 208, 200)",
      fillRule: "nonzero"
    };
  }

  borderStyle(): CSSProperties {
    return {
      fill: "none",
      stroke: "black",
      strokeWidth: "2px"
    };
  }

  countryTextStyle(): CSSProperties {
    return {
      fontFamily: "'HelveticaNeue-Bold', 'Helvetica Neue'",
      fontWeight: 700,
      fontSize: "18px",
      fill: "rgb(132, 149, 164)"
    }
  }

  waterTextStyle(): CSSProperties {
    return {
      fontFamily: "'HelveticaNeue', 'Helvetica Neue'",
      fontSize: "10px",
      fill: "rgb(126, 171, 213)"
    };
  }

  getResultsForRiding(riding: RidingData): DateResults[] {
    return resultsSet.map((dateResults) => {
      return Object.assign({}, dateResults, {
        results: dateResults.results.filter((result) => result.index === riding.index)
      });
    });
  }

  render() {
    return (
      <svg width="100%" viewBox="0 0 760 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <g id="Electoral-Cartogram-of-Canada" data-label="Electoral Cartogram of Canada" transform="matrix(1,0,0,1.02041,-100,-51.0204)">
          <rect x="100" y="50" width="760" height="490" style={this.svgStyle()} />
          <clipPath id="_clip1">
            <rect x="100" y="50" width="760" height="490" />
          </clipPath>
          <g clipPath="url(#_clip1)">
            <g id="Oceans" transform="matrix(0.791667,0,0,0.963667,100,50)">
              <rect x="0" y="0" width="960" height="600" style={this.oceanStyle()} />
            </g>
            <g id="United-States" data-label="United States" transform="matrix(1,0,0,0.98,-119.8,-67.6)">
              <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              <g transform="matrix(1,0,0,1,-15,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,1.42109e-13)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-45,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-60,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,-40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,-30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,-20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,0)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,0)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,255,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,270,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,270,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,285,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,300,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,315,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,315,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,315,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,315,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,330,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,330,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,390,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,420,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,0)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,-20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,-40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,-50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,-30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,-40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,-20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,-30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,600,120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,615,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,615,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,630,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,645,130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,600,140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,555,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,540,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,525,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,570,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,600,200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,615,190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,585,170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,600,160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,510,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,450,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,480,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,360,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,330,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,329.9,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,329.9,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,315,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,345,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,405,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,435,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,465,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,495,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,375,310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,285,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,285,230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,300,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-15,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-30,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,180,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,15,-50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,30,-40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,45,-30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,60,-20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,75,-10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,90,0)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,105,10)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,120,20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,135,30)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,150,40)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,165,50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,180,60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,-20)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.foreignLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,219.8,120)">
                <path d="M240,290L250,290L255,280L265,280" style={this.foreignLandBorderStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,219.8,120)">
                <path d="M235,299.677L225,300L235,299.677Z" style={this.foreignLandBorderStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,219.8,120)">
                <path d="M240,290L235,299.677" style={this.foreignLandBorderStyle()} />
              </g>
            </g>
            <g id="Rest-of-Canada" data-label="Rest of Canada" transform="matrix(1,0,0,0.98,100,40.2)">
              <g transform="matrix(1,0,0,1,50.2,-70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,5.2,-80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,50.1885,-90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-50)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-70)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-90)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-100)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-110)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-130)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,140.2,-150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,140.2,-190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,185.2,-200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,170.2,-210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,155.2,-200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-144.8,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-144.8,-300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-129.8,-310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-114.8,-300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-114.8,-320)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-99.8,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-84.8,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-84.8,-300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-144.8,-320)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-159.8,-310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-174.8,-320)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-129.8,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-129.8,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-114.8,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-114.8,-260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-99.8,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-84.8,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-54.8,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-24.8,-240.226)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-9.8,-230.226)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,5.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,5.2,-200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-190)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,50.2,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,140.2,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,140.2,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,155.2,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,170.2,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,140.2,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-300)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,125.2,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,110.2,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,80.2,-310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,95.2,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,155.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,170.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,185.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,200.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,50.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,5.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-39.8,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-39.8,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-54.8,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-39.8,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-9.8,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-9.8,-310)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,50.2,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,50.2,-290)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-180)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-170)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,20.2,-150)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,5.2,-140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-120)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-80)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-140)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,35.2,-160)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-69.8,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-69.8,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-99.8,-270)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,-114.8,-280)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,215.2,-200)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,200.2,-210)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,215.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,230.2,-230)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,245.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,245.2,-260)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,260.2,-250)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,275.2,-240)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,185.2,-220)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,65.2,-60)">
                <path d="M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z" style={this.canadaLandStyle()} />
              </g>
            </g>
            <g id="Labels" transform="matrix(1,0,0,0.98,100,50)">
              <g transform="matrix(1,0,0,1,0.127604,221.621)">
                <text x="42.872px" y="235.379px" style={this.countryTextStyle()}>UNITED STATES                                                 OF AMERICA</text>
              </g>
              <g transform="matrix(1,0,0,1,346.773,124.963)">
                <text x="51.929px" y="229.667px" style={this.waterTextStyle()}>Lake Ontario</text>
              </g>
              <g transform="matrix(1,0,0,1,152.128,34.4731)">
                <text x="48.432px" y="229.667px" style={this.waterTextStyle()}>Lake</text>
                <text x="53.992px" y="241.667px" style={this.waterTextStyle()}>Superior</text>
              </g>
              <g transform="matrix(1,0,0,1,163.128,114.473)">
                <text x="48.432px" y="241.667px" style={this.waterTextStyle()}>Lake</text>
                <text x="42.872px" y="253.667px" style={this.waterTextStyle()}>Huron</text>
              </g>
              <g transform="matrix(1,0,0,1,93.1276,118.736)">
                <text x="56.772px" y="241.667px" style={this.waterTextStyle()}>Lake</text>
                <text x="42.872px" y="253.667px" style={this.waterTextStyle()}>Michigan</text>
              </g>
              <g transform="matrix(1,0,0,1,287.128,-99.3114)">
                <text x="46.847px" y="229.667px" style={this.waterTextStyle()}>Hudson’s Bay</text>
              </g>
              <g transform="matrix(1,0,0,1,-30.5495,-209.311)">
                <text x="49.529px" y="229.667px" style={this.waterTextStyle()}>Paciﬁc Ocean</text>
              </g>
              <g transform="matrix(1,0,0,1,594.451,227.473)">
                <text x="47.764px" y="229.667px" style={this.waterTextStyle()}>Atlantic Ocean</text>
              </g>
              <g transform="matrix(1,0,0,1,540.128,-147.527)">
                <text x="62.967px" y="229.667px" style={this.waterTextStyle()}>Gulf of</text>
                <text x="48.612px" y="241.667px" style={this.waterTextStyle()}>St. Lawrence</text>
              </g>
              <g transform="matrix(1,0,0,1,183.721,263.671)">
                <text x="89.196px" y="229.667px" style={this.waterTextStyle()}>Lake        Erie</text>
              </g>
            </g>
            {ridingDataSet.map(province => (
              <Province key={province.id} id={province.id} label={province.en} transform={province.transform}>
                {province.ridings.map(riding => {
                  const results = this.getResultsForRiding(riding);
                  return (
                    <Riding
                      key={riding.id}
                      data={riding}
                      results={results}
                      onMouseOver={(result, date) => this.props.onHoverOn(riding, province, result, date)}
                      onMouseOut={this.props.onHoverOff}
                    />
                  )
                })}
              </Province>
            ))}
            <g id="Borders" transform="matrix(1,0,0,0.98,100,50)">
              <g id="BC-Alberta-Border" data-label="BC/Alberta Border" transform="matrix(1,0,0,1,0,-10)">
                <path d="M75,149.721L85,150L90.05,160L100,160L105.05,170L115,169.739L120,179.739L130,179.739L135.05,190L145,190L150,200L160,200L165,190L160,180L165,170L160,160L165,150L175,150L180,140L175,129.721L180,120L175,110L180,100L190,100L195,90" style={this.borderStyle()} />
              </g>
              <g id="Alberta-border" data-label="Alberta border" transform="matrix(1,0,0,1,-100,-60)">
                <g id="Alberta-Sask-Border" data-label="Alberta/Sask Border" transform="matrix(1,0,0,1,100,50)">
                  <path d="M190,220L195.05,210L205,210L210.05,200L220,200L225,190L220,180L225,170L235,170L240,160L250,160L255,150L265,150L270,160L280,160" style={this.borderStyle()} />
                </g>
                <g transform="matrix(1,0,0,1,100,50)">
                  <path d="M280,160L285.05,150" style={this.borderStyle()} />
                </g>
                <g transform="matrix(1,0,0,1,100,50)">
                  <path d="M190,220L180,220L175,210L165,210L160,199.739" style={this.borderStyle()} />
                </g>
              </g >
              <g id="Sask-border" data-label="Sask border" transform="matrix(1,0,0,1,0,-10)">
                <path d="M190,220L195,230L205,230L210,240L220,240L225,250L235,250L240,240L235,230L240,219.239L250,219.239L255,210L250,200L255.05,190L265,190L270,180L280,180" style={this.borderStyle()} />
              </g>
              <g transform="matrix(1,0,0,1,0,-10)">
                <g id="Manitoba-border" data-label="Manitoba border">
                  <path id="Manitoba-border1" data-label="Manitoba border" d="M235,250L240,259.239L250.05,259.239L255.05,269.239L265,269.239L270,259.9L280.05,259.9L285,250L295,250L300,240L295,229.632L300,220L310,220" style={this.borderStyle()} />
                </g>
              </g >
              <g id="Quebec-border" data-label="Quebec border" transform="matrix(1,0,0,1,0,-10)">
                <path d="M370,200L375,209.703L385,209.703L390,200L400,200L405.3,210L415,210L420,200L430,200L435,190L445,190L450,200L460,200L465,210L475,210L480,220L475,230L465,230L460,240L465,250L475,250L480,260L490,260L495,250L505,250L510,260L520,260L525,270L535,270L540,260L550,260L555,250L565,250L570,260L580,260L585,250L595,250L600,240L610,240L615,250L625,250.2L630,240L640,240.2L645,230.2L640,220L630,220L625,210L615,210L610,200L600,200L595,190L600,180L595,170L600,160L610,160L615,150L610,140L615,130L625,130L630,120" style={this.borderStyle()} />
              </g>
              <g id="New-Brunswick-border" data-label="New Brunswick border" transform="matrix(1,0,0,1,0,-10)">
                <path d="M700,180L705,170" style={this.borderStyle()} />
              </g>
              <g id="Ontario-border" data-label="Ontario border">
                <path d="M235,400L240,410" style={this.borderStyle()} />
                <path d="M240,430L235,440L240,450L235,460L240,470" style={this.borderStyle()} />
                <path d="M360,470L355,460L360,450L370,450L375,460L385,460L390,450L400,450L405,440L400,430L390,430L385,420" style={this.borderStyle()} />
              </g>
              <path id="Quebec-Labrador" data-label="Quebec/Labrador" d="M570,90L565,80L570,70" style={this.borderStyle()} />
            </g >
          </g>
        </g>
      </svg>
    );
  }
}

export { Map };
