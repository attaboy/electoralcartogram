import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

export enum Lang {
  en="en", fr="fr"
}

type LangState = readonly [Lang, Dispatch<SetStateAction<Lang>>];

export const LangContext = createContext<LangState | null>(null);

export const useLang = () => {
  const langContext = useContext(LangContext);
  if (!langContext) {
    throw new Error("useLang must be used within a LangContext provider");
  }
  return langContext;
}
