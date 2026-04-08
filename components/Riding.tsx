import React, { useState } from 'react';
import { DateResults, Result, findWinnerFor } from '../data/result_data';
import { RidingData } from '../data/riding_data';
import { Election } from '../pages';
import Party from '../data/party';
import { Lang, useLang } from '../hooks/useLang';
import { electionToDate } from '../utils/electionToDate';

interface Props {
  data: RidingData
  results: DateResults[]
  onMouseOver: (coords: Coordinates) => void
  onClick: (data: RidingData) => void
  onMouseOut: () => void
  searchText: string
  election: Election
}

export interface Coordinates {
  x: number
  y: number
}

const Riding = React.memo(({
  data,
  onMouseOver,
  onClick: onRidingClick,
  onMouseOut,
  searchText,
  election
}: Props) => {
  const [lang] = useLang();
  const [, setHover] = useState(false);

  const onHoverOn = (coords: Coordinates): void => {
    setHover(true);
    onMouseOver(coords);
  };

  const onHoverOff = (): void => {
    setHover(false);
    onMouseOut();
  };

  const onClick = (e: React.MouseEvent<SVGGElement>): void => {
    onRidingClick(data);
    e.stopPropagation();
  };

  const isActiveRiding = (): boolean => {
    return searchText === data[lang];
  };

  const ridingClassName = (result: Result | undefined): string => {
    const hasChangedParty = result && result.changedParty && electionToDate(result.changedParty) <= electionToDate(election);
    const partyId = result ? (
      hasChangedParty && result.currentParty ? result.currentParty : result.party
    ) : (
      ""
    );
    const party = Party.findByRawName(partyId);
    return party.className;
  };

  const result = findWinnerFor(data.index, election);
  const className = result ? ridingClassName(result.winner) : "";

  return (
    <g className={`riding ${className}`} id={data.id} transform={data.transform}
      onMouseOver={(event) => onHoverOn({
          x: event.clientX,
          y: event.clientY
        })}
      onMouseOut={onHoverOff}
      onClick={onClick}
    >
      <path className={`ridingPath ${className}`} d={data.pathD}>
        {isActiveRiding() ? (
          <animate attributeType="CSS" attributeName="fill" values={
            `#FFFFFF; #FFFFFF; inherit; inherit; #FFFFFF; #FFFFFF`
          } keyTimes="0; 0.15; 0.45; 0.65; 0.85; 1" dur="3s" repeatCount="indefinite" />
        ) : null}
      </path>
    </g>
  );
});

export { Riding };
