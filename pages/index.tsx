import React from 'react';
import { Map } from '../components/Map';
import { RidingData, ProvinceData } from "../data/riding_data";
import { getRidingDatasetForElection } from "../data/ridingDatasetForElection";
import { findWinnerFor } from '../data/result_data';
import { Coordinates } from '../components/Riding';
import { Lang, useLang } from '../hooks/useLang';
import { getTitle } from '../utils/getTitle';
import { formatDate } from '../utils/formatDate';
import { electionToDate } from '../utils/electionToDate';
import { Summary } from '../components/Summary';
import { CurrentRidingInfo, RidingInfo } from '../components/RidingInfo';
import { Tooltip } from '../components/Tooltip';
import { SearchResult } from '../components/SearchResult';
import { Footer } from "../components/Footer";

const Elections = [
  "2015-10-19",
  "2016-05-31",
  "2016-10-24",
  "2017-04-03",
  "2017-10-23",
  "2017-12-11",
  "2018-05-11",
  "2018-06-18",
  "2018-09-14",
  "2018-09-17",
  "2018-11-07",
  "2018-11-30",
  "2018-12-03",
  "2019-02-25",
  "2019-03-20",
  "2019-04-02",
  "2019-05-06",
  "2019-08-16",
  "2019-10-21",
  "2020-10-26",
  "2020-11-09",
  "2021-01-20",
  "2021-01-25",
  "2021-06-10",
  "2021-09-20",
  "2021-11-22",
  "2022-09-13",
  "2022-12-12",
  "2023-03-08",
  "2023-06-19",
  "2023-07-24",
  "2024-03-04",
  "2024-06-24",
  "2024-09-16",
  "2024-12-16",
  "2025-04-25",
  "2025-08-18",
  "2025-11-04",
  "2025-12-11",
  "2026-02-18",
  "2026-03-10",
  "2026-04-08",
  "2026-04-13",
] as const;

export type Election = typeof Elections[number]

interface ElectionTypes {
  "general": ReadonlyArray<Election>
  "by-election": ReadonlyArray<Election>
}

const ElectionTypes: ElectionTypes = {
  general: ["2015-10-19", "2019-10-21", "2021-09-20", "2025-04-25"],
  "by-election": [
    "2016-10-24",
    "2017-04-03",
    "2017-10-23",
    "2017-12-11",
    "2018-06-18",
    "2018-12-03",
    "2019-02-25",
    "2019-05-06",
    "2020-10-26",
    "2022-12-12",
    "2023-06-19",
    "2023-07-24",
    "2024-03-04",
    "2024-06-24",
    "2024-09-16",
    "2024-12-16",
    "2025-08-18",
    "2026-04-13",
  ],
};

