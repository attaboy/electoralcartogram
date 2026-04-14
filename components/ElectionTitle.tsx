import { Election } from "../pages"
import { electionToDate } from "../utils/electionToDate";
import { Parliaments } from "../data/parliaments";
import { Lang, useLang } from "../hooks/useLang";

interface ElectionTitleProps {
  election: Election
}

const getElectionTitle = (
  parliamentNumber: string,
  suffix: string,
  lang: Lang,
) => {
  return (
    <>
      {parliamentNumber}
      <sup>{suffix}</sup> {lang === Lang.fr ? "législature" : "Parliament"}
    </>
  );
};

const getParliamentNumber = (
  election: Election,
  lang: Lang,
): `${number}${string}` => {
  const electionDate = electionToDate(election);
  if (electionDate >= electionToDate(Parliaments.P45)) {
    return lang === Lang.fr ? "45e" : "45th";
  }
  if (electionDate >= electionToDate(Parliaments.P44)) {
    return lang === Lang.fr ? "44e" : "44th";
  }
  if (electionDate >= electionToDate(Parliaments.P43)) {
    return lang === Lang.fr ? "43e" : "43rd";
  }
  return lang === Lang.fr ? "42e" : "42nd";
};

export function ElectionTitle({ election }: ElectionTitleProps) {
  const [lang] = useLang();
  const parliamentNumber = getParliamentNumber(election, lang);
  const matches = parliamentNumber.match(/(\d+)(.+)/);
  const number = matches ? matches[1] : "";
  const suffix = matches ? matches[2] : "";
  return (
    <span>
      <b>{getElectionTitle(number, suffix, lang)}</b> ({election})
    </span>
  );
}
