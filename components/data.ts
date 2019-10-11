export interface PoliticalData {
  id: string
  label: string
  index: number
  transform: string
}

type PartyId = "Green" | "Conservative" | "NDP" | "Liberal" | "PPC" | "BQ" | "Other"

export interface ResultData {
  date: string
  party: PartyId
}

export type RidingData = PoliticalData & {
  pathD: string
}

export type ProvinceData = PoliticalData & {
  ridings: RidingData[]
}

const data: ProvinceData[] = [
  {
    "id": "British-Columbia",
    "label": "British Columbia",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 59,
    "ridings": [
      {
        "id": "West-Vancouver---Sunshine-Coast---Sea-to-Sky-Country",
        "label": "West Vancouver — Sunshine Coast — Sea to Sky Country",
        "transform": "matrix(1,0,0,1,180.05,-19.9)",
        "pathD": "M320,269.9L310,269.9L305,279.9L310,289.9L320,289.9L325,279.9L320,269.9Z",
        "index": 42,
      },
      {
        "id": "Victoria",
        "label": "Victoria",
        "transform": "matrix(1,0,0,1,180.05,-40.124)",
        "pathD": "M200,289.8L190,289.8L185,299.8L190,309.8L200,309.8L205,299.8L200,289.8Z",
        "index": 41
      },
      {
        "id": "Vancouver-South---Vancouver-Sud",
        "label": "Vancouver South / Vancouver-Sud",
        "transform": "matrix(1,0,0,1,180.25,-60.193)",
        "pathD": "M259.8,309.9L249.8,309.9L244.8,319.9L249.8,329.9L259.8,329.9L264.8,319.9L259.8,309.9Z",
        "index": 40
      },
      {
        "id": "Vancouver-Quadra",
        "label": "Vancouver Quadra",
        "transform": "matrix(1,0,0,1,211.129,-80.43)",
        "pathD": "M244.7,280.1L234.7,280.1L229.7,290.1L234.7,300.1L244.7,300.1L249.7,290.1L244.7,280.1Z",
        "index": 39
      },
      {
        "id": "Vancouver-Kingsway",
        "label": "Vancouver Kingsway",
        "transform": "matrix(1,0,0,1,195.25,-70.161)",
        "pathD": "M259.8,289.9L249.8,289.9L244.8,299.9L249.8,309.9L259.8,309.9L264.8,299.9L259.8,289.9Z",
        "index": 38
      },
      {
        "id": "North-Island---Powell-River",
        "label": "North Island — Powell River",
        "transform": "matrix(1,0,0,1,165.05,-29.9)",
        "pathD": "M335,259.9L325,259.9L320,269.9L325,279.9L335,279.9L340,269.9L335,259.9Z",
        "index": 37
      },
      {
        "id": "Vancouver-Granville",
        "label": "Vancouver Granville",
        "transform": "matrix(1,0,0,1,225.35,-110)",
        "pathD": "M244.7,300L234.7,300L229.7,310L234.7,320L244.7,320L249.7,310L244.7,300Z",
        "index": 36
      },
      {
        "id": "Vancouver-East---Vancouver-Est",
        "label": "Vancouver East / Vancouver-Est",
        "transform": "matrix(1,0,0,1,195.25,-70.261)",
        "pathD": "M274.8,280L264.8,280L259.8,290L264.8,300L274.8,300L279.8,290L274.8,280Z",
        "index": 35
      },
      {
        "id": "Vancouver-Centre---Vancouver-Centre",
        "label": "Vancouver Centre / Vancouver-Centre",
        "transform": "matrix(1,0,0,1,225.25,-70.53)",
        "pathD": "M259.8,270.2L249.8,270.2L244.8,280.2L249.8,290.2L259.8,290.2L264.8,280.2L259.8,270.2Z",
        "index": 34
      },
      {
        "id": "Surrey---Newton",
        "label": "Surrey — Newton",
        "transform": "matrix(1,0,0,1,150.128,-60.361)",
        "pathD": "M304.9,320.1L294.9,320.1L289.9,330.1L294.9,340.1L304.9,340.1L309.9,330.1L304.9,320.1Z",
        "index": 33
      },
      {
        "id": "Surrey-Centre---Surrey-Centre",
        "label": "Surrey Centre / Surrey-Centre",
        "transform": "matrix(1,0,0,1,165.15,-50.554)",
        "pathD": "M304.9,300L294.9,300L289.9,310L294.9,320L304.9,320L309.9,310L304.9,300Z",
        "index": 32
      },
      {
        "id": "Steveston---Richmond-East---Steveston---Richmond-Est",
        "label": "Steveston — Richmond East / Steveston — Richmond-Est",
        "transform": "matrix(1,0,0,1,150.25,-59.9)",
        "pathD": "M274.8,319.9L264.8,319.9L259.8,329.9L264.8,339.9L274.8,339.9L279.8,329.9L274.8,319.9Z",
        "index": 31
      },
      {
        "id": "South-Surrey---White-Rock---Surrey-Sud---White-Rock",
        "label": "South Surrey — White Rock / Surrey-Sud — White Rock",
        "transform": "matrix(1,0,0,1,135.15,-50)",
        "pathD": "M304.9,340L294.9,340L289.9,350L294.9,360L304.9,360L309.9,350L304.9,340Z",
        "index": 30
      },
      {
        "id": "South-Okanagan---West-Kootenay---Okanagan-Sud---Kootenay-Ouest",
        "label": "South Okanagan — West Kootenay / Okanagan-Sud — Kootenay-Ouest",
        "transform": "matrix(1,0,0,1,120.05,-0.361)",
        "pathD": "M365,320.1L355,320.1L350,330.1L355,340.1L365,340.1L370,330.1L365,320.1Z",
        "index": 29
      },
      {
        "id": "Skeena---Bulkley-Valley",
        "label": "Skeena — Bulkley Valley",
        "transform": "matrix(1,0,0,1,165.05,-30.161)",
        "pathD": "M350,269.9L340,269.9L335,279.9L340,289.9L350,289.9L355,279.9L350,269.9Z",
        "index": 28
      },
      {
        "id": "Saanich---Gulf-Islands",
        "label": "Saanich — Gulf Islands",
        "transform": "matrix(1,0,0,1,180.15,-20.1)",
        "pathD": "M214.9,280.1L204.9,280.1L199.9,290.1L204.9,300.1L214.9,300.1L219.9,290.1L214.9,280.1Z",
        "index": 27
      },
      {
        "id": "Esquimalt---Saanich---Sooke",
        "label": "Esquimalt — Saanich — Sooke",
        "transform": "matrix(1,0,0,1,195.037,-30.324)",
        "pathD": "M200,270L190,270L185,280L190,290L200,290L205,280L200,270Z",
        "index": 26
      },
      {
        "id": "Richmond-Centre---Richmond-Centre",
        "label": "Richmond Centre / Richmond-Centre",
        "transform": "matrix(1,0,0,1,210.25,-59.9)",
        "pathD": "M229.8,289.9L219.8,289.9L214.8,299.9L219.8,309.9L229.8,309.9L234.8,299.9L229.8,289.9Z",
        "index": 25
      },
      {
        "id": "Prince-George---Peace-River---Northern-Rockies",
        "label": "Prince George — Peace River — Northern Rockies",
        "transform": "matrix(1,0,0,1,150.138,-60.361)",
        "pathD": "M379.9,290.1L369.9,290.1L364.9,300.1L369.9,310.1L379.9,310.1L384.9,300.1L379.9,290.1Z",
        "index": 24
      },
      {
        "id": "Port-Moody---Coquitlam",
        "label": "Port Moody — Coquitlam",
        "transform": "matrix(1,0,0,1,165.15,-50.361)",
        "pathD": "M304.9,280.1L294.9,280.1L289.9,290.1L294.9,300.1L304.9,300.1L309.9,290.1L304.9,280.1Z",
        "index": 23
      },
      {
        "id": "Pitt-Meadows---Maple-Ridge",
        "label": "Pitt Meadows — Maple Ridge",
        "transform": "matrix(1,0,0,1,180.05,-20)",
        "pathD": "M320,290L310,290L305,300L310,310L320,310L325,300L320,290Z",
        "index": 22
      },
      {
        "id": "North-Vancouver",
        "label": "North Vancouver",
        "transform": "matrix(1,0,0,1,210.25,-40.53)",
        "pathD": "M274.8,260.2L264.8,260.2L259.8,270.2L264.8,280.2L274.8,280.2L279.8,270.2L274.8,260.2Z",
        "index": 21
      },
      {
        "id": "North-Okanagan---Shuswap",
        "label": "North Okanagan — Shuswap",
        "transform": "matrix(1,0,0,1,135.05,29.739)",
        "pathD": "M365,280L355,280L350,290L355,300L365,300L370,290L365,280Z",
        "index": 20
      },
      {
        "id": "New-Westminster---Burnaby",
        "label": "New Westminster — Burnaby",
        "transform": "matrix(1,0,0,1,165.228,-50.161)",
        "pathD": "M289.8,289.9L279.8,289.9L274.8,299.9L279.8,309.9L289.8,309.9L294.8,299.9L289.8,289.9Z",
        "index": 19
      },
      {
        "id": "Nanaimo---Ladysmith",
        "label": "Nanaimo — Ladysmith",
        "transform": "matrix(1,0,0,1,180.25,-39.9)",
        "pathD": "M229.8,269.9L219.8,269.9L214.8,279.9L219.8,289.9L229.8,289.9L234.8,279.9L229.8,269.9Z",
        "index": 18
      },
      {
        "id": "Mission---Matsqui---Fraser-Canyon",
        "label": "Mission — Matsqui — Fraser Canyon",
        "transform": "matrix(1,0,0,1,165.05,-10.514)",
        "pathD": "M335,300L325,300L320,310L325,320L335,320L340,310L335,300Z",
        "index": 17
      },
      {
        "id": "Langley---Aldergrove",
        "label": "Langley — Aldergrove",
        "transform": "matrix(1,0,0,1,120.35,-20.261)",
        "pathD": "M334.7,320L324.7,320L319.7,330L324.7,340L334.7,340L339.7,330L334.7,320Z",
        "index": 16
      },
      {
        "id": "Kootenay---Columbia",
        "label": "Kootenay — Columbia",
        "transform": "matrix(1,0,0,1,120.15,19.639)",
        "pathD": "M379.9,310.1L369.9,310.1L364.9,320.1L369.9,330.1L379.9,330.1L384.9,320.1L379.9,310.1Z",
        "index": 15
      },
      {
        "id": "Kelowna---Lake-Country",
        "label": "Kelowna — Lake Country",
        "transform": "matrix(1,0,0,1,120.05,-0.564)",
        "pathD": "M365,300L355,300L350,310L355,320L365,320L370,310L365,300Z",
        "index": 14
      },
      {
        "id": "Kamloops---Thompson---Cariboo",
        "label": "Kamloops — Thompson — Cariboo",
        "transform": "matrix(1,0,0,1,165.05,-10.361)",
        "pathD": "M350,290.1L340,290.1L335,300.1L340,310.1L350,310.1L355,300.1L350,290.1Z",
        "index": 13
      },
      {
        "id": "Fleetwood---Port-Kells",
        "label": "Fleetwood — Port Kells",
        "transform": "matrix(1,0,0,1,150.25,-40.261)",
        "pathD": "M319.8,310L309.8,310L304.8,320L309.8,330L319.8,330L324.8,320L319.8,310Z",
        "index": 12
      },
      {
        "id": "Delta",
        "label": "Delta",
        "transform": "matrix(1,0,0,1,135.25,-30.279)",
        "pathD": "M289.8,310L279.8,310L274.8,320L279.8,330L289.8,330L294.8,320L289.8,310Z",
        "index": 11
      },
      {
        "id": "Cowichan---Malahat---Langford",
        "label": "Cowichan — Malahat — Langford",
        "transform": "matrix(1,0,0,1,180.137,-40.1)",
        "pathD": "M214.9,260.1L204.9,260.1L199.9,270.1L204.9,280.1L214.9,280.1L219.9,270.1L214.9,260.1Z",
        "index": 10
      },
      {
        "id": "Courtenay---Alberni",
        "label": "Courtenay — Alberni",
        "transform": "matrix(1,0,0,1,180.05,-40.1)",
        "pathD": "M230,250.1L220,250.1L215,260.1L220,270.1L230,270.1L235,260.1L230,250.1Z",
        "index": 9
      },
      {
        "id": "Coquitlam---Port-Coquitlam",
        "label": "Coquitlam — Port Coquitlam",
        "transform": "matrix(1,0,0,1,180.15,-0.1)",
        "pathD": "M304.9,260.1L294.9,260.1L289.9,270.1L294.9,280.1L304.9,280.1L309.9,270.1L304.9,260.1Z",
        "index": 8
      },
      {
        "id": "Cloverdale---Langley-City",
        "label": "Cloverdale — Langley City",
        "transform": "matrix(1,0,0,1,134.969,-50.361)",
        "pathD": "M320,330.1L310,330.1L305,340.1L310,350.1L320,350.1L325,340.1L320,330.1Z",
        "index": 7
      },
      {
        "id": "Chilliwack---Hope",
        "label": "Chilliwack — Hope",
        "transform": "matrix(1,0,0,1,120.25,-40.414)",
        "pathD": "M349.8,329.9L339.8,329.9L334.8,339.9L339.8,349.9L349.8,349.9L354.8,339.9L349.8,329.9Z",
        "index": 6
      },
      {
        "id": "Central-Okanagan---Similkameen---Nicola",
        "label": "Central Okanagan — Similkameen — Nicola",
        "transform": "matrix(1,0,0,1,120.35,-0.261)",
        "pathD": "M349.7,310L339.7,310L334.7,320L339.7,330L349.7,330L354.7,320L349.7,310Z",
        "index": 5
      },
      {
        "id": "Cariboo---Prince-George",
        "label": "Cariboo — Prince George",
        "transform": "matrix(1,0,0,1,180.05,-20.361)",
        "pathD": "M335,280.1L325,280.1L320,290.1L325,300.1L335,300.1L340,290.1L335,280.1Z",
        "index": 4
      },
      {
        "id": "Burnaby-South---Burnaby-Sud",
        "label": "Burnaby South / Burnaby-Sud",
        "transform": "matrix(1,0,0,1,165.25,-30)",
        "pathD": "M274.8,300L264.8,300L259.8,310L264.8,320L274.8,320L279.8,310L274.8,300Z",
        "index": 3
      },
      {
        "id": "Burnaby-North---Seymour---Burnaby-Nord---Seymour",
        "label": "Burnaby North — Seymour / Burnaby-Nord — Seymour",
        "transform": "matrix(1,0,0,1,195.25,-30.2)",
        "pathD": "M289.8,270.2L279.8,270.2L274.8,280.2L279.8,290.2L289.8,290.2L294.8,280.2L289.8,270.2Z",
        "index": 2
      },
      {
        "id": "Abbotsford",
        "label": "Abbotsford",
        "transform": "matrix(1,0,0,1,150.05,-60.614)",
        "pathD": "M335,340.1L325,340.1L320,350.1L325,360.1L335,360.1L340,350.1L335,340.1Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Alberta",
    "label": "Alberta",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 48,
    "ridings": [
      {
        "id": "Yellowhead",
        "label": "Yellowhead",
        "transform": "matrix(1,0,0,1,120.05,-40.261)",
        "pathD": "M410,290L400,290L395,300L400,310L410,310L415,300L410,290Z",
        "index": 34
      },
      {
        "id": "Sturgeon-River---Parkland",
        "label": "Sturgeon River — Parkland",
        "transform": "matrix(1,0,0,1,135.05,-10.261)",
        "pathD": "M425,260L415,260L410,270L415,280L425,280L430,270L425,260Z",
        "index": 33
      },
      {
        "id": "Sherwood-Park---Fort-Saskatchewan",
        "label": "Sherwood Park — Fort Saskatchewan",
        "transform": "matrix(1,0,0,1,135.15,-30.061)",
        "pathD": "M469.9,309.8L459.9,309.8L454.9,319.8L459.9,329.8L469.9,329.8L474.9,319.8L469.9,309.8Z",
        "index": 32
      },
      {
        "id": "St.-Albert---Edmonton",
        "label": "St. Albert — Edmonton",
        "transform": "matrix(1,0,0,1,135.228,-9.7)",
        "pathD": "M439.9,249.7L429.9,249.7L424.9,259.7L429.9,269.7L439.9,269.7L444.9,259.7L439.9,249.7Z",
        "index": 31
      },
      {
        "id": "Red-Deer---Lacombe",
        "label": "Red Deer — Lacombe",
        "transform": "matrix(1,0,0,1,135.1,9.921)",
        "pathD": "M439.9,269.8L429.9,269.8L424.9,279.8L429.9,289.8L439.9,289.8L444.9,279.8L439.9,269.8Z",
        "index": 30
      },
      {
        "id": "Red-Deer---Mountain-View",
        "label": "Red Deer — Mountain View",
        "transform": "matrix(1,0,0,1,105.05,-30.261)",
        "pathD": "M455,300L445,300L440,310L445,320L455,320L460,310L455,300Z",
        "index": 29
      },
      {
        "id": "Peace-River---Westlock",
        "label": "Peace River — Westlock",
        "transform": "matrix(1,0,0,1,135.071,-10.361)",
        "pathD": "M410,270.1L400,270.1L395,280.1L400,290.1L410,290.1L415,280.1L410,270.1Z",
        "index": 28
      },
      {
        "id": "Medicine-Hat---Cardston---Warner",
        "label": "Medicine Hat — Cardston — Warner",
        "transform": "matrix(1,0,0,1,60.15,-0.261)",
        "pathD": "M469.9,350L459.9,350L454.9,360L459.9,370L469.9,370L474.9,360L469.9,350Z",
        "index": 27
      },
      {
        "id": "Lethbridge",
        "label": "Lethbridge",
        "transform": "matrix(1,0,0,1,75.1295,-30.361)",
        "pathD": "M455,360.1L445,360.1L440,370.1L445,380.1L455,380.1L460,370.1L455,360.1Z",
        "index": 26
      },
      {
        "id": "Lakeland",
        "label": "Lakeland",
        "transform": "matrix(1,0,0,1,105.05,-9.8)",
        "pathD": "M485,299.8L475,299.8L470,309.8L475,319.8L485,319.8L490,309.8L485,299.8Z",
        "index": 25
      },
      {
        "id": "Grande-Prairie---Mackenzie",
        "label": "Grande Prairie — Mackenzie",
        "transform": "matrix(1,0,0,1,150.05,-40.624)",
        "pathD": "M395,280.1L385,280.1L380,290.1L385,300.1L395,300.1L400,290.1L395,280.1Z",
        "index": 24
      },
      {
        "id": "Fort-McMurray---Cold-Lake",
        "label": "Fort McMurray — Cold Lake",
        "transform": "matrix(1,0,0,1,135.05,10.2)",
        "pathD": "M485,279.8L475,279.8L470,289.8L475,299.8L485,299.8L490,289.8L485,279.8Z",
        "index": 23
      },
      {
        "id": "Foothills",
        "label": "Foothills",
        "transform": "matrix(1,0,0,1,120.38,19.739)",
        "pathD": "M394.7,320L384.7,320L379.7,330L384.7,340L394.7,340L399.7,330L394.7,320Z",
        "index": 22
      },
      {
        "id": "Edmonton---Wetawaskiwin",
        "label": "Edmonton — Wetawaskiwin",
        "transform": "matrix(1,0,0,1,150,-20)",
        "pathD": "M425,280L415,280L410,290L415,300L425,300L430,290L425,280Z",
        "index": 21
      },
      {
        "id": "Edmonton-West---Edmonton-Ouest",
        "label": "Edmonton West / Edmonton-Ouest",
        "transform": "matrix(1,0,0,1,135.05,9.839)",
        "pathD": "M455,259.9L445,259.9L440,269.9L445,279.9L455,279.9L460,269.9L455,259.9Z",
        "index": 20
      },
      {
        "id": "Edmonton-Strathcona",
        "label": "Edmonton Strathcona",
        "transform": "matrix(1,0,0,1,150.15,-0.261)",
        "pathD": "M469.9,270L459.9,270L454.9,280L459.9,290L469.9,290L474.9,280L469.9,270Z",
        "index": 19
      },
      {
        "id": "Edmonton-Riverbend",
        "label": "Edmonton Riverbend",
        "transform": "matrix(1,0,0,1,135,-30)",
        "pathD": "M455,280L445,280L440,290L445,300L455,300L460,290L455,280Z",
        "index": 18
      },
      {
        "id": "Edmonton-Mill-Woods",
        "label": "Edmonton Mill Woods",
        "transform": "matrix(1,0,0,1,135.15,-30.261)",
        "pathD": "M469.9,290L459.9,290L454.9,300L459.9,310L469.9,310L474.9,300L469.9,290Z",
        "index": 17
      },
      {
        "id": "Edmonton-Manning",
        "label": "Edmonton Manning",
        "transform": "matrix(1,0,0,1,135,-10)",
        "pathD": "M485,260L475,260L470,270L475,280L485,280L490,270L485,260Z",
        "index": 16
      },
      {
        "id": "Edmonton-Griesbach",
        "label": "Edmonton Griesbach",
        "transform": "matrix(1,0,0,1,135.1,-10)",
        "pathD": "M469.9,250L459.9,250L454.9,260L459.9,270L469.9,270L474.9,260L469.9,250Z",
        "index": 15
      },
      {
        "id": "Edmonton-Centre---Edmonton-Centre",
        "label": "Edmonton Centre / Edmonton-Centre",
        "transform": "matrix(1,0,0,1,135,-9.8)",
        "pathD": "M455,239.8L445,239.8L440,249.8L445,259.8L455,259.8L460,249.8L455,239.8Z",
        "index": 14
      },
      {
        "id": "Calgary-Skyview",
        "label": "Calgary Skyview",
        "transform": "matrix(1,0,0,1,120.05,-20.161)",
        "pathD": "M455,319.9L445,319.9L440,329.9L445,339.9L455,339.9L460,329.9L455,319.9Z",
        "index": 13
      },
      {
        "id": "Calgary-Signal-Hill",
        "label": "Calgary Signal Hill",
        "transform": "matrix(1,0,0,1,90,-0.2)",
        "pathD": "M425,300.2L415,300.2L410,310.2L415,320.2L425,320.2L430,310.2L425,300.2Z",
        "index": 12
      },
      {
        "id": "Calgary-Shepard",
        "label": "Calgary Shepard",
        "transform": "matrix(1,0,0,1,105.096,-30.161)",
        "pathD": "M439.9,349.9L429.9,349.9L424.9,359.9L429.9,369.9L439.9,369.9L444.9,359.9L439.9,349.9Z",
        "index": 11
      },
      {
        "id": "Calgary-Rocky-Ridge",
        "label": "Calgary Rocky Ridge",
        "transform": "matrix(1,0,0,1,105.15,-10.161)",
        "pathD": "M439.9,289.9L429.9,289.9L424.9,299.9L429.9,309.9L439.9,309.9L444.9,299.9L439.9,289.9Z",
        "index": 10
      },
      {
        "id": "Calgary-Nose-Hill",
        "label": "Calgary Nose Hill",
        "transform": "matrix(1,0,0,1,120.1,-20.079)",
        "pathD": "M439.9,309.8L429.9,309.8L424.9,319.8L429.9,329.8L439.9,329.8L444.9,319.8L439.9,309.8Z",
        "index": 9
      },
      {
        "id": "Calgary-Midnapore",
        "label": "Calgary Midnapore",
        "transform": "matrix(1,0,0,1,120.35,-20.061)",
        "pathD": "M409.7,329.8L399.7,329.8L394.7,339.8L399.7,349.8L409.7,349.8L414.7,339.8L409.7,329.8Z",
        "index": 8
      },
      {
        "id": "Calgary-Heritage",
        "label": "Calgary Heritage",
        "transform": "matrix(1,0,0,1,105.4,10.2)",
        "pathD": "M409.6,309.8L399.6,309.8L394.6,319.8L399.6,329.8L409.6,329.8L414.6,319.8L409.6,309.8Z",
        "index": 7
      },
      {
        "id": "Calgary-Forest-Lawn",
        "label": "Calgary Forest Lawn",
        "transform": "matrix(1,0,0,1,120.1,-19.8)",
        "pathD": "M439.9,329.8L429.9,329.8L424.9,339.8L429.9,349.8L439.9,349.8L444.9,339.8L439.9,329.8Z",
        "index": 6
      },
      {
        "id": "Calgary-Confederation",
        "label": "Calgary Confederation",
        "transform": "matrix(1,0,0,1,105.3,-29.8)",
        "pathD": "M424.7,319.8L414.7,319.8L409.7,329.8L414.7,339.8L424.7,339.8L429.7,329.8L424.7,319.8Z",
        "index": 5
      },
      {
        "id": "Calgary-Centre---Calgary-Centre",
        "label": "Calgary Centre / Calgary-Centre",
        "transform": "matrix(1,0,0,1,120.35,-39.895)",
        "pathD": "M424.7,339.8L414.7,339.8L409.7,349.8L414.7,359.8L424.7,359.8L429.7,349.8L424.7,339.8Z",
        "index": 4
      },
      {
        "id": "Bow-River",
        "label": "Bow River",
        "transform": "matrix(1,0,0,1,90.05,-0.161)",
        "pathD": "M455,339.9L445,339.9L440,349.9L445,359.9L455,359.9L460,349.9L455,339.9Z",
        "index": 3
      },
      {
        "id": "Battle-River---Crowfoot",
        "label": "Battle River — Crowfoot",
        "transform": "matrix(1,0,0,1,90.1,-0.061)",
        "pathD": "M469.9,329.8L459.9,329.8L454.9,339.8L459.9,349.8L469.9,349.8L474.9,339.8L469.9,329.8Z",
        "index": 2
      },
      {
        "id": "Banff---Airdrie1",
        "label": "Banff — Airdrie",
        "transform": "matrix(1,0,0,1,135.39,-30.061)",
        "pathD": "M394.7,299.8L384.7,299.8L379.7,309.8L384.7,319.8L394.7,319.8L399.7,309.8L394.7,299.8Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Saskatchewan",
    "label": "Saskatchewan",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    index: 47,
    "ridings": [
      {
        "id": "Yorkton---Melville",
        "label": "Yorkton — Melville",
        "transform": "matrix(1,0,0,1,60.15,19.465)",
        "pathD": "M529.9,330L519.9,330L514.9,340L519.9,350L529.9,350L534.9,340L529.9,330Z",
        "index": 14
      },
      {
        "id": "Souris---Moose-Mountain",
        "label": "Souris — Moose Mountain",
        "transform": "matrix(1,0,0,1,45.15,9.834)",
        "pathD": "M529.9,369.8L519.9,369.8L514.9,379.8L519.9,389.8L529.9,389.8L534.9,379.8L529.9,369.8Z",
        "index": 13
      },
      {
        "id": "Saskatoon-West---Saskatoon-Ouest",
        "label": "Saskatoon West / Saskatoon-Ouest",
        "transform": "matrix(1,0,0,1,104.95,-10.661)",
        "pathD": "M500.1,309.9L490.1,309.9L485.1,319.9L490.1,329.9L500.1,329.9L505.1,319.9L500.1,309.9Z",
        "index": 12
      },
      {
        "id": "Saskatoon---University",
        "label": "Saskatoon — University",
        "transform": "matrix(1,0,0,1,104.95,-10.761)",
        "pathD": "M500.1,330L490.1,330L485.1,340L490.1,350L500.1,350L505.1,340L500.1,330Z",
        "index": 11
      },
      {
        "id": "Saskatoon---Grasswood",
        "label": "Saskatoon — Grasswood",
        "transform": "matrix(1,0,0,1,75.15,9.339)",
        "pathD": "M514.9,319.9L504.9,319.9L499.9,329.9L504.9,339.9L514.9,339.9L519.9,329.9L514.9,319.9Z",
        "index": 10
      },
      {
        "id": "Regina---Wascana",
        "label": "Regina — Wascana",
        "transform": "matrix(1,0,0,1,60.15,-0.689)",
        "pathD": "M514.9,359.9L504.9,359.9L499.9,369.9L504.9,379.9L514.9,379.9L519.9,369.9L514.9,359.9Z",
        "index": 9
      },
      {
        "id": "Regina---Qu-appelle",
        "label": "Regina — Qu’appelle",
        "transform": "matrix(1,0,0,1,60.15,-0.761)",
        "pathD": "M514.9,340L504.9,340L499.9,350L504.9,360L514.9,360L519.9,350L514.9,340Z",
        "index": 8
      },
      {
        "id": "Regina---Lewvan",
        "label": "Regina — Lewvan",
        "transform": "matrix(1,0,0,1,59.95,-0.535)",
        "pathD": "M500.1,350L490.1,350L485.1,360L490.1,370L500.1,370L505.1,360L500.1,350Z",
        "index": 7
      },
      {
        "id": "Prince-Albert",
        "label": "Prince Albert",
        "transform": "matrix(1,0,0,1,90.15,-0.255)",
        "pathD": "M529.9,309.9L519.9,309.9L514.9,319.9L519.9,329.9L529.9,329.9L534.9,319.9L529.9,309.9Z",
        "index": 6
      },
      {
        "id": "Moose-Jaw---Lake-Centre---Lanigan",
        "label": "Moose Jaw — Lake Centre — Lanigan",
        "transform": "matrix(1,0,0,1,75.05,29.734)",
        "pathD": "M485,339.9L475,339.9L470,349.9L475,359.9L485,359.9L490,349.9L485,339.9Z",
        "index": 5
      },
      {
        "id": "Carlton-Trail---Eagle-Creek---Sentier-Carlton---Eagle-Creek",
        "label": "Carlton Trail — Eagle Creek / Sentier Carlton — Eagle Creek",
        "transform": "matrix(1,0,0,1,75.15,9.439)",
        "pathD": "M514.9,299.8L504.9,299.8L499.9,309.8L504.9,319.8L514.9,319.8L519.9,309.8L514.9,299.8Z",
        "index": 4
      },
      {
        "id": "Desnethé---Missinippi---Churchill-River---Desnethé---Missinippi---Rivière-Churchill",
        "label": "Desnethé — Missinippi — Churchill River / Desnethé — Missinippi — Rivière Churchill",
        "transform": "matrix(1,0,0,1,120.15,20.2)",
        "pathD": "M514.9,279.8L504.9,279.8L499.9,289.8L504.9,299.8L514.9,299.8L519.9,289.8L514.9,279.8Z",
        "index": 3
      },
      {
        "id": "Cypress-Hills---Grasslands",
        "label": "Cypress Hills — Grasslands",
        "transform": "matrix(1,0,0,1,60.05,39.516)",
        "pathD": "M485,319.9L475,319.9L470,329.9L475,339.9L485,339.9L490,329.9L485,319.9Z",
        "index": 2
      },
      {
        "id": "Battlefords---Lloydminster",
        "label": "Battlefords — Lloydminster",
        "transform": "matrix(1,0,0,1,74.95,29.439)",
        "pathD": "M500.1,289.8L490.1,289.8L485.1,299.8L490.1,309.8L500.1,309.8L505.1,299.8L500.1,289.8Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Manitoba",
    "label": "Manitoba",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 46,
    "ridings": [
      {
        "id": "Winnipeg-South-Centre---Winnipeg-Centre-Sud",
        "label": "Winnipeg South-Centre / Winnipeg-Centre-Sud",
        "transform": "matrix(1,0,0,1,44.9,10)",
        "pathD": "M560.1,350L550.1,350L545.1,360L550.1,370L560.1,370L565.1,360L560.1,350Z",
        "index": 14
      },
      {
        "id": "Winnipeg-South---Winnipeg-Sud",
        "label": "Winnipeg South / Winnipeg-Sud",
        "transform": "matrix(1,0,0,1,44.95,9.832)",
        "pathD": "M560.1,369.9L550.1,369.9L545.1,379.9L550.1,389.9L560.1,389.9L565.1,379.9L560.1,369.9Z",
        "index": 13
      },
      {
        "id": "Winnipeg-North---Winnipeg-Nord",
        "label": "Winnipeg North / Winnipeg-Nord",
        "transform": "matrix(1,0,0,1,89.903,19.8)",
        "pathD": "M545,320.2L535,320.2L530,330.2L535,340.2L545,340.2L550,330.2L545,320.2Z",
        "index": 12
      },
      {
        "id": "Winnipeg-Centre---Winnipeg-Centre",
        "label": "Winnipeg Centre / Winnipeg-Centre",
        "transform": "matrix(1,0,0,1,75.05,10)",
        "pathD": "M545,340L535,340L530,350L535,360L545,360L550,350L545,340Z",
        "index": 11
      },
      {
        "id": "Selkirk---Interlake---Eastman",
        "label": "Selkirk — Interlake — Eastman",
        "transform": "matrix(1,0,0,1,59.8,20)",
        "pathD": "M575.2,340L565.2,340L560.2,350L565.2,360L575.2,360L580.2,350L575.2,340Z",
        "index": 10
      },
      {
        "id": "Saint-Boniface---Saint-Vital---Saint-Boniface---Saint-Vital",
        "label": "Saint Boniface — Saint Vital / Saint Boniface — Saint-Vital",
        "transform": "matrix(1,0,0,1,44.85,10.1)",
        "pathD": "M575.2,379.9L565.2,379.9L560.2,389.9L565.2,399.9L575.2,399.9L580.2,389.9L575.2,379.9Z",
        "index": 9
      },
      {
        "id": "Provencher",
        "label": "Provencher",
        "transform": "matrix(1,0,0,1,29.85,-0.661)",
        "pathD": "M575.2,399.9L565.2,399.9L560.2,409.9L565.2,419.9L575.2,419.9L580.2,409.9L575.2,399.9Z",
        "index": 8
      },
      {
        "id": "Portage---Lisgar",
        "label": "Portage — Lisgar",
        "transform": "matrix(1,0,0,1,29.95,-0.661)",
        "pathD": "M560.1,389.9L550.1,389.9L545.1,399.9L550.1,409.9L560.1,409.9L565.1,399.9L560.1,389.9Z",
        "index": 7
      },
      {
        "id": "Kildonan---St.-Paul",
        "label": "Kildonan — St. Paul",
        "transform": "matrix(1,0,0,1,44.8,10)",
        "pathD": "M575.2,360L565.2,360L560.2,370L565.2,380L575.2,380L580.2,370L575.2,360Z",
        "index": 6
      },
      {
        "id": "Elmwood---Transcona",
        "label": "Elmwood — Transcona",
        "transform": "matrix(1,0,0,1,74.9,49.9)",
        "pathD": "M560.1,330.1L550.1,330.1L545.1,340.1L550.1,350.1L560.1,350.1L565.1,340.1L560.1,330.1Z",
        "index": 5
      },
      {
        "id": "Dauphin---Swan-River---Neepawa",
        "label": "Dauphin — Swan River — Neepawa",
        "transform": "matrix(1,0,0,1,90.15,-20.568)",
        "pathD": "M529.9,350.2L519.9,350.2L514.9,360.2L519.9,370.2L529.9,370.2L534.9,360.2L529.9,350.2Z",
        "index": 4
      },
      {
        "id": "Churchill---Keewatinook-Aski",
        "label": "Churchill — Keewatinook Aski",
        "transform": "matrix(1,0,0,1,74.8,30.1)",
        "pathD": "M575.2,319.9L565.2,319.9L560.2,329.9L565.2,339.9L575.2,339.9L580.2,329.9L575.2,319.9Z",
        "index": 3
      },
      {
        "id": "Charleswood---St.-James---Assiniboia---Headingley",
        "label": "Charleswood — St. James — Assiniboia — Headingley",
        "transform": "matrix(1,0,0,1,60,-20)",
        "pathD": "M545,360L535,360L530,370L535,380L545,380L550,370L545,360Z",
        "index": 2
      },
      {
        "id": "Brandon---Souris",
        "label": "Brandon — Souris",
        "transform": "matrix(1,0,0,1,45.05,-10.561)",
        "pathD": "M545,379.8L535,379.8L530,389.8L535,399.8L545,399.8L550,389.8L545,379.8Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Ontario",
    "label": "Ontario",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 35,
    "ridings": [
      {
        "id": "Humber-River---Black-Creek",
        "label": "Humber River — Black Creek",
        "transform": "",
        "pathD": "M665.1,479.9L655.1,479.9L650.1,489.9L655.1,499.9L665.1,499.9L670.1,489.9L665.1,479.9Z",
        "index": 121
      },
      {
        "id": "York-South---Weston---York-Sud---Weston",
        "label": "York South — Weston / York-Sud — Weston",
        "transform": "",
        "pathD": "M665,499.9L655,499.9L650,509.9L655,519.9L665,519.9L670,509.9L665,499.9Z",
        "index": 120
      },
      {
        "id": "York---Simcoe",
        "label": "York — Simcoe",
        "transform": "matrix(1,0,0,1,-0.1,-20)",
        "pathD": "M680.1,430L670.1,430L665.1,440L670.1,450L680.1,450L685.1,440L680.1,430Z",
        "index": 119
      },
      {
        "id": "York-Centre---York-Centre",
        "label": "York Centre / York-Centre",
        "transform": "",
        "pathD": "M679.9,489.9L669.9,489.9L664.9,499.9L669.9,509.9L679.9,509.9L684.9,499.9L679.9,489.9Z",
        "index": 118
      },
      {
        "id": "Windsor-West---Windsor-Ouest",
        "label": "Windsor West / Windsor-Ouest",
        "transform": "matrix(1,0,0,1,60.2,0.1)",
        "pathD": "M529.8,609.9L519.8,609.9L514.8,619.9L519.8,629.9L529.8,629.9L534.8,619.9L529.8,609.9Z",
        "index": 117
      },
      {
        "id": "Windsor---Tecumseh",
        "label": "Windsor — Tecumseh",
        "transform": "matrix(1,0,0,1,60.2,0.1)",
        "pathD": "M529.8,589.9L519.8,589.9L514.8,599.9L519.8,609.9L529.8,609.9L534.8,599.9L529.8,589.9Z",
        "index": 116
      },
      {
        "id": "Willowdale",
        "label": "Willowdale",
        "transform": "matrix(1,0,0,1,0.4,-19.9)",
        "pathD": "M694.6,459.9L684.6,459.9L679.6,469.9L684.6,479.9L694.6,479.9L699.6,469.9L694.6,459.9Z",
        "index": 115
      },
      {
        "id": "Whitby",
        "label": "Whitby",
        "transform": "matrix(1,0,0,1,15.2,30)",
        "pathD": "M769.8,430L759.8,430L754.8,440L759.8,450L769.8,450L774.8,440L769.8,430Z",
        "index": 114
      },
      {
        "id": "Wellington---Halton-Hills",
        "label": "Wellington — Halton Hills",
        "transform": "matrix(1,0,0,1,30,40.1)",
        "pathD": "M605,519.9L595,519.9L590,529.9L595,539.9L605,539.9L610,529.9L605,519.9Z",
        "index": 113
      },
      {
        "id": "Waterloo",
        "label": "Waterloo",
        "transform": "matrix(1,0,0,1,30.1,0.1)",
        "pathD": "M574.9,519.9L564.9,519.9L559.9,529.9L564.9,539.9L574.9,539.9L579.9,529.9L574.9,519.9Z",
        "index": 112
      },
      {
        "id": "Vaughan---Woodbridge",
        "label": "Vaughan — Woodbridge",
        "transform": "",
        "pathD": "M650,469.9L640,469.9L635,479.9L640,489.9L650,489.9L655,479.9L650,469.9Z",
        "index": 111
      },
      {
        "id": "University---Rosedale",
        "label": "University — Rosedale",
        "transform": "matrix(1,0,0,1,0.1,-20.1)",
        "pathD": "M694.9,520.1L684.9,520.1L679.9,530.1L684.9,540.1L694.9,540.1L699.9,530.1L694.9,520.1Z",
        "index": 110
      },
      {
        "id": "Toronto---Danforth",
        "label": "Toronto — Danforth",
        "transform": "matrix(1,0,0,1,0,-20.2)",
        "pathD": "M710,510.2L700,510.2L695,520.2L700,530.2L710,530.2L715,520.2L710,510.2Z",
        "index": 109
      },
      {
        "id": "Toronto-Centre---Toronto-Centre",
        "label": "Toronto Centre / Toronto-Centre",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M710,529.9L700,529.9L695,539.9L700,549.9L710,549.9L715,539.9L710,529.9Z",
        "index": 108
      },
      {
        "id": "Timmins---James-Bay---TImmins---Baie-James",
        "label": "Timmins — James Bay / TImmins — Baie James",
        "transform": "matrix(1,0,0,1,60,0.1)",
        "pathD": "M605,379.9L595,379.9L590,389.9L595,399.9L605,399.9L610,389.9L605,379.9Z",
        "index": 107
      },
      {
        "id": "Thunder-Bay---Superior-North---Thunder-Bay---Supérieur-Nord",
        "label": "Thunder Bay — Superior North / Thunder Bay — Supérieur-Nord",
        "transform": "matrix(1,0,0,1,30,0.1)",
        "pathD": "M605,399.9L595,399.9L590,409.9L595,419.9L605,419.9L610,409.9L605,399.9Z",
        "index": 106
      },
      {
        "id": "Thunder-Bay---Rainy-River",
        "label": "Thunder Bay — Rainy River",
        "transform": "matrix(1,0,0,1,59.8,-19.9)",
        "pathD": "M590.2,409.9L580.2,409.9L575.2,419.9L580.2,429.9L590.2,429.9L595.2,419.9L590.2,409.9Z",
        "index": 105
      },
      {
        "id": "Thornhill",
        "label": "Thornhill",
        "transform": "matrix(1,0,0,1,0.2,0.1)",
        "pathD": "M679.8,469.9L669.8,469.9L664.8,479.9L669.8,489.9L679.8,489.9L684.8,479.9L679.8,469.9Z",
        "index": 104
      },
      {
        "id": "Sudbury",
        "label": "Sudbury",
        "transform": "matrix(1,0,0,1,30.1,0.3)",
        "pathD": "M619.9,409.7L609.9,409.7L604.9,419.7L609.9,429.7L619.9,429.7L624.9,419.7L619.9,409.7Z",
        "index": 103
      },
      {
        "id": "Stormont---Dundas---South-Glengarry",
        "label": "Stormont — Dundas — South Glengarry",
        "transform": "matrix(1,0,0,1,-29.907,-0.466)",
        "pathD": "M829.9,370.2L819.9,370.2L814.9,380.2L819.9,390.2L829.9,390.2L834.9,380.2L829.9,370.2Z",
        "index": 102
      },
      {
        "id": "Simcoe-North---Simcoe-Nord",
        "label": "Simcoe North / Simcoe-Nord",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M694.9,539.9L684.9,539.9L679.9,549.9L684.9,559.9L694.9,559.9L699.9,549.9L694.9,539.9Z",
        "index": 101
      },
      {
        "id": "Simcoe-North---Simcoe-Nord1",
        "label": "Simcoe North / Simcoe-Nord",
        "transform": "matrix(1,0,0,1,0.1,20)",
        "pathD": "M649.9,430L639.9,430L634.9,440L639.9,450L649.9,450L654.9,440L649.9,430Z",
        "index": 100
      },
      {
        "id": "Simcoe---Grey",
        "label": "Simcoe — Grey",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M620,450L610,450L605,460L610,470L620,470L625,460L620,450Z",
        "index": 99
      },
      {
        "id": "Scarborough-Southwest---Scarborough-Sud-Ouest",
        "label": "Scarborough Southwest / Scarborough-Sud-Ouest",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M739.9,490.2L729.9,490.2L724.9,500.2L729.9,510.2L739.9,510.2L744.9,500.2L739.9,490.2Z",
        "index": 98
      },
      {
        "id": "Scarborough---Rouge-Park",
        "label": "Scarborough — Rouge Park",
        "transform": "matrix(1,0,0,1,0.1,-19.7255)",
        "pathD": "M754.9,459.9L744.9,459.9L739.9,469.9L744.9,479.9L754.9,479.9L759.9,469.9L754.9,459.9Z",
        "index": 97
      },
      {
        "id": "Scarborough-North---Scarborough-Nord",
        "label": "Scarborough North / Scarborough-Nord",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M739.9,450.1L729.9,450.1L724.9,460.1L729.9,470.1L739.9,470.1L744.9,460.1L739.9,450.1Z",
        "index": 96
      },
      {
        "id": "Scarborough---Guildwood",
        "label": "Scarborough — Guildwood",
        "transform": "matrix(1,0,0,1,15.1,-10.2745)",
        "pathD": "M739.9,470.1L729.9,470.1L724.9,480.1L729.9,490.1L739.9,490.1L744.9,480.1L739.9,470.1Z",
        "index": 95
      },
      {
        "id": "Scarborough-Centre---Scarborough-Centre",
        "label": "Scarborough Centre / Scarborough-Centre",
        "transform": "matrix(1,0,0,1,14.986,-10)",
        "pathD": "M724.9,460.1L714.9,460.1L709.9,470.1L714.9,480.1L724.9,480.1L729.9,470.1L724.9,460.1Z",
        "index": 94
      },
      {
        "id": "Scarborough---Agincourt",
        "label": "Scarborough — Agincourt",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M725,439.9L715,439.9L710,449.9L715,459.9L725,459.9L730,449.9L725,439.9Z",
        "index": 93
      },
      {
        "id": "Sault-Ste.-Marie",
        "label": "Sault Ste. Marie",
        "transform": "matrix(1,0,0,1,15.133,10.1)",
        "pathD": "M605,419.9L595,419.9L590,429.9L595,439.9L605,439.9L610,429.9L605,419.9Z",
        "index": 92
      },
      {
        "id": "Sarnia---Lambton",
        "label": "Sarnia — Lambton",
        "transform": "matrix(1,0,0,1,45.2,9.9)",
        "pathD": "M544.8,539.9L534.8,539.9L529.8,549.9L534.8,559.9L544.8,559.9L549.8,549.9L544.8,539.9Z",
        "index": 91
      },
      {
        "id": "Toronto---St.-Paul-s",
        "label": "Toronto — St. Paul’s",
        "transform": "matrix(1,0,0,1,0.1,-20.2)",
        "pathD": "M694.9,500.2L684.9,500.2L679.9,510.2L684.9,520.2L694.9,520.2L699.9,510.2L694.9,500.2Z",
        "index": 90
      },
      {
        "id": "St.-Catharines",
        "label": "St. Catharines",
        "transform": "matrix(1,0,0,1,75.208,-9.9)",
        "pathD": "M649.8,589.9L639.8,589.9L634.8,599.9L639.8,609.9L649.8,609.9L654.8,599.9L649.8,589.9Z",
        "index": 89
      },
      {
        "id": "Carleton",
        "label": "Carleton",
        "transform": "matrix(1,0,0,1,-44.8,30.1)",
        "pathD": "M814.8,359.9L804.8,359.9L799.8,369.9L804.8,379.9L814.8,379.9L819.8,369.9L814.8,359.9Z",
        "index": 88
      },
      {
        "id": "Richmond-Hill",
        "label": "Richmond Hill",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M680,449.9L670,449.9L665,459.9L670,469.9L680,469.9L685,459.9L680,449.9Z",
        "index": 87
      },
      {
        "id": "Renfrew---Nipissing---Pembroke",
        "label": "Renfrew — Nipissing — Pembroke",
        "transform": "matrix(1,0,0,1,-14.8,-29.8)",
        "pathD": "M754.8,379.8L744.8,379.8L739.8,389.8L744.8,399.8L754.8,399.8L759.8,389.8L754.8,379.8Z",
        "index": 86
      },
      {
        "id": "Peterborough---Kawartha",
        "label": "Peterborough — Kawartha",
        "transform": "matrix(1,0,0,1,-14.9,10)",
        "pathD": "M754.9,400L744.9,400L739.9,410L744.9,420L754.9,420L759.9,410L754.9,400Z",
        "index": 84
      },
      {
        "id": "Pickering---Uxbridge",
        "label": "Pickering — Uxbridge",
        "transform": "matrix(1,0,0,1,15.1,-9.8255)",
        "pathD": "M739.9,430L729.9,430L724.9,440L729.9,450L739.9,450L744.9,440L739.9,430Z",
        "index": 85
      },
      {
        "id": "Perth---Wellington",
        "label": "Perth — Wellington",
        "transform": "",
        "pathD": "M590,490.1L580,490.1L575,500.1L580,510.1L590,510.1L595,500.1L590,490.1Z",
        "index": 83
      },
      {
        "id": "Parry-Sound---Muskoka",
        "label": "Parry Sound — Muskoka",
        "transform": "matrix(1,0,0,1,15.1,10.3)",
        "pathD": "M634.9,419.7L624.9,419.7L619.9,429.7L624.9,439.7L634.9,439.7L639.9,429.7L634.9,419.7Z",
        "index": 82
      },
      {
        "id": "Parkdale---High-Park",
        "label": "Parkdale — High Park",
        "transform": "",
        "pathD": "M680.1,529.9L670.1,529.9L665.1,539.9L670.1,549.9L680.1,549.9L685.1,539.9L680.1,529.9Z",
        "index": 81
      },
      {
        "id": "Oxford",
        "label": "Oxford",
        "transform": "matrix(1,0,0,1,75.1,30.1)",
        "pathD": "M589.9,589.9L579.9,589.9L574.9,599.9L579.9,609.9L589.9,609.9L594.9,599.9L589.9,589.9Z",
        "index": 80
      },
      {
        "id": "Ottawa-West---Nepean---Ottawa-Ouest---Nepean",
        "label": "Ottawa West — Nepean / Ottawa-Ouest — Nepean",
        "transform": "matrix(1,0,0,1,-29.8,-0.366)",
        "pathD": "M784.8,360.1L774.8,360.1L769.8,370.1L774.8,380.1L784.8,380.1L789.8,370.1L784.8,360.1Z",
        "index": 79
      },
      {
        "id": "Ottawa",
        "label": "Ottawa",
        "transform": "matrix(1,0,0,1,-15.052,9.67)",
        "pathD": "M800,330.1L790,330.1L785,340.1L790,350.1L800,350.1L805,340.1L800,330.1Z",
        "index": 78
      },
      {
        "id": "Ottawa-South---Ottawa-Sud",
        "label": "Ottawa South / Ottawa-Sud",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M800,350L790,350L785,360L790,370L800,370L805,360L800,350Z",
        "index": 77
      },
      {
        "id": "Orléans",
        "label": "Orléans",
        "transform": "matrix(1,0,0,1,-14.8,9.57)",
        "pathD": "M814.8,340.2L804.8,340.2L799.8,350.2L804.8,360.2L814.8,360.2L819.8,350.2L814.8,340.2Z",
        "index": 76
      },
      {
        "id": "Ottawa-Centre---Ottawa-Centre",
        "label": "Ottawa Centre / Ottawa-Centre",
        "transform": "matrix(1,0,0,1,-14.8,10)",
        "pathD": "M784.8,340L774.8,340L769.8,350L774.8,360L784.8,360L789.8,350L784.8,340Z",
        "index": 75
      },
      {
        "id": "Oshawa",
        "label": "Oshawa",
        "transform": "matrix(1,0,0,1,30.324,20)",
        "pathD": "M754.9,420L744.9,420L739.9,430L744.9,440L754.9,440L759.9,430L754.9,420Z",
        "index": 74
      },
      {
        "id": "Oakville-North---Burlington---Oakville-Nord---Burlington",
        "label": "Oakville North — Burlington / Oakville-Nord — Burlington",
        "transform": "matrix(1,0,0,1,30,0.1)",
        "pathD": "M620,549.9L610,549.9L605,559.9L610,569.9L620,569.9L625,559.9L620,549.9Z",
        "index": 73
      },
      {
        "id": "Oakville",
        "label": "Oakville",
        "transform": "matrix(1,0,0,1,15,10)",
        "pathD": "M650.1,549.9L640.1,549.9L635.1,559.9L640.1,569.9L650.1,569.9L655.1,559.9L650.1,549.9Z",
        "index": 72
      },
      {
        "id": "Northumberland---Peterborough-South---Northumberland---Peterborough-Sud",
        "label": "Northumberland — Peterborough South / Northumberland — Peterborough-Sud",
        "transform": "matrix(1,0,0,1,15.1,10)",
        "pathD": "M769.9,410L759.9,410L754.9,420L759.9,430L769.9,430L774.9,420L769.9,410Z",
        "index": 71
      },
      {
        "id": "Nipissing---Timiskaming",
        "label": "Nipissing — Timiskaming",
        "transform": "matrix(1,0,0,1,30.1,-19.9)",
        "pathD": "M649.9,409.9L639.9,409.9L634.9,419.9L639.9,429.9L649.9,429.9L654.9,419.9L649.9,409.9Z",
        "index": 70
      },
      {
        "id": "Nickel-Belt",
        "label": "Nickel Belt",
        "transform": "matrix(1,0,0,1,30.1,0.3)",
        "pathD": "M634.9,399.7L624.9,399.7L619.9,409.7L624.9,419.7L634.9,419.7L639.9,409.7L634.9,399.7Z",
        "index": 69
      },
      {
        "id": "Niagara-West---Niagara-Ouest",
        "label": "Niagara West / Niagara-Ouest",
        "transform": "matrix(1,0,0,1,75.1,-9.9)",
        "pathD": "M634.9,599.9L624.9,599.9L619.9,609.9L624.9,619.9L634.9,619.9L639.9,609.9L634.9,599.9Z",
        "index": 68
      },
      {
        "id": "Niagara-Falls",
        "label": "Niagara Falls",
        "transform": "matrix(1,0,0,1,74.9,10.1)",
        "pathD": "M665.1,579.9L655.1,579.9L650.1,589.9L655.1,599.9L665.1,599.9L670.1,589.9L665.1,579.9Z",
        "index": 67
      },
      {
        "id": "Niagara-Centre---Niagara-Centre",
        "label": "Niagara Centre / Niagara-Centre",
        "transform": "matrix(1,0,0,1,75.208,-9.9)",
        "pathD": "M649.8,609.9L639.8,609.9L634.8,619.9L639.8,629.9L649.8,629.9L654.8,619.9L649.8,609.9Z",
        "index": 66
      },
      {
        "id": "Newmarket---Aurora",
        "label": "Newmarket — Aurora",
        "transform": "matrix(1,0,0,1,14.9,-10.2)",
        "pathD": "M665.1,440.2L655.1,440.2L650.1,450.2L655.1,460.2L665.1,460.2L670.1,450.2L665.1,440.2Z",
        "index": 65
      },
      {
        "id": "Nepean",
        "label": "Nepean",
        "transform": "matrix(1,0,0,1,-30,0.2)",
        "pathD": "M800,369.8L790,369.8L785,379.8L790,389.8L800,389.8L805,379.8L800,369.8Z",
        "index": 64
      },
      {
        "id": "Mississauga---Streetsville",
        "label": "Mississauga — Streetsville",
        "transform": "matrix(1,0,0,1,-0.1,0.1)",
        "pathD": "M620.1,529.9L610.1,529.9L605.1,539.9L610.1,549.9L620.1,549.9L625.1,539.9L620.1,529.9Z",
        "index": 63
      },
      {
        "id": "Mississauga---Malton",
        "label": "Mississauga — Malton",
        "transform": "",
        "pathD": "M635.1,499.9L625.1,499.9L620.1,509.9L625.1,519.9L635.1,519.9L640.1,509.9L635.1,499.9Z",
        "index": 62
      },
      {
        "id": "Mississauga---Lakeshore",
        "label": "Mississauga — Lakeshore",
        "transform": "",
        "pathD": "M665.1,539.9L655.1,539.9L650.1,549.9L655.1,559.9L665.1,559.9L670.1,549.9L665.1,539.9Z",
        "index": 61
      },
      {
        "id": "Mississauga---Erin-Mills",
        "label": "Mississauga — Erin Mills",
        "transform": "",
        "pathD": "M635.1,539.9L625.1,539.9L620.1,549.9L625.1,559.9L635.1,559.9L640.1,549.9L635.1,539.9Z",
        "index": 60
      },
      {
        "id": "Mississauga-East---Cooksville---Mississauga-Est---Cooksville",
        "label": "Mississauga East — Cooksville / Mississauga-Est — Cooksville",
        "transform": "",
        "pathD": "M650,529.9L640,529.9L635,539.9L640,549.9L650,549.9L655,539.9L650,529.9Z",
        "index": 59
      },
      {
        "id": "Mississauga-Centre---Mississauga-Centre",
        "label": "Mississauga Centre / Mississauga-Centre",
        "transform": "",
        "pathD": "M635.1,519.9L625.1,519.9L620.1,529.9L625.1,539.9L635.1,539.9L640.1,529.9L635.1,519.9Z",
        "index": 58
      },
      {
        "id": "Milton",
        "label": "Milton",
        "transform": "matrix(1,0,0,1,45,30.1)",
        "pathD": "M605,539.9L595,539.9L590,549.9L595,559.9L605,559.9L610,549.9L605,539.9Z",
        "index": 57
      },
      {
        "id": "Markham---Unionville",
        "label": "Markham — Unionville",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M694.9,439.9L684.9,439.9L679.9,449.9L684.9,459.9L694.9,459.9L699.9,449.9L694.9,439.9Z",
        "index": 56
      },
      {
        "id": "Markham---Thornhill",
        "label": "Markham — Thornhill",
        "transform": "matrix(1,0,0,1,0.2,-19.9)",
        "pathD": "M709.8,449.9L699.8,449.9L694.8,459.9L699.8,469.9L709.8,469.9L714.8,459.9L709.8,449.9Z",
        "index": 55
      },
      {
        "id": "Markkham---Stouffville",
        "label": "Markkham — Stouffville",
        "transform": "matrix(1,0,0,1,15,-9.5)",
        "pathD": "M710,429.5L700,429.5L695,439.5L700,449.5L710,449.5L715,439.5L710,429.5Z",
        "index": 54
      },
      {
        "id": "London-West---London-Ouest",
        "label": "London West / London-Ouest",
        "transform": "matrix(1,0,0,1,75.2,30.1)",
        "pathD": "M559.8,549.9L549.8,549.9L544.8,559.9L549.8,569.9L559.8,569.9L564.8,559.9L559.8,549.9Z",
        "index": 53
      },
      {
        "id": "London-North-Centre---London-Centre-Nord",
        "label": "London North Centre / London-Centre-Nord",
        "transform": "matrix(1,0,0,1,60.1,40.1)",
        "pathD": "M574.9,559.9L564.9,559.9L559.9,569.9L564.9,579.9L574.9,579.9L579.9,569.9L574.9,559.9Z",
        "index": 52
      },
      {
        "id": "London---Fanshawe",
        "label": "London — Fanshawe",
        "transform": "matrix(1,0,0,1,60.1,40.1)",
        "pathD": "M574.9,579.9L564.9,579.9L559.9,589.9L564.9,599.9L574.9,599.9L579.9,589.9L574.9,579.9Z",
        "index": 51
      },
      {
        "id": "Leeds---Grenville---Thousand-Islands-and-Rideau-Lakes---Leeds---Grenville---Thousand-Islands-et-Rideau-Lakes",
        "label": "Leeds — Grenville — Thousand Islands and Rideau Lakes / Leeds — Grenville — Thousand Islands et Rideau Lakes",
        "transform": "matrix(1,0,0,1,-29.8,0.1)",
        "pathD": "M814.8,379.9L804.8,379.9L799.8,389.9L804.8,399.9L814.8,399.9L819.8,389.9L814.8,379.9Z",
        "index": 50
      },
      {
        "id": "Lanark---Frontenac---Kingston",
        "label": "Lanark — Frontenac — Kingston",
        "transform": "matrix(1,0,0,1,-14.8,29.7)",
        "pathD": "M784.8,380.3L774.8,380.3L769.8,390.3L774.8,400.3L784.8,400.3L789.8,390.3L784.8,380.3Z",
        "index": 49
      },
      {
        "id": "Lambton---Kent---Middlesex",
        "label": "Lambton — Kent — Middlesex",
        "transform": "matrix(1,0,0,1,60.2,20.1)",
        "pathD": "M559.8,569.9L549.8,569.9L544.8,579.9L549.8,589.9L559.8,589.9L564.8,579.9L559.8,569.9Z",
        "index": 48
      },
      {
        "id": "Kitchener-South---Hespeler---Kitchener-Sud---Hespeler",
        "label": "Kitchener South — Hespeler / Kitchener-Sud — Hespeler",
        "transform": "matrix(1,0,0,1,30,40.1)",
        "pathD": "M590,529.9L580,529.9L575,539.9L580,549.9L590,549.9L595,539.9L590,529.9Z",
        "index": 47
      },
      {
        "id": "Kitchener---Conestaga",
        "label": "Kitchener — Conestaga",
        "transform": "matrix(1,0,0,1,45,10.1)",
        "pathD": "M560,529.9L550,529.9L545,539.9L550,549.9L560,549.9L565,539.9L560,529.9Z",
        "index": 46
      },
      {
        "id": "Kitchener-Centre---Kitchener-Centre",
        "label": "Kitchener Centre / Kitchener-Centre",
        "transform": "matrix(1,0,0,1,45.1,10.1)",
        "pathD": "M574.9,539.9L564.9,539.9L559.9,549.9L564.9,559.9L574.9,559.9L579.9,549.9L574.9,539.9Z",
        "index": 45
      },
      {
        "id": "Kingston-and-the-Islands---Kingston-et-les-Îles",
        "label": "Kingston and the Islands / Kingston et les Îles",
        "transform": "matrix(1,0,0,1,0.0805,0.1)",
        "pathD": "M800,389.9L790,389.9L785,399.9L790,409.9L800,409.9L805,399.9L800,389.9Z",
        "index": 44
      },
      {
        "id": "King---Vaughan",
        "label": "King — Vaughan",
        "transform": "matrix(1,0,0,1,0.1,1.13687e-13)",
        "pathD": "M634.9,460L624.9,460L619.9,470L624.9,480L634.9,480L639.9,470L634.9,460Z",
        "index": 43
      },
      {
        "id": "Kenora",
        "label": "Kenora",
        "transform": "matrix(1,0,0,1,59.8,-19.9)",
        "pathD": "M590.2,389.9L580.2,389.9L575.2,399.9L580.2,409.9L590.2,409.9L595.2,399.9L590.2,389.9Z",
        "index": 42
      },
      {
        "id": "Kanata---Carleton",
        "label": "Kanata — Carleton",
        "transform": "matrix(1,0,0,1,-15.1,10)",
        "pathD": "M770.1,370L760.1,370L755.1,380L760.1,390L770.1,390L775.1,380L770.1,370Z",
        "index": 41
      },
      {
        "id": "Huron---Bruce",
        "label": "Huron — Bruce",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M590,470L580,470L575,480L580,490L590,490L595,480L590,470Z",
        "index": 40
      },
      {
        "id": "Hastings---Lennox-and-Addington",
        "label": "Hastings — Lennox and Addington",
        "transform": "matrix(1,0,0,1,-14.6,9.9)",
        "pathD": "M769.6,390.1L759.6,390.1L754.6,400.1L759.6,410.1L769.6,410.1L774.6,400.1L769.6,390.1Z",
        "index": 39
      },
      {
        "id": "Hamilton-West---Ancaster---Dundas---Hamilton-Ouest---Ancaster---Dundas",
        "label": "Hamilton West — Ancaster — Dundas / Hamilton-Ouest — Ancaster — Dundas",
        "transform": "matrix(1,0,0,1,75,30.1)",
        "pathD": "M605,579.9L595,579.9L590,589.9L595,599.9L605,599.9L610,589.9L605,579.9Z",
        "index": 38
      },
      {
        "id": "Hamilton-Mountain",
        "label": "Hamilton Mountain",
        "transform": "matrix(1,0,0,1,90.1,0)",
        "pathD": "M604.9,599.9L594.9,599.9L589.9,609.9L594.9,619.9L604.9,619.9L609.9,609.9L604.9,599.9Z",
        "index": 37
      },
      {
        "id": "Hamilton-East---Stoney-Creek---Hamilton-Est---Stoney-Creek",
        "label": "Hamilton East — Stoney Creek / Hamilton-Est — Stoney Creek",
        "transform": "matrix(1,0,0,1,75,-9.9)",
        "pathD": "M620,589.9L610,589.9L605,599.9L610,609.9L620,609.9L625,599.9L620,589.9Z",
        "index": 36
      },
      {
        "id": "Hamilton-Centre---Hamilton-Centre",
        "label": "Hamilton Centre / Hamilton-Centre",
        "transform": "matrix(1,0,0,1,60,20)",
        "pathD": "M620,569.9L610,569.9L605,579.9L610,589.9L620,589.9L625,579.9L620,569.9Z",
        "index": 35
      },
      {
        "id": "Haliburton---Kawartha-Lakes---Brock",
        "label": "Haliburton — Kawartha Lakes — Brock",
        "transform": "matrix(1,0,0,1,29.9,-20)",
        "pathD": "M665.1,420L655.1,420L650.1,430L655.1,440L665.1,440L670.1,430L665.1,420Z",
        "index": 34
      },
      {
        "id": "Haldimand---Norfolk",
        "label": "Haldimand — Norfolk",
        "transform": "matrix(1,0,0,1,105.1,10.1)",
        "pathD": "M589.9,609.9L579.9,609.9L574.9,619.9L579.9,629.9L589.9,629.9L594.9,619.9L589.9,609.9Z",
        "index": 33
      },
      {
        "id": "Guelph",
        "label": "Guelph",
        "transform": "",
        "pathD": "M590,509.9L580,509.9L575,519.9L580,529.9L590,529.9L595,519.9L590,509.9Z",
        "index": 32
      },
      {
        "id": "Glengarry---Prescott---Russell",
        "label": "Glengarry — Prescott — Russell",
        "transform": "matrix(1,0,0,1,-14.9,9.8)",
        "pathD": "M829.9,350.2L819.9,350.2L814.9,360.2L819.9,370.2L829.9,370.2L834.9,360.2L829.9,350.2Z",
        "index": 31
      },
      {
        "id": "Flamborough---Glanbrook",
        "label": "Flamborough — Glanbrook",
        "transform": "matrix(1,0,0,1,60,40)",
        "pathD": "M605,559.9L595,559.9L590,569.9L595,579.9L605,579.9L610,569.9L605,559.9Z",
        "index": 30
      },
      {
        "id": "Etobicoke-North---Etobicoke-Nord",
        "label": "Etobicoke North / Etobicoke-Nord",
        "transform": "",
        "pathD": "M650,489.9L640,489.9L635,499.9L640,509.9L650,509.9L655,499.9L650,489.9Z",
        "index": 29
      },
      {
        "id": "Etobicoke---Lakeshore",
        "label": "Etobicoke — Lakeshore",
        "transform": "",
        "pathD": "M665.1,519.9L655.1,519.9L650.1,529.9L655.1,539.9L665.1,539.9L670.1,529.9L665.1,519.9Z",
        "index": 28
      },
      {
        "id": "Etobicoke-Centre---Etobicoke-Centre",
        "label": "Etobicoke Centre / Etobicoke-Centre",
        "transform": "",
        "pathD": "M650,509.9L640,509.9L635,519.9L640,529.9L650,529.9L655,519.9L650,509.9Z",
        "index": 27
      },
      {
        "id": "Essex",
        "label": "Essex",
        "transform": "matrix(1,0,0,1,60.3,-0.154)",
        "pathD": "M544.7,599.9L534.7,599.9L529.7,609.9L534.7,619.9L544.7,619.9L549.7,609.9L544.7,599.9Z",
        "index": 26
      },
      {
        "id": "Elgin---Middlesex---London",
        "label": "Elgin — Middlesex — London",
        "transform": "matrix(1,0,0,1,75.188,30.1)",
        "pathD": "M574.9,599.9L564.9,599.9L559.9,609.9L564.9,619.9L574.9,619.9L579.9,609.9L574.9,599.9Z",
        "index": 25
      },
      {
        "id": "Eglinton---Lawrence",
        "label": "Eglinton — Lawrence",
        "transform": "matrix(1,0,0,1,0.4,-19.9)",
        "pathD": "M694.6,479.9L684.6,479.9L679.6,489.9L684.6,499.9L694.6,499.9L699.6,489.9L694.6,479.9Z",
        "index": 24
      },
      {
        "id": "Durham",
        "label": "Durham",
        "transform": "matrix(1,0,0,1,30.1,20.1)",
        "pathD": "M739.9,409.9L729.9,409.9L724.9,419.9L729.9,429.9L739.9,429.9L744.9,419.9L739.9,409.9Z",
        "index": 23
      },
      {
        "id": "Dufferin---Caledon",
        "label": "Dufferin — Caledon",
        "transform": "matrix(1,0,0,1,0.1,0.4)",
        "pathD": "M619.9,469.6L609.9,469.6L604.9,479.6L609.9,489.6L619.9,489.6L624.9,479.6L619.9,469.6Z",
        "index": 22
      },
      {
        "id": "Don-Valley-West---Don-Valley-Ouest",
        "label": "Don Valley West / Don Valley-Ouest",
        "transform": "matrix(1,0,0,1,0.2,-19.9)",
        "pathD": "M709.8,489.9L699.8,489.9L694.8,499.9L699.8,509.9L709.8,509.9L714.8,499.9L709.8,489.9Z",
        "index": 21
      },
      {
        "id": "Don-Valley-North---Don-Valley-Nord",
        "label": "Don Valley North / Don Valley-Nord",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M709.8,469.9L699.8,469.9L694.8,479.9L699.8,489.9L709.8,489.9L714.8,479.9L709.8,469.9Z",
        "index": 20
      },
      {
        "id": "Don-Valley-East---Don-Valley-Est",
        "label": "Don Valley East / Don Valley-Est",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M724.9,480.1L714.9,480.1L709.9,490.1L714.9,500.1L724.9,500.1L729.9,490.1L724.9,480.1Z",
        "index": 19
      },
      {
        "id": "Davenport",
        "label": "Davenport",
        "transform": "matrix(1,0,0,1,0.2,-0.2)",
        "pathD": "M679.8,510.2L669.8,510.2L664.8,520.2L669.8,530.2L679.8,530.2L684.8,520.2L679.8,510.2Z",
        "index": 18
      },
      {
        "id": "Chatham-Kent---Leamington",
        "label": "Chatham-Kent — Leamington",
        "transform": "matrix(1,0,0,1,59.978,20.1)",
        "pathD": "M559.9,589.9L549.9,589.9L544.9,599.9L549.9,609.9L559.9,609.9L564.9,599.9L559.9,589.9Z",
        "index": 17
      },
      {
        "id": "Cambridge",
        "label": "Cambridge",
        "transform": "matrix(1,0,0,1,60,40.1)",
        "pathD": "M590,549.9L580,549.9L575,559.9L580,569.9L590,569.9L595,559.9L590,549.9Z",
        "index": 16
      },
      {
        "id": "Burlington",
        "label": "Burlington",
        "transform": "matrix(1,0,0,1,29.9,20.1)",
        "pathD": "M635.1,559.9L625.1,559.9L620.1,569.9L625.1,579.9L635.1,579.9L640.1,569.9L635.1,559.9Z",
        "index": 15
      },
      {
        "id": "Bruce---Grey---Owen-Sound",
        "label": "Bruce — Grey — Owen Sound",
        "transform": "matrix(1,0,0,1,-15,10)",
        "pathD": "M604.9,459.9L594.9,459.9L589.9,469.9L594.9,479.9L604.9,479.9L609.9,469.9L604.9,459.9Z",
        "index": 14
      },
      {
        "id": "Brantford---Brant",
        "label": "Brantford — Brant",
        "transform": "matrix(1,0,0,1,60,40.1)",
        "pathD": "M590,569.9L580,569.9L575,579.9L580,589.9L590,589.9L595,579.9L590,569.9Z",
        "index": 13
      },
      {
        "id": "Brampton-West---Brampton-Ouest",
        "label": "Brampton West / Brampton-Ouest",
        "transform": "",
        "pathD": "M605,499.9L595,499.9L590,509.9L595,519.9L605,519.9L610,509.9L605,499.9Z",
        "index": 12
      },
      {
        "id": "Brampton-South---Brampton-Sud",
        "label": "Brampton South / Brampton-Sud",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M620,509.9L610,509.9L605,519.9L610,529.9L620,529.9L625,519.9L620,509.9Z",
        "index": 11
      },
      {
        "id": "Brampton-North---Brampton-Nord",
        "label": "Brampton North / Brampton-Nord",
        "transform": "",
        "pathD": "M605,479.9L595,479.9L590,489.9L595,499.9L605,499.9L610,489.9L605,479.9Z",
        "index": 10
      },
      {
        "id": "Brampton-East---Brampton-Est",
        "label": "Brampton East / Brampton-Est",
        "transform": "",
        "pathD": "M634.8,479.9L624.8,479.9L619.8,489.9L624.8,499.9L634.8,499.9L639.8,489.9L634.8,479.9Z",
        "index": 9
      },
      {
        "id": "Brampton-Centre---Brampton-Centre",
        "label": "Brampton Centre / Brampton-Centre",
        "transform": "matrix(1,0,0,1,0,0.1)",
        "pathD": "M620,489.9L610,489.9L605,499.9L610,509.9L620,509.9L625,499.9L620,489.9Z",
        "index": 8
      },
      {
        "id": "Beaches---East-York",
        "label": "Beaches — East York",
        "transform": "matrix(1,0,0,1,0,-20)",
        "pathD": "M724.9,499.9L714.9,499.9L709.9,509.9L714.9,519.9L724.9,519.9L729.9,509.9L724.9,499.9Z",
        "index": 7
      },
      {
        "id": "Bay-of-Quinte---Baie-de-Quinte",
        "label": "Bay of Quinte / Baie de Quinte",
        "transform": "matrix(1,0,0,1,0.2,-0.1)",
        "pathD": "M784.8,400.1L774.8,400.1L769.8,410.1L774.8,420.1L784.8,420.1L789.8,410.1L784.8,400.1Z",
        "index": 6
      },
      {
        "id": "Barrie---Springwater---Oro-Medonte",
        "label": "Barrie — Springwater — Oro-Medonte",
        "transform": "matrix(1,0,0,1,30.1,-19.8)",
        "pathD": "M634.9,439.8L624.9,439.8L619.9,449.8L624.9,459.8L634.9,459.8L639.9,449.8L634.9,439.8Z",
        "index": 5
      },
      {
        "id": "Barrie---Innisfil",
        "label": "Barrie — Innisfil",
        "transform": "matrix(1,0,0,1,15.1,-10.2)",
        "pathD": "M649.9,450.2L639.9,450.2L634.9,460.2L639.9,470.2L649.9,470.2L654.9,460.2L649.9,450.2Z",
        "index": 4
      },
      {
        "id": "Aurora---Oak-Ridges---Richmond-Hill",
        "label": "Aurora — Oak Ridges — Richmond Hill",
        "transform": "",
        "pathD": "M665.1,459.9L655.1,459.9L650.1,469.9L655.1,479.9L665.1,479.9L670.1,469.9L665.1,459.9Z",
        "index": 3
      },
      {
        "id": "Algoma---Manitoulin---Kapuskasing",
        "label": "Algoma — Manitoulin — Kapuskasing",
        "transform": "matrix(1,0,0,1,15.1,30.2)",
        "pathD": "M619.9,389.8L609.9,389.8L604.9,399.8L609.9,409.8L619.9,409.8L624.9,399.8L619.9,389.8Z",
        "index": 2
      },
      {
        "id": "Ajax",
        "label": "Ajax",
        "transform": "matrix(1,0,0,1,15.1,10)",
        "pathD": "M754.9,440L744.9,440L739.9,450L744.9,460L754.9,460L759.9,450L754.9,440Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Quebec",
    "label": "Quebec",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 24,
    "ridings": [
      {
        "id": "Vimy",
        "label": "Vimy",
        "transform": "matrix(1,0,0,1,-44.9,-30.662)",
        "pathD": "M889.9,330.4L879.9,330.4L874.9,340.4L879.9,350.4L889.9,350.4L894.9,340.4L889.9,330.4Z",
        "index": 78
      },
      {
        "id": "Ville-Marie---Le-Sud-Ouest---Île-des-Soeurs",
        "label": "Ville-Marie — Le Sud-Ouest — Île-des-Soeurs",
        "transform": "matrix(1,0,0,1,-29.6,-20.153)",
        "pathD": "M904.6,399.9L894.6,399.9L889.6,409.9L894.6,419.9L904.6,419.9L909.6,409.9L904.6,399.9Z",
        "index": 77
      },
      {
        "id": "Trois-Rivières",
        "label": "Trois-Rivières",
        "transform": "matrix(1,0,0,1,-29.9,-20.3)",
        "pathD": "M859.9,290.3L849.9,290.3L844.9,300.3L849.9,310.3L859.9,310.3L864.9,300.3L859.9,290.3Z",
        "index": 76
      },
      {
        "id": "Terrebonne",
        "label": "Terrebonne",
        "transform": "matrix(1,0,0,1,-59.8,-19.8)",
        "pathD": "M919.8,309.8L909.8,309.8L904.8,319.8L909.8,329.8L919.8,329.8L924.8,319.8L919.8,309.8Z",
        "index": 75
      },
      {
        "id": "Vaudreiul---Soulanges",
        "label": "Vaudreiul — Soulanges",
        "transform": "matrix(1,0,0,1,-14.9,9.7)",
        "pathD": "M844.9,360.3L834.9,360.3L829.9,370.3L834.9,380.3L844.9,380.3L849.9,370.3L844.9,360.3Z",
        "index": 74
      },
      {
        "id": "Sherbrooke",
        "label": "Sherbrooke",
        "transform": "matrix(1,0,0,1,-15,-9.8)",
        "pathD": "M980,390L970,390L965,400L970,410L980,410L985,400L980,390Z",
        "index": 73
      },
      {
        "id": "Shefford",
        "label": "Shefford",
        "transform": "matrix(1,0,0,1,-29.8565,-20)",
        "pathD": "M965,380L955,380L950,390L955,400L965,400L970,390L965,380Z",
        "index": 72
      },
      {
        "id": "Salaberry---Suroît",
        "label": "Salaberry — Suroît",
        "transform": "matrix(1,0,0,1,-29.9,-0.3)",
        "pathD": "M844.9,380.3L834.9,380.3L829.9,390.3L834.9,400.3L844.9,400.3L849.9,390.3L844.9,380.3Z",
        "index": 71
      },
      {
        "id": "Saint-Maurice---Champlain",
        "label": "Saint-Maurice — Champlain",
        "transform": "matrix(1,0,0,1,-44.9,10.1)",
        "pathD": "M829.9,290L819.9,290L814.9,300L819.9,310L829.9,310L834.9,300L829.9,290Z",
        "index": 70
      },
      {
        "id": "Saint-Léonard---Saint-Michel",
        "label": "Saint-Léonard — Saint Michel",
        "transform": "matrix(1,0,0,1,-59.8,0.2)",
        "pathD": "M919.8,329.8L909.8,329.8L904.8,339.8L909.8,349.8L919.8,349.8L924.8,339.8L919.8,329.8Z",
        "index": 69
      },
      {
        "id": "Saint-Laurent",
        "label": "Saint-Laurent",
        "transform": "matrix(1,0,0,1,-29.917,-40.7)",
        "pathD": "M875,380.7L865,380.7L860,390.7L865,400.7L875,400.7L880,390.7L875,380.7Z",
        "index": 68
      },
      {
        "id": "Saint-Jean",
        "label": "Saint-Jean",
        "transform": "matrix(1,0,0,1,15.4,-29.9)",
        "pathD": "M904.6,419.9L894.6,419.9L889.6,429.9L894.6,439.9L904.6,439.9L909.6,429.9L904.6,419.9Z",
        "index": 67
      },
      {
        "id": "Saint-Hyacinthe---Bagot",
        "label": "Saint-Hyacinthe — Bagot",
        "transform": "matrix(1,0,0,1,-29.9,-20)",
        "pathD": "M949.9,350L939.9,350L934.9,360L939.9,370L949.9,370L954.9,360L949.9,350Z",
        "index": 66
      },
      {
        "id": "Marc-Aurèle-Fortin",
        "label": "Marc-Aurèle-Fortin",
        "transform": "matrix(1,0,0,1,-44.9,-30.3)",
        "pathD": "M889.9,310.3L879.9,310.3L874.9,320.3L879.9,330.3L889.9,330.3L894.9,320.3L889.9,310.3Z",
        "index": 65
      },
      {
        "id": "Rosemont---La-Petite-Patrie",
        "label": "Rosemont — La Petite-Patrie",
        "transform": "matrix(1,0,0,1,-29.5945,-39.8)",
        "pathD": "M919.8,369.8L909.8,369.8L904.8,379.8L909.8,389.8L919.8,389.8L924.8,379.8L919.8,369.8Z",
        "index": 64
      },
      {
        "id": "Rivière-du-Nord",
        "label": "Rivière-du-Nord",
        "transform": "matrix(1,0,0,1,-29.9,-20.3)",
        "pathD": "M844.9,340.3L834.9,340.3L829.9,350.3L834.9,360.3L844.9,360.3L849.9,350.3L844.9,340.3Z",
        "index": 63
      },
      {
        "id": "Rivière-des-Mille-Îles",
        "label": "Rivière-des-Mille-Îles",
        "transform": "matrix(1,0,0,1,-45,-10.3)",
        "pathD": "M875,320.3L865,320.3L860,330.3L865,340.3L875,340.3L880,330.3L875,320.3Z",
        "index": 62
      },
      {
        "id": "Vaudreiul---Soulanges1",
        "label": "Vaudreiul — Soulanges",
        "transform": "matrix(1,0,0,1,-30,19.8)",
        "pathD": "M980,350.4L970,350.4L965,360.4L970,370.4L980,370.4L985,360.4L980,350.4Z",
        "index": 61
      },
      {
        "id": "Repentigny",
        "label": "Repentigny",
        "transform": "matrix(1,0,0,1,-74.9575,-50.1)",
        "pathD": "M949.9,330.1L939.9,330.1L934.9,340.1L939.9,350.1L949.9,350.1L954.9,340.1L949.9,330.1Z",
        "index": 60
      },
      {
        "id": "Québec",
        "label": "Québec",
        "transform": "matrix(1,0,0,1,-29.6,-59.843)",
        "pathD": "M904.6,299.6L894.6,299.6L889.6,309.6L894.6,319.6L904.6,319.6L909.6,309.6L904.6,299.6Z",
        "index": 59
      },
      {
        "id": "Portneuf---Jacques-Cartier",
        "label": "Portneuf — Jacques-Cartier",
        "transform": "matrix(1,0,0,1,-14.9,-10.3)",
        "pathD": "M859.9,270.3L849.9,270.3L844.9,280.3L849.9,290.3L859.9,290.3L864.9,280.3L859.9,270.3Z",
        "index": 58
      },
      {
        "id": "Pontiac",
        "label": "Pontiac",
        "transform": "matrix(1,0,0,1,-74.9,29.9)",
        "pathD": "M829.9,310.1L819.9,310.1L814.9,320.1L819.9,330.1L829.9,330.1L834.9,320.1L829.9,310.1Z",
        "index": 57
      },
      {
        "id": "Pierrefonds-Dollard",
        "label": "Pierrefonds-Dollard",
        "transform": "matrix(1,0,0,1,-45,-10.7)",
        "pathD": "M875,360.7L865,360.7L860,370.7L865,380.7L875,380.7L880,370.7L875,360.7Z",
        "index": 56
      },
      {
        "id": "Papineau",
        "label": "Papineau",
        "transform": "matrix(1,0,0,1,-29.6,-20)",
        "pathD": "M904.6,360L894.6,360L889.6,370L894.6,380L904.6,380L909.6,370L904.6,360Z",
        "index": 55
      },
      {
        "id": "Outremont",
        "label": "Outremont",
        "transform": "matrix(1,0,0,1,-14.9,-29.9)",
        "pathD": "M889.9,389.9L879.9,389.9L874.9,399.9L879.9,409.9L889.9,409.9L894.9,399.9L889.9,389.9Z",
        "index": 54
      },
      {
        "id": "Notre-Dame-de-Grâce---Westmount",
        "label": "Notre-Dame-de-Grâce — Westmount",
        "transform": "matrix(1,0,0,1,-29.9,-40.134)",
        "pathD": "M889.9,409.9L879.9,409.9L874.9,419.9L879.9,429.9L889.9,429.9L894.9,419.9L889.9,409.9Z",
        "index": 53
      },
      {
        "id": "Mont-Royal---Mount-Royal",
        "label": "Mont-Royal / Mount Royal",
        "transform": "matrix(1,0,0,1,-29.9,-20.4)",
        "pathD": "M889.9,370.4L879.9,370.4L874.9,380.4L879.9,390.4L889.9,390.4L894.9,380.4L889.9,370.4Z",
        "index": 52
      },
      {
        "id": "Montmagny---l-Islet---Kamouraska---Rivière-du-Loup",
        "label": "Montmagny — l’Islet — Kamouraska — Rivière-du-Loup",
        "transform": "matrix(1,0,0,1,-14.9,10.1)",
        "pathD": "M949.9,289.9L939.9,289.9L934.9,299.9L939.9,309.9L949.9,309.9L954.9,299.9L949.9,289.9Z",
        "index": 51
      },
      {
        "id": "Montcalm",
        "label": "Montcalm",
        "transform": "matrix(1,0,0,1,-44.9,-10.3)",
        "pathD": "M859.9,310.3L849.9,310.3L844.9,320.3L849.9,330.3L859.9,330.3L864.9,320.3L859.9,310.3Z",
        "index": 50
      },
      {
        "id": "Montarville",
        "label": "Montarville",
        "transform": "matrix(1,0,0,1,-29.9,-40)",
        "pathD": "M949.9,390L939.9,390L934.9,400L939.9,410L949.9,410L954.9,400L949.9,390Z",
        "index": 49
      },
      {
        "id": "Mirabel",
        "label": "Mirabel",
        "transform": "matrix(1,0,0,1,-44.8945,-10.4)",
        "pathD": "M859.9,350.4L849.9,350.4L844.9,360.4L849.9,370.4L859.9,370.4L864.9,360.4L859.9,350.4Z",
        "index": 48
      },
      {
        "id": "Mégantic---l-Érable",
        "label": "Mégantic — l’Érable",
        "transform": "matrix(1,0,0,1,-30.017,19.8)",
        "pathD": "M980,330.2L970,330.2L965,340.2L970,350.2L980,350.2L985,340.2L980,330.2Z",
        "index": 47
      },
      {
        "id": "Manicouagan",
        "label": "Manicouagan",
        "transform": "matrix(1,0,0,1,15.1,10.2)",
        "pathD": "M889.9,229.8L879.9,229.8L874.9,239.8L879.9,249.8L889.9,249.8L894.9,239.8L889.9,229.8Z",
        "index": 46
      },
      {
        "id": "Louis-Saint-Laurent",
        "label": "Louis-Saint-Laurent",
        "transform": "matrix(1,0,0,1,-44.6,-9.8)",
        "pathD": "M904.6,279.8L894.6,279.8L889.6,289.8L894.6,299.8L904.6,299.8L909.6,289.8L904.6,279.8Z",
        "index": 45
      },
      {
        "id": "Louis-Hébert",
        "label": "Louis-Hébert",
        "transform": "matrix(1,0,0,1,-14.9,-30.343)",
        "pathD": "M889.9,290.1L879.9,290.1L874.9,300.1L879.9,310.1L889.9,310.1L894.9,300.1L889.9,290.1Z",
        "index": 44
      },
      {
        "id": "Longueuil---Saint-Hubert",
        "label": "Longueuil — Saint-Hubert",
        "transform": "matrix(1,0,0,1,-44.9,-10.1)",
        "pathD": "M934.9,380.1L924.9,380.1L919.9,390.1L924.9,400.1L934.9,400.1L939.9,390.1L934.9,380.1Z",
        "index": 43
      },
      {
        "id": "Lévis---Lotbinière",
        "label": "Lévis — Lotbinière",
        "transform": "matrix(1,0,0,1,-45.07,-10)",
        "pathD": "M965,320L955,320L950,330L955,340L965,340L970,330L965,320Z",
        "index": 42
      },
      {
        "id": "Longueuil---Charles-Lemoyne",
        "label": "Longueuil — Charles-Lemoyne",
        "transform": "matrix(1,0,0,1,-14.73,-9.8)",
        "pathD": "M919.8,389.8L909.8,389.8L904.8,399.8L909.8,409.8L919.8,409.8L924.8,399.8L919.8,389.8Z",
        "index": 41
      },
      {
        "id": "Laval---Les-Îles",
        "label": "Laval — Les Îles",
        "transform": "matrix(1,0,0,1,-45,-10.4)",
        "pathD": "M875,340.4L865,340.4L860,350.4L865,360.4L875,360.4L880,350.4L875,340.4Z",
        "index": 40
      },
      {
        "id": "Laurier---Sainte-Marie",
        "label": "Laurier — Sainte-Marie",
        "transform": "matrix(1,0,0,1,-14.6,-30.1)",
        "pathD": "M904.6,380.1L894.6,380.1L889.6,390.1L894.6,400.1L904.6,400.1L909.6,390.1L904.6,380.1Z",
        "index": 39
      },
      {
        "id": "Laurentides---Labelle",
        "label": "Laurentides — Labelle",
        "transform": "matrix(1,0,0,1,-44.9,-10.1)",
        "pathD": "M844.9,320.1L834.9,320.1L829.9,330.1L834.9,340.1L844.9,340.1L849.9,330.1L844.9,320.1Z",
        "index": 38
      },
      {
        "id": "Lasalle---Émard---Verdun",
        "label": "Lasalle — Émard — Verdun",
        "transform": "matrix(1,0,0,1,0.1,-19.9)",
        "pathD": "M859.9,409.9L849.9,409.9L844.9,419.9L849.9,429.9L859.9,429.9L864.9,419.9L859.9,409.9Z",
        "index": 37
      },
      {
        "id": "Lac-Saint-Louis",
        "label": "Lac-Saint-Louis",
        "transform": "matrix(1,0,0,1,-14.9,-10.5)",
        "pathD": "M859.9,370.5L849.9,370.5L844.9,380.5L849.9,390.5L859.9,390.5L864.9,380.5L859.9,370.5Z",
        "index": 36
      },
      {
        "id": "Lac-Saint-Jean",
        "label": "Lac-Saint-Jean",
        "transform": "matrix(1,0,0,1,-44.9,-10)",
        "pathD": "M844.9,280L834.9,280L829.9,290L834.9,300L844.9,300L849.9,290L844.9,280Z",
        "index": 35
      },
      {
        "id": "La-Prairie",
        "label": "La Prairie",
        "transform": "matrix(1,0,0,1,0,-0.2)",
        "pathD": "M875,400.2L865,400.2L860,410.2L865,420.2L875,420.2L880,410.2L875,400.2Z",
        "index": 34
      },
      {
        "id": "La-Pointe-de-l-Île",
        "label": "La Pointe-de-l’Île",
        "transform": "matrix(1,0,0,1,-44.9,-30.2)",
        "pathD": "M934.9,340.2L924.9,340.2L919.9,350.2L924.9,360.2L934.9,360.2L939.9,350.2L934.9,340.2Z",
        "index": 33
      },
      {
        "id": "Jonquière",
        "label": "Jonquière",
        "transform": "matrix(1,0,0,1,30.1,-20.3)",
        "pathD": "M859.9,250.3L849.9,250.3L844.9,260.3L849.9,270.3L859.9,270.3L864.9,260.3L859.9,250.3Z",
        "index": 32
      },
      {
        "id": "Argenteuil---La-Petite-Nation",
        "label": "Argenteuil — La Petite-Nation",
        "transform": "matrix(1,0,0,1,-44.9485,-10.1)",
        "pathD": "M844.9,300.1L834.9,300.1L829.9,310.1L834.9,320.1L844.9,320.1L849.9,310.1L844.9,300.1Z",
        "index": 31
      },
      {
        "id": "Hull---Aylmer",
        "label": "Hull — Aylmer",
        "transform": "matrix(1,0,0,1,-30,20)",
        "pathD": "M800,310L790,310L785,320L790,330L800,330L805,320L800,310Z",
        "index": 30
      },
      {
        "id": "Honoré-Mercier",
        "label": "Honoré-Mercier",
        "transform": "matrix(1,0,0,1,-59.9,-20.1)",
        "pathD": "M934.9,320.1L924.9,320.1L919.9,330.1L924.9,340.1L934.9,340.1L939.9,330.1L934.9,320.1Z",
        "index": 29
      },
      {
        "id": "Hochelaga",
        "label": "Hochelaga",
        "transform": "matrix(1,0,0,1,-14.8,-30.208)",
        "pathD": "M919.8,349.9L909.8,349.9L904.8,359.9L909.8,369.9L919.8,369.9L924.8,359.9L919.8,349.9Z",
        "index": 28
      },
      {
        "id": "Gatineau",
        "label": "Gatineau",
        "transform": "matrix(1,0,0,1,-29.8,0)",
        "pathD": "M814.8,320.1L804.8,320.1L799.8,330.1L804.8,340.1L814.8,340.1L819.8,330.1L814.8,320.1Z",
        "index": 27
      },
      {
        "id": "Gaspésie---Les-Îles-de-la-Madeleine",
        "label": "Gaspésie — Les Îles-de-la-Madeleine",
        "transform": "matrix(1,0,0,1,-15,9.932)",
        "pathD": "M980,249.8L970,249.8L965,259.8L970,269.8L980,269.8L985,259.8L980,249.8Z",
        "index": 26
      },
      {
        "id": "Drummond",
        "label": "Drummond",
        "transform": "",
        "pathD": "M965,360.2L955,360.2L950,370.2L955,380.2L965,380.2L970,370.2L965,360.2Z",
        "index": 25
      },
      {
        "id": "Dorval---Lachine---Lasalle",
        "label": "Dorval — Lachine — Lasalle",
        "transform": "matrix(1,0,0,1,-14.9,-10.7)",
        "pathD": "M859.9,390.7L849.9,390.7L844.9,400.7L849.9,410.7L859.9,410.7L864.9,400.7L859.9,390.7Z",
        "index": 24
      },
      {
        "id": "Compton---Stanstead",
        "label": "Compton — Stanstead",
        "transform": "matrix(1,0,0,1,0,-0.003)",
        "pathD": "M980,369.9L970,369.9L965,379.9L970,389.9L980,389.9L985,379.9L980,369.9Z",
        "index": 23
      },
      {
        "id": "Chicoutimi---Le-Fjord",
        "label": "Chicoutimi — Le Fjord",
        "transform": "matrix(1,0,0,1,30,20)",
        "pathD": "M875,240L865,240L860,250L865,260L875,260L880,250L875,240Z",
        "index": 22
      },
      {
        "id": "Châteauguay---Lacolle",
        "label": "Châteauguay — Lacolle",
        "transform": "matrix(1,0,0,1,-14.9,-9.9)",
        "pathD": "M844.9,399.9L834.9,399.9L829.9,409.9L834.9,419.9L844.9,419.9L849.9,409.9L844.9,399.9Z",
        "index": 21
      },
      {
        "id": "Beauport---Côte-de-Beaupré---Île-d-Orléans---Charlevoix",
        "label": "Beauport — Côte-de-Beaupré — Île d’Orléans — Charlevoix",
        "transform": "matrix(1,0,0,1,15,-10)",
        "pathD": "M875,260L865,260L860,270L865,280L875,280L880,270L875,260Z",
        "index": 20
      },
      {
        "id": "Charlesbourg---Haute-Saint-Charles",
        "label": "Charlesbourg — Haute-Saint-Charles",
        "transform": "matrix(1,0,0,1,-15,-30)",
        "pathD": "M875,280L865,280L860,290L865,300L875,300L880,290L875,280Z",
        "index": 19
      },
      {
        "id": "Rimouski-Neigette---Témiscouata---Les-Basques",
        "label": "Rimouski-Neigette — Témiscouata — Les Basques",
        "transform": "matrix(1,0,0,1,-15.2,9.9)",
        "pathD": "M965.2,279.9L955.2,279.9L950.2,289.9L955.2,299.9L965.2,299.9L970.2,289.9L965.2,279.9Z",
        "index": 18
      },
      {
        "id": "Brossard---Saint-Lambert",
        "label": "Brossard — Saint-Lambert",
        "transform": "matrix(1,0,0,1,-44.9,-10)",
        "pathD": "M934.9,400L924.9,400L919.9,410L924.9,420L934.9,420L939.9,410L934.9,400Z",
        "index": 17
      },
      {
        "id": "Brome---Missisquoi",
        "label": "Brome — Missisquoi",
        "transform": "matrix(1,0,0,1,-30,-20.2)",
        "pathD": "M965,400.2L955,400.2L950,410.2L955,420.2L965,420.2L970,410.2L965,400.2Z",
        "index": 16
      },
      {
        "id": "Bourassa",
        "label": "Bourassa",
        "transform": "matrix(1,0,0,1,-29.6,-19.9)",
        "pathD": "M904.6,339.9L894.6,339.9L889.6,349.9L894.6,359.9L904.6,359.9L909.6,349.9L904.6,339.9Z",
        "index": 15
      },
      {
        "id": "Pierre-Boucher---Les-Patriotes---Verchères",
        "label": "Pierre-Boucher — Les Patriotes — Verchères",
        "transform": "matrix(1,0,0,1,-29.83,-0.2)",
        "pathD": "M934.9,360.2L924.9,360.2L919.9,370.2L924.9,380.2L934.9,380.2L939.9,370.2L934.9,360.2Z",
        "index": 14
      },
      {
        "id": "Thérèse-De-Blainville",
        "label": "Thérèse-De Blainville",
        "transform": "matrix(1,0,0,1,-29.9185,-40.4)",
        "pathD": "M859.9,330.4L849.9,330.4L844.9,340.4L849.9,350.4L859.9,350.4L864.9,340.4L859.9,330.4Z",
        "index": 13
      },
      {
        "id": "Berthier---Maskinongé",
        "label": "Berthier — Maskinongé",
        "transform": "matrix(1,0,0,1,-60,-20.1)",
        "pathD": "M875,300.1L865,300.1L860,310.1L865,320.1L875,320.1L880,310.1L875,300.1Z",
        "index": 12
      },
      {
        "id": "Beloeil---Chambly",
        "label": "Beloeil — Chambly",
        "transform": "matrix(1,0,0,1,-29.9,0.1)",
        "pathD": "M949.9,369.9L939.9,369.9L934.9,379.9L939.9,389.9L949.9,389.9L954.9,379.9L949.9,369.9Z",
        "index": 11
      },
      {
        "id": "Bellechasse---Les-Etchemins---Lévis",
        "label": "Bellechasse — Les Etchemins — Lévis",
        "transform": "matrix(1,0,0,1,-14.9,9.9)",
        "pathD": "M949.9,310.1L939.9,310.1L934.9,320.1L939.9,330.1L949.9,330.1L954.9,320.1L949.9,310.1Z",
        "index": 10
      },
      {
        "id": "Bécancour---Nicolet---Saurel",
        "label": "Bécancour — Nicolet — Saurel",
        "transform": "matrix(1,0,0,1,-59.93,-0.1)",
        "pathD": "M965,340.1L955,340.1L950,350.1L955,360.1L965,360.1L970,350.1L965,340.1Z",
        "index": 9
      },
      {
        "id": "Beauport---Limoilou",
        "label": "Beauport — Limoilou",
        "transform": "matrix(1,0,0,1,0.1,-0.3)",
        "pathD": "M889.9,270.3L879.9,270.3L874.9,280.3L879.9,290.3L889.9,290.3L894.9,280.3L889.9,270.3Z",
        "index": 8
      },
      {
        "id": "Beauce",
        "label": "Beauce",
        "transform": "matrix(1,0,0,1,-45,30.1)",
        "pathD": "M980,309.9L970,309.9L965,319.9L970,329.9L980,329.9L985,319.9L980,309.9Z",
        "index": 7
      },
      {
        "id": "Avignon---La-Mitis---Matane---Matapédia",
        "label": "Avignon — La Mitis — Matane — Matapédia",
        "transform": "matrix(1,0,0,1,-30,0.2)",
        "pathD": "M980,269.8L970,269.8L965,279.8L970,289.8L980,289.8L985,279.8L980,269.8Z",
        "index": 6
      },
      {
        "id": "Argenteuil---La-Petite-Nation1",
        "label": "Argenteuil — La Petite-Nation",
        "transform": "matrix(1,0,0,1,-29.9,0)",
        "pathD": "M829.9,330.3L819.9,330.3L814.9,340.3L819.9,350.3L829.9,350.3L834.9,340.3L829.9,330.3Z",
        "index": 5
      },
      {
        "id": "Alfred-Pellan",
        "label": "Alfred-Pellan",
        "transform": "matrix(1,0,0,1,-44.6,-10.012)",
        "pathD": "M904.6,319.8L894.6,319.8L889.6,329.8L894.6,339.8L904.6,339.8L909.6,329.8L904.6,319.8Z",
        "index": 4
      },
      {
        "id": "Ahuntsic-Cartierville",
        "label": "Ahuntsic-Cartierville",
        "transform": "matrix(1,0,0,1,-44.817,-30.759)",
        "pathD": "M889.9,350.5L879.9,350.5L874.9,360.5L879.9,370.5L889.9,370.5L894.9,360.5L889.9,350.5Z",
        "index": 3
      },
      {
        "id": "Abitibi---Témiscamingue",
        "label": "Abitibi — Témiscamingue",
        "transform": "matrix(1,0,0,1,-29.8,-19.9)",
        "pathD": "M814.8,299.9L804.8,299.9L799.8,309.9L804.8,319.9L814.8,319.9L819.8,309.9L814.8,299.9Z",
        "index": 2
      },
      {
        "id": "Abitibi---Baie-James---Nunavik---Eeyou",
        "label": "Abitibi — Baie-James — Nunavik — Eeyou",
        "transform": "matrix(1,0,0,1,-59.9,1.42109e-13)",
        "pathD": "M844.9,260L834.9,260L829.9,270L834.9,280L844.9,280L849.9,270L844.9,260Z",
        "index": 1
      }
    ]
  },
  {
    "id": "New-Brunswick",
    "label": "New Brunswick",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 13,
    "ridings": [
      {
        "id": "Tobique---Mactaquac",
        "label": "Tobique — Mactaquac",
        "transform": "matrix(1,0,0,1,-29.7,0.1)",
        "pathD": "M1009.7,289.9L999.7,289.9L994.7,299.9L999.7,309.9L1009.7,309.9L1014.7,299.9L1009.7,289.9Z",
        "index": 10
      },
      {
        "id": "Saint-John---Rothesay",
        "label": "Saint John — Rothesay",
        "transform": "matrix(1,0,0,1,-29.9,20.3)",
        "pathD": "M1039.9,289.7L1029.9,289.7L1024.9,299.7L1029.9,309.7L1039.9,309.7L1044.9,299.7L1039.9,289.7Z",
        "index": 9
      },
      {
        "id": "New-Brunswick-Southwest---Nouveau-Brunswick-Sud-Ouest",
        "label": "New Brunswick Southwest / Nouveau-Brunswick-Sud-Ouest",
        "transform": "matrix(1,0,0,1,-29.8,-19.8)",
        "pathD": "M1024.8,319.8L1014.8,319.8L1009.8,329.8L1014.8,339.8L1024.8,339.8L1029.8,329.8L1024.8,319.8Z",
        "index": 8
      },
      {
        "id": "Moncton---Riverview---Dieppe",
        "label": "Moncton — Riverview — Dieppe",
        "transform": "",
        "pathD": "M1024.8,299.9L1014.8,299.9L1009.8,309.9L1014.8,319.9L1024.8,319.9L1029.8,309.9L1024.8,299.9Z",
        "index": 7
      },
      {
        "id": "Miramichi---Grand-Lake",
        "label": "Miramichi — Grand Lake",
        "transform": "matrix(1,0,0,1,-14.7,9.832)",
        "pathD": "M1009.7,269.9L999.7,269.9L994.7,279.9L999.7,289.9L1009.7,289.9L1014.7,279.9L1009.7,269.9Z",
        "index": 6
      },
      {
        "id": "Madawaska---Restigouche",
        "label": "Madawaska — Restigouche",
        "transform": "matrix(1,0,0,1,-29.6,-0.168)",
        "pathD": "M994.6,279.9L984.6,279.9L979.6,289.9L984.6,299.9L994.6,299.9L999.6,289.9L994.6,279.9Z",
        "index": 5
      },
      {
        "id": "Fundy-Royal",
        "label": "Fundy Royal",
        "transform": "matrix(1,0,0,1,-14.9,50.3)",
        "pathD": "M1039.9,269.7L1029.9,269.7L1024.9,279.7L1029.9,289.7L1039.9,289.7L1044.9,279.7L1039.9,269.7Z",
        "index": 4
      },
      {
        "id": "Fredericton",
        "label": "Fredericton",
        "transform": "matrix(1,0,0,1,-14.8,10.3)",
        "pathD": "M1024.8,279.7L1014.8,279.7L1009.8,289.7L1014.8,299.7L1024.8,299.7L1029.8,289.7L1024.8,279.7Z",
        "index": 3
      },
      {
        "id": "Beauséjour",
        "label": "Beauséjour",
        "transform": "matrix(1,0,0,1,15.2,50.2)",
        "pathD": "M1024.8,259.8L1014.8,259.8L1009.8,269.8L1014.8,279.8L1024.8,279.8L1029.8,269.8L1024.8,259.8Z",
        "index": 2
      },
      {
        "id": "Acadie---Bathurst",
        "label": "Acadie — Bathurst",
        "transform": "matrix(1,0,0,1,-14.6,9.9)",
        "pathD": "M994.6,260.1L984.6,260.1L979.6,270.1L984.6,280.1L994.6,280.1L999.6,270.1L994.6,260.1Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Nova-Scotia",
    "label": "Nova Scotia",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 12,
    "ridings": [
      {
        "id": "West-Nova---Nova-Ouest",
        "label": "West Nova / Nova-Ouest",
        "transform": "matrix(1,0,0,1,-29.8,20.5)",
        "pathD": "M1069.8,329.5L1059.8,329.5L1054.8,339.5L1059.8,349.5L1069.8,349.5L1074.8,339.5L1069.8,329.5Z",
        "index": 11
      },
      {
        "id": "Sydney---Victoria",
        "label": "Sydney — Victoria",
        "transform": "matrix(1,0,0,1,-15,10.5)",
        "pathD": "M1100,269.5L1090,269.5L1085,279.5L1090,289.5L1100,289.5L1105,279.5L1100,269.5Z",
        "index": 10
      },
      {
        "id": "South-Shore---St.-Margarets",
        "label": "South Shore — St. Margarets",
        "transform": "matrix(1,0,0,1,-29.9,20.4)",
        "pathD": "M1084.9,339.6L1074.9,339.6L1069.9,349.6L1074.9,359.6L1084.9,359.6L1089.9,349.6L1084.9,339.6Z",
        "index": 9
      },
      {
        "id": "Sackville---Preston---Chezzetcook",
        "label": "Sackville — Preston — Chezzetcook",
        "transform": "matrix(1,0,0,1,0.1,20.4)",
        "pathD": "M1084.9,299.6L1074.9,299.6L1069.9,309.6L1074.9,319.6L1084.9,319.6L1089.9,309.6L1084.9,299.6Z",
        "index": 8
      },
      {
        "id": "Kings-Hants",
        "label": "Kings-Hants",
        "transform": "matrix(1,0,0,1,-14.8,30.4)",
        "pathD": "M1069.8,309.6L1059.8,309.6L1054.8,319.6L1059.8,329.6L1069.8,329.6L1074.8,319.6L1069.8,309.6Z",
        "index": 7
      },
      {
        "id": "Halifax-West---Halifax-Ouest",
        "label": "Halifax West / Halifax-Ouest",
        "transform": "matrix(1,0,0,1,-14.9,10.5)",
        "pathD": "M1084.9,319.5L1074.9,319.5L1069.9,329.5L1074.9,339.5L1084.9,339.5L1089.9,329.5L1084.9,319.5Z",
        "index": 6
      },
      {
        "id": "Halifax",
        "label": "Halifax",
        "transform": "matrix(1,0,0,1,-30,20.3)",
        "pathD": "M1100,329.7L1090,329.7L1085,339.7L1090,349.7L1100,349.7L1105,339.7L1100,329.7Z",
        "index": 5
      },
      {
        "id": "Dartmouth---Cole-Harbour",
        "label": "Dartmouth — Cole Harbour",
        "transform": "matrix(1,0,0,1,-15,30.3)",
        "pathD": "M1100,309.7L1090,309.7L1085,319.7L1090,329.7L1100,329.7L1105,319.7L1100,309.7Z",
        "index": 4
      },
      {
        "id": "Cumberland---Colchester",
        "label": "Cumberland — Colchester",
        "transform": "matrix(1,0,0,1,0.4,40.2)",
        "pathD": "M1054.6,279.8L1044.6,279.8L1039.6,289.8L1044.6,299.8L1054.6,299.8L1059.6,289.8L1054.6,279.8Z",
        "index": 3
      },
      {
        "id": "Central-Nova---Nova-Centre",
        "label": "Central Nova / Nova-Centre",
        "transform": "matrix(1,0,0,1,0.2,20.3)",
        "pathD": "M1069.8,289.7L1059.8,289.7L1054.8,299.7L1059.8,309.7L1069.8,309.7L1074.8,299.7L1069.8,289.7Z",
        "index": 2
      },
      {
        "id": "Cape-Breton---Canso",
        "label": "Cape Breton — Canso",
        "transform": "matrix(1,0,0,1,0.097,20.4)",
        "pathD": "M1084.9,279.6L1074.9,279.6L1069.9,289.6L1074.9,299.6L1084.9,299.6L1089.9,289.6L1084.9,279.6Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Prince-Edward-Island",
    "label": "Prince Edward Island",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 11,
    "ridings": [
      {
        "id": "Malpeque",
        "label": "Malpeque",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1039.9,230L1029.9,230L1024.9,240L1029.9,250L1039.9,250L1044.9,240L1039.9,230Z",
        "index": 4
      },
      {
        "id": "Egmont",
        "label": "Egmont",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1024.8,219.7L1014.8,219.7L1009.8,229.7L1014.8,239.7L1024.8,239.7L1029.8,229.7L1024.8,219.7Z",
        "index": 3
      },
      {
        "id": "Charlottetown",
        "label": "Charlottetown",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1055.1,240L1045.1,240L1040.1,250L1045.1,260L1055.1,260L1060.1,250L1055.1,240Z",
        "index": 2
      },
      {
        "id": "Cardigan",
        "label": "Cardigan",
        "transform": "matrix(1,0,0,1,-15,30.2)",
        "pathD": "M1070,249.8L1060,249.8L1055,259.8L1060,269.8L1070,269.8L1075,259.8L1070,249.8Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Newfoundland-and-Labrador",
    "label": "Newfoundland and Labrador",
    "transform": "matrix(1,0,0,0.98,-240,-106.8)",
    "index": 10,
    "ridings": [
      {
        "id": "St.-John-s-South---Mount-Pearl---St.-John-s-Sud---Mount-Pearl",
        "label": "St. John’s South — Mount Pearl / St. John’s-Sud — Mount Pearl",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M995,199.9L985,199.9L980,209.9L985,219.9L995,219.9L1000,209.9L995,199.9Z",
        "index": 7
      },
      {
        "id": "St.-John-s-East---St.-John-s-Est",
        "label": "St. John’s East / St. John’s Est",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M979.9,189.9L969.9,189.9L964.9,199.9L969.9,209.9L979.9,209.9L984.9,199.9L979.9,189.9Z",
        "index": 6
      },
      {
        "id": "Long-Range-Mountains",
        "label": "Long Range Mountains",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M935,199.9L925,199.9L920,209.9L925,219.9L935,219.9L940,209.9L935,199.9Z",
        "index": 5
      },
      {
        "id": "Labrador",
        "label": "Labrador",
        "transform": "matrix(1,0,0,1,15.2,10.2)",
        "pathD": "M904.8,219.8L894.8,219.8L889.8,229.8L894.8,239.8L904.8,239.8L909.8,229.8L904.8,219.8Z",
        "index": 4
      },
      {
        "id": "Coast-of-Bays---Central---Notre-Dame",
        "label": "Coast of Bays — Central — Notre Dame",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M950.1,189.9L940.1,189.9L935.1,199.9L940.1,209.9L950.1,209.9L955.1,199.9L950.1,189.9Z",
        "index": 3
      },
      {
        "id": "Bonavista---Burin---Trinity",
        "label": "Bonavista — Burin — Trinity",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M964.9,200.1L954.9,200.1L949.9,210.1L954.9,220.1L964.9,220.1L969.9,210.1L964.9,200.1Z",
        "index": 2
      },
      {
        "id": "Avalon",
        "label": "Avalon",
        "transform": "matrix(1,0,0,1,14.8,10.1)",
        "pathD": "M980,209.9L970,209.9L965,219.9L970,229.9L980,229.9L985,219.9L980,209.9Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Nunavut",
    "label": "Nunavut",
    "transform": "matrix(1,0,0,0.98,-30.2,-204.702)",
    "index": 62,
    "ridings": [
      {
        "id": "Nunavut",
        "label": "Nunavut",
        "pathD": "M575.2,299.9L565.2,299.9L560.2,309.9L565.2,319.9L575.2,319.9L580.2,309.9L575.2,299.9Z",
        "transform": "",
        "index": 1
      }
    ]
  },
  {
    "id": "Yukon",
    "label": "Yukon",
    "transform": "matrix(1,0,0,0.98,-119.9,-165.698)",
    "index": 60,
    "ridings": [
      {
        "id": "Yukon",
        "label": "Yukon",
        "transform": "matrix(1,0,0,1,0,-40)",
        "pathD": "M379.9,270.1L369.9,270.1L364.9,280.1L369.9,290.1L379.9,290.1L384.9,280.1L379.9,270.1Z",
        "index": 1
      }
    ]
  },
  {
    "id": "Northwest-Territories",
    "label": "Northwest Territories",
    "transform": "matrix(1,0,0,0.98,-59.918,-146.098)",
    "index": 61,
    "ridings": [
      {
        "id": "Northwest-Territories",
        "label": "Northwest Territories",
        "transform": "matrix(1,0,0,1,-0.0820313,-20)",
        "pathD": "M395,260.1L385,260.1L380,270.1L385,280.1L395,280.1L400,270.1L395,260.1Z",
        "index": 1
      }
    ]
  }
]

export {data}
