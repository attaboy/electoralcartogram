import { Lang } from "../hooks/useLang";

export function getTitle(lang: Lang): string {
  return lang === Lang.en ? "Electoral Cartogram of Canada" : "Cartogramme électoral du Canada";
}
