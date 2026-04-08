import { Election } from "../pages"
import { electionToDate } from "../utils/electionToDate";
import { Parliaments } from "../data/parliaments";
import { Lang, useLang } from "../hooks/useLang";

interface ElectionTitleProps {
  election: Election
}

export function ElectionTitle({ election }: ElectionTitleProps) {
  const [lang] = useLang();
  const electionDate = electionToDate(election);
  if (electionDate >= electionToDate(Parliaments.P44)) {
    return lang === Lang.fr ? (
      <span><b>Le 44<sup>e</sup> Parlement</b> ({election})</span>
    ) : (
      <span><b>44<sup>th</sup> Parliament</b> ({election})</span>
    );
  } else if (electionDate >= electionToDate(Parliaments.P43)) {
    return lang === Lang.fr ? (
      <span><b>Le 43<sup>e</sup> Parlement</b> ({election})</span>
    ) : (
      <span><b>43<sup>rd</sup> Parliament</b> ({election})</span>
    );
  } else {
    return lang === Lang.fr ? (
      <span><b>Le 42<sup>e</sup> Parlement</b> ({election})</span>
    ) : (
      <span><b>42<sup>nd</sup> Parliament</b> ({election})</span>
    );
  }
}
