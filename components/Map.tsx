import { Province } from "./Province";
import { Riding, Coordinates } from "./Riding";
import { RidingData, ProvinceData } from "../data/riding_data";
import {
  electionUses2025RidingBoundaries,
  getRidingDatasetForElection,
} from "../data/ridingDatasetForElection";
import { type Election } from "../pages";
import { Lang, useLang } from "../hooks/useLang";
import { getResultsForRiding } from "../data/result_data";
import { Borders2025 } from "./Borders2025";
import { Borders2015 } from "./Borders2015";
import {
  MAP_BG_SHIFT_X,
  MAP_BG_SHIFT_Y,
  MAP_FRAME_X,
  MAP_FRAME_Y,
  MAP_PROVINCIAL_NUDGE_Y,
  MAP_RIDING_SHIFT_X,
  MAP_RIDING_SHIFT_Y,
  MAP_VIEWBOX_STR,
} from "../data/mapLayout.generated";

interface Labels {
  Lake: string;
  USA: string;
  Ontario: string;
  Superior: string;
  Huron: string;
  Michigan: string;
  "Hudson’s Bay": string;
  Pacific: string;
  Ocean: string;
  Atlantic: string;
  "Gulf of": string;
  "St. Lawrence": string;
  Erie: string;
}

interface LabelLookup {
  [lang: string]: Labels;
}

/** Province two-letter codes only — odd-q grid: ¼ column →, ½ row ↑ (Labels group space). */
const HEX_SIDE = 10;
const PROVINCE_CODE_LABEL_DX = ((3 / 2) * HEX_SIDE) / 4;
const PROVINCE_CODE_LABEL_DY = -(Math.sqrt(3) * HEX_SIDE) / 2;

const labels: LabelLookup = {
  fr: {
    Lake: "Lac",
    USA: "É.-U.A.",
    Ontario: "Ontario",
    Superior: "Supérieur",
    Huron: "Huron",
    Michigan: "Michigan",
    "Hudson’s Bay": "Baie d’Hudson",
    Pacific: "Pacifique",
    Ocean: "Océan",
    Atlantic: "Atlantique",
    "Gulf of": "Golfe du",
    "St. Lawrence": "St-Laurent",
    Erie: "Érié",
  },
};

interface MapProps {
  onClick: (riding: RidingData) => void;
  onHoverOn: (
    riding: RidingData,
    province: ProvinceData,
    coords: Coordinates,
  ) => void;
  onHoverOff: () => void;
  election: Election;
  searchText: string;
}

