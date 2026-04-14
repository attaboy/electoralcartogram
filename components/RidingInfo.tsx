import Party from "../data/party"
import { Lang, useLang } from "../hooks/useLang"
import { PartyDecorator } from "./PartyDecorator"

export interface RidingWinner {
  candidate: string
  party: string
  originalParty: string | undefined
  changedDate: string | undefined
  votes: number
  votePercentage: number
  majorityPercentage: number
}

export interface RidingLoser {
  candidate: string
  party: string
  votes: number
  votePercentage: number
}

export interface CurrentRidingInfo {
  province: string
  flag: string
  flagDescription: string
  riding: string
  winner: RidingWinner
  losers: RidingLoser[]
  date: string
}

interface RidingInfoProps {
  ridingInfo: CurrentRidingInfo
}

export function RidingInfo({ ridingInfo }: RidingInfoProps) {
  const [lang] = useLang();

  const labelForElected = (date: string): string => {
    return lang === Lang.fr ? `Élu(e) ${date}` : `Elected ${date}`;
  };

  const electedAs = (party: Party, changedDate: string | undefined): string => {
    if (lang === Lang.fr) {
      return `Parti changé ${changedDate ? changedDate : ""}`;
    }
    return `Changed party ${changedDate ? changedDate : ""}`;
  };

  const winner = ridingInfo.winner.candidate.replace(/ \*\*$/, "");
  const elected = labelForElected(ridingInfo.date);
  const ridingName = ridingInfo.riding.replace(/\/.+$/, "");
  const winningParty = Party.findByRawName(ridingInfo.winner.party);
  const originalParty = ridingInfo.winner.originalParty ? Party.findByRawName(ridingInfo.winner.originalParty) : null;
  const pctFormatter = Intl.NumberFormat(`${lang}-CA`, { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const voteFormatter = Intl.NumberFormat(`${lang}-CA`, { maximumFractionDigits: 0 });
  return (
    <div>
      <h5>
        <img
          src={ridingInfo.flag}
          style={{
            height: "24px",
            marginRight: "0.5em",
            verticalAlign: "bottom",
          }}
          alt={ridingInfo.flagDescription}
        />
        {ridingName === ridingInfo.province ? null : (
          <span>{ridingInfo.province}</span>
        )}
      </h5>
      <table>
        <thead>
          <tr>
            <td colSpan={4}>
              <h3>{ridingName}</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="partyCell">
              <div className="partyCellContent">
                {originalParty ? (
                  <div className="originalPartyDecorator">
                    <PartyDecorator party={originalParty} />
                  </div>
                ) : null}
                <div className={originalParty ? "changedPartyDecorator" : ""}>
                  <PartyDecorator party={winningParty} />
                </div>
              </div>
            </td>
            <td className="candidateName">
              <div>
                <span>
                  <b>
                    {winner},{" "}
                    {originalParty ? (
                      <>{originalParty[lang]}&nbsp;→&nbsp;</>
                    ) : (
                      ""
                    )}
                    {winningParty[lang]}
                  </b>
                </span>
              </div>
              <div style={{ fontSize: "0.9rem" }}>
                {elected}
                <br />
                {originalParty
                  ? electedAs(originalParty, ridingInfo.winner.changedDate)
                  : null}
              </div>
            </td>
            <td className="votePctg">
              <b>
                {pctFormatter.format(ridingInfo.winner.votePercentage / 100)}
              </b>
            </td>
            <td className="voteCount">
              <b>{voteFormatter.format(ridingInfo.winner.votes)}</b>
            </td>
          </tr>
          {ridingInfo.losers
            .filter((loser) => loser.votePercentage >= 1)
            .map((loser) => {
              const party = Party.findByRawName(loser.party);
              const name = loser.candidate.replace(/ \*\*/, "");
              return (
                <tr key={`${name}-${party.rawName}`}>
                  <td className="partyCell">
                    <div className="partyCellContent">
                      <PartyDecorator party={party} />
                    </div>
                  </td>
                  <td className="candidateName">
                    <div>
                      <span>
                        {name}, {party[lang]}
                      </span>
                    </div>
                  </td>
                  <td className="votePctg">
                    {pctFormatter.format(loser.votePercentage / 100)}
                  </td>
                  <td className="voteCount">
                    {voteFormatter.format(loser.votes)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
