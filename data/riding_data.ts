export interface BilingualLabel {
  en: string
  fr: string
}

export interface PoliticalData extends BilingualLabel {
  id: string
  index: number
  transform: string
}

export interface RidingData extends PoliticalData {
  pathD: string
  province?: ProvinceData
}

export interface ProvinceData extends PoliticalData {
  "flagUrl": string
  "flagDescription-en": string
  "flagDescription-fr": string
  "ridings": RidingData[]
}
