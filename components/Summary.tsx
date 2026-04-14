import Party from "../data/party";
import { getSummaryByParty } from "../data/result_data";
import { useLang } from "../hooks/useLang";
import { Election } from "../pages";
import { ElectionTitle } from "./ElectionTitle";
import { PartyDecorator } from "./PartyDecorator";

interface SummaryProps {
  election: Election
}

export function Summary({ election }: SummaryProps) {
  const [lang] = useLang();
  const summary = getSummaryByParty(election);
  const partyIds = Object.keys(summary).sort((a, b) => summary[b] - summary[a]);
  const total = partyIds.reduce((subtotal, partyId) => subtotal + summary[partyId], 0);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={3}><ElectionTitle election={election} /></td>
          </tr>
        </thead>
        <tbody>
          {partyIds.map((partyId) => {
            const party = Party.findByRawName(partyId);
            return (
              <tr key={partyId}>
                <td className="partyCell">
                  <div className="partyCellContent">
                    <PartyDecorator party={party} />
                  </div>
                </td>
                <td className="candidateName">{party[lang]}</td>
                <td className="voteCount">{summary[partyId]}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><b>Total</b></td>
            <td className="voteCount"><b>{total}</b></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
