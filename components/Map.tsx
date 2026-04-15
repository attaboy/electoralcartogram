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
    <svg width="100%" viewBox="0 0 820 460" version="1.1" xmlSpace="preserve">
      <g
        id="Electoral-Cartogram-of-Canada"
        data-label="Electoral Cartogram of Canada"
        transform="matrix(1.07895,0,0,0.938776,-107.895,-46.9388)"
      >
        <clipPath id="_clip1">
          <rect x="100" y="50" width="760" height="490" />
        </clipPath>
        <g clipPath="url(#_clip1)">
          <g id="Oceans" transform="matrix(0.791667,0,0,0.887681,100,50)">
            <rect x="0" y="0" width="960" height="600" className="ocean" />
          </g>
          <g id="USA" transform="matrix(0.926829,0,0,1.06522,100,50)">
            <path
              id="Western-USA"
              data-label="Western USA"
              d="M255,460L115,460L120,450L115,440L120,430L115,420L120,410L115,400L105,400L100,390L105,380L100,370L105,360L100,350L105,340L100,330L105,320L100,310L105,300L100,290L90,290L85,280L90,270L85,260L90,250L85,240L90,230L85,220L90,210L85,200L90,190L85,180L90,170L100,170L105,180L115,180L120,190L130,190L135,180L145,180L150,190L160,190L165,200L175,200L180,190L190,190L195,200L205,200L210,210L220,210L225,200L235,200L240,210L250,210L255,220L265,220L270,210L280,210L285,220L295,220L300,230L310,230L315,220L325,220L330,230L325,240L315,240L310,250L300,250L295,240L285,240L280,230L270,230L265,240L255,240L250,230L240,230L235,240L240,250L235,260L240,270L250,270L255,280L265,280L270,270L280,270L285,260L295,260L300,270L295,280L285,280L280,290L270,290L265,300L255,300L250,290L240,290L235,300L225,300L220,310L210,310L205,320L195,320L190,330L180,330L175,340L180,350L190,350L195,360L205,360L209.236,350L220,350L225,340L220,330L225,320L235,320L240,310L250,310L255,320L250,330L240,330L236.471,338.93L240,350L250,350L255,340L265.5,340L270,350L280.5,350L285,360L280.5,370L270,370L265,360L255,360L250,370L255,380L250,390L255,400L250,410L255,420L250,430L240,430L235,440L240,450L250,450L255,460Z"
              className="foreignLand"
            />
            <path
              id="Eastern-USA"
              data-label="Eastern USA"
              d="M625,460L415,460L420,450L430,450L435,440L430,430L435,420L430,410L435,400L445,400L450,390L460,390L465,380L475,380L480,370L490,370L495,380L505,380L510,370L520,370L525,360L535,360L540,350L550,350L555,340L550,330L555,320L550,310L555,300L550,290L540,290L535,280L525,280L520,270L525,260L520,250L525,240L535,240L540,250L550,250L555,240L565,240L570,250L580,250L585,260L595,260L600,250L610,250L615,240L625,240L630,250L640,250L645,240L655,240L660,230L670,230L675,220L670,210L675,200L670,190L660,190L655,180L645,180L640,170L646.269,160L655,160L660,150L670,150L675,140L685,140L690,150L700,150L705,160L715,160L720,170L715,180L720.15,190L715,200L720.15,210L715,220L720.15,230L715,240L720.15,250L715,260L720,270L715,280L720.15,290L715,300L720.15,310L730,310L735,320L745,320L750,330L760,330L765,320L775,320L780,330L775,340L765,340L760,350L750,350L745,360L735,360L730,370L720,370L715,380L720,390L730,390L735,380L745,380L750,390L745,400L735,400L730,410L720,410L715,420L705,420L700,410L690,410L685,420L675,420L670,430L660,430L655,440L645,440L640,450L630,450L625,460Z"
              className="foreignLand"
            />
            <path
              id="Alaska"
              d="M0,10L10,10L15,20L25,20L30,30L25,40L30,50L25,60L30,70L40,70L45,60L40,50L45,40L40,30L45,20L40,10L45,0L0,0L0,10Z"
              className="foreignLand"
            />
            <g
              id="Between-lakes"
              data-label="Between lakes"
              transform="matrix(1,0,0,1,56,-10)"
            >
              <path
                d="M244,280L255,280L259,270L269,270L274,260L284,260"
                className="foreignLandBorder"
              />
            </g>
          </g>
          <g id="Canada" transform="matrix(0.926829,0,0,1.06522,100,50)">
            <path
              d="M45,80L40,70L45,60L40,50L45,40L40,30L45,20L40,10L45,0L235,0L240,10L250,10L255,0L265,0L270,10L265,20L270,30L280,30L285,20L280,10L285,-0L345,-0L340,10L345,20L355,20L360,10L370,10L375,20.004L370,30L375,40L385,40L390,30.004L385,20.004L390,10L400,10L405,20L415,20L420,30.004L430,30L435,20.004L445,20L450,10.004L460,10L465,-0L475,-0L480,10L490,10.004L495,20L505,20L510,10L520,10L525,20L520,30L510,30L505,40L495,40L490,50L495,60L490,70L480,70L475,60L465,60L460,50L465,40L460,30L450,30L445,40L450,50L445,60L435,60L430,50L420,50L415,60L420,70L430,70L435,80L445,80L450,90L445,100L435,100L430,90L420,90L415,80L405,80L400,90L390,90L385,100L390,110L385,120L390,130L385,140L390,150L385,160L375,160L370,170L375,180L370,190L375,200L385,200L390,190L400,190L405,199.732L415,200L420,209.732L430,210L435,200L445,200L450,190L445,180L450,170L460,170L465,160L475,160L480,150L475,140L480,130L475,120L465,120L460,110L465,100L475,100L480,90L490,90L495,80L505,80L510,70L520,70L525,60L535,60L540,70L550,70L555,80L565,80L570,70L580,70L585,60L580,50L585,40L595,40L600,50L610,50L615,60L625,60L630,70L640,70L645,80L640,90L630,90L625,100L630,110L625,120L615,120L610,130L600,130L595,140L475,200L465,200L460,209.734L465,219.734L459.887,230L465,240L460,250L450,250L445,239.734L435,239.734L430,250L420,250L359.8,310.1L310,350L300,350L295,360L285,360L280.5,350L285,340L295,340L300,330L295,319.855L300,310.1L295,300L300,290L355,300L360,270L362.134,236.709L355,220L280,210L145,160L60,90L55,80L45,80Z"
              className="canadaLand"
            />
          </g>
          <g id="Labels" transform="matrix(0.926829,0,0,1.06522,155.61,50)">
            <g transform="matrix(1,0,0,1,8.6276,189.973)">
              <text x="102.697px" y="235.379px" className="countryText">
                {getLabelFor("USA")}
              </text>
            </g>
            <g id="Water">
              <g transform="matrix(1,0,0,1,344.451,117.473)">
                <text x="51.929px" y="229.667px" className="waterText">
                  {getLabelFor("Lake")} {getLabelFor("Ontario")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,139.128,19.4731)">
                <text x="51.212px" y="229.667px" className="waterText">
                  {getLabelFor("Lake")}
                </text>
                <text x="42.872px" y="241.667px" className="waterText">
                  {getLabelFor("Superior")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,160.143,63.3331)">
                <text x="48.432px" y="241.667px" className="waterText">
                  {getLabelFor("Lake")}
                </text>
                <text x="42.872px" y="253.667px" className="waterText">
                  {getLabelFor("Huron")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,77.1276,105.333)">
                <text x="56.772px" y="229.667px" className="waterText">
                  {getLabelFor("Lake")}
                </text>
                <text x="42.872px" y="241.667px" className="waterText">
                  {getLabelFor("Michigan")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,296.128,-92.3114)">
                <text x="46.847px" y="229.667px" className="waterText">
                  {getLabelFor("Hudson’s Bay")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,-87.8724,5.68857)">
                <text x="57.877px" y="229.667px" className="waterText">
                  {lang === Lang.en
                    ? getLabelFor("Pacific")
                    : getLabelFor("Ocean")}
                </text>
                <text x="58.237px" y="241.667px" className="waterText">
                  {lang === Lang.en
                    ? getLabelFor("Ocean")
                    : getLabelFor("Pacific")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,639.805,25.6886)">
                <text x="58.435px" y="229.667px" className="waterText">
                  {lang === Lang.en
                    ? getLabelFor("Atlantic")
                    : getLabelFor("Ocean")}
                </text>
                <text x="58.435px" y="241.667px" className="waterText">
                  {lang === Lang.en
                    ? getLabelFor("Ocean")
                    : getLabelFor("Atlantic")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,540.128,-147.527)">
                <text x="50.967px" y="229.667px" className="waterText">
                  {getLabelFor("Gulf of")}
                </text>
                <text x="50.967px" y="241.667px" className="waterText">
                  {getLabelFor("St. Lawrence")}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,158.776,217.473)">
                <text x="50.574px" y="229.667px" className="waterText">
                  {getLabelFor("Lake")} {getLabelFor("Erie")}
                </text>
              </g>
            </g>
            <g transform="matrix(1,0,0,1,-53.2059,5)">
              <text x="68.091px" y="49.996px" className="provinceText">
                BC
              </text>
            </g>
            <g transform="matrix(1,0,0,1,36.7941,12.502)">
              <text x="68.483px" y="49.996px" className="provinceText">
                AB
              </text>
            </g>
            <g transform="matrix(1,0,0,1,165,50)">
              <text x="68.609px" y="49.996px" className="provinceText">
                SK
              </text>
            </g>
            <g transform="matrix(1,0,0,1,232.496,62.502)">
              <text x="63.227px" y="49.996px" className="provinceText">
                MB
              </text>
            </g>
            <g transform="matrix(1,0,0,1,288,177)">
              <text x="78.47px" y="49.996px" className="provinceText">
                ON
              </text>
            </g>
            <g transform="matrix(1,0,0,1,380.897,45.004)">
              <text x="78.47px" y="49.996px" className="provinceText">
                QC
              </text>
            </g>
            <g transform="matrix(1,0,0,1,560,-17.5)">
              <text x="65.56px" y="49.996px" className="provinceText">
                NL
              </text>
            </g>
            <g transform="matrix(1,0,0,1,629.7,50.004)">
              <text x="65.945px" y="49.996px" className="provinceText">
                PE
              </text>
            </g>
            <g transform="matrix(1,0,0,1,585,137.502)">
              <text x="65.035px" y="49.996px" className="provinceText">
                NB
              </text>
            </g>
            <g transform="matrix(1,0,0,1,664.107,175.139)">
              <text x="65.42px" y="49.996px" className="provinceText">
                NS
              </text>
            </g>
            <g transform="matrix(1,0,0,1,-43.2059,-35)">
              <text x="69.26px" y="49.996px" className="provinceText">
                YT
              </text>
            </g>
            <g transform="matrix(1,0,0,1,46.7941,-19.992)">
              <text x="128.742px" y="49.996px" className="provinceText">
                NT
              </text>
            </g>
            <g transform="matrix(1,0,0,1,276.77,-4.996)">
              <text x="77.856px" y="49.996px" className="provinceText">
                NU
              </text>
            </g>
          </g>
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
          {electionUses2025RidingBoundaries(election) ? (
            <Borders2025 />
          ) : (
            <Borders2015 />
          )}
        </g>
      </g>
    </svg>
  );
};

export { Map };