const Home = () => {
  const [election, setElection] = React.useState<Election>(Elections[Elections.length - 1]);
  const [currentRiding, setCurrentRiding] = React.useState<CurrentRidingInfo | null>(null);
  const [coords, setCoords] = React.useState<Coordinates>({ x: 0, y: 0 });
  const [searchText, setSearchText] = React.useState("");
  const [searchResultsVisible, setSearchResultsVisible] = React.useState(false);
  const [lang, setLang] = useLang();
  const updateTimer = React.useRef<number | undefined>(undefined);
  const searchResultsTimer = React.useRef<number | undefined>(undefined);
  const electionSelector = React.useRef<HTMLSelectElement | null>(null);

  const getRidingInfoFromRiding = React.useCallback((riding: RidingData, province: ProvinceData): CurrentRidingInfo | null => {
    const result = findWinnerFor(riding.index, election);
    if (!result) {
      return null;
    }
    const flagDescriptionKey = lang === Lang.fr ? "flagDescription-fr" : "flagDescription-en";
    const changedPartyDate = result.winner.changedParty ? electionToDate(result.winner.changedParty) : undefined;
    const changedParty = changedPartyDate ? changedPartyDate <= electionToDate(election) : undefined;
    return {
      province: province[lang],
      flag: province.flagUrl,
      flagDescription: province[flagDescriptionKey],
      riding: riding[lang],
      winner: {
        candidate: result.winner.candidate,
        party: changedParty && result.winner.currentParty ? result.winner.currentParty : result.winner.party,
        originalParty: changedParty && result.winner.currentParty ? result.winner.party : undefined,
        changedDate: changedPartyDate ? formatDate(changedPartyDate, lang) : undefined,
        votes: result.winner.votes,
        votePercentage: result.winner.votePercentage,
        majorityPercentage: result.winner.majorityPercentage
      },
      losers: result.losers,
      date: formatDate(result.date, lang)
    };
  }, [election, formatDate, lang]);

  const delayUpdate = React.useCallback((riding: CurrentRidingInfo | null, nextCoords: Coordinates | null, timing: number) => {
    window.clearTimeout(updateTimer.current);
    updateTimer.current = window.setTimeout(() => {
      setCurrentRiding(riding);
      if (nextCoords) {
        setCoords(nextCoords);
      }
    }, timing);
  }, []);

  const setNextOrPreviousElection = React.useCallback((nextOrPrevious: -1 | 1): void => {
    const currentElectionIndex = Elections.indexOf(election);
    const lastElectionIndex = Elections.length - 1;
    let newIndex: number;
    if (currentElectionIndex === -1) {
      throw new Error(`Current election (${election}) not found in election set`);
    } else if (nextOrPrevious === -1) {
      newIndex = currentElectionIndex === 0 ? lastElectionIndex : currentElectionIndex - 1;
    } else {
      newIndex = currentElectionIndex === lastElectionIndex ? 0 : currentElectionIndex + 1;
    }
    setElection(Elections[newIndex]);
  }, [election]);

  const handleBodyKeyUp = React.useCallback((ev: KeyboardEvent): void => {
    if (ev.target !== document.body && ev.target !== electionSelector.current) {
      return;
    }
    if (ev.key === "ArrowLeft") {
      setNextOrPreviousElection(-1);
    } else if (ev.key === "ArrowRight") {
      setNextOrPreviousElection(1);
    }
  }, [setNextOrPreviousElection]);

  React.useEffect(() => {
    if (typeof window !== "undefined" && /^fr\b/.test(window.navigator.language)) {
      setLang(Lang.fr);
    }
    document.body.addEventListener("keyup", handleBodyKeyUp);
    return () => {
      document.body.removeEventListener("keyup", handleBodyKeyUp);
      window.clearTimeout(updateTimer.current);
      window.clearTimeout(searchResultsTimer.current);
    };
  }, [handleBodyKeyUp]);

  const onHoverOn = (ridingData: RidingData, provinceData: ProvinceData, nextCoords: Coordinates): void => {
    delayUpdate(getRidingInfoFromRiding(ridingData, provinceData), nextCoords, 100);
  };

  const onClickRiding = (ridingData: RidingData): void => {
    const newText = ridingData[lang];
    setSearchText((prev) => prev === newText ? "" : newText);
  };

  const onClickNoRiding = (): void => {
    setSearchText("");
  };

  const onHoverOff = (): void => {
    delayUpdate(null, null, 500);
  };

  const updateSearchText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.currentTarget.value);
  };

  const getRidingsFromSearch = (): ProvinceData[] => {
    if (!searchText.trim().length) {
      return [];
    }
    const searchTokens = searchText.toLowerCase().trim().split(" ");
    return getRidingDatasetForElection(election)
      .map((province) => ({
        ...province,
        ...{
          ridings: province.ridings.filter((riding) => {
            const ridingTokens = riding[lang].toLowerCase().trim().split(" ");
            return searchTokens.every((searchToken) =>
              ridingTokens.some((ridingToken) =>
                ridingToken.includes(searchToken),
              ),
            );
          }),
        },
      }))
      .filter((province) => province.ridings.length > 0);
  };

  const sortedSearchResults = (provinces: ProvinceData[]): RidingData[] => {
    const results = provinces.reduce<RidingData[]>((all, prov) => {
      return all.concat(prov.ridings.map((ea) => Object.assign({}, ea, { province: prov })));
    }, []).sort((a, b) => {
      const aName = a[lang].toLowerCase();
      const bName = b[lang].toLowerCase();
      const aStartsWith = aName.startsWith(searchText.toLowerCase());
      const bStartsWith = bName.startsWith(searchText.toLowerCase());
      if (aStartsWith === bStartsWith) {
        if (aName < bName) {
          return -1;
        } else if (aName < bName) {
          return 1;
        } else {
          return 0;
        }
      } else if (aStartsWith && !bStartsWith) {
        return -1;
      } else if (bStartsWith && !aStartsWith) {
        return 1;
      } else {
        return 0;
      }
    });

    if (results.length >= 1 && results[0][lang] === searchText) {
      return [results[0]];
    } else {
      return results.slice(0, 10);
    }
  };

  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, sortedResults: RidingData[]): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (sortedResults[0]) {
        setSearchText(sortedResults[0][lang]);
        event.currentTarget.blur();
      }
    }
  };

  const handleInputFocus = (): void => {
    window.clearTimeout(searchResultsTimer.current);
    setSearchResultsVisible(true);
  };

  const handleInputBlur = (): void => {
    searchResultsTimer.current = window.setTimeout(() => {
      setSearchResultsVisible(false);
    }, 50);
  };

  const getElectionTypeFor = (nextElection: Election): string => {
    if (ElectionTypes.general.includes(nextElection)) {
      return lang === Lang.en ? "General election" : "élection générale";
    } else if (ElectionTypes["by-election"].includes(nextElection)) {
      return lang === Lang.en ? "By-election" : "élection partielle";
    } else {
      return lang === Lang.en ? "Party change" : "changement d’affiliation";
    }
  };

  const title = getTitle(lang);
  const searchProvinces = getRidingsFromSearch();
  const sortedResults = sortedSearchResults(searchProvinces);
  const ridingInfoFromSearch = (sortedResults.length === 1) ?
    getRidingInfoFromRiding(sortedResults[0], searchProvinces[0]) : null;
  const ridingInfo = ridingInfoFromSearch || currentRiding;
  return (
    <div>
      <header>
        <h1 lang={lang}>
          <img
            src="/images/flags/Flag_of_Canada.png"
            alt={lang === Lang.fr ? "Le drapeau du Canada" : "Flag of Canada"}
            style={{
              height: "0.8em",
              paddingBottom: "0.2em",
              marginRight: "0.4em",
              verticalAlign: "bottom",
            }}
          />
          <span>{title} </span>
        </h1>
        <div id="langButtons" className="radioButtons">
          <button
            className={`radio ${lang === Lang.en ? "active" : ""}`}
            type="button"
            onClick={() => setLang(Lang.en)}
          >
            En
          </button>
          <button
            className={`radio ${lang === Lang.fr ? "active" : ""}`}
            type="button"
            onClick={() => setLang(Lang.fr)}
          >
            Fr
          </button>
        </div>
        <div id="electionSelector">
          <button
            className="button-transparent"
            type="button"
            disabled={election === Elections[0]}
            title={
              lang === Lang.fr ? "Élection précédente" : "Previous election"
            }
            onClick={() => setNextOrPreviousElection(-1)}
          >
            ◀︎
          </button>
          <label htmlFor="electionSelectorSelect" className="selectContainer">
            <select
              ref={electionSelector}
              className="select"
              id="electionSelectorSelect"
              value={election}
              onChange={(evt) =>
                setElection(evt.currentTarget.value as Election)
              }
            >
              {Elections.map((election) => {
                const electionType = getElectionTypeFor(election);
                return (
                  <option key={election} value={election}>
                    {election} {electionType}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            className="button-transparent"
            type="button"
            disabled={election === Elections[Elections.length - 1]}
            title={lang === Lang.fr ? "Élection suivante" : "Next election"}
            onClick={() => setNextOrPreviousElection(1)}
          >
            ▶︎
          </button>
        </div>
        <div id="search">
          <input
            type="search"
            placeholder={
              lang === Lang.fr
                ? "Rechercher par circonscription"
                : "Search by riding name"
            }
            onKeyUp={(e) => handleInputKeyUp(e, sortedResults)}
            onChange={updateSearchText}
            value={searchText}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {searchResultsVisible ? (
            <div id="searchResults">
              {sortedResults.map((riding) => (
                <SearchResult
                  key={`searchResult-${riding.id}`}
                  searchText={searchText}
                  setSearchText={setSearchText}
                  riding={riding}
                />
              ))}
            </div>
          ) : null}
        </div>
      </header>
      <div style={{ position: "relative" }}>
        <div className="map" onClick={onClickNoRiding}>
          <Map
            onClick={onClickRiding}
            onHoverOn={onHoverOn}
            onHoverOff={onHoverOff}
            election={election}
            searchText={searchText}
          />
          {currentRiding ? (
            <Tooltip coords={coords} nextCurrentRiding={currentRiding} />
          ) : null}
        </div>
        <div className="overlay">
          {ridingInfo ? (
            <RidingInfo ridingInfo={ridingInfo} />
          ) : (
            <Summary election={election} />
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
