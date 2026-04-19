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
      viewBox="0 0 821 398"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlSpace="preserve"
    >
      <g transform="translate(29.29221822738647,-44.039002330784925)">
        <g
          id="Electoral-Cartogram-of-Canada"
          data-label="Electoral Cartogram of Canada"
          transform="matrix(1.07895,0,0,0.938776,-107.895,-46.9388)"
        >
          <g>
            <g id="Oceans" transform="matrix(0.791667,0,0,0.887681,100,50)">
              <rect
                x="-34.2932"
                y="9.1044"
                width="960"
                height="600"
                className="ocean"
              />
            </g>
            <g id="USA" transform="matrix(0.926829,0,0,1.06522,100,50)">
              <path
                id="Western-USA"
                data-label="Western USA"
                d="M225.6842,442.5039L85.6796,442.5048L90.6806,433.8425L85.6813,425.1803L90.6824,416.518L85.6831,407.8558L90.6841,399.1935L85.6848,390.5313L75.6845,390.5313L70.6852,381.8691L75.6862,373.2068L70.6869,364.5446L75.6879,355.8823L70.6886,347.2201L75.6896,338.5578L70.6903,329.8956L75.6914,321.2333L70.6921,312.5711L75.6931,303.9088L70.6938,295.2466L60.6935,295.2467L55.6942,286.5844L60.6952,277.9222L55.6959,269.2599L60.6969,260.5977L55.6976,251.9354L60.6986,243.2732L55.6993,234.6109L60.7004,225.9487L55.7011,217.2864L60.7021,208.6241L55.7028,199.9619L60.7038,191.2996L70.7042,191.2996L75.7035,199.9618L85.7038,199.9617L90.7031,208.624L100.7034,208.6239L105.7045,199.9616L115.7048,199.9615L120.7041,208.6238L130.7044,208.6237L135.7037,217.2859L145.7041,217.2858L150.7051,208.6236L160.7054,208.6235L165.7047,217.2857L175.705,217.2857L180.7044,225.9479L190.7047,225.9478L195.7057,217.2855L205.706,217.2855L210.7053,225.9477L220.7057,225.9476L225.705,234.6098L235.7053,234.6098L240.7063,225.9475L250.7067,225.9474L255.706,234.6096L265.7063,234.6096L270.7056,243.2718L280.7059,243.2717L285.707,234.6094L295.7073,234.6094L300.7066,243.2716L295.7056,251.9339L285.7052,251.9339L280.7042,260.5962L270.7039,260.5963L265.7046,251.9341L255.7042,251.9341L250.7049,243.2719L240.7046,243.272L235.7036,251.9343L225.7032,251.9343L220.7039,243.2721L210.7036,243.2722L205.7026,251.9345L210.7019,260.5967L205.7009,269.259L210.7002,277.9212L220.7005,277.9211L225.6998,286.5833L235.7001,286.5833L240.7012,277.921L250.7015,277.9209L255.7025,269.2586L265.7028,269.2586L270.7021,277.9208L265.7011,286.5831L255.7008,286.5831L250.6998,295.2454L240.6994,295.2455L235.6984,303.9078L225.6981,303.9078L220.6988,295.2456L210.6984,295.2457L205.6974,303.908L195.6971,303.908L190.696,312.5703L180.6957,312.5704L175.6947,321.2327L165.6944,321.2327L160.6933,329.895L150.693,329.8951L145.692,338.5574L150.6913,347.2196L160.6916,347.2195L165.6909,355.8817L175.6912,355.8817L179.9282,347.2194L190.6926,347.2193L195.6936,338.557L190.6943,329.8948L195.6953,321.2325L205.6957,321.2325L210.6967,312.5702L220.697,312.5701L225.6963,321.2323L220.6953,329.8946L210.695,329.8947L207.1651,337.6301L210.6933,347.2192L220.6936,347.2191L225.6946,338.5569L236.195,338.5568L240.6942,347.219L251.1946,347.2189L255.6939,355.8812L251.1929,364.5434L240.6925,364.5435L235.6932,355.8813L225.6929,355.8814L220.6919,364.5436L225.6912,373.2059L220.6901,381.8681L225.6894,390.5304L220.6884,399.1926L225.6877,407.8549L220.6867,416.5172L210.6863,416.5172L205.6853,425.1795L210.6846,433.8417L220.6849,433.8417L225.6842,442.5039Z"
                className="foreignLand"
              />
              <path
                id="Eastern-USA"
                data-label="Eastern USA"
                d="M595.6965,442.5015L385.6895,442.5028L390.6906,433.8405L400.6909,433.8405L405.6919,425.1782L400.6926,416.516L405.6937,407.8537L400.6944,399.1915L405.6954,390.5292L415.6957,390.5291L420.6967,381.8668L430.6971,381.8668L435.6981,373.2045L445.6984,373.2044L450.6995,364.5421L460.6998,364.5421L465.6991,373.2043L475.6994,373.2042L480.7005,364.5419L490.7008,364.5419L495.7018,355.8796L505.7022,355.8795L510.7032,347.2172L520.7035,347.2172L525.7045,338.5549L520.7052,329.8927L525.7063,321.2304L520.707,312.5682L525.708,303.9059L520.7087,295.2437L510.7084,295.2437L505.7091,286.5815L495.7087,286.5816L490.7094,277.9194L495.7105,269.2571L490.7112,260.5949L495.7122,251.9326L505.7125,251.9325L510.7118,260.5947L520.7122,260.5947L525.7132,251.9324L535.7135,251.9323L540.7128,260.5945L550.7131,260.5945L555.7124,269.2567L565.7128,269.2566L570.7138,260.5943L580.7141,260.5943L585.7152,251.932L595.7155,251.9319L600.7148,260.5941L610.7151,260.5941L615.7162,251.9318L625.7165,251.9317L630.7175,243.2694L640.7179,243.2694L645.7189,234.6071L640.7196,225.9449L645.7206,217.2826L640.7213,208.6204L630.721,208.6204L625.7217,199.9582L615.7213,199.9583L610.722,191.2961L616.9921,182.6338L625.7234,182.6337L630.7244,173.9714L640.7248,173.9714L645.7258,165.3091L655.7261,165.309L660.7254,173.9712L670.7258,173.9712L675.7251,182.6334L685.7254,182.6333L690.7247,191.2955L685.7237,199.9578L690.873,208.62L685.7219,217.2823L690.8712,225.9445L685.7202,234.6068L690.8695,243.269L685.7185,251.9313L690.8678,260.5935L685.7168,269.2558L690.7161,277.9181L685.715,286.5803L690.8643,295.2426L685.7133,303.9048L690.8626,312.5671L700.7129,312.567L705.7122,321.2292L715.7126,321.2291L720.7119,329.8914L730.7122,329.8913L735.7132,321.229L745.7136,321.229L750.7129,329.8912L745.7118,338.5535L735.7115,338.5535L730.7105,347.2158L720.7101,347.2159L715.7091,355.8782L705.7088,355.8782L700.7077,364.5405L690.7074,364.5406L685.7064,373.2029L690.7057,381.8651L700.706,381.865L705.7071,373.2027L715.7074,373.2027L720.7067,381.8649L715.7057,390.5272L705.7053,390.5272L700.7043,399.1895L690.704,399.1896L685.7029,407.8519L675.7026,407.8519L670.7033,399.1897L660.703,399.1898L655.7019,407.8521L645.7016,407.8521L640.7006,416.5144L630.7002,416.5145L625.6992,425.1768L615.6989,425.1768L610.6979,433.8391L600.6975,433.8392L595.6965,442.5015Z"
                className="foreignLand"
              />
              <path
                id="Alaska"
                d="M-29.2853,52.7042L-19.285,52.7041L-14.2857,61.3664L-4.2854,61.3663L0.7139,70.0285L-4.2871,78.6908L0.7122,87.353L-4.2888,96.0153L0.7105,104.6775L10.7108,104.6775L15.7118,96.0152L10.7125,87.3529L15.7136,78.6907L10.7143,70.0284L15.7153,61.3662L10.716,52.7039L15.717,44.0417L-29.2845,44.042L-29.2853,52.7042Z"
                className="foreignLand"
              />
              <g
                id="Between-lakes"
                data-label="Between lakes"
                transform="matrix(1,0,0,1,56,-10)"
              >
                <path
                  d="M214.7021,287.9208L225.7025,287.9207L229.7035,279.2584L239.7038,279.2584L244.7049,270.5961L254.7052,270.596"
                  className="foreignLandBorder"
                />
              </g>
            </g>
            <g id="Canada" transform="matrix(0.926829,0,0,1.06522,100,50)">
              <path
                d="M15.7101,113.3397L10.7108,104.6775L15.7118,96.0152L10.7125,87.3529L15.7136,78.6907L10.7143,70.0284L15.7153,61.3662L10.716,52.7039L15.717,44.0417L205.7233,44.0404L210.7226,52.7026L220.723,52.7026L225.724,44.0403L235.7243,44.0402L240.7236,52.7024L235.7226,61.3647L240.7219,70.0269L250.7222,70.0269L255.7232,61.3646L250.7239,52.7024L255.725,44.0401L315.727,44.0397L310.7259,52.702L315.7252,61.3642L325.7256,61.3641L330.7266,52.7019L340.7269,52.7018L345.7262,61.3675L340.7252,70.0263L345.7245,78.6885L355.7248,78.6884L360.7259,70.0296L355.7266,61.3674L360.7276,52.7017L370.7279,52.7016L375.7272,61.3638L385.7276,61.3637L390.7269,70.0294L400.7272,70.0259L405.7282,61.3671L415.7285,61.3636L420.7296,52.7047L430.7299,52.7012L435.7309,44.0389L445.7313,44.0389L450.7306,52.7011L460.7309,52.7045L465.7302,61.3632L475.7305,61.3632L480.7316,52.7009L490.7319,52.7008L495.7312,61.363L490.7302,70.0253L480.7298,70.0254L475.7288,78.6877L465.7285,78.6877L460.7274,87.35L465.7267,96.0122L460.7257,104.6745L450.7254,104.6746L445.7261,96.0124L435.7258,96.0124L430.7265,87.3502L435.7275,78.6879L430.7282,70.0257L420.7278,70.0258L415.7268,78.6881L420.7261,87.3503L415.7251,96.0126L405.7248,96.0126L400.7255,87.3504L390.7251,87.3505L385.7241,96.0128L390.7234,104.675L400.7237,104.6749L405.723,113.3371L415.7234,113.3371L420.7227,121.9993L415.7216,130.6616L405.7213,130.6616L400.722,121.9994L390.7217,121.9995L385.7224,113.3373L375.722,113.3373L370.721,121.9996L360.7207,121.9997L355.7196,130.662L360.7189,139.3242L355.7179,147.9865L360.7172,156.6487L355.7162,165.311L360.7155,173.9732L355.7145,182.6355L345.7141,182.6355L340.7131,191.2978L345.7124,199.96L340.7114,208.6223L345.7107,217.2845L355.711,217.2845L360.712,208.6222L370.7124,208.6221L375.7117,217.0522L385.712,217.2843L390.7113,225.7144L400.7116,225.9464L405.7127,217.2841L415.713,217.2841L420.714,208.6218L415.7147,199.9596L420.7158,191.2973L430.7161,191.2972L435.7171,182.6349L445.7174,182.6349L450.7185,173.9726L445.7192,165.3104L450.7202,156.6481L445.7209,147.9859L435.7206,147.9859L430.7213,139.3237L435.7223,130.6614L445.7226,130.6614L450.7237,121.9991L460.724,121.999L465.725,113.3367L475.7253,113.3367L480.7264,104.6744L490.7267,104.6743L495.7277,96.012L505.7281,96.012L510.7274,104.6742L520.7277,104.6741L525.727,113.3363L535.7273,113.3363L540.7284,104.674L550.7287,104.6739L555.7297,96.0116L550.7304,87.3494L555.7315,78.6871L565.7318,78.6871L570.7311,87.3493L580.7314,87.3492L585.7307,96.0114L595.7311,96.0114L600.7304,104.6736L610.7307,104.6735L615.73,113.3358L610.729,121.998L600.7286,121.9981L595.7276,130.6604L600.7269,139.3226L595.7259,147.9849L585.7255,147.985L580.7245,156.6472L570.7242,156.6473L565.7231,165.3096L445.714,217.2839L435.7137,217.284L430.7127,225.7158L435.712,234.378L430.5979,243.2707L435.7102,251.933L430.7092,260.5952L420.7088,260.5953L415.7096,251.7027L405.7092,251.7027L400.7082,260.5954L390.7078,260.5955L330.5007,312.656L280.6956,347.2187L270.6952,347.2188L265.6942,355.8811L255.6939,355.8812L251.1946,347.2189L255.6956,338.5567L265.6959,338.5566L270.697,329.8943L265.6977,321.1065L270.6987,312.6564L265.6994,303.9076L270.7004,295.2453L325.7014,303.9072L330.7041,277.9204L332.8411,249.0829L325.7083,234.6092L250.7067,225.9474L115.7065,182.637L30.7097,122.0018L25.7104,113.3396L15.7101,113.3397Z"
                className="canadaLand"
              />
            </g>
            <g id="Labels" transform="matrix(0.926829,0,0,1.06522,155.61,50)">
              <g transform="matrix(1,0,0,1,8.6276,189.973)">
                <text x="73.382px" y="222.518px" className="countryText">
                  {getLabelFor("USA")}
                </text>
              </g>
              <g id="Water">
                <g transform="matrix(1,0,0,1,344.451,117.473)">
                  <text x="22.630px" y="227.267px" className="waterText">
                    {getLabelFor("Lake")} {getLabelFor("Ontario")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,139.128,19.4731)">
                  <text x="21.915px" y="240.379px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="13.573px" y="250.773px" className="waterText">
                    {getLabelFor("Superior")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,160.143,63.3331)">
                  <text x="19.130px" y="244.906px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="13.569px" y="255.301px" className="waterText">
                    {getLabelFor("Huron")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,77.1276,105.333)">
                  <text x="27.465px" y="228.893px" className="waterText">
                    {getLabelFor("Lake")}
                  </text>
                  <text x="13.564px" y="239.288px" className="waterText">
                    {getLabelFor("Michigan")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,296.128,-92.3114)">
                  <text x="17.564px" y="255.332px" className="waterText">
                    {getLabelFor("Hudson’s Bay")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,-87.8724,5.68857)">
                  <text x="28.573px" y="242.224px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Pacific")
                      : getLabelFor("Ocean")}
                  </text>
                  <text x="28.932px" y="252.619px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Ocean")
                      : getLabelFor("Pacific")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,639.805,25.6886)">
                  <text x="29.154px" y="239.544px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Atlantic")
                      : getLabelFor("Ocean")}
                  </text>
                  <text x="29.153px" y="249.939px" className="waterText">
                    {lang === Lang.en
                      ? getLabelFor("Ocean")
                      : getLabelFor("Atlantic")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,540.128,-147.527)">
                  <text x="21.697px" y="262.716px" className="waterText">
                    {getLabelFor("Gulf of")}
                  </text>
                  <text x="21.696px" y="273.111px" className="waterText">
                    {getLabelFor("St. Lawrence")}
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,158.776,217.473)">
                  <text x="21.260px" y="213.891px" className="waterText">
                    {getLabelFor("Lake")} {getLabelFor("Erie")}
                  </text>
                </g>
              </g>
              <g
                id="Province-code-labels"
                transform={`translate(${PROVINCE_CODE_LABEL_DX},${PROVINCE_CODE_LABEL_DY})`}
              >
                <g transform="matrix(1,0,0,1,-53.2059,5)">
                  <text x="40.946px" y="96.243px" className="provinceText">
                    BC
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,36.7941,12.502)">
                  <text x="41.340px" y="95.239px" className="provinceText">
                    AB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,165,50)">
                  <text x="41.468px" y="90.221px" className="provinceText">
                    SK
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,232.496,62.502)">
                  <text x="36.087px" y="88.548px" className="provinceText">
                    MB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,288,177)">
                  <text x="51.324px" y="73.231px" className="provinceText">
                    ON
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,380.897,45.004)">
                  <text x="51.337px" y="90.888px" className="provinceText">
                    QC
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,560,-17.5)">
                  <text x="38.437px" y="99.248px" className="provinceText">
                    NL
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,629.7,50.004)">
                  <text x="38.819px" y="90.217px" className="provinceText">
                    PE
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,585,137.502)">
                  <text x="37.901px" y="78.513px" className="provinceText">
                    NB
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,664.107,175.139)">
                  <text x="38.286px" y="73.477px" className="provinceText">
                    NS
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,-43.2059,-35)">
                  <text x="42.118px" y="101.594px" className="provinceText">
                    YT
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,46.7941,-19.992)">
                  <text x="101.604px" y="99.585px" className="provinceText">
                    NT
                  </text>
                </g>
                <g transform="matrix(1,0,0,1,276.77,-4.996)">
                  <text x="50.723px" y="97.578px" className="provinceText">
                    NU
                  </text>
                </g>
              </g>
            </g>
          </g>
          <g>
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
          <g>
            {electionUses2025RidingBoundaries(election) ? (
              <Borders2025 />
            ) : (
              <Borders2015 />
            )}
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Map };
