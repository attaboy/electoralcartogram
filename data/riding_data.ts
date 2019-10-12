export interface BilingualLabel {
  en: string
  fr: string
}

export interface PoliticalData extends BilingualLabel {
  id: string
  index: number
  transform: string
}

type PartyId = "Green" | "Conservative" | "NDP" | "Liberal" | "People's Party" | "Bloc Québécois" | "Other"

export interface RidingData extends PoliticalData {
  pathD: string
}

export interface ProvinceData extends PoliticalData {
  flagUrl: string
  ridings: RidingData[]
}

const ridingDataSet: ProvinceData[] = [
  {
    "id": "British-Columbia",
    "flagUrl": "/images/flags/Flag_of_British_Columbia.svg",
    "en": "British Columbia",
    "fr": "Colombie-Britannique",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 59,
    "ridings": [
      {
        "id": "West-Vancouver---Sunshine-Coast---Sea-to-Sky-Country",
        "en": "West Vancouver — Sunshine Coast — Sea to Sky Country",
        "fr": "West Vancouver — Sunshine Coast — Sea to Sky Country",
        "transform": "matrix(1,0,0,1,180.05,-19.9)",
        "pathD": "M320,269.9L310,269.9L305,279.9L310,289.9L320,289.9L325,279.9L320,269.9Z",
        "index": 59042
      },
      {
        "id": "Victoria",
        "en": "Victoria",
        "fr": "Victoria",
        "transform": "matrix(1,0,0,1,180.05,-40.124)",
        "pathD": "M200,289.8L190,289.8L185,299.8L190,309.8L200,309.8L205,299.8L200,289.8Z",
        "index": 59041
      },
      {
        "id": "Vancouver-South---Vancouver-Sud",
        "en": "Vancouver South",
        "fr": "Vancouver-Sud",
        "transform": "matrix(1,0,0,1,180.25,-60.193)",
        "pathD": "M259.8,309.9L249.8,309.9L244.8,319.9L249.8,329.9L259.8,329.9L264.8,319.9L259.8,309.9Z",
        "index": 59040
      },
      {
        "id": "Vancouver-Quadra",
        "en": "Vancouver Quadra",
        "fr": "Vancouver Quadra",
        "transform": "matrix(1,0,0,1,211.129,-80.43)",
        "pathD": "M244.7,280.1L234.7,280.1L229.7,290.1L234.7,300.1L244.7,300.1L249.7,290.1L244.7,280.1Z",
        "index": 59039
      },
      {
        "id": "Vancouver-Kingsway",
        "en": "Vancouver Kingsway",
        "fr": "Vancouver Kingsway",
        "transform": "matrix(1,0,0,1,195.25,-70.161)",
        "pathD": "M259.8,289.9L249.8,289.9L244.8,299.9L249.8,309.9L259.8,309.9L264.8,299.9L259.8,289.9Z",
        "index": 59038
      },
      {
        "id": "North-Island---Powell-River",
        "en": "North Island — Powell River",
        "fr": "North Island — Powell River",
        "transform": "matrix(1,0,0,1,165.05,-29.9)",
        "pathD": "M335,259.9L325,259.9L320,269.9L325,279.9L335,279.9L340,269.9L335,259.9Z",
        "index": 59037
      },
      {
        "id": "Vancouver-Granville",
        "en": "Vancouver Granville",
        "fr": "Vancouver Granville",
        "transform": "matrix(1,0,0,1,225.35,-110)",
        "pathD": "M244.7,300L234.7,300L229.7,310L234.7,320L244.7,320L249.7,310L244.7,300Z",
        "index": 59036
      },
      {
        "id": "Vancouver-East---Vancouver-Est",
        "en": "Vancouver East",
        "fr": "Vancouver-Est",
        "transform": "matrix(1,0,0,1,195.25,-70.261)",
        "pathD": "M274.8,280L264.8,280L259.8,290L264.8,300L274.8,300L279.8,290L274.8,280Z",
        "index": 59035
      },
      {
        "id": "Vancouver-Centre---Vancouver-Centre",
        "en": "Vancouver Centre",
        "fr": "Vancouver-Centre",
        "transform": "matrix(1,0,0,1,225.25,-70.53)",
        "pathD": "M259.8,270.2L249.8,270.2L244.8,280.2L249.8,290.2L259.8,290.2L264.8,280.2L259.8,270.2Z",
        "index": 59034
      },
      {
        "id": "Surrey---Newton",
        "en": "Surrey — Newton",
        "fr": "Surrey — Newton",
        "transform": "matrix(1,0,0,1,150.128,-60.361)",
        "pathD": "M304.9,320.1L294.9,320.1L289.9,330.1L294.9,340.1L304.9,340.1L309.9,330.1L304.9,320.1Z",
        "index": 59033
      },
      {
        "id": "Surrey-Centre---Surrey-Centre",
        "en": "Surrey Centre",
        "fr": "Surrey-Centre",
        "transform": "matrix(1,0,0,1,165.15,-50.554)",
        "pathD": "M304.9,300L294.9,300L289.9,310L294.9,320L304.9,320L309.9,310L304.9,300Z",
        "index": 59032
      },
      {
        "id": "Steveston---Richmond-East---Steveston---Richmond-Est",
        "en": "Steveston — Richmond East",
        "fr": "Steveston — Richmond-Est",
        "transform": "matrix(1,0,0,1,150.25,-59.9)",
        "pathD": "M274.8,319.9L264.8,319.9L259.8,329.9L264.8,339.9L274.8,339.9L279.8,329.9L274.8,319.9Z",
        "index": 59031
      },
      {
        "id": "South-Surrey---White-Rock---Surrey-Sud---White-Rock",
        "en": "South Surrey — White Rock",
        "fr": "Surrey-Sud — White Rock",
        "transform": "matrix(1,0,0,1,135.15,-50)",
        "pathD": "M304.9,340L294.9,340L289.9,350L294.9,360L304.9,360L309.9,350L304.9,340Z",
        "index": 59030
      },
      {
        "id": "South-Okanagan---West-Kootenay---Okanagan-Sud---Kootenay-Ouest",
        "en": "South Okanagan — West Kootenay",
        "fr": "Okanagan-Sud — Kootenay-Ouest",
        "transform": "matrix(1,0,0,1,120.05,-0.361)",
        "pathD": "M365,320.1L355,320.1L350,330.1L355,340.1L365,340.1L370,330.1L365,320.1Z",
        "index": 59029
      },
      {
        "id": "Skeena---Bulkley-Valley",
        "en": "Skeena — Bulkley Valley",
        "fr": "Skeena — Bulkley Valley",
        "transform": "matrix(1,0,0,1,165.05,-30.161)",
        "pathD": "M350,269.9L340,269.9L335,279.9L340,289.9L350,289.9L355,279.9L350,269.9Z",
        "index": 59028
      },
      {
        "id": "Saanich---Gulf-Islands",
        "en": "Saanich — Gulf Islands",
        "fr": "Saanich — Gulf Islands",
        "transform": "matrix(1,0,0,1,180.15,-20.1)",
        "pathD": "M214.9,280.1L204.9,280.1L199.9,290.1L204.9,300.1L214.9,300.1L219.9,290.1L214.9,280.1Z",
        "index": 59027
      },
      {
        "id": "Esquimalt---Saanich---Sooke",
        "en": "Esquimalt — Saanich — Sooke",
        "fr": "Esquimalt — Saanich — Sooke",
        "transform": "matrix(1,0,0,1,195.037,-30.324)",
        "pathD": "M200,270L190,270L185,280L190,290L200,290L205,280L200,270Z",
        "index": 59026
      },
      {
        "id": "Richmond-Centre---Richmond-Centre",
        "en": "Richmond Centre",
        "fr": "Richmond-Centre",
        "transform": "matrix(1,0,0,1,210.25,-59.9)",
        "pathD": "M229.8,289.9L219.8,289.9L214.8,299.9L219.8,309.9L229.8,309.9L234.8,299.9L229.8,289.9Z",
        "index": 59025
      },
      {
        "id": "Prince-George---Peace-River---Northern-Rockies",
        "en": "Prince George — Peace River — Northern Rockies",
        "fr": "Prince George — Peace River — Northern Rockies",
        "transform": "matrix(1,0,0,1,150.138,-60.361)",
        "pathD": "M379.9,290.1L369.9,290.1L364.9,300.1L369.9,310.1L379.9,310.1L384.9,300.1L379.9,290.1Z",
        "index": 59024
      },
      {
        "id": "Port-Moody---Coquitlam",
        "en": "Port Moody — Coquitlam",
        "fr": "Port Moody — Coquitlam",
        "transform": "matrix(1,0,0,1,165.15,-50.361)",
        "pathD": "M304.9,280.1L294.9,280.1L289.9,290.1L294.9,300.1L304.9,300.1L309.9,290.1L304.9,280.1Z",
        "index": 59023
      },
      {
        "id": "Pitt-Meadows---Maple-Ridge",
        "en": "Pitt Meadows — Maple Ridge",
        "fr": "Pitt Meadows — Maple Ridge",
        "transform": "matrix(1,0,0,1,180.05,-20)",
        "pathD": "M320,290L310,290L305,300L310,310L320,310L325,300L320,290Z",
        "index": 59022
      },
      {
        "id": "North-Vancouver",
        "en": "North Vancouver",
        "fr": "North Vancouver",
        "transform": "matrix(1,0,0,1,210.25,-40.53)",
        "pathD": "M274.8,260.2L264.8,260.2L259.8,270.2L264.8,280.2L274.8,280.2L279.8,270.2L274.8,260.2Z",
        "index": 59021
      },
      {
        "id": "North-Okanagan---Shuswap",
        "en": "North Okanagan — Shuswap",
        "fr": "North Okanagan — Shuswap",
        "transform": "matrix(1,0,0,1,135.05,29.739)",
        "pathD": "M365,280L355,280L350,290L355,300L365,300L370,290L365,280Z",
        "index": 59020
      },
      {
        "id": "New-Westminster---Burnaby",
        "en": "New Westminster — Burnaby",
        "fr": "New Westminster — Burnaby",
        "transform": "matrix(1,0,0,1,165.228,-50.161)",
        "pathD": "M289.8,289.9L279.8,289.9L274.8,299.9L279.8,309.9L289.8,309.9L294.8,299.9L289.8,289.9Z",
        "index": 59019
      },
      {
        "id": "Nanaimo---Ladysmith",
        "en": "Nanaimo — Ladysmith",
        "fr": "Nanaimo — Ladysmith",
        "transform": "matrix(1,0,0,1,180.25,-39.9)",
        "pathD": "M229.8,269.9L219.8,269.9L214.8,279.9L219.8,289.9L229.8,289.9L234.8,279.9L229.8,269.9Z",
        "index": 59018
      },
      {
        "id": "Mission---Matsqui---Fraser-Canyon",
        "en": "Mission — Matsqui — Fraser Canyon",
        "fr": "Mission — Matsqui — Fraser Canyon",
        "transform": "matrix(1,0,0,1,165.05,-10.514)",
        "pathD": "M335,300L325,300L320,310L325,320L335,320L340,310L335,300Z",
        "index": 59017
      },
      {
        "id": "Langley---Aldergrove",
        "en": "Langley — Aldergrove",
        "fr": "Langley — Aldergrove",
        "transform": "matrix(1,0,0,1,120.35,-20.261)",
        "pathD": "M334.7,320L324.7,320L319.7,330L324.7,340L334.7,340L339.7,330L334.7,320Z",
        "index": 59016
      },
      {
        "id": "Kootenay---Columbia",
        "en": "Kootenay — Columbia",
        "fr": "Kootenay — Columbia",
        "transform": "matrix(1,0,0,1,120.15,19.639)",
        "pathD": "M379.9,310.1L369.9,310.1L364.9,320.1L369.9,330.1L379.9,330.1L384.9,320.1L379.9,310.1Z",
        "index": 59015
      },
      {
        "id": "Kelowna---Lake-Country",
        "en": "Kelowna — Lake Country",
        "fr": "Kelowna — Lake Country",
        "transform": "matrix(1,0,0,1,120.05,-0.564)",
        "pathD": "M365,300L355,300L350,310L355,320L365,320L370,310L365,300Z",
        "index": 59014
      },
      {
        "id": "Kamloops---Thompson---Cariboo",
        "en": "Kamloops — Thompson — Cariboo",
        "fr": "Kamloops — Thompson — Cariboo",
        "transform": "matrix(1,0,0,1,165.05,-10.361)",
        "pathD": "M350,290.1L340,290.1L335,300.1L340,310.1L350,310.1L355,300.1L350,290.1Z",
        "index": 59013
      },
      {
        "id": "Fleetwood---Port-Kells",
        "en": "Fleetwood — Port Kells",
        "fr": "Fleetwood — Port Kells",
        "transform": "matrix(1,0,0,1,150.25,-40.261)",
        "pathD": "M319.8,310L309.8,310L304.8,320L309.8,330L319.8,330L324.8,320L319.8,310Z",
        "index": 59012
      },
      {
        "id": "Delta",
        "en": "Delta",
        "fr": "Delta",
        "transform": "matrix(1,0,0,1,135.25,-30.279)",
        "pathD": "M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z",
        "index": 59011
      },
      {
        "id": "Cowichan---Malahat---Langford",
        "en": "Cowichan — Malahat — Langford",
        "fr": "Cowichan — Malahat — Langford",
        "transform": "matrix(1,0,0,1,180.137,-40.1)",
        "pathD": "M214.9,260.1L204.9,260.1L199.9,270.1L204.9,280.1L214.9,280.1L219.9,270.1L214.9,260.1Z",
        "index": 59010
      },
      {
        "id": "Courtenay---Alberni",
        "en": "Courtenay — Alberni",
        "fr": "Courtenay — Alberni",
        "transform": "matrix(1,0,0,1,180.05,-40.1)",
        "pathD": "M230,250.1L220,250.1L215,260.1L220,270.1L230,270.1L235,260.1L230,250.1Z",
        "index": 59009
      },
      {
        "id": "Coquitlam---Port-Coquitlam",
        "en": "Coquitlam — Port Coquitlam",
        "fr": "Coquitlam — Port Coquitlam",
        "transform": "matrix(1,0,0,1,180.15,-0.1)",
        "pathD": "M304.9,260.1L294.9,260.1L289.9,270.1L294.9,280.1L304.9,280.1L309.9,270.1L304.9,260.1Z",
        "index": 59008
      },
      {
        "id": "Cloverdale---Langley-City",
        "en": "Cloverdale — Langley City",
        "fr": "Cloverdale — Langley City",
        "transform": "matrix(1,0,0,1,134.969,-50.361)",
        "pathD": "M320,330.1L310,330.1L305,340.1L310,350.1L320,350.1L325,340.1L320,330.1Z",
        "index": 59007
      },
      {
        "id": "Chilliwack---Hope",
        "en": "Chilliwack — Hope",
        "fr": "Chilliwack — Hope",
        "transform": "matrix(1,0,0,1,120.25,-40.414)",
        "pathD": "M349.8,329.9L339.8,329.9L334.8,339.9L339.8,349.9L349.8,349.9L354.8,339.9L349.8,329.9Z",
        "index": 59006
      },
      {
        "id": "Central-Okanagan---Similkameen---Nicola",
        "en": "Central Okanagan — Similkameen — Nicola",
        "fr": "Central Okanagan — Similkameen — Nicola",
        "transform": "matrix(1,0,0,1,120.35,-0.261)",
        "pathD": "M349.7,310L339.7,310L334.7,320L339.7,330L349.7,330L354.7,320L349.7,310Z",
        "index": 59005
      },
      {
        "id": "Cariboo---Prince-George",
        "en": "Cariboo — Prince George",
        "fr": "Cariboo — Prince George",
        "transform": "matrix(1,0,0,1,180.05,-20.361)",
        "pathD": "M335,280.1L325,280.1L320,290.1L325,300.1L335,300.1L340,290.1L335,280.1Z",
        "index": 59004
      },
      {
        "id": "Burnaby-South---Burnaby-Sud",
        "en": "Burnaby South",
        "fr": "Burnaby-Sud",
        "transform": "matrix(1,0,0,1,165.25,-30)",
        "pathD": "M274.8,300L264.8,300L259.8,310L264.8,320L274.8,320L279.8,310L274.8,300Z",
        "index": 59003
      },
      {
        "id": "Burnaby-North---Seymour---Burnaby-Nord---Seymour",
        "en": "Burnaby North — Seymour",
        "fr": "Burnaby-Nord — Seymour",
        "transform": "matrix(1,0,0,1,195.25,-30.2)",
        "pathD": "M289.8,270.2L279.8,270.2L274.8,280.2L279.8,290.2L289.8,290.2L294.8,280.2L289.8,270.2Z",
        "index": 59002
      },
      {
        "id": "Abbotsford",
        "en": "Abbotsford",
        "fr": "Abbotsford",
        "transform": "matrix(1,0,0,1,150.05,-60.614)",
        "pathD": "M335,340.1L325,340.1L320,350.1L325,360.1L335,360.1L340,350.1L335,340.1Z",
        "index": 59001
      }
    ]
  },
  {
    "id": "Alberta",
    "flagUrl": "/images/flags/Flag_of_Alberta.svg",
    "en": "Alberta",
    "fr": "Alberta",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 48,
    "ridings": [
      {
        "id": "Yellowhead",
        "en": "Yellowhead",
        "fr": "Yellowhead",
        "transform": "matrix(1,0,0,1,120.05,-40.261)",
        "pathD": "M410,290L400,290L395,300L400,310L410,310L415,300L410,290Z",
        "index": 48034
      },
      {
        "id": "Sturgeon-River---Parkland",
        "en": "Sturgeon River — Parkland",
        "fr": "Sturgeon River — Parkland",
        "transform": "matrix(1,0,0,1,135.05,-10.261)",
        "pathD": "M425,260L415,260L410,270L415,280L425,280L430,270L425,260Z",
        "index": 48033
      },
      {
        "id": "Sherwood-Park---Fort-Saskatchewan",
        "en": "Sherwood Park — Fort Saskatchewan",
        "fr": "Sherwood Park — Fort Saskatchewan",
        "transform": "matrix(1,0,0,1,135.15,-30.061)",
        "pathD": "M469.9,309.8L459.9,309.8L454.9,319.8L459.9,329.8L469.9,329.8L474.9,319.8L469.9,309.8Z",
        "index": 48032
      },
      {
        "id": "St.-Albert---Edmonton",
        "en": "St. Albert — Edmonton",
        "fr": "St. Albert — Edmonton",
        "transform": "matrix(1,0,0,1,135.228,-9.7)",
        "pathD": "M439.9,249.7L429.9,249.7L424.9,259.7L429.9,269.7L439.9,269.7L444.9,259.7L439.9,249.7Z",
        "index": 48031
      },
      {
        "id": "Red-Deer---Lacombe",
        "en": "Red Deer — Lacombe",
        "fr": "Red Deer — Lacombe",
        "transform": "matrix(1,0,0,1,135.1,9.921)",
        "pathD": "M439.9,269.8L429.9,269.8L424.9,279.8L429.9,289.8L439.9,289.8L444.9,279.8L439.9,269.8Z",
        "index": 48030
      },
      {
        "id": "Red-Deer---Mountain-View",
        "en": "Red Deer — Mountain View",
        "fr": "Red Deer — Mountain View",
        "transform": "matrix(1,0,0,1,105.05,-30.261)",
        "pathD": "M455,300L445,300L440,310L445,320L455,320L460,310L455,300Z",
        "index": 48029
      },
      {
        "id": "Peace-River---Westlock",
        "en": "Peace River — Westlock",
        "fr": "Peace River — Westlock",
        "transform": "matrix(1,0,0,1,135.071,-10.361)",
        "pathD": "M410,270.1L400,270.1L395,280.1L400,290.1L410,290.1L415,280.1L410,270.1Z",
        "index": 48028
      },
      {
        "id": "Medicine-Hat---Cardston---Warner",
        "en": "Medicine Hat — Cardston — Warner",
        "fr": "Medicine Hat — Cardston — Warner",
        "transform": "matrix(1,0,0,1,60.15,-0.261)",
        "pathD": "M469.9,350L459.9,350L454.9,360L459.9,370L469.9,370L474.9,360L469.9,350Z",
        "index": 48027
      },
      {
        "id": "Lethbridge",
        "en": "Lethbridge",
        "fr": "Lethbridge",
        "transform": "matrix(1,0,0,1,75.1295,-30.361)",
        "pathD": "M455,360.1L445,360.1L440,370.1L445,380.1L455,380.1L460,370.1L455,360.1Z",
        "index": 48026
      },
      {
        "id": "Lakeland",
        "en": "Lakeland",
        "fr": "Lakeland",
        "transform": "matrix(1,0,0,1,105.05,-9.8)",
        "pathD": "M485,299.8L475,299.8L470,309.8L475,319.8L485,319.8L490,309.8L485,299.8Z",
        "index": 48025
      },
      {
        "id": "Grande-Prairie---Mackenzie",
        "en": "Grande Prairie — Mackenzie",
        "fr": "Grande Prairie — Mackenzie",
        "transform": "matrix(1,0,0,1,150.05,-40.624)",
        "pathD": "M395,280.1L385,280.1L380,290.1L385,300.1L395,300.1L400,290.1L395,280.1Z",
        "index": 48024
      },
      {
        "id": "Fort-McMurray---Cold-Lake",
        "en": "Fort McMurray — Cold Lake",
        "fr": "Fort McMurray — Cold Lake",
        "transform": "matrix(1,0,0,1,135.05,10.2)",
        "pathD": "M485,279.8L475,279.8L470,289.8L475,299.8L485,299.8L490,289.8L485,279.8Z",
        "index": 48023
      },
      {
        "id": "Foothills",
        "en": "Foothills",
        "fr": "Foothills",
        "transform": "matrix(1,0,0,1,120.38,19.739)",
        "pathD": "M394.7,320L384.7,320L379.7,330L384.7,340L394.7,340L399.7,330L394.7,320Z",
        "index": 48022
      },
      {
        "id": "Edmonton---Wetawaskiwin",
        "en": "Edmonton — Wetawaskiwin",
        "fr": "Edmonton — Wetawaskiwin",
        "transform": "matrix(1,0,0,1,150,-20)",
        "pathD": "M425,280L415,280L410,290L415,300L425,300L430,290L425,280Z",
        "index": 48021
      },
      {
        "id": "Edmonton-West---Edmonton-Ouest",
        "en": "Edmonton West",
        "fr": "Edmonton-Ouest",
        "transform": "matrix(1,0,0,1,135.05,9.839)",
        "pathD": "M455,259.9L445,259.9L440,269.9L445,279.9L455,279.9L460,269.9L455,259.9Z",
        "index": 48020
      },
      {
        "id": "Edmonton-Strathcona",
        "en": "Edmonton Strathcona",
        "fr": "Edmonton Strathcona",
        "transform": "matrix(1,0,0,1,150.15,-0.261)",
        "pathD": "M469.9,270L459.9,270L454.9,280L459.9,290L469.9,290L474.9,280L469.9,270Z",
        "index": 48019
      },
      {
        "id": "Edmonton-Riverbend",
        "en": "Edmonton Riverbend",
        "fr": "Edmonton Riverbend",
        "transform": "matrix(1,0,0,1,135,-30)",
        "pathD": "M455,280L445,280L440,290L445,300L455,300L460,290L455,280Z",
        "index": 48018
      },
      {
        "id": "Edmonton-Mill-Woods",
        "en": "Edmonton Mill Woods",
        "fr": "Edmonton Mill Woods",
        "transform": "matrix(1,0,0,1,135.15,-30.261)",
        "pathD": "M469.9,290L459.9,290L454.9,300L459.9,310L469.9,310L474.9,300L469.9,290Z",
        "index": 48017
      },
      {
        "id": "Edmonton-Manning",
        "en": "Edmonton Manning",
        "fr": "Edmonton Manning",
        "transform": "matrix(1,0,0,1,135,-10)",
        "pathD": "M485,260L475,260L470,270L475,280L485,280L490,270L485,260Z",
        "index": 48016
      },
      {
        "id": "Edmonton-Griesbach",
        "en": "Edmonton Griesbach",
        "fr": "Edmonton Griesbach",
        "transform": "matrix(1,0,0,1,135.1,-10)",
        "pathD": "M469.9,250L459.9,250L454.9,260L459.9,270L469.9,270L474.9,260L469.9,250Z",
        "index": 48015
      },
      {
        "id": "Edmonton-Centre---Edmonton-Centre",
        "en": "Edmonton Centre",
        "fr": "Edmonton-Centre",
        "transform": "matrix(1,0,0,1,135,-9.8)",
        "pathD": "M455,239.8L445,239.8L440,249.8L445,259.8L455,259.8L460,249.8L455,239.8Z",
        "index": 48014
      },
      {
        "id": "Calgary-Skyview",
        "en": "Calgary Skyview",
        "fr": "Calgary Skyview",
        "transform": "matrix(1,0,0,1,120.05,-20.161)",
        "pathD": "M455,319.9L445,319.9L440,329.9L445,339.9L455,339.9L460,329.9L455,319.9Z",
        "index": 48013
      },
      {
        "id": "Calgary-Signal-Hill",
        "en": "Calgary Signal Hill",
        "fr": "Calgary Signal Hill",
        "transform": "matrix(1,0,0,1,90,-0.2)",
        "pathD": "M425,300.2L415,300.2L410,310.2L415,320.2L425,320.2L430,310.2L425,300.2Z",
        "index": 48012
      },
      {
        "id": "Calgary-Shepard",
        "en": "Calgary Shepard",
        "fr": "Calgary Shepard",
        "transform": "matrix(1,0,0,1,105.096,-30.161)",
        "pathD": "M439.9,349.9L429.9,349.9L424.9,359.9L429.9,369.9L439.9,369.9L444.9,359.9L439.9,349.9Z",
        "index": 48011
      },
      {
        "id": "Calgary-Rocky-Ridge",
        "en": "Calgary Rocky Ridge",
        "fr": "Calgary Rocky Ridge",
        "transform": "matrix(1,0,0,1,105.15,-10.161)",
        "pathD": "M439.9,289.9L429.9,289.9L424.9,299.9L429.9,309.9L439.9,309.9L444.9,299.9L439.9,289.9Z",
        "index": 48010
      },
      {
        "id": "Calgary-Nose-Hill",
        "en": "Calgary Nose Hill",
        "fr": "Calgary Nose Hill",
        "transform": "matrix(1,0,0,1,120.1,-20.079)",
        "pathD": "M439.9,309.8L429.9,309.8L424.9,319.8L429.9,329.8L439.9,329.8L444.9,319.8L439.9,309.8Z",
        "index": 48009
      },
      {
        "id": "Calgary-Midnapore",
        "en": "Calgary Midnapore",
        "fr": "Calgary Midnapore",
        "transform": "matrix(1,0,0,1,120.35,-20.061)",
        "pathD": "M409.7,329.8L399.7,329.8L394.7,339.8L399.7,349.8L409.7,349.8L414.7,339.8L409.7,329.8Z",
        "index": 48008
      },
      {
        "id": "Calgary-Heritage",
        "en": "Calgary Heritage",
        "fr": "Calgary Heritage",
        "transform": "matrix(1,0,0,1,105.4,10.2)",
        "pathD": "M409.6,309.8L399.6,309.8L394.6,319.8L399.6,329.8L409.6,329.8L414.6,319.8L409.6,309.8Z",
        "index": 48007
      },
      {
        "id": "Calgary-Forest-Lawn",
        "en": "Calgary Forest Lawn",
        "fr": "Calgary Forest Lawn",
        "transform": "matrix(1,0,0,1,120.1,-19.8)",
        "pathD": "M439.9,329.8L429.9,329.8L424.9,339.8L429.9,349.8L439.9,349.8L444.9,339.8L439.9,329.8Z",
        "index": 48006
      },
      {
        "id": "Calgary-Confederation",
        "en": "Calgary Confederation",
        "fr": "Calgary Confederation",
        "transform": "matrix(1,0,0,1,105.3,-29.8)",
        "pathD": "M424.7,319.8L414.7,319.8L409.7,329.8L414.7,339.8L424.7,339.8L429.7,329.8L424.7,319.8Z",
        "index": 48005
      },
      {
        "id": "Calgary-Centre---Calgary-Centre",
        "en": "Calgary Centre",
        "fr": "Calgary-Centre",
        "transform": "matrix(1,0,0,1,120.35,-39.895)",
        "pathD": "M424.7,339.8L414.7,339.8L409.7,349.8L414.7,359.8L424.7,359.8L429.7,349.8L424.7,339.8Z",
        "index": 48004
      },
      {
        "id": "Bow-River",
        "en": "Bow River",
        "fr": "Bow River",
        "transform": "matrix(1,0,0,1,90.05,-0.161)",
        "pathD": "M455,339.9L445,339.9L440,349.9L445,359.9L455,359.9L460,349.9L455,339.9Z",
        "index": 48003
      },
      {
        "id": "Battle-River---Crowfoot",
        "en": "Battle River — Crowfoot",
        "fr": "Battle River — Crowfoot",
        "transform": "matrix(1,0,0,1,90.1,-0.061)",
        "pathD": "M469.9,329.8L459.9,329.8L454.9,339.8L459.9,349.8L469.9,349.8L474.9,339.8L469.9,329.8Z",
        "index": 48002
      },
      {
        "id": "Banff---Airdrie1",
        "en": "Banff — Airdrie",
        "fr": "Banff — Airdrie",
        "transform": "matrix(1,0,0,1,135.39,-30.061)",
        "pathD": "M394.7,299.8L384.7,299.8L379.7,309.8L384.7,319.8L394.7,319.8L399.7,309.8L394.7,299.8Z",
        "index": 48001
      }
    ]
  },
  {
    "id": "Saskatchewan",
    "flagUrl": "/images/flags/Flag_of_Saskatchewan.svg",
    "en": "Saskatchewan",
    "fr": "Saskatchewan",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    index: 47,
    "ridings": [
      {
        "id": "Yorkton---Melville",
        "en": "Yorkton — Melville",
        "fr": "Yorkton — Melville",
        "transform": "matrix(1,0,0,1,60.15,19.465)",
        "pathD": "M529.9,330L519.9,330L514.9,340L519.9,350L529.9,350L534.9,340L529.9,330Z",
        "index": 47014
      },
      {
        "id": "Souris---Moose-Mountain",
        "en": "Souris — Moose Mountain",
        "fr": "Souris — Moose Mountain",
        "transform": "matrix(1,0,0,1,45.15,9.834)",
        "pathD": "M529.9,369.8L519.9,369.8L514.9,379.8L519.9,389.8L529.9,389.8L534.9,379.8L529.9,369.8Z",
        "index": 47013
      },
      {
        "id": "Saskatoon-West---Saskatoon-Ouest",
        "en": "Saskatoon West",
        "fr": "Saskatoon-Ouest",
        "transform": "matrix(1,0,0,1,104.95,-10.661)",
        "pathD": "M500.1,309.9L490.1,309.9L485.1,319.9L490.1,329.9L500.1,329.9L505.1,319.9L500.1,309.9Z",
        "index": 47012
      },
      {
        "id": "Saskatoon---University",
        "en": "Saskatoon — University",
        "fr": "Saskatoon — University",
        "transform": "matrix(1,0,0,1,104.95,-10.761)",
        "pathD": "M500.1,330L490.1,330L485.1,340L490.1,350L500.1,350L505.1,340L500.1,330Z",
        "index": 47011
      },
      {
        "id": "Saskatoon---Grasswood",
        "en": "Saskatoon — Grasswood",
        "fr": "Saskatoon — Grasswood",
        "transform": "matrix(1,0,0,1,75.15,9.339)",
        "pathD": "M514.9,319.9L504.9,319.9L499.9,329.9L504.9,339.9L514.9,339.9L519.9,329.9L514.9,319.9Z",
        "index": 47010
      },
      {
        "id": "Regina---Wascana",
        "en": "Regina — Wascana",
        "fr": "Regina — Wascana",
        "transform": "matrix(1,0,0,1,60.15,-0.689)",
        "pathD": "M514.9,359.9L504.9,359.9L499.9,369.9L504.9,379.9L514.9,379.9L519.9,369.9L514.9,359.9Z",
        "index": 47009
      },
      {
        "id": "Regina---Qu-appelle",
        "en": "Regina — Qu’appelle",
        "fr": "Regina — Qu’appelle",
        "transform": "matrix(1,0,0,1,60.15,-0.761)",
        "pathD": "M514.9,340L504.9,340L499.9,350L504.9,360L514.9,360L519.9,350L514.9,340Z",
        "index": 47008
      },
      {
        "id": "Regina---Lewvan",
        "en": "Regina — Lewvan",
        "fr": "Regina — Lewvan",
        "transform": "matrix(1,0,0,1,59.95,-0.535)",
        "pathD": "M500.1,350L490.1,350L485.1,360L490.1,370L500.1,370L505.1,360L500.1,350Z",
        "index": 47007
      },
      {
        "id": "Prince-Albert",
        "en": "Prince Albert",
        "fr": "Prince Albert",
        "transform": "matrix(1,0,0,1,90.15,-0.255)",
        "pathD": "M529.9,309.9L519.9,309.9L514.9,319.9L519.9,329.9L529.9,329.9L534.9,319.9L529.9,309.9Z",
        "index": 47006
      },
      {
        "id": "Moose-Jaw---Lake-Centre---Lanigan",
        "en": "Moose Jaw — Lake Centre — Lanigan",
        "fr": "Moose Jaw — Lake Centre — Lanigan",
        "transform": "matrix(1,0,0,1,75.05,29.734)",
        "pathD": "M485,339.9L475,339.9L470,349.9L475,359.9L485,359.9L490,349.9L485,339.9Z",
        "index": 47005
      },
      {
        "id": "Carlton-Trail---Eagle-Creek---Sentier-Carlton---Eagle-Creek",
        "en": "Carlton Trail — Eagle Creek",
        "fr": "Sentier Carlton — Eagle Creek",
        "transform": "matrix(1,0,0,1,75.15,9.439)",
        "pathD": "M514.9,299.8L504.9,299.8L499.9,309.8L504.9,319.8L514.9,319.8L519.9,309.8L514.9,299.8Z",
        "index": 47004
      },
      {
        "id": "Desnethé---Missinippi---Churchill-River---Desnethé---Missinippi---Rivière-Churchill",
        "en": "Desnethé — Missinippi — Churchill River",
        "fr": "Desnethé — Missinippi — Rivière Churchill",
        "transform": "matrix(1,0,0,1,120.15,20.2)",
        "pathD": "M514.9,279.8L504.9,279.8L499.9,289.8L504.9,299.8L514.9,299.8L519.9,289.8L514.9,279.8Z",
        "index": 47003
      },
      {
        "id": "Cypress-Hills---Grasslands",
        "en": "Cypress Hills — Grasslands",
        "fr": "Cypress Hills — Grasslands",
        "transform": "matrix(1,0,0,1,60.05,39.516)",
        "pathD": "M485,319.9L475,319.9L470,329.9L475,339.9L485,339.9L490,329.9L485,319.9Z",
        "index": 47002
      },
      {
        "id": "Battlefords---Lloydminster",
        "en": "Battlefords — Lloydminster",
        "fr": "Battlefords — Lloydminster",
        "transform": "matrix(1,0,0,1,74.95,29.439)",
        "pathD": "M500.1,289.8L490.1,289.8L485.1,299.8L490.1,309.8L500.1,309.8L505.1,299.8L500.1,289.8Z",
        "index": 47001
      }
    ]
  },
  {
    "id": "Manitoba",
    "flagUrl": "/images/flags/Flag_of_Manitoba.svg",
    "en": "Manitoba",
    "fr": "Manitoba",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 46,
    "ridings": [
      {
        "id": "Winnipeg-South-Centre---Winnipeg-Centre-Sud",
        "en": "Winnipeg South-Centre",
        "fr": "Winnipeg-Centre-Sud",
        "transform": "matrix(1,0,0,1,44.9,10)",
        "pathD": "M560.1,350L550.1,350L545.1,360L550.1,370L560.1,370L565.1,360L560.1,350Z",
        "index": 46014
      },
      {
        "id": "Winnipeg-South---Winnipeg-Sud",
        "en": "Winnipeg South",
        "fr": "Winnipeg-Sud",
        "transform": "matrix(1,0,0,1,44.95,9.832)",
        "pathD": "M560.1,369.9L550.1,369.9L545.1,379.9L550.1,389.9L560.1,389.9L565.1,379.9L560.1,369.9Z",
        "index": 46013
      },
      {
        "id": "Winnipeg-North---Winnipeg-Nord",
        "en": "Winnipeg North",
        "fr": "Winnipeg-Nord",
        "transform": "matrix(1,0,0,1,89.903,19.8)",
        "pathD": "M545,320.2L535,320.2L530,330.2L535,340.2L545,340.2L550,330.2L545,320.2Z",
        "index": 46012
      },
      {
        "id": "Winnipeg-Centre---Winnipeg-Centre",
        "en": "Winnipeg Centre",
        "fr": "Winnipeg-Centre",
        "transform": "matrix(1,0,0,1,75.05,10)",
        "pathD": "M545,340L535,340L530,350L535,360L545,360L550,350L545,340Z",
        "index": 46011
      },
      {
        "id": "Selkirk---Interlake---Eastman",
        "en": "Selkirk — Interlake — Eastman",
        "fr": "Selkirk — Interlake — Eastman",
        "transform": "matrix(1,0,0,1,59.8,20)",
        "pathD": "M575.2,340L565.2,340L560.2,350L565.2,360L575.2,360L580.2,350L575.2,340Z",
        "index": 46010
      },
      {
        "id": "Saint-Boniface---Saint-Vital---Saint-Boniface---Saint-Vital",
        "en": "Saint Boniface — Saint Vital",
        "fr": "Saint Boniface — Saint-Vital",
        "transform": "matrix(1,0,0,1,44.85,10.1)",
        "pathD": "M575.2,379.9L565.2,379.9L560.2,389.9L565.2,399.9L575.2,399.9L580.2,389.9L575.2,379.9Z",
        "index": 46009
      },
      {
        "id": "Provencher",
        "en": "Provencher",
        "fr": "Provencher",
        "transform": "matrix(1,0,0,1,29.85,-0.661)",
        "pathD": "M575.2,399.9L565.2,399.9L560.2,409.9L565.2,419.9L575.2,419.9L580.2,409.9L575.2,399.9Z",
        "index": 46008
      },
      {
        "id": "Portage---Lisgar",
        "en": "Portage — Lisgar",
        "fr": "Portage — Lisgar",
        "transform": "matrix(1,0,0,1,29.95,-0.661)",
        "pathD": "M560.1,389.9L550.1,389.9L545.1,399.9L550.1,409.9L560.1,409.9L565.1,399.9L560.1,389.9Z",
        "index": 46007
      },
      {
        "id": "Kildonan---St.-Paul",
        "en": "Kildonan — St. Paul",
        "fr": "Kildonan — St. Paul",
        "transform": "matrix(1,0,0,1,44.8,10)",
        "pathD": "M575.2,360L565.2,360L560.2,370L565.2,380L575.2,380L580.2,370L575.2,360Z",
        "index": 46006
      },
      {
        "id": "Elmwood---Transcona",
        "en": "Elmwood — Transcona",
        "fr": "Elmwood — Transcona",
        "transform": "matrix(1,0,0,1,74.9,49.9)",
        "pathD": "M560.1,330.1L550.1,330.1L545.1,340.1L550.1,350.1L560.1,350.1L565.1,340.1L560.1,330.1Z",
        "index": 46005
      },
      {
        "id": "Dauphin---Swan-River---Neepawa",
        "en": "Dauphin — Swan River — Neepawa",
        "fr": "Dauphin — Swan River — Neepawa",
        "transform": "matrix(1,0,0,1,90.15,-20.568)",
        "pathD": "M529.9,350.2L519.9,350.2L514.9,360.2L519.9,370.2L529.9,370.2L534.9,360.2L529.9,350.2Z",
        "index": 46004
      },
      {
        "id": "Churchill---Keewatinook-Aski",
        "en": "Churchill — Keewatinook Aski",
        "fr": "Churchill — Keewatinook Aski",
        "transform": "matrix(1,0,0,1,74.8,30.1)",
        "pathD": "M575.2,319.9L565.2,319.9L560.2,329.9L565.2,339.9L575.2,339.9L580.2,329.9L575.2,319.9Z",
        "index": 46003
      },
      {
        "id": "Charleswood---St.-James---Assiniboia---Headingley",
        "en": "Charleswood — St. James — Assiniboia — Headingley",
        "fr": "Charleswood — St. James — Assiniboia — Headingley",
        "transform": "matrix(1,0,0,1,60,-20)",
        "pathD": "M545,360L535,360L530,370L535,380L545,380L550,370L545,360Z",
        "index": 46002
      },
      {
        "id": "Brandon---Souris",
        "en": "Brandon — Souris",
        "fr": "Brandon — Souris",
        "transform": "matrix(1,0,0,1,45.05,-10.561)",
        "pathD": "M545,379.8L535,379.8L530,389.8L535,399.8L545,399.8L550,389.8L545,379.8Z",
        "index": 46001
      }
    ]
  },
  {
    "id": "Ontario",
    "flagUrl": "/images/flags/Flag_of_Ontario.svg",
    "en": "Ontario",
    "fr": "Ontario",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 35,
    "ridings": [
      {
        "id": "Humber-River---Black-Creek",
        "en": "Humber River — Black Creek",
        "fr": "Humber River — Black Creek",
        "transform": "",
        "pathD": "M665.1,479.9L655.1,479.9L650.1,489.9L655.1,499.9L665.1,499.9L670.1,489.9L665.1,479.9Z",
        "index": 35121
      },
      {
        "id": "York-South---Weston---York-Sud---Weston",
        "en": "York South — Weston",
        "fr": "York-Sud — Weston",
        "transform": "",
        "pathD": "M665,499.9L655,499.9L650,509.9L655,519.9L665,519.9L670,509.9L665,499.9Z",
        "index": 35120
      },
      {
        "id": "York---Simcoe",
        "en": "York — Simcoe",
        "fr": "York — Simcoe",
        "transform": "matrix(1,0,0,1,-0.1,-20)",
        "pathD": "M680.1,430L670.1,430L665.1,440L670.1,450L680.1,450L685.1,440L680.1,430Z",
        "index": 35119
      },
      {
        "id": "York-Centre---York-Centre",
        "en": "York Centre",
        "fr": "York-Centre",
        "transform": "",
        "pathD": "M679.9,489.9L669.9,489.9L664.9,499.9L669.9,509.9L679.9,509.9L684.9,499.9L679.9,489.9Z",
        "index": 35118
      },
      {
        "id": "Windsor-West---Windsor-Ouest",
        "en": "Windsor West",
        "fr": "Windsor-Ouest",
        "transform": "matrix(1,0,0,1,60.2,0.1)",
        "pathD": "M529.8,609.9L519.8,609.9L514.8,619.9L519.8,629.9L529.8,629.9L534.8,619.9L529.8,609.9Z",
        "index": 35117
      },
      {
        "id": "Windsor---Tecumseh",
        "en": "Windsor — Tecumseh",
        "fr": "Windsor — Tecumseh",
        "transform": "matrix(1,0,0,1,60.2,0.1)",
        "pathD": "M529.8,589.9L519.8,589.9L514.8,599.9L519.8,609.9L529.8,609.9L534.8,599.9L529.8,589.9Z",
        "index": 35116
      },
      {
        "id": "Willowdale",
        "en": "Willowdale",
        "fr": "Willowdale",
        "transform": "matrix(1,0,0,1,0.4,-19.9)",
        "pathD": "M694.6,459.9L684.6,459.9L679.6,469.9L684.6,479.9L694.6,479.9L699.6,469.9L694.6,459.9Z",
        "index": 35115
      },
      {
        "id": "Whitby",
        "en": "Whitby",
        "fr": "Whitby",
        "transform": "matrix(1,0,0,1,15.2,30)",
        "pathD": "M769.8,430L759.8,430L754.8,440L759.8,450L769.8,450L774.8,440L769.8,430Z",
        "index": 35114
      },
      {
        "id": "Wellington---Halton-Hills",
        "en": "Wellington — Halton Hills",
        "fr": "Wellington — Halton Hills",
        "transform": "matrix(1,0,0,1,30,40.1)",
        "pathD": "M605,519.9L595,519.9L590,529.9L595,539.9L605,539.9L610,529.9L605,519.9Z",
        "index": 35113
      },
      {
        "id": "Waterloo",
        "en": "Waterloo",
        "fr": "Waterloo",
        "transform": "matrix(1,0,0,1,30.1,0.1)",
        "pathD": "M574.9,519.9L564.9,519.9L559.9,529.9L564.9,539.9L574.9,539.9L579.9,529.9L574.9,519.9Z",
        "index": 35112
      },
      {
        "id": "Vaughan---Woodbridge",
        "en": "Vaughan — Woodbridge",
        "fr": "Vaughan — Woodbridge",
        "transform": "",
        "pathD": "M650,469.9L640,469.9L635,479.9L640,489.9L650,489.9L655,479.9L650,469.9Z",
        "index": 35111
      },
      {
        "id": "University---Rosedale",
        "en": "University — Rosedale",
        "fr": "University — Rosedale",
        "transform": "matrix(1,0,0,1,0.1,-20.1)",
        "pathD": "M694.9,520.1L684.9,520.1L679.9,530.1L684.9,540.1L694.9,540.1L699.9,530.1L694.9,520.1Z",
        "index": 35110
      },
      {
        "id": "Toronto---Danforth",
        "en": "Toronto — Danforth",
        "fr": "Toronto — Danforth",
        "transform": "matrix(1,0,0,1,0,-20.2)",
        "pathD": "M710,510.2L700,510.2L695,520.2L700,530.2L710,530.2L715,520.2L710,510.2Z",
        "index": 35109
      },
      {
        "id": "Toronto-Centre---Toronto-Centre",
        "en": "Toronto Centre",
        "fr": "Toronto-Centre",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M710,529.9L700,529.9L695,539.9L700,549.9L710,549.9L715,539.9L710,529.9Z",
        "index": 35108
      },
      {
        "id": "Timmins---James-Bay---TImmins---Baie-James",
        "en": "Timmins — James Bay",
        "fr": "TImmins — Baie James",
        "transform": "matrix(1,0,0,1,60,0.1)",
        "pathD": "M605,379.9L595,379.9L590,389.9L595,399.9L605,399.9L610,389.9L605,379.9Z",
        "index": 35107
      },
      {
        "id": "Thunder-Bay---Superior-North---Thunder-Bay---Supérieur-Nord",
        "en": "Thunder Bay — Superior North",
        "fr": "Thunder Bay — Supérieur-Nord",
        "transform": "matrix(1,0,0,1,30,0.1)",
        "pathD": "M605,399.9L595,399.9L590,409.9L595,419.9L605,419.9L610,409.9L605,399.9Z",
        "index": 35106
      },
      {
        "id": "Thunder-Bay---Rainy-River",
        "en": "Thunder Bay — Rainy River",
        "fr": "Thunder Bay — Rainy River",
        "transform": "matrix(1,0,0,1,59.8,-19.9)",
        "pathD": "M590.2,409.9L580.2,409.9L575.2,419.9L580.2,429.9L590.2,429.9L595.2,419.9L590.2,409.9Z",
        "index": 35105
      },
      {
        "id": "Thornhill",
        "en": "Thornhill",
        "fr": "Thornhill",
        "transform": "matrix(1,0,0,1,0.2,0.1)",
        "pathD": "M679.8,469.9L669.8,469.9L664.8,479.9L669.8,489.9L679.8,489.9L684.8,479.9L679.8,469.9Z",
        "index": 35104
      },
      {
        "id": "Sudbury",
        "en": "Sudbury",
        "fr": "Sudbury",
        "transform": "matrix(1,0,0,1,30.1,0.3)",
        "pathD": "M619.9,409.7L609.9,409.7L604.9,419.7L609.9,429.7L619.9,429.7L624.9,419.7L619.9,409.7Z",
        "index": 35103
      },
      {
        "id": "Stormont---Dundas---South-Glengarry",
        "en": "Stormont — Dundas — South Glengarry",
        "fr": "Stormont — Dundas — South Glengarry",
        "transform": "matrix(1,0,0,1,-29.907,-0.466)",
        "pathD": "M829.9,370.2L819.9,370.2L814.9,380.2L819.9,390.2L829.9,390.2L834.9,380.2L829.9,370.2Z",
        "index": 35102
      },
      {
        "id": "Simcoe-North---Simcoe-Nord",
        "en": "Simcoe North",
        "fr": "Simcoe-Nord",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M694.9,539.9L684.9,539.9L679.9,549.9L684.9,559.9L694.9,559.9L699.9,549.9L694.9,539.9Z",
        "index": 35101
      },
      {
        "id": "Simcoe-North---Simcoe-Nord1",
        "en": "Simcoe North",
        "fr": "Simcoe-Nord",
        "transform": "matrix(1,0,0,1,0.1,20)",
        "pathD": "M649.9,430L639.9,430L634.9,440L639.9,450L649.9,450L654.9,440L649.9,430Z",
        "index": 35100
      },
      {
        "id": "Simcoe---Grey",
        "en": "Simcoe — Grey",
        "fr": "Simcoe — Grey",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M620,450L610,450L605,460L610,470L620,470L625,460L620,450Z",
        "index": 35099
      },
      {
        "id": "Scarborough-Southwest---Scarborough-Sud-Ouest",
        "en": "Scarborough Southwest",
        "fr": "Scarborough-Sud-Ouest",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M739.9,490.2L729.9,490.2L724.9,500.2L729.9,510.2L739.9,510.2L744.9,500.2L739.9,490.2Z",
        "index": 35098
      },
      {
        "id": "Scarborough---Rouge-Park",
        "en": "Scarborough — Rouge Park",
        "fr": "Scarborough — Rouge Park",
        "transform": "matrix(1,0,0,1,0.1,-19.7255)",
        "pathD": "M754.9,459.9L744.9,459.9L739.9,469.9L744.9,479.9L754.9,479.9L759.9,469.9L754.9,459.9Z",
        "index": 35097
      },
      {
        "id": "Scarborough-North---Scarborough-Nord",
        "en": "Scarborough North",
        "fr": "Scarborough-Nord",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M739.9,450.1L729.9,450.1L724.9,460.1L729.9,470.1L739.9,470.1L744.9,460.1L739.9,450.1Z",
        "index": 35096
      },
      {
        "id": "Scarborough---Guildwood",
        "en": "Scarborough — Guildwood",
        "fr": "Scarborough — Guildwood",
        "transform": "matrix(1,0,0,1,15.1,-10.2745)",
        "pathD": "M739.9,470.1L729.9,470.1L724.9,480.1L729.9,490.1L739.9,490.1L744.9,480.1L739.9,470.1Z",
        "index": 35095
      },
      {
        "id": "Scarborough-Centre---Scarborough-Centre",
        "en": "Scarborough Centre",
        "fr": "Scarborough-Centre",
        "transform": "matrix(1,0,0,1,14.986,-10)",
        "pathD": "M724.9,460.1L714.9,460.1L709.9,470.1L714.9,480.1L724.9,480.1L729.9,470.1L724.9,460.1Z",
        "index": 35094
      },
      {
        "id": "Scarborough---Agincourt",
        "en": "Scarborough — Agincourt",
        "fr": "Scarborough — Agincourt",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M725,439.9L715,439.9L710,449.9L715,459.9L725,459.9L730,449.9L725,439.9Z",
        "index": 35093
      },
      {
        "id": "Sault-Ste.-Marie",
        "en": "Sault Ste. Marie",
        "fr": "Sault Ste. Marie",
        "transform": "matrix(1,0,0,1,15.133,10.1)",
        "pathD": "M605,419.9L595,419.9L590,429.9L595,439.9L605,439.9L610,429.9L605,419.9Z",
        "index": 35092
      },
      {
        "id": "Sarnia---Lambton",
        "en": "Sarnia — Lambton",
        "fr": "Sarnia — Lambton",
        "transform": "matrix(1,0,0,1,45.2,9.9)",
        "pathD": "M544.8,539.9L534.8,539.9L529.8,549.9L534.8,559.9L544.8,559.9L549.8,549.9L544.8,539.9Z",
        "index": 35091
      },
      {
        "id": "Toronto---St.-Paul-s",
        "en": "Toronto — St. Paul’s",
        "fr": "Toronto — St. Paul’s",
        "transform": "matrix(1,0,0,1,0.1,-20.2)",
        "pathD": "M694.9,500.2L684.9,500.2L679.9,510.2L684.9,520.2L694.9,520.2L699.9,510.2L694.9,500.2Z",
        "index": 35090
      },
      {
        "id": "St.-Catharines",
        "en": "St. Catharines",
        "fr": "St. Catharines",
        "transform": "matrix(1,0,0,1,75.208,-9.9)",
        "pathD": "M649.8,589.9L639.8,589.9L634.8,599.9L639.8,609.9L649.8,609.9L654.8,599.9L649.8,589.9Z",
        "index": 35089
      },
      {
        "id": "Carleton",
        "en": "Carleton",
        "fr": "Carleton",
        "transform": "matrix(1,0,0,1,-44.8,30.1)",
        "pathD": "M814.8,359.9L804.8,359.9L799.8,369.9L804.8,379.9L814.8,379.9L819.8,369.9L814.8,359.9Z",
        "index": 35088
      },
      {
        "id": "Richmond-Hill",
        "en": "Richmond Hill",
        "fr": "Richmond Hill",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M680,449.9L670,449.9L665,459.9L670,469.9L680,469.9L685,459.9L680,449.9Z",
        "index": 35087
      },
      {
        "id": "Renfrew---Nipissing---Pembroke",
        "en": "Renfrew — Nipissing — Pembroke",
        "fr": "Renfrew — Nipissing — Pembroke",
        "transform": "matrix(1,0,0,1,-14.8,-29.8)",
        "pathD": "M754.8,379.8L744.8,379.8L739.8,389.8L744.8,399.8L754.8,399.8L759.8,389.8L754.8,379.8Z",
        "index": 35086
      },
      {
        "id": "Peterborough---Kawartha",
        "en": "Peterborough — Kawartha",
        "fr": "Peterborough — Kawartha",
        "transform": "matrix(1,0,0,1,-14.9,10)",
        "pathD": "M754.9,400L744.9,400L739.9,410L744.9,420L754.9,420L759.9,410L754.9,400Z",
        "index": 35084
      },
      {
        "id": "Pickering---Uxbridge",
        "en": "Pickering — Uxbridge",
        "fr": "Pickering — Uxbridge",
        "transform": "matrix(1,0,0,1,15.1,-9.8255)",
        "pathD": "M739.9,430L729.9,430L724.9,440L729.9,450L739.9,450L744.9,440L739.9,430Z",
        "index": 35085
      },
      {
        "id": "Perth---Wellington",
        "en": "Perth — Wellington",
        "fr": "Perth — Wellington",
        "transform": "",
        "pathD": "M590,490.1L580,490.1L575,500.1L580,510.1L590,510.1L595,500.1L590,490.1Z",
        "index": 35083
      },
      {
        "id": "Parry-Sound---Muskoka",
        "en": "Parry Sound — Muskoka",
        "fr": "Parry Sound — Muskoka",
        "transform": "matrix(1,0,0,1,15.1,10.3)",
        "pathD": "M634.9,419.7L624.9,419.7L619.9,429.7L624.9,439.7L634.9,439.7L639.9,429.7L634.9,419.7Z",
        "index": 35082
      },
      {
        "id": "Parkdale---High-Park",
        "en": "Parkdale — High Park",
        "fr": "Parkdale — High Park",
        "transform": "",
        "pathD": "M680.1,529.9L670.1,529.9L665.1,539.9L670.1,549.9L680.1,549.9L685.1,539.9L680.1,529.9Z",
        "index": 35081
      },
      {
        "id": "Oxford",
        "en": "Oxford",
        "fr": "Oxford",
        "transform": "matrix(1,0,0,1,75.1,30.1)",
        "pathD": "M589.9,589.9L579.9,589.9L574.9,599.9L579.9,609.9L589.9,609.9L594.9,599.9L589.9,589.9Z",
        "index": 35080
      },
      {
        "id": "Ottawa-West---Nepean---Ottawa-Ouest---Nepean",
        "en": "Ottawa West — Nepean",
        "fr": "Ottawa-Ouest — Nepean",
        "transform": "matrix(1,0,0,1,-29.8,-0.366)",
        "pathD": "M784.8,360.1L774.8,360.1L769.8,370.1L774.8,380.1L784.8,380.1L789.8,370.1L784.8,360.1Z",
        "index": 35079
      },
      {
        "id": "Ottawa",
        "en": "Ottawa",
        "fr": "Ottawa",
        "transform": "matrix(1,0,0,1,-15.052,9.67)",
        "pathD": "M800,330.1L790,330.1L785,340.1L790,350.1L800,350.1L805,340.1L800,330.1Z",
        "index": 35078
      },
      {
        "id": "Ottawa-South---Ottawa-Sud",
        "en": "Ottawa South",
        "fr": "Ottawa-Sud",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M800,350L790,350L785,360L790,370L800,370L805,360L800,350Z",
        "index": 35077
      },
      {
        "id": "Orléans",
        "en": "Orléans",
        "fr": "Orléans",
        "transform": "matrix(1,0,0,1,-14.8,9.57)",
        "pathD": "M814.8,340.2L804.8,340.2L799.8,350.2L804.8,360.2L814.8,360.2L819.8,350.2L814.8,340.2Z",
        "index": 35076
      },
      {
        "id": "Ottawa-Centre---Ottawa-Centre",
        "en": "Ottawa Centre",
        "fr": "Ottawa-Centre",
        "transform": "matrix(1,0,0,1,-14.8,10)",
        "pathD": "M784.8,340L774.8,340L769.8,350L774.8,360L784.8,360L789.8,350L784.8,340Z",
        "index": 35075
      },
      {
        "id": "Oshawa",
        "en": "Oshawa",
        "fr": "Oshawa",
        "transform": "matrix(1,0,0,1,30.324,20)",
        "pathD": "M754.9,420L744.9,420L739.9,430L744.9,440L754.9,440L759.9,430L754.9,420Z",
        "index": 35074
      },
      {
        "id": "Oakville-North---Burlington---Oakville-Nord---Burlington",
        "en": "Oakville North — Burlington",
        "fr": "Oakville-Nord — Burlington",
        "transform": "matrix(1,0,0,1,30,0.1)",
        "pathD": "M620,549.9L610,549.9L605,559.9L610,569.9L620,569.9L625,559.9L620,549.9Z",
        "index": 35073
      },
      {
        "id": "Oakville",
        "en": "Oakville",
        "fr": "Oakville",
        "transform": "matrix(1,0,0,1,15,10)",
        "pathD": "M650.1,549.9L640.1,549.9L635.1,559.9L640.1,569.9L650.1,569.9L655.1,559.9L650.1,549.9Z",
        "index": 35072
      },
      {
        "id": "Northumberland---Peterborough-South---Northumberland---Peterborough-Sud",
        "en": "Northumberland — Peterborough South",
        "fr": "Northumberland — Peterborough-Sud",
        "transform": "matrix(1,0,0,1,15.1,10)",
        "pathD": "M769.9,410L759.9,410L754.9,420L759.9,430L769.9,430L774.9,420L769.9,410Z",
        "index": 35071
      },
      {
        "id": "Nipissing---Timiskaming",
        "en": "Nipissing — Timiskaming",
        "fr": "Nipissing — Timiskaming",
        "transform": "matrix(1,0,0,1,30.1,-19.9)",
        "pathD": "M649.9,409.9L639.9,409.9L634.9,419.9L639.9,429.9L649.9,429.9L654.9,419.9L649.9,409.9Z",
        "index": 35070
      },
      {
        "id": "Nickel-Belt",
        "en": "Nickel Belt",
        "fr": "Nickel Belt",
        "transform": "matrix(1,0,0,1,30.1,0.3)",
        "pathD": "M634.9,399.7L624.9,399.7L619.9,409.7L624.9,419.7L634.9,419.7L639.9,409.7L634.9,399.7Z",
        "index": 35069
      },
      {
        "id": "Niagara-West---Niagara-Ouest",
        "en": "Niagara West",
        "fr": "Niagara-Ouest",
        "transform": "matrix(1,0,0,1,75.1,-9.9)",
        "pathD": "M634.9,599.9L624.9,599.9L619.9,609.9L624.9,619.9L634.9,619.9L639.9,609.9L634.9,599.9Z",
        "index": 35068
      },
      {
        "id": "Niagara-Falls",
        "en": "Niagara Falls",
        "fr": "Niagara Falls",
        "transform": "matrix(1,0,0,1,74.9,10.1)",
        "pathD": "M665.1,579.9L655.1,579.9L650.1,589.9L655.1,599.9L665.1,599.9L670.1,589.9L665.1,579.9Z",
        "index": 35067
      },
      {
        "id": "Niagara-Centre---Niagara-Centre",
        "en": "Niagara Centre",
        "fr": "Niagara-Centre",
        "transform": "matrix(1,0,0,1,75.208,-9.9)",
        "pathD": "M649.8,609.9L639.8,609.9L634.8,619.9L639.8,629.9L649.8,629.9L654.8,619.9L649.8,609.9Z",
        "index": 35066
      },
      {
        "id": "Newmarket---Aurora",
        "en": "Newmarket — Aurora",
        "fr": "Newmarket — Aurora",
        "transform": "matrix(1,0,0,1,14.9,-10.2)",
        "pathD": "M665.1,440.2L655.1,440.2L650.1,450.2L655.1,460.2L665.1,460.2L670.1,450.2L665.1,440.2Z",
        "index": 35065
      },
      {
        "id": "Nepean",
        "en": "Nepean",
        "fr": "Nepean",
        "transform": "matrix(1,0,0,1,-30,0.2)",
        "pathD": "M800,369.8L790,369.8L785,379.8L790,389.8L800,389.8L805,379.8L800,369.8Z",
        "index": 35064
      },
      {
        "id": "Mississauga---Streetsville",
        "en": "Mississauga — Streetsville",
        "fr": "Mississauga — Streetsville",
        "transform": "matrix(1,0,0,1,-0.1,0.1)",
        "pathD": "M620.1,529.9L610.1,529.9L605.1,539.9L610.1,549.9L620.1,549.9L625.1,539.9L620.1,529.9Z",
        "index": 35063
      },
      {
        "id": "Mississauga---Malton",
        "en": "Mississauga — Malton",
        "fr": "Mississauga — Malton",
        "transform": "",
        "pathD": "M635.1,499.9L625.1,499.9L620.1,509.9L625.1,519.9L635.1,519.9L640.1,509.9L635.1,499.9Z",
        "index": 35062
      },
      {
        "id": "Mississauga---Lakeshore",
        "en": "Mississauga — Lakeshore",
        "fr": "Mississauga — Lakeshore",
        "transform": "",
        "pathD": "M665.1,539.9L655.1,539.9L650.1,549.9L655.1,559.9L665.1,559.9L670.1,549.9L665.1,539.9Z",
        "index": 35061
      },
      {
        "id": "Mississauga---Erin-Mills",
        "en": "Mississauga — Erin Mills",
        "fr": "Mississauga — Erin Mills",
        "transform": "",
        "pathD": "M635.1,539.9L625.1,539.9L620.1,549.9L625.1,559.9L635.1,559.9L640.1,549.9L635.1,539.9Z",
        "index": 35060
      },
      {
        "id": "Mississauga-East---Cooksville---Mississauga-Est---Cooksville",
        "en": "Mississauga East — Cooksville",
        "fr": "Mississauga-Est — Cooksville",
        "transform": "",
        "pathD": "M650,529.9L640,529.9L635,539.9L640,549.9L650,549.9L655,539.9L650,529.9Z",
        "index": 35059
      },
      {
        "id": "Mississauga-Centre---Mississauga-Centre",
        "en": "Mississauga Centre",
        "fr": "Mississauga-Centre",
        "transform": "",
        "pathD": "M635.1,519.9L625.1,519.9L620.1,529.9L625.1,539.9L635.1,539.9L640.1,529.9L635.1,519.9Z",
        "index": 35058
      },
      {
        "id": "Milton",
        "en": "Milton",
        "fr": "Milton",
        "transform": "matrix(1,0,0,1,45,30.1)",
        "pathD": "M605,539.9L595,539.9L590,549.9L595,559.9L605,559.9L610,549.9L605,539.9Z",
        "index": 35057
      },
      {
        "id": "Markham---Unionville",
        "en": "Markham — Unionville",
        "fr": "Markham — Unionville",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M694.9,439.9L684.9,439.9L679.9,449.9L684.9,459.9L694.9,459.9L699.9,449.9L694.9,439.9Z",
        "index": 35056
      },
      {
        "id": "Markham---Thornhill",
        "en": "Markham — Thornhill",
        "fr": "Markham — Thornhill",
        "transform": "matrix(1,0,0,1,0.2,-19.9)",
        "pathD": "M709.8,449.9L699.8,449.9L694.8,459.9L699.8,469.9L709.8,469.9L714.8,459.9L709.8,449.9Z",
        "index": 35055
      },
      {
        "id": "Markkham---Stouffville",
        "en": "Markkham — Stouffville",
        "fr": "Markkham — Stouffville",
        "transform": "matrix(1,0,0,1,15,-9.5)",
        "pathD": "M710,429.5L700,429.5L695,439.5L700,449.5L710,449.5L715,439.5L710,429.5Z",
        "index": 35054
      },
      {
        "id": "London-West---London-Ouest",
        "en": "London West",
        "fr": "London-Ouest",
        "transform": "matrix(1,0,0,1,75.2,30.1)",
        "pathD": "M559.8,549.9L549.8,549.9L544.8,559.9L549.8,569.9L559.8,569.9L564.8,559.9L559.8,549.9Z",
        "index": 35053
      },
      {
        "id": "London-North-Centre---London-Centre-Nord",
        "en": "London North Centre",
        "fr": "London-Centre-Nord",
        "transform": "matrix(1,0,0,1,60.1,40.1)",
        "pathD": "M574.9,559.9L564.9,559.9L559.9,569.9L564.9,579.9L574.9,579.9L579.9,569.9L574.9,559.9Z",
        "index": 35052
      },
      {
        "id": "London---Fanshawe",
        "en": "London — Fanshawe",
        "fr": "London — Fanshawe",
        "transform": "matrix(1,0,0,1,60.1,40.1)",
        "pathD": "M574.9,579.9L564.9,579.9L559.9,589.9L564.9,599.9L574.9,599.9L579.9,589.9L574.9,579.9Z",
        "index": 35051
      },
      {
        "id": "Leeds---Grenville---Thousand-Islands-and-Rideau-Lakes---Leeds---Grenville---Thousand-Islands-et-Rideau-Lakes",
        "en": "Leeds — Grenville — Thousand Islands and Rideau Lakes",
        "fr": "Leeds — Grenville — Thousand Islands et Rideau Lakes",
        "transform": "matrix(1,0,0,1,-29.8,0.1)",
        "pathD": "M814.8,379.9L804.8,379.9L799.8,389.9L804.8,399.9L814.8,399.9L819.8,389.9L814.8,379.9Z",
        "index": 35050
      },
      {
        "id": "Lanark---Frontenac---Kingston",
        "en": "Lanark — Frontenac — Kingston",
        "fr": "Lanark — Frontenac — Kingston",
        "transform": "matrix(1,0,0,1,-14.8,29.7)",
        "pathD": "M784.8,380.3L774.8,380.3L769.8,390.3L774.8,400.3L784.8,400.3L789.8,390.3L784.8,380.3Z",
        "index": 35049
      },
      {
        "id": "Lambton---Kent---Middlesex",
        "en": "Lambton — Kent — Middlesex",
        "fr": "Lambton — Kent — Middlesex",
        "transform": "matrix(1,0,0,1,60.2,20.1)",
        "pathD": "M559.8,569.9L549.8,569.9L544.8,579.9L549.8,589.9L559.8,589.9L564.8,579.9L559.8,569.9Z",
        "index": 35048
      },
      {
        "id": "Kitchener-South---Hespeler---Kitchener-Sud---Hespeler",
        "en": "Kitchener South — Hespeler",
        "fr": "Kitchener-Sud — Hespeler",
        "transform": "matrix(1,0,0,1,30,40.1)",
        "pathD": "M590,529.9L580,529.9L575,539.9L580,549.9L590,549.9L595,539.9L590,529.9Z",
        "index": 35047
      },
      {
        "id": "Kitchener---Conestaga",
        "en": "Kitchener — Conestaga",
        "fr": "Kitchener — Conestaga",
        "transform": "matrix(1,0,0,1,45,10.1)",
        "pathD": "M560,529.9L550,529.9L545,539.9L550,549.9L560,549.9L565,539.9L560,529.9Z",
        "index": 35046
      },
      {
        "id": "Kitchener-Centre---Kitchener-Centre",
        "en": "Kitchener Centre",
        "fr": "Kitchener-Centre",
        "transform": "matrix(1,0,0,1,45.1,10.1)",
        "pathD": "M574.9,539.9L564.9,539.9L559.9,549.9L564.9,559.9L574.9,559.9L579.9,549.9L574.9,539.9Z",
        "index": 35045
      },
      {
        "id": "Kingston-and-the-Islands---Kingston-et-les-Îles",
        "en": "Kingston and the Islands",
        "fr": "Kingston et les Îles",
        "transform": "matrix(1,0,0,1,0.0805,0.1)",
        "pathD": "M800,389.9L790,389.9L785,399.9L790,409.9L800,409.9L805,399.9L800,389.9Z",
        "index": 35044
      },
      {
        "id": "King---Vaughan",
        "en": "King — Vaughan",
        "fr": "King — Vaughan",
        "transform": "matrix(1,0,0,1,0.1,1.13687e-13)",
        "pathD": "M634.9,460L624.9,460L619.9,470L624.9,480L634.9,480L639.9,470L634.9,460Z",
        "index": 35043
      },
      {
        "id": "Kenora",
        "en": "Kenora",
        "fr": "Kenora",
        "transform": "matrix(1,0,0,1,59.8,-19.9)",
        "pathD": "M590.2,389.9L580.2,389.9L575.2,399.9L580.2,409.9L590.2,409.9L595.2,399.9L590.2,389.9Z",
        "index": 35042
      },
      {
        "id": "Kanata---Carleton",
        "en": "Kanata — Carleton",
        "fr": "Kanata — Carleton",
        "transform": "matrix(1,0,0,1,-15.1,10)",
        "pathD": "M770.1,370L760.1,370L755.1,380L760.1,390L770.1,390L775.1,380L770.1,370Z",
        "index": 35041
      },
      {
        "id": "Huron---Bruce",
        "en": "Huron — Bruce",
        "fr": "Huron — Bruce",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M590,470L580,470L575,480L580,490L590,490L595,480L590,470Z",
        "index": 35040
      },
      {
        "id": "Hastings---Lennox-and-Addington",
        "en": "Hastings — Lennox and Addington",
        "fr": "Hastings — Lennox and Addington",
        "transform": "matrix(1,0,0,1,-14.6,9.9)",
        "pathD": "M769.6,390.1L759.6,390.1L754.6,400.1L759.6,410.1L769.6,410.1L774.6,400.1L769.6,390.1Z",
        "index": 35039
      },
      {
        "id": "Hamilton-West---Ancaster---Dundas---Hamilton-Ouest---Ancaster---Dundas",
        "en": "Hamilton West — Ancaster — Dundas",
        "fr": "Hamilton-Ouest — Ancaster — Dundas",
        "transform": "matrix(1,0,0,1,75,30.1)",
        "pathD": "M605,579.9L595,579.9L590,589.9L595,599.9L605,599.9L610,589.9L605,579.9Z",
        "index": 35038
      },
      {
        "id": "Hamilton-Mountain",
        "en": "Hamilton Mountain",
        "fr": "Hamilton Mountain",
        "transform": "matrix(1,0,0,1,90.1,0)",
        "pathD": "M604.9,599.9L594.9,599.9L589.9,609.9L594.9,619.9L604.9,619.9L609.9,609.9L604.9,599.9Z",
        "index": 35037
      },
      {
        "id": "Hamilton-East---Stoney-Creek---Hamilton-Est---Stoney-Creek",
        "en": "Hamilton East — Stoney Creek",
        "fr": "Hamilton-Est — Stoney Creek",
        "transform": "matrix(1,0,0,1,75,-9.9)",
        "pathD": "M620,589.9L610,589.9L605,599.9L610,609.9L620,609.9L625,599.9L620,589.9Z",
        "index": 35036
      },
      {
        "id": "Hamilton-Centre---Hamilton-Centre",
        "en": "Hamilton Centre",
        "fr": "Hamilton-Centre",
        "transform": "matrix(1,0,0,1,60,20)",
        "pathD": "M620,569.9L610,569.9L605,579.9L610,589.9L620,589.9L625,579.9L620,569.9Z",
        "index": 35035
      },
      {
        "id": "Haliburton---Kawartha-Lakes---Brock",
        "en": "Haliburton — Kawartha Lakes — Brock",
        "fr": "Haliburton — Kawartha Lakes — Brock",
        "transform": "matrix(1,0,0,1,29.9,-20)",
        "pathD": "M665.1,420L655.1,420L650.1,430L655.1,440L665.1,440L670.1,430L665.1,420Z",
        "index": 35034
      },
      {
        "id": "Haldimand---Norfolk",
        "en": "Haldimand — Norfolk",
        "fr": "Haldimand — Norfolk",
        "transform": "matrix(1,0,0,1,105.1,10.1)",
        "pathD": "M589.9,609.9L579.9,609.9L574.9,619.9L579.9,629.9L589.9,629.9L594.9,619.9L589.9,609.9Z",
        "index": 35033
      },
      {
        "id": "Guelph",
        "en": "Guelph",
        "fr": "Guelph",
        "transform": "",
        "pathD": "M590,509.9L580,509.9L575,519.9L580,529.9L590,529.9L595,519.9L590,509.9Z",
        "index": 35032
      },
      {
        "id": "Glengarry---Prescott---Russell",
        "en": "Glengarry — Prescott — Russell",
        "fr": "Glengarry — Prescott — Russell",
        "transform": "matrix(1,0,0,1,-14.9,9.8)",
        "pathD": "M829.9,350.2L819.9,350.2L814.9,360.2L819.9,370.2L829.9,370.2L834.9,360.2L829.9,350.2Z",
        "index": 35031
      },
      {
        "id": "Flamborough---Glanbrook",
        "en": "Flamborough — Glanbrook",
        "fr": "Flamborough — Glanbrook",
        "transform": "matrix(1,0,0,1,60,40)",
        "pathD": "M605,559.9L595,559.9L590,569.9L595,579.9L605,579.9L610,569.9L605,559.9Z",
        "index": 35030
      },
      {
        "id": "Etobicoke-North---Etobicoke-Nord",
        "en": "Etobicoke North",
        "fr": "Etobicoke-Nord",
        "transform": "",
        "pathD": "M650,489.9L640,489.9L635,499.9L640,509.9L650,509.9L655,499.9L650,489.9Z",
        "index": 35029
      },
      {
        "id": "Etobicoke---Lakeshore",
        "en": "Etobicoke — Lakeshore",
        "fr": "Etobicoke — Lakeshore",
        "transform": "",
        "pathD": "M665.1,519.9L655.1,519.9L650.1,529.9L655.1,539.9L665.1,539.9L670.1,529.9L665.1,519.9Z",
        "index": 35028
      },
      {
        "id": "Etobicoke-Centre---Etobicoke-Centre",
        "en": "Etobicoke Centre",
        "fr": "Etobicoke-Centre",
        "transform": "",
        "pathD": "M650,509.9L640,509.9L635,519.9L640,529.9L650,529.9L655,519.9L650,509.9Z",
        "index": 35027
      },
      {
        "id": "Essex",
        "en": "Essex",
        "fr": "Essex",
        "transform": "matrix(1,0,0,1,60.3,-0.154)",
        "pathD": "M544.7,599.9L534.7,599.9L529.7,609.9L534.7,619.9L544.7,619.9L549.7,609.9L544.7,599.9Z",
        "index": 35026
      },
      {
        "id": "Elgin---Middlesex---London",
        "en": "Elgin — Middlesex — London",
        "fr": "Elgin — Middlesex — London",
        "transform": "matrix(1,0,0,1,75.188,30.1)",
        "pathD": "M574.9,599.9L564.9,599.9L559.9,609.9L564.9,619.9L574.9,619.9L579.9,609.9L574.9,599.9Z",
        "index": 35025
      },
      {
        "id": "Eglinton---Lawrence",
        "en": "Eglinton — Lawrence",
        "fr": "Eglinton — Lawrence",
        "transform": "matrix(1,0,0,1,0.4,-19.9)",
        "pathD": "M694.6,479.9L684.6,479.9L679.6,489.9L684.6,499.9L694.6,499.9L699.6,489.9L694.6,479.9Z",
        "index": 35024
      },
      {
        "id": "Durham",
        "en": "Durham",
        "fr": "Durham",
        "transform": "matrix(1,0,0,1,30.1,20.1)",
        "pathD": "M739.9,409.9L729.9,409.9L724.9,419.9L729.9,429.9L739.9,429.9L744.9,419.9L739.9,409.9Z",
        "index": 35023
      },
      {
        "id": "Dufferin---Caledon",
        "en": "Dufferin — Caledon",
        "fr": "Dufferin — Caledon",
        "transform": "matrix(1,0,0,1,0.1,0.4)",
        "pathD": "M619.9,469.6L609.9,469.6L604.9,479.6L609.9,489.6L619.9,489.6L624.9,479.6L619.9,469.6Z",
        "index": 35022
      },
      {
        "id": "Don-Valley-West---Don-Valley-Ouest",
        "en": "Don Valley West",
        "fr": "Don Valley-Ouest",
        "transform": "matrix(1,0,0,1,0.2,-19.9)",
        "pathD": "M709.8,489.9L699.8,489.9L694.8,499.9L699.8,509.9L709.8,509.9L714.8,499.9L709.8,489.9Z",
        "index": 35021
      },
      {
        "id": "Don-Valley-North---Don-Valley-Nord",
        "en": "Don Valley North",
        "fr": "Don Valley-Nord",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M709.8,469.9L699.8,469.9L694.8,479.9L699.8,489.9L709.8,489.9L714.8,479.9L709.8,469.9Z",
        "index": 35020
      },
      {
        "id": "Don-Valley-East---Don-Valley-Est",
        "en": "Don Valley East",
        "fr": "Don Valley-Est",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M724.9,480.1L714.9,480.1L709.9,490.1L714.9,500.1L724.9,500.1L729.9,490.1L724.9,480.1Z",
        "index": 35019
      },
      {
        "id": "Davenport",
        "en": "Davenport",
        "fr": "Davenport",
        "transform": "matrix(1,0,0,1,0.2,-0.2)",
        "pathD": "M679.8,510.2L669.8,510.2L664.8,520.2L669.8,530.2L679.8,530.2L684.8,520.2L679.8,510.2Z",
        "index": 35018
      },
      {
        "id": "Chatham-Kent---Leamington",
        "en": "Chatham-Kent — Leamington",
        "fr": "Chatham-Kent — Leamington",
        "transform": "matrix(1,0,0,1,59.978,20.1)",
        "pathD": "M559.9,589.9L549.9,589.9L544.9,599.9L549.9,609.9L559.9,609.9L564.9,599.9L559.9,589.9Z",
        "index": 35017
      },
      {
        "id": "Cambridge",
        "en": "Cambridge",
        "fr": "Cambridge",
        "transform": "matrix(1,0,0,1,60,40.1)",
        "pathD": "M590,549.9L580,549.9L575,559.9L580,569.9L590,569.9L595,559.9L590,549.9Z",
        "index": 35016
      },
      {
        "id": "Burlington",
        "en": "Burlington",
        "fr": "Burlington",
        "transform": "matrix(1,0,0,1,29.9,20.1)",
        "pathD": "M635.1,559.9L625.1,559.9L620.1,569.9L625.1,579.9L635.1,579.9L640.1,569.9L635.1,559.9Z",
        "index": 35015
      },
      {
        "id": "Bruce---Grey---Owen-Sound",
        "en": "Bruce — Grey — Owen Sound",
        "fr": "Bruce — Grey — Owen Sound",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M604.9,459.9L594.9,459.9L589.9,469.9L594.9,479.9L604.9,479.9L609.9,469.9L604.9,459.9Z",
        "index": 35014
      },
      {
        "id": "Brantford---Brant",
        "en": "Brantford — Brant",
        "fr": "Brantford — Brant",
        "transform": "matrix(1,0,0,1,60,40.1)",
        "pathD": "M590,569.9L580,569.9L575,579.9L580,589.9L590,589.9L595,579.9L590,569.9Z",
        "index": 35013
      },
      {
        "id": "Brampton-West---Brampton-Ouest",
        "en": "Brampton West",
        "fr": "Brampton-Ouest",
        "transform": "",
        "pathD": "M605,499.9L595,499.9L590,509.9L595,519.9L605,519.9L610,509.9L605,499.9Z",
        "index": 35012
      },
      {
        "id": "Brampton-South---Brampton-Sud",
        "en": "Brampton South",
        "fr": "Brampton-Sud",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M620,509.9L610,509.9L605,519.9L610,529.9L620,529.9L625,519.9L620,509.9Z",
        "index": 35011
      },
      {
        "id": "Brampton-North---Brampton-Nord",
        "en": "Brampton North",
        "fr": "Brampton-Nord",
        "transform": "",
        "pathD": "M605,479.9L595,479.9L590,489.9L595,499.9L605,499.9L610,489.9L605,479.9Z",
        "index": 35010
      },
      {
        "id": "Brampton-East---Brampton-Est",
        "en": "Brampton East",
        "fr": "Brampton-Est",
        "transform": "",
        "pathD": "M634.8,479.9L624.8,479.9L619.8,489.9L624.8,499.9L634.8,499.9L639.8,489.9L634.8,479.9Z",
        "index": 35009
      },
      {
        "id": "Brampton-Centre---Brampton-Centre",
        "en": "Brampton Centre",
        "fr": "Brampton-Centre",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M620,489.9L610,489.9L605,499.9L610,509.9L620,509.9L625,499.9L620,489.9Z",
        "index": 35008
      },
      {
        "id": "Beaches---East-York",
        "en": "Beaches — East York",
        "fr": "Beaches — East York",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M724.9,499.9L714.9,499.9L709.9,509.9L714.9,519.9L724.9,519.9L729.9,509.9L724.9,499.9Z",
        "index": 35007
      },
      {
        "id": "Bay-of-Quinte---Baie-de-Quinte",
        "en": "Bay of Quinte",
        "fr": "Baie de Quinte",
        "transform": "matrix(1,0,0,1,0.2,-0.1)",
        "pathD": "M784.8,400.1L774.8,400.1L769.8,410.1L774.8,420.1L784.8,420.1L789.8,410.1L784.8,400.1Z",
        "index": 35006
      },
      {
        "id": "Barrie---Springwater---Oro-Medonte",
        "en": "Barrie — Springwater — Oro-Medonte",
        "fr": "Barrie — Springwater — Oro-Medonte",
        "transform": "matrix(1,0,0,1,30.1,-19.8)",
        "pathD": "M634.9,439.8L624.9,439.8L619.9,449.8L624.9,459.8L634.9,459.8L639.9,449.8L634.9,439.8Z",
        "index": 35005
      },
      {
        "id": "Barrie---Innisfil",
        "en": "Barrie — Innisfil",
        "fr": "Barrie — Innisfil",
        "transform": "matrix(1,0,0,1,15.1,-10.2)",
        "pathD": "M649.9,450.2L639.9,450.2L634.9,460.2L639.9,470.2L649.9,470.2L654.9,460.2L649.9,450.2Z",
        "index": 35004
      },
      {
        "id": "Aurora---Oak-Ridges---Richmond-Hill",
        "en": "Aurora — Oak Ridges — Richmond Hill",
        "fr": "Aurora — Oak Ridges — Richmond Hill",
        "transform": "",
        "pathD": "M665.1,459.9L655.1,459.9L650.1,469.9L655.1,479.9L665.1,479.9L670.1,469.9L665.1,459.9Z",
        "index": 35003
      },
      {
        "id": "Algoma---Manitoulin---Kapuskasing",
        "en": "Algoma — Manitoulin — Kapuskasing",
        "fr": "Algoma — Manitoulin — Kapuskasing",
        "transform": "matrix(1,0,0,1,15.1,30.2)",
        "pathD": "M619.9,389.8L609.9,389.8L604.9,399.8L609.9,409.8L619.9,409.8L624.9,399.8L619.9,389.8Z",
        "index": 35002
      },
      {
        "id": "Ajax",
        "en": "Ajax",
        "fr": "Ajax",
        "transform": "matrix(1,0,0,1,15.1,10)",
        "pathD": "M754.9,440L744.9,440L739.9,450L744.9,460L754.9,460L759.9,450L754.9,440Z",
        "index": 35001
      }
    ]
  },
  {
    "id": "Quebec",
    "flagUrl": "/images/flags/Flag_of_Quebec.svg",
    "en": "Quebec",
    "fr": "Québec",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 24,
    "ridings": [
      {
        "id": "Vimy",
        "en": "Vimy",
        "fr": "Vimy",
        "transform": "matrix(1,0,0,1,-44.9,-30.662)",
        "pathD": "M889.9,330.4L879.9,330.4L874.9,340.4L879.9,350.4L889.9,350.4L894.9,340.4L889.9,330.4Z",
        "index": 24078
      },
      {
        "id": "Ville-Marie---Le-Sud-Ouest---Île-des-Soeurs",
        "en": "Ville-Marie — Le Sud-Ouest — Île-des-Soeurs",
        "fr": "Ville-Marie — Le Sud-Ouest — Île-des-Soeurs",
        "transform": "matrix(1,0,0,1,-29.6,-20.153)",
        "pathD": "M904.6,399.9L894.6,399.9L889.6,409.9L894.6,419.9L904.6,419.9L909.6,409.9L904.6,399.9Z",
        "index": 24077
      },
      {
        "id": "Trois-Rivières",
        "en": "Trois-Rivières",
        "fr": "Trois-Rivières",
        "transform": "matrix(1,0,0,1,-29.9,-20.3)",
        "pathD": "M859.9,290.3L849.9,290.3L844.9,300.3L849.9,310.3L859.9,310.3L864.9,300.3L859.9,290.3Z",
        "index": 24076
      },
      {
        "id": "Terrebonne",
        "en": "Terrebonne",
        "fr": "Terrebonne",
        "transform": "matrix(1,0,0,1,-59.8,-19.8)",
        "pathD": "M919.8,309.8L909.8,309.8L904.8,319.8L909.8,329.8L919.8,329.8L924.8,319.8L919.8,309.8Z",
        "index": 24075
      },
      {
        "id": "Vaudreiul---Soulanges",
        "en": "Vaudreiul — Soulanges",
        "fr": "Vaudreiul — Soulanges",
        "transform": "matrix(1,0,0,1,-14.9,9.7)",
        "pathD": "M844.9,360.3L834.9,360.3L829.9,370.3L834.9,380.3L844.9,380.3L849.9,370.3L844.9,360.3Z",
        "index": 24074
      },
      {
        "id": "Sherbrooke",
        "en": "Sherbrooke",
        "fr": "Sherbrooke",
        "transform": "matrix(1,0,0,1,-15,-9.8)",
        "pathD": "M980,390L970,390L965,400L970,410L980,410L985,400L980,390Z",
        "index": 24073
      },
      {
        "id": "Shefford",
        "en": "Shefford",
        "fr": "Shefford",
        "transform": "matrix(1,0,0,1,-29.8565,-20)",
        "pathD": "M965,380L955,380L950,390L955,400L965,400L970,390L965,380Z",
        "index": 24072
      },
      {
        "id": "Salaberry---Suroît",
        "en": "Salaberry — Suroît",
        "fr": "Salaberry — Suroît",
        "transform": "matrix(1,0,0,1,-29.9,-0.3)",
        "pathD": "M844.9,380.3L834.9,380.3L829.9,390.3L834.9,400.3L844.9,400.3L849.9,390.3L844.9,380.3Z",
        "index": 24071
      },
      {
        "id": "Saint-Maurice---Champlain",
        "en": "Saint-Maurice — Champlain",
        "fr": "Saint-Maurice — Champlain",
        "transform": "matrix(1,0,0,1,-44.9,10.1)",
        "pathD": "M829.9,290L819.9,290L814.9,300L819.9,310L829.9,310L834.9,300L829.9,290Z",
        "index": 24070
      },
      {
        "id": "Saint-Léonard---Saint-Michel",
        "en": "Saint-Léonard — Saint Michel",
        "fr": "Saint-Léonard — Saint Michel",
        "transform": "matrix(1,0,0,1,-59.8,0.2)",
        "pathD": "M919.8,329.8L909.8,329.8L904.8,339.8L909.8,349.8L919.8,349.8L924.8,339.8L919.8,329.8Z",
        "index": 24069
      },
      {
        "id": "Saint-Laurent",
        "en": "Saint-Laurent",
        "fr": "Saint-Laurent",
        "transform": "matrix(1,0,0,1,-29.917,-40.7)",
        "pathD": "M875,380.7L865,380.7L860,390.7L865,400.7L875,400.7L880,390.7L875,380.7Z",
        "index": 24068
      },
      {
        "id": "Saint-Jean",
        "en": "Saint-Jean",
        "fr": "Saint-Jean",
        "transform": "matrix(1,0,0,1,15.4,-29.9)",
        "pathD": "M904.6,419.9L894.6,419.9L889.6,429.9L894.6,439.9L904.6,439.9L909.6,429.9L904.6,419.9Z",
        "index": 24067
      },
      {
        "id": "Saint-Hyacinthe---Bagot",
        "en": "Saint-Hyacinthe — Bagot",
        "fr": "Saint-Hyacinthe — Bagot",
        "transform": "matrix(1,0,0,1,-29.9,-20)",
        "pathD": "M949.9,350L939.9,350L934.9,360L939.9,370L949.9,370L954.9,360L949.9,350Z",
        "index": 24066
      },
      {
        "id": "Marc-Aurèle-Fortin",
        "en": "Marc-Aurèle-Fortin",
        "fr": "Marc-Aurèle-Fortin",
        "transform": "matrix(1,0,0,1,-44.9,-30.3)",
        "pathD": "M889.9,310.3L879.9,310.3L874.9,320.3L879.9,330.3L889.9,330.3L894.9,320.3L889.9,310.3Z",
        "index": 24065
      },
      {
        "id": "Rosemont---La-Petite-Patrie",
        "en": "Rosemont — La Petite-Patrie",
        "fr": "Rosemont — La Petite-Patrie",
        "transform": "matrix(1,0,0,1,-29.5945,-39.8)",
        "pathD": "M919.8,369.8L909.8,369.8L904.8,379.8L909.8,389.8L919.8,389.8L924.8,379.8L919.8,369.8Z",
        "index": 24064
      },
      {
        "id": "Rivière-du-Nord",
        "en": "Rivière-du-Nord",
        "fr": "Rivière-du-Nord",
        "transform": "matrix(1,0,0,1,-29.9,-20.3)",
        "pathD": "M844.9,340.3L834.9,340.3L829.9,350.3L834.9,360.3L844.9,360.3L849.9,350.3L844.9,340.3Z",
        "index": 24063
      },
      {
        "id": "Rivière-des-Mille-Îles",
        "en": "Rivière-des-Mille-Îles",
        "fr": "Rivière-des-Mille-Îles",
        "transform": "matrix(1,0,0,1,-45,-10.3)",
        "pathD": "M875,320.3L865,320.3L860,330.3L865,340.3L875,340.3L880,330.3L875,320.3Z",
        "index": 24062
      },
      {
        "id": "Vaudreiul---Soulanges1",
        "en": "Vaudreiul — Soulanges",
        "fr": "Vaudreiul — Soulanges",
        "transform": "matrix(1,0,0,1,-30,19.8)",
        "pathD": "M980,350.4L970,350.4L965,360.4L970,370.4L980,370.4L985,360.4L980,350.4Z",
        "index": 24061
      },
      {
        "id": "Repentigny",
        "en": "Repentigny",
        "fr": "Repentigny",
        "transform": "matrix(1,0,0,1,-74.9575,-50.1)",
        "pathD": "M949.9,330.1L939.9,330.1L934.9,340.1L939.9,350.1L949.9,350.1L954.9,340.1L949.9,330.1Z",
        "index": 24060
      },
      {
        "id": "Québec",
        "en": "Québec",
        "fr": "Québec",
        "transform": "matrix(1,0,0,1,-29.6,-59.843)",
        "pathD": "M904.6,299.6L894.6,299.6L889.6,309.6L894.6,319.6L904.6,319.6L909.6,309.6L904.6,299.6Z",
        "index": 24059
      },
      {
        "id": "Portneuf---Jacques-Cartier",
        "en": "Portneuf — Jacques-Cartier",
        "fr": "Portneuf — Jacques-Cartier",
        "transform": "matrix(1,0,0,1,-14.9,-10.3)",
        "pathD": "M859.9,270.3L849.9,270.3L844.9,280.3L849.9,290.3L859.9,290.3L864.9,280.3L859.9,270.3Z",
        "index": 24058
      },
      {
        "id": "Pontiac",
        "en": "Pontiac",
        "fr": "Pontiac",
        "transform": "matrix(1,0,0,1,-74.9,29.9)",
        "pathD": "M829.9,310.1L819.9,310.1L814.9,320.1L819.9,330.1L829.9,330.1L834.9,320.1L829.9,310.1Z",
        "index": 24057
      },
      {
        "id": "Pierrefonds-Dollard",
        "en": "Pierrefonds-Dollard",
        "fr": "Pierrefonds-Dollard",
        "transform": "matrix(1,0,0,1,-45,-10.7)",
        "pathD": "M875,360.7L865,360.7L860,370.7L865,380.7L875,380.7L880,370.7L875,360.7Z",
        "index": 24056
      },
      {
        "id": "Papineau",
        "en": "Papineau",
        "fr": "Papineau",
        "transform": "matrix(1,0,0,1,-29.6,-20)",
        "pathD": "M904.6,360L894.6,360L889.6,370L894.6,380L904.6,380L909.6,370L904.6,360Z",
        "index": 24055
      },
      {
        "id": "Outremont",
        "en": "Outremont",
        "fr": "Outremont",
        "transform": "matrix(1,0,0,1,-14.9,-29.9)",
        "pathD": "M889.9,389.9L879.9,389.9L874.9,399.9L879.9,409.9L889.9,409.9L894.9,399.9L889.9,389.9Z",
        "index": 24054
      },
      {
        "id": "Notre-Dame-de-Grâce---Westmount",
        "en": "Notre-Dame-de-Grâce — Westmount",
        "fr": "Notre-Dame-de-Grâce — Westmount",
        "transform": "matrix(1,0,0,1,-29.9,-40.134)",
        "pathD": "M889.9,409.9L879.9,409.9L874.9,419.9L879.9,429.9L889.9,429.9L894.9,419.9L889.9,409.9Z",
        "index": 24053
      },
      {
        "id": "Mont-Royal---Mount-Royal",
        "en": "Mont-Royal",
        "fr": "Mount Royal",
        "transform": "matrix(1,0,0,1,-29.9,-20.4)",
        "pathD": "M889.9,370.4L879.9,370.4L874.9,380.4L879.9,390.4L889.9,390.4L894.9,380.4L889.9,370.4Z",
        "index": 24052
      },
      {
        "id": "Montmagny---l-Islet---Kamouraska---Rivière-du-Loup",
        "en": "Montmagny — l’Islet — Kamouraska — Rivière-du-Loup",
        "fr": "Montmagny — l’Islet — Kamouraska — Rivière-du-Loup",
        "transform": "matrix(1,0,0,1,-14.9,10.1)",
        "pathD": "M949.9,289.9L939.9,289.9L934.9,299.9L939.9,309.9L949.9,309.9L954.9,299.9L949.9,289.9Z",
        "index": 24051
      },
      {
        "id": "Montcalm",
        "en": "Montcalm",
        "fr": "Montcalm",
        "transform": "matrix(1,0,0,1,-44.9,-10.3)",
        "pathD": "M859.9,310.3L849.9,310.3L844.9,320.3L849.9,330.3L859.9,330.3L864.9,320.3L859.9,310.3Z",
        "index": 24050
      },
      {
        "id": "Montarville",
        "en": "Montarville",
        "fr": "Montarville",
        "transform": "matrix(1,0,0,1,-29.9,-40)",
        "pathD": "M949.9,390L939.9,390L934.9,400L939.9,410L949.9,410L954.9,400L949.9,390Z",
        "index": 24049
      },
      {
        "id": "Mirabel",
        "en": "Mirabel",
        "fr": "Mirabel",
        "transform": "matrix(1,0,0,1,-44.8945,-10.4)",
        "pathD": "M859.9,350.4L849.9,350.4L844.9,360.4L849.9,370.4L859.9,370.4L864.9,360.4L859.9,350.4Z",
        "index": 24048
      },
      {
        "id": "Mégantic---l-Érable",
        "en": "Mégantic — l’Érable",
        "fr": "Mégantic — l’Érable",
        "transform": "matrix(1,0,0,1,-30.017,19.8)",
        "pathD": "M980,330.2L970,330.2L965,340.2L970,350.2L980,350.2L985,340.2L980,330.2Z",
        "index": 24047
      },
      {
        "id": "Manicouagan",
        "en": "Manicouagan",
        "fr": "Manicouagan",
        "transform": "matrix(1,0,0,1,15.1,10.2)",
        "pathD": "M889.9,229.8L879.9,229.8L874.9,239.8L879.9,249.8L889.9,249.8L894.9,239.8L889.9,229.8Z",
        "index": 24046
      },
      {
        "id": "Louis-Saint-Laurent",
        "en": "Louis-Saint-Laurent",
        "fr": "Louis-Saint-Laurent",
        "transform": "matrix(1,0,0,1,-44.6,-9.8)",
        "pathD": "M904.6,279.8L894.6,279.8L889.6,289.8L894.6,299.8L904.6,299.8L909.6,289.8L904.6,279.8Z",
        "index": 24045
      },
      {
        "id": "Louis-Hébert",
        "en": "Louis-Hébert",
        "fr": "Louis-Hébert",
        "transform": "matrix(1,0,0,1,-14.9,-30.343)",
        "pathD": "M889.9,290.1L879.9,290.1L874.9,300.1L879.9,310.1L889.9,310.1L894.9,300.1L889.9,290.1Z",
        "index": 24044
      },
      {
        "id": "Longueuil---Saint-Hubert",
        "en": "Longueuil — Saint-Hubert",
        "fr": "Longueuil — Saint-Hubert",
        "transform": "matrix(1,0,0,1,-44.9,-10.1)",
        "pathD": "M934.9,380.1L924.9,380.1L919.9,390.1L924.9,400.1L934.9,400.1L939.9,390.1L934.9,380.1Z",
        "index": 24043
      },
      {
        "id": "Lévis---Lotbinière",
        "en": "Lévis — Lotbinière",
        "fr": "Lévis — Lotbinière",
        "transform": "matrix(1,0,0,1,-45.07,-10)",
        "pathD": "M965,320L955,320L950,330L955,340L965,340L970,330L965,320Z",
        "index": 24042
      },
      {
        "id": "Longueuil---Charles-Lemoyne",
        "en": "Longueuil — Charles-Lemoyne",
        "fr": "Longueuil — Charles-Lemoyne",
        "transform": "matrix(1,0,0,1,-14.73,-9.8)",
        "pathD": "M919.8,389.8L909.8,389.8L904.8,399.8L909.8,409.8L919.8,409.8L924.8,399.8L919.8,389.8Z",
        "index": 24041
      },
      {
        "id": "Laval---Les-Îles",
        "en": "Laval — Les Îles",
        "fr": "Laval — Les Îles",
        "transform": "matrix(1,0,0,1,-45,-10.4)",
        "pathD": "M875,340.4L865,340.4L860,350.4L865,360.4L875,360.4L880,350.4L875,340.4Z",
        "index": 24040
      },
      {
        "id": "Laurier---Sainte-Marie",
        "en": "Laurier — Sainte-Marie",
        "fr": "Laurier — Sainte-Marie",
        "transform": "matrix(1,0,0,1,-14.6,-30.1)",
        "pathD": "M904.6,380.1L894.6,380.1L889.6,390.1L894.6,400.1L904.6,400.1L909.6,390.1L904.6,380.1Z",
        "index": 24039
      },
      {
        "id": "Laurentides---Labelle",
        "en": "Laurentides — Labelle",
        "fr": "Laurentides — Labelle",
        "transform": "matrix(1,0,0,1,-44.9,-10.1)",
        "pathD": "M844.9,320.1L834.9,320.1L829.9,330.1L834.9,340.1L844.9,340.1L849.9,330.1L844.9,320.1Z",
        "index": 24038
      },
      {
        "id": "Lasalle---Émard---Verdun",
        "en": "Lasalle — Émard — Verdun",
        "fr": "Lasalle — Émard — Verdun",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M859.9,409.9L849.9,409.9L844.9,419.9L849.9,429.9L859.9,429.9L864.9,419.9L859.9,409.9Z",
        "index": 24037
      },
      {
        "id": "Lac-Saint-Louis",
        "en": "Lac-Saint-Louis",
        "fr": "Lac-Saint-Louis",
        "transform": "matrix(1,0,0,1,-14.9,-10.5)",
        "pathD": "M859.9,370.5L849.9,370.5L844.9,380.5L849.9,390.5L859.9,390.5L864.9,380.5L859.9,370.5Z",
        "index": 24036
      },
      {
        "id": "Lac-Saint-Jean",
        "en": "Lac-Saint-Jean",
        "fr": "Lac-Saint-Jean",
        "transform": "matrix(1,0,0,1,-44.9,-10)",
        "pathD": "M844.9,280L834.9,280L829.9,290L834.9,300L844.9,300L849.9,290L844.9,280Z",
        "index": 24035
      },
      {
        "id": "La-Prairie",
        "en": "La Prairie",
        "fr": "La Prairie",
        "transform": "matrix(1,0,0,1,0,-0.2)",
        "pathD": "M875,400.2L865,400.2L860,410.2L865,420.2L875,420.2L880,410.2L875,400.2Z",
        "index": 24034
      },
      {
        "id": "La-Pointe-de-l-Île",
        "en": "La Pointe-de-l’Île",
        "fr": "La Pointe-de-l’Île",
        "transform": "matrix(1,0,0,1,-44.9,-30.2)",
        "pathD": "M934.9,340.2L924.9,340.2L919.9,350.2L924.9,360.2L934.9,360.2L939.9,350.2L934.9,340.2Z",
        "index": 24033
      },
      {
        "id": "Jonquière",
        "en": "Jonquière",
        "fr": "Jonquière",
        "transform": "matrix(1,0,0,1,30.1,-20.3)",
        "pathD": "M859.9,250.3L849.9,250.3L844.9,260.3L849.9,270.3L859.9,270.3L864.9,260.3L859.9,250.3Z",
        "index": 24032
      },
      {
        "id": "Argenteuil---La-Petite-Nation",
        "en": "Argenteuil — La Petite-Nation",
        "fr": "Argenteuil — La Petite-Nation",
        "transform": "matrix(1,0,0,1,-44.9485,-10.1)",
        "pathD": "M844.9,300.1L834.9,300.1L829.9,310.1L834.9,320.1L844.9,320.1L849.9,310.1L844.9,300.1Z",
        "index": 24031
      },
      {
        "id": "Hull---Aylmer",
        "en": "Hull — Aylmer",
        "fr": "Hull — Aylmer",
        "transform": "matrix(1,0,0,1,-30,20)",
        "pathD": "M800,310L790,310L785,320L790,330L800,330L805,320L800,310Z",
        "index": 24030
      },
      {
        "id": "Honoré-Mercier",
        "en": "Honoré-Mercier",
        "fr": "Honoré-Mercier",
        "transform": "matrix(1,0,0,1,-59.9,-20.1)",
        "pathD": "M934.9,320.1L924.9,320.1L919.9,330.1L924.9,340.1L934.9,340.1L939.9,330.1L934.9,320.1Z",
        "index": 24029
      },
      {
        "id": "Hochelaga",
        "en": "Hochelaga",
        "fr": "Hochelaga",
        "transform": "matrix(1,0,0,1,-14.8,-30.208)",
        "pathD": "M919.8,349.9L909.8,349.9L904.8,359.9L909.8,369.9L919.8,369.9L924.8,359.9L919.8,349.9Z",
        "index": 24028
      },
      {
        "id": "Gatineau",
        "en": "Gatineau",
        "fr": "Gatineau",
        "transform": "matrix(1,0,0,1,-29.8,0)",
        "pathD": "M814.8,320.1L804.8,320.1L799.8,330.1L804.8,340.1L814.8,340.1L819.8,330.1L814.8,320.1Z",
        "index": 24027
      },
      {
        "id": "Gaspésie---Les-Îles-de-la-Madeleine",
        "en": "Gaspésie — Les Îles-de-la-Madeleine",
        "fr": "Gaspésie — Les Îles-de-la-Madeleine",
        "transform": "matrix(1,0,0,1,-15,9.932)",
        "pathD": "M980,249.8L970,249.8L965,259.8L970,269.8L980,269.8L985,259.8L980,249.8Z",
        "index": 24026
      },
      {
        "id": "Drummond",
        "en": "Drummond",
        "fr": "Drummond",
        "transform": "",
        "pathD": "M965,360.2L955,360.2L950,370.2L955,380.2L965,380.2L970,370.2L965,360.2Z",
        "index": 24025
      },
      {
        "id": "Dorval---Lachine---Lasalle",
        "en": "Dorval — Lachine — Lasalle",
        "fr": "Dorval — Lachine — Lasalle",
        "transform": "matrix(1,0,0,1,-14.9,-10.7)",
        "pathD": "M859.9,390.7L849.9,390.7L844.9,400.7L849.9,410.7L859.9,410.7L864.9,400.7L859.9,390.7Z",
        "index": 24024
      },
      {
        "id": "Compton---Stanstead",
        "en": "Compton — Stanstead",
        "fr": "Compton — Stanstead",
        "transform": "matrix(1,0,0,1,0,-0.003)",
        "pathD": "M980,369.9L970,369.9L965,379.9L970,389.9L980,389.9L985,379.9L980,369.9Z",
        "index": 24023
      },
      {
        "id": "Chicoutimi---Le-Fjord",
        "en": "Chicoutimi — Le Fjord",
        "fr": "Chicoutimi — Le Fjord",
        "transform": "matrix(1,0,0,1,30,20)",
        "pathD": "M875,240L865,240L860,250L865,260L875,260L880,250L875,240Z",
        "index": 24022
      },
      {
        "id": "Châteauguay---Lacolle",
        "en": "Châteauguay — Lacolle",
        "fr": "Châteauguay — Lacolle",
        "transform": "matrix(1,0,0,1,-14.9,-9.9)",
        "pathD": "M844.9,399.9L834.9,399.9L829.9,409.9L834.9,419.9L844.9,419.9L849.9,409.9L844.9,399.9Z",
        "index": 24021
      },
      {
        "id": "Beauport---Côte-de-Beaupré---Île-d-Orléans---Charlevoix",
        "en": "Beauport — Côte-de-Beaupré — Île d’Orléans — Charlevoix",
        "fr": "Beauport — Côte-de-Beaupré — Île d’Orléans — Charlevoix",
        "transform": "matrix(1,0,0,1,15,-10)",
        "pathD": "M875,260L865,260L860,270L865,280L875,280L880,270L875,260Z",
        "index": 24020
      },
      {
        "id": "Charlesbourg---Haute-Saint-Charles",
        "en": "Charlesbourg — Haute-Saint-Charles",
        "fr": "Charlesbourg — Haute-Saint-Charles",
        "transform": "matrix(1,0,0,1,-15,-30)",
        "pathD": "M875,280L865,280L860,290L865,300L875,300L880,290L875,280Z",
        "index": 24019
      },
      {
        "id": "Rimouski-Neigette---Témiscouata---Les-Basques",
        "en": "Rimouski-Neigette — Témiscouata — Les Basques",
        "fr": "Rimouski-Neigette — Témiscouata — Les Basques",
        "transform": "matrix(1,0,0,1,-15.2,9.9)",
        "pathD": "M965.2,279.9L955.2,279.9L950.2,289.9L955.2,299.9L965.2,299.9L970.2,289.9L965.2,279.9Z",
        "index": 24018
      },
      {
        "id": "Brossard---Saint-Lambert",
        "en": "Brossard — Saint-Lambert",
        "fr": "Brossard — Saint-Lambert",
        "transform": "matrix(1,0,0,1,-44.9,-10)",
        "pathD": "M934.9,400L924.9,400L919.9,410L924.9,420L934.9,420L939.9,410L934.9,400Z",
        "index": 24017
      },
      {
        "id": "Brome---Missisquoi",
        "en": "Brome — Missisquoi",
        "fr": "Brome — Missisquoi",
        "transform": "matrix(1,0,0,1,-30,-20.2)",
        "pathD": "M965,400.2L955,400.2L950,410.2L955,420.2L965,420.2L970,410.2L965,400.2Z",
        "index": 24016
      },
      {
        "id": "Bourassa",
        "en": "Bourassa",
        "fr": "Bourassa",
        "transform": "matrix(1,0,0,1,-29.6,-19.9)",
        "pathD": "M904.6,339.9L894.6,339.9L889.6,349.9L894.6,359.9L904.6,359.9L909.6,349.9L904.6,339.9Z",
        "index": 24015
      },
      {
        "id": "Pierre-Boucher---Les-Patriotes---Verchères",
        "en": "Pierre-Boucher — Les Patriotes — Verchères",
        "fr": "Pierre-Boucher — Les Patriotes — Verchères",
        "transform": "matrix(1,0,0,1,-29.83,-0.2)",
        "pathD": "M934.9,360.2L924.9,360.2L919.9,370.2L924.9,380.2L934.9,380.2L939.9,370.2L934.9,360.2Z",
        "index": 24014
      },
      {
        "id": "Thérèse-De-Blainville",
        "en": "Thérèse-De Blainville",
        "fr": "Thérèse-De Blainville",
        "transform": "matrix(1,0,0,1,-29.9185,-40.4)",
        "pathD": "M859.9,330.4L849.9,330.4L844.9,340.4L849.9,350.4L859.9,350.4L864.9,340.4L859.9,330.4Z",
        "index": 24013
      },
      {
        "id": "Berthier---Maskinongé",
        "en": "Berthier — Maskinongé",
        "fr": "Berthier — Maskinongé",
        "transform": "matrix(1,0,0,1,-60,-20.1)",
        "pathD": "M875,300.1L865,300.1L860,310.1L865,320.1L875,320.1L880,310.1L875,300.1Z",
        "index": 24012
      },
      {
        "id": "Beloeil---Chambly",
        "en": "Beloeil — Chambly",
        "fr": "Beloeil — Chambly",
        "transform": "matrix(1,0,0,1,-29.9,0.1)",
        "pathD": "M949.9,369.9L939.9,369.9L934.9,379.9L939.9,389.9L949.9,389.9L954.9,379.9L949.9,369.9Z",
        "index": 24011
      },
      {
        "id": "Bellechasse---Les-Etchemins---Lévis",
        "en": "Bellechasse — Les Etchemins — Lévis",
        "fr": "Bellechasse — Les Etchemins — Lévis",
        "transform": "matrix(1,0,0,1,-14.9,9.9)",
        "pathD": "M949.9,310.1L939.9,310.1L934.9,320.1L939.9,330.1L949.9,330.1L954.9,320.1L949.9,310.1Z",
        "index": 24010
      },
      {
        "id": "Bécancour---Nicolet---Saurel",
        "en": "Bécancour — Nicolet — Saurel",
        "fr": "Bécancour — Nicolet — Saurel",
        "transform": "matrix(1,0,0,1,-59.93,-0.1)",
        "pathD": "M965,340.1L955,340.1L950,350.1L955,360.1L965,360.1L970,350.1L965,340.1Z",
        "index": 24009
      },
      {
        "id": "Beauport---Limoilou",
        "en": "Beauport — Limoilou",
        "fr": "Beauport — Limoilou",
        "transform": "matrix(1,0,0,1,0.1,-0.3)",
        "pathD": "M889.9,270.3L879.9,270.3L874.9,280.3L879.9,290.3L889.9,290.3L894.9,280.3L889.9,270.3Z",
        "index": 24008
      },
      {
        "id": "Beauce",
        "en": "Beauce",
        "fr": "Beauce",
        "transform": "matrix(1,0,0,1,-45,30.1)",
        "pathD": "M980,309.9L970,309.9L965,319.9L970,329.9L980,329.9L985,319.9L980,309.9Z",
        "index": 24007
      },
      {
        "id": "Avignon---La-Mitis---Matane---Matapédia",
        "en": "Avignon — La Mitis — Matane — Matapédia",
        "fr": "Avignon — La Mitis — Matane — Matapédia",
        "transform": "matrix(1,0,0,1,-30,0.2)",
        "pathD": "M980,269.8L970,269.8L965,279.8L970,289.8L980,289.8L985,279.8L980,269.8Z",
        "index": 24006
      },
      {
        "id": "Argenteuil---La-Petite-Nation1",
        "en": "Argenteuil — La Petite-Nation",
        "fr": "Argenteuil — La Petite-Nation",
        "transform": "matrix(1,0,0,1,-29.9,0)",
        "pathD": "M829.9,330.3L819.9,330.3L814.9,340.3L819.9,350.3L829.9,350.3L834.9,340.3L829.9,330.3Z",
        "index": 24005
      },
      {
        "id": "Alfred-Pellan",
        "en": "Alfred-Pellan",
        "fr": "Alfred-Pellan",
        "transform": "matrix(1,0,0,1,-44.6,-10.012)",
        "pathD": "M904.6,319.8L894.6,319.8L889.6,329.8L894.6,339.8L904.6,339.8L909.6,329.8L904.6,319.8Z",
        "index": 24004
      },
      {
        "id": "Ahuntsic-Cartierville",
        "en": "Ahuntsic-Cartierville",
        "fr": "Ahuntsic-Cartierville",
        "transform": "matrix(1,0,0,1,-44.817,-30.759)",
        "pathD": "M889.9,350.5L879.9,350.5L874.9,360.5L879.9,370.5L889.9,370.5L894.9,360.5L889.9,350.5Z",
        "index": 24003
      },
      {
        "id": "Abitibi---Témiscamingue",
        "en": "Abitibi — Témiscamingue",
        "fr": "Abitibi — Témiscamingue",
        "transform": "matrix(1,0,0,1,-29.8,-19.9)",
        "pathD": "M814.8,299.9L804.8,299.9L799.8,309.9L804.8,319.9L814.8,319.9L819.8,309.9L814.8,299.9Z",
        "index": 24002
      },
      {
        "id": "Abitibi---Baie-James---Nunavik---Eeyou",
        "en": "Abitibi — Baie-James — Nunavik — Eeyou",
        "fr": "Abitibi — Baie-James — Nunavik — Eeyou",
        "transform": "matrix(1,0,0,1,-59.9,1.42109e-13)",
        "pathD": "M844.9,260L834.9,260L829.9,270L834.9,280L844.9,280L849.9,270L844.9,260Z",
        "index": 24001
      }
    ]
  },
  {
    "id": "New-Brunswick",
    "flagUrl": "/images/flags/Flag_of_New_Brunswick.svg",
    "en": "New Brunswick",
    "fr": "Nouveau-Brunswick",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 13,
    "ridings": [
      {
        "id": "Tobique---Mactaquac",
        "en": "Tobique — Mactaquac",
        "fr": "Tobique — Mactaquac",
        "transform": "matrix(1,0,0,1,-29.7,0.1)",
        "pathD": "M1009.7,289.9L999.7,289.9L994.7,299.9L999.7,309.9L1009.7,309.9L1014.7,299.9L1009.7,289.9Z",
        "index": 13010
      },
      {
        "id": "Saint-John---Rothesay",
        "en": "Saint John — Rothesay",
        "fr": "Saint John — Rothesay",
        "transform": "matrix(1,0,0,1,-29.9,20.3)",
        "pathD": "M1039.9,289.7L1029.9,289.7L1024.9,299.7L1029.9,309.7L1039.9,309.7L1044.9,299.7L1039.9,289.7Z",
        "index": 13009
      },
      {
        "id": "New-Brunswick-Southwest---Nouveau-Brunswick-Sud-Ouest",
        "en": "New Brunswick Southwest",
        "fr": "Nouveau-Brunswick-Sud-Ouest",
        "transform": "matrix(1,0,0,1,-29.8,-19.8)",
        "pathD": "M1024.8,319.8L1014.8,319.8L1009.8,329.8L1014.8,339.8L1024.8,339.8L1029.8,329.8L1024.8,319.8Z",
        "index": 13008
      },
      {
        "id": "Moncton---Riverview---Dieppe",
        "en": "Moncton — Riverview — Dieppe",
        "fr": "Moncton — Riverview — Dieppe",
        "transform": "",
        "pathD": "M1024.8,299.9L1014.8,299.9L1009.8,309.9L1014.8,319.9L1024.8,319.9L1029.8,309.9L1024.8,299.9Z",
        "index": 13007
      },
      {
        "id": "Miramichi---Grand-Lake",
        "en": "Miramichi — Grand Lake",
        "fr": "Miramichi — Grand Lake",
        "transform": "matrix(1,0,0,1,-14.7,9.832)",
        "pathD": "M1009.7,269.9L999.7,269.9L994.7,279.9L999.7,289.9L1009.7,289.9L1014.7,279.9L1009.7,269.9Z",
        "index": 13006
      },
      {
        "id": "Madawaska---Restigouche",
        "en": "Madawaska — Restigouche",
        "fr": "Madawaska — Restigouche",
        "transform": "matrix(1,0,0,1,-29.6,-0.168)",
        "pathD": "M994.6,279.9L984.6,279.9L979.6,289.9L984.6,299.9L994.6,299.9L999.6,289.9L994.6,279.9Z",
        "index": 13005
      },
      {
        "id": "Fundy-Royal",
        "en": "Fundy Royal",
        "fr": "Fundy Royal",
        "transform": "matrix(1,0,0,1,-14.9,50.3)",
        "pathD": "M1039.9,269.7L1029.9,269.7L1024.9,279.7L1029.9,289.7L1039.9,289.7L1044.9,279.7L1039.9,269.7Z",
        "index": 13004
      },
      {
        "id": "Fredericton",
        "en": "Fredericton",
        "fr": "Fredericton",
        "transform": "matrix(1,0,0,1,-14.8,10.3)",
        "pathD": "M1024.8,279.7L1014.8,279.7L1009.8,289.7L1014.8,299.7L1024.8,299.7L1029.8,289.7L1024.8,279.7Z",
        "index": 13003
      },
      {
        "id": "Beauséjour",
        "en": "Beauséjour",
        "fr": "Beauséjour",
        "transform": "matrix(1,0,0,1,15.2,50.2)",
        "pathD": "M1024.8,259.8L1014.8,259.8L1009.8,269.8L1014.8,279.8L1024.8,279.8L1029.8,269.8L1024.8,259.8Z",
        "index": 13002
      },
      {
        "id": "Acadie---Bathurst",
        "en": "Acadie — Bathurst",
        "fr": "Acadie — Bathurst",
        "transform": "matrix(1,0,0,1,-14.6,9.9)",
        "pathD": "M994.6,260.1L984.6,260.1L979.6,270.1L984.6,280.1L994.6,280.1L999.6,270.1L994.6,260.1Z",
        "index": 13001
      }
    ]
  },
  {
    "id": "Nova-Scotia",
    "flagUrl": "/images/flags/Flag_of_Nova_Scotia.svg",
    "en": "Nova Scotia",
    "fr": "Nouvelle-Écosse",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 12,
    "ridings": [
      {
        "id": "West-Nova---Nova-Ouest",
        "en": "West Nova",
        "fr": "Nova-Ouest",
        "transform": "matrix(1,0,0,1,-29.8,20.5)",
        "pathD": "M1069.8,329.5L1059.8,329.5L1054.8,339.5L1059.8,349.5L1069.8,349.5L1074.8,339.5L1069.8,329.5Z",
        "index": 12011
      },
      {
        "id": "Sydney---Victoria",
        "en": "Sydney — Victoria",
        "fr": "Sydney — Victoria",
        "transform": "matrix(1,0,0,1,-15,10.5)",
        "pathD": "M1100,269.5L1090,269.5L1085,279.5L1090,289.5L1100,289.5L1105,279.5L1100,269.5Z",
        "index": 12010
      },
      {
        "id": "South-Shore---St.-Margarets",
        "en": "South Shore — St. Margarets",
        "fr": "South Shore — St. Margarets",
        "transform": "matrix(1,0,0,1,-29.9,20.4)",
        "pathD": "M1084.9,339.6L1074.9,339.6L1069.9,349.6L1074.9,359.6L1084.9,359.6L1089.9,349.6L1084.9,339.6Z",
        "index": 12009
      },
      {
        "id": "Sackville---Preston---Chezzetcook",
        "en": "Sackville — Preston — Chezzetcook",
        "fr": "Sackville — Preston — Chezzetcook",
        "transform": "matrix(1,0,0,1,0.1,20.4)",
        "pathD": "M1084.9,299.6L1074.9,299.6L1069.9,309.6L1074.9,319.6L1084.9,319.6L1089.9,309.6L1084.9,299.6Z",
        "index": 12008
      },
      {
        "id": "Kings-Hants",
        "en": "Kings-Hants",
        "fr": "Kings-Hants",
        "transform": "matrix(1,0,0,1,-14.8,30.4)",
        "pathD": "M1069.8,309.6L1059.8,309.6L1054.8,319.6L1059.8,329.6L1069.8,329.6L1074.8,319.6L1069.8,309.6Z",
        "index": 12007
      },
      {
        "id": "Halifax-West---Halifax-Ouest",
        "en": "Halifax West",
        "fr": "Halifax-Ouest",
        "transform": "matrix(1,0,0,1,-14.9,10.5)",
        "pathD": "M1084.9,319.5L1074.9,319.5L1069.9,329.5L1074.9,339.5L1084.9,339.5L1089.9,329.5L1084.9,319.5Z",
        "index": 12006
      },
      {
        "id": "Halifax",
        "en": "Halifax",
        "fr": "Halifax",
        "transform": "matrix(1,0,0,1,-30,20.3)",
        "pathD": "M1100,329.7L1090,329.7L1085,339.7L1090,349.7L1100,349.7L1105,339.7L1100,329.7Z",
        "index": 12005
      },
      {
        "id": "Dartmouth---Cole-Harbour",
        "en": "Dartmouth — Cole Harbour",
        "fr": "Dartmouth — Cole Harbour",
        "transform": "matrix(1,0,0,1,-15,30.3)",
        "pathD": "M1100,309.7L1090,309.7L1085,319.7L1090,329.7L1100,329.7L1105,319.7L1100,309.7Z",
        "index": 12004
      },
      {
        "id": "Cumberland---Colchester",
        "en": "Cumberland — Colchester",
        "fr": "Cumberland — Colchester",
        "transform": "matrix(1,0,0,1,0.4,40.2)",
        "pathD": "M1054.6,279.8L1044.6,279.8L1039.6,289.8L1044.6,299.8L1054.6,299.8L1059.6,289.8L1054.6,279.8Z",
        "index": 12003
      },
      {
        "id": "Central-Nova---Nova-Centre",
        "en": "Central Nova",
        "fr": "Nova-Centre",
        "transform": "matrix(1,0,0,1,0.2,20.3)",
        "pathD": "M1069.8,289.7L1059.8,289.7L1054.8,299.7L1059.8,309.7L1069.8,309.7L1074.8,299.7L1069.8,289.7Z",
        "index": 12002
      },
      {
        "id": "Cape-Breton---Canso",
        "en": "Cape Breton — Canso",
        "fr": "Cape Breton — Canso",
        "transform": "matrix(1,0,0,1,0.097,20.4)",
        "pathD": "M1084.9,279.6L1074.9,279.6L1069.9,289.6L1074.9,299.6L1084.9,299.6L1089.9,289.6L1084.9,279.6Z",
        "index": 12001
      }
    ]
  },
  {
    "id": "Prince-Edward-Island",
    "flagUrl": "/images/flags/Flag_of_Prince_Edward_Island.svg",
    "en": "Prince Edward Island",
    "fr": "Île-du-Prince-Édouard",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 11,
    "ridings": [
      {
        "id": "Malpeque",
        "en": "Malpeque",
        "fr": "Malpeque",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1039.9,230L1029.9,230L1024.9,240L1029.9,250L1039.9,250L1044.9,240L1039.9,230Z",
        "index": 11004
      },
      {
        "id": "Egmont",
        "en": "Egmont",
        "fr": "Egmont",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1024.8,219.7L1014.8,219.7L1009.8,229.7L1014.8,239.7L1024.8,239.7L1029.8,229.7L1024.8,219.7Z",
        "index": 11003
      },
      {
        "id": "Charlottetown",
        "en": "Charlottetown",
        "fr": "Charlottetown",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1055.1,240L1045.1,240L1040.1,250L1045.1,260L1055.1,260L1060.1,250L1055.1,240Z",
        "index": 11002
      },
      {
        "id": "Cardigan",
        "en": "Cardigan",
        "fr": "Cardigan",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1070,249.8L1060,249.8L1055,259.8L1060,269.8L1070,269.8L1075,259.8L1070,249.8Z",
        "index": 11001
      }
    ]
  },
  {
    "id": "Newfoundland-and-Labrador",
    "flagUrl": "/images/flags/Flag_of_Newfoundland_and_Labrador.svg",
    "en": "Newfoundland and Labrador",
    "fr": "Terre-Neuve-et-Labrador",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 10,
    "ridings": [
      {
        "id": "St.-John-s-South---Mount-Pearl---St.-John-s-Sud---Mount-Pearl",
        "en": "St. John’s South — Mount Pearl",
        "fr": "St. John’s-Sud — Mount Pearl",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M995,199.9L985,199.9L980,209.9L985,219.9L995,219.9L1000,209.9L995,199.9Z",
        "index": 10007
      },
      {
        "id": "St.-John-s-East---St.-John-s-Est",
        "en": "St. John’s East",
        "fr": "St. John’s Est",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M979.9,189.9L969.9,189.9L964.9,199.9L969.9,209.9L979.9,209.9L984.9,199.9L979.9,189.9Z",
        "index": 10006
      },
      {
        "id": "Long-Range-Mountains",
        "en": "Long Range Mountains",
        "fr": "Long Range Mountains",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M935,199.9L925,199.9L920,209.9L925,219.9L935,219.9L940,209.9L935,199.9Z",
        "index": 10005
      },
      {
        "id": "Labrador",
        "en": "Labrador",
        "fr": "Labrador",
        "transform": "matrix(1,0,0,1,15.2,10.2)",
        "pathD": "M904.8,219.8L894.8,219.8L889.8,229.8L894.8,239.8L904.8,239.8L909.8,229.8L904.8,219.8Z",
        "index": 10004
      },
      {
        "id": "Coast-of-Bays---Central---Notre-Dame",
        "en": "Coast of Bays — Central — Notre Dame",
        "fr": "Coast of Bays — Central — Notre Dame",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M950.1,189.9L940.1,189.9L935.1,199.9L940.1,209.9L950.1,209.9L955.1,199.9L950.1,189.9Z",
        "index": 10003
      },
      {
        "id": "Bonavista---Burin---Trinity",
        "en": "Bonavista — Burin — Trinity",
        "fr": "Bonavista — Burin — Trinity",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M964.9,200.1L954.9,200.1L949.9,210.1L954.9,220.1L964.9,220.1L969.9,210.1L964.9,200.1Z",
        "index": 10002
      },
      {
        "id": "Avalon",
        "en": "Avalon",
        "fr": "Avalon",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M980,209.9L970,209.9L965,219.9L970,229.9L980,229.9L985,219.9L980,209.9Z",
        "index": 10001
      }
    ]
  },
  {
    "id": "Nunavut",
    "flagUrl": "/images/flags/Flag_of_Nunavut.svg",
    "en": "Nunavut",
    "fr": "Nunavut",
    "transform": "matrix(1,0,0,0.98,-30.2,-204.702)",
    "index": 62,
    "ridings": [
      {
        "id": "Nunavut",
        "en": "Nunavut",
        "fr": "Nunavut",
        "pathD": "M575.2,299.9L565.2,299.9L560.2,309.9L565.2,319.9L575.2,319.9L580.2,309.9L575.2,299.9Z",
        "transform": "",
        "index": 62001
      }
    ]
  },
  {
    "id": "Yukon",
    "flagUrl": "/images/flags/Flag_of_Yukon.svg",
    "en": "Yukon",
    "fr": "Yukon",
    "transform": "matrix(1,0,0,0.98,-119.9,-165.698)",
    "index": 60,
    "ridings": [
      {
        "id": "Yukon",
        "en": "Yukon",
        "fr": "Yukon",
        "transform": "matrix(1,0,0,1,0,-40)",
        "pathD": "M379.9,270.1L369.9,270.1L364.9,280.1L369.9,290.1L379.9,290.1L384.9,280.1L379.9,270.1Z",
        "index": 60001
      }
    ]
  },
  {
    "id": "Northwest-Territories",
    "flagUrl": "/images/flags/Flag_of_the_Northwest_Territories.svg",
    "en": "Northwest Territories",
    "fr": "Territoires du Nord-Ouest",
    "transform": "matrix(1,0,0,0.98,-59.918,-146.098)",
    "index": 61,
    "ridings": [
      {
        "id": "Northwest-Territories",
        "en": "Northwest Territories",
        "fr": "Territoires du Nord-Ouest",
        "transform": "matrix(1,0,0,1,-0.0820313,-20)",
        "pathD": "M395,260.1L385,260.1L380,270.1L385,280.1L395,280.1L400,270.1L395,260.1Z",
        "index": 61001
      }
    ]
  }
]

export {ridingDataSet}
