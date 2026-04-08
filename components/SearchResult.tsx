import { RidingData } from "../data/riding_data";
import { useLang } from "../hooks/useLang";

export interface SearchResultProps {
  riding: RidingData,
  searchText: string,
  setSearchText: (newText: string) => void
}

export function SearchResult({ riding, searchText, setSearchText }: SearchResultProps) {
  const [lang] = useLang();
  const text = riding[lang];
  const sub = searchText;
  const onClick = () => setSearchText(text);
  if (!sub) {
    return (
      <div className="searchResult" key={riding.id} onMouseDown={onClick}>{text}</div>
    );
  }
  const choppedLowercase = text.toLowerCase().split(sub.toLowerCase());
  const highlightLength = sub.length;
  let startIndex = 0;
  return (
    <div className="searchResult" key={riding.id} onMouseDown={onClick}>
      {choppedLowercase.map((lowercaseFragment, index) => {
        const fragmentLength = lowercaseFragment.length;
        const endIndex = startIndex + fragmentLength;
        const displayFragment = text.slice(startIndex, endIndex);
        const highlighted = text.slice(endIndex, endIndex + highlightLength);
        startIndex += fragmentLength + highlightLength;

        return (
          <span key={`fragment${index}`}>
            <span>{displayFragment}</span>
            {highlighted ? (
              <b>{highlighted}</b>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
