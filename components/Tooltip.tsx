import { Coordinates } from "./Riding";
import { CurrentRidingInfo } from "./RidingInfo";

interface TooltipProps {
  coords: Coordinates,
  nextCurrentRiding: CurrentRidingInfo,
}

export function Tooltip({ coords, nextCurrentRiding }: TooltipProps) {
  const windowWidth = window.innerWidth;
  const style: React.CSSProperties = {
    top: `${coords.y}px`
  };
  if (coords.x > windowWidth / 2) {
    style.right = `${windowWidth - coords.x}px`;
  } else {
    style.left = `${coords.x}px`;
  }
  return (
    <div id="mapTooltip" style={style}>{nextCurrentRiding.riding}</div>
  );
}
