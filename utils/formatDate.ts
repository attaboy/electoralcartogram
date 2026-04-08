import { type Lang } from "../hooks/useLang";

export function formatDate(date: Date, lang: Lang): string {
  const locale = `${lang}-CA`;
  if (Intl && Intl.DateTimeFormat.supportedLocalesOf(locale).length > 0) {
    return Intl.DateTimeFormat(locale).format(date);
  } else {
    return date.toLocaleDateString();
  }
}