const Map = ({
  onClick,
  onHoverOn,
  onHoverOff,
  election,
  searchText,
}: MapProps) => {
  const [lang] = useLang();
  const getLabelFor = <K extends keyof Labels>(key: K): Labels[K] => {
    const forLang = labels[lang];
    return forLang && forLang[key] ? forLang[key] : key;
  };

  return (
    <svg
      viewBox={MAP_VIEWBOX_STR}
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlSpace="preserve"
    >
      <g transform={`translate(${MAP_FRAME_X},${MAP_FRAME_Y})`}>
        <g
          id="Electoral-Cartogram-of-Canada"
          data-label="Electoral Cartogram of Canada"
          transform="matrix(1.07895,0,0,0.938776,-107.895,-46.9388)"
        >
          <g transform={`matrix(1,0,0,1,${MAP_BG_SHIFT_X},${MAP_BG_SHIFT_Y})`}>
            <g id="Oceans" transform="matrix(0.791667,0,0,0.887681,100,50)">
              <rect x="0" y="0" width="960" height="600" className="ocean" />
            </g>
            <g id="USA" transform="matrix(0.926829,0,0,1.06522,100,50)">
              <path
                id="Western-USA"
                data-label="Western USA"
                d="M254.9764,434.9169L114.9718,434.9178L119.9728,426.2555L114.9735,417.5933L119.9746,408.9310L114.9753,400.2688L119.9763,391.6065L114.9770,382.9443L104.9767,382.9443L99.9774,374.2821L104.9784,365.6198L99.9791,356.9576L104.9801,348.2953L99.9808,339.6331L104.9818,330.9708L99.9825,322.3086L104.9836,313.6463L99.9843,304.9841L104.9853,296.3218L99.9860,287.6596L89.9857,287.6597L84.9864,278.9974L89.9874,270.3352L84.9881,261.6729L89.9891,253.0107L84.9898,244.3484L89.9908,235.6862L84.9915,227.0239L89.9926,218.3617L84.9933,209.6994L89.9943,201.0371L84.9950,192.3749L89.9960,183.7126L99.9964,183.7126L104.9957,192.3748L114.9960,192.3747L119.9953,201.0370L129.9956,201.0369L134.9967,192.3746L144.9970,192.3745L149.9963,201.0368L159.9966,201.0367L164.9959,209.6989L174.9963,209.6988L179.9973,201.0366L189.9976,201.0365L194.9969,209.6987L204.9972,209.6987L209.9966,218.3609L219.9969,218.3608L224.9979,209.6985L234.9982,209.6985L239.9975,218.3607L249.9979,218.3606L254.9972,227.0228L264.9975,227.0228L269.9985,218.3605L279.9989,218.3604L284.9982,227.0226L294.9985,227.0226L299.9978,235.6848L309.9981,235.6847L314.9992,227.0224L324.9995,227.0224L329.9988,235.6846L324.9978,244.3469L314.9974,244.3469L309.9964,253.0092L299.9961,253.0093L294.9968,244.3471L284.9964,244.3471L279.9971,235.6849L269.9968,235.6850L264.9958,244.3473L254.9954,244.3473L249.9961,235.6851L239.9958,235.6852L234.9948,244.3475L239.9941,253.0097L234.9931,261.6720L239.9924,270.3342L249.9927,270.3341L254.9920,278.9963L264.9923,278.9963L269.9934,270.3340L279.9937,270.3339L284.9947,261.6716L294.9950,261.6716L299.9943,270.3338L294.9933,278.9961L284.9930,278.9961L279.9920,287.6584L269.9916,287.6585L264.9906,296.3208L254.9903,296.3208L249.9910,287.6586L239.9906,287.6587L234.9896,296.3210L224.9893,296.3210L219.9882,304.9833L209.9879,304.9834L204.9869,313.6457L194.9866,313.6457L189.9855,322.3080L179.9852,322.3081L174.9842,330.9704L179.9835,339.6326L189.9838,339.6325L194.9831,348.2947L204.9834,348.2947L209.2204,339.6324L219.9848,339.6323L224.9858,330.9700L219.9865,322.3078L224.9875,313.6455L234.9879,313.6455L239.9889,304.9832L249.9892,304.9831L254.9885,313.6453L249.9875,322.3076L239.9872,322.3077L236.4573,330.0431L239.9855,339.6322L249.9858,339.6321L254.9868,330.9699L265.4872,330.9698L269.9864,339.6320L280.4868,339.6319L284.9861,348.2942L280.4851,356.9564L269.9847,356.9565L264.9854,348.2943L254.9851,348.2944L249.9841,356.9566L254.9834,365.6189L249.9823,374.2811L254.9816,382.9434L249.9806,391.6056L254.9799,400.2679L249.9789,408.9302L239.9785,408.9302L234.9775,417.5925L239.9768,426.2547L249.9771,426.2547L254.9764,434.9169Z"
                className="foreignLand"
              />
              <path
                id="Eastern-USA"
                data-label="Eastern USA"
                d="M624.9887,434.9145L414.9817,434.9158L419.9828,426.2535L429.9831,426.2535L434.9841,417.5912L429.9848,408.9290L434.9859,400.2667L429.9866,391.6045L434.9876,382.9422L444.9879,382.9421L449.9889,374.2798L459.9893,374.2798L464.9903,365.6175L474.9906,365.6174L479.9917,356.9551L489.9920,356.9551L494.9913,365.6173L504.9916,365.6172L509.9927,356.9549L519.9930,356.9549L524.9940,348.2926L534.9944,348.2925L539.9954,339.6302L549.9957,339.6302L554.9967,330.9679L549.9974,322.3057L554.9985,313.6434L549.9992,304.9812L555.0002,296.3189L550.0009,287.6567L540.0006,287.6567L535.0013,278.9945L525.0009,278.9946L520.0016,270.3324L525.0027,261.6701L520.0034,253.0079L525.0044,244.3456L535.0047,244.3455L540.0040,253.0077L550.0044,253.0077L555.0054,244.3454L565.0057,244.3453L570.0050,253.0075L580.0053,253.0075L585.0046,261.6697L595.0050,261.6696L600.0060,253.0073L610.0063,253.0073L615.0074,244.3450L625.0077,244.3449L630.0070,253.0071L640.0073,253.0071L645.0084,244.3448L655.0087,244.3447L660.0097,235.6824L670.0101,235.6824L675.0111,227.0201L670.0118,218.3579L675.0128,209.6956L670.0135,201.0334L660.0132,201.0334L655.0139,192.3712L645.0135,192.3713L640.0142,183.7091L646.2843,175.0468L655.0156,175.0467L660.0166,166.3844L670.0170,166.3844L675.0180,157.7221L685.0183,157.7220L690.0176,166.3842L700.0180,166.3842L705.0173,175.0464L715.0176,175.0463L720.0169,183.7085L715.0159,192.3708L720.1652,201.0330L715.0141,209.6953L720.1634,218.3575L715.0124,227.0198L720.1617,235.6820L715.0107,244.3443L720.1600,253.0065L715.0090,261.6688L720.0083,270.3311L715.0072,278.9933L720.1565,287.6556L715.0055,296.3178L720.1548,304.9801L730.0051,304.9800L735.0044,313.6422L745.0048,313.6421L750.0041,322.3044L760.0044,322.3043L765.0054,313.6420L775.0058,313.6420L780.0051,322.3042L775.0040,330.9665L765.0037,330.9665L760.0027,339.6288L750.0023,339.6289L745.0013,348.2912L735.0010,348.2912L729.9999,356.9535L719.9996,356.9536L714.9986,365.6159L719.9979,374.2781L729.9982,374.2780L734.9993,365.6157L744.9996,365.6157L749.9989,374.2779L744.9979,382.9402L734.9975,382.9402L729.9965,391.6025L719.9962,391.6026L714.9951,400.2649L704.9948,400.2649L699.9955,391.6027L689.9952,391.6028L684.9941,400.2651L674.9938,400.2651L669.9928,408.9274L659.9924,408.9275L654.9914,417.5898L644.9911,417.5898L639.9901,426.2521L629.9897,426.2522L624.9887,434.9145Z"
                className="foreignLand"
              />
              <path
                id="Alaska"
                d="M0.0069,45.1172L10.0072,45.1171L15.0065,53.7794L25.0068,53.7793L30.0061,62.4415L25.0051,71.1038L30.0044,79.7660L25.0034,88.4283L30.0027,97.0905L40.0030,97.0905L45.0040,88.4282L40.0047,79.7659L45.0058,71.1037L40.0065,62.4414L45.0075,53.7792L40.0082,45.1169L45.0092,36.4547L0.0077,36.4550L0.0069,45.1172Z"
                className="foreignLand"
              />
              <g
                id="Between-lakes"
                data-label="Between lakes"
                transform="matrix(1,0,0,1,56,-10)"
              >
                <path
                  d="M243.9943,280.3338L254.9947,280.3337L258.9957,271.6714L268.9960,271.6714L273.9971,263.0091L283.9974,263.0090"
                  className="foreignLandBorder"
                />
              </g>
            </g>
            <g id="Canada" transform="matrix(0.926829,0,0,1.06522,100,50)">
              <path
                d="M45.0023,105.7527L40.0030,97.0905L45.0040,88.4282L40.0047,79.7659L45.0058,71.1037L40.0065,62.4414L45.0075,53.7792L40.0082,45.1169L45.0092,36.4547L235.0155,36.4534L240.0148,45.1156L250.0152,45.1156L255.0162,36.4533L265.0165,36.4532L270.0158,45.1154L265.0148,53.7777L270.0141,62.4399L280.0144,62.4399L285.0154,53.7776L280.0161,45.1154L285.0172,36.4531L345.0192,36.4527L340.0181,45.1150L345.0174,53.7772L355.0178,53.7771L360.0188,45.1149L370.0191,45.1148L375.0184,53.7805L370.0174,62.4393L375.0167,71.1015L385.0170,71.1014L390.0181,62.4426L385.0188,53.7804L390.0198,45.1147L400.0201,45.1146L405.0194,53.7768L415.0198,53.7767L420.0191,62.4424L430.0194,62.4389L435.0204,53.7801L445.0207,53.7766L450.0218,45.1177L460.0221,45.1142L465.0231,36.4519L475.0235,36.4519L480.0228,45.1141L490.0231,45.1175L495.0224,53.7762L505.0227,53.7762L510.0238,45.1139L520.0241,45.1138L525.0234,53.7760L520.0224,62.4383L510.0220,62.4384L505.0210,71.1007L495.0207,71.1007L490.0196,79.7630L495.0189,88.4252L490.0179,97.0875L480.0176,97.0876L475.0183,88.4254L465.0180,88.4254L460.0187,79.7632L465.0197,71.1009L460.0204,62.4387L450.0200,62.4388L445.0190,71.1011L450.0183,79.7633L445.0173,88.4256L435.0170,88.4256L430.0177,79.7634L420.0173,79.7635L415.0163,88.4258L420.0156,97.0880L430.0159,97.0879L435.0152,105.7501L445.0156,105.7501L450.0149,114.4123L445.0138,123.0746L435.0135,123.0746L430.0142,114.4124L420.0139,114.4125L415.0146,105.7503L405.0142,105.7503L400.0132,114.4126L390.0129,114.4127L385.0118,123.0750L390.0111,131.7372L385.0101,140.3995L390.0094,149.0617L385.0084,157.7240L390.0077,166.3862L385.0067,175.0485L375.0063,175.0485L370.0053,183.7108L375.0046,192.3730L370.0036,201.0353L375.0029,209.6975L385.0032,209.6975L390.0042,201.0352L400.0046,201.0351L405.0039,209.4652L415.0042,209.6973L420.0035,218.1274L430.0038,218.3594L435.0049,209.6971L445.0052,209.6971L450.0062,201.0348L445.0069,192.3726L450.0080,183.7103L460.0083,183.7102L465.0093,175.0479L475.0096,175.0479L480.0107,166.3856L475.0114,157.7234L480.0124,149.0611L475.0131,140.3989L465.0128,140.3989L460.0135,131.7367L465.0145,123.0744L475.0148,123.0744L480.0159,114.4121L490.0162,114.4120L495.0172,105.7497L505.0175,105.7497L510.0186,97.0874L520.0189,97.0873L525.0199,88.4250L535.0203,88.4250L540.0196,97.0872L550.0199,97.0871L555.0192,105.7493L565.0195,105.7493L570.0206,97.0870L580.0209,97.0869L585.0219,88.4246L580.0226,79.7624L585.0237,71.1001L595.0240,71.1001L600.0233,79.7623L610.0236,79.7622L615.0229,88.4244L625.0233,88.4244L630.0226,97.0866L640.0229,97.0865L645.0222,105.7488L640.0212,114.4110L630.0208,114.4111L625.0198,123.0734L630.0191,131.7356L625.0181,140.3979L615.0177,140.3980L610.0167,149.0602L600.0164,149.0603L595.0153,157.7226L475.0062,209.6969L465.0059,209.6970L460.0049,218.1288L465.0042,226.7910L459.8901,235.6837L465.0024,244.3460L460.0014,253.0082L450.0010,253.0083L445.0018,244.1157L435.0014,244.1157L430.0004,253.0084L420.0000,253.0085L359.7929,305.0690L309.9878,339.6317L299.9874,339.6318L294.9864,348.2941L284.9861,348.2942L280.4868,339.6319L284.9878,330.9697L294.9881,330.9696L299.9892,322.3073L294.9899,313.5195L299.9909,305.0694L294.9916,296.3206L299.9926,287.6583L354.9936,296.3202L359.9963,270.3334L362.1333,241.4959L355.0005,227.0222L279.9989,218.3604L144.9987,175.0500L60.0019,114.4148L55.0026,105.7526L45.0023,105.7527Z"
                className="canadaLand"
              />
            </g>
            <g id="Labels" transform="matrix(0.926829,0,0,1.06522,155.61,50)">
              <g transform="matrix(1,0,0,1,8.6276,189.973)">
                <text x="102.674px" y="214.931px" className="countryText">
                  {getLabelFor("USA")}
                </text>
              </g>
              <g id="Water">
                <g transform="matrix(1,0,0,1,344.451,117.473)">
                  <text x="51.922px" y="219.680px" className="waterText">
                    {getLabelFor("Lake")} {getLabelFor("Ontario")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,139.128,19.4731)">
                  <text x="51.207px" y="232.792px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="42.865px" y="243.186px" className="waterText">
                    {getLabelFor("Superior")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,160.143,63.3331)">
                  <text x="48.422px" y="237.319px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="42.861px" y="247.714px" className="waterText">
                    {getLabelFor("Huron")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,77.1276,105.333)">
                  <text x="56.757px" y="221.306px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="42.856px" y="231.701px" className="waterText">
                    {getLabelFor("Michigan")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,296.128,-92.3114)">
                  <text x="46.856px" y="247.745px" className="waterText">
                    {getLabelFor("Hudson’s Bay")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,-87.8724,5.68857)">
                  <text x="57.865px" y="234.637px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Pacific")
                      : getLabelFor("Ocean")}
                  </text>
                  <text x="58.224px" y="245.032px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Ocean")
                      : getLabelFor("Pacific")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,639.805,25.6886)">
                  <text x="58.446px" y="231.957px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Atlantic")
                      : getLabelFor("Ocean")}
                  </text>
                  <text x="58.445px" y="242.352px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Ocean")
                      : getLabelFor("Atlantic")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,540.128,-147.527)">
                  <text x="50.989px" y="255.129px" className="waterText">
                    {getLabelFor("Gulf of")}
                  </text>
                  <text x="50.988px" y="265.524px" className="waterText">
                    {getLabelFor("St. Lawrence")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,158.776,217.473)">
                  <text x="50.552px" y="206.304px" className="waterText">
                    {getLabelFor("Lake")} {getLabelFor("Erie")}
                  </text>
                </g>
              </g>
              <g
                id="Province-code-labels"
                transform={`translate(${PROVINCE_CODE_LABEL_DX},${PROVINCE_CODE_LABEL_DY})`}
              >
                <g transform="matrix(1,0,0,1,-53.2059,5)">
                  <text x="68.095px" y="88.161px" className="provinceText">
                    BC
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,36.7941,12.502)">
                  <text x="68.489px" y="87.157px" className="provinceText">
                    AB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,165,50)">
                  <text x="68.617px" y="82.139px" className="provinceText">
                    SK
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,232.496,62.502)">
                  <text x="63.236px" y="80.466px" className="provinceText">
                    MB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,288,177)">
                  <text x="78.473px" y="65.149px" className="provinceText">
                    ON
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,380.897,45.004)">
                  <text x="78.486px" y="82.806px" className="provinceText">
                    QC
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,560,-17.5)">
                  <text x="65.586px" y="91.166px" className="provinceText">
                    NL
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,629.7,50.004)">
                  <text x="65.968px" y="82.135px" className="provinceText">
                    PE
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,585,137.502)">
                  <text x="65.050px" y="70.431px" className="provinceText">
                    NB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,664.107,175.139)">
                  <text x="65.435px" y="65.395px" className="provinceText">
                    NS
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,-43.2059,-35)">
                  <text x="69.267px" y="93.512px" className="provinceText">
                    YT
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,46.7941,-19.992)">
                  <text x="128.753px" y="91.503px" className="provinceText">
                    NT
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,276.77,-4.996)">
                  <text x="77.872px" y="89.496px" className="provinceText">
                    NU
                  </text>
                </g>
              </g>
            </g>
          </g>
          <g
            transform={`translate(${MAP_RIDING_SHIFT_X},${MAP_RIDING_SHIFT_Y})`}
          >
            {getRidingDatasetForElection(election).map((province) => (
              <Province
                key={province.id}
                id={province.id}
                label={province.en}
                transform={province.transform}
              >
                {province.ridings.map((riding) => {
                  const results = getResultsForRiding(riding, election);
                  return (
                    <Riding
                      key={riding.id}
                      data={riding}
                      results={results}
                      onClick={onClick}
                      onMouseOver={(coords: Coordinates) =>
                        onHoverOn(riding, province, coords)
                      }
                      onMouseOut={onHoverOff}
                      searchText={searchText}
                      election={election}
                    />
                  );
                })}
              </Province>
            ))}
          </g>
          <g transform={`matrix(1,0,0,1,${MAP_BG_SHIFT_X},${MAP_BG_SHIFT_Y})`}>
            {electionUses2025RidingBoundaries(election) ? (
              <Borders2025
                provincialNudge={`translate(0,${MAP_PROVINCIAL_NUDGE_Y})`}
              />
            ) : (
              <Borders2015
                provincialNudge={`translate(0,${(
                  MAP_PROVINCIAL_NUDGE_Y -
                  (Math.sqrt(3) * 10) / 2
                ).toFixed(4)})`}
              />
            )}
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Map };
