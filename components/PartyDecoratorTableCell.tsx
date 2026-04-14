import Party from "../data/party";
import { PartyDecorator } from "./PartyDecorator";

interface PartyDecoratorTableCellProps {
  originalParty?: Party | null;
  party: Party;
}

export function PartyDecoratorTableCell({
  originalParty,
  party,
}: PartyDecoratorTableCellProps) {
  return (
    <td className="partyCell">
      <div className="partyCellContent">
        {originalParty ? (
          <div className="originalPartyDecorator">
            <PartyDecorator party={originalParty} />
          </div>
        ) : null}
        <div className={originalParty ? "changedPartyDecorator" : ""}>
          <PartyDecorator party={party} />
        </div>
      </div>
    </td>
  );
}
