import { PreliminaryResult, prelimResults20211020TSV } from './preliminary_data';
import { Election } from '../pages';
import { RidingData } from './riding_data';
import { Utils } from './utils';

export interface Result {
  "index": number
  "candidate": string
  "party": string
  "currentParty"?: string
  "changedParty"?: Election
  "votes": number
  "votePercentage": number
  "majority": number
  "majorityPercentage": number
}

export interface DateResults {
  "date": string
  "results": Result[]
}

export interface Summary {
  [partyId: string]: number
}

const results20151019: Result[] = [
  {
    "index": 10001,
    "candidate": "Ken McDonald",
    "party": "Liberal/Libéral",
    "votes": 23528,
    "votePercentage": 55.9,
    "majority": 16027,
    "majorityPercentage": 38.1
  },
  {
    "index": 10001,
    "candidate": "Scott Andrews **",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 7501,
    "votePercentage": 17.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10001,
    "candidate": "Jeannie Baldwin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6075,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10001,
    "candidate": "Lorraine E. Barnett",
    "party": "Conservative/Conservateur",
    "votes": 4670,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10001,
    "candidate": "Krista Byrne-Puumala",
    "party": "Green Party/Parti Vert",
    "votes": 228,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10001,
    "candidate": "Jennifer McCreath",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 84,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Judy M. Foote **",
    "party": "Liberal/Libéral",
    "votes": 28704,
    "votePercentage": 81.8,
    "majority": 25170,
    "majorityPercentage": 71.7
  },
  {
    "index": 10002,
    "candidate": "Mike Windsor",
    "party": "Conservative/Conservateur",
    "votes": 3534,
    "votePercentage": 10.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Jenn Brown",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2557,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Tyler John Colbourne",
    "party": "Green Party/Parti Vert",
    "votes": 297,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10003,
    "candidate": "Scott Simms **",
    "party": "Liberal/Libéral",
    "votes": 26523,
    "votePercentage": 74.8,
    "majority": 20044,
    "majorityPercentage": 56.5
  },
  {
    "index": 10003,
    "candidate": "Kevin George O'Brien",
    "party": "Conservative/Conservateur",
    "votes": 6479,
    "votePercentage": 18.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10003,
    "candidate": "Claudette Menchenton",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2175,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10003,
    "candidate": "Elizabeth Perry",
    "party": "Green Party/Parti Vert",
    "votes": 271,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10004,
    "candidate": "Yvonne Jones **",
    "party": "Liberal/Libéral",
    "votes": 8878,
    "votePercentage": 71.8,
    "majority": 7099,
    "majorityPercentage": 57.4
  },
  {
    "index": 10004,
    "candidate": "Edward Rudkowski",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1779,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10004,
    "candidate": "Peter Penashue",
    "party": "Conservative/Conservateur",
    "votes": 1716,
    "votePercentage": 13.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10005,
    "candidate": "Gudie Hutchings",
    "party": "Liberal/Libéral",
    "votes": 30889,
    "votePercentage": 73.9,
    "majority": 25804,
    "majorityPercentage": 61.7
  },
  {
    "index": 10005,
    "candidate": "Wayne Ruth",
    "party": "Conservative/Conservateur",
    "votes": 5085,
    "votePercentage": 12.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10005,
    "candidate": "Devon Babstock",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4739,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10005,
    "candidate": "Terry Cormier",
    "party": "Green Party/Parti Vert",
    "votes": 1111,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10006,
    "candidate": "Nick Whalen",
    "party": "Liberal/Libéral",
    "votes": 20974,
    "votePercentage": 46.7,
    "majority": 646,
    "majorityPercentage": 1.4
  },
  {
    "index": 10006,
    "candidate": "Jack Harris **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20328,
    "votePercentage": 45.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10006,
    "candidate": "Deanne Stapleton",
    "party": "Conservative/Conservateur",
    "votes": 2938,
    "votePercentage": 6.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10006,
    "candidate": "David Anthony Peters",
    "party": "Green Party/Parti Vert",
    "votes": 500,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10006,
    "candidate": "Sean Burton",
    "party": "Communist/Communiste",
    "votes": 140,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10007,
    "candidate": "Seamus O'Regan",
    "party": "Liberal/Libéral",
    "votes": 25922,
    "votePercentage": 57.9,
    "majority": 9455,
    "majorityPercentage": 21.1
  },
  {
    "index": 10007,
    "candidate": "Ryan Cleary **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16467,
    "votePercentage": 36.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10007,
    "candidate": "Marek Krol",
    "party": "Conservative/Conservateur",
    "votes": 2047,
    "votePercentage": 4.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10007,
    "candidate": "Jackson McLean",
    "party": "Green Party/Parti Vert",
    "votes": 365,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11001,
    "candidate": "Lawrence MacAulay **",
    "party": "Liberal/Libéral",
    "votes": 14621,
    "votePercentage": 65,
    "majority": 10989,
    "majorityPercentage": 48.9
  },
  {
    "index": 11001,
    "candidate": "Julius Patkai",
    "party": "Conservative/Conservateur",
    "votes": 3632,
    "votePercentage": 16.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11001,
    "candidate": "Billy Cann",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2503,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11001,
    "candidate": "Teresa Doyle",
    "party": "Green Party/Parti Vert",
    "votes": 1434,
    "votePercentage": 6.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11001,
    "candidate": "Christene Squires",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 295,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11002,
    "candidate": "Sean Casey **",
    "party": "Liberal/Libéral",
    "votes": 11910,
    "votePercentage": 56.3,
    "majority": 7013,
    "majorityPercentage": 33.1
  },
  {
    "index": 11002,
    "candidate": "Joe Byrne",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4897,
    "votePercentage": 23.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11002,
    "candidate": "Ron MacMillan",
    "party": "Conservative/Conservateur",
    "votes": 3136,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11002,
    "candidate": "Becka Viau",
    "party": "Green Party/Parti Vert",
    "votes": 1222,
    "votePercentage": 5.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11003,
    "candidate": "Bobby Morrissey",
    "party": "Liberal/Libéral",
    "votes": 10521,
    "votePercentage": 49.3,
    "majority": 4336,
    "majorityPercentage": 20.3
  },
  {
    "index": 11003,
    "candidate": "Gail Shea **",
    "party": "Conservative/Conservateur",
    "votes": 6185,
    "votePercentage": 29,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11003,
    "candidate": "Herb Dickieson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4097,
    "votePercentage": 19.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11003,
    "candidate": "Nils Ling",
    "party": "Green Party/Parti Vert",
    "votes": 559,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11004,
    "candidate": "Wayne Easter **",
    "party": "Liberal/Libéral",
    "votes": 13950,
    "votePercentage": 62.1,
    "majority": 10003,
    "majorityPercentage": 44.5
  },
  {
    "index": 11004,
    "candidate": "Stephen Stewart",
    "party": "Conservative/Conservateur",
    "votes": 3947,
    "votePercentage": 17.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11004,
    "candidate": "Leah-Jane Hayward",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2509,
    "votePercentage": 11.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 11004,
    "candidate": "Lynne Lund",
    "party": "Green Party/Parti Vert",
    "votes": 2066,
    "votePercentage": 9.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12001,
    "candidate": "Rodger Cuzner **",
    "party": "Liberal/Libéral",
    "votes": 32163,
    "votePercentage": 74.4,
    "majority": 25917,
    "majorityPercentage": 59.9
  },
  {
    "index": 12001,
    "candidate": "Adam Daniel Rodgers",
    "party": "Conservative/Conservateur",
    "votes": 6246,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12001,
    "candidate": "Michelle Smith",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3547,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12001,
    "candidate": "Maria Goretti Coady",
    "party": "Green Party/Parti Vert",
    "votes": 1281,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12002,
    "candidate": "Sean Fraser",
    "party": "Liberal/Libéral",
    "votes": 25909,
    "votePercentage": 58.5,
    "majority": 14491,
    "majorityPercentage": 32.7
  },
  {
    "index": 12002,
    "candidate": "Fred DeLorey",
    "party": "Conservative/Conservateur",
    "votes": 11418,
    "votePercentage": 25.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12002,
    "candidate": "Ross Landry",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4532,
    "votePercentage": 10.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12002,
    "candidate": "David Hachey",
    "party": "Green Party/Parti Vert",
    "votes": 1834,
    "votePercentage": 4.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12002,
    "candidate": "Alexander J. MacKenzie",
    "party": "Independent/Indépendant(e)",
    "votes": 570,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12003,
    "candidate": "Bill Casey",
    "party": "Liberal/Libéral",
    "votes": 29527,
    "votePercentage": 63.7,
    "majority": 17270,
    "majorityPercentage": 37.3
  },
  {
    "index": 12003,
    "candidate": "Scott Armstrong **",
    "party": "Conservative/Conservateur",
    "votes": 12257,
    "votePercentage": 26.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12003,
    "candidate": "Wendy Robinson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2647,
    "votePercentage": 5.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12003,
    "candidate": "Jason Matthew Blanch",
    "party": "Green Party/Parti Vert",
    "votes": 1650,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12003,
    "candidate": "Kenneth Jackson",
    "party": "Independent/Indépendant(e)",
    "votes": 181,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12003,
    "candidate": "Richard Trueman Plett",
    "party": "Independent/Indépendant(e)",
    "votes": 70,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12004,
    "candidate": "Darren Fisher",
    "party": "Liberal/Libéral",
    "votes": 30407,
    "votePercentage": 58.2,
    "majority": 17650,
    "majorityPercentage": 33.8
  },
  {
    "index": 12004,
    "candidate": "Robert Chisholm **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12757,
    "votePercentage": 24.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12004,
    "candidate": "Jason Cole",
    "party": "Conservative/Conservateur",
    "votes": 7331,
    "votePercentage": 14,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12004,
    "candidate": "Brynn Nheiley",
    "party": "Green Party/Parti Vert",
    "votes": 1775,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12005,
    "candidate": "Andy Fillmore",
    "party": "Liberal/Libéral",
    "votes": 27431,
    "votePercentage": 51.7,
    "majority": 8269,
    "majorityPercentage": 15.6
  },
  {
    "index": 12005,
    "candidate": "Megan Leslie **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19162,
    "votePercentage": 36.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12005,
    "candidate": "Irvine Carvery",
    "party": "Conservative/Conservateur",
    "votes": 4564,
    "votePercentage": 8.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12005,
    "candidate": "Thomas Trappenberg",
    "party": "Green Party/Parti Vert",
    "votes": 1745,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12005,
    "candidate": "Allan Bezanson",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 130,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12006,
    "candidate": "Geoff Regan **",
    "party": "Liberal/Libéral",
    "votes": 34377,
    "votePercentage": 68.6,
    "majority": 26540,
    "majorityPercentage": 53
  },
  {
    "index": 12006,
    "candidate": "Michael McGinnis",
    "party": "Conservative/Conservateur",
    "votes": 7837,
    "votePercentage": 15.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12006,
    "candidate": "Joanne Hussey",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5894,
    "votePercentage": 11.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12006,
    "candidate": "Richard Henryk Zurawski",
    "party": "Green Party/Parti Vert",
    "votes": 1971,
    "votePercentage": 3.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Scott Brison **",
    "party": "Liberal/Libéral",
    "votes": 33026,
    "votePercentage": 70.7,
    "majority": 24349,
    "majorityPercentage": 52.2
  },
  {
    "index": 12007,
    "candidate": "David Morse",
    "party": "Conservative/Conservateur",
    "votes": 8677,
    "votePercentage": 18.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Hugh Curry",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2998,
    "votePercentage": 6.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Will Cooper",
    "party": "Green Party/Parti Vert",
    "votes": 1569,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Megan Brown-Hodges",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 184,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Edd Twohig",
    "party": "Independent/Indépendant(e)",
    "votes": 132,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12007,
    "candidate": "Clifford James Williams",
    "party": "Independent/Indépendant(e)",
    "votes": 100,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12008,
    "candidate": "Darrell Samson",
    "party": "Liberal/Libéral",
    "votes": 23161,
    "votePercentage": 48,
    "majority": 6548,
    "majorityPercentage": 13.6
  },
  {
    "index": 12008,
    "candidate": "Peter Stoffer **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16613,
    "votePercentage": 34.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12008,
    "candidate": "Robert Thomas Strickland",
    "party": "Conservative/Conservateur",
    "votes": 7186,
    "votePercentage": 14.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12008,
    "candidate": "Mike Montgomery",
    "party": "Green Party/Parti Vert",
    "votes": 1341,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12009,
    "candidate": "Bernadette Jordan",
    "party": "Liberal/Libéral",
    "votes": 30045,
    "votePercentage": 56.9,
    "majority": 18140,
    "majorityPercentage": 34.4
  },
  {
    "index": 12009,
    "candidate": "Richard Clark",
    "party": "Conservative/Conservateur",
    "votes": 11905,
    "votePercentage": 22.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12009,
    "candidate": "Alex Godbold",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8883,
    "votePercentage": 16.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12009,
    "candidate": "Richard Biggar",
    "party": "Green Party/Parti Vert",
    "votes": 1534,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12009,
    "candidate": "Trevor Bruhm",
    "party": "Independent/Indépendant(e)",
    "votes": 257,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12009,
    "candidate": "Ryan Barry",
    "party": "Communist/Communiste",
    "votes": 151,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12010,
    "candidate": "Mark Eyking **",
    "party": "Liberal/Libéral",
    "votes": 29995,
    "votePercentage": 73.2,
    "majority": 24644,
    "majorityPercentage": 60.1
  },
  {
    "index": 12010,
    "candidate": "Monika Dutt",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5351,
    "votePercentage": 13.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12010,
    "candidate": "John Douglas Chiasson",
    "party": "Conservative/Conservateur",
    "votes": 4360,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12010,
    "candidate": "Adrianna MacKinnon",
    "party": "Green Party/Parti Vert",
    "votes": 1026,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12010,
    "candidate": "Wayne James Hiscock",
    "party": "Libertarian/Libertarien",
    "votes": 242,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12011,
    "candidate": "Colin Fraser",
    "party": "Liberal/Libéral",
    "votes": 28775,
    "votePercentage": 63,
    "majority": 16859,
    "majorityPercentage": 36.9
  },
  {
    "index": 12011,
    "candidate": "Arnold LeBlanc",
    "party": "Conservative/Conservateur",
    "votes": 11916,
    "votePercentage": 26.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12011,
    "candidate": "Greg Foster",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3084,
    "votePercentage": 6.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 12011,
    "candidate": "Clark Walton",
    "party": "Green Party/Parti Vert",
    "votes": 1904,
    "votePercentage": 4.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13001,
    "candidate": "Serge Cormier",
    "party": "Liberal/Libéral",
    "votes": 25845,
    "votePercentage": 50.7,
    "majority": 5766,
    "majorityPercentage": 11.3
  },
  {
    "index": 13001,
    "candidate": "Jason Godin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20079,
    "votePercentage": 39.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13001,
    "candidate": "Riba Girouard-Riordon",
    "party": "Conservative/Conservateur",
    "votes": 3852,
    "votePercentage": 7.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13001,
    "candidate": "Dominique Breau",
    "party": "Green Party/Parti Vert",
    "votes": 1187,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13002,
    "candidate": "Dominic LeBlanc **",
    "party": "Liberal/Libéral",
    "votes": 36534,
    "votePercentage": 69,
    "majority": 28525,
    "majorityPercentage": 53.9
  },
  {
    "index": 13002,
    "candidate": "Hélène Boudreau",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8009,
    "votePercentage": 15.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13002,
    "candidate": "Ann Bastarache",
    "party": "Conservative/Conservateur",
    "votes": 6017,
    "votePercentage": 11.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13002,
    "candidate": "Kevin King",
    "party": "Green Party/Parti Vert",
    "votes": 2376,
    "votePercentage": 4.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13003,
    "candidate": "Matt DeCourcey",
    "party": "Liberal/Libéral",
    "votes": 23016,
    "votePercentage": 49.3,
    "majority": 9736,
    "majorityPercentage": 20.8
  },
  {
    "index": 13003,
    "candidate": "Keith Ashfield **",
    "party": "Conservative/Conservateur",
    "votes": 13280,
    "votePercentage": 28.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13003,
    "candidate": "Mary Lou Babineau",
    "party": "Green Party/Parti Vert",
    "votes": 5804,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13003,
    "candidate": "Sharon Scott-Levesque",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4622,
    "votePercentage": 9.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13004,
    "candidate": "Alaina Lockhart",
    "party": "Liberal/Libéral",
    "votes": 19136,
    "votePercentage": 40.9,
    "majority": 1775,
    "majorityPercentage": 3.8
  },
  {
    "index": 13004,
    "candidate": "Rob Moore **",
    "party": "Conservative/Conservateur",
    "votes": 17361,
    "votePercentage": 37.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13004,
    "candidate": "Jennifer McKenzie",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8204,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13004,
    "candidate": "Stephanie Coburn",
    "party": "Green Party/Parti Vert",
    "votes": 1823,
    "votePercentage": 3.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13004,
    "candidate": "David Raymond Amos",
    "party": "Independent/Indépendant(e)",
    "votes": 296,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13005,
    "candidate": "René Arseneault",
    "party": "Liberal/Libéral",
    "votes": 20778,
    "votePercentage": 55.7,
    "majority": 11108,
    "majorityPercentage": 29.8
  },
  {
    "index": 13005,
    "candidate": "Rosaire L'Italien",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9670,
    "votePercentage": 25.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13005,
    "candidate": "Bernard Valcourt **",
    "party": "Conservative/Conservateur",
    "votes": 6151,
    "votePercentage": 16.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13005,
    "candidate": "Françoise Aubin",
    "party": "Green Party/Parti Vert",
    "votes": 707,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13006,
    "candidate": "Pat Finnigan",
    "party": "Liberal/Libéral",
    "votes": 17202,
    "votePercentage": 47.3,
    "majority": 4726,
    "majorityPercentage": 13
  },
  {
    "index": 13006,
    "candidate": "Tilly O'Neill-Gordon **",
    "party": "Conservative/Conservateur",
    "votes": 12476,
    "votePercentage": 34.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13006,
    "candidate": "Patrick Colford",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5588,
    "votePercentage": 15.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13006,
    "candidate": "Matthew Ian Clark",
    "party": "Green Party/Parti Vert",
    "votes": 1098,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13007,
    "candidate": "Ginette Petitpas Taylor",
    "party": "Liberal/Libéral",
    "votes": 30054,
    "votePercentage": 57.8,
    "majority": 18886,
    "majorityPercentage": 36.3
  },
  {
    "index": 13007,
    "candidate": "Robert Goguen **",
    "party": "Conservative/Conservateur",
    "votes": 11168,
    "votePercentage": 21.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13007,
    "candidate": "Luc LeBlanc",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8420,
    "votePercentage": 16.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13007,
    "candidate": "Luc Melanson",
    "party": "Green Party/Parti Vert",
    "votes": 2399,
    "votePercentage": 4.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13008,
    "candidate": "Karen Ludwig",
    "party": "Liberal/Libéral",
    "votes": 16656,
    "votePercentage": 43.9,
    "majority": 2031,
    "majorityPercentage": 5.4
  },
  {
    "index": 13008,
    "candidate": "John Williamson **",
    "party": "Conservative/Conservateur",
    "votes": 14625,
    "votePercentage": 38.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13008,
    "candidate": "Andrew Graham",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4768,
    "votePercentage": 12.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13008,
    "candidate": "Gayla MacIntosh",
    "party": "Green Party/Parti Vert",
    "votes": 1877,
    "votePercentage": 4.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13009,
    "candidate": "Wayne Long",
    "party": "Liberal/Libéral",
    "votes": 20634,
    "votePercentage": 48.8,
    "majority": 7719,
    "majorityPercentage": 18.3
  },
  {
    "index": 13009,
    "candidate": "Rodney Weston **",
    "party": "Conservative/Conservateur",
    "votes": 12915,
    "votePercentage": 30.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13009,
    "candidate": "AJ Griffin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7411,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13009,
    "candidate": "Sharon Murphy",
    "party": "Green Party/Parti Vert",
    "votes": 1321,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13010,
    "candidate": "TJ Harvey",
    "party": "Liberal/Libéral",
    "votes": 17909,
    "votePercentage": 46.6,
    "majority": 3684,
    "majorityPercentage": 9.6
  },
  {
    "index": 13010,
    "candidate": "Richard Bragdon",
    "party": "Conservative/Conservateur",
    "votes": 14225,
    "votePercentage": 37,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13010,
    "candidate": "Robert Kitchen",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4334,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 13010,
    "candidate": "Terry Wishart",
    "party": "Green Party/Parti Vert",
    "votes": 1959,
    "votePercentage": 5.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24001,
    "candidate": "Romeo Saganash **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12778,
    "votePercentage": 37,
    "majority": 1684,
    "majorityPercentage": 4.9
  },
  {
    "index": 24001,
    "candidate": "Pierre Dufour",
    "party": "Liberal/Libéral",
    "votes": 11094,
    "votePercentage": 32.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24001,
    "candidate": "Luc Ferland",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6398,
    "votePercentage": 18.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24001,
    "candidate": "Steven Hébert",
    "party": "Conservative/Conservateur",
    "votes": 3211,
    "votePercentage": 9.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24001,
    "candidate": "Patrick Benoît",
    "party": "Green Party/Parti Vert",
    "votes": 779,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24001,
    "candidate": "Mario Gagnon",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 258,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24002,
    "candidate": "Christine Moore **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20636,
    "votePercentage": 41.5,
    "majority": 5903,
    "majorityPercentage": 11.9
  },
  {
    "index": 24002,
    "candidate": "Claude Thibault",
    "party": "Liberal/Libéral",
    "votes": 14733,
    "votePercentage": 29.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24002,
    "candidate": "Yvon Moreau",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9651,
    "votePercentage": 19.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24002,
    "candidate": "Benoit Fortin",
    "party": "Conservative/Conservateur",
    "votes": 3425,
    "votePercentage": 6.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24002,
    "candidate": "Aline Bégin",
    "party": "Green Party/Parti Vert",
    "votes": 859,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24002,
    "candidate": "Pascal Le Fou Gélinas",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 425,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24003,
    "candidate": "Mélanie Joly",
    "party": "Liberal/Libéral",
    "votes": 26026,
    "votePercentage": 46.8,
    "majority": 9342,
    "majorityPercentage": 16.8
  },
  {
    "index": 24003,
    "candidate": "Maria Mourani **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16684,
    "votePercentage": 30,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24003,
    "candidate": "Nicolas Bourdon",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7346,
    "votePercentage": 13.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24003,
    "candidate": "Wiliam Moughrabi",
    "party": "Conservative/Conservateur",
    "votes": 4051,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24003,
    "candidate": "Gilles Mercier",
    "party": "Green Party/Parti Vert",
    "votes": 1175,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24003,
    "candidate": "Catherine Gascon-David",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 285,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24004,
    "candidate": "Angelo Iacono",
    "party": "Liberal/Libéral",
    "votes": 24557,
    "votePercentage": 44.5,
    "majority": 11332,
    "majorityPercentage": 20.5
  },
  {
    "index": 24004,
    "candidate": "Rosane Doré Lefebvre **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13225,
    "votePercentage": 24,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24004,
    "candidate": "Daniel St-Hilaire",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9836,
    "votePercentage": 17.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24004,
    "candidate": "Gabriel Purcarus",
    "party": "Conservative/Conservateur",
    "votes": 6259,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24004,
    "candidate": "Lynda Briguene",
    "party": "Green Party/Parti Vert",
    "votes": 1089,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24004,
    "candidate": "Renata Isopo",
    "party": "Independent/Indépendant(e)",
    "votes": 203,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24005,
    "candidate": "Stéphane Lauzon",
    "party": "Liberal/Libéral",
    "votes": 22093,
    "votePercentage": 43.3,
    "majority": 9443,
    "majorityPercentage": 18.5
  },
  {
    "index": 24005,
    "candidate": "Chantal Crête",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12650,
    "votePercentage": 24.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24005,
    "candidate": "Jonathan Beauchamp",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9525,
    "votePercentage": 18.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24005,
    "candidate": "Maxime Hupé-Labelle",
    "party": "Conservative/Conservateur",
    "votes": 5680,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24005,
    "candidate": "Audrey Lamarche",
    "party": "Green Party/Parti Vert",
    "votes": 1118,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "Rémi Massé",
    "party": "Liberal/Libéral",
    "votes": 14378,
    "votePercentage": 39.5,
    "majority": 6737,
    "majorityPercentage": 18.5
  },
  {
    "index": 24006,
    "candidate": "Kédina Fleury-Samson",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7641,
    "votePercentage": 21,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "Joël Charest",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7340,
    "votePercentage": 20.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "Jean-François Fortin **",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 4229,
    "votePercentage": 11.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "André Savoie",
    "party": "Conservative/Conservateur",
    "votes": 2228,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "Sherri Springle",
    "party": "Green Party/Parti Vert",
    "votes": 365,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24006,
    "candidate": "Éric Normand",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 175,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24007,
    "candidate": "Maxime Bernier **",
    "party": "Conservative/Conservateur",
    "currentParty": "People's Party/Parti populaire",
    "changedParty": "2018-09-14",
    "votes": 32910,
    "votePercentage": 58.9,
    "majority": 20468,
    "majorityPercentage": 36.6
  },
  {
    "index": 24007,
    "candidate": "Adam Veilleux",
    "party": "Liberal/Libéral",
    "votes": 12442,
    "votePercentage": 22.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24007,
    "candidate": "Daniel Royer",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5443,
    "votePercentage": 9.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24007,
    "candidate": "Stéphane Trudel",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 4144,
    "votePercentage": 7.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24007,
    "candidate": "Céline Brown MacDonald",
    "party": "Green Party/Parti Vert",
    "votes": 943,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24020,
    "candidate": "Sylvie Boucher",
    "party": "Conservative/Conservateur",
    "votes": 16903,
    "votePercentage": 33.5,
    "majority": 3347,
    "majorityPercentage": 6.6
  },
  {
    "index": 24020,
    "candidate": "Jean-Roger Vigneau",
    "party": "Liberal/Libéral",
    "votes": 13556,
    "votePercentage": 26.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24020,
    "candidate": "Sébastien Dufour",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9650,
    "votePercentage": 19.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24020,
    "candidate": "Jonathan Tremblay **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9306,
    "votePercentage": 18.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24020,
    "candidate": "Patrick Kerr",
    "party": "Green Party/Parti Vert",
    "votes": 859,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24020,
    "candidate": "Mario Desjardins Pelchat",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 182,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Alupa Clarke",
    "party": "Conservative/Conservateur",
    "votes": 15461,
    "votePercentage": 30.6,
    "majority": 2580,
    "majorityPercentage": 5.1
  },
  {
    "index": 24008,
    "candidate": "Raymond Côté **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12881,
    "votePercentage": 25.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Antoine Bujold",
    "party": "Liberal/Libéral",
    "votes": 12854,
    "votePercentage": 25.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Doni Berberi",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7467,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Dalila Elhak",
    "party": "Green Party/Parti Vert",
    "votes": 1220,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Francis Bedard",
    "party": "Libertarian/Libertarien",
    "votes": 423,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Claude Moreau",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 128,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24008,
    "candidate": "Bladimir Laborit",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 124,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24009,
    "candidate": "Louis Plamondon **",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 20871,
    "votePercentage": 40,
    "majority": 8205,
    "majorityPercentage": 15.7
  },
  {
    "index": 24009,
    "candidate": "Claude Carpentier",
    "party": "Liberal/Libéral",
    "votes": 12666,
    "votePercentage": 24.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24009,
    "candidate": "Nicolas Tabah",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11531,
    "votePercentage": 22.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24009,
    "candidate": "Yves Laberge",
    "party": "Conservative/Conservateur",
    "votes": 5955,
    "votePercentage": 11.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24009,
    "candidate": "Corina Bastiani",
    "party": "Green Party/Parti Vert",
    "votes": 1182,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24010,
    "candidate": "Steven Blaney **",
    "party": "Conservative/Conservateur",
    "votes": 31872,
    "votePercentage": 50.9,
    "majority": 18911,
    "majorityPercentage": 30.2
  },
  {
    "index": 24010,
    "candidate": "Jacques Turgeon",
    "party": "Liberal/Libéral",
    "votes": 12961,
    "votePercentage": 20.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24010,
    "candidate": "Jean-Luc Daigle",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8516,
    "votePercentage": 13.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24010,
    "candidate": "Antoine Dubé",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7217,
    "votePercentage": 11.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24010,
    "candidate": "André Bélisle",
    "party": "Green Party/Parti Vert",
    "votes": 2032,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24011,
    "candidate": "Matthew Dubé **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20641,
    "votePercentage": 31.1,
    "majority": 1147,
    "majorityPercentage": 1.7
  },
  {
    "index": 24011,
    "candidate": "Karine Desjardins",
    "party": "Liberal/Libéral",
    "votes": 19494,
    "votePercentage": 29.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24011,
    "candidate": "Yves Lessard",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18387,
    "votePercentage": 27.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24011,
    "candidate": "Claude Chalhoub",
    "party": "Conservative/Conservateur",
    "votes": 6173,
    "votePercentage": 9.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24011,
    "candidate": "Fodé Kerfalla Yansané",
    "party": "Green Party/Parti Vert",
    "votes": 1498,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24011,
    "candidate": "Michael Maher",
    "party": "Libertarian/Libertarien",
    "votes": 245,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24012,
    "candidate": "Ruth Ellen Brosseau **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 22942,
    "votePercentage": 42.2,
    "majority": 8905,
    "majorityPercentage": 16.4
  },
  {
    "index": 24012,
    "candidate": "Yves Perron",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 14037,
    "votePercentage": 25.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24012,
    "candidate": "Pierre Destrempes",
    "party": "Liberal/Libéral",
    "votes": 11032,
    "votePercentage": 20.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24012,
    "candidate": "Marianne Foucrault",
    "party": "Conservative/Conservateur",
    "votes": 5548,
    "votePercentage": 10.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24012,
    "candidate": "Cate Burton",
    "party": "Green Party/Parti Vert",
    "votes": 847,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Emmanuel Dubourg **",
    "party": "Liberal/Libéral",
    "votes": 22234,
    "votePercentage": 54.1,
    "majority": 15185,
    "majorityPercentage": 36.9
  },
  {
    "index": 24015,
    "candidate": "Gilles Léveillé",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7049,
    "votePercentage": 17.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Dolmine Laguerre",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6144,
    "votePercentage": 14.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Jason Potasso-Justino",
    "party": "Conservative/Conservateur",
    "votes": 3819,
    "votePercentage": 9.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Maxime Charron",
    "party": "Green Party/Parti Vert",
    "votes": 886,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Julie Demers",
    "party": "Independent/Indépendant(e)",
    "votes": 669,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Claude Brunelle",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 229,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24015,
    "candidate": "Jean-Marie Floriant Ndzana",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 99,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24016,
    "candidate": "Denis Paradis",
    "party": "Liberal/Libéral",
    "votes": 25744,
    "votePercentage": 43.9,
    "majority": 11361,
    "majorityPercentage": 19.4
  },
  {
    "index": 24016,
    "candidate": "Catherine Lusson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14383,
    "votePercentage": 24.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24016,
    "candidate": "Patrick Melchior",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 10252,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24016,
    "candidate": "Charles Poulin",
    "party": "Conservative/Conservateur",
    "votes": 6724,
    "votePercentage": 11.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24016,
    "candidate": "Cindy Moynan",
    "party": "Green Party/Parti Vert",
    "votes": 1377,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24016,
    "candidate": "Patrick Paine",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 195,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24017,
    "candidate": "Alexandra Mendès",
    "party": "Liberal/Libéral",
    "votes": 28818,
    "votePercentage": 50.3,
    "majority": 14743,
    "majorityPercentage": 25.7
  },
  {
    "index": 24017,
    "candidate": "Hoang Mai **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14075,
    "votePercentage": 24.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24017,
    "candidate": "Qais Hamidi",
    "party": "Conservative/Conservateur",
    "votes": 7215,
    "votePercentage": 12.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24017,
    "candidate": "Suzanne Lachance",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6071,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24017,
    "candidate": "Fang Hu",
    "party": "Green Party/Parti Vert",
    "votes": 1081,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24019,
    "candidate": "Pierre Paul-Hus",
    "party": "Conservative/Conservateur",
    "votes": 24608,
    "votePercentage": 42.2,
    "majority": 11083,
    "majorityPercentage": 19
  },
  {
    "index": 24019,
    "candidate": "Jean Côté",
    "party": "Liberal/Libéral",
    "votes": 13525,
    "votePercentage": 23.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24019,
    "candidate": "Anne-Marie Day **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11690,
    "votePercentage": 20.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24019,
    "candidate": "Marc Antoine Turmel",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7177,
    "votePercentage": 12.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24019,
    "candidate": "Nathalie Baudet",
    "party": "Green Party/Parti Vert",
    "votes": 1256,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24021,
    "candidate": "Brenda Shanahan",
    "party": "Liberal/Libéral",
    "votes": 20245,
    "votePercentage": 39.1,
    "majority": 7630,
    "majorityPercentage": 14.7
  },
  {
    "index": 24021,
    "candidate": "Sophie Stanké",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 12615,
    "votePercentage": 24.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24021,
    "candidate": "Sylvain Chicoine **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11986,
    "votePercentage": 23.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24021,
    "candidate": "Philippe St-Pierre",
    "party": "Conservative/Conservateur",
    "votes": 5805,
    "votePercentage": 11.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24021,
    "candidate": "Jency Mercier",
    "party": "Green Party/Parti Vert",
    "votes": 982,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24021,
    "candidate": "Linda Sullivan",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 149,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Denis Lemieux",
    "party": "Liberal/Libéral",
    "votes": 13619,
    "votePercentage": 31.1,
    "majority": 600,
    "majorityPercentage": 1.4
  },
  {
    "index": 24022,
    "candidate": "Dany Morin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13019,
    "votePercentage": 29.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Élise Gauthier",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 8990,
    "votePercentage": 20.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Caroline Ste-Marie",
    "party": "Conservative/Conservateur",
    "votes": 7270,
    "votePercentage": 16.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Dany St-Gelais",
    "party": "Green Party/Parti Vert",
    "votes": 907,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24023,
    "candidate": "Marie-Claude Bibeau",
    "party": "Liberal/Libéral",
    "votes": 20582,
    "votePercentage": 36.9,
    "majority": 5282,
    "majorityPercentage": 9.5
  },
  {
    "index": 24023,
    "candidate": "Jean Rousseau **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15300,
    "votePercentage": 27.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24023,
    "candidate": "France Bonsant",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11551,
    "votePercentage": 20.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24023,
    "candidate": "Gustavo Labrador",
    "party": "Conservative/Conservateur",
    "votes": 6978,
    "votePercentage": 12.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24023,
    "candidate": "Korie Marshall",
    "party": "Green Party/Parti Vert",
    "votes": 1085,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24023,
    "candidate": "Kévin Côté",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 315,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24024,
    "candidate": "Anju Dhillon",
    "party": "Liberal/Libéral",
    "votes": 29974,
    "votePercentage": 54.9,
    "majority": 18205,
    "majorityPercentage": 33.3
  },
  {
    "index": 24024,
    "candidate": "Isabelle Morin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11769,
    "votePercentage": 21.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24024,
    "candidate": "Daniela Chivu",
    "party": "Conservative/Conservateur",
    "votes": 6049,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24024,
    "candidate": "Jean-Frédéric Vaudry",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 5338,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24024,
    "candidate": "Vincent J. Carbonneau",
    "party": "Green Party/Parti Vert",
    "votes": 1245,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24024,
    "candidate": "Soulèye Ndiaye",
    "party": "Independent/Indépendant(e)",
    "votes": 230,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24025,
    "candidate": "François Choquette **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15833,
    "votePercentage": 30.5,
    "majority": 2040,
    "majorityPercentage": 3.9
  },
  {
    "index": 24025,
    "candidate": "Pierre Côté",
    "party": "Liberal/Libéral",
    "votes": 13793,
    "votePercentage": 26.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24025,
    "candidate": "Diane Bourgeois",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11862,
    "votePercentage": 22.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24025,
    "candidate": "Pascale Déry",
    "party": "Conservative/Conservateur",
    "votes": 9221,
    "votePercentage": 17.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24025,
    "candidate": "Émile Coderre",
    "party": "Green Party/Parti Vert",
    "votes": 1270,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24026,
    "candidate": "Diane Lebouthillier",
    "party": "Liberal/Libéral",
    "votes": 15345,
    "votePercentage": 38.7,
    "majority": 2460,
    "majorityPercentage": 6.2
  },
  {
    "index": 24026,
    "candidate": "Philip Toone **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12885,
    "votePercentage": 32.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24026,
    "candidate": "Nicolas Roussy",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 8289,
    "votePercentage": 20.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24026,
    "candidate": "Jean-Pierre Pigeon",
    "party": "Conservative/Conservateur",
    "votes": 2398,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24026,
    "candidate": "Jim Morrison",
    "party": "Green Party/Parti Vert",
    "votes": 400,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24026,
    "candidate": "Max Boudreau",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 300,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Steven MacKinnon",
    "party": "Liberal/Libéral",
    "votes": 31076,
    "votePercentage": 53.8,
    "majority": 15724,
    "majorityPercentage": 27.2
  },
  {
    "index": 24027,
    "candidate": "Françoise Boivin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15352,
    "votePercentage": 26.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Philippe Boily",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 5455,
    "votePercentage": 9.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Luc Angers",
    "party": "Conservative/Conservateur",
    "votes": 4733,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Guy Dostaler",
    "party": "Green Party/Parti Vert",
    "votes": 942,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Guy J. Bellavance",
    "party": "Independent/Indépendant(e)",
    "votes": 148,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24027,
    "candidate": "Pierre Soublière",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 94,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Marjolaine Boutin-Sweet **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16034,
    "votePercentage": 30.9,
    "majority": 500,
    "majorityPercentage": 1
  },
  {
    "index": 24028,
    "candidate": "Marwah Rizqy",
    "party": "Liberal/Libéral",
    "votes": 15534,
    "votePercentage": 29.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Simon Marchand",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 14389,
    "votePercentage": 27.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Alexandre Dang",
    "party": "Conservative/Conservateur",
    "votes": 3555,
    "votePercentage": 6.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Anne-Marie Saint-Cerny",
    "party": "Green Party/Parti Vert",
    "votes": 1654,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Nicolas Lemay",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 411,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Marianne Breton Fontaine",
    "party": "Communist/Communiste",
    "votes": 179,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24028,
    "candidate": "Christine Dandenault",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 148,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Pablo Rodriguez",
    "party": "Liberal/Libéral",
    "votes": 29211,
    "votePercentage": 56.5,
    "majority": 20733,
    "majorityPercentage": 40.1
  },
  {
    "index": 24029,
    "candidate": "Paulina Ayala **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8478,
    "votePercentage": 16.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Audrey Beauséjour",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6680,
    "votePercentage": 12.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Guy Croteau",
    "party": "Conservative/Conservateur",
    "votes": 6226,
    "votePercentage": 12.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Angela Budilean",
    "party": "Green Party/Parti Vert",
    "votes": 814,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Dayana Dejean",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 168,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24029,
    "candidate": "Yves Le Seigle",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 81,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Greg Fergus",
    "party": "Liberal/Libéral",
    "votes": 28478,
    "votePercentage": 51.4,
    "majority": 11006,
    "majorityPercentage": 19.9
  },
  {
    "index": 24030,
    "candidate": "Nycole Turmel **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17472,
    "votePercentage": 31.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Étienne Boulrice",
    "party": "Conservative/Conservateur",
    "votes": 4278,
    "votePercentage": 7.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Maude Chouinard-Boucher",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 3625,
    "votePercentage": 6.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Roger Fleury",
    "party": "Green Party/Parti Vert",
    "votes": 1035,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Sean J. Mulligan",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 291,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Luc Desjardins",
    "party": "Independent/Indépendant(e)",
    "votes": 160,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24030,
    "candidate": "Gabriel Girard-Bernier",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 101,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24031,
    "candidate": "Gabriel Ste-Marie",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18875,
    "votePercentage": 33.3,
    "majority": 2880,
    "majorityPercentage": 5.1
  },
  {
    "index": 24031,
    "candidate": "Michel Bourgeois",
    "party": "Liberal/Libéral",
    "votes": 15995,
    "votePercentage": 28.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24031,
    "candidate": "Danielle Landreville",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14566,
    "votePercentage": 25.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24031,
    "candidate": "Soheil Eid",
    "party": "Conservative/Conservateur",
    "votes": 5705,
    "votePercentage": 10.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24031,
    "candidate": "Mathieu Morin",
    "party": "Green Party/Parti Vert",
    "votes": 1335,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24031,
    "candidate": "Robert D. Morais",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 213,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24032,
    "candidate": "Karine Trudel",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14039,
    "votePercentage": 29.2,
    "majority": 339,
    "majorityPercentage": 0.7
  },
  {
    "index": 24032,
    "candidate": "Marc Pettersen",
    "party": "Liberal/Libéral",
    "votes": 13700,
    "votePercentage": 28.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24032,
    "candidate": "Jean-François Caron",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11202,
    "votePercentage": 23.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24032,
    "candidate": "Ursula Larouche",
    "party": "Conservative/Conservateur",
    "votes": 8124,
    "votePercentage": 16.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24032,
    "candidate": "Carmen Budilean",
    "party": "Green Party/Parti Vert",
    "votes": 656,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24032,
    "candidate": "Marielle Couture",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 382,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Mario Beaulieu",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18545,
    "votePercentage": 33.6,
    "majority": 2768,
    "majorityPercentage": 5
  },
  {
    "index": 24033,
    "candidate": "Marie-Chantale Simard",
    "party": "Liberal/Libéral",
    "votes": 15777,
    "votePercentage": 28.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Ève Péclet **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14777,
    "votePercentage": 26.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Guy Morissette",
    "party": "Conservative/Conservateur",
    "votes": 4408,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "David J. Cox",
    "party": "Green Party/Parti Vert",
    "votes": 1130,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Ben 97 Benoit",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 358,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Jean-François Larose",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 135,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24033,
    "candidate": "Geneviève Royer",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 96,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24034,
    "candidate": "Jean-Claude Poissant",
    "party": "Liberal/Libéral",
    "votes": 20993,
    "votePercentage": 36.5,
    "majority": 5886,
    "majorityPercentage": 10.2
  },
  {
    "index": 24034,
    "candidate": "Christian Picard",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 15107,
    "votePercentage": 26.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24034,
    "candidate": "Pierre Chicoine",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13174,
    "votePercentage": 22.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24034,
    "candidate": "Yves Perras",
    "party": "Conservative/Conservateur",
    "votes": 6859,
    "votePercentage": 11.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24034,
    "candidate": "Joanne Tomas",
    "party": "Green Party/Parti Vert",
    "votes": 1235,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24034,
    "candidate": "Normand Chouinard",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 204,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Denis Lebel **",
    "party": "Conservative/Conservateur",
    "votes": 18393,
    "votePercentage": 33.3,
    "majority": 2658,
    "majorityPercentage": 4.8
  },
  {
    "index": 24035,
    "candidate": "Gisèle Dallaire",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15735,
    "votePercentage": 28.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Sabin Simard",
    "party": "Liberal/Libéral",
    "votes": 10193,
    "votePercentage": 18.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Sabin Gaudreault",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 10152,
    "votePercentage": 18.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Laurence Requilé",
    "party": "Green Party/Parti Vert",
    "votes": 806,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24036,
    "candidate": "Francis Scarpaleggia **",
    "party": "Liberal/Libéral",
    "votes": 39965,
    "votePercentage": 64.1,
    "majority": 29108,
    "majorityPercentage": 46.7
  },
  {
    "index": 24036,
    "candidate": "Eric Girard",
    "party": "Conservative/Conservateur",
    "votes": 10857,
    "votePercentage": 17.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24036,
    "candidate": "Ryan Young",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7997,
    "votePercentage": 12.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24036,
    "candidate": "Bradford Dean",
    "party": "Green Party/Parti Vert",
    "votes": 1812,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24036,
    "candidate": "Gabriel Bernier",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 1681,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24037,
    "candidate": "David Lametti",
    "party": "Liberal/Libéral",
    "votes": 23603,
    "votePercentage": 43.9,
    "majority": 8037,
    "majorityPercentage": 14.9
  },
  {
    "index": 24037,
    "candidate": "Hélène LeBlanc **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15566,
    "votePercentage": 29,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24037,
    "candidate": "Gilbert Paquette",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9164,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24037,
    "candidate": "Mohammad Zamir",
    "party": "Conservative/Conservateur",
    "votes": 3713,
    "votePercentage": 6.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24037,
    "candidate": "Lorraine Banville",
    "party": "Green Party/Parti Vert",
    "votes": 1717,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24038,
    "candidate": "David Graham",
    "party": "Liberal/Libéral",
    "votes": 20277,
    "votePercentage": 32.1,
    "majority": 1485,
    "majorityPercentage": 2.4
  },
  {
    "index": 24038,
    "candidate": "Johanne Régimbald",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18792,
    "votePercentage": 29.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24038,
    "candidate": "Simon-Pierre Landry",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16644,
    "votePercentage": 26.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24038,
    "candidate": "Sylvain Charron",
    "party": "Conservative/Conservateur",
    "votes": 6209,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24038,
    "candidate": "Niloufar Hedjazi",
    "party": "Green Party/Parti Vert",
    "votes": 1251,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Hélène Laverdière **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20929,
    "votePercentage": 38.3,
    "majority": 5230,
    "majorityPercentage": 9.6
  },
  {
    "index": 24039,
    "candidate": "Gilles Duceppe",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 15699,
    "votePercentage": 28.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Christine Poirier",
    "party": "Liberal/Libéral",
    "votes": 12938,
    "votePercentage": 23.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Daniel Gaudreau",
    "party": "Conservative/Conservateur",
    "votes": 2242,
    "votePercentage": 4.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Cyrille Giraud",
    "party": "Green Party/Parti Vert",
    "votes": 1904,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Stéphane Beaulieu",
    "party": "Libertarian/Libertarien",
    "votes": 604,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Julien Bernatchez",
    "party": "Independent/Indépendant(e)",
    "votes": 160,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Serge Lachapelle",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 103,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24039,
    "candidate": "Pierre Fontaine",
    "party": "Communist/Communiste",
    "votes": 102,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24040,
    "candidate": "Fayçal El-Khoury",
    "party": "Liberal/Libéral",
    "votes": 25857,
    "votePercentage": 47.7,
    "majority": 15147,
    "majorityPercentage": 27.9
  },
  {
    "index": 24040,
    "candidate": "François Pilon **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10710,
    "votePercentage": 19.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24040,
    "candidate": "Roland Dick",
    "party": "Conservative/Conservateur",
    "votes": 9811,
    "votePercentage": 18.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24040,
    "candidate": "Nancy Redhead",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6731,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24040,
    "candidate": "Faiza R'Guiba-Kalogerakis",
    "party": "Green Party/Parti Vert",
    "votes": 921,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24040,
    "candidate": "Yvon Breton",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 175,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24042,
    "candidate": "Jacques Gourde **",
    "party": "Conservative/Conservateur",
    "votes": 31357,
    "votePercentage": 50.1,
    "majority": 17795,
    "majorityPercentage": 28.4
  },
  {
    "index": 24042,
    "candidate": "Claude Boucher",
    "party": "Liberal/Libéral",
    "votes": 13562,
    "votePercentage": 21.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24042,
    "candidate": "Hélène Bilodeau",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9246,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24042,
    "candidate": "Steve Gagné",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7163,
    "votePercentage": 11.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24042,
    "candidate": "Tina Biello",
    "party": "Green Party/Parti Vert",
    "votes": 1124,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24042,
    "candidate": "François Belanger",
    "party": "ATN/ADN",
    "votes": 136,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Sherry Romanado",
    "party": "Liberal/Libéral",
    "votes": 18301,
    "votePercentage": 35.4,
    "majority": 4327,
    "majorityPercentage": 8.4
  },
  {
    "index": 24041,
    "candidate": "Philippe Cloutier",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 13974,
    "votePercentage": 27,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Sadia Groguhé **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12468,
    "votePercentage": 24.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Thomas Barré",
    "party": "Conservative/Conservateur",
    "votes": 4961,
    "votePercentage": 9.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Mario Leclerc",
    "party": "Green Party/Parti Vert",
    "votes": 1510,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Matthew Iakov Liberman",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 325,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24041,
    "candidate": "Pierre Chénier",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 168,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24043,
    "candidate": "Pierre Nantel **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2019-08-16",
    "votes": 18171,
    "votePercentage": 31.2,
    "majority": 703,
    "majorityPercentage": 1.2
  },
  {
    "index": 24043,
    "candidate": "Michael O'Grady",
    "party": "Liberal/Libéral",
    "votes": 17468,
    "votePercentage": 30,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24043,
    "candidate": "Denis Trudel",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 15873,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24043,
    "candidate": "John Sedlak",
    "party": "Conservative/Conservateur",
    "votes": 5087,
    "votePercentage": 8.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24043,
    "candidate": "Casandra Poitras",
    "party": "Green Party/Parti Vert",
    "votes": 1447,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24043,
    "candidate": "Affine Lwalalika",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 153,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24044,
    "candidate": "Joël Lightbound",
    "party": "Liberal/Libéral",
    "votes": 21516,
    "votePercentage": 34.8,
    "majority": 4727,
    "majorityPercentage": 7.7
  },
  {
    "index": 24044,
    "candidate": "Jean-Pierre Asselin",
    "party": "Conservative/Conservateur",
    "votes": 16789,
    "votePercentage": 27.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24044,
    "candidate": "Denis Blanchette **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12850,
    "votePercentage": 20.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24044,
    "candidate": "Caroline Pageau",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 8900,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24044,
    "candidate": "Andrée-Anne Beaudoin-Julien",
    "party": "Green Party/Parti Vert",
    "votes": 1561,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24044,
    "candidate": "Stefan Jetchick",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 128,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24045,
    "candidate": "Gérard Deltell",
    "party": "Conservative/Conservateur",
    "votes": 32637,
    "votePercentage": 50.5,
    "majority": 18785,
    "majorityPercentage": 29
  },
  {
    "index": 24045,
    "candidate": "Youri Rousseau",
    "party": "Liberal/Libéral",
    "votes": 13852,
    "votePercentage": 21.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24045,
    "candidate": "G. Daniel Caron",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10296,
    "votePercentage": 15.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24045,
    "candidate": "Ronald Sirard",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6688,
    "votePercentage": 10.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24045,
    "candidate": "Michel Savard",
    "party": "Green Party/Parti Vert",
    "votes": 1210,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24046,
    "candidate": "Marilène Gill",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 17338,
    "votePercentage": 41.3,
    "majority": 4995,
    "majorityPercentage": 11.9
  },
  {
    "index": 24046,
    "candidate": "Mario Tremblay",
    "party": "Liberal/Libéral",
    "votes": 12343,
    "votePercentage": 29.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24046,
    "candidate": "Jonathan Genest-Jourdain **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7359,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24046,
    "candidate": "Yvon Boudreau",
    "party": "Conservative/Conservateur",
    "votes": 4317,
    "votePercentage": 10.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24046,
    "candidate": "Nathan Grills",
    "party": "Green Party/Parti Vert",
    "votes": 673,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24065,
    "candidate": "Yves Robillard",
    "party": "Liberal/Libéral",
    "votes": 22323,
    "votePercentage": 40.9,
    "majority": 9496,
    "majorityPercentage": 17.4
  },
  {
    "index": 24065,
    "candidate": "Marie-Josée Lemieux",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12827,
    "votePercentage": 23.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24065,
    "candidate": "Patrice Jasmin-Tremblay",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11820,
    "votePercentage": 21.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24065,
    "candidate": "Nicolas Makridis",
    "party": "Conservative/Conservateur",
    "votes": 6498,
    "votePercentage": 11.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24065,
    "candidate": "Lorna Mungur",
    "party": "Green Party/Parti Vert",
    "votes": 1057,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24047,
    "candidate": "Luc Berthold",
    "party": "Conservative/Conservateur",
    "votes": 16749,
    "votePercentage": 35.4,
    "majority": 3441,
    "majorityPercentage": 7.3
  },
  {
    "index": 24047,
    "candidate": "David Berthiaume",
    "party": "Liberal/Libéral",
    "votes": 13308,
    "votePercentage": 28.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24047,
    "candidate": "Jean-François Delisle",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10386,
    "votePercentage": 22,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24047,
    "candidate": "Virginie Provost",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 5838,
    "votePercentage": 12.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24047,
    "candidate": "Justin Gervais",
    "party": "Green Party/Parti Vert",
    "votes": 1006,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24048,
    "candidate": "Simon Marcil",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18710,
    "votePercentage": 31.5,
    "majority": 837,
    "majorityPercentage": 1.4
  },
  {
    "index": 24048,
    "candidate": "Mylène Freeman **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17873,
    "votePercentage": 30.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24048,
    "candidate": "Karl Trudel",
    "party": "Liberal/Libéral",
    "votes": 15514,
    "votePercentage": 26.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24048,
    "candidate": "Gordon Ferguson",
    "party": "Conservative/Conservateur",
    "votes": 6020,
    "votePercentage": 10.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24048,
    "candidate": "Jocelyn Gifford",
    "party": "Green Party/Parti Vert",
    "votes": 1301,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24049,
    "candidate": "Michel Picard",
    "party": "Liberal/Libéral",
    "votes": 18848,
    "votePercentage": 32.5,
    "majority": 2388,
    "majorityPercentage": 4.1
  },
  {
    "index": 24049,
    "candidate": "Catherine Fournier",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 16460,
    "votePercentage": 28.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24049,
    "candidate": "Djaouida Sellah **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14296,
    "votePercentage": 24.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24049,
    "candidate": "Stéphane Duranleau",
    "party": "Conservative/Conservateur",
    "votes": 6284,
    "votePercentage": 10.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24049,
    "candidate": "Olivier Adam",
    "party": "Green Party/Parti Vert",
    "votes": 1388,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24049,
    "candidate": "Claude Leclair",
    "party": "Libertarian/Libertarien",
    "votes": 641,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24050,
    "candidate": "Luc Thériault",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 19405,
    "votePercentage": 36.6,
    "majority": 4921,
    "majorityPercentage": 9.3
  },
  {
    "index": 24050,
    "candidate": "Louis-Charles Thouin",
    "party": "Liberal/Libéral",
    "votes": 14484,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24050,
    "candidate": "Martin Leclerc",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12431,
    "votePercentage": 23.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24050,
    "candidate": "Gisèle DesRoches",
    "party": "Conservative/Conservateur",
    "votes": 5093,
    "votePercentage": 9.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24050,
    "candidate": "Yumi Yow Mei Ang",
    "party": "Green Party/Parti Vert",
    "votes": 976,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24050,
    "candidate": "Manon Perreault **",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 620,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24051,
    "candidate": "Bernard Généreux",
    "party": "Conservative/Conservateur",
    "votes": 14274,
    "votePercentage": 29,
    "majority": 272,
    "majorityPercentage": 0.6
  },
  {
    "index": 24051,
    "candidate": "Marie-Josée Normand",
    "party": "Liberal/Libéral",
    "votes": 14002,
    "votePercentage": 28.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24051,
    "candidate": "François Lapointe **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11918,
    "votePercentage": 24.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24051,
    "candidate": "Louis Gagnon",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 7939,
    "votePercentage": 16.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24051,
    "candidate": "Chantal Breton",
    "party": "Green Party/Parti Vert",
    "votes": 823,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24051,
    "candidate": "Bien Gras Gagné",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 287,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24052,
    "candidate": "Anthony Housefather",
    "party": "Liberal/Libéral",
    "votes": 24187,
    "votePercentage": 50.3,
    "majority": 5986,
    "majorityPercentage": 12.5
  },
  {
    "index": 24052,
    "candidate": "Robert Libman **",
    "party": "Conservative/Conservateur",
    "votes": 18201,
    "votePercentage": 37.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24052,
    "candidate": "Mario Jacinto Rimbao",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3884,
    "votePercentage": 8.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24052,
    "candidate": "Jade Bossé Bélanger",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 908,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24052,
    "candidate": "Timothy Landry",
    "party": "Green Party/Parti Vert",
    "votes": 747,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24052,
    "candidate": "Diane Johnston",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 124,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Marc Garneau **",
    "party": "Liberal/Libéral",
    "votes": 29755,
    "votePercentage": 57.7,
    "majority": 18526,
    "majorityPercentage": 35.9
  },
  {
    "index": 24053,
    "candidate": "James Hughes",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11229,
    "votePercentage": 21.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Richard Sagala",
    "party": "Conservative/Conservateur",
    "votes": 7414,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Melissa Kate Wheeler",
    "party": "Green Party/Parti Vert",
    "votes": 1581,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Simon Quesnel",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 1282,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Rachel Hoffman",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 181,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24053,
    "candidate": "Lisa Julie Cahn",
    "party": "Independent/Indépendant(e)",
    "votes": 151,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Tom Mulcair **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19242,
    "votePercentage": 44.1,
    "majority": 4645,
    "majorityPercentage": 10.6
  },
  {
    "index": 24054,
    "candidate": "Rachel Bendayan",
    "party": "Liberal/Libéral",
    "votes": 14597,
    "votePercentage": 33.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Rodolphe Husny",
    "party": "Conservative/Conservateur",
    "votes": 4159,
    "votePercentage": 9.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Roger Galland Barou",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 3668,
    "votePercentage": 8.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Amara Diallo",
    "party": "Green Party/Parti Vert",
    "votes": 1575,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Francis Pouliot",
    "party": "Libertarian/Libertarien",
    "votes": 216,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Adrien Welsh",
    "party": "Communist/Communiste",
    "votes": 162,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Justin Trudeau **",
    "party": "Liberal/Libéral",
    "votes": 26391,
    "votePercentage": 52,
    "majority": 13259,
    "majorityPercentage": 26.1
  },
  {
    "index": 24055,
    "candidate": "Anne Lagacé Dowson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13132,
    "votePercentage": 25.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Maxime Claveau",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6182,
    "votePercentage": 12.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Yvon Vadnais",
    "party": "Conservative/Conservateur",
    "votes": 2390,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Danny Polifroni",
    "party": "Green Party/Parti Vert",
    "votes": 1443,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Chris Lloyd",
    "party": "Independent/Indépendant(e)",
    "votes": 505,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Tommy Gaudet",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 323,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Kim Waldron",
    "party": "Independent/Indépendant(e)",
    "votes": 159,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Peter Macrisopoulos",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 142,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24055,
    "candidate": "Beverly Bernardo",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 103,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24014,
    "candidate": "Xavier Barsalou-Duval",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 17007,
    "votePercentage": 28.6,
    "majority": 213,
    "majorityPercentage": 0.4
  },
  {
    "index": 24014,
    "candidate": "Lucie Gagnon",
    "party": "Liberal/Libéral",
    "votes": 16794,
    "votePercentage": 28.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24014,
    "candidate": "Raphaël Fortin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14454,
    "votePercentage": 24.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24014,
    "candidate": "Clovis Maheux",
    "party": "Conservative/Conservateur",
    "votes": 6079,
    "votePercentage": 10.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24014,
    "candidate": "JiCi Lauzon",
    "party": "Green Party/Parti Vert",
    "votes": 5056,
    "votePercentage": 8.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24056,
    "candidate": "Frank Baylis",
    "party": "Liberal/Libéral",
    "votes": 34319,
    "votePercentage": 58.7,
    "majority": 22625,
    "majorityPercentage": 38.7
  },
  {
    "index": 24056,
    "candidate": "Valérie Assouline",
    "party": "Conservative/Conservateur",
    "votes": 11694,
    "votePercentage": 20,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24056,
    "candidate": "Lysane Blanchette-Lamothe **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9584,
    "votePercentage": 16.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24056,
    "candidate": "Natalie Laplante",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 2043,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24056,
    "candidate": "Abraham Weizfeld",
    "party": "Green Party/Parti Vert",
    "votes": 865,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "William Amos",
    "party": "Liberal/Libéral",
    "votes": 34154,
    "votePercentage": 54.5,
    "majority": 20064,
    "majorityPercentage": 32
  },
  {
    "index": 24057,
    "candidate": "Mathieu Ravignat **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14090,
    "votePercentage": 22.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "Benjamin Woodman",
    "party": "Conservative/Conservateur",
    "votes": 8716,
    "votePercentage": 13.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "Nicolas Lepage",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 4337,
    "votePercentage": 6.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "Colin Griffiths",
    "party": "Green Party/Parti Vert",
    "votes": 1089,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "Pascal Médieu",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 131,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24057,
    "candidate": "Louis Lang",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 108,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24058,
    "candidate": "Joël Godin",
    "party": "Conservative/Conservateur",
    "votes": 27290,
    "votePercentage": 44,
    "majority": 13604,
    "majorityPercentage": 21.9
  },
  {
    "index": 24058,
    "candidate": "Élaine Michaud **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13686,
    "votePercentage": 22.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24058,
    "candidate": "David Gauvin",
    "party": "Liberal/Libéral",
    "votes": 13322,
    "votePercentage": 21.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24058,
    "candidate": "Raymond Harvey",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 6665,
    "votePercentage": 10.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24058,
    "candidate": "Johanne Morin",
    "party": "Green Party/Parti Vert",
    "votes": 1096,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Jean-Yves Duclos",
    "party": "Liberal/Libéral",
    "votes": 15566,
    "votePercentage": 28.9,
    "majority": 1000,
    "majorityPercentage": 1.9
  },
  {
    "index": 24059,
    "candidate": "Annick Papillon **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14566,
    "votePercentage": 27,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Pierre-Thomas Asselin",
    "party": "Conservative/Conservateur",
    "votes": 11737,
    "votePercentage": 21.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Charles Mordret",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 10153,
    "votePercentage": 18.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Philippe Riboty",
    "party": "Green Party/Parti Vert",
    "votes": 1570,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Normand Fournier",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 153,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24059,
    "candidate": "Danielle Provost",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 122,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24060,
    "candidate": "Monique Pauzé",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 22618,
    "votePercentage": 34.7,
    "majority": 4820,
    "majorityPercentage": 7.4
  },
  {
    "index": 24060,
    "candidate": "Adriana Dudas",
    "party": "Liberal/Libéral",
    "votes": 17798,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24060,
    "candidate": "Réjean Bellemare",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15167,
    "votePercentage": 23.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24060,
    "candidate": "Jonathan Lefebvre",
    "party": "Conservative/Conservateur",
    "votes": 7053,
    "votePercentage": 10.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24060,
    "candidate": "Johnathan Cloutier",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 1333,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24060,
    "candidate": "Yoland Gilbert",
    "party": "Green Party/Parti Vert",
    "votes": 1242,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24061,
    "candidate": "Alain Rayes",
    "party": "Conservative/Conservateur",
    "votes": 18505,
    "votePercentage": 31.6,
    "majority": 4042,
    "majorityPercentage": 6.9
  },
  {
    "index": 24061,
    "candidate": "Marc Desmarais",
    "party": "Liberal/Libéral",
    "votes": 14463,
    "votePercentage": 24.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24061,
    "candidate": "Myriam Beaulieu",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14213,
    "votePercentage": 24.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24061,
    "candidate": "Olivier Nolin",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 10068,
    "votePercentage": 17.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24061,
    "candidate": "Laurier Busque",
    "party": "Green Party/Parti Vert",
    "votes": 984,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24061,
    "candidate": "Antoine Dubois",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 384,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24018,
    "candidate": "Guy Caron **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19374,
    "votePercentage": 43.1,
    "majority": 6780,
    "majorityPercentage": 15.1
  },
  {
    "index": 24018,
    "candidate": "Pierre Cadieux",
    "party": "Liberal/Libéral",
    "votes": 12594,
    "votePercentage": 28,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24018,
    "candidate": "Johanne Carignan",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 8673,
    "votePercentage": 19.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24018,
    "candidate": "Francis Fortin",
    "party": "Conservative/Conservateur",
    "votes": 3363,
    "votePercentage": 7.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24018,
    "candidate": "Louise Boutin",
    "party": "Green Party/Parti Vert",
    "votes": 669,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24018,
    "candidate": "Sébastien CôRhino Côrriveau",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 273,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24062,
    "candidate": "Linda Lapointe",
    "party": "Liberal/Libéral",
    "votes": 18787,
    "votePercentage": 32.4,
    "majority": 1676,
    "majorityPercentage": 2.9
  },
  {
    "index": 24062,
    "candidate": "Laurin Liu **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17111,
    "votePercentage": 29.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24062,
    "candidate": "Félix Pinel",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 14755,
    "votePercentage": 25.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24062,
    "candidate": "Érick Gauthier",
    "party": "Conservative/Conservateur",
    "votes": 6099,
    "votePercentage": 10.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24062,
    "candidate": "Alec Ware",
    "party": "Green Party/Parti Vert",
    "votes": 1136,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24062,
    "candidate": "Luis Quinteros",
    "party": "Independent/Indépendant(e)",
    "votes": 158,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24063,
    "candidate": "Rhéal Fortin",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 18157,
    "votePercentage": 32,
    "majority": 1080,
    "majorityPercentage": 1.9
  },
  {
    "index": 24063,
    "candidate": "Pierre Dionne Labelle **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17077,
    "votePercentage": 30.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24063,
    "candidate": "Janice Bélair Rolland",
    "party": "Liberal/Libéral",
    "votes": 14933,
    "votePercentage": 26.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24063,
    "candidate": "Romain Vignol",
    "party": "Conservative/Conservateur",
    "votes": 4793,
    "votePercentage": 8.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24063,
    "candidate": "Joey Leckman",
    "party": "Green Party/Parti Vert",
    "votes": 1436,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24063,
    "candidate": "Fobozof A. Côté",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 261,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Alexandre Boulerice **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 28672,
    "votePercentage": 49.2,
    "majority": 16389,
    "majorityPercentage": 28.1
  },
  {
    "index": 24064,
    "candidate": "Claude André",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 12283,
    "votePercentage": 21.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Nadine Medawar",
    "party": "Liberal/Libéral",
    "votes": 12068,
    "votePercentage": 20.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Jeremy Dohan",
    "party": "Conservative/Conservateur",
    "votes": 2510,
    "votePercentage": 4.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Sameer Muldeen",
    "party": "Green Party/Parti Vert",
    "votes": 1783,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Laurent Aglat",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 495,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Peter d'Entremont",
    "party": "Libertarian/Libertarien",
    "votes": 353,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24064,
    "candidate": "Stéphane Chénier",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 171,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24066,
    "candidate": "Brigitte Sansoucy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15578,
    "votePercentage": 28.7,
    "majority": 598,
    "majorityPercentage": 1.1
  },
  {
    "index": 24066,
    "candidate": "René Vincelette",
    "party": "Liberal/Libéral",
    "votes": 14980,
    "votePercentage": 27.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24066,
    "candidate": "Michel Filion",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 13200,
    "votePercentage": 24.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24066,
    "candidate": "Réjean Léveillé",
    "party": "Conservative/Conservateur",
    "votes": 9098,
    "votePercentage": 16.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24066,
    "candidate": "Lise Durand",
    "party": "Green Party/Parti Vert",
    "votes": 1243,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24066,
    "candidate": "Ugo Ménard",
    "party": "Independent/Indépendant(e)",
    "votes": 270,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24067,
    "candidate": "Jean Rioux",
    "party": "Liberal/Libéral",
    "votes": 20022,
    "votePercentage": 33.2,
    "majority": 2467,
    "majorityPercentage": 4.1
  },
  {
    "index": 24067,
    "candidate": "Hans Marotte",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17555,
    "votePercentage": 29.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24067,
    "candidate": "Denis Hurtubise",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 14979,
    "votePercentage": 24.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24067,
    "candidate": "Stéphane Guinta",
    "party": "Conservative/Conservateur",
    "votes": 6549,
    "votePercentage": 10.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24067,
    "candidate": "Marilyn Redivo",
    "party": "Green Party/Parti Vert",
    "votes": 1281,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Stéphane Dion **",
    "party": "Liberal/Libéral",
    "votes": 24832,
    "votePercentage": 61.6,
    "majority": 16965,
    "majorityPercentage": 42.1
  },
  {
    "index": 24068,
    "candidate": "Jimmy Yu",
    "party": "Conservative/Conservateur",
    "votes": 7867,
    "votePercentage": 19.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Alain Ackad",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4646,
    "votePercentage": 11.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Pascal-Olivier Dumas-Dubreuil",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 1879,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "John Tromp",
    "party": "Green Party/Parti Vert",
    "votes": 977,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Fernand Deschamps",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 129,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24069,
    "candidate": "Nicola Di Iorio",
    "party": "Liberal/Libéral",
    "votes": 28826,
    "votePercentage": 64.7,
    "majority": 22215,
    "majorityPercentage": 49.9
  },
  {
    "index": 24069,
    "candidate": "Rosannie Filato",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6611,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24069,
    "candidate": "Jean Philippe Fournier",
    "party": "Conservative/Conservateur",
    "votes": 4957,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24069,
    "candidate": "Steeve Gendron",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 3204,
    "votePercentage": 7.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24069,
    "candidate": "Melissa Miscione",
    "party": "Green Party/Parti Vert",
    "votes": 805,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24069,
    "candidate": "Arezki Malek",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 128,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24070,
    "candidate": "François-Philippe Champagne",
    "party": "Liberal/Libéral",
    "votes": 24475,
    "votePercentage": 41.5,
    "majority": 12230,
    "majorityPercentage": 20.7
  },
  {
    "index": 24070,
    "candidate": "Jean-Yves Tremblay",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12245,
    "votePercentage": 20.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24070,
    "candidate": "Sacki Carignan Deschamps",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11295,
    "votePercentage": 19.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24070,
    "candidate": "Jacques Grenier",
    "party": "Conservative/Conservateur",
    "votes": 9592,
    "votePercentage": 16.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24070,
    "candidate": "Martial Toupin",
    "party": "Green Party/Parti Vert",
    "votes": 1144,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24070,
    "candidate": "Jean-Paul Bédard",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 196,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Anne Minh-Thu Quach **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 18726,
    "votePercentage": 30.4,
    "majority": 771,
    "majorityPercentage": 1.3
  },
  {
    "index": 24071,
    "candidate": "Robert Sauvé",
    "party": "Liberal/Libéral",
    "votes": 17955,
    "votePercentage": 29.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Claude DeBellefeuille",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 17452,
    "votePercentage": 28.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Albert De Martin",
    "party": "Conservative/Conservateur",
    "votes": 6132,
    "votePercentage": 10,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Nicola-Silverado Socrates",
    "party": "Green Party/Parti Vert",
    "votes": 867,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Sylvain Larocque",
    "party": "Independent/Indépendant(e)",
    "votes": 219,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24071,
    "candidate": "Patricia Domingos",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 184,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24072,
    "candidate": "Pierre Breton",
    "party": "Liberal/Libéral",
    "votes": 22957,
    "votePercentage": 39,
    "majority": 9012,
    "majorityPercentage": 15.3
  },
  {
    "index": 24072,
    "candidate": "Claire Mailhot",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13945,
    "votePercentage": 23.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24072,
    "candidate": "Jocelyn Beaudoin",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 13092,
    "votePercentage": 22.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24072,
    "candidate": "Sylvie Fontaine",
    "party": "Conservative/Conservateur",
    "votes": 7529,
    "votePercentage": 12.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24072,
    "candidate": "Simon McMillan",
    "party": "Green Party/Parti Vert",
    "votes": 1397,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Pierre-Luc Dusseault **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 21410,
    "votePercentage": 37.4,
    "majority": 4339,
    "majorityPercentage": 7.6
  },
  {
    "index": 24073,
    "candidate": "Thomas ''Tom'' Allen",
    "party": "Liberal/Libéral",
    "votes": 17071,
    "votePercentage": 29.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Caroline Bouchard",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 11717,
    "votePercentage": 20.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Marc Dauphin",
    "party": "Conservative/Conservateur",
    "votes": 5391,
    "votePercentage": 9.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Sophie Malouin",
    "party": "Green Party/Parti Vert",
    "votes": 1143,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Benoit Huberdeau",
    "party": "Independent/Indépendant(e)",
    "votes": 303,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24073,
    "candidate": "Hubert Richard",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 265,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24075,
    "candidate": "Michel Boudrias",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 19238,
    "votePercentage": 33,
    "majority": 2922,
    "majorityPercentage": 5
  },
  {
    "index": 24075,
    "candidate": "Michèle Audette",
    "party": "Liberal/Libéral",
    "votes": 16316,
    "votePercentage": 28,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24075,
    "candidate": "Charmaine Borg **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14928,
    "votePercentage": 25.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24075,
    "candidate": "Michel Surprenant",
    "party": "Conservative/Conservateur",
    "votes": 6615,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24075,
    "candidate": "Susan Moen",
    "party": "Green Party/Parti Vert",
    "votes": 1016,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24075,
    "candidate": "Louis Clément Sénat",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 171,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24013,
    "candidate": "Ramez Ayoub",
    "party": "Liberal/Libéral",
    "votes": 18281,
    "votePercentage": 32.5,
    "majority": 3043,
    "majorityPercentage": 5.4
  },
  {
    "index": 24013,
    "candidate": "Alain Marginean",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 15238,
    "votePercentage": 27.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24013,
    "candidate": "Alain Giguère **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14022,
    "votePercentage": 24.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24013,
    "candidate": "Manuel Puga",
    "party": "Conservative/Conservateur",
    "votes": 7000,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24013,
    "candidate": "Andrew Carkner",
    "party": "Green Party/Parti Vert",
    "votes": 1352,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24013,
    "candidate": "Daniel Guindon",
    "party": "Libertarian/Libertarien",
    "votes": 355,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24076,
    "candidate": "Robert Aubin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19193,
    "votePercentage": 31.8,
    "majority": 969,
    "majorityPercentage": 1.6
  },
  {
    "index": 24076,
    "candidate": "Yvon Boivin",
    "party": "Liberal/Libéral",
    "votes": 18224,
    "votePercentage": 30.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24076,
    "candidate": "Dominic Therrien",
    "party": "Conservative/Conservateur",
    "votes": 11231,
    "votePercentage": 18.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24076,
    "candidate": "André Valois",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 10249,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24076,
    "candidate": "Éric Trottier",
    "party": "Green Party/Parti Vert",
    "votes": 1032,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24076,
    "candidate": "Maxime Rousseau",
    "party": "Libertarian/Libertarien",
    "votes": 360,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24074,
    "candidate": "Peter Schiefke",
    "party": "Liberal/Libéral",
    "votes": 30550,
    "votePercentage": 46.6,
    "majority": 15923,
    "majorityPercentage": 24.3
  },
  {
    "index": 24074,
    "candidate": "Jamie Nicholls **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14627,
    "votePercentage": 22.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24074,
    "candidate": "Vincent François",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9858,
    "votePercentage": 15,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24074,
    "candidate": "Marc Boudreau",
    "party": "Conservative/Conservateur",
    "votes": 9048,
    "votePercentage": 13.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24074,
    "candidate": "Jennifer Kaszel",
    "party": "Green Party/Parti Vert",
    "votes": 1445,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "Marc Miller",
    "party": "Liberal/Libéral",
    "votes": 25491,
    "votePercentage": 50.8,
    "majority": 13734,
    "majorityPercentage": 27.4
  },
  {
    "index": 24077,
    "candidate": "Allison Turner",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11757,
    "votePercentage": 23.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "Steve Shanahan",
    "party": "Conservative/Conservateur",
    "votes": 5948,
    "votePercentage": 11.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "Chantal St-Onge",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 4307,
    "votePercentage": 8.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "Daniel Green",
    "party": "Green Party/Parti Vert",
    "votes": 2398,
    "votePercentage": 4.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "Daniel Wolfe",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 161,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24077,
    "candidate": "William Sloan",
    "party": "Communist/Communiste",
    "votes": 102,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24078,
    "candidate": "Eva Nassif",
    "party": "Liberal/Libéral",
    "votes": 25082,
    "votePercentage": 46.2,
    "majority": 13691,
    "majorityPercentage": 25.2
  },
  {
    "index": 24078,
    "candidate": "France Duhamel",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11391,
    "votePercentage": 21,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24078,
    "candidate": "Barek Kaddouri",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 9068,
    "votePercentage": 16.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24078,
    "candidate": "Anthony Mavros",
    "party": "Conservative/Conservateur",
    "votes": 7262,
    "votePercentage": 13.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24078,
    "candidate": "José Núñez Melo **",
    "party": "Green Party/Parti Vert",
    "votes": 1280,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24078,
    "candidate": "Brian Jenkins",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 260,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35001,
    "candidate": "Mark Holland",
    "party": "Liberal/Libéral",
    "votes": 31458,
    "votePercentage": 55.9,
    "majority": 12084,
    "majorityPercentage": 21.5
  },
  {
    "index": 35001,
    "candidate": "Chris Alexander **",
    "party": "Conservative/Conservateur",
    "votes": 19374,
    "votePercentage": 34.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35001,
    "candidate": "Stephanie Brown",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4630,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35001,
    "candidate": "Jeff Hill",
    "party": "Green Party/Parti Vert",
    "votes": 788,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35001,
    "candidate": "Bob Kesic",
    "party": "United Party/Parti Uni",
    "votes": 57,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35002,
    "candidate": "Carol Hughes **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16516,
    "votePercentage": 39.9,
    "majority": 2405,
    "majorityPercentage": 5.8
  },
  {
    "index": 35002,
    "candidate": "Heather Wilson",
    "party": "Liberal/Libéral",
    "votes": 14111,
    "votePercentage": 34.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35002,
    "candidate": "André Robichaud",
    "party": "Conservative/Conservateur",
    "votes": 9820,
    "votePercentage": 23.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35002,
    "candidate": "Calvin John Orok",
    "party": "Green Party/Parti Vert",
    "votes": 927,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35003,
    "candidate": "Leona Alleslev",
    "party": "Liberal/Libéral",
    "currentParty": "Conservative/Conservateur",
    "changedParty": "2018-09-17",
    "votes": 24132,
    "votePercentage": 47.3,
    "majority": 1093,
    "majorityPercentage": 2.1
  },
  {
    "index": 35003,
    "candidate": "Costas Menegakis **",
    "party": "Conservative/Conservateur",
    "votes": 23039,
    "votePercentage": 45.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35003,
    "candidate": "Brenda Power",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2912,
    "votePercentage": 5.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35003,
    "candidate": "Randi Ramdeen",
    "party": "Green Party/Parti Vert",
    "votes": 654,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35003,
    "candidate": "Kyle Bowles",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 243,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35004,
    "candidate": "John Brassard",
    "party": "Conservative/Conservateur",
    "votes": 22901,
    "votePercentage": 46.4,
    "majority": 4593,
    "majorityPercentage": 9.3
  },
  {
    "index": 35004,
    "candidate": "Colin Wilson",
    "party": "Liberal/Libéral",
    "votes": 18308,
    "votePercentage": 37.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35004,
    "candidate": "Myrna Clark",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5812,
    "votePercentage": 11.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35004,
    "candidate": "Bonnie North",
    "party": "Green Party/Parti Vert",
    "votes": 1991,
    "votePercentage": 4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35004,
    "candidate": "Gary Nail",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 199,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35004,
    "candidate": "Jeff Sakula",
    "party": "CAP/PAC",
    "votes": 130,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35005,
    "candidate": "Alex Nuttall",
    "party": "Conservative/Conservateur",
    "votes": 21091,
    "votePercentage": 41.7,
    "majority": 86,
    "majorityPercentage": 0.2
  },
  {
    "index": 35005,
    "candidate": "Brian Tamblyn",
    "party": "Liberal/Libéral",
    "votes": 21005,
    "votePercentage": 41.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35005,
    "candidate": "Ellen White",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5202,
    "votePercentage": 10.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35005,
    "candidate": "Marty Lancaster",
    "party": "Green Party/Parti Vert",
    "votes": 2648,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35005,
    "candidate": "Darren Roskam",
    "party": "Libertarian/Libertarien",
    "votes": 401,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35005,
    "candidate": "Ram Faerber",
    "party": "Independent/Indépendant(e)",
    "votes": 188,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35006,
    "candidate": "Neil Ellis",
    "party": "Liberal/Libéral",
    "votes": 29281,
    "votePercentage": 50.7,
    "majority": 9500,
    "majorityPercentage": 16.5
  },
  {
    "index": 35006,
    "candidate": "Jodie Jenkins",
    "party": "Conservative/Conservateur",
    "votes": 19781,
    "votePercentage": 34.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35006,
    "candidate": "Terry Cassidy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7001,
    "votePercentage": 12.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35006,
    "candidate": "Rachel Nelems",
    "party": "Green Party/Parti Vert",
    "votes": 1278,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35006,
    "candidate": "Trueman Tuck",
    "party": "Independent/Indépendant(e)",
    "votes": 372,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "Nathaniel Erskine-Smith",
    "party": "Liberal/Libéral",
    "votes": 27458,
    "votePercentage": 49.4,
    "majority": 10345,
    "majorityPercentage": 18.6
  },
  {
    "index": 35007,
    "candidate": "Matthew Kellway **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17113,
    "votePercentage": 30.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "Bill Burrows",
    "party": "Conservative/Conservateur",
    "votes": 9124,
    "votePercentage": 16.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "Randall Sach",
    "party": "Green Party/Parti Vert",
    "votes": 1433,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "James Sears",
    "party": "Independent/Indépendant(e)",
    "votes": 254,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "Roger Carter",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 105,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35007,
    "candidate": "Peter Surjanac",
    "party": "Independent/Indépendant(e)",
    "votes": 43,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35008,
    "candidate": "Ramesh Sangha",
    "party": "Liberal/Libéral",
    "votes": 19277,
    "votePercentage": 48.6,
    "majority": 5932,
    "majorityPercentage": 15
  },
  {
    "index": 35008,
    "candidate": "Bal Gosal **",
    "party": "Conservative/Conservateur",
    "votes": 13345,
    "votePercentage": 33.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35008,
    "candidate": "Rosemary Keenan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5993,
    "votePercentage": 15.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35008,
    "candidate": "Saul Marquard T. Bottcher",
    "party": "Green Party/Parti Vert",
    "votes": 844,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35008,
    "candidate": "Frank Chilelli",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 173,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35009,
    "candidate": "Raj Grewal",
    "party": "Liberal/Libéral",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2018-11-30",
    "votes": 23652,
    "votePercentage": 52.3,
    "majority": 13010,
    "majorityPercentage": 28.8
  },
  {
    "index": 35009,
    "candidate": "Naval Bajaj",
    "party": "Conservative/Conservateur",
    "votes": 10642,
    "votePercentage": 23.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35009,
    "candidate": "Harbaljit Singh Kahlon",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10400,
    "votePercentage": 23,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35009,
    "candidate": "Kyle Lacroix",
    "party": "Green Party/Parti Vert",
    "votes": 512,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35010,
    "candidate": "Ruby Sahota",
    "party": "Liberal/Libéral",
    "votes": 23297,
    "votePercentage": 48.4,
    "majority": 7409,
    "majorityPercentage": 15.4
  },
  {
    "index": 35010,
    "candidate": "Parm Gill **",
    "party": "Conservative/Conservateur",
    "votes": 15888,
    "votePercentage": 33,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35010,
    "candidate": "Martin Singh",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7946,
    "votePercentage": 16.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35010,
    "candidate": "Pauline Thornham",
    "party": "Green Party/Parti Vert",
    "votes": 915,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35010,
    "candidate": "Harinderpal Hundal",
    "party": "Communist/Communiste",
    "votes": 120,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35011,
    "candidate": "Sonia Sidhu",
    "party": "Liberal/Libéral",
    "votes": 23681,
    "votePercentage": 52.1,
    "majority": 7752,
    "majorityPercentage": 17.1
  },
  {
    "index": 35011,
    "candidate": "Kyle Seeback **",
    "party": "Conservative/Conservateur",
    "votes": 15929,
    "votePercentage": 35,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35011,
    "candidate": "Amarjit Sangha",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4843,
    "votePercentage": 10.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35011,
    "candidate": "Shaun Hatton",
    "party": "Green Party/Parti Vert",
    "votes": 1011,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35012,
    "candidate": "Kamal Khera",
    "party": "Liberal/Libéral",
    "votes": 24256,
    "votePercentage": 55.9,
    "majority": 11188,
    "majorityPercentage": 25.8
  },
  {
    "index": 35012,
    "candidate": "Ninder Thind",
    "party": "Conservative/Conservateur",
    "votes": 13068,
    "votePercentage": 30.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35012,
    "candidate": "Adaoma Patterson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5400,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35012,
    "candidate": "Karthika Gobinath",
    "party": "Green Party/Parti Vert",
    "votes": 674,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35013,
    "candidate": "Phil McColeman **",
    "party": "Conservative/Conservateur",
    "votes": 25874,
    "votePercentage": 40.9,
    "majority": 6452,
    "majorityPercentage": 10.2
  },
  {
    "index": 35013,
    "candidate": "Danielle Takacs",
    "party": "Liberal/Libéral",
    "votes": 19422,
    "votePercentage": 30.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35013,
    "candidate": "Marc Laferriere",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15715,
    "votePercentage": 24.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35013,
    "candidate": "Kevin Brandt",
    "party": "Green Party/Parti Vert",
    "votes": 1582,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35013,
    "candidate": "Rob Ferguson",
    "party": "Libertarian/Libertarien",
    "votes": 515,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35013,
    "candidate": "The Engineer Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 164,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35014,
    "candidate": "Larry Miller **",
    "party": "Conservative/Conservateur",
    "votes": 26297,
    "votePercentage": 46.7,
    "majority": 4418,
    "majorityPercentage": 7.8
  },
  {
    "index": 35014,
    "candidate": "Kimberley Love",
    "party": "Liberal/Libéral",
    "votes": 21879,
    "votePercentage": 38.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35014,
    "candidate": "David McLaren",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6270,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35014,
    "candidate": "Chris Albinati",
    "party": "Green Party/Parti Vert",
    "votes": 1887,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35015,
    "candidate": "Karina Gould",
    "party": "Liberal/Libéral",
    "votes": 32229,
    "votePercentage": 46,
    "majority": 2449,
    "majorityPercentage": 3.5
  },
  {
    "index": 35015,
    "candidate": "Mike Wallace **",
    "party": "Conservative/Conservateur",
    "votes": 29780,
    "votePercentage": 42.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35015,
    "candidate": "David Laird",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6381,
    "votePercentage": 9.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35015,
    "candidate": "Vince Fiorito",
    "party": "Green Party/Parti Vert",
    "votes": 1710,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35016,
    "candidate": "Bryan May",
    "party": "Liberal/Libéral",
    "votes": 23024,
    "votePercentage": 43.2,
    "majority": 2411,
    "majorityPercentage": 4.5
  },
  {
    "index": 35016,
    "candidate": "Gary Goodyear **",
    "party": "Conservative/Conservateur",
    "votes": 20613,
    "votePercentage": 38.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35016,
    "candidate": "Bobbi Stewart",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7397,
    "votePercentage": 13.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35016,
    "candidate": "Michele Braniff",
    "party": "Green Party/Parti Vert",
    "votes": 1723,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35016,
    "candidate": "Lee Sperduti",
    "party": "Independent/Indépendant(e)",
    "votes": 474,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35016,
    "candidate": "Manuel Couto",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 108,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35088,
    "candidate": "Pierre Poilievre",
    "party": "Conservative/Conservateur",
    "votes": 27762,
    "votePercentage": 46.9,
    "majority": 1849,
    "majorityPercentage": 3.1
  },
  {
    "index": 35088,
    "candidate": "Chris Rodgers",
    "party": "Liberal/Libéral",
    "votes": 25913,
    "votePercentage": 43.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35088,
    "candidate": "Kc Larocque",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3632,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35088,
    "candidate": "Deborah Coyne",
    "party": "Green Party/Parti Vert",
    "votes": 1932,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35017,
    "candidate": "Dave Van Kesteren **",
    "party": "Conservative/Conservateur",
    "votes": 21677,
    "votePercentage": 41.7,
    "majority": 2326,
    "majorityPercentage": 4.5
  },
  {
    "index": 35017,
    "candidate": "Katie Omstead",
    "party": "Liberal/Libéral",
    "votes": 19351,
    "votePercentage": 37.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35017,
    "candidate": "Tony Walsh",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9549,
    "votePercentage": 18.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35017,
    "candidate": "Mark Vercouteren",
    "party": "Green Party/Parti Vert",
    "votes": 1394,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35018,
    "candidate": "Julie Dzerowicz",
    "party": "Liberal/Libéral",
    "votes": 21947,
    "votePercentage": 44.3,
    "majority": 1441,
    "majorityPercentage": 2.9
  },
  {
    "index": 35018,
    "candidate": "Andrew Cash **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20506,
    "votePercentage": 41.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35018,
    "candidate": "Carlos Oliveira",
    "party": "Conservative/Conservateur",
    "votes": 5233,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35018,
    "candidate": "Dan Stein",
    "party": "Green Party/Parti Vert",
    "votes": 1530,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35018,
    "candidate": "Miguel Figueroa",
    "party": "Communist/Communiste",
    "votes": 261,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35018,
    "candidate": "Chai Kalevar",
    "party": "Independent/Indépendant(e)",
    "votes": 107,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35019,
    "candidate": "Yasmin Ratansi",
    "party": "Liberal/Libéral",
    "votes": 24048,
    "votePercentage": 57.8,
    "majority": 11893,
    "majorityPercentage": 28.6
  },
  {
    "index": 35019,
    "candidate": "Maureen Harquail",
    "party": "Conservative/Conservateur",
    "votes": 12155,
    "votePercentage": 29.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35019,
    "candidate": "Khalid Ahmed",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4307,
    "votePercentage": 10.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35019,
    "candidate": "Laura Elizabeth Sanderson",
    "party": "Green Party/Parti Vert",
    "votes": 1078,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35020,
    "candidate": "Geng Tan",
    "party": "Liberal/Libéral",
    "votes": 23494,
    "votePercentage": 51.4,
    "majority": 6215,
    "majorityPercentage": 13.6
  },
  {
    "index": 35020,
    "candidate": "Joe Daniel **",
    "party": "Conservative/Conservateur",
    "votes": 17279,
    "votePercentage": 37.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35020,
    "candidate": "Akil Sadikali",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3896,
    "votePercentage": 8.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35020,
    "candidate": "Caroline Brown",
    "party": "Green Party/Parti Vert",
    "votes": 1018,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "Rob Oliphant",
    "party": "Liberal/Libéral",
    "votes": 27472,
    "votePercentage": 53.8,
    "majority": 8266,
    "majorityPercentage": 16.2
  },
  {
    "index": 35021,
    "candidate": "John Carmichael **",
    "party": "Conservative/Conservateur",
    "votes": 19206,
    "votePercentage": 37.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "Syeda Riaz",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3076,
    "votePercentage": 6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "Natalie Hunt **",
    "party": "Green Party/Parti Vert",
    "votes": 848,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "John Kittredge",
    "party": "Libertarian/Libertarien",
    "votes": 325,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "Elizabeth Hill",
    "party": "Communist/Communiste",
    "votes": 84,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35021,
    "candidate": "Sharon Cromwell",
    "party": "Independent/Indépendant(e)",
    "votes": 75,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35022,
    "candidate": "David Allan Tilson **",
    "party": "Conservative/Conservateur",
    "votes": 27977,
    "votePercentage": 46.3,
    "majority": 4334,
    "majorityPercentage": 7.2
  },
  {
    "index": 35022,
    "candidate": "Ed Crewson",
    "party": "Liberal/Libéral",
    "votes": 23643,
    "votePercentage": 39.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35022,
    "candidate": "Nancy Urekar",
    "party": "Green Party/Parti Vert",
    "votes": 4433,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35022,
    "candidate": "Rehya Yazbek",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4398,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35023,
    "candidate": "Erin O'Toole **",
    "party": "Conservative/Conservateur",
    "votes": 28967,
    "votePercentage": 45.1,
    "majority": 6018,
    "majorityPercentage": 9.4
  },
  {
    "index": 35023,
    "candidate": "Corinna Traill",
    "party": "Liberal/Libéral",
    "votes": 22949,
    "votePercentage": 35.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35023,
    "candidate": "Derek Spence",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10289,
    "votePercentage": 16,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35023,
    "candidate": "Stacey Leadbetter",
    "party": "Green Party/Parti Vert",
    "votes": 1616,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35023,
    "candidate": "Andrew Moriarity",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 364,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35024,
    "candidate": "Marco Mendicino",
    "party": "Liberal/Libéral",
    "votes": 27278,
    "votePercentage": 48.9,
    "majority": 3490,
    "majorityPercentage": 6.3
  },
  {
    "index": 35024,
    "candidate": "Joe Oliver **",
    "party": "Conservative/Conservateur",
    "votes": 23788,
    "votePercentage": 42.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35024,
    "candidate": "Andrew Thomson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3505,
    "votePercentage": 6.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35024,
    "candidate": "Matthew Chisholm",
    "party": "Green Party/Parti Vert",
    "votes": 799,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35024,
    "candidate": "Ethan Buchman",
    "party": "Libertarian/Libertarien",
    "votes": 308,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35024,
    "candidate": "Rudy Brunell Solomonovici",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 114,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35025,
    "candidate": "Karen Louise Vecchio",
    "party": "Conservative/Conservateur",
    "votes": 28023,
    "votePercentage": 49.2,
    "majority": 10381,
    "majorityPercentage": 18.2
  },
  {
    "index": 35025,
    "candidate": "Lori Baldwin-Sands",
    "party": "Liberal/Libéral",
    "votes": 17642,
    "votePercentage": 31,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35025,
    "candidate": "Fred Sinclair",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8771,
    "votePercentage": 15.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35025,
    "candidate": "Bronagh Joyce Morgan",
    "party": "Green Party/Parti Vert",
    "votes": 1783,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35025,
    "candidate": "Michael Hopkins",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 529,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35025,
    "candidate": "Lou Bernardi",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 185,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35026,
    "candidate": "Tracey Ramsey",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 25072,
    "votePercentage": 41.4,
    "majority": 3470,
    "majorityPercentage": 5.7
  },
  {
    "index": 35026,
    "candidate": "Jeff Watson **",
    "party": "Conservative/Conservateur",
    "votes": 21602,
    "votePercentage": 35.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35026,
    "candidate": "Audrey Festeryga",
    "party": "Liberal/Libéral",
    "votes": 12639,
    "votePercentage": 20.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35026,
    "candidate": "Jennifer Alderson",
    "party": "Green Party/Parti Vert",
    "votes": 1141,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35026,
    "candidate": "Enver Villamizar",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 77,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35027,
    "candidate": "Borys Wrzesnewskyj",
    "party": "Liberal/Libéral",
    "votes": 32612,
    "votePercentage": 52.8,
    "majority": 9542,
    "majorityPercentage": 15.4
  },
  {
    "index": 35027,
    "candidate": "Ted Opitz **",
    "party": "Conservative/Conservateur",
    "votes": 23070,
    "votePercentage": 37.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35027,
    "candidate": "Tanya De Mello",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4886,
    "votePercentage": 7.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35027,
    "candidate": "Shawn Rizvi",
    "party": "Green Party/Parti Vert",
    "votes": 856,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35027,
    "candidate": "Rob Wolvin",
    "party": "PC Party/Parti PC",
    "votes": 378,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35029,
    "candidate": "Kirsty Duncan **",
    "party": "Liberal/Libéral",
    "votes": 26251,
    "votePercentage": 62.4,
    "majority": 16578,
    "majorityPercentage": 39.4
  },
  {
    "index": 35029,
    "candidate": "Toyin Dada",
    "party": "Conservative/Conservateur",
    "votes": 9673,
    "votePercentage": 23,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35029,
    "candidate": "Faisal Hassan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5220,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35029,
    "candidate": "Akhtar Ayub",
    "party": "Green Party/Parti Vert",
    "votes": 524,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35029,
    "candidate": "Anna Di Carlo",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 232,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35029,
    "candidate": "George Szebik",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 164,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35028,
    "candidate": "James Maloney",
    "party": "Liberal/Libéral",
    "votes": 34638,
    "votePercentage": 53.7,
    "majority": 13706,
    "majorityPercentage": 21.2
  },
  {
    "index": 35028,
    "candidate": "Bernard Trottier **",
    "party": "Conservative/Conservateur",
    "votes": 20932,
    "votePercentage": 32.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35028,
    "candidate": "Phil Trotter",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7030,
    "votePercentage": 10.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35028,
    "candidate": "Angela Salewsky",
    "party": "Green Party/Parti Vert",
    "votes": 1507,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35028,
    "candidate": "Liz White",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 233,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35028,
    "candidate": "Janice Murray",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 168,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35030,
    "candidate": "David Sweet **",
    "party": "Conservative/Conservateur",
    "votes": 24137,
    "votePercentage": 43.5,
    "majority": 2409,
    "majorityPercentage": 4.3
  },
  {
    "index": 35030,
    "candidate": "Jennifer Stebbing",
    "party": "Liberal/Libéral",
    "votes": 21728,
    "votePercentage": 39.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35030,
    "candidate": "Mike DiLivio",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7779,
    "votePercentage": 14,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35030,
    "candidate": "David Allan Urquhart",
    "party": "Green Party/Parti Vert",
    "votes": 1866,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35031,
    "candidate": "Francis Drouin",
    "party": "Liberal/Libéral",
    "votes": 34189,
    "votePercentage": 53.3,
    "majority": 10822,
    "majorityPercentage": 16.9
  },
  {
    "index": 35031,
    "candidate": "Pierre Lemieux **",
    "party": "Conservative/Conservateur",
    "votes": 23367,
    "votePercentage": 36.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35031,
    "candidate": "Normand Laurin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5087,
    "votePercentage": 7.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35031,
    "candidate": "Genevieve Malouin-Diraddo",
    "party": "Green Party/Parti Vert",
    "votes": 1153,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35031,
    "candidate": "Jean-Serge Brisson",
    "party": "Libertarian/Libertarien",
    "votes": 377,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Lloyd Longfield",
    "party": "Liberal/Libéral",
    "votes": 34303,
    "votePercentage": 49.1,
    "majority": 15896,
    "majorityPercentage": 22.8
  },
  {
    "index": 35032,
    "candidate": "Gloria Kovach",
    "party": "Conservative/Conservateur",
    "votes": 18407,
    "votePercentage": 26.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Andrew Seagram",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8392,
    "votePercentage": 12,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Gord Miller",
    "party": "Green Party/Parti Vert",
    "votes": 7909,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Alexander Fekri",
    "party": "Libertarian/Libertarien",
    "votes": 520,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Kornelis Klevering",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 193,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35032,
    "candidate": "Tristan Dineen",
    "party": "Communist/Communiste",
    "votes": 144,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "Diane Finley **",
    "party": "Conservative/Conservateur",
    "votes": 24714,
    "votePercentage": 44.1,
    "majority": 4227,
    "majorityPercentage": 7.5
  },
  {
    "index": 35033,
    "candidate": "Joan Mouland",
    "party": "Liberal/Libéral",
    "votes": 20487,
    "votePercentage": 36.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "John Harris",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7625,
    "votePercentage": 13.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "Wayne Ettinger",
    "party": "Green Party/Parti Vert",
    "votes": 1857,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "Dave Bylsma",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 884,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "Dustin Wakeford",
    "party": "Independent/Indépendant(e)",
    "votes": 272,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35033,
    "candidate": "Leslie Bory",
    "party": "Independent/Indépendant(e)",
    "votes": 151,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35034,
    "candidate": "Jamie Schmale",
    "party": "Conservative/Conservateur",
    "votes": 27718,
    "votePercentage": 44.8,
    "majority": 8084,
    "majorityPercentage": 13.1
  },
  {
    "index": 35034,
    "candidate": "David Marquis",
    "party": "Liberal/Libéral",
    "votes": 19634,
    "votePercentage": 31.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35034,
    "candidate": "Mike Perry",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12012,
    "votePercentage": 19.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35034,
    "candidate": "Bill MacCallum",
    "party": "Green Party/Parti Vert",
    "votes": 2470,
    "votePercentage": 4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "David Christopherson **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 18719,
    "votePercentage": 45.6,
    "majority": 5001,
    "majorityPercentage": 12.2
  },
  {
    "index": 35035,
    "candidate": "Anne Tennier",
    "party": "Liberal/Libéral",
    "votes": 13718,
    "votePercentage": 33.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "Yonatan Rozenszajn",
    "party": "Conservative/Conservateur",
    "votes": 6018,
    "votePercentage": 14.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "Ute Schmid-Jones",
    "party": "Green Party/Parti Vert",
    "votes": 1778,
    "votePercentage": 4.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "Michael James Baldasaro",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 348,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "Rob Young",
    "party": "Libertarian/Libertarien",
    "votes": 316,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35035,
    "candidate": "Maria Anastasiou",
    "party": "Independent/Indépendant(e)",
    "votes": 186,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35036,
    "candidate": "Bob Bratina",
    "party": "Liberal/Libéral",
    "votes": 19622,
    "votePercentage": 39,
    "majority": 3157,
    "majorityPercentage": 6.3
  },
  {
    "index": 35036,
    "candidate": "Wayne Marston **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16465,
    "votePercentage": 32.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35036,
    "candidate": "Diane Bubanko",
    "party": "Conservative/Conservateur",
    "votes": 12715,
    "votePercentage": 25.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35036,
    "candidate": "Erin Davis",
    "party": "Green Party/Parti Vert",
    "votes": 1305,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35036,
    "candidate": "Bob Mann",
    "party": "Communist/Communiste",
    "votes": 170,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35036,
    "candidate": "Wendell Fields",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 55,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35037,
    "candidate": "Scott Duvall",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 18146,
    "votePercentage": 35.9,
    "majority": 1213,
    "majorityPercentage": 2.4
  },
  {
    "index": 35037,
    "candidate": "Shaun Burt",
    "party": "Liberal/Libéral",
    "votes": 16933,
    "votePercentage": 33.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35037,
    "candidate": "Al Miles",
    "party": "Conservative/Conservateur",
    "votes": 12991,
    "votePercentage": 25.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35037,
    "candidate": "Raheem Aman",
    "party": "Green Party/Parti Vert",
    "votes": 1283,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35037,
    "candidate": "Andrew James Caton",
    "party": "Libertarian/Libertarien",
    "votes": 763,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35037,
    "candidate": "Jim Enos",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 438,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35038,
    "candidate": "Filomena Tassi",
    "party": "Liberal/Libéral",
    "votes": 29694,
    "votePercentage": 47.7,
    "majority": 9873,
    "majorityPercentage": 15.9
  },
  {
    "index": 35038,
    "candidate": "Vincent Samuel",
    "party": "Conservative/Conservateur",
    "votes": 19821,
    "votePercentage": 31.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35038,
    "candidate": "Alex Johnstone",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10131,
    "votePercentage": 16.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35038,
    "candidate": "Peter Ormond",
    "party": "Green Party/Parti Vert",
    "votes": 2633,
    "votePercentage": 4.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35039,
    "candidate": "Mike Bossio",
    "party": "Liberal/Libéral",
    "votes": 21104,
    "votePercentage": 42.4,
    "majority": 225,
    "majorityPercentage": 0.5
  },
  {
    "index": 35039,
    "candidate": "Daryl Kramp **",
    "party": "Conservative/Conservateur",
    "votes": 20879,
    "votePercentage": 41.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35039,
    "candidate": "Betty Bannon",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6348,
    "votePercentage": 12.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35039,
    "candidate": "Cam Mather",
    "party": "Green Party/Parti Vert",
    "votes": 1466,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35121,
    "candidate": "Judy Sgro **",
    "party": "Liberal/Libéral",
    "votes": 23995,
    "votePercentage": 66.9,
    "majority": 16767,
    "majorityPercentage": 46.8
  },
  {
    "index": 35121,
    "candidate": "Kerry Vandenberg",
    "party": "Conservative/Conservateur",
    "votes": 7228,
    "votePercentage": 20.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35121,
    "candidate": "Darnel Harris",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3851,
    "votePercentage": 10.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35121,
    "candidate": "Keith Jarrett",
    "party": "Green Party/Parti Vert",
    "votes": 584,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35121,
    "candidate": "Christine Nugent",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 201,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35040,
    "candidate": "Ben Lobb **",
    "party": "Conservative/Conservateur",
    "votes": 26174,
    "votePercentage": 44.9,
    "majority": 3045,
    "majorityPercentage": 5.2
  },
  {
    "index": 35040,
    "candidate": "Allan Thompson",
    "party": "Liberal/Libéral",
    "votes": 23129,
    "votePercentage": 39.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35040,
    "candidate": "Gerard Creces",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7544,
    "votePercentage": 13,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35040,
    "candidate": "Jutta Splettstoesser",
    "party": "Green Party/Parti Vert",
    "votes": 1398,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35041,
    "candidate": "Karen McCrimmon",
    "party": "Liberal/Libéral",
    "votes": 32477,
    "votePercentage": 51.3,
    "majority": 7648,
    "majorityPercentage": 12.1
  },
  {
    "index": 35041,
    "candidate": "Walter Pamic",
    "party": "Conservative/Conservateur",
    "votes": 24829,
    "votePercentage": 39.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35041,
    "candidate": "John Hansen",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4313,
    "votePercentage": 6.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35041,
    "candidate": "Andrew West",
    "party": "Green Party/Parti Vert",
    "votes": 1704,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35042,
    "candidate": "Bob Nault",
    "party": "Liberal/Libéral",
    "votes": 10918,
    "votePercentage": 35.5,
    "majority": 498,
    "majorityPercentage": 1.6
  },
  {
    "index": 35042,
    "candidate": "Howard Hampton",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10420,
    "votePercentage": 33.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35042,
    "candidate": "Greg Rickford **",
    "party": "Conservative/Conservateur",
    "votes": 8751,
    "votePercentage": 28.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35042,
    "candidate": "Ember C. McKillop",
    "party": "Green Party/Parti Vert",
    "votes": 501,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35042,
    "candidate": "Kelvin Boucher-Chicago",
    "party": "Independent/Indépendant(e)",
    "votes": 162,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35043,
    "candidate": "Deb Schulte",
    "party": "Liberal/Libéral",
    "votes": 25908,
    "votePercentage": 47.4,
    "majority": 1738,
    "majorityPercentage": 3.2
  },
  {
    "index": 35043,
    "candidate": "Konstantin Toubis",
    "party": "Conservative/Conservateur",
    "votes": 24170,
    "votePercentage": 44.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35043,
    "candidate": "Natalie Rizzo",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3571,
    "votePercentage": 6.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35043,
    "candidate": "Ann Raney",
    "party": "Green Party/Parti Vert",
    "votes": 1037,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35044,
    "candidate": "Mark Gerretsen",
    "party": "Liberal/Libéral",
    "votes": 36421,
    "votePercentage": 55.4,
    "majority": 21493,
    "majorityPercentage": 32.7
  },
  {
    "index": 35044,
    "candidate": "Andy Brooke",
    "party": "Conservative/Conservateur",
    "votes": 14928,
    "votePercentage": 22.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35044,
    "candidate": "Daniel Beals **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11185,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35044,
    "candidate": "Nathan Townend",
    "party": "Green Party/Parti Vert",
    "votes": 2933,
    "votePercentage": 4.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35044,
    "candidate": "Luke McAllister",
    "party": "Libertarian/Libertarien",
    "votes": 305,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35045,
    "candidate": "Raj Saini",
    "party": "Liberal/Libéral",
    "votes": 25504,
    "votePercentage": 48.8,
    "majority": 9632,
    "majorityPercentage": 18.4
  },
  {
    "index": 35045,
    "candidate": "Stephen Woodworth **",
    "party": "Conservative/Conservateur",
    "votes": 15872,
    "votePercentage": 30.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35045,
    "candidate": "Susan Cadell",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8680,
    "votePercentage": 16.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35045,
    "candidate": "Nicholas Wendler",
    "party": "Green Party/Parti Vert",
    "votes": 1597,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35045,
    "candidate": "Slavko Miladinovic",
    "party": "Libertarian/Libertarien",
    "votes": 515,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35045,
    "candidate": "Julian Ichim",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 112,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35047,
    "candidate": "Marwan Tabbara",
    "party": "Liberal/Libéral",
    "votes": 20215,
    "votePercentage": 42.3,
    "majority": 2671,
    "majorityPercentage": 5.6
  },
  {
    "index": 35047,
    "candidate": "Marian Gagné",
    "party": "Conservative/Conservateur",
    "votes": 17544,
    "votePercentage": 36.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35047,
    "candidate": "Lorne Bruce",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7440,
    "votePercentage": 15.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35047,
    "candidate": "David Weber",
    "party": "Green Party/Parti Vert",
    "votes": 1767,
    "votePercentage": 3.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35047,
    "candidate": "Nathan Lajeunesse",
    "party": "Libertarian/Libertarien",
    "votes": 772,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35047,
    "candidate": "Elaine Baetz",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 91,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35046,
    "candidate": "Harold Albrecht **",
    "party": "Conservative/Conservateur",
    "votes": 20649,
    "votePercentage": 43.3,
    "majority": 251,
    "majorityPercentage": 0.5
  },
  {
    "index": 35046,
    "candidate": "Tim Louis",
    "party": "Liberal/Libéral",
    "votes": 20398,
    "votePercentage": 42.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35046,
    "candidate": "James Villeneuve",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4653,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35046,
    "candidate": "Bob Jonkman",
    "party": "Green Party/Parti Vert",
    "votes": 1314,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35046,
    "candidate": "Richard Hodgson",
    "party": "Libertarian/Libertarien",
    "votes": 685,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35048,
    "candidate": "Bev Shipley **",
    "party": "Conservative/Conservateur",
    "votes": 28300,
    "votePercentage": 50.2,
    "majority": 11708,
    "majorityPercentage": 20.8
  },
  {
    "index": 35048,
    "candidate": "Ken Filson",
    "party": "Liberal/Libéral",
    "votes": 16592,
    "votePercentage": 29.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35048,
    "candidate": "Rex Isaac",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9598,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35048,
    "candidate": "Jim Johnston",
    "party": "Green Party/Parti Vert",
    "votes": 1873,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35049,
    "candidate": "Scott Reid **",
    "party": "Conservative/Conservateur",
    "votes": 27399,
    "votePercentage": 47.9,
    "majority": 8074,
    "majorityPercentage": 14.1
  },
  {
    "index": 35049,
    "candidate": "Phil Archambault",
    "party": "Liberal/Libéral",
    "votes": 19325,
    "votePercentage": 33.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35049,
    "candidate": "John Fenik",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8073,
    "votePercentage": 14.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35049,
    "candidate": "Anita Payne",
    "party": "Green Party/Parti Vert",
    "votes": 2025,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35049,
    "candidate": "Mark Budd",
    "party": "Libertarian/Libertarien",
    "votes": 418,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "Gord Brown **",
    "party": "Conservative/Conservateur",
    "votes": 26738,
    "votePercentage": 47.4,
    "majority": 3850,
    "majorityPercentage": 6.8
  },
  {
    "index": 35050,
    "candidate": "Mary Jean McFall",
    "party": "Liberal/Libéral",
    "votes": 22888,
    "votePercentage": 40.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "Margaret Andrade",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4722,
    "votePercentage": 8.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "Lorraine A. Rekmans",
    "party": "Green Party/Parti Vert",
    "votes": 2088,
    "votePercentage": 3.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35052,
    "candidate": "Peter Fragiskatos",
    "party": "Liberal/Libéral",
    "votes": 32427,
    "votePercentage": 50.5,
    "majority": 12437,
    "majorityPercentage": 19.4
  },
  {
    "index": 35052,
    "candidate": "Susan Truppe **",
    "party": "Conservative/Conservateur",
    "votes": 19990,
    "votePercentage": 31.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35052,
    "candidate": "German Gutierrez",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9423,
    "votePercentage": 14.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35052,
    "candidate": "Carol Dyck",
    "party": "Green Party/Parti Vert",
    "votes": 2286,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35052,
    "candidate": "Marvin Roman",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 145,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35053,
    "candidate": "Kate Young",
    "party": "Liberal/Libéral",
    "votes": 31167,
    "votePercentage": 45.8,
    "majority": 7131,
    "majorityPercentage": 10.5
  },
  {
    "index": 35053,
    "candidate": "Ed Holder **",
    "party": "Conservative/Conservateur",
    "votes": 24036,
    "votePercentage": 35.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35053,
    "candidate": "Matthew Rowlinson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10087,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35053,
    "candidate": "Dimitri Lascaris",
    "party": "Green Party/Parti Vert",
    "votes": 1918,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35053,
    "candidate": "Jacques Y. Boudreau",
    "party": "Libertarian/Libertarien",
    "votes": 732,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35053,
    "candidate": "Michael Lewis",
    "party": "Communist/Communiste",
    "votes": 87,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35051,
    "candidate": "Irene Mathyssen **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20684,
    "votePercentage": 37.8,
    "majority": 3470,
    "majorityPercentage": 6.3
  },
  {
    "index": 35051,
    "candidate": "Khalil Ramal",
    "party": "Liberal/Libéral",
    "votes": 17214,
    "votePercentage": 31.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35051,
    "candidate": "Suzanna Dieleman",
    "party": "Conservative/Conservateur",
    "votes": 14891,
    "votePercentage": 27.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35051,
    "candidate": "Matthew Peloza",
    "party": "Green Party/Parti Vert",
    "votes": 1604,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35051,
    "candidate": "Ali Hamadi",
    "party": "Independent/Indépendant(e)",
    "votes": 352,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35054,
    "candidate": "Jane Philpott",
    "party": "Liberal/Libéral",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2019-04-02",
    "votes": 29416,
    "votePercentage": 49.2,
    "majority": 3851,
    "majorityPercentage": 6.4
  },
  {
    "index": 35054,
    "candidate": "Paul Calandra **",
    "party": "Conservative/Conservateur",
    "votes": 25565,
    "votePercentage": 42.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35054,
    "candidate": "Gregory Hines",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3647,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35054,
    "candidate": "Myles O'Brien",
    "party": "Green Party/Parti Vert",
    "votes": 1145,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "John McCallum **",
    "party": "Liberal/Libéral",
    "votes": 23878,
    "votePercentage": 55.7,
    "majority": 10029,
    "majorityPercentage": 23.4
  },
  {
    "index": 35055,
    "candidate": "Jobson Easow",
    "party": "Conservative/Conservateur",
    "votes": 13849,
    "votePercentage": 32.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Senthi Chelliah",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4595,
    "votePercentage": 10.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Joshua Russell",
    "party": "Green Party/Parti Vert",
    "votes": 535,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35056,
    "candidate": "Bob Saroya",
    "party": "Conservative/Conservateur",
    "votes": 24605,
    "votePercentage": 49.4,
    "majority": 3009,
    "majorityPercentage": 6
  },
  {
    "index": 35056,
    "candidate": "Bang-Gu Jiang",
    "party": "Liberal/Libéral",
    "votes": 21596,
    "votePercentage": 43.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35056,
    "candidate": "Colleen Zimmerman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2528,
    "votePercentage": 5.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35056,
    "candidate": "Elvin Kao",
    "party": "Green Party/Parti Vert",
    "votes": 1110,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35057,
    "candidate": "Lisa Raitt **",
    "party": "Conservative/Conservateur",
    "votes": 22378,
    "votePercentage": 45.4,
    "majority": 2438,
    "majorityPercentage": 4.9
  },
  {
    "index": 35057,
    "candidate": "Azim Rizvee",
    "party": "Liberal/Libéral",
    "votes": 19940,
    "votePercentage": 40.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35057,
    "candidate": "Alex Anabusi",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5366,
    "votePercentage": 10.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35057,
    "candidate": "Mini Batra",
    "party": "Green Party/Parti Vert",
    "votes": 1131,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35057,
    "candidate": "Chris Jewell",
    "party": "Libertarian/Libertarien",
    "votes": 493,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35058,
    "candidate": "Omar Alghabra",
    "party": "Liberal/Libéral",
    "votes": 28372,
    "votePercentage": 54.7,
    "majority": 10941,
    "majorityPercentage": 21.1
  },
  {
    "index": 35058,
    "candidate": "Julius Tiangson",
    "party": "Conservative/Conservateur",
    "votes": 17431,
    "votePercentage": 33.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35058,
    "candidate": "Farheen Khan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4920,
    "votePercentage": 9.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35058,
    "candidate": "Linh Nguyen",
    "party": "Green Party/Parti Vert",
    "votes": 1129,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35059,
    "candidate": "Peter Fonseca",
    "party": "Liberal/Libéral",
    "votes": 28154,
    "votePercentage": 54.2,
    "majority": 9801,
    "majorityPercentage": 18.9
  },
  {
    "index": 35059,
    "candidate": "Wladyslaw Lizon **",
    "party": "Conservative/Conservateur",
    "votes": 18353,
    "votePercentage": 35.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35059,
    "candidate": "Ali Naqvi",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4481,
    "votePercentage": 8.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35059,
    "candidate": "Jaymini Bhikha",
    "party": "Green Party/Parti Vert",
    "votes": 766,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35059,
    "candidate": "Tim Sullivan",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 163,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35060,
    "candidate": "Iqra Khalid",
    "party": "Liberal/Libéral",
    "votes": 27520,
    "votePercentage": 49.7,
    "majority": 5804,
    "majorityPercentage": 10.5
  },
  {
    "index": 35060,
    "candidate": "Bob Dechert **",
    "party": "Conservative/Conservateur",
    "votes": 21716,
    "votePercentage": 39.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35060,
    "candidate": "Michelle Bilek",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5206,
    "votePercentage": 9.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35060,
    "candidate": "Andrew Roblin",
    "party": "Green Party/Parti Vert",
    "votes": 905,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35061,
    "candidate": "Sven Spengemann",
    "party": "Liberal/Libéral",
    "votes": 28279,
    "votePercentage": 47.7,
    "majority": 3844,
    "majorityPercentage": 6.5
  },
  {
    "index": 35061,
    "candidate": "Stella Ambler **",
    "party": "Conservative/Conservateur",
    "votes": 24435,
    "votePercentage": 41.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35061,
    "candidate": "Eric Guerbilsky",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4735,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35061,
    "candidate": "Ariana Burgener",
    "party": "Green Party/Parti Vert",
    "votes": 1397,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35061,
    "candidate": "Paul Woodworth",
    "party": "Libertarian/Libertarien",
    "votes": 316,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35061,
    "candidate": "Dagmar Sullivan",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 111,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35062,
    "candidate": "Navdeep Bains",
    "party": "Liberal/Libéral",
    "votes": 26165,
    "votePercentage": 59.1,
    "majority": 14464,
    "majorityPercentage": 32.7
  },
  {
    "index": 35062,
    "candidate": "Jagdish Grewal",
    "party": "Conservative/Conservateur",
    "votes": 11701,
    "votePercentage": 26.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35062,
    "candidate": "Dianne Douglas",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5450,
    "votePercentage": 12.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35062,
    "candidate": "Heather Mercer",
    "party": "Green Party/Parti Vert",
    "votes": 737,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35062,
    "candidate": "Naresh Tharani",
    "party": "Independent/Indépendant(e)",
    "votes": 203,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35063,
    "candidate": "Gagan Sikand",
    "party": "Liberal/Libéral",
    "votes": 26792,
    "votePercentage": 47.8,
    "majority": 4171,
    "majorityPercentage": 7.4
  },
  {
    "index": 35063,
    "candidate": "Brad Butt **",
    "party": "Conservative/Conservateur",
    "votes": 22621,
    "votePercentage": 40.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35063,
    "candidate": "Fayaz Karim",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5040,
    "votePercentage": 9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35063,
    "candidate": "Chris Hill",
    "party": "Green Party/Parti Vert",
    "votes": 1293,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35063,
    "candidate": "Yegor Tarazevich",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 253,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Chandra Arya",
    "party": "Liberal/Libéral",
    "votes": 34017,
    "votePercentage": 52.4,
    "majority": 10575,
    "majorityPercentage": 16.3
  },
  {
    "index": 35064,
    "candidate": "Andy Wang",
    "party": "Conservative/Conservateur",
    "votes": 23442,
    "votePercentage": 36.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Sean Devine",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5324,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Jean-Luc Roger Cooke",
    "party": "Green Party/Parti Vert",
    "votes": 1513,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Jesus Cosico",
    "party": "Independent/Indépendant(e)",
    "votes": 416,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Hubert Mamba",
    "party": "Independent/Indépendant(e)",
    "votes": 69,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Harry Splett",
    "party": "Independent/Indépendant(e)",
    "votes": 66,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35064,
    "candidate": "Tony Seed",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 41,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35065,
    "candidate": "Kyle Peterson",
    "party": "Liberal/Libéral",
    "votes": 25508,
    "votePercentage": 45.2,
    "majority": 1451,
    "majorityPercentage": 2.6
  },
  {
    "index": 35065,
    "candidate": "Lois Brown **",
    "party": "Conservative/Conservateur",
    "votes": 24057,
    "votePercentage": 42.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35065,
    "candidate": "Yvonne Kelly",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4806,
    "votePercentage": 8.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35065,
    "candidate": "Vanessa Long",
    "party": "Green Party/Parti Vert",
    "votes": 1331,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35065,
    "candidate": "Dorian Baxter",
    "party": "PC Party/Parti PC",
    "votes": 762,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35066,
    "candidate": "Vance Badawey",
    "party": "Liberal/Libéral",
    "votes": 19513,
    "votePercentage": 35.7,
    "majority": 2295,
    "majorityPercentage": 4.2
  },
  {
    "index": 35066,
    "candidate": "Malcolm Allen **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17218,
    "votePercentage": 31.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35066,
    "candidate": "Leanna Villella",
    "party": "Conservative/Conservateur",
    "votes": 16248,
    "votePercentage": 29.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35066,
    "candidate": "David Clow",
    "party": "Green Party/Parti Vert",
    "votes": 1316,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35066,
    "candidate": "Jody Di Bartolomeo",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 291,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35066,
    "candidate": "Ron J. Walker",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 96,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35067,
    "candidate": "Rob Nicholson **",
    "party": "Conservative/Conservateur",
    "votes": 27235,
    "votePercentage": 42.1,
    "majority": 4917,
    "majorityPercentage": 7.6
  },
  {
    "index": 35067,
    "candidate": "Ron Planche",
    "party": "Liberal/Libéral",
    "votes": 22318,
    "votePercentage": 34.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35067,
    "candidate": "Carolynn Ioannoni",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13525,
    "votePercentage": 20.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35067,
    "candidate": "Steven Soos",
    "party": "Green Party/Parti Vert",
    "votes": 1633,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35068,
    "candidate": "Dean Allison **",
    "party": "Conservative/Conservateur",
    "votes": 24732,
    "votePercentage": 48.8,
    "majority": 8151,
    "majorityPercentage": 16.1
  },
  {
    "index": 35068,
    "candidate": "Phil Rose",
    "party": "Liberal/Libéral",
    "votes": 16581,
    "votePercentage": 32.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35068,
    "candidate": "Nameer Rahman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5802,
    "votePercentage": 11.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35068,
    "candidate": "Sid Frere",
    "party": "Green Party/Parti Vert",
    "votes": 1511,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35068,
    "candidate": "Harold Jonker",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 1234,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35068,
    "candidate": "Allan de Roo",
    "party": "Libertarian/Libertarien",
    "votes": 797,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35069,
    "candidate": "Marc G. Serré",
    "party": "Liberal/Libéral",
    "votes": 21021,
    "votePercentage": 42.8,
    "majority": 2465,
    "majorityPercentage": 5
  },
  {
    "index": 35069,
    "candidate": "Claude Gravelle **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 18556,
    "votePercentage": 37.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35069,
    "candidate": "Aino Laamanen",
    "party": "Conservative/Conservateur",
    "votes": 8221,
    "votePercentage": 16.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35069,
    "candidate": "Stuart McCall",
    "party": "Green Party/Parti Vert",
    "votes": 1217,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35069,
    "candidate": "Dave Starbuck",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 98,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35070,
    "candidate": "Anthony Rota",
    "party": "Liberal/Libéral",
    "votes": 25357,
    "votePercentage": 51.9,
    "majority": 11032,
    "majorityPercentage": 22.6
  },
  {
    "index": 35070,
    "candidate": "Jay Aspin **",
    "party": "Conservative/Conservateur",
    "votes": 14325,
    "votePercentage": 29.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35070,
    "candidate": "Kathleen Jodouin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7936,
    "votePercentage": 16.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35070,
    "candidate": "Nicole Peltier",
    "party": "Green Party/Parti Vert",
    "votes": 1257,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35071,
    "candidate": "Kim Rudd",
    "party": "Liberal/Libéral",
    "votes": 27043,
    "votePercentage": 42.5,
    "majority": 1878,
    "majorityPercentage": 3
  },
  {
    "index": 35071,
    "candidate": "Adam Moulton",
    "party": "Conservative/Conservateur",
    "votes": 25165,
    "votePercentage": 39.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35071,
    "candidate": "Russ Christianson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9411,
    "votePercentage": 14.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35071,
    "candidate": "Patricia Sinnott",
    "party": "Green Party/Parti Vert",
    "votes": 1990,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35072,
    "candidate": "John Oliver",
    "party": "Liberal/Libéral",
    "votes": 31956,
    "votePercentage": 49.4,
    "majority": 4459,
    "majorityPercentage": 6.9
  },
  {
    "index": 35072,
    "candidate": "Terence Young **",
    "party": "Conservative/Conservateur",
    "votes": 27497,
    "votePercentage": 42.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35072,
    "candidate": "Che Marville",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3830,
    "votePercentage": 5.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35072,
    "candidate": "David Doel",
    "party": "Green Party/Parti Vert",
    "votes": 1420,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35073,
    "candidate": "Pam Damoff",
    "party": "Liberal/Libéral",
    "votes": 28415,
    "votePercentage": 46.7,
    "majority": 2073,
    "majorityPercentage": 3.4
  },
  {
    "index": 35073,
    "candidate": "Effie Triantafilopoulos",
    "party": "Conservative/Conservateur",
    "votes": 26342,
    "votePercentage": 43.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35073,
    "candidate": "Janice Best",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4405,
    "votePercentage": 7.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35073,
    "candidate": "Adnan Shahbaz",
    "party": "Green Party/Parti Vert",
    "votes": 968,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35073,
    "candidate": "David Clement",
    "party": "Libertarian/Libertarien",
    "votes": 666,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35076,
    "candidate": "Andrew Leslie",
    "party": "Liberal/Libéral",
    "votes": 46542,
    "votePercentage": 59.7,
    "majority": 22721,
    "majorityPercentage": 29.1
  },
  {
    "index": 35076,
    "candidate": "Royal Galipeau **",
    "party": "Conservative/Conservateur",
    "votes": 23821,
    "votePercentage": 30.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35076,
    "candidate": "Nancy Tremblay",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6215,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35076,
    "candidate": "Raphaël Morin",
    "party": "Green Party/Parti Vert",
    "votes": 1410,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35074,
    "candidate": "Colin Carrie **",
    "party": "Conservative/Conservateur",
    "votes": 23162,
    "votePercentage": 38.2,
    "majority": 3823,
    "majorityPercentage": 6.3
  },
  {
    "index": 35074,
    "candidate": "Mary Fowler",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19339,
    "votePercentage": 31.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35074,
    "candidate": "Tito-Dante Marimpietri",
    "party": "Liberal/Libéral",
    "votes": 16588,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35074,
    "candidate": "Michael Dempsey",
    "party": "Green Party/Parti Vert",
    "votes": 1522,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35074,
    "candidate": "David Gershuny",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 75,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Catherine Mary McKenna",
    "party": "Liberal/Libéral",
    "votes": 32211,
    "votePercentage": 42.7,
    "majority": 3113,
    "majorityPercentage": 4.1
  },
  {
    "index": 35075,
    "candidate": "Paul Dewar **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 29098,
    "votePercentage": 38.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Damian Konstantinakos",
    "party": "Conservative/Conservateur",
    "votes": 10943,
    "votePercentage": 14.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Tom Milroy",
    "party": "Green Party/Parti Vert",
    "votes": 2246,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Dean T. Harris",
    "party": "Libertarian/Libertarien",
    "votes": 551,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Conrad Lukawski",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 167,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "John Andrew Omowole Akpata",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 160,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35075,
    "candidate": "Stuart Ryan",
    "party": "Communist/Communiste",
    "votes": 124,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "David McGuinty **",
    "party": "Liberal/Libéral",
    "votes": 38831,
    "votePercentage": 60.1,
    "majority": 23120,
    "majorityPercentage": 35.8
  },
  {
    "index": 35077,
    "candidate": "Dev Balkissoon",
    "party": "Conservative/Conservateur",
    "votes": 15711,
    "votePercentage": 24.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "George Brown",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7480,
    "votePercentage": 11.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "John Redins",
    "party": "Green Party/Parti Vert",
    "votes": 1888,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "Al Gullon",
    "party": "PC Party/Parti PC",
    "votes": 366,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "Damien Wilson",
    "party": "Libertarian/Libertarien",
    "votes": 237,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35077,
    "candidate": "Larry Wasslen",
    "party": "Communist/Communiste",
    "votes": 136,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35079,
    "candidate": "Anita Vandenbeld",
    "party": "Liberal/Libéral",
    "votes": 35199,
    "votePercentage": 55.9,
    "majority": 16306,
    "majorityPercentage": 25.9
  },
  {
    "index": 35079,
    "candidate": "Abdul Abdi",
    "party": "Conservative/Conservateur",
    "votes": 18893,
    "votePercentage": 30,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35079,
    "candidate": "Marlene Rivier",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6195,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35079,
    "candidate": "Mark Brooks",
    "party": "Green Party/Parti Vert",
    "votes": 1772,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35079,
    "candidate": "Rod Taylor",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 740,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35079,
    "candidate": "Sam Heaton",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 114,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Mauril Bélanger **",
    "party": "Liberal/Libéral",
    "votes": 36474,
    "votePercentage": 57.6,
    "majority": 24280,
    "majorityPercentage": 38.3
  },
  {
    "index": 35078,
    "candidate": "Emilie Taman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12194,
    "votePercentage": 19.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "David Piccini",
    "party": "Conservative/Conservateur",
    "votes": 12109,
    "votePercentage": 19.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Nira Dookeran",
    "party": "Green Party/Parti Vert",
    "votes": 1947,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Coreen Corcoran",
    "party": "Libertarian/Libertarien",
    "votes": 503,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Christian Legeais",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 128,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35080,
    "candidate": "Dave MacKenzie **",
    "party": "Conservative/Conservateur",
    "votes": 25966,
    "votePercentage": 45.7,
    "majority": 7667,
    "majorityPercentage": 13.5
  },
  {
    "index": 35080,
    "candidate": "Don McKay",
    "party": "Liberal/Libéral",
    "votes": 18299,
    "votePercentage": 32.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35080,
    "candidate": "Zoe Kunschner",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9406,
    "votePercentage": 16.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35080,
    "candidate": "Mike Farlow",
    "party": "Green Party/Parti Vert",
    "votes": 2004,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35080,
    "candidate": "Melody Ann Aldred",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 1175,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Arif Virani",
    "party": "Liberal/Libéral",
    "votes": 24623,
    "votePercentage": 42,
    "majority": 1057,
    "majorityPercentage": 1.8
  },
  {
    "index": 35081,
    "candidate": "Peggy Nash **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 23566,
    "votePercentage": 40.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Ian Allen",
    "party": "Conservative/Conservateur",
    "votes": 7641,
    "votePercentage": 13,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Adam Phipps",
    "party": "Green Party/Parti Vert",
    "votes": 1743,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Mark Jeftovic",
    "party": "Libertarian/Libertarien",
    "votes": 610,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Terry Parker",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 191,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Lorne Gershuny",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 100,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35081,
    "candidate": "Carol Royer",
    "party": "Independent/Indépendant(e)",
    "votes": 93,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Tony Clement **",
    "party": "Conservative/Conservateur",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2018-11-07",
    "votes": 22206,
    "votePercentage": 43.3,
    "majority": 2269,
    "majorityPercentage": 4.4
  },
  {
    "index": 35082,
    "candidate": "Trisha Cowie",
    "party": "Liberal/Libéral",
    "votes": 19937,
    "votePercentage": 38.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Matt McCarthy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5183,
    "votePercentage": 10.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Glen Hodgson",
    "party": "Green Party/Parti Vert",
    "votes": 3704,
    "votePercentage": 7.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Duncan Bell",
    "party": "Pirate/Pirate",
    "votes": 121,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Gordie Merton",
    "party": "CAP/PAC",
    "votes": 88,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35082,
    "candidate": "Albert Gray Smith",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 40,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35083,
    "candidate": "John Nater",
    "party": "Conservative/Conservateur",
    "votes": 22255,
    "votePercentage": 42.9,
    "majority": 2775,
    "majorityPercentage": 5.4
  },
  {
    "index": 35083,
    "candidate": "Stephen McCotter",
    "party": "Liberal/Libéral",
    "votes": 19480,
    "votePercentage": 37.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35083,
    "candidate": "Ethan Rabidoux",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7756,
    "votePercentage": 15,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35083,
    "candidate": "Nicole Ramsdale",
    "party": "Green Party/Parti Vert",
    "votes": 1347,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35083,
    "candidate": "Irma DeVries",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 794,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35083,
    "candidate": "Roger Fuhr",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 219,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35084,
    "candidate": "Maryam Monsef",
    "party": "Liberal/Libéral",
    "votes": 29159,
    "votePercentage": 43.8,
    "majority": 5824,
    "majorityPercentage": 8.8
  },
  {
    "index": 35084,
    "candidate": "Michael Skinner",
    "party": "Conservative/Conservateur",
    "votes": 23335,
    "votePercentage": 35.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35084,
    "candidate": "Dave Nickle",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12437,
    "votePercentage": 18.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35084,
    "candidate": "Doug Mason",
    "party": "Green Party/Parti Vert",
    "votes": 1480,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35084,
    "candidate": "Toban Leckie",
    "party": "Forces et Démocratie - Allier les forces de nos régions/Forces et Démocratie - Allier les forces de nos régions",
    "votes": 131,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35085,
    "candidate": "Jennifer O'Connell",
    "party": "Liberal/Libéral",
    "votes": 29757,
    "votePercentage": 50.3,
    "majority": 7166,
    "majorityPercentage": 12.1
  },
  {
    "index": 35085,
    "candidate": "Corneliu Chisu **",
    "party": "Conservative/Conservateur",
    "votes": 22591,
    "votePercentage": 38.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35085,
    "candidate": "Pamela Downward",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5446,
    "votePercentage": 9.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35085,
    "candidate": "Anthony Jordan Navarro",
    "party": "Green Party/Parti Vert",
    "votes": 1365,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35086,
    "candidate": "Cheryl Gallant **",
    "party": "Conservative/Conservateur",
    "votes": 26195,
    "votePercentage": 45.8,
    "majority": 7529,
    "majorityPercentage": 13.2
  },
  {
    "index": 35086,
    "candidate": "Jeff Lehoux",
    "party": "Liberal/Libéral",
    "votes": 18666,
    "votePercentage": 32.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35086,
    "candidate": "Hector Clouthier",
    "party": "Independent/Indépendant(e)",
    "votes": 6300,
    "votePercentage": 11,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35086,
    "candidate": "Dan McCarthy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4893,
    "votePercentage": 8.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35086,
    "candidate": "Stefan Klietsch",
    "party": "Green Party/Parti Vert",
    "votes": 1105,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35087,
    "candidate": "Majid Jowhari",
    "party": "Liberal/Libéral",
    "votes": 23032,
    "votePercentage": 46.9,
    "majority": 1757,
    "majorityPercentage": 3.6
  },
  {
    "index": 35087,
    "candidate": "Michael Parsa",
    "party": "Conservative/Conservateur",
    "votes": 21275,
    "votePercentage": 43.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35087,
    "candidate": "Adam DeVita",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3950,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35087,
    "candidate": "Gwendolyn Veenema",
    "party": "Green Party/Parti Vert",
    "votes": 856,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35089,
    "candidate": "Chris Bittle",
    "party": "Liberal/Libéral",
    "votes": 24870,
    "votePercentage": 43.2,
    "majority": 3233,
    "majorityPercentage": 5.6
  },
  {
    "index": 35089,
    "candidate": "Rick Dykstra **",
    "party": "Conservative/Conservateur",
    "votes": 21637,
    "votePercentage": 37.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35089,
    "candidate": "Susan Erskine-Fournier",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9511,
    "votePercentage": 16.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35089,
    "candidate": "Jim Fannon",
    "party": "Green Party/Parti Vert",
    "votes": 1488,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35089,
    "candidate": "Saleh Waziruddin",
    "party": "Communist/Communiste",
    "votes": 85,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35091,
    "candidate": "Marilyn Gladu",
    "party": "Conservative/Conservateur",
    "votes": 22565,
    "votePercentage": 38.8,
    "majority": 4463,
    "majorityPercentage": 7.7
  },
  {
    "index": 35091,
    "candidate": "Jason Wayne McMichael",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 18102,
    "votePercentage": 31.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35091,
    "candidate": "Dave McPhail",
    "party": "Liberal/Libéral",
    "votes": 15853,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35091,
    "candidate": "Peter Smith",
    "party": "Green Party/Parti Vert",
    "votes": 1605,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35092,
    "candidate": "Terry Sheehan",
    "party": "Liberal/Libéral",
    "votes": 19582,
    "votePercentage": 44.8,
    "majority": 5967,
    "majorityPercentage": 13.6
  },
  {
    "index": 35092,
    "candidate": "Bryan Hayes **",
    "party": "Conservative/Conservateur",
    "votes": 13615,
    "votePercentage": 31.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35092,
    "candidate": "Skip Morrison",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9543,
    "votePercentage": 21.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35092,
    "candidate": "Kara Flannigan",
    "party": "Green Party/Parti Vert",
    "votes": 934,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35092,
    "candidate": "Mike Taffarel",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 83,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35094,
    "candidate": "Salma Zahid",
    "party": "Liberal/Libéral",
    "votes": 22753,
    "votePercentage": 50.5,
    "majority": 8048,
    "majorityPercentage": 17.9
  },
  {
    "index": 35094,
    "candidate": "Roxanne James **",
    "party": "Conservative/Conservateur",
    "votes": 14705,
    "votePercentage": 32.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35094,
    "candidate": "Alex Wilson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5227,
    "votePercentage": 11.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35094,
    "candidate": "Katerina Androutsos",
    "party": "Libertarian/Libertarien",
    "votes": 1384,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35094,
    "candidate": "Lindsay Thompson",
    "party": "Green Party/Parti Vert",
    "votes": 960,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35096,
    "candidate": "Shaun Chen",
    "party": "Liberal/Libéral",
    "votes": 18904,
    "votePercentage": 48.2,
    "majority": 8167,
    "majorityPercentage": 20.8
  },
  {
    "index": 35096,
    "candidate": "Ravinder Malhi",
    "party": "Conservative/Conservateur",
    "votes": 10737,
    "votePercentage": 27.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35096,
    "candidate": "Rathika Sitsabaiesan **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8648,
    "votePercentage": 22.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35096,
    "candidate": "Eleni MacDonald",
    "party": "Green Party/Parti Vert",
    "votes": 579,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35096,
    "candidate": "Raphael Rosch",
    "party": "Independent/Indépendant(e)",
    "votes": 164,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35096,
    "candidate": "Aasia Khatoon",
    "party": "Independent/Indépendant(e)",
    "votes": 156,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35098,
    "candidate": "Bill Blair",
    "party": "Liberal/Libéral",
    "votes": 25586,
    "votePercentage": 52.5,
    "majority": 14012,
    "majorityPercentage": 28.7
  },
  {
    "index": 35098,
    "candidate": "Dan Harris **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11574,
    "votePercentage": 23.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35098,
    "candidate": "Roshan Nallaratnam",
    "party": "Conservative/Conservateur",
    "votes": 10347,
    "votePercentage": 21.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35098,
    "candidate": "Tommy Taylor",
    "party": "Green Party/Parti Vert",
    "votes": 1259,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Arnold Chan **",
    "party": "Liberal/Libéral",
    "votes": 21587,
    "votePercentage": 51.9,
    "majority": 5785,
    "majorityPercentage": 13.9
  },
  {
    "index": 35093,
    "candidate": "Bin Chang",
    "party": "Conservative/Conservateur",
    "votes": 15802,
    "votePercentage": 38,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Laura Patrick",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3263,
    "votePercentage": 7.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Debra Scott",
    "party": "Green Party/Parti Vert",
    "votes": 570,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Jude Coutinho",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 334,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35095,
    "candidate": "John McKay **",
    "party": "Liberal/Libéral",
    "votes": 25167,
    "votePercentage": 60,
    "majority": 14059,
    "majorityPercentage": 33.5
  },
  {
    "index": 35095,
    "candidate": "Chuck Konkel",
    "party": "Conservative/Conservateur",
    "votes": 11108,
    "votePercentage": 26.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35095,
    "candidate": "Laura Casselman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4720,
    "votePercentage": 11.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35095,
    "candidate": "Kathleen Holding",
    "party": "Green Party/Parti Vert",
    "votes": 606,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35095,
    "candidate": "Kevin Clarke",
    "party": "Independent/Indépendant(e)",
    "votes": 175,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35095,
    "candidate": "Paul Coulbeck",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 141,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35097,
    "candidate": "Gary Anandasangaree",
    "party": "Liberal/Libéral",
    "votes": 29913,
    "votePercentage": 60.2,
    "majority": 16326,
    "majorityPercentage": 32.9
  },
  {
    "index": 35097,
    "candidate": "Leslyn Lewis",
    "party": "Conservative/Conservateur",
    "votes": 13587,
    "votePercentage": 27.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35097,
    "candidate": "KM Shanthikumar",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5145,
    "votePercentage": 10.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35097,
    "candidate": "Calvin Winter",
    "party": "Green Party/Parti Vert",
    "votes": 1010,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35100,
    "candidate": "Bruce Stanton **",
    "party": "Conservative/Conservateur",
    "votes": 24836,
    "votePercentage": 43.5,
    "majority": 2118,
    "majorityPercentage": 3.7
  },
  {
    "index": 35100,
    "candidate": "Liz Riley",
    "party": "Liberal/Libéral",
    "votes": 22718,
    "votePercentage": 39.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35100,
    "candidate": "Richard Banigan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6037,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35100,
    "candidate": "Peter Stubbins",
    "party": "Green Party/Parti Vert",
    "votes": 2543,
    "votePercentage": 4.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35100,
    "candidate": "Jacob Kearey-Moreland",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 618,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35100,
    "candidate": "Scott Whittaker",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 319,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35099,
    "candidate": "Kellie Leitch **",
    "party": "Conservative/Conservateur",
    "votes": 30612,
    "votePercentage": 46.6,
    "majority": 5260,
    "majorityPercentage": 8
  },
  {
    "index": 35099,
    "candidate": "Mike MacEachern",
    "party": "Liberal/Libéral",
    "votes": 25352,
    "votePercentage": 38.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35099,
    "candidate": "David Matthews",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6332,
    "votePercentage": 9.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35099,
    "candidate": "JoAnne Fleming",
    "party": "Green Party/Parti Vert",
    "votes": 2923,
    "votePercentage": 4.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35099,
    "candidate": "Len Noordegraaf",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 528,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35101,
    "candidate": "Adam Vaughan",
    "party": "Liberal/Libéral",
    "votes": 30141,
    "votePercentage": 54.7,
    "majority": 15094,
    "majorityPercentage": 27.4
  },
  {
    "index": 35101,
    "candidate": "Olivia Chow **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15047,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35101,
    "candidate": "Sabrina Zuniga",
    "party": "Conservative/Conservateur",
    "votes": 8673,
    "votePercentage": 15.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35101,
    "candidate": "Sharon Danley",
    "party": "Green Party/Parti Vert",
    "votes": 1137,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35101,
    "candidate": "Michael Nicula",
    "party": "PACT/PRCT",
    "votes": 91,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35101,
    "candidate": "Nick Lin",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 59,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35102,
    "candidate": "Guy Lauzon **",
    "party": "Conservative/Conservateur",
    "votes": 27091,
    "votePercentage": 51.1,
    "majority": 6639,
    "majorityPercentage": 12.5
  },
  {
    "index": 35102,
    "candidate": "Bernadette Clement",
    "party": "Liberal/Libéral",
    "votes": 20452,
    "votePercentage": 38.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35102,
    "candidate": "Patrick Burger",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4332,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35102,
    "candidate": "Elaine Kennedy",
    "party": "Green Party/Parti Vert",
    "votes": 1191,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "Paul Lefebvre",
    "party": "Liberal/Libéral",
    "votes": 23534,
    "votePercentage": 47.4,
    "majority": 9741,
    "majorityPercentage": 19.6
  },
  {
    "index": 35103,
    "candidate": "Paul Loewenberg",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13793,
    "votePercentage": 27.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "Fred Slade",
    "party": "Conservative/Conservateur",
    "votes": 10473,
    "votePercentage": 21.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "David Robinson",
    "party": "Green Party/Parti Vert",
    "votes": 1509,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "Jean-Raymond Audet",
    "party": "Independent/Indépendant(e)",
    "votes": 134,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "Elizabeth Rowley",
    "party": "Communist/Communiste",
    "votes": 102,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35103,
    "candidate": "J. David Popescu",
    "party": "Independent/Indépendant(e)",
    "votes": 84,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35104,
    "candidate": "Peter Kent **",
    "party": "Conservative/Conservateur",
    "votes": 31911,
    "votePercentage": 58.6,
    "majority": 13516,
    "majorityPercentage": 24.8
  },
  {
    "index": 35104,
    "candidate": "Nancy Coldham",
    "party": "Liberal/Libéral",
    "votes": 18395,
    "votePercentage": 33.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35104,
    "candidate": "Lorne Cherry",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2814,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35104,
    "candidate": "Josh Rachlis",
    "party": "Green Party/Parti Vert",
    "votes": 627,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35104,
    "candidate": "Gene Balfour",
    "party": "Libertarian/Libertarien",
    "votes": 587,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35104,
    "candidate": "Margaret Leigh Fairbairn",
    "party": "Seniors Party/Parti des aînés",
    "votes": 157,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35105,
    "candidate": "Don Rusnak",
    "party": "Liberal/Libéral",
    "votes": 18523,
    "votePercentage": 44,
    "majority": 6040,
    "majorityPercentage": 14.4
  },
  {
    "index": 35105,
    "candidate": "John Rafferty **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12483,
    "votePercentage": 29.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35105,
    "candidate": "Moe Comuzzi",
    "party": "Conservative/Conservateur",
    "votes": 8876,
    "votePercentage": 21.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35105,
    "candidate": "Christy Radbourne",
    "party": "Green Party/Parti Vert",
    "votes": 2201,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35106,
    "candidate": "Patty Hajdu",
    "party": "Liberal/Libéral",
    "votes": 20069,
    "votePercentage": 45,
    "majority": 9730,
    "majorityPercentage": 21.8
  },
  {
    "index": 35106,
    "candidate": "Andrew Foulds",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10339,
    "votePercentage": 23.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35106,
    "candidate": "Richard Harvey",
    "party": "Conservative/Conservateur",
    "votes": 7775,
    "votePercentage": 17.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35106,
    "candidate": "Bruce Hyer **",
    "party": "Green Party/Parti Vert",
    "votes": 6155,
    "votePercentage": 13.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35106,
    "candidate": "Robert Skaf",
    "party": "Independent/Indépendant(e)",
    "votes": 270,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35107,
    "candidate": "Charlie Angus **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15974,
    "votePercentage": 42.9,
    "majority": 3034,
    "majorityPercentage": 8.1
  },
  {
    "index": 35107,
    "candidate": "Todd Lever",
    "party": "Liberal/Libéral",
    "votes": 12940,
    "votePercentage": 34.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35107,
    "candidate": "John P. Curley",
    "party": "Conservative/Conservateur",
    "votes": 7605,
    "votePercentage": 20.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35107,
    "candidate": "Max Kennedy",
    "party": "Green Party/Parti Vert",
    "votes": 752,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Bill Morneau",
    "party": "Liberal/Libéral",
    "votes": 29297,
    "votePercentage": 57.9,
    "majority": 15830,
    "majorityPercentage": 31.3
  },
  {
    "index": 35108,
    "candidate": "Linda McQuaig",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13467,
    "votePercentage": 26.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Julian Di Battista",
    "party": "Conservative/Conservateur",
    "votes": 6167,
    "votePercentage": 12.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Colin Biggin",
    "party": "Green Party/Parti Vert",
    "votes": 1315,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Jordan Stone",
    "party": "Independent/Indépendant(e)",
    "votes": 147,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Mariam Ahmad",
    "party": "Communist/Communiste",
    "votes": 133,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Philip Fernandez",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 76,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35109,
    "candidate": "Julie Dabrusin",
    "party": "Liberal/Libéral",
    "votes": 23531,
    "votePercentage": 42.3,
    "majority": 1206,
    "majorityPercentage": 2.2
  },
  {
    "index": 35109,
    "candidate": "Craig Scott",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 22325,
    "votePercentage": 40.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35109,
    "candidate": "Benjamin Dichter",
    "party": "Conservative/Conservateur",
    "votes": 5478,
    "votePercentage": 9.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35109,
    "candidate": "Chris Tolley",
    "party": "Green Party/Parti Vert",
    "votes": 2618,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35109,
    "candidate": "John Richardson",
    "party": "PC Party/Parti PC",
    "votes": 1275,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35109,
    "candidate": "Elizabeth Abbott",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 354,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35090,
    "candidate": "Carolyn Bennett **",
    "party": "Liberal/Libéral",
    "votes": 31481,
    "votePercentage": 55.3,
    "majority": 16105,
    "majorityPercentage": 28.3
  },
  {
    "index": 35090,
    "candidate": "Marnie MacDougall",
    "party": "Conservative/Conservateur",
    "votes": 15376,
    "votePercentage": 27,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35090,
    "candidate": "Noah Richler",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8386,
    "votePercentage": 14.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35090,
    "candidate": "Kevin Farmer",
    "party": "Green Party/Parti Vert",
    "votes": 1729,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Chrystia Freeland **",
    "party": "Liberal/Libéral",
    "votes": 27849,
    "votePercentage": 49.8,
    "majority": 11861,
    "majorityPercentage": 21.2
  },
  {
    "index": 35110,
    "candidate": "Jennifer Hollett",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15988,
    "votePercentage": 28.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Karim Jivraj",
    "party": "Conservative/Conservateur",
    "votes": 9790,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Nick Wright",
    "party": "Green Party/Parti Vert",
    "votes": 1641,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Jesse Waslowski",
    "party": "Libertarian/Libertarien",
    "votes": 233,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Simon Luisi",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 126,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Drew Garvie",
    "party": "Communist/Communiste",
    "votes": 125,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "David Berlin",
    "party": "The Bridge/Le Lien",
    "votes": 122,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35110,
    "candidate": "Steve Rutchinski",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 51,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35111,
    "candidate": "Francesco Sorbara",
    "party": "Liberal/Libéral",
    "votes": 23041,
    "votePercentage": 48.7,
    "majority": 2295,
    "majorityPercentage": 4.9
  },
  {
    "index": 35111,
    "candidate": "Julian Fantino **",
    "party": "Conservative/Conservateur",
    "votes": 20746,
    "votePercentage": 43.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35111,
    "candidate": "Adriana Marie Zichy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2198,
    "votePercentage": 4.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35111,
    "candidate": "Anthony Gualtieri",
    "party": "Libertarian/Libertarien",
    "votes": 716,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35111,
    "candidate": "Elise Boulanger",
    "party": "Green Party/Parti Vert",
    "votes": 597,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35112,
    "candidate": "Bardish Chagger",
    "party": "Liberal/Libéral",
    "votes": 29752,
    "votePercentage": 49.7,
    "majority": 10434,
    "majorityPercentage": 17.4
  },
  {
    "index": 35112,
    "candidate": "Peter Braid **",
    "party": "Conservative/Conservateur",
    "votes": 19318,
    "votePercentage": 32.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35112,
    "candidate": "Diane Freeman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8928,
    "votePercentage": 14.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35112,
    "candidate": "Richard Walsh",
    "party": "Green Party/Parti Vert",
    "votes": 1713,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35112,
    "candidate": "Emma Hawley-Yan",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 138,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35113,
    "candidate": "Michael Chong **",
    "party": "Conservative/Conservateur",
    "votes": 32482,
    "votePercentage": 50.9,
    "majority": 9203,
    "majorityPercentage": 14.4
  },
  {
    "index": 35113,
    "candidate": "Don Trant",
    "party": "Liberal/Libéral",
    "votes": 23279,
    "votePercentage": 36.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35113,
    "candidate": "Anne Gajerski-Cauley",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5321,
    "votePercentage": 8.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35113,
    "candidate": "Brent Allan Bouteiller",
    "party": "Green Party/Parti Vert",
    "votes": 2547,
    "votePercentage": 4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35113,
    "candidate": "Harvey Edward Anstey",
    "party": "CAP/PAC",
    "votes": 183,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35114,
    "candidate": "Celina Caesar-Chavannes",
    "party": "Liberal/Libéral",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2019-03-20",
    "votes": 29003,
    "votePercentage": 45,
    "majority": 1849,
    "majorityPercentage": 2.9
  },
  {
    "index": 35114,
    "candidate": "Pat Perkins **",
    "party": "Conservative/Conservateur",
    "votes": 27154,
    "votePercentage": 42.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35114,
    "candidate": "Ryan Kelly",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6677,
    "votePercentage": 10.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35114,
    "candidate": "Craig Cameron",
    "party": "Green Party/Parti Vert",
    "votes": 1403,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35114,
    "candidate": "Jon O'Connor",
    "party": "Independent/Indépendant(e)",
    "votes": 279,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35115,
    "candidate": "Ali Ehsassi",
    "party": "Liberal/Libéral",
    "votes": 24519,
    "votePercentage": 53.4,
    "majority": 7529,
    "majorityPercentage": 16.4
  },
  {
    "index": 35115,
    "candidate": "Chungsen Leung **",
    "party": "Conservative/Conservateur",
    "votes": 16990,
    "votePercentage": 37,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35115,
    "candidate": "Pouyan Tabasinejad",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3203,
    "votePercentage": 7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35115,
    "candidate": "James Arruda",
    "party": "Green Party/Parti Vert",
    "votes": 1025,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35115,
    "candidate": "Birinder Singh Ahluwalia",
    "party": "Independent/Indépendant(e)",
    "votes": 216,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35117,
    "candidate": "Brian Masse **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 24085,
    "votePercentage": 51.3,
    "majority": 12243,
    "majorityPercentage": 26.1
  },
  {
    "index": 35117,
    "candidate": "Dave Sundin",
    "party": "Liberal/Libéral",
    "votes": 11842,
    "votePercentage": 25.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35117,
    "candidate": "Henry Lau",
    "party": "Conservative/Conservateur",
    "votes": 9734,
    "votePercentage": 20.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35117,
    "candidate": "Cora LaRussa",
    "party": "Green Party/Parti Vert",
    "votes": 1083,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35117,
    "candidate": "Margaret Villamizar",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 161,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35116,
    "candidate": "Cheryl Hardcastle",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 23215,
    "votePercentage": 43.5,
    "majority": 8559,
    "majorityPercentage": 16
  },
  {
    "index": 35116,
    "candidate": "Jo-Anne Gignac",
    "party": "Conservative/Conservateur",
    "votes": 14656,
    "votePercentage": 27.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35116,
    "candidate": "Frank Schiller",
    "party": "Liberal/Libéral",
    "votes": 14177,
    "votePercentage": 26.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35116,
    "candidate": "David Momotiuk",
    "party": "Green Party/Parti Vert",
    "votes": 1047,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35116,
    "candidate": "Laura Chesnik",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 249,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Michael Levitt",
    "party": "Liberal/Libéral",
    "votes": 20131,
    "votePercentage": 46.9,
    "majority": 1238,
    "majorityPercentage": 2.9
  },
  {
    "index": 35118,
    "candidate": "Mark Adler **",
    "party": "Conservative/Conservateur",
    "votes": 18893,
    "votePercentage": 44,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Hal Berman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3148,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Constantine Kritsonis",
    "party": "Green Party/Parti Vert",
    "votes": 772,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35120,
    "candidate": "Ahmed Hussen",
    "party": "Liberal/Libéral",
    "votes": 20093,
    "votePercentage": 46,
    "majority": 6812,
    "majorityPercentage": 15.6
  },
  {
    "index": 35120,
    "candidate": "Mike Sullivan **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13281,
    "votePercentage": 30.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35120,
    "candidate": "James Robinson",
    "party": "Conservative/Conservateur",
    "votes": 8399,
    "votePercentage": 19.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35120,
    "candidate": "Stephen Lepone",
    "party": "Libertarian/Libertarien",
    "votes": 1041,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35120,
    "candidate": "John Johnson",
    "party": "Green Party/Parti Vert",
    "votes": 892,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Peter Van Loan **",
    "party": "Conservative/Conservateur",
    "votes": 24058,
    "votePercentage": 50.2,
    "majority": 5975,
    "majorityPercentage": 12.5
  },
  {
    "index": 35119,
    "candidate": "Shaun Tanaka",
    "party": "Liberal/Libéral",
    "votes": 18083,
    "votePercentage": 37.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Sylvia Gerl",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4255,
    "votePercentage": 8.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Mark Viitala",
    "party": "Green Party/Parti Vert",
    "votes": 1483,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46001,
    "candidate": "Larry Maguire **",
    "party": "Conservative/Conservateur",
    "votes": 20666,
    "votePercentage": 50.3,
    "majority": 5328,
    "majorityPercentage": 13
  },
  {
    "index": 46001,
    "candidate": "Jodi Wyman",
    "party": "Liberal/Libéral",
    "votes": 15338,
    "votePercentage": 37.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46001,
    "candidate": "Melissa Joy Wastasecoot",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2576,
    "votePercentage": 6.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46001,
    "candidate": "David Neufeld",
    "party": "Green Party/Parti Vert",
    "votes": 2526,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46002,
    "candidate": "Doug Eyolfson",
    "party": "Liberal/Libéral",
    "votes": 24531,
    "votePercentage": 52,
    "majority": 6123,
    "majorityPercentage": 13
  },
  {
    "index": 46002,
    "candidate": "Steven Fletcher **",
    "party": "Conservative/Conservateur",
    "votes": 18408,
    "votePercentage": 39,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46002,
    "candidate": "Tom Paulley",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2842,
    "votePercentage": 6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46002,
    "candidate": "Kevin Nichols",
    "party": "Green Party/Parti Vert",
    "votes": 1376,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46003,
    "candidate": "Niki Ashton **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13487,
    "votePercentage": 45,
    "majority": 912,
    "majorityPercentage": 3
  },
  {
    "index": 46003,
    "candidate": "Rebecca Chartrand",
    "party": "Liberal/Libéral",
    "votes": 12575,
    "votePercentage": 42,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46003,
    "candidate": "Kyle G. Mirecki",
    "party": "Conservative/Conservateur",
    "votes": 3090,
    "votePercentage": 10.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46003,
    "candidate": "August Hastmann",
    "party": "Green Party/Parti Vert",
    "votes": 537,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46003,
    "candidate": "Zachary Linnick",
    "party": "Libertarian/Libertarien",
    "votes": 255,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46004,
    "candidate": "Robert Sopuck **",
    "party": "Conservative/Conservateur",
    "votes": 19276,
    "votePercentage": 46.3,
    "majority": 7000,
    "majorityPercentage": 16.8
  },
  {
    "index": 46004,
    "candidate": "Ray Piché",
    "party": "Liberal/Libéral",
    "votes": 12276,
    "votePercentage": 29.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46004,
    "candidate": "Laverne M. Lewycky",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5097,
    "votePercentage": 12.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46004,
    "candidate": "Inky Mark",
    "party": "Independent/Indépendant(e)",
    "votes": 3357,
    "votePercentage": 8.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46004,
    "candidate": "Kate Storey",
    "party": "Green Party/Parti Vert",
    "votes": 1592,
    "votePercentage": 3.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46005,
    "candidate": "Daniel Blaikie",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14709,
    "votePercentage": 34.1,
    "majority": 61,
    "majorityPercentage": 0.1
  },
  {
    "index": 46005,
    "candidate": "Lawrence Toet **",
    "party": "Conservative/Conservateur",
    "votes": 14648,
    "votePercentage": 34,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46005,
    "candidate": "Andrea Richardson-Lipon",
    "party": "Liberal/Libéral",
    "votes": 12713,
    "votePercentage": 29.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46005,
    "candidate": "Kim Parke",
    "party": "Green Party/Parti Vert",
    "votes": 1016,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46006,
    "candidate": "MaryAnn Mihychuk",
    "party": "Liberal/Libéral",
    "votes": 18717,
    "votePercentage": 42.7,
    "majority": 1239,
    "majorityPercentage": 2.8
  },
  {
    "index": 46006,
    "candidate": "Jim Bell",
    "party": "Conservative/Conservateur",
    "votes": 17478,
    "votePercentage": 39.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46006,
    "candidate": "Suzanne Hrynyk",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6270,
    "votePercentage": 14.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46006,
    "candidate": "Steven Stairs",
    "party": "Green Party/Parti Vert",
    "votes": 783,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46006,
    "candidate": "David Reimer",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 485,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46006,
    "candidate": "Eduard Walter Hiebert",
    "party": "Independent/Indépendant(e)",
    "votes": 142,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46007,
    "candidate": "Candice Bergen **",
    "party": "Conservative/Conservateur",
    "votes": 25060,
    "votePercentage": 60.8,
    "majority": 14439,
    "majorityPercentage": 35.1
  },
  {
    "index": 46007,
    "candidate": "Ken Werbiski",
    "party": "Liberal/Libéral",
    "votes": 10621,
    "votePercentage": 25.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46007,
    "candidate": "Dean Harder",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2554,
    "votePercentage": 6.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46007,
    "candidate": "Beverley Eert",
    "party": "Green Party/Parti Vert",
    "votes": 1637,
    "votePercentage": 4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46007,
    "candidate": "Jerome Dondo",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 1315,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46008,
    "candidate": "Ted Falk **",
    "party": "Conservative/Conservateur",
    "votes": 25086,
    "votePercentage": 56.1,
    "majority": 9577,
    "majorityPercentage": 21.4
  },
  {
    "index": 46008,
    "candidate": "Terry Hayward",
    "party": "Liberal/Libéral",
    "votes": 15509,
    "votePercentage": 34.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46008,
    "candidate": "Les Lilley",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2371,
    "votePercentage": 5.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46008,
    "candidate": "Jeff Wheeldon",
    "party": "Green Party/Parti Vert",
    "votes": 1779,
    "votePercentage": 4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46009,
    "candidate": "Dan Vandal",
    "party": "Liberal/Libéral",
    "votes": 28530,
    "votePercentage": 58.4,
    "majority": 14525,
    "majorityPercentage": 29.8
  },
  {
    "index": 46009,
    "candidate": "François Catellier",
    "party": "Conservative/Conservateur",
    "votes": 14005,
    "votePercentage": 28.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46009,
    "candidate": "Erin Selby",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5169,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46009,
    "candidate": "Glenn Zaretski",
    "party": "Green Party/Parti Vert",
    "votes": 1119,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46010,
    "candidate": "James Bezan **",
    "party": "Conservative/Conservateur",
    "votes": 25617,
    "votePercentage": 51.9,
    "majority": 10109,
    "majorityPercentage": 20.5
  },
  {
    "index": 46010,
    "candidate": "Joanne Levy",
    "party": "Liberal/Libéral",
    "votes": 15508,
    "votePercentage": 31.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46010,
    "candidate": "Deborah Chief",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5649,
    "votePercentage": 11.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46010,
    "candidate": "Wayne James",
    "party": "Green Party/Parti Vert",
    "votes": 1707,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46010,
    "candidate": "Donald L. Grant",
    "party": "Libertarian/Libertarien",
    "votes": 882,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46011,
    "candidate": "Robert-Falcon Ouellette",
    "party": "Liberal/Libéral",
    "votes": 18471,
    "votePercentage": 54.5,
    "majority": 8981,
    "majorityPercentage": 26.5
  },
  {
    "index": 46011,
    "candidate": "Pat Martin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9490,
    "votePercentage": 28,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46011,
    "candidate": "Allie Szarkiewicz",
    "party": "Conservative/Conservateur",
    "votes": 4189,
    "votePercentage": 12.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46011,
    "candidate": "Don Woodstock",
    "party": "Green Party/Parti Vert",
    "votes": 1379,
    "votePercentage": 4.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46011,
    "candidate": "Scott Miller",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 221,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46011,
    "candidate": "Darrell Rankin",
    "party": "Communist/Communiste",
    "votes": 135,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46012,
    "candidate": "Kevin Lamoureux **",
    "party": "Liberal/Libéral",
    "votes": 23402,
    "votePercentage": 68.9,
    "majority": 18209,
    "majorityPercentage": 53.6
  },
  {
    "index": 46012,
    "candidate": "Harpreet Turka",
    "party": "Conservative/Conservateur",
    "votes": 5193,
    "votePercentage": 15.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46012,
    "candidate": "Levy Abad",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4543,
    "votePercentage": 13.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46012,
    "candidate": "John Redekopp",
    "party": "Green Party/Parti Vert",
    "votes": 826,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46013,
    "candidate": "Terry Duguid",
    "party": "Liberal/Libéral",
    "votes": 28096,
    "votePercentage": 58.3,
    "majority": 11387,
    "majorityPercentage": 23.6
  },
  {
    "index": 46013,
    "candidate": "Gordon Giesbrecht",
    "party": "Conservative/Conservateur",
    "votes": 16709,
    "votePercentage": 34.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46013,
    "candidate": "Brianne Goertzen",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2404,
    "votePercentage": 5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46013,
    "candidate": "Adam Smith",
    "party": "Green Party/Parti Vert",
    "votes": 990,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46014,
    "candidate": "Jim Carr",
    "party": "Liberal/Libéral",
    "votes": 31993,
    "votePercentage": 59.7,
    "majority": 16891,
    "majorityPercentage": 31.5
  },
  {
    "index": 46014,
    "candidate": "Joyce Bateman **",
    "party": "Conservative/Conservateur",
    "votes": 15102,
    "votePercentage": 28.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46014,
    "candidate": "Matt Henderson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4799,
    "votePercentage": 9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 46014,
    "candidate": "Andrew Park",
    "party": "Green Party/Parti Vert",
    "votes": 1677,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Gerry Ritz **",
    "party": "Conservative/Conservateur",
    "votes": 20547,
    "votePercentage": 61,
    "majority": 14617,
    "majorityPercentage": 43.4
  },
  {
    "index": 47001,
    "candidate": "Glenn Tait",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5930,
    "votePercentage": 17.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Larry Ingram",
    "party": "Liberal/Libéral",
    "votes": 5550,
    "votePercentage": 16.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Doug Anguish",
    "party": "Independent/Indépendant(e)",
    "votes": 1076,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Mikaela Tenkink",
    "party": "Green Party/Parti Vert",
    "votes": 575,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47004,
    "candidate": "Kelly Block **",
    "party": "Conservative/Conservateur",
    "votes": 26004,
    "votePercentage": 64.7,
    "majority": 18505,
    "majorityPercentage": 46.1
  },
  {
    "index": 47004,
    "candidate": "Glenn Wright",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7499,
    "votePercentage": 18.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47004,
    "candidate": "Alexander Slusar",
    "party": "Liberal/Libéral",
    "votes": 5774,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47004,
    "candidate": "Lynn Wesley Oliphant",
    "party": "Green Party/Parti Vert",
    "votes": 902,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47002,
    "candidate": "David Anderson **",
    "party": "Conservative/Conservateur",
    "votes": 25050,
    "votePercentage": 69.2,
    "majority": 19669,
    "majorityPercentage": 54.3
  },
  {
    "index": 47002,
    "candidate": "Marvin Wiens",
    "party": "Liberal/Libéral",
    "votes": 5381,
    "votePercentage": 14.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47002,
    "candidate": "Trevor Peterson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4783,
    "votePercentage": 13.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47002,
    "candidate": "William Caton",
    "party": "Green Party/Parti Vert",
    "votes": 993,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47003,
    "candidate": "Georgina Jolibois",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10319,
    "votePercentage": 34.2,
    "majority": 82,
    "majorityPercentage": 0.3
  },
  {
    "index": 47003,
    "candidate": "Lawrence Joseph",
    "party": "Liberal/Libéral",
    "votes": 10237,
    "votePercentage": 33.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47003,
    "candidate": "Rob Clarke **",
    "party": "Conservative/Conservateur",
    "votes": 9105,
    "votePercentage": 30.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47003,
    "candidate": "Warren Koch",
    "party": "Green Party/Parti Vert",
    "votes": 552,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47005,
    "candidate": "Tom Lukiwski **",
    "party": "Conservative/Conservateur",
    "votes": 23273,
    "votePercentage": 55.5,
    "majority": 13295,
    "majorityPercentage": 31.7
  },
  {
    "index": 47005,
    "candidate": "Dustan Hlady",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9978,
    "votePercentage": 23.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47005,
    "candidate": "Perry Juttla",
    "party": "Liberal/Libéral",
    "votes": 7545,
    "votePercentage": 18,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47005,
    "candidate": "Shawn Setyo",
    "party": "Green Party/Parti Vert",
    "votes": 961,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47005,
    "candidate": "Robert Thomas",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 208,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47006,
    "candidate": "Randy Hoback **",
    "party": "Conservative/Conservateur",
    "votes": 19673,
    "votePercentage": 49.8,
    "majority": 8429,
    "majorityPercentage": 21.3
  },
  {
    "index": 47006,
    "candidate": "Lon Borgerson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11244,
    "votePercentage": 28.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47006,
    "candidate": "Gordon Kirkby",
    "party": "Liberal/Libéral",
    "votes": 7832,
    "votePercentage": 19.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47006,
    "candidate": "Byron Tenkink",
    "party": "Green Party/Parti Vert",
    "votes": 761,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47007,
    "candidate": "Erin Weir",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "currentParty": "Co-operative Commonwealth Federation",
    "changedParty": "2018-05-11",
    "votes": 16843,
    "votePercentage": 35.2,
    "majority": 132,
    "majorityPercentage": 0.3
  },
  {
    "index": 47007,
    "candidate": "Trent Fraser",
    "party": "Conservative/Conservateur",
    "votes": 16711,
    "votePercentage": 34.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47007,
    "candidate": "Louis Browne",
    "party": "Liberal/Libéral",
    "votes": 13143,
    "votePercentage": 27.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47007,
    "candidate": "Tamela Friesen",
    "party": "Green Party/Parti Vert",
    "votes": 839,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47007,
    "candidate": "Wojciech K Dolata",
    "party": "Libertarian/Libertarien",
    "votes": 298,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47008,
    "candidate": "Andrew Scheer **",
    "party": "Conservative/Conservateur",
    "votes": 16486,
    "votePercentage": 44.7,
    "majority": 5342,
    "majorityPercentage": 14.5
  },
  {
    "index": 47008,
    "candidate": "Nial Kuyek",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11144,
    "votePercentage": 30.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47008,
    "candidate": "Della Anaquod",
    "party": "Liberal/Libéral",
    "votes": 8401,
    "votePercentage": 22.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47008,
    "candidate": "Greg Chatterson",
    "party": "Green Party/Parti Vert",
    "votes": 852,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47009,
    "candidate": "Ralph Goodale **",
    "party": "Liberal/Libéral",
    "votes": 23552,
    "votePercentage": 55.1,
    "majority": 10621,
    "majorityPercentage": 24.9
  },
  {
    "index": 47009,
    "candidate": "Michael Kram",
    "party": "Conservative/Conservateur",
    "votes": 12931,
    "votePercentage": 30.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47009,
    "candidate": "April Bourgeois",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5362,
    "votePercentage": 12.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47009,
    "candidate": "Frances Simonson",
    "party": "Green Party/Parti Vert",
    "votes": 878,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47012,
    "candidate": "Sheri Benson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14921,
    "votePercentage": 39.6,
    "majority": 2520,
    "majorityPercentage": 6.7
  },
  {
    "index": 47012,
    "candidate": "Randy Donauer",
    "party": "Conservative/Conservateur",
    "votes": 12401,
    "votePercentage": 32.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47012,
    "candidate": "Lisa Abbott",
    "party": "Liberal/Libéral",
    "votes": 9234,
    "votePercentage": 24.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47012,
    "candidate": "Lois Carol Mitchell",
    "party": "Green Party/Parti Vert",
    "votes": 658,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47012,
    "candidate": "Jim Pankiw",
    "party": "Canada Party/Parti Canada",
    "votes": 271,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47012,
    "candidate": "Bronek Hart",
    "party": "Libertarian/Libertarien",
    "votes": 230,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47010,
    "candidate": "Kevin Waugh",
    "party": "Conservative/Conservateur",
    "votes": 19166,
    "votePercentage": 41.6,
    "majority": 5257,
    "majorityPercentage": 11.4
  },
  {
    "index": 47010,
    "candidate": "Scott Bell",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13909,
    "votePercentage": 30.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47010,
    "candidate": "Tracy Muggli",
    "party": "Liberal/Libéral",
    "votes": 12165,
    "votePercentage": 26.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47010,
    "candidate": "Mark Bigland-Pritchard",
    "party": "Green Party/Parti Vert",
    "votes": 846,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47011,
    "candidate": "Brad Trost **",
    "party": "Conservative/Conservateur",
    "votes": 18592,
    "votePercentage": 41.5,
    "majority": 4477,
    "majorityPercentage": 10
  },
  {
    "index": 47011,
    "candidate": "Claire Card",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14115,
    "votePercentage": 31.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47011,
    "candidate": "Cynthia Marie Block",
    "party": "Liberal/Libéral",
    "votes": 11287,
    "votePercentage": 25.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47011,
    "candidate": "Valerie Harvey",
    "party": "Green Party/Parti Vert",
    "votes": 686,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47011,
    "candidate": "Eric Matthew Schalm",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 93,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47013,
    "candidate": "Robert Gordon Kitchen",
    "party": "Conservative/Conservateur",
    "votes": 26315,
    "votePercentage": 70.1,
    "majority": 21184,
    "majorityPercentage": 56.5
  },
  {
    "index": 47013,
    "candidate": "Vicky O'Dell",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5131,
    "votePercentage": 13.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47013,
    "candidate": "Steven Bebbington",
    "party": "Liberal/Libéral",
    "votes": 5076,
    "votePercentage": 13.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47013,
    "candidate": "Bob Deptuck",
    "party": "Green Party/Parti Vert",
    "votes": 994,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47014,
    "candidate": "Cathay Wagantall",
    "party": "Conservative/Conservateur",
    "votes": 21683,
    "votePercentage": 59.2,
    "majority": 14287,
    "majorityPercentage": 39
  },
  {
    "index": 47014,
    "candidate": "Doug Ottenbreit",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7396,
    "votePercentage": 20.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47014,
    "candidate": "Brooke Taylor Malinoski",
    "party": "Liberal/Libéral",
    "votes": 6504,
    "votePercentage": 17.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47014,
    "candidate": "Elaine Marie Hughes",
    "party": "Green Party/Parti Vert",
    "votes": 1030,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48001,
    "candidate": "Blake Richards **",
    "party": "Conservative/Conservateur",
    "votes": 42228,
    "votePercentage": 63.4,
    "majority": 24848,
    "majorityPercentage": 37.3
  },
  {
    "index": 48001,
    "candidate": "Marlo Raynolds",
    "party": "Liberal/Libéral",
    "votes": 17380,
    "votePercentage": 26.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48001,
    "candidate": "Joanne Boissonneault",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4521,
    "votePercentage": 6.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48001,
    "candidate": "Mike MacDonald",
    "party": "Green Party/Parti Vert",
    "votes": 2509,
    "votePercentage": 3.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48002,
    "candidate": "Kevin Sorenson **",
    "party": "Conservative/Conservateur",
    "votes": 47552,
    "votePercentage": 80.9,
    "majority": 42047,
    "majorityPercentage": 71.5
  },
  {
    "index": 48002,
    "candidate": "Andy Kowalski",
    "party": "Liberal/Libéral",
    "votes": 5505,
    "votePercentage": 9.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48002,
    "candidate": "Katherine Swampy",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3844,
    "votePercentage": 6.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48002,
    "candidate": "Gary Kelly",
    "party": "Green Party/Parti Vert",
    "votes": 1868,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Martin Shields",
    "party": "Conservative/Conservateur",
    "votes": 38701,
    "votePercentage": 77.4,
    "majority": 31861,
    "majorityPercentage": 63.7
  },
  {
    "index": 48003,
    "candidate": "William MacDonald Alexander",
    "party": "Liberal/Libéral",
    "votes": 6840,
    "votePercentage": 13.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Lynn MacWilliam",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2622,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Rita Ann Fromholt",
    "party": "Green Party/Parti Vert",
    "votes": 919,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Andrew Kucy",
    "party": "Independent/Indépendant(e)",
    "votes": 543,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Frans VandeStroet",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 280,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48003,
    "candidate": "Fahed Khalid",
    "party": "Democratic Advancement/Avancement de la Démocratie",
    "votes": 83,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48004,
    "candidate": "Kent Hehr",
    "party": "Liberal/Libéral",
    "votes": 28496,
    "votePercentage": 46.5,
    "majority": 750,
    "majorityPercentage": 1.2
  },
  {
    "index": 48004,
    "candidate": "Joan Crockatt **",
    "party": "Conservative/Conservateur",
    "votes": 27746,
    "votePercentage": 45.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48004,
    "candidate": "Jillian Ratti",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3412,
    "votePercentage": 5.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48004,
    "candidate": "Thana Boonlert",
    "party": "Green Party/Parti Vert",
    "votes": 1347,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48004,
    "candidate": "Yogi Henderson",
    "party": "Independent/Indépendant(e)",
    "votes": 248,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48005,
    "candidate": "Len Webber",
    "party": "Conservative/Conservateur",
    "votes": 30669,
    "votePercentage": 45.9,
    "majority": 1586,
    "majorityPercentage": 2.4
  },
  {
    "index": 48005,
    "candidate": "Matt Grant",
    "party": "Liberal/Libéral",
    "votes": 29083,
    "votePercentage": 43.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48005,
    "candidate": "Kirk Heuser",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4770,
    "votePercentage": 7.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48005,
    "candidate": "Natalie Odd",
    "party": "Green Party/Parti Vert",
    "votes": 2146,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48005,
    "candidate": "Kevan Hunter",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 140,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Deepak Obhrai **",
    "party": "Conservative/Conservateur",
    "votes": 19694,
    "votePercentage": 48,
    "majority": 4932,
    "majorityPercentage": 12
  },
  {
    "index": 48006,
    "candidate": "Cam Stewart",
    "party": "Liberal/Libéral",
    "votes": 14762,
    "votePercentage": 36,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Abdou Souraya",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4006,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Judson Hansell",
    "party": "Green Party/Parti Vert",
    "votes": 1229,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Matt Badura",
    "party": "Libertarian/Libertarien",
    "votes": 832,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Jason Devine",
    "party": "Communist/Communiste",
    "votes": 390,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48006,
    "candidate": "Max Veress",
    "party": "Democratic Advancement/Avancement de la Démocratie",
    "votes": 134,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Stephen J. Harper **",
    "party": "Conservative/Conservateur",
    "votes": 37263,
    "votePercentage": 63.8,
    "majority": 22091,
    "majorityPercentage": 37.8
  },
  {
    "index": 48007,
    "candidate": "Brendan Miles",
    "party": "Liberal/Libéral",
    "votes": 15172,
    "votePercentage": 26,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Matt Masters Burgener",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4255,
    "votePercentage": 7.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Kelly Christie",
    "party": "Green Party/Parti Vert",
    "votes": 1246,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Steven Paolasini",
    "party": "Libertarian/Libertarien",
    "votes": 246,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Larry R. Heather",
    "party": "Independent/Indépendant(e)",
    "votes": 114,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Korry Zepik",
    "party": "Independent/Indépendant(e)",
    "votes": 73,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Nicolas Duchastel de Montrouge",
    "party": "Independent/Indépendant(e)",
    "votes": 61,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Jason Kenney **",
    "party": "Conservative/Conservateur",
    "votes": 42415,
    "votePercentage": 66.7,
    "majority": 28019,
    "majorityPercentage": 44.1
  },
  {
    "index": 48008,
    "candidate": "Haley Brown",
    "party": "Liberal/Libéral",
    "votes": 14396,
    "votePercentage": 22.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Laura Weston",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4915,
    "votePercentage": 7.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Brennan Wauters",
    "party": "Green Party/Parti Vert",
    "votes": 1691,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Peggy Askin",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 145,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48009,
    "candidate": "Michelle Rempel **",
    "party": "Conservative/Conservateur",
    "votes": 32760,
    "votePercentage": 60,
    "majority": 18089,
    "majorityPercentage": 33.2
  },
  {
    "index": 48009,
    "candidate": "Robert Prcic",
    "party": "Liberal/Libéral",
    "votes": 14671,
    "votePercentage": 26.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48009,
    "candidate": "Bruce Kaufman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4836,
    "votePercentage": 8.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48009,
    "candidate": "Laurie Scheer",
    "party": "Green Party/Parti Vert",
    "votes": 1384,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48009,
    "candidate": "Edward Gao",
    "party": "Libertarian/Libertarien",
    "votes": 727,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48009,
    "candidate": "Faizan Butt",
    "party": "Democratic Advancement/Avancement de la Démocratie",
    "votes": 184,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48010,
    "candidate": "Pat Kelly",
    "party": "Conservative/Conservateur",
    "votes": 38229,
    "votePercentage": 60.4,
    "majority": 18191,
    "majorityPercentage": 28.7
  },
  {
    "index": 48010,
    "candidate": "Nirmala Naidoo",
    "party": "Liberal/Libéral",
    "votes": 20038,
    "votePercentage": 31.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48010,
    "candidate": "Stephanie Kot",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3665,
    "votePercentage": 5.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48010,
    "candidate": "Catriona Wright",
    "party": "Green Party/Parti Vert",
    "votes": 1360,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48011,
    "candidate": "Tom Kmiec",
    "party": "Conservative/Conservateur",
    "votes": 43706,
    "votePercentage": 65.9,
    "majority": 27327,
    "majorityPercentage": 41.2
  },
  {
    "index": 48011,
    "candidate": "Jerome James",
    "party": "Liberal/Libéral",
    "votes": 16379,
    "votePercentage": 24.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48011,
    "candidate": "Dany Allard",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4532,
    "votePercentage": 6.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48011,
    "candidate": "Graham MacKenzie",
    "party": "Green Party/Parti Vert",
    "votes": 1734,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48012,
    "candidate": "Ron Liepert",
    "party": "Conservative/Conservateur",
    "votes": 37858,
    "votePercentage": 60.6,
    "majority": 18750,
    "majorityPercentage": 30
  },
  {
    "index": 48012,
    "candidate": "Kerry Cundal",
    "party": "Liberal/Libéral",
    "votes": 19108,
    "votePercentage": 30.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48012,
    "candidate": "Khalis Ahmed",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3128,
    "votePercentage": 5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48012,
    "candidate": "Taryn Knorren",
    "party": "Green Party/Parti Vert",
    "votes": 1586,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48012,
    "candidate": "Tim Moen",
    "party": "Libertarian/Libertarien",
    "votes": 679,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48012,
    "candidate": "Jesse Rau",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 160,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Darshan Singh Kang",
    "party": "Liberal/Libéral",
    "votes": 20644,
    "votePercentage": 45.9,
    "majority": 2759,
    "majorityPercentage": 6.1
  },
  {
    "index": 48013,
    "candidate": "Devinder Shory **",
    "party": "Conservative/Conservateur",
    "votes": 17885,
    "votePercentage": 39.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Sahajvir Singh",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3605,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Najeeb Butt",
    "party": "PC Party/Parti PC",
    "votes": 957,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Ed Reddy",
    "party": "Green Party/Parti Vert",
    "votes": 846,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Stephen Garvey",
    "party": "Democratic Advancement/Avancement de la Démocratie",
    "votes": 786,
    "votePercentage": 1.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Joseph Young",
    "party": "Independent/Indépendant(e)",
    "votes": 182,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48013,
    "candidate": "Daniel Blanchard",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 88,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48014,
    "candidate": "Randy Boissonnault",
    "party": "Liberal/Libéral",
    "votes": 19902,
    "votePercentage": 37.2,
    "majority": 1199,
    "majorityPercentage": 2.2
  },
  {
    "index": 48014,
    "candidate": "James Cumming",
    "party": "Conservative/Conservateur",
    "votes": 18703,
    "votePercentage": 35,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48014,
    "candidate": "Gil McGowan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13084,
    "votePercentage": 24.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48014,
    "candidate": "David Parker",
    "party": "Green Party/Parti Vert",
    "votes": 1403,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48014,
    "candidate": "Steven Stauffer",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 257,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48014,
    "candidate": "Kat Yaki",
    "party": "Independent/Indépendant(e)",
    "votes": 163,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Kerry Diotte",
    "party": "Conservative/Conservateur",
    "votes": 19157,
    "votePercentage": 40,
    "majority": 2848,
    "majorityPercentage": 5.9
  },
  {
    "index": 48015,
    "candidate": "Janis Irwin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16309,
    "votePercentage": 34,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Brian Gold",
    "party": "Liberal/Libéral",
    "votes": 10397,
    "votePercentage": 21.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Heather Workman",
    "party": "Green Party/Parti Vert",
    "votes": 1129,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Maryna Goncharenko",
    "party": "Libertarian/Libertarien",
    "votes": 415,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Linda Northcott",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 279,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Bun Bun Thompson",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 144,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48015,
    "candidate": "Mary Joyce",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 112,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48016,
    "candidate": "Ziad Aboultaif",
    "party": "Conservative/Conservateur",
    "votes": 22166,
    "votePercentage": 45.2,
    "majority": 8657,
    "majorityPercentage": 17.7
  },
  {
    "index": 48016,
    "candidate": "Sukhdev Aujla",
    "party": "Liberal/Libéral",
    "votes": 13509,
    "votePercentage": 27.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48016,
    "candidate": "Aaron Paquette",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11582,
    "votePercentage": 23.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48016,
    "candidate": "Chris Vallee",
    "party": "Green Party/Parti Vert",
    "votes": 1079,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48016,
    "candidate": "Mebreate Deres",
    "party": "Independent/Indépendant(e)",
    "votes": 540,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48016,
    "candidate": "André Vachon",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 125,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Amarjeet Sohi",
    "party": "Liberal/Libéral",
    "votes": 20423,
    "votePercentage": 41.2,
    "majority": 92,
    "majorityPercentage": 0.2
  },
  {
    "index": 48017,
    "candidate": "Tim Uppal **",
    "party": "Conservative/Conservateur",
    "votes": 20331,
    "votePercentage": 41.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Jasvir Deol",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6330,
    "votePercentage": 12.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Ralph McLean",
    "party": "Green Party/Parti Vert",
    "votes": 1096,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Colin Stubbs",
    "party": "Independent/Indépendant(e)",
    "votes": 560,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Allen K.W. Paley",
    "party": "Libertarian/Libertarien",
    "votes": 396,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Peter Downing",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 285,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48017,
    "candidate": "Naomi Rankin",
    "party": "Communist/Communiste",
    "votes": 96,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48018,
    "candidate": "Matt Jeneroux",
    "party": "Conservative/Conservateur",
    "votes": 28805,
    "votePercentage": 49.9,
    "majority": 11377,
    "majorityPercentage": 19.7
  },
  {
    "index": 48018,
    "candidate": "Tariq Chaudary",
    "party": "Liberal/Libéral",
    "votes": 17428,
    "votePercentage": 30.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48018,
    "candidate": "Brian Fleck",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9846,
    "votePercentage": 17.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48018,
    "candidate": "Valerie Kennedy",
    "party": "Green Party/Parti Vert",
    "votes": 1275,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48018,
    "candidate": "Steven Lack",
    "party": "Libertarian/Libertarien",
    "votes": 386,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Linda Duncan **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 24446,
    "votePercentage": 44,
    "majority": 7051,
    "majorityPercentage": 12.7
  },
  {
    "index": 48019,
    "candidate": "Len Thom",
    "party": "Conservative/Conservateur",
    "votes": 17395,
    "votePercentage": 31.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Eleanor Olszewski",
    "party": "Liberal/Libéral",
    "votes": 11524,
    "votePercentage": 20.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Jacob K. Binnema",
    "party": "Green Party/Parti Vert",
    "votes": 1278,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Malcolm Stinson",
    "party": "Libertarian/Libertarien",
    "votes": 311,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Ryan Bromsgrove",
    "party": "Pirate/Pirate",
    "votes": 201,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Donovan Eckstrom",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 133,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Chris Jones",
    "party": "Independent/Indépendant(e)",
    "votes": 116,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Andrew Schurman",
    "party": "Independent/Indépendant(e)",
    "votes": 107,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48019,
    "candidate": "Dougal MacDonald",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 93,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48020,
    "candidate": "Kelly McCauley",
    "party": "Conservative/Conservateur",
    "votes": 26370,
    "votePercentage": 49.3,
    "majority": 7721,
    "majorityPercentage": 14.4
  },
  {
    "index": 48020,
    "candidate": "Karen Leibovici",
    "party": "Liberal/Libéral",
    "votes": 18649,
    "votePercentage": 34.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48020,
    "candidate": "Heather MacKenzie",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6955,
    "votePercentage": 13,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48020,
    "candidate": "Pamela Leslie Bryan",
    "party": "Green Party/Parti Vert",
    "votes": 1037,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48020,
    "candidate": "Alexander Dussault",
    "party": "Libertarian/Libertarien",
    "votes": 341,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48020,
    "candidate": "Peggy Morton",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 105,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48021,
    "candidate": "Mike Lake **",
    "party": "Conservative/Conservateur",
    "votes": 44949,
    "votePercentage": 65.8,
    "majority": 30289,
    "majorityPercentage": 44.3
  },
  {
    "index": 48021,
    "candidate": "Jacqueline Biollo",
    "party": "Liberal/Libéral",
    "votes": 14660,
    "votePercentage": 21.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48021,
    "candidate": "Fritz K. Bitz",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6645,
    "votePercentage": 9.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48021,
    "candidate": "Joy-Ann Hut",
    "party": "Green Party/Parti Vert",
    "votes": 1595,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48021,
    "candidate": "Brayden Whitlock",
    "party": "Libertarian/Libertarien",
    "votes": 495,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48022,
    "candidate": "John Barlow **",
    "party": "Conservative/Conservateur",
    "votes": 46166,
    "votePercentage": 75.7,
    "majority": 38017,
    "majorityPercentage": 62.3
  },
  {
    "index": 48022,
    "candidate": "Tanya MacPherson",
    "party": "Liberal/Libéral",
    "votes": 8149,
    "votePercentage": 13.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48022,
    "candidate": "Alison Thompson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3919,
    "votePercentage": 6.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48022,
    "candidate": "Romy S. Tittel",
    "party": "Green Party/Parti Vert",
    "votes": 1983,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48022,
    "candidate": "Cory Morgan",
    "party": "Libertarian/Libertarien",
    "votes": 424,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48022,
    "candidate": "Marc Slingerland",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 345,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48023,
    "candidate": "David Yurdiga **",
    "party": "Conservative/Conservateur",
    "votes": 28625,
    "votePercentage": 60.6,
    "majority": 15222,
    "majorityPercentage": 32.2
  },
  {
    "index": 48023,
    "candidate": "Kyle Harrietha",
    "party": "Liberal/Libéral",
    "votes": 13403,
    "votePercentage": 28.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48023,
    "candidate": "Melody Lepine",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3663,
    "votePercentage": 7.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48023,
    "candidate": "Brian Deheer",
    "party": "Green Party/Parti Vert",
    "votes": 743,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48023,
    "candidate": "Scott Berry",
    "party": "Libertarian/Libertarien",
    "votes": 552,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48023,
    "candidate": "Roelof Janssen",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 280,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48024,
    "candidate": "Chris Warkentin **",
    "party": "Conservative/Conservateur",
    "votes": 38895,
    "votePercentage": 72.9,
    "majority": 31076,
    "majorityPercentage": 58.3
  },
  {
    "index": 48024,
    "candidate": "Reagan Johnston",
    "party": "Liberal/Libéral",
    "votes": 7819,
    "votePercentage": 14.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48024,
    "candidate": "Saba Mossagizi",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4343,
    "votePercentage": 8.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48024,
    "candidate": "James David Friesen",
    "party": "Green Party/Parti Vert",
    "votes": 1673,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48024,
    "candidate": "Dylan Thompson",
    "party": "Libertarian/Libertarien",
    "votes": 613,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48025,
    "candidate": "Shannon Stubbs",
    "party": "Conservative/Conservateur",
    "votes": 39882,
    "votePercentage": 72.8,
    "majority": 32382,
    "majorityPercentage": 59.1
  },
  {
    "index": 48025,
    "candidate": "Garry Parenteau",
    "party": "Liberal/Libéral",
    "votes": 7500,
    "votePercentage": 13.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48025,
    "candidate": "Duane Zaraska",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5513,
    "votePercentage": 10.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48025,
    "candidate": "Danielle Montgomery",
    "party": "Green Party/Parti Vert",
    "votes": 1283,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48025,
    "candidate": "Robert George McFadzean",
    "party": "Libertarian/Libertarien",
    "votes": 601,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48026,
    "candidate": "Rachael Harder",
    "party": "Conservative/Conservateur",
    "votes": 32321,
    "votePercentage": 56.8,
    "majority": 20647,
    "majorityPercentage": 36.3
  },
  {
    "index": 48026,
    "candidate": "Cheryl Meheden",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11674,
    "votePercentage": 20.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48026,
    "candidate": "Mike Pyne",
    "party": "Liberal/Libéral",
    "votes": 10532,
    "votePercentage": 18.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48026,
    "candidate": "Kas MacMillan",
    "party": "Green Party/Parti Vert",
    "votes": 1461,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48026,
    "candidate": "Geoffrey Capp",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 746,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48026,
    "candidate": "Solly Krygier-Paine",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 209,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Jim Hillyer **",
    "party": "Conservative/Conservateur",
    "votes": 34849,
    "votePercentage": 68.8,
    "majority": 25764,
    "majorityPercentage": 50.9
  },
  {
    "index": 48027,
    "candidate": "Glen Allan",
    "party": "Liberal/Libéral",
    "votes": 9085,
    "votePercentage": 17.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Erin Weir",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4897,
    "votePercentage": 9.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Brent Smith",
    "party": "Green Party/Parti Vert",
    "votes": 1319,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "John Clayton Turner",
    "party": "Independent/Indépendant(e)",
    "votes": 500,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48028,
    "candidate": "Arnold Viersen",
    "party": "Conservative/Conservateur",
    "votes": 34342,
    "votePercentage": 69.4,
    "majority": 27215,
    "majorityPercentage": 55
  },
  {
    "index": 48028,
    "candidate": "Cameron Alexis",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7127,
    "votePercentage": 14.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48028,
    "candidate": "Chris Brown",
    "party": "Liberal/Libéral",
    "votes": 6360,
    "votePercentage": 12.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48028,
    "candidate": "Sabrina Lee Levac",
    "party": "Green Party/Parti Vert",
    "votes": 1247,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48028,
    "candidate": "Jeremy Sergeew",
    "party": "Libertarian/Libertarien",
    "votes": 443,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48030,
    "candidate": "Blaine Calkins **",
    "party": "Conservative/Conservateur",
    "votes": 43599,
    "votePercentage": 70.7,
    "majority": 34364,
    "majorityPercentage": 55.7
  },
  {
    "index": 48030,
    "candidate": "Jeff Rock",
    "party": "Liberal/Libéral",
    "votes": 9235,
    "votePercentage": 15,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48030,
    "candidate": "Doug Hart",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7055,
    "votePercentage": 11.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48030,
    "candidate": "Les Kuzyk",
    "party": "Green Party/Parti Vert",
    "votes": 1773,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48029,
    "candidate": "Earl Dreeshen **",
    "party": "Conservative/Conservateur",
    "votes": 46245,
    "votePercentage": 74.3,
    "majority": 37889,
    "majorityPercentage": 60.9
  },
  {
    "index": 48029,
    "candidate": "Chandra Lescia Kastern",
    "party": "Liberal/Libéral",
    "votes": 8356,
    "votePercentage": 13.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48029,
    "candidate": "Paul Harris",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5233,
    "votePercentage": 8.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48029,
    "candidate": "Simon Oleny",
    "party": "Green Party/Parti Vert",
    "votes": 1621,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48029,
    "candidate": "James Walper",
    "party": "Libertarian/Libertarien",
    "votes": 445,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48029,
    "candidate": "Scott Milne",
    "party": "Pirate/Pirate",
    "votes": 312,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48031,
    "candidate": "Michael Cooper",
    "party": "Conservative/Conservateur",
    "votes": 26783,
    "votePercentage": 45.2,
    "majority": 13440,
    "majorityPercentage": 22.7
  },
  {
    "index": 48031,
    "candidate": "Beatrice Ghettuba",
    "party": "Liberal/Libéral",
    "votes": 13343,
    "votePercentage": 22.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48031,
    "candidate": "Brent Rathgeber **",
    "party": "Independent/Indépendant(e)",
    "votes": 11652,
    "votePercentage": 19.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48031,
    "candidate": "Darlene Malayko",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6609,
    "votePercentage": 11.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48031,
    "candidate": "Andrea Oldham",
    "party": "Green Party/Parti Vert",
    "votes": 821,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48032,
    "candidate": "Garnett Genuis",
    "party": "Conservative/Conservateur",
    "votes": 42642,
    "votePercentage": 63.9,
    "majority": 29027,
    "majorityPercentage": 43.5
  },
  {
    "index": 48032,
    "candidate": "Rod Frank",
    "party": "Liberal/Libéral",
    "votes": 13615,
    "votePercentage": 20.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48032,
    "candidate": "Joanne Cave",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6540,
    "votePercentage": 9.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48032,
    "candidate": "Brandie Harrop",
    "party": "Green Party/Parti Vert",
    "votes": 1648,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48032,
    "candidate": "James Ford",
    "party": "Independent/Indépendant(e)",
    "votes": 1563,
    "votePercentage": 2.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48032,
    "candidate": "Stephen C. Burry",
    "party": "Libertarian/Libertarien",
    "votes": 678,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Rona Ambrose **",
    "party": "Conservative/Conservateur",
    "votes": 43220,
    "votePercentage": 70.2,
    "majority": 33634,
    "majorityPercentage": 54.7
  },
  {
    "index": 48033,
    "candidate": "Travis Dueck",
    "party": "Liberal/Libéral",
    "votes": 9586,
    "votePercentage": 15.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Guy Desforges",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6166,
    "votePercentage": 10,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Brendon Greene",
    "party": "Green Party/Parti Vert",
    "votes": 1875,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Ernest Chauvet",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 690,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48034,
    "candidate": "Jim Eglinski **",
    "party": "Conservative/Conservateur",
    "votes": 37950,
    "votePercentage": 72.3,
    "majority": 30483,
    "majorityPercentage": 58
  },
  {
    "index": 48034,
    "candidate": "Ryan Maguhn",
    "party": "Liberal/Libéral",
    "votes": 7467,
    "votePercentage": 14.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48034,
    "candidate": "Ken Kuzminski",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4753,
    "votePercentage": 9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48034,
    "candidate": "Sandra Wolf Lange",
    "party": "Green Party/Parti Vert",
    "votes": 1538,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48034,
    "candidate": "Cory Lystang",
    "party": "Libertarian/Libertarien",
    "votes": 817,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59001,
    "candidate": "Ed Fast **",
    "party": "Conservative/Conservateur",
    "votes": 23229,
    "votePercentage": 48.3,
    "majority": 7452,
    "majorityPercentage": 15.5
  },
  {
    "index": 59001,
    "candidate": "Peter Njenga",
    "party": "Liberal/Libéral",
    "votes": 15777,
    "votePercentage": 32.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59001,
    "candidate": "Jen Martel",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6593,
    "votePercentage": 13.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59001,
    "candidate": "Stephen Fowler",
    "party": "Green Party/Parti Vert",
    "votes": 2416,
    "votePercentage": 5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59001,
    "candidate": "David MacKay",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 109,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Terry Beech",
    "party": "Liberal/Libéral",
    "votes": 18938,
    "votePercentage": 36.1,
    "majority": 3401,
    "majorityPercentage": 6.5
  },
  {
    "index": 59002,
    "candidate": "Carol Baird Ellan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15537,
    "votePercentage": 29.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Mike Little",
    "party": "Conservative/Conservateur",
    "votes": 14612,
    "votePercentage": 27.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Lynne Quarmby",
    "party": "Green Party/Parti Vert",
    "votes": 2765,
    "votePercentage": 5.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Chris Tylor",
    "party": "Libertarian/Libertarien",
    "votes": 252,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Helen Hee Soon Chang",
    "party": "Independent/Indépendant(e)",
    "votes": 207,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Brent Jantzen",
    "party": "Communist/Communiste",
    "votes": 126,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59002,
    "candidate": "Brian Sproule",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 43,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Kennedy Stewart **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 16094,
    "votePercentage": 35.1,
    "majority": 547,
    "majorityPercentage": 1.2
  },
  {
    "index": 59003,
    "candidate": "Adam Pankratz",
    "party": "Liberal/Libéral",
    "votes": 15547,
    "votePercentage": 33.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Grace Seear",
    "party": "Conservative/Conservateur",
    "votes": 12441,
    "votePercentage": 27.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Wyatt Tessari",
    "party": "Green Party/Parti Vert",
    "votes": 1306,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Liz Jaluague",
    "party": "Libertarian/Libertarien",
    "votes": 499,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Todd Doherty",
    "party": "Conservative/Conservateur",
    "votes": 19688,
    "votePercentage": 36.6,
    "majority": 2767,
    "majorityPercentage": 5.1
  },
  {
    "index": 59004,
    "candidate": "Tracy Calogheros",
    "party": "Liberal/Libéral",
    "votes": 16921,
    "votePercentage": 31.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Trent Derrick",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 13879,
    "votePercentage": 25.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Richard Edward Jaques",
    "party": "Green Party/Parti Vert",
    "votes": 1860,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Sheldon Clare",
    "party": "Independent/Indépendant(e)",
    "votes": 657,
    "votePercentage": 1.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Gordon Campbell",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 402,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59004,
    "candidate": "Adam De Kroon",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 327,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59005,
    "candidate": "Dan Albas **",
    "party": "Conservative/Conservateur",
    "votes": 24517,
    "votePercentage": 39.6,
    "majority": 1458,
    "majorityPercentage": 2.4
  },
  {
    "index": 59005,
    "candidate": "Karley Scott",
    "party": "Liberal/Libéral",
    "votes": 23059,
    "votePercentage": 37.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59005,
    "candidate": "Angelique Wood",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11961,
    "votePercentage": 19.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59005,
    "candidate": "Robert Mellalieu",
    "party": "Green Party/Parti Vert",
    "votes": 2436,
    "votePercentage": 3.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59006,
    "candidate": "Mark Strahl **",
    "party": "Conservative/Conservateur",
    "votes": 21445,
    "votePercentage": 42.3,
    "majority": 4331,
    "majorityPercentage": 8.5
  },
  {
    "index": 59006,
    "candidate": "Louis De Jaeger",
    "party": "Liberal/Libéral",
    "votes": 17114,
    "votePercentage": 33.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59006,
    "candidate": "Seonaigh MacPherson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9218,
    "votePercentage": 18.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59006,
    "candidate": "Thomas Cheney",
    "party": "Green Party/Parti Vert",
    "votes": 2386,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59006,
    "candidate": "Alexander Johnson",
    "party": "Libertarian/Libertarien",
    "votes": 416,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59006,
    "candidate": "Dorothy-Jean O'Donnell",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 82,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59007,
    "candidate": "John Aldag",
    "party": "Liberal/Libéral",
    "votes": 24617,
    "votePercentage": 45.5,
    "majority": 5817,
    "majorityPercentage": 10.8
  },
  {
    "index": 59007,
    "candidate": "Dean Drysdale",
    "party": "Conservative/Conservateur",
    "votes": 18800,
    "votePercentage": 34.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59007,
    "candidate": "Rebecca Smith",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8463,
    "votePercentage": 15.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59007,
    "candidate": "Scott Anderson",
    "party": "Green Party/Parti Vert",
    "votes": 2195,
    "votePercentage": 4.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59008,
    "candidate": "Ron McKinnon",
    "party": "Liberal/Libéral",
    "votes": 19938,
    "votePercentage": 35.3,
    "majority": 1855,
    "majorityPercentage": 3.3
  },
  {
    "index": 59008,
    "candidate": "Douglas Horne",
    "party": "Conservative/Conservateur",
    "votes": 18083,
    "votePercentage": 32,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59008,
    "candidate": "Sara Norman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15400,
    "votePercentage": 27.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59008,
    "candidate": "Brad Nickason",
    "party": "Green Party/Parti Vert",
    "votes": 2076,
    "votePercentage": 3.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59008,
    "candidate": "Lewis Clarke Dahlby",
    "party": "Libertarian/Libertarien",
    "votes": 1014,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59009,
    "candidate": "Gord Johns",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 26582,
    "votePercentage": 38.1,
    "majority": 6868,
    "majorityPercentage": 9.8
  },
  {
    "index": 59009,
    "candidate": "John Duncan **",
    "party": "Conservative/Conservateur",
    "votes": 19714,
    "votePercentage": 28.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59009,
    "candidate": "Carrie Powell-Davidson",
    "party": "Liberal/Libéral",
    "votes": 15212,
    "votePercentage": 21.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59009,
    "candidate": "Glenn Sollitt",
    "party": "Green Party/Parti Vert",
    "votes": 8201,
    "votePercentage": 11.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59009,
    "candidate": "Barbara Biley",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 140,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59010,
    "candidate": "Alistair MacGregor",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 22200,
    "votePercentage": 35.9,
    "majority": 7515,
    "majorityPercentage": 12.2
  },
  {
    "index": 59010,
    "candidate": "Luke Krayenhoff",
    "party": "Liberal/Libéral",
    "votes": 14685,
    "votePercentage": 23.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59010,
    "candidate": "Martin Barker",
    "party": "Conservative/Conservateur",
    "votes": 14091,
    "votePercentage": 22.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59010,
    "candidate": "Fran Hunt-Jinnouchi",
    "party": "Green Party/Parti Vert",
    "votes": 10462,
    "votePercentage": 16.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59010,
    "candidate": "Alastair Haythornthwaite",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 340,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59011,
    "candidate": "Carla Qualtrough",
    "party": "Liberal/Libéral",
    "votes": 27355,
    "votePercentage": 49.1,
    "majority": 9100,
    "majorityPercentage": 16.3
  },
  {
    "index": 59011,
    "candidate": "Kerry-Lynne Findlay **",
    "party": "Conservative/Conservateur",
    "votes": 18255,
    "votePercentage": 32.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59011,
    "candidate": "Jeremy Leveque",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8311,
    "votePercentage": 14.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59011,
    "candidate": "Anthony Edward Devellano",
    "party": "Green Party/Parti Vert",
    "votes": 1768,
    "votePercentage": 3.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59026,
    "candidate": "Randall Garrison **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 23836,
    "votePercentage": 35,
    "majority": 5214,
    "majorityPercentage": 7.7
  },
  {
    "index": 59026,
    "candidate": "David Merner",
    "party": "Liberal/Libéral",
    "votes": 18622,
    "votePercentage": 27.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59026,
    "candidate": "Frances Litman",
    "party": "Green Party/Parti Vert",
    "votes": 13575,
    "votePercentage": 19.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59026,
    "candidate": "Shari Lukens",
    "party": "Conservative/Conservateur",
    "votes": 11912,
    "votePercentage": 17.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59026,
    "candidate": "Tyson Strandlund",
    "party": "Communist/Communiste",
    "votes": 136,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59012,
    "candidate": "Ken Hardie",
    "party": "Liberal/Libéral",
    "votes": 22871,
    "votePercentage": 46.9,
    "majority": 8596,
    "majorityPercentage": 17.6
  },
  {
    "index": 59012,
    "candidate": "Nina Grewal **",
    "party": "Conservative/Conservateur",
    "votes": 14275,
    "votePercentage": 29.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59012,
    "candidate": "Garry Begg",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 10463,
    "votePercentage": 21.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59012,
    "candidate": "Richard Hosein",
    "party": "Green Party/Parti Vert",
    "votes": 1154,
    "votePercentage": 2.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59013,
    "candidate": "Cathy McLeod **",
    "party": "Conservative/Conservateur",
    "votes": 24595,
    "votePercentage": 35.3,
    "majority": 3129,
    "majorityPercentage": 4.5
  },
  {
    "index": 59013,
    "candidate": "Bill Sundhu",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 21466,
    "votePercentage": 30.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59013,
    "candidate": "Steve Powrie",
    "party": "Liberal/Libéral",
    "votes": 21215,
    "votePercentage": 30.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59013,
    "candidate": "Matthew Greenwood",
    "party": "Green Party/Parti Vert",
    "votes": 2489,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59014,
    "candidate": "Stephen Fuhr",
    "party": "Liberal/Libéral",
    "votes": 29614,
    "votePercentage": 46.2,
    "majority": 4112,
    "majorityPercentage": 6.4
  },
  {
    "index": 59014,
    "candidate": "Ron Cannan **",
    "party": "Conservative/Conservateur",
    "votes": 25502,
    "votePercentage": 39.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59014,
    "candidate": "Norah Mary Bowman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9039,
    "votePercentage": 14.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59015,
    "candidate": "Wayne Stetski",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 23529,
    "votePercentage": 37.2,
    "majority": 282,
    "majorityPercentage": 0.4
  },
  {
    "index": 59015,
    "candidate": "David Wilks **",
    "party": "Conservative/Conservateur",
    "votes": 23247,
    "votePercentage": 36.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59015,
    "candidate": "Don Johnston",
    "party": "Liberal/Libéral",
    "votes": 12315,
    "votePercentage": 19.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59015,
    "candidate": "Bill Green",
    "party": "Green Party/Parti Vert",
    "votes": 4115,
    "votePercentage": 6.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59016,
    "candidate": "Mark Warawa **",
    "party": "Conservative/Conservateur",
    "votes": 27333,
    "votePercentage": 45.6,
    "majority": 5439,
    "majorityPercentage": 9.1
  },
  {
    "index": 59016,
    "candidate": "Leon Jensen",
    "party": "Liberal/Libéral",
    "votes": 21894,
    "votePercentage": 36.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59016,
    "candidate": "Margot Sangster",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 7490,
    "votePercentage": 12.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59016,
    "candidate": "Simmi Saminder Kaur Dhillon",
    "party": "Green Party/Parti Vert",
    "votes": 2644,
    "votePercentage": 4.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59016,
    "candidate": "Lauren Southern",
    "party": "Libertarian/Libertarien",
    "votes": 535,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59017,
    "candidate": "Jati Sidhu",
    "party": "Liberal/Libéral",
    "votes": 16625,
    "votePercentage": 37.2,
    "majority": 1038,
    "majorityPercentage": 2.3
  },
  {
    "index": 59017,
    "candidate": "Brad Vis",
    "party": "Conservative/Conservateur",
    "votes": 15587,
    "votePercentage": 34.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59017,
    "candidate": "Dennis Adamson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9174,
    "votePercentage": 20.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59017,
    "candidate": "Arthur Alexander Green",
    "party": "Green Party/Parti Vert",
    "votes": 2293,
    "votePercentage": 5.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59017,
    "candidate": "Wyatt Scott",
    "party": "Independent/Indépendant(e)",
    "votes": 914,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59017,
    "candidate": "Elaine Wismer",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 58,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Sheila Malcolmson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 23651,
    "votePercentage": 33.2,
    "majority": 6898,
    "majorityPercentage": 9.7
  },
  {
    "index": 59018,
    "candidate": "Tim Tessier",
    "party": "Liberal/Libéral",
    "votes": 16753,
    "votePercentage": 23.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Mark Allen MacDonald",
    "party": "Conservative/Conservateur",
    "votes": 16637,
    "votePercentage": 23.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Paul Manly",
    "party": "Green Party/Parti Vert",
    "votes": 14074,
    "votePercentage": 19.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Jack East",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 126,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59019,
    "candidate": "Peter Julian **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 22876,
    "votePercentage": 43.5,
    "majority": 7623,
    "majorityPercentage": 14.5
  },
  {
    "index": 59019,
    "candidate": "Sasha Ramnarine",
    "party": "Liberal/Libéral",
    "votes": 15253,
    "votePercentage": 29,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59019,
    "candidate": "Chloé Ellis",
    "party": "Conservative/Conservateur",
    "votes": 10512,
    "votePercentage": 20,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59019,
    "candidate": "Kyle Routledge",
    "party": "Green Party/Parti Vert",
    "votes": 2487,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59019,
    "candidate": "Rex Brocki",
    "party": "Libertarian/Libertarien",
    "votes": 1368,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59019,
    "candidate": "Joseph Theriault",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 146,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59037,
    "candidate": "Rachel Blaney",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 24340,
    "votePercentage": 40.2,
    "majority": 8500,
    "majorityPercentage": 14
  },
  {
    "index": 59037,
    "candidate": "Laura Smith",
    "party": "Conservative/Conservateur",
    "votes": 15840,
    "votePercentage": 26.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59037,
    "candidate": "Peter Schwarzhoff",
    "party": "Liberal/Libéral",
    "votes": 15416,
    "votePercentage": 25.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59037,
    "candidate": "Brenda Sayers",
    "party": "Green Party/Parti Vert",
    "votes": 4940,
    "votePercentage": 8.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59020,
    "candidate": "Mel Arnold",
    "party": "Conservative/Conservateur",
    "votes": 27490,
    "votePercentage": 39.3,
    "majority": 6541,
    "majorityPercentage": 9.4
  },
  {
    "index": 59020,
    "candidate": "Cindy Derkaz",
    "party": "Liberal/Libéral",
    "votes": 20949,
    "votePercentage": 29.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59020,
    "candidate": "Jacqui Gingras",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 17907,
    "votePercentage": 25.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59020,
    "candidate": "Chris George",
    "party": "Green Party/Parti Vert",
    "votes": 3608,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59021,
    "candidate": "Jonathan Wilkinson",
    "party": "Liberal/Libéral",
    "votes": 36458,
    "votePercentage": 56.7,
    "majority": 19157,
    "majorityPercentage": 29.8
  },
  {
    "index": 59021,
    "candidate": "Andrew Saxton **",
    "party": "Conservative/Conservateur",
    "votes": 17301,
    "votePercentage": 26.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59021,
    "candidate": "Claire Martin",
    "party": "Green Party/Parti Vert",
    "votes": 5350,
    "votePercentage": 8.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59021,
    "candidate": "Carleen Thomas",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5015,
    "votePercentage": 7.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59021,
    "candidate": "Ismet Yetisen",
    "party": "Libertarian/Libertarien",
    "votes": 136,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59021,
    "candidate": "Payam Azad",
    "party": "Independent/Indépendant(e)",
    "votes": 94,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59022,
    "candidate": "Dan Ruimy",
    "party": "Liberal/Libéral",
    "votes": 17673,
    "votePercentage": 33.9,
    "majority": 1300,
    "majorityPercentage": 2.5
  },
  {
    "index": 59022,
    "candidate": "Mike Murray",
    "party": "Conservative/Conservateur",
    "votes": 16373,
    "votePercentage": 31.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59022,
    "candidate": "Bob D'Eith",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 15450,
    "votePercentage": 29.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59022,
    "candidate": "Peter Tam",
    "party": "Green Party/Parti Vert",
    "votes": 2202,
    "votePercentage": 4.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59022,
    "candidate": "Steve Ranta",
    "party": "Independent/Indépendant(e)",
    "votes": 452,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59023,
    "candidate": "Fin Donnelly **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 19706,
    "votePercentage": 36,
    "majority": 2818,
    "majorityPercentage": 5.2
  },
  {
    "index": 59023,
    "candidate": "Jessie Adcock",
    "party": "Liberal/Libéral",
    "votes": 16888,
    "votePercentage": 30.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59023,
    "candidate": "Tim Laidler",
    "party": "Conservative/Conservateur",
    "votes": 16112,
    "votePercentage": 29.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59023,
    "candidate": "Marcus Madsen",
    "party": "Green Party/Parti Vert",
    "votes": 1878,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59023,
    "candidate": "Roland Verrier",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 83,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59024,
    "candidate": "Bob Zimmer **",
    "party": "Conservative/Conservateur",
    "votes": 27237,
    "votePercentage": 52.5,
    "majority": 14324,
    "majorityPercentage": 27.6
  },
  {
    "index": 59024,
    "candidate": "Matt Shaw",
    "party": "Liberal/Libéral",
    "votes": 12913,
    "votePercentage": 24.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59024,
    "candidate": "Kathi Dickie",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8014,
    "votePercentage": 15.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59024,
    "candidate": "Elizabeth Biggar",
    "party": "Green Party/Parti Vert",
    "votes": 2672,
    "votePercentage": 5.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59024,
    "candidate": "W. Todd Keller",
    "party": "Libertarian/Libertarien",
    "votes": 559,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59024,
    "candidate": "Barry Blackman",
    "party": "PC Party/Parti PC",
    "votes": 464,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59025,
    "candidate": "Alice Wong **",
    "party": "Conservative/Conservateur",
    "votes": 17622,
    "votePercentage": 44.2,
    "majority": 1136,
    "majorityPercentage": 2.8
  },
  {
    "index": 59025,
    "candidate": "Lawrence Woo",
    "party": "Liberal/Libéral",
    "votes": 16486,
    "votePercentage": 41.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59025,
    "candidate": "Jack Trovato",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4602,
    "votePercentage": 11.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59025,
    "candidate": "Vincent Chiu",
    "party": "Green Party/Parti Vert",
    "votes": 1152,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59027,
    "candidate": "Elizabeth May **",
    "party": "Green Party/Parti Vert",
    "votes": 37070,
    "votePercentage": 54.4,
    "majority": 23810,
    "majorityPercentage": 34.9
  },
  {
    "index": 59027,
    "candidate": "Robert Boyd",
    "party": "Conservative/Conservateur",
    "votes": 13260,
    "votePercentage": 19.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59027,
    "candidate": "Tim Kane",
    "party": "Liberal/Libéral",
    "votes": 11380,
    "votePercentage": 16.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59027,
    "candidate": "Alicia Cormier",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6181,
    "votePercentage": 9.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59027,
    "candidate": "Meghan Jess Porter",
    "party": "Libertarian/Libertarien",
    "votes": 249,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59028,
    "candidate": "Nathan Cullen **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 22531,
    "votePercentage": 51.1,
    "majority": 11595,
    "majorityPercentage": 26.3
  },
  {
    "index": 59028,
    "candidate": "Tyler Nesbitt",
    "party": "Conservative/Conservateur",
    "votes": 10936,
    "votePercentage": 24.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59028,
    "candidate": "Brad Layton",
    "party": "Liberal/Libéral",
    "votes": 8257,
    "votePercentage": 18.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59028,
    "candidate": "Jeannie Parnell",
    "party": "Green Party/Parti Vert",
    "votes": 1605,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59028,
    "candidate": "Don Spratt",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 780,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59029,
    "candidate": "Richard Cannings",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 24823,
    "votePercentage": 37.3,
    "majority": 4952,
    "majorityPercentage": 7.4
  },
  {
    "index": 59029,
    "candidate": "Marshall Neufeld",
    "party": "Conservative/Conservateur",
    "votes": 19871,
    "votePercentage": 29.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59029,
    "candidate": "Connie Denesiuk",
    "party": "Liberal/Libéral",
    "votes": 18732,
    "votePercentage": 28.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59029,
    "candidate": "Samantha Troy",
    "party": "Green Party/Parti Vert",
    "votes": 2792,
    "votePercentage": 4.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59029,
    "candidate": "Brian Gray",
    "party": "Independent/Indépendant(e)",
    "votes": 376,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Dianne Lynn Watts",
    "party": "Conservative/Conservateur",
    "votes": 24934,
    "votePercentage": 44,
    "majority": 1439,
    "majorityPercentage": 2.5
  },
  {
    "index": 59030,
    "candidate": "Judy Higginbotham",
    "party": "Liberal/Libéral",
    "votes": 23495,
    "votePercentage": 41.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Pixie Hobby",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5895,
    "votePercentage": 10.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Larry Colero",
    "party": "Green Party/Parti Vert",
    "votes": 1938,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Bonnie Hu",
    "party": "Libertarian/Libertarien",
    "votes": 261,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Brian Marlatt",
    "party": "PC Party/Parti PC",
    "votes": 108,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59031,
    "candidate": "Joe Peschisolido",
    "party": "Liberal/Libéral",
    "votes": 19486,
    "votePercentage": 45.1,
    "majority": 2856,
    "majorityPercentage": 6.6
  },
  {
    "index": 59031,
    "candidate": "Kenny Chiu",
    "party": "Conservative/Conservateur",
    "votes": 16630,
    "votePercentage": 38.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59031,
    "candidate": "Scott Stewart",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5248,
    "votePercentage": 12.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59031,
    "candidate": "Laura-Leah Shaw",
    "party": "Green Party/Parti Vert",
    "votes": 1587,
    "votePercentage": 3.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59031,
    "candidate": "Matthew Swanston",
    "party": "Libertarian/Libertarien",
    "votes": 274,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59032,
    "candidate": "Randeep Sarai",
    "party": "Liberal/Libéral",
    "votes": 19471,
    "votePercentage": 45.1,
    "majority": 6479,
    "majorityPercentage": 15
  },
  {
    "index": 59032,
    "candidate": "Jasbir Sandhu **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 12992,
    "votePercentage": 30.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59032,
    "candidate": "Sucha Thind",
    "party": "Conservative/Conservateur",
    "votes": 8556,
    "votePercentage": 19.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59032,
    "candidate": "Jeremiah Deneault",
    "party": "Green Party/Parti Vert",
    "votes": 1493,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59032,
    "candidate": "Kevin Pielak",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 553,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59032,
    "candidate": "Iqbal Kahlon",
    "party": "Communist/Communiste",
    "votes": 133,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59033,
    "candidate": "Sukh Dhaliwal",
    "party": "Liberal/Libéral",
    "votes": 24869,
    "votePercentage": 56,
    "majority": 13267,
    "majorityPercentage": 29.9
  },
  {
    "index": 59033,
    "candidate": "Jinny Sims **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11602,
    "votePercentage": 26.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59033,
    "candidate": "Harpreet Singh",
    "party": "Conservative/Conservateur",
    "votes": 6978,
    "votePercentage": 15.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59033,
    "candidate": "Pamela Sangha",
    "party": "Green Party/Parti Vert",
    "votes": 975,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59034,
    "candidate": "Hedy Fry **",
    "party": "Liberal/Libéral",
    "votes": 32554,
    "votePercentage": 56.1,
    "majority": 20936,
    "majorityPercentage": 36.1
  },
  {
    "index": 59034,
    "candidate": "Constance Barnes",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 11618,
    "votePercentage": 20,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59034,
    "candidate": "Elaine Allan",
    "party": "Conservative/Conservateur",
    "votes": 9818,
    "votePercentage": 16.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59034,
    "candidate": "Lisa Barrett",
    "party": "Green Party/Parti Vert",
    "votes": 3370,
    "votePercentage": 5.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59034,
    "candidate": "John Clarke",
    "party": "Libertarian/Libertarien",
    "votes": 614,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59034,
    "candidate": "Michael Hill",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 74,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "Jenny Kwan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 29316,
    "votePercentage": 49.9,
    "majority": 12784,
    "majorityPercentage": 21.8
  },
  {
    "index": 59035,
    "candidate": "Edward Wong",
    "party": "Liberal/Libéral",
    "votes": 16532,
    "votePercentage": 28.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "James Low",
    "party": "Conservative/Conservateur",
    "votes": 6322,
    "votePercentage": 10.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "Wes Regan",
    "party": "Green Party/Parti Vert",
    "votes": 5395,
    "votePercentage": 9.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "Peter Marcus",
    "party": "Communist/Communiste",
    "votes": 525,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "D. Alex Millar",
    "party": "Independent/Indépendant(e)",
    "votes": 216,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "Anne Jamieson",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 214,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59035,
    "candidate": "Shawn Vulliez",
    "party": "Pirate/Pirate",
    "votes": 188,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59036,
    "candidate": "Jody Wilson-Raybould",
    "party": "Liberal/Libéral",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2019-04-02",
    "votes": 23643,
    "votePercentage": 43.9,
    "majority": 9181,
    "majorityPercentage": 17.1
  },
  {
    "index": 59036,
    "candidate": "Mira Oreck",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 14462,
    "votePercentage": 26.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59036,
    "candidate": "Erinn Broshko",
    "party": "Conservative/Conservateur",
    "votes": 14028,
    "votePercentage": 26.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59036,
    "candidate": "Michael Barkusky",
    "party": "Green Party/Parti Vert",
    "votes": 1691,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Don Davies **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 20763,
    "votePercentage": 45.7,
    "majority": 8138,
    "majorityPercentage": 17.9
  },
  {
    "index": 59038,
    "candidate": "Steven Kou",
    "party": "Liberal/Libéral",
    "votes": 12625,
    "votePercentage": 27.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Jojo Quimpo",
    "party": "Conservative/Conservateur",
    "votes": 9538,
    "votePercentage": 21,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Catherine Moore",
    "party": "Green Party/Parti Vert",
    "votes": 1476,
    "votePercentage": 3.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Matt Kadioglu",
    "party": "Libertarian/Libertarien",
    "votes": 468,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Kimball Cariou",
    "party": "Communist/Communiste",
    "votes": 445,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59038,
    "candidate": "Donna Petersen",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 81,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Joyce Murray **",
    "party": "Liberal/Libéral",
    "votes": 31102,
    "votePercentage": 58.7,
    "majority": 17419,
    "majorityPercentage": 32.9
  },
  {
    "index": 59039,
    "candidate": "Blair Lockhart",
    "party": "Conservative/Conservateur",
    "votes": 13683,
    "votePercentage": 25.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Scott Andrews",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5748,
    "votePercentage": 10.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Kris Constable",
    "party": "Green Party/Parti Vert",
    "votes": 2229,
    "votePercentage": 4.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Trevor Clinton Walper",
    "party": "Pirate/Pirate",
    "votes": 86,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Marc Boyer",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 65,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59039,
    "candidate": "Jean-François Caron",
    "party": "Independent/Indépendant(e)",
    "votes": 59,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59040,
    "candidate": "Harjit S. Sajjan",
    "party": "Liberal/Libéral",
    "votes": 21773,
    "votePercentage": 48.8,
    "majority": 6658,
    "majorityPercentage": 14.9
  },
  {
    "index": 59040,
    "candidate": "Wai Young **",
    "party": "Conservative/Conservateur",
    "votes": 15115,
    "votePercentage": 33.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59040,
    "candidate": "Amandeep Nijjar",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6230,
    "votePercentage": 14,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59040,
    "candidate": "Elain Ng",
    "party": "Green Party/Parti Vert",
    "votes": 1149,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59040,
    "candidate": "Charles Boylan",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 178,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59040,
    "candidate": "Raj Gupta",
    "party": "PC Party/Parti PC",
    "votes": 166,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "Murray Rankin **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 30397,
    "votePercentage": 42.3,
    "majority": 6731,
    "majorityPercentage": 9.4
  },
  {
    "index": 59041,
    "candidate": "Jo-Ann Roberts",
    "party": "Green Party/Parti Vert",
    "votes": 23666,
    "votePercentage": 32.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "Cheryl Thomas",
    "party": "Liberal/Libéral",
    "votes": 8489,
    "votePercentage": 11.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "John Rizzuti",
    "party": "Conservative/Conservateur",
    "votes": 8480,
    "votePercentage": 11.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "Art Lowe",
    "party": "Libertarian/Libertarien",
    "votes": 539,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "Jordan Reichert",
    "party": "Animal Alliance/Environment Voters/Animal Alliance/Environment Voters",
    "votes": 200,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59041,
    "candidate": "Saul Andersen",
    "party": "Independent/Indépendant(e)",
    "votes": 124,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59042,
    "candidate": "Pam Goldsmith-Jones",
    "party": "Liberal/Libéral",
    "votes": 36300,
    "votePercentage": 54.6,
    "majority": 18889,
    "majorityPercentage": 28.4
  },
  {
    "index": 59042,
    "candidate": "John Weston **",
    "party": "Conservative/Conservateur",
    "votes": 17411,
    "votePercentage": 26.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59042,
    "candidate": "Larry Koopman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 6554,
    "votePercentage": 9.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59042,
    "candidate": "Ken Melamed",
    "party": "Green Party/Parti Vert",
    "votes": 5907,
    "votePercentage": 8.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59042,
    "candidate": "Robin Kehler",
    "party": "Radical Marijuana/Radical Marijuana",
    "votes": 180,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59042,
    "candidate": "Carol-Lee Chapman",
    "party": "Marxist-Leninist/Marxiste-Léniniste",
    "votes": 106,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 60001,
    "candidate": "Larry Bagnell",
    "party": "Liberal/Libéral",
    "votes": 10887,
    "votePercentage": 53.7,
    "majority": 5959,
    "majorityPercentage": 29.4
  },
  {
    "index": 60001,
    "candidate": "Ryan Leef **",
    "party": "Conservative/Conservateur",
    "votes": 4928,
    "votePercentage": 24.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 60001,
    "candidate": "Melissa Atkinson",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3943,
    "votePercentage": 19.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 60001,
    "candidate": "Frank de Jong",
    "party": "Green Party/Parti Vert",
    "votes": 533,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 61001,
    "candidate": "Michael McLeod",
    "party": "Liberal/Libéral",
    "votes": 9172,
    "votePercentage": 48.3,
    "majority": 3389,
    "majorityPercentage": 17.9
  },
  {
    "index": 61001,
    "candidate": "Dennis Fraser Bevington **",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 5783,
    "votePercentage": 30.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 61001,
    "candidate": "Floyd Roland",
    "party": "Conservative/Conservateur",
    "votes": 3481,
    "votePercentage": 18.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 61001,
    "candidate": "John Moore",
    "party": "Green Party/Parti Vert",
    "votes": 537,
    "votePercentage": 2.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 62001,
    "candidate": "Hunter Tootoo",
    "party": "Liberal/Libéral",
    "currentParty": "Independent/Indépendant(e)",
    "changedParty": "2016-05-31",
    "votes": 5619,
    "votePercentage": 47.1,
    "majority": 2448,
    "majorityPercentage": 20.5
  },
  {
    "index": 62001,
    "candidate": "Jack Iyerak Anawak",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 3171,
    "votePercentage": 26.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 62001,
    "candidate": "Leona Aglukkaq **",
    "party": "Conservative/Conservateur",
    "votes": 2956,
    "votePercentage": 24.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 62001,
    "candidate": "Spencer Rocchi",
    "party": "Green Party/Parti Vert",
    "votes": 182,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20161024 = [
  {
    "index": 48027,
    "candidate": "Glen Motz",
    "party": "Conservative/Conservateur",
    "votes": 23932,
    "votePercentage": 69.9,
    "majority": 15155,
    "majorityPercentage": 44.2
  },
  {
    "index": 48027,
    "candidate": "Stan Sakamoto",
    "party": "Liberal/Libéral",
    "votes": 8777,
    "votePercentage": 25.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Rod Taylor",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 703,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Beverly Ann Waege",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 353,
    "votePercentage": 1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Sheldon W Johnston",
    "party": "Libertarian/Libertarien",
    "votes": 285,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48027,
    "candidate": "Kayne Cooper",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 211,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20170403 = [
  {
    "index": 24068,
    "candidate": "Emmanuella Lambropoulos",
    "party": "Liberal/Libéral",
    "votes": 11461,
    "votePercentage": 59.1,
    "majority": 7677,
    "majorityPercentage": 39.6
  },
  {
    "index": 24068,
    "candidate": "Jimmy Yu",
    "party": "Conservative/Conservateur",
    "votes": 3784,
    "votePercentage": 19.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Daniel Green",
    "party": "Green Party/Parti Vert",
    "votes": 1548,
    "votePercentage": 8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Mathieu Auclair",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1511,
    "votePercentage": 7.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "William Fayad",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 951,
    "votePercentage": 4.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24068,
    "candidate": "Chinook Blais-Leduc",
    "party": "Rhinoceros/Rhinocéros",
    "votes": 129,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Mary Ng",
    "party": "Liberal/Libéral",
    "votes": 9881,
    "votePercentage": 51.4,
    "majority": 2380,
    "majorityPercentage": 12.4
  },
  {
    "index": 35055,
    "candidate": "Ragavan Paranchothy",
    "party": "Conservative/Conservateur",
    "votes": 7501,
    "votePercentage": 39,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Gregory Hines",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 671,
    "votePercentage": 3.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Dorian Baxter",
    "party": "PC Party/Parti PC",
    "votes": 566,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Caryn Bergmann",
    "party": "Green Party/Parti Vert",
    "votes": 426,
    "votePercentage": 2.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Brendan Thomas Reilly",
    "party": "Libertarian/Libertarien",
    "votes": 118,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35055,
    "candidate": "Above Znoneofthe",
    "party": "Independent/Indépendant(e)",
    "votes": 77,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Mona Fortier",
    "party": "Liberal/Libéral",
    "votes": 15195,
    "votePercentage": 51.3,
    "majority": 6638,
    "majorityPercentage": 22.4
  },
  {
    "index": 35078,
    "candidate": "Emilie Taman",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8557,
    "votePercentage": 28.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Adrian Paul Papara",
    "party": "Conservative/Conservateur",
    "votes": 4484,
    "votePercentage": 15.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Nira Dookeran",
    "party": "Green Party/Parti Vert",
    "votes": 999,
    "votePercentage": 3.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "John 'The Engineer' Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 147,
    "votePercentage": 0.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Damien Wilson",
    "party": "Libertarian/Libertarien",
    "votes": 122,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35078,
    "candidate": "Christina Wilson",
    "party": "Independent/Indépendant(e)",
    "votes": 99,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Bob Benzen",
    "party": "Conservative/Conservateur",
    "votes": 19383,
    "votePercentage": 71.5,
    "majority": 13494,
    "majorityPercentage": 49.8
  },
  {
    "index": 48007,
    "candidate": "Scott Forsyth",
    "party": "Liberal/Libéral",
    "votes": 5889,
    "votePercentage": 21.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Khalis Ahmed",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 785,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Taryn Knorren",
    "party": "Green Party/Parti Vert",
    "votes": 484,
    "votePercentage": 1.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Jeff Willerton",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 385,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Darcy Gerow",
    "party": "Libertarian/Libertarien",
    "votes": 114,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48007,
    "candidate": "Stephen J. Garvey",
    "party": "National Advancement/Avancement National",
    "votes": 76,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Stephanie Kusie",
    "party": "Conservative/Conservateur",
    "votes": 22454,
    "votePercentage": 77.2,
    "majority": 17504,
    "majorityPercentage": 60.2
  },
  {
    "index": 48008,
    "candidate": "Haley Brown",
    "party": "Liberal/Libéral",
    "votes": 4950,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Holly Heffernan",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 735,
    "votePercentage": 2.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Ryan Zedic",
    "party": "Green Party/Parti Vert",
    "votes": 605,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Larry R. Heather",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 251,
    "votePercentage": 0.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48008,
    "candidate": "Kulbir Singh Chawla",
    "party": "National Advancement/Avancement National",
    "votes": 73,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20171023 = [
  {
    "index": 24035,
    "candidate": "Richard Hébert",
    "party": "Liberal/Libéral",
    "votes": 13442,
    "votePercentage": 38.6,
    "majority": 4732,
    "majorityPercentage": 13.6
  },
  {
    "index": 24035,
    "candidate": "Rémy Leclerc",
    "party": "Conservative/Conservateur",
    "votes": 8710,
    "votePercentage": 25,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Marc Maltais",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 8141,
    "votePercentage": 23.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Gisèle Dallaire",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4079,
    "votePercentage": 11.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24035,
    "candidate": "Yves Laporte",
    "party": "Green Party/Parti Vert",
    "votes": 457,
    "votePercentage": 1.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Dane Lloyd",
    "party": "Conservative/Conservateur",
    "votes": 16125,
    "votePercentage": 77.4,
    "majority": 13617,
    "majorityPercentage": 65.3
  },
  {
    "index": 48033,
    "candidate": "Brian Gold",
    "party": "Liberal/Libéral",
    "votes": 2508,
    "votePercentage": 12,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Shawna Gawreluck",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1606,
    "votePercentage": 7.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 48033,
    "candidate": "Ernest Chauvet",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 603,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20171211 = [
  {
    "index": 10002,
    "candidate": "Churence Rogers",
    "party": "Liberal/Libéral",
    "votes": 8717,
    "votePercentage": 69.2,
    "majority": 5839,
    "majorityPercentage": 46.4
  },
  {
    "index": 10002,
    "candidate": "Mike Windsor",
    "party": "Conservative/Conservateur",
    "votes": 2878,
    "votePercentage": 22.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Tyler James Downey",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 598,
    "votePercentage": 4.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Shane Stapleton",
    "party": "Libertarian/Libertarien",
    "votes": 263,
    "votePercentage": 2.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 10002,
    "candidate": "Tyler Colbourne",
    "party": "Green Party/Parti Vert",
    "votes": 138,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Jean Yip",
    "party": "Liberal/Libéral",
    "votes": 9088,
    "votePercentage": 49.4,
    "majority": 1630,
    "majorityPercentage": 8.9
  },
  {
    "index": 35093,
    "candidate": "Dasong Zou",
    "party": "Conservative/Conservateur",
    "votes": 7458,
    "votePercentage": 40.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Brian Chang",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 931,
    "votePercentage": 5.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Jude Coutinho",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 372,
    "votePercentage": 2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Michael DiPasquale",
    "party": "Green Party/Parti Vert",
    "votes": 252,
    "votePercentage": 1.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "Tom Zhu",
    "party": "Independent/Indépendant(e)",
    "votes": 148,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35093,
    "candidate": "John 'The Engineer' Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 145,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Rosemarie Ashley Falk",
    "party": "Conservative/Conservateur",
    "votes": 8952,
    "votePercentage": 69.5,
    "majority": 7254,
    "majorityPercentage": 56.3
  },
  {
    "index": 47001,
    "candidate": "Matt Fedler",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1698,
    "votePercentage": 13.2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Larry Ingram",
    "party": "Liberal/Libéral",
    "votes": 1345,
    "votePercentage": 10.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Ken Finlayson",
    "party": "Independent/Indépendant(e)",
    "votes": 681,
    "votePercentage": 5.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 47001,
    "candidate": "Yvonne Potter-Pihach",
    "party": "Green Party/Parti Vert",
    "votes": 200,
    "votePercentage": 1.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Gordie Hogg",
    "party": "Liberal/Libéral",
    "votes": 14369,
    "votePercentage": 47.4,
    "majority": 1545,
    "majorityPercentage": 5.1
  },
  {
    "index": 59030,
    "candidate": "Kerry-Lynne Findlay",
    "party": "Conservative/Conservateur",
    "votes": 12824,
    "votePercentage": 42.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Jonathan Silveira",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1478,
    "votePercentage": 4.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Larry Colero",
    "party": "Green Party/Parti Vert",
    "votes": 1247,
    "votePercentage": 4.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Rod Taylor",
    "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
    "votes": 238,
    "votePercentage": 0.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Donald Wilson",
    "party": "Libertarian/Libertarien",
    "votes": 89,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59030,
    "candidate": "Michael Huenefeld",
    "party": "PC Party/Parti PC",
    "votes": 86,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20180618 = [
  {
    "index": 24022,
    "candidate": "Richard Martel",
    "party": "Conservative/Conservateur",
    "votes": 12600,
    "votePercentage": 52.8,
    "majority": 5556,
    "majorityPercentage": 23.3
  },
  {
    "index": 24022,
    "candidate": "Lina Boivin",
    "party": "Liberal/Libéral",
    "votes": 7044,
    "votePercentage": 29.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Éric Dubois",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 2065,
    "votePercentage": 8.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Catherine Bouchard-Tremblay",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 1337,
    "votePercentage": 5.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "Lynda Youde",
    "party": "Green Party/Parti Vert",
    "votes": 738,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24022,
    "candidate": "John The Engineer Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 98,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20181203 = [
  {
    "index": 35050,
    "candidate": "Michael Barrett",
    "party": "Conservative/Conservateur",
    "votes": 16852,
    "votePercentage": 57.8,
    "majority": 6405,
    "majorityPercentage": 22
  },
  {
    "index": 35050,
    "candidate": "Mary Jean McFall",
    "party": "Liberal/Libéral",
    "votes": 10447,
    "votePercentage": 35.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "Michelle Taylor",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 883,
    "votePercentage": 3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "Lorraine Rekmans",
    "party": "Green Party/Parti Vert",
    "votes": 859,
    "votePercentage": 2.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35050,
    "candidate": "John The Engineer Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 111,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20190225 = [
  {
    "index": 24054,
    "candidate": "Rachel Bendayan",
    "party": "Liberal/Libéral",
    "votes": 6086,
    "votePercentage": 40.4,
    "majority": 1944,
    "majorityPercentage": 12.9
  },
  {
    "index": 24054,
    "candidate": "Julia Sánchez",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4142,
    "votePercentage": 27.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Daniel Green",
    "party": "Green Party/Parti Vert",
    "votes": 1946,
    "votePercentage": 12.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Michel Duchesne",
    "party": "Bloc Québécois/Bloc Québécois",
    "votes": 1674,
    "votePercentage": 11.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "Jasmine Louras",
    "party": "Conservative/Conservateur",
    "votes": 925,
    "votePercentage": 6.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "James Seale",
    "party": "People's Party/Parti populaire",
    "votes": 232,
    "votePercentage": 1.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 24054,
    "candidate": "William Barrett",
    "party": "Independent/Indépendant(e)",
    "votes": 48,
    "votePercentage": 0.3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Scot Davidson",
    "party": "Conservative/Conservateur",
    "votes": 8929,
    "votePercentage": 53.9,
    "majority": 4118,
    "majorityPercentage": 24.9
  },
  {
    "index": 35119,
    "candidate": "Shaun Tanaka",
    "party": "Liberal/Libéral",
    "votes": 4811,
    "votePercentage": 29,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Jessa McLean",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1244,
    "votePercentage": 7.5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Dorian Baxter",
    "party": "PC Party/Parti PC",
    "votes": 634,
    "votePercentage": 3.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Mathew Lund",
    "party": "Green Party/Parti Vert",
    "votes": 451,
    "votePercentage": 2.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Robert Geurts",
    "party": "People's Party/Parti populaire",
    "votes": 314,
    "votePercentage": 1.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Keith Dean Komar",
    "party": "Libertarian/Libertarien",
    "votes": 95,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "John The Engineer Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 64,
    "votePercentage": 0.4,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35119,
    "candidate": "Adam Suhr",
    "party": "National Citizens Alliance/Alliance Nationale Citoyens",
    "votes": 22,
    "votePercentage": 0.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Jagmeet Singh",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 8848,
    "votePercentage": 38.9,
    "majority": 2929,
    "majorityPercentage": 12.9
  },
  {
    "index": 59003,
    "candidate": "Richard T. Lee",
    "party": "Liberal/Libéral",
    "votes": 5919,
    "votePercentage": 26,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Jay Shin",
    "party": "Conservative/Conservateur",
    "votes": 5147,
    "votePercentage": 22.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Laura-Lynn Thompson",
    "party": "People's Party/Parti populaire",
    "votes": 2422,
    "votePercentage": 10.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Terry Grimwood",
    "party": "Independent/Indépendant(e)",
    "votes": 242,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59003,
    "candidate": "Valentine Wu",
    "party": "Independent/Indépendant(e)",
    "votes": 168,
    "votePercentage": 0.7,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20190506 = [
  {
    "index": 59018,
    "candidate": "Paul Manly",
    "party": "Green Party/Parti Vert",
    "votes": 15302,
    "votePercentage": 37.3,
    "majority": 5087,
    "majorityPercentage": 12.4
  },
  {
    "index": 59018,
    "candidate": "John Hirst",
    "party": "Conservative/Conservateur",
    "votes": 10215,
    "votePercentage": 24.9,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Bob Chamberlin",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 9446,
    "votePercentage": 23,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Michelle Corfield",
    "party": "Liberal/Libéral",
    "votes": 4515,
    "votePercentage": 11,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Jennifer Clarke",
    "party": "People's Party/Parti populaire",
    "votes": 1268,
    "votePercentage": 3.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Brian Marlatt",
    "party": "PC Party/Parti PC",
    "votes": 253,
    "votePercentage": 0.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 59018,
    "candidate": "Jakob Letkemann",
    "party": "National Citizens Alliance/Alliance Nationale Citoyens",
    "votes": 66,
    "votePercentage": 0.2,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const results20191021 = [
{
  "index": 10001,
  "candidate": "Kenneth McDonald **",
  "party": "Liberal/Libéral",
  "votes": 19122,
  "votePercentage": 46.3,
  "majority": 6267,
  "majorityPercentage": 15.2
},
{
  "index": 10001,
  "candidate": "Matthew Chapman",
  "party": "Conservative/Conservateur",
  "votes": 12855,
  "votePercentage": 31.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10001,
  "candidate": "Lea Mary Movelle",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7142,
  "votePercentage": 17.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10001,
  "candidate": "Greg Malone",
  "party": "Green Party/Parti Vert",
  "votes": 2215,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10002,
  "candidate": "Churence Rogers **",
  "party": "Liberal/Libéral",
  "votes": 14707,
  "votePercentage": 45.7,
  "majority": 2010,
  "majorityPercentage": 6.2
},

{
  "index": 10002,
  "candidate": "Sharon Vokey",
  "party": "Conservative/Conservateur",
  "votes": 12697,
  "votePercentage": 39.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10002,
  "candidate": "Matthew Cooper",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3855,
  "votePercentage": 12,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10002,
  "candidate": "Kelsey Reichel",
  "party": "Green Party/Parti Vert",
  "votes": 920,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10003,
  "candidate": "Scott Simms **",
  "party": "Liberal/Libéral",
  "votes": 16514,
  "votePercentage": 48.3,
  "majority": 4433,
  "majorityPercentage": 13.0
},

{
  "index": 10003,
  "candidate": "Alex Bracci",
  "party": "Conservative/Conservateur",
  "votes": 12081,
  "votePercentage": 35.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10003,
  "candidate": "Noel Joe",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4224,
  "votePercentage": 12.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10003,
  "candidate": "Byron White",
  "party": "Green Party/Parti Vert",
  "votes": 1363,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10004,
  "candidate": "Yvonne Jones **",
  "party": "Liberal/Libéral",
  "votes": 4851,
  "votePercentage": 42.5,
  "majority": 1303,
  "majorityPercentage": 11.4
},

{
  "index": 10004,
  "candidate": "Larry Flemming",
  "party": "Conservative/Conservateur",
  "votes": 3548,
  "votePercentage": 31.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10004,
  "candidate": "Michelene Gray",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2796,
  "votePercentage": 24.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10004,
  "candidate": "Tyler Colbourne",
  "party": "Green Party/Parti Vert",
  "votes": 224,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10005,
  "candidate": "Gudie Hutchings **",
  "party": "Liberal/Libéral",
  "votes": 18199,
  "votePercentage": 47.4,
  "majority": 7326,
  "majorityPercentage": 19.1
},

{
  "index": 10005,
  "candidate": "Josh Eisses",
  "party": "Conservative/Conservateur",
  "votes": 10873,
  "votePercentage": 28.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10005,
  "candidate": "Holly Pike",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7609,
  "votePercentage": 19.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10005,
  "candidate": "Lucas Knill",
  "party": "Green Party/Parti Vert",
  "votes": 1334,
  "votePercentage": 3.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10005,
  "candidate": "Robert Miles",
  "party": "VCP/CAC",
  "votes": 411,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10006,
  "candidate": "Jack Harris",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 21148,
  "votePercentage": 46.9,
  "majority": 6186,
  "majorityPercentage": 13.7
},

{
  "index": 10006,
  "candidate": "Nick Whalen **",
  "party": "Liberal/Libéral",
  "votes": 14962,
  "votePercentage": 33.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10006,
  "candidate": "Joedy Wall",
  "party": "Conservative/Conservateur",
  "votes": 8141,
  "votePercentage": 18.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10006,
  "candidate": "David Peters",
  "party": "Green Party/Parti Vert",
  "votes": 821,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10007,
  "candidate": "Seamus O'Regan **",
  "party": "Liberal/Libéral",
  "votes": 20793,
  "votePercentage": 51.1,
  "majority": 9903,
  "majorityPercentage": 24.4
},

{
  "index": 10007,
  "candidate": "Anne Marie Anonsen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10890,
  "votePercentage": 26.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10007,
  "candidate": "Terry Martin",
  "party": "Conservative/Conservateur",
  "votes": 7767,
  "votePercentage": 19.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10007,
  "candidate": "Alexandra Hayward",
  "party": "Green Party/Parti Vert",
  "votes": 740,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10007,
  "candidate": "Benjamin Ruckpaul",
  "party": "People's Party/Parti populaire",
  "votes": 335,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 10007,
  "candidate": "David Jones",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 141,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11001,
  "candidate": "Lawrence MacAulay **",
  "party": "Liberal/Libéral",
  "votes": 10939,
  "votePercentage": 49.3,
  "majority": 4500,
  "majorityPercentage": 20.3
},

{
  "index": 11001,
  "candidate": "Wayne Phelan",
  "party": "Conservative/Conservateur",
  "votes": 6439,
  "votePercentage": 29,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11001,
  "candidate": "Glen Beaton",
  "party": "Green Party/Parti Vert",
  "votes": 3068,
  "votePercentage": 13.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11001,
  "candidate": "Lynne Thiele",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1481,
  "votePercentage": 6.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11001,
  "candidate": "Christene Squires",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 240,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11002,
  "candidate": "Sean Casey **",
  "party": "Liberal/Libéral",
  "votes": 8812,
  "votePercentage": 44.3,
  "majority": 4164,
  "majorityPercentage": 20.9
},

{
  "index": 11002,
  "candidate": "Darcie Lanthier",
  "party": "Green Party/Parti Vert",
  "votes": 4648,
  "votePercentage": 23.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11002,
  "candidate": "Robert A. Campbell",
  "party": "Conservative/Conservateur",
  "votes": 4040,
  "votePercentage": 20.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11002,
  "candidate": "Joe Byrne",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2238,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11002,
  "candidate": "Fred MacLeod",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 172,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11003,
  "candidate": "Bobby Morrissey **",
  "party": "Liberal/Libéral",
  "votes": 8016,
  "votePercentage": 39.7,
  "majority": 1082,
  "majorityPercentage": 5.4
},

{
  "index": 11003,
  "candidate": "Logan McLellan",
  "party": "Conservative/Conservateur",
  "votes": 6934,
  "votePercentage": 34.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11003,
  "candidate": "Alex Clark",
  "party": "Green Party/Parti Vert",
  "votes": 3998,
  "votePercentage": 19.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11003,
  "candidate": "Sharon Dunn",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1230,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11004,
  "candidate": "Wayne Easter **",
  "party": "Liberal/Libéral",
  "votes": 9533,
  "votePercentage": 41.4,
  "majority": 3430,
  "majorityPercentage": 14.9
},

{
  "index": 11004,
  "candidate": "Anna Keenan",
  "party": "Green Party/Parti Vert",
  "votes": 6103,
  "votePercentage": 26.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11004,
  "candidate": "Stephen Stewart",
  "party": "Conservative/Conservateur",
  "votes": 5908,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 11004,
  "candidate": "Craig Nash",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1495,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Mike Kelloway",
  "party": "Liberal/Libéral",
  "votes": 16694,
  "votePercentage": 38.9,
  "majority": 1873,
  "majorityPercentage": 4.4
},

{
  "index": 12001,
  "candidate": "Alfie MacLeod",
  "party": "Conservative/Conservateur",
  "votes": 14821,
  "votePercentage": 34.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Laurie Suitor",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6354,
  "votePercentage": 14.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Clive Doucet",
  "party": "Green Party/Parti Vert",
  "votes": 3321,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Billy Joyce",
  "party": "People's Party/Parti populaire",
  "votes": 925,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Michelle Dockrill",
  "party": "Independent/Indépendant(e)",
  "votes": 685,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12001,
  "candidate": "Darlene Lynn LeBlanc",
  "party": "National Citizens Alliance/Alliance Nationale Citoyens",
  "votes": 140,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Sean Fraser **",
  "party": "Liberal/Libéral",
  "votes": 20718,
  "votePercentage": 46.6,
  "majority": 7517,
  "majorityPercentage": 16.9
},

{
  "index": 12002,
  "candidate": "George Canyon",
  "party": "Conservative/Conservateur",
  "votes": 13201,
  "votePercentage": 29.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Betsy MacDonald",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5806,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Barry Randle",
  "party": "Green Party/Parti Vert",
  "votes": 3478,
  "votePercentage": 7.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Al Muir",
  "party": "People's Party/Parti populaire",
  "votes": 938,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Chris Frazer",
  "party": "Communist/Communiste",
  "votes": 180,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12002,
  "candidate": "Michael Slowik",
  "party": "Independent/Indépendant(e)",
  "votes": 149,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Lenore Zann",
  "party": "Liberal/Libéral",
  "votes": 16672,
  "votePercentage": 36.7,
  "majority": 453,
  "majorityPercentage": 1.0
},

{
  "index": 12003,
  "candidate": "Scott Armstrong",
  "party": "Conservative/Conservateur",
  "votes": 16219,
  "votePercentage": 35.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Jason Blanch",
  "party": "Green Party/Parti Vert",
  "votes": 6015,
  "votePercentage": 13.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Larry Duchesne",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5451,
  "votePercentage": 12,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "William Archer",
  "party": "People's Party/Parti populaire",
  "votes": 608,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Matthew V. Rushton",
  "party": "Independent/Indépendant(e)",
  "votes": 232,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Jody O'Blenis",
  "party": "VCP/CAC",
  "votes": 144,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12003,
  "candidate": "Stephen J Garvey",
  "party": "National Citizens Alliance/Alliance Nationale Citoyens",
  "votes": 109,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12004,
  "candidate": "Darren Fisher **",
  "party": "Liberal/Libéral",
  "votes": 24259,
  "votePercentage": 45.3,
  "majority": 9824,
  "majorityPercentage": 18.4
},

{
  "index": 12004,
  "candidate": "Emma Norton",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 14435,
  "votePercentage": 27,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12004,
  "candidate": "Jason Cole",
  "party": "Conservative/Conservateur",
  "votes": 8638,
  "votePercentage": 16.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12004,
  "candidate": "Lil MacPherson",
  "party": "Green Party/Parti Vert",
  "votes": 5280,
  "votePercentage": 9.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12004,
  "candidate": "Michelle Lindsay",
  "party": "People's Party/Parti populaire",
  "votes": 887,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12005,
  "candidate": "Andy Fillmore **",
  "party": "Liberal/Libéral",
  "votes": 23681,
  "votePercentage": 42.5,
  "majority": 6934,
  "majorityPercentage": 12.4
},

{
  "index": 12005,
  "candidate": "Christine Saulnier",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16747,
  "votePercentage": 30,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12005,
  "candidate": "Jo-Ann Roberts",
  "party": "Green Party/Parti Vert",
  "votes": 8013,
  "votePercentage": 14.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12005,
  "candidate": "Bruce Holland",
  "party": "Conservative/Conservateur",
  "votes": 6456,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12005,
  "candidate": "Duncan McGenn",
  "party": "People's Party/Parti populaire",
  "votes": 633,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12005,
  "candidate": "Bill Wilson",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 222,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12006,
  "candidate": "Geoff Regan **",
  "party": "Liberal/Libéral",
  "votes": 26885,
  "votePercentage": 49.5,
  "majority": 16397,
  "majorityPercentage": 30.2
},

{
  "index": 12006,
  "candidate": "Fred Shuman",
  "party": "Conservative/Conservateur",
  "votes": 10488,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12006,
  "candidate": "Jacob Wilson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10429,
  "votePercentage": 19.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12006,
  "candidate": "Richard Zurawski",
  "party": "Green Party/Parti Vert",
  "votes": 6555,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Kody Blois",
  "party": "Liberal/Libéral",
  "votes": 20806,
  "votePercentage": 43.3,
  "majority": 8901,
  "majorityPercentage": 18.5
},

{
  "index": 12007,
  "candidate": "Martha MacQuarrie",
  "party": "Conservative/Conservateur",
  "votes": 11905,
  "votePercentage": 24.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Stephen Schneider",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8254,
  "votePercentage": 17.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Brogan Anderson",
  "party": "Green Party/Parti Vert",
  "votes": 6029,
  "votePercentage": 12.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Matthew Southall",
  "party": "People's Party/Parti populaire",
  "votes": 786,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Nicholas Tan",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 138,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12007,
  "candidate": "Stacey Dodge",
  "party": "VCP/CAC",
  "votes": 118,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12008,
  "candidate": "Darrell Samson **",
  "party": "Liberal/Libéral",
  "votes": 19925,
  "votePercentage": 40.2,
  "majority": 8065,
  "majorityPercentage": 16.3
},

{
  "index": 12008,
  "candidate": "Matt Stickland",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11860,
  "votePercentage": 23.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12008,
  "candidate": "Kevin Copley",
  "party": "Conservative/Conservateur",
  "votes": 11211,
  "votePercentage": 22.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12008,
  "candidate": "Anthony Edmonds",
  "party": "Green Party/Parti Vert",
  "votes": 5725,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12008,
  "candidate": "Sybil Hogg",
  "party": "People's Party/Parti populaire",
  "votes": 816,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Bernadette Jordan **",
  "party": "Liberal/Libéral",
  "votes": 21886,
  "votePercentage": 41.7,
  "majority": 7142,
  "majorityPercentage": 13.6
},

{
  "index": 12009,
  "candidate": "Rick Perkins",
  "party": "Conservative/Conservateur",
  "votes": 14744,
  "votePercentage": 28.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Jessika Hepburn",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8361,
  "votePercentage": 15.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Thomas Trappenberg",
  "party": "Green Party/Parti Vert",
  "votes": 6070,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Robert Monk",
  "party": "People's Party/Parti populaire",
  "votes": 667,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Steven Foster",
  "party": "Independent/Indépendant(e)",
  "votes": 376,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Shawn McMahon",
  "party": "Independent/Indépendant(e)",
  "votes": 165,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Jason Matthews",
  "party": "VCP/CAC",
  "votes": 125,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12009,
  "candidate": "Kevin Schulthies",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 124,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Jaime Battiste",
  "party": "Liberal/Libéral",
  "votes": 12536,
  "votePercentage": 30.9,
  "majority": 1309,
  "majorityPercentage": 3.2
},

{
  "index": 12010,
  "candidate": "Eddie Orrell",
  "party": "Conservative/Conservateur",
  "votes": 11227,
  "votePercentage": 27.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Jodi McDavid",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8146,
  "votePercentage": 20.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Archie MacKinnon",
  "party": "Independent/Indépendant(e)",
  "votes": 5679,
  "votePercentage": 14,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Lois Foster",
  "party": "Green Party/Parti Vert",
  "votes": 2249,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Kenzie MacNeil",
  "party": "Independent/Indépendant(e)",
  "votes": 480,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12010,
  "candidate": "Randy Joy",
  "party": "VCP/CAC",
  "votes": 248,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12011,
  "candidate": "Chris d'Entremont",
  "party": "Conservative/Conservateur",
  "votes": 18390,
  "votePercentage": 39.3,
  "majority": 1365,
  "majorityPercentage": 2.9
},

{
  "index": 12011,
  "candidate": "Jason Deveau",
  "party": "Liberal/Libéral",
  "votes": 17025,
  "votePercentage": 36.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12011,
  "candidate": "Judy N",
  "party": "Green Green Party/Parti Vert",
  "votes": 5939,
  "votePercentage": 12.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12011,
  "candidate": "Matthew Dubois",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5010,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 12011,
  "candidate": "Gloria Jane Cook",
  "party": "VCP/CAC",
  "votes": 434,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13001,
  "candidate": "Serge Cormier **",
  "party": "Liberal/Libéral",
  "votes": 26547,
  "votePercentage": 55.1,
  "majority": 16195,
  "majorityPercentage": 33.6
},

{
  "index": 13001,
  "candidate": "Martine Savoie",
  "party": "Conservative/Conservateur",
  "votes": 10352,
  "votePercentage": 21.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13001,
  "candidate": "Daniel Thériault",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6967,
  "votePercentage": 14.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13001,
  "candidate": "Robert Kryszko",
  "party": "Green Party/Parti Vert",
  "votes": 4277,
  "votePercentage": 8.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13002,
  "candidate": "Dominic LeBlanc **",
  "party": "Liberal/Libéral",
  "votes": 24948,
  "votePercentage": 46.5,
  "majority": 10643,
  "majorityPercentage": 19.8
},

{
  "index": 13002,
  "candidate": "Laura Reinsborough",
  "party": "Green Party/Parti Vert",
  "votes": 14305,
  "votePercentage": 26.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13002,
  "candidate": "Vincent Cormier",
  "party": "Conservative/Conservateur",
  "votes": 9438,
  "votePercentage": 17.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13002,
  "candidate": "Jean-Marc Bélanger",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3940,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13002,
  "candidate": "Nancy Mercier",
  "party": "People's Party/Parti populaire",
  "votes": 1054,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Jenica Atwin",
  "party": "Green Party/Parti Vert",
  "votes": 16640,
  "votePercentage": 33.7,
  "majority": 1629,
  "majorityPercentage": 3.3
},

{
  "index": 13003,
  "candidate": "Andrea Johnson",
  "party": "Conservative/Conservateur",
  "votes": 15011,
  "votePercentage": 30.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Matt DeCourcey **",
  "party": "Liberal/Libéral",
  "votes": 13544,
  "votePercentage": 27.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Mackenzie Thomason",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2946,
  "votePercentage": 6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Jason Paull",
  "party": "People's Party/Parti populaire",
  "votes": 776,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Lesley Thomas",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 286,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Brandon Kirby",
  "party": "Libertarian/Libertarien",
  "votes": 126,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13003,
  "candidate": "Jacob Patterson",
  "party": "Communist/Communiste",
  "votes": 80,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "Rob Moore",
  "party": "Conservative/Conservateur",
  "votes": 22389,
  "votePercentage": 46,
  "majority": 9956,
  "majorityPercentage": 20.5
},

{
  "index": 13004,
  "candidate": "Alaina Lockhart **",
  "party": "Liberal/Libéral",
  "votes": 12433,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "Tim Thompson",
  "party": "Green Party/Parti Vert",
  "votes": 7275,
  "votePercentage": 15,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "James Tolan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4804,
  "votePercentage": 9.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "Rudy Neumayer",
  "party": "People's Party/Parti populaire",
  "votes": 1249,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "David Raymond Amos",
  "party": "Independent/Indépendant(e)",
  "votes": 295,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13004,
  "candidate": "John Evans",
  "party": "National Citizens Alliance/Alliance Nationale Citoyens",
  "votes": 201,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13005,
  "candidate": "René Arseneault **",
  "party": "Liberal/Libéral",
  "votes": 17331,
  "votePercentage": 50.3,
  "majority": 7530,
  "majorityPercentage": 21.8
},

{
  "index": 13005,
  "candidate": "Nelson Fox",
  "party": "Conservative/Conservateur",
  "votes": 9801,
  "votePercentage": 28.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13005,
  "candidate": "Louis Bérubé",
  "party": "Green Party/Parti Vert",
  "votes": 5125,
  "votePercentage": 14.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13005,
  "candidate": "Chad Betteridge",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2212,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Pat Finnigan **",
  "party": "Liberal/Libéral",
  "votes": 12722,
  "votePercentage": 36.8,
  "majority": 370,
  "majorityPercentage": 1.1
},

{
  "index": 13006,
  "candidate": "Peggy McLean",
  "party": "Conservative/Conservateur",
  "votes": 12352,
  "votePercentage": 35.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Patty Deitch",
  "party": "Green Party/Parti Vert",
  "votes": 3914,
  "votePercentage": 11.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Eileen Clancy Teslenko",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2875,
  "votePercentage": 8.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Ron Nowlan",
  "party": "People's Party/Parti populaire",
  "votes": 1179,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Allison MacKenzie",
  "party": "Independent/Indépendant(e)",
  "votes": 1160,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13006,
  "candidate": "Mathew Grant Lawson",
  "party": "Independent/Indépendant(e)",
  "votes": 396,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Ginette Petitpas Taylor **",
  "party": "Liberal/Libéral",
  "votes": 22261,
  "votePercentage": 43,
  "majority": 10061,
  "majorityPercentage": 19.4
},

{
  "index": 13007,
  "candidate": "Sylvie Godin-Charest",
  "party": "Conservative/Conservateur",
  "votes": 12200,
  "votePercentage": 23.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Claire Kelly",
  "party": "Green Party/Parti Vert",
  "votes": 9287,
  "votePercentage": 17.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Luke MacLaren",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6164,
  "votePercentage": 11.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Stephen Driver",
  "party": "People's Party/Parti populaire",
  "votes": 1258,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Brad MacDonald",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 373,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13007,
  "candidate": "Rhys Williams",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 285,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13008,
  "candidate": "John Williamson",
  "party": "Conservative/Conservateur",
  "votes": 19451,
  "votePercentage": 49.1,
  "majority": 9341,
  "majorityPercentage": 23.6
},

{
  "index": 13008,
  "candidate": "Karen Ludwig **",
  "party": "Liberal/Libéral",
  "votes": 10110,
  "votePercentage": 25.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13008,
  "candidate": "Susan Jonah",
  "party": "Green Party/Parti Vert",
  "votes": 5352,
  "votePercentage": 13.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13008,
  "candidate": "Douglas Mullin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3251,
  "votePercentage": 8.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13008,
  "candidate": "Meryl Sarty",
  "party": "People's Party/Parti populaire",
  "votes": 1214,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13008,
  "candidate": "Abe Scott",
  "party": "VCP/CAC",
  "votes": 200,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Wayne Long **",
  "party": "Liberal/Libéral",
  "votes": 15443,
  "votePercentage": 37.4,
  "majority": 1437,
  "majorityPercentage": 3.5
},

{
  "index": 13009,
  "candidate": "Rodney Weston",
  "party": "Conservative/Conservateur",
  "votes": 14006,
  "votePercentage": 34,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Armand Cormier",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5046,
  "votePercentage": 12.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Ann McAllister",
  "party": "Green Party/Parti Vert",
  "votes": 4165,
  "votePercentage": 10.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Adam J. C. Salesse",
  "party": "People's Party/Parti populaire",
  "votes": 1260,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Stuart Jamieson",
  "party": "Independent/Indépendant(e)",
  "votes": 1183,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13009,
  "candidate": "Neville Barnett",
  "party": "Independent/Indépendant(e)",
  "votes": 150,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13010,
  "candidate": "Richard Bragdon",
  "party": "Conservative/Conservateur",
  "votes": 19229,
  "votePercentage": 50.3,
  "majority": 9598,
  "majorityPercentage": 25.1
},

{
  "index": 13010,
  "candidate": "Kelsey MacDonald",
  "party": "Liberal/Libéral",
  "votes": 9631,
  "votePercentage": 25.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13010,
  "candidate": "Rowan P. Miller",
  "party": "Green Party/Parti Vert",
  "votes": 5398,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13010,
  "candidate": "Megan Aiken",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3007,
  "votePercentage": 7.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 13010,
  "candidate": "Dominic Guay",
  "party": "People's Party/Parti populaire",
  "votes": 936,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Sylvie Bérubé",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 11432,
  "votePercentage": 36.1,
  "majority": 2469,
  "majorityPercentage": 7.8
},

{
  "index": 24001,
  "candidate": "Isabelle Bergeron",
  "party": "Liberal/Libéral",
  "votes": 8963,
  "votePercentage": 28.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Martin Ferron",
  "party": "Conservative/Conservateur",
  "votes": 5240,
  "votePercentage": 16.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Jacline Rouleau",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4104,
  "votePercentage": 13,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Kiara Cabana-Whiteley",
  "party": "Green Party/Parti Vert",
  "votes": 1151,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Daniel Simon",
  "party": "Radical Marijuana/Radical Marijuana",
  "votes": 387,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24001,
  "candidate": "Guillaume Lanouette",
  "party": "People's Party/Parti populaire",
  "votes": 379,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24002,
  "candidate": "Sébastien Lemire",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 22803,
  "votePercentage": 45.5,
  "majority": 10386,
  "majorityPercentage": 20.7
},

{
  "index": 24002,
  "candidate": "Claude Thibault",
  "party": "Liberal/Libéral",
  "votes": 12417,
  "votePercentage": 24.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24002,
  "candidate": "Mario Provencher",
  "party": "Conservative/Conservateur",
  "votes": 7537,
  "votePercentage": 15,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24002,
  "candidate": "Alain Guimond",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5093,
  "votePercentage": 10.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24002,
  "candidate": "Aline Bégin",
  "party": "Green Party/Parti Vert",
  "votes": 1818,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24002,
  "candidate": "Jacques Girard",
  "party": "People's Party/Parti populaire",
  "votes": 487,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24003,
  "candidate": "Mélanie Joly **",
  "party": "Liberal/Libéral",
  "votes": 28904,
  "votePercentage": 52.4,
  "majority": 16930,
  "majorityPercentage": 30.7
},

{
  "index": 24003,
  "candidate": "André Parizeau",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 11974,
  "votePercentage": 21.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24003,
  "candidate": "Zahia El-Masri",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6284,
  "votePercentage": 11.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24003,
  "candidate": "Kathy Laframboise",
  "party": "Conservative/Conservateur",
  "votes": 4013,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24003,
  "candidate": "Jean-Michel Lavarenne",
  "party": "Green Party/Parti Vert",
  "votes": 3352,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24003,
  "candidate": "Raymond Ayas",
  "party": "People's Party/Parti populaire",
  "votes": 584,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Angelo Iacono **",
  "party": "Liberal/Libéral",
  "votes": 26015,
  "votePercentage": 47.9,
  "majority": 10466,
  "majorityPercentage": 19.3
},

{
  "index": 24004,
  "candidate": "Michel Lachance",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15549,
  "votePercentage": 28.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Angelo Esposito",
  "party": "Conservative/Conservateur",
  "votes": 5917,
  "votePercentage": 10.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Andriana Kocini",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4109,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Marguerite Howells",
  "party": "Green Party/Parti Vert",
  "votes": 1958,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Matthieu Couture",
  "party": "People's Party/Parti populaire",
  "votes": 471,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Julius Buté",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 177,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24004,
  "candidate": "Dwayne Cappelletti",
  "party": "Independent/Indépendant(e)",
  "votes": 113,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24005,
  "candidate": "Stéphane Lauzon **",
  "party": "Liberal/Libéral",
  "votes": 18896,
  "votePercentage": 37.8,
  "majority": 729,
  "majorityPercentage": 1.5
},

{
  "index": 24005,
  "candidate": "Yves Destroismaisons",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18167,
  "votePercentage": 36.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24005,
  "candidate": "Marie Louis-Seize",
  "party": "Conservative/Conservateur",
  "votes": 6044,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24005,
  "candidate": "Charlotte Boucher Smoley",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3758,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24005,
  "candidate": "Marjorie Valiquette",
  "party": "Green Party/Parti Vert",
  "votes": 2411,
  "votePercentage": 4.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24005,
  "candidate": "Sherwin Edwards",
  "party": "People's Party/Parti populaire",
  "votes": 721,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "Kristina Michaud",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18500,
  "votePercentage": 51.4,
  "majority": 6312,
  "majorityPercentage": 17.5
},

{
  "index": 24006,
  "candidate": "Rémi Massé **",
  "party": "Liberal/Libéral",
  "votes": 12188,
  "votePercentage": 33.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "Natasha Tremblay",
  "party": "Conservative/Conservateur",
  "votes": 2756,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "Rémi-Jocelyn Côté",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1435,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "James Morrison",
  "party": "Green Party/Parti Vert",
  "votes": 699,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "Éric Barnabé",
  "party": "People's Party/Parti populaire",
  "votes": 210,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24006,
  "candidate": "Mathieu Castonguay",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 180,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "Richard Lehoux",
  "party": "Conservative/Conservateur",
  "votes": 22860,
  "votePercentage": 38.5,
  "majority": 6064,
  "majorityPercentage": 10.2
},

{
  "index": 24007,
  "candidate": "Maxime Bernier **",
  "party": "People's Party/Parti populaire",
  "votes": 16796,
  "votePercentage": 28.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "Guillaume Rodrigue",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 8410,
  "votePercentage": 14.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "Adam Veilleux",
  "party": "Liberal/Libéral",
  "votes": 6971,
  "votePercentage": 11.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "François Jacques-Côté",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1847,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "Josiane Fortin",
  "party": "Green Party/Parti Vert",
  "votes": 1461,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24007,
  "candidate": "Maxime Bernier",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 1084,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Julie Vignola",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15149,
  "votePercentage": 30.2,
  "majority": 1964,
  "majorityPercentage": 3.9
},

{
  "index": 24008,
  "candidate": "Alupa Clarke **",
  "party": "Conservative/Conservateur",
  "votes": 13185,
  "votePercentage": 26.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Antoine Bujold",
  "party": "Liberal/Libéral",
  "votes": 13020,
  "votePercentage": 25.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Simon-Pierre Beaudet",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5599,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Dalila Elhak",
  "party": "Green Party/Parti Vert",
  "votes": 2127,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Alicia Bédard",
  "party": "People's Party/Parti populaire",
  "votes": 1033,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24008,
  "candidate": "Claude Moreau",
  "party": "ML/ML",
  "votes": 78,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Caroline Desbiens",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18407,
  "votePercentage": 36.4,
  "majority": 3363,
  "majorityPercentage": 6.6
},

{
  "index": 24020,
  "candidate": "Sylvie Boucher **",
  "party": "Conservative/Conservateur",
  "votes": 15044,
  "votePercentage": 29.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Manon Fortin",
  "party": "Liberal/Libéral",
  "votes": 10608,
  "votePercentage": 20.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Gérard Briand",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2841,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Richard Guertin",
  "party": "Green Party/Parti Vert",
  "votes": 1355,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Raymond Bernier",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 1335,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24020,
  "candidate": "Jean-Claude Parent",
  "party": "People's Party/Parti populaire",
  "votes": 1045,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24009,
  "candidate": "Louis Plamondon **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 29653,
  "votePercentage": 56.7,
  "majority": 20321,
  "majorityPercentage": 38.8
},

{
  "index": 24009,
  "candidate": "Nathalie Rochefort",
  "party": "Liberal/Libéral",
  "votes": 9332,
  "votePercentage": 17.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24009,
  "candidate": "Pierre-André Émond",
  "party": "Conservative/Conservateur",
  "votes": 8434,
  "votePercentage": 16.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24009,
  "candidate": "Carole Lennard",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2732,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24009,
  "candidate": "David Turcotte",
  "party": "Green Party/Parti Vert",
  "votes": 1697,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24009,
  "candidate": "Richard Synnott",
  "party": "People's Party/Parti populaire",
  "votes": 489,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "Steven Blaney **",
  "party": "Conservative/Conservateur",
  "votes": 32283,
  "votePercentage": 50.1,
  "majority": 17529,
  "majorityPercentage": 27.2
},

{
  "index": 24010,
  "candidate": "Sébastien Bouchard-Théberge",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 14754,
  "votePercentage": 22.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "Laurence Harvey",
  "party": "Liberal/Libéral",
  "votes": 10734,
  "votePercentage": 16.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "Khuon Chamroeun",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3256,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "André Voyer",
  "party": "Green Party/Parti Vert",
  "votes": 1925,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "Marc Johnston",
  "party": "People's Party/Parti populaire",
  "votes": 1307,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24010,
  "candidate": "Yves Gilbert",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 188,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Yves-François Blanchet",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 35068,
  "votePercentage": 50.5,
  "majority": 19009,
  "majorityPercentage": 27.4
},

{
  "index": 24011,
  "candidate": "Marie-Chantal Hamel",
  "party": "Liberal/Libéral",
  "votes": 16059,
  "votePercentage": 23.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Matthew Dubé **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10086,
  "votePercentage": 14.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Véronique Laprise",
  "party": "Conservative/Conservateur",
  "votes": 4305,
  "votePercentage": 6.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Pierre Carrier",
  "party": "Green Party/Parti Vert",
  "votes": 3255,
  "votePercentage": 4.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Chloé Bernard",
  "party": "People's Party/Parti populaire",
  "votes": 512,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24011,
  "candidate": "Michel Blondin",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 205,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Yves Perron",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 21200,
  "votePercentage": 37.6,
  "majority": 1502,
  "majorityPercentage": 2.7
},

{
  "index": 24012,
  "candidate": "Ruth Ellen Brosseau **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 19698,
  "votePercentage": 35,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Christine Poirier",
  "party": "Liberal/Libéral",
  "votes": 7796,
  "votePercentage": 13.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Josée Bélanger",
  "party": "Conservative/Conservateur",
  "votes": 5812,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Éric Laferrière",
  "party": "Green Party/Parti Vert",
  "votes": 1008,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Luc Massé",
  "party": "People's Party/Parti populaire",
  "votes": 428,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Alain Bélanger",
  "party": "Independent/Indépendant(e)",
  "votes": 154,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Martin Acetaria Caesar Jubinville",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 151,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24012,
  "candidate": "Danny Légaré",
  "party": "Radical Marijuana/Radical Marijuana",
  "votes": 107,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Emmanuel Dubourg **",
  "party": "Liberal/Libéral",
  "votes": 23231,
  "votePercentage": 57.6,
  "majority": 14188,
  "majorityPercentage": 35.2
},

{
  "index": 24015,
  "candidate": "Anne-Marie Lavoie",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 9043,
  "votePercentage": 22.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Konrad Lamour",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3204,
  "votePercentage": 7.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Catherine Lefebvre",
  "party": "Conservative/Conservateur",
  "votes": 2899,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Payton Ashe",
  "party": "Green Party/Parti Vert",
  "votes": 1343,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Louis Léger",
  "party": "People's Party/Parti populaire",
  "votes": 347,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Joseph Di Iorio",
  "party": "Independent/Indépendant(e)",
  "votes": 212,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24015,
  "candidate": "Françoise Roy",
  "party": "ML/ML",
  "votes": 72,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Lyne Bessette",
  "party": "Liberal/Libéral",
  "votes": 23450,
  "votePercentage": 38.2,
  "majority": 2298,
  "majorityPercentage": 3.7
},

{
  "index": 24016,
  "candidate": "Monique Allard",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 21152,
  "votePercentage": 34.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Bruno Côté",
  "party": "Conservative/Conservateur",
  "votes": 7697,
  "votePercentage": 12.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Sylvie Jetté",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4887,
  "votePercentage": 8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Normand Dallaire",
  "party": "Green Party/Parti Vert",
  "votes": 3302,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "François Poulin",
  "party": "People's Party/Parti populaire",
  "votes": 456,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Steeve Cloutier",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 310,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24016,
  "candidate": "Lawrence Cotton",
  "party": "VCP/CAC",
  "votes": 187,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24017,
  "candidate": "Alexandra Mendès **",
  "party": "Liberal/Libéral",
  "votes": 30537,
  "votePercentage": 53.9,
  "majority": 19406,
  "majorityPercentage": 34.3
},

{
  "index": 24017,
  "candidate": "Marie-Claude Diotte",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 11131,
  "votePercentage": 19.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24017,
  "candidate": "Glenn Hoa",
  "party": "Conservative/Conservateur",
  "votes": 6112,
  "votePercentage": 10.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24017,
  "candidate": "Marc Audet",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5410,
  "votePercentage": 9.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24017,
  "candidate": "Grégory De Luca",
  "party": "Green Party/Parti Vert",
  "votes": 2935,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24017,
  "candidate": "Sam Nassif",
  "party": "People's Party/Parti populaire",
  "votes": 527,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24019,
  "candidate": "Pierre Paul-Hus **",
  "party": "Conservative/Conservateur",
  "votes": 22484,
  "votePercentage": 38,
  "majority": 6431,
  "majorityPercentage": 10.9
},

{
  "index": 24019,
  "candidate": "Alain D'Eer",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 16053,
  "votePercentage": 27.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24019,
  "candidate": "René-Paul Coly",
  "party": "Liberal/Libéral",
  "votes": 12584,
  "votePercentage": 21.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24019,
  "candidate": "Guillaume Bourdeau",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4554,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24019,
  "candidate": "Samuel Moisan-Domm",
  "party": "Green Party/Parti Vert",
  "votes": 2042,
  "votePercentage": 3.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24019,
  "candidate": "Joey Pronovost",
  "party": "People's Party/Parti populaire",
  "votes": 1379,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Brenda Shanahan **",
  "party": "Liberal/Libéral",
  "votes": 20118,
  "votePercentage": 38.4,
  "majority": 639,
  "majorityPercentage": 1.2
},

{
  "index": 24021,
  "candidate": "Claudia Valdivia",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 19479,
  "votePercentage": 37.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Hugues Laplante",
  "party": "Conservative/Conservateur",
  "votes": 5851,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Marika Lalime",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4005,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Meryam Haddad",
  "party": "Green Party/Parti Vert",
  "votes": 1929,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Jeff Benoit",
  "party": "People's Party/Parti populaire",
  "votes": 563,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Marc Gagnon",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 393,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24021,
  "candidate": "Pierre Chénier",
  "party": "ML/ML",
  "votes": 64,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Richard Martel **",
  "party": "Conservative/Conservateur",
  "votes": 16155,
  "votePercentage": 36.8,
  "majority": 834,
  "majorityPercentage": 1.9
},

{
  "index": 24022,
  "candidate": "Valérie Tremblay",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15321,
  "votePercentage": 34.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Dajana Dautovic",
  "party": "Liberal/Libéral",
  "votes": 7504,
  "votePercentage": 17.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Stéphane Girard",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2855,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Lynda Youde",
  "party": "Green Party/Parti Vert",
  "votes": 1388,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Jimmy Voyer",
  "party": "People's Party/Parti populaire",
  "votes": 359,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24022,
  "candidate": "Line Bélanger",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 299,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Marie-Claude Bibeau **",
  "party": "Liberal/Libéral",
  "votes": 21731,
  "votePercentage": 37.3,
  "majority": 3160,
  "majorityPercentage": 5.4
},

{
  "index": 24023,
  "candidate": "David Benoît",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18571,
  "votePercentage": 31.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Jessy Mc Neil",
  "party": "Conservative/Conservateur",
  "votes": 8446,
  "votePercentage": 14.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Naomie Mathieu Chauvette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5607,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Jean Rousseau",
  "party": "Green Party/Parti Vert",
  "votes": 3044,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Paul Reed",
  "party": "People's Party/Parti populaire",
  "votes": 586,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24023,
  "candidate": "Jonathan Therrien",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 252,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Anju Dhillon **",
  "party": "Liberal/Libéral",
  "votes": 27821,
  "votePercentage": 52.9,
  "majority": 18847,
  "majorityPercentage": 35.8
},

{
  "index": 24024,
  "candidate": "Jean-Frédéric Vaudry",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 8974,
  "votePercentage": 17.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Lori Morrison",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6207,
  "votePercentage": 11.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Céline Laquerre",
  "party": "Conservative/Conservateur",
  "votes": 5543,
  "votePercentage": 10.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Réjean Malette",
  "party": "Green Party/Parti Vert",
  "votes": 2898,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Arash Torbati",
  "party": "People's Party/Parti populaire",
  "votes": 528,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Fang Hu",
  "party": "PC Party/Parti PC",
  "votes": 426,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24024,
  "candidate": "Xavier Watso",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 177,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Martin Champoux",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 24574,
  "votePercentage": 44.8,
  "majority": 15022,
  "majorityPercentage": 27.4
},

{
  "index": 24025,
  "candidate": "William Morales",
  "party": "Liberal/Libéral",
  "votes": 9552,
  "votePercentage": 17.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Jessica Ebacher",
  "party": "Conservative/Conservateur",
  "votes": 9083,
  "votePercentage": 16.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "François Choquette **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8716,
  "votePercentage": 15.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Frédérik Bernier",
  "party": "Green Party/Parti Vert",
  "votes": 1856,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Steeve Paquet",
  "party": "People's Party/Parti populaire",
  "votes": 525,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Réal Batrhino",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 270,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24025,
  "candidate": "Lucas Munger",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 248,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Diane Lebouthillier **",
  "party": "Liberal/Libéral",
  "votes": 16296,
  "votePercentage": 42.5,
  "majority": 637,
  "majorityPercentage": 1.7
},

{
  "index": 24026,
  "candidate": "Guy Bernatchez",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15659,
  "votePercentage": 40.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Jean-Pierre Pigeon",
  "party": "Conservative/Conservateur",
  "votes": 3022,
  "votePercentage": 7.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Lynn Beaulieu",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1722,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Dennis Drainville",
  "party": "Green Party/Parti Vert",
  "votes": 1130,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Jay Cowboy",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 353,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24026,
  "candidate": "Eric Hébert",
  "party": "People's Party/Parti populaire",
  "votes": 198,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Steven MacKinnon **",
  "party": "Liberal/Libéral",
  "votes": 29084,
  "votePercentage": 52.1,
  "majority": 17158,
  "majorityPercentage": 30.8
},

{
  "index": 24027,
  "candidate": "Geneviève Nadeau",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 11926,
  "votePercentage": 21.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Eric Chaurette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6128,
  "votePercentage": 11,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Sylvie Goneau",
  "party": "Conservative/Conservateur",
  "votes": 5745,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Guy Dostaler",
  "party": "Green Party/Parti Vert",
  "votes": 2264,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Mario-Roberto Lam",
  "party": "People's Party/Parti populaire",
  "votes": 560,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24027,
  "candidate": "Pierre Soublière",
  "party": "ML/ML",
  "votes": 76,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Soraya Martinez Ferrada",
  "party": "Liberal/Libéral",
  "votes": 18008,
  "votePercentage": 34,
  "majority": 328,
  "majorityPercentage": 0.6
},

{
  "index": 24028,
  "candidate": "Simon Marchand",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17680,
  "votePercentage": 33.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Catheryn Roy-Goyette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11451,
  "votePercentage": 21.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Robert D. Morais",
  "party": "Green Party/Parti Vert",
  "votes": 2618,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Christine Marcoux",
  "party": "Conservative/Conservateur",
  "votes": 2381,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Stepan Balatsko",
  "party": "People's Party/Parti populaire",
  "votes": 377,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Chinook Blais-Leduc",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 314,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "Christine Dandenault",
  "party": "ML/ML",
  "votes": 107,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24028,
  "candidate": "JP Fortin",
  "party": "Communist/Communiste",
  "votes": 101,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Pablo Rodriguez **",
  "party": "Liberal/Libéral",
  "votes": 29543,
  "votePercentage": 58.7,
  "majority": 19564,
  "majorityPercentage": 38.8
},

{
  "index": 24029,
  "candidate": "Jacques Binette",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 9979,
  "votePercentage": 19.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Guy Croteau",
  "party": "Conservative/Conservateur",
  "votes": 4808,
  "votePercentage": 9.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Chu Anh Pham",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4130,
  "votePercentage": 8.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Domenico Cusmano",
  "party": "Green Party/Parti Vert",
  "votes": 1373,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Patrick St-Onge",
  "party": "People's Party/Parti populaire",
  "votes": 459,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24029,
  "candidate": "Yves Le Seigle",
  "party": "ML/ML",
  "votes": 71,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Greg Fergus **",
  "party": "Liberal/Libéral",
  "votes": 29732,
  "votePercentage": 54.1,
  "majority": 21721,
  "majorityPercentage": 39.5
},

{
  "index": 24030,
  "candidate": "Joanie Riopel",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 8011,
  "votePercentage": 14.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Nicolas Thibodeau",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7467,
  "votePercentage": 13.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Mike Duggan",
  "party": "Conservative/Conservateur",
  "votes": 4979,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Josée Poirier Defoy",
  "party": "Green Party/Parti Vert",
  "votes": 3869,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Rowen Tanguay",
  "party": "People's Party/Parti populaire",
  "votes": 638,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Sébastien Grenier",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 195,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24030,
  "candidate": "Alexandre Deschênes",
  "party": "ML/ML",
  "votes": 102,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Gabriel Ste-Marie **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 33590,
  "votePercentage": 58.2,
  "majority": 20595,
  "majorityPercentage": 35.7
},

{
  "index": 24031,
  "candidate": "Michel Bourgeois",
  "party": "Liberal/Libéral",
  "votes": 12995,
  "votePercentage": 22.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Jean-Martin Masse",
  "party": "Conservative/Conservateur",
  "votes": 5176,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Julienne Soumaoro",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2623,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Érica Poirier",
  "party": "Green Party/Parti Vert",
  "votes": 2343,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Sylvain Prescott",
  "party": "People's Party/Parti populaire",
  "votes": 498,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24031,
  "candidate": "Paul Savard",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 474,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24032,
  "candidate": "Mario Simard",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17577,
  "votePercentage": 35.6,
  "majority": 5436,
  "majorityPercentage": 11.0
},

{
  "index": 24032,
  "candidate": "Karine Trudel **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12141,
  "votePercentage": 24.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24032,
  "candidate": "Philippe Gagnon",
  "party": "Conservative/Conservateur",
  "votes": 10338,
  "votePercentage": 20.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24032,
  "candidate": "Vincent Garneau",
  "party": "Liberal/Libéral",
  "votes": 7849,
  "votePercentage": 15.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24032,
  "candidate": "Lyne Bourdages",
  "party": "Green Party/Parti Vert",
  "votes": 1009,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24032,
  "candidate": "Sylvie Théodore",
  "party": "People's Party/Parti populaire",
  "votes": 453,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Mario Beaulieu **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 26010,
  "votePercentage": 46.8,
  "majority": 9112,
  "majorityPercentage": 16.4
},

{
  "index": 24033,
  "candidate": "Jonathan Plamondon",
  "party": "Liberal/Libéral",
  "votes": 16898,
  "votePercentage": 30.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Ève Péclet",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6057,
  "votePercentage": 10.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Robert Coutu",
  "party": "Conservative/Conservateur",
  "votes": 3984,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Franco Fiori",
  "party": "Green Party/Parti Vert",
  "votes": 1910,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Randy Manseau",
  "party": "People's Party/Parti populaire",
  "votes": 388,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Jacinthe Lafrenaye",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 199,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24033,
  "candidate": "Geneviève Royer",
  "party": "ML/ML",
  "votes": 88,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Alain Therrien",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 25707,
  "votePercentage": 41.8,
  "majority": 3203,
  "majorityPercentage": 5.2
},

{
  "index": 24034,
  "candidate": "Jean-Claude Poissant **",
  "party": "Liberal/Libéral",
  "votes": 22504,
  "votePercentage": 36.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Isabelle Lapointe",
  "party": "Conservative/Conservateur",
  "votes": 5540,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Victoria Hernandez",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4744,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Barbara Joannette",
  "party": "Green Party/Parti Vert",
  "votes": 2565,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Gregory Yablunovsky",
  "party": "People's Party/Parti populaire",
  "votes": 393,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24034,
  "candidate": "Normand Chouinard",
  "party": "ML/ML",
  "votes": 100,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24035,
  "candidate": "Alexis Brunelle-Duceppe",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 23839,
  "votePercentage": 44,
  "majority": 10206,
  "majorityPercentage": 18.8
},

{
  "index": 24035,
  "candidate": "Richard Hébert **",
  "party": "Liberal/Libéral",
  "votes": 13633,
  "votePercentage": 25.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24035,
  "candidate": "Jocelyn Fradette",
  "party": "Conservative/Conservateur",
  "votes": 12544,
  "votePercentage": 23.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24035,
  "candidate": "Jean-Simon Fortin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2753,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24035,
  "candidate": "Julie Gagnon-Bond",
  "party": "Green Party/Parti Vert",
  "votes": 1010,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24035,
  "candidate": "Danny Boudreault",
  "party": "People's Party/Parti populaire",
  "votes": 448,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Francis Scarpaleggia **",
  "party": "Liberal/Libéral",
  "votes": 34622,
  "votePercentage": 58.2,
  "majority": 25539,
  "majorityPercentage": 42.9
},

{
  "index": 24036,
  "candidate": "Ann Francis",
  "party": "Conservative/Conservateur",
  "votes": 9083,
  "votePercentage": 15.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Dana Chevalier",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7263,
  "votePercentage": 12.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Milan Kona-Mancini",
  "party": "Green Party/Parti Vert",
  "votes": 4176,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Julie Benoît",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 3169,
  "votePercentage": 5.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Gary Charles",
  "party": "People's Party/Parti populaire",
  "votes": 805,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Victoria de Martigny",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 379,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24036,
  "candidate": "Ralston Coelho",
  "party": "Nationalist/Nationaliste",
  "votes": 28,
  "votePercentage": 0,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "David Lametti **",
  "party": "Liberal/Libéral",
  "votes": 22803,
  "votePercentage": 43.5,
  "majority": 10184,
  "majorityPercentage": 19.4
},

{
  "index": 24037,
  "candidate": "Isabel Dion",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 12619,
  "votePercentage": 24.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Steven Scott",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8628,
  "votePercentage": 16.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Claudio Rocchi",
  "party": "Conservative/Conservateur",
  "votes": 3690,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Jency Mercier",
  "party": "Green Party/Parti Vert",
  "votes": 3583,
  "votePercentage": 6.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Daniel Turgeon",
  "party": "People's Party/Parti populaire",
  "votes": 490,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Julien Côté",
  "party": "Independent/Indépendant(e)",
  "votes": 274,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Rhino Jacques Bélanger",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 265,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24037,
  "candidate": "Eileen Studd",
  "party": "ML/ML",
  "votes": 39,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Marie-Hélène Gaudreau",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 30625,
  "votePercentage": 46.8,
  "majority": 8970,
  "majorityPercentage": 13.7
},

{
  "index": 24038,
  "candidate": "David Graham **",
  "party": "Liberal/Libéral",
  "votes": 21655,
  "votePercentage": 33.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Serge Grégoire",
  "party": "Conservative/Conservateur",
  "votes": 4983,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Claude Dufour",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4122,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Gaël Chantrel",
  "party": "Green Party/Parti Vert",
  "votes": 3157,
  "votePercentage": 4.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Richard Evanko",
  "party": "People's Party/Parti populaire",
  "votes": 418,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Ludovic Schneider",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 272,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24038,
  "candidate": "Michel Leclerc",
  "party": "Independent/Indépendant(e)",
  "votes": 174,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Steven Guilbeault",
  "party": "Liberal/Libéral",
  "votes": 22306,
  "votePercentage": 41.8,
  "majority": 8853,
  "majorityPercentage": 16.6
},

{
  "index": 24039,
  "candidate": "Nimâ Machouf",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13453,
  "votePercentage": 25.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Michel Duchesne",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 12188,
  "votePercentage": 22.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Jamil Azzaoui",
  "party": "Green Party/Parti Vert",
  "votes": 3225,
  "votePercentage": 6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Lise des Greniers",
  "party": "Conservative/Conservateur",
  "votes": 1502,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Christine Bui",
  "party": "People's Party/Parti populaire",
  "votes": 320,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Archie Morals",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 208,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Serge Lachapelle",
  "party": "ML/ML",
  "votes": 98,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Adrien Welsh",
  "party": "Communist/Communiste",
  "votes": 67,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24039,
  "candidate": "Dimitri Mourkes",
  "party": "Independent/Indépendant(e)",
  "votes": 42,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24040,
  "candidate": "Fayçal EL-Khoury **",
  "party": "Liberal/Libéral",
  "votes": 26031,
  "votePercentage": 48.2,
  "majority": 14911,
  "majorityPercentage": 27.6
},

{
  "index": 24040,
  "candidate": "Nacera Beddad",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 11120,
  "votePercentage": 20.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24040,
  "candidate": "Tom Pentefountas",
  "party": "Conservative/Conservateur",
  "votes": 8816,
  "votePercentage": 16.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24040,
  "candidate": "Noémia Onofre De Lima",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4803,
  "votePercentage": 8.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24040,
  "candidate": "Sari Madi",
  "party": "Green Party/Parti Vert",
  "votes": 2306,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24040,
  "candidate": "Marie-Louise Beauchamp",
  "party": "People's Party/Parti populaire",
  "votes": 885,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24042,
  "candidate": "Jacques Gourde **",
  "party": "Conservative/Conservateur",
  "votes": 28297,
  "votePercentage": 44.6,
  "majority": 12376,
  "majorityPercentage": 19.5
},

{
  "index": 24042,
  "candidate": "François-Noël Brault",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15921,
  "votePercentage": 25.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24042,
  "candidate": "Ghislain Daigle",
  "party": "Liberal/Libéral",
  "votes": 10761,
  "votePercentage": 16.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24042,
  "candidate": "Christel Marchand",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4355,
  "votePercentage": 6.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24042,
  "candidate": "Marc Fontaine",
  "party": "People's Party/Parti populaire",
  "votes": 2247,
  "votePercentage": 3.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24042,
  "candidate": "Patrick Kerr",
  "party": "Green Party/Parti Vert",
  "votes": 1908,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24041,
  "candidate": "Sherry Romanado **",
  "party": "Liberal/Libéral",
  "votes": 20114,
  "votePercentage": 39,
  "majority": 1320,
  "majorityPercentage": 2.6
},

{
  "index": 24041,
  "candidate": "Cathy Lepage",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18794,
  "votePercentage": 36.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24041,
  "candidate": "Kalden Dhatsenpa",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5289,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24041,
  "candidate": "Stéphane Robichaud",
  "party": "Conservative/Conservateur",
  "votes": 3811,
  "votePercentage": 7.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24041,
  "candidate": "Casandra Poitras",
  "party": "Green Party/Parti Vert",
  "votes": 2978,
  "votePercentage": 5.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24041,
  "candidate": "Henri Cousineau",
  "party": "People's Party/Parti populaire",
  "votes": 558,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Denis Trudel",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 23061,
  "votePercentage": 38.5,
  "majority": 2590,
  "majorityPercentage": 4.3
},

{
  "index": 24043,
  "candidate": "Réjean Hébert",
  "party": "Liberal/Libéral",
  "votes": 20471,
  "votePercentage": 34.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Pierre Nantel **",
  "party": "Green Party/Parti Vert",
  "votes": 6745,
  "votePercentage": 11.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Éric Ferland",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5104,
  "votePercentage": 8.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Patrick Clune",
  "party": "Conservative/Conservateur",
  "votes": 3779,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Ellen Comeau",
  "party": "People's Party/Parti populaire",
  "votes": 467,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24043,
  "candidate": "Pierre-Luc Filion",
  "party": "Independent/Indépendant(e)",
  "votes": 217,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Joël Lightbound **",
  "party": "Liberal/Libéral",
  "votes": 25140,
  "votePercentage": 40.5,
  "majority": 7765,
  "majorityPercentage": 12.5
},

{
  "index": 24044,
  "candidate": "Christian Hébert",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17375,
  "votePercentage": 28,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Marie-Josée Guérette",
  "party": "Conservative/Conservateur",
  "votes": 10912,
  "votePercentage": 17.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Jérémie Juneau",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4884,
  "votePercentage": 7.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Macarena Diab",
  "party": "Green Party/Parti Vert",
  "votes": 2466,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Daniel Brisson",
  "party": "People's Party/Parti populaire",
  "votes": 1016,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24044,
  "candidate": "Ali Dahan",
  "party": "Independent/Indépendant(e)",
  "votes": 267,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24045,
  "candidate": "Gérard Deltell **",
  "party": "Conservative/Conservateur",
  "votes": 29279,
  "votePercentage": 44.7,
  "majority": 14605,
  "majorityPercentage": 22.3
},

{
  "index": 24045,
  "candidate": "Jeanne-Paule Desgagnés",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 14674,
  "votePercentage": 22.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24045,
  "candidate": "Jean-Christophe Cusson",
  "party": "Liberal/Libéral",
  "votes": 13571,
  "votePercentage": 20.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24045,
  "candidate": "Colette Amram Ducharme",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4339,
  "votePercentage": 6.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24045,
  "candidate": "Sandra Mara Riedo",
  "party": "Green Party/Parti Vert",
  "votes": 2155,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24045,
  "candidate": "Guillaume Côté",
  "party": "People's Party/Parti populaire",
  "votes": 1543,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24046,
  "candidate": "Marilène Gill **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 21768,
  "votePercentage": 53.9,
  "majority": 13975,
  "majorityPercentage": 34.6
},

{
  "index": 24046,
  "candidate": "Dave Savard",
  "party": "Liberal/Libéral",
  "votes": 7793,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24046,
  "candidate": "François Corriveau",
  "party": "Conservative/Conservateur",
  "votes": 7771,
  "votePercentage": 19.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24046,
  "candidate": "Colleen McCool",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1482,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24046,
  "candidate": "Jacques Gélineau",
  "party": "Green Party/Parti Vert",
  "votes": 1293,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24046,
  "candidate": "Gabriel Côté",
  "party": "People's Party/Parti populaire",
  "votes": 283,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Yves Robillard **",
  "party": "Liberal/Libéral",
  "votes": 24865,
  "votePercentage": 44.5,
  "majority": 6796,
  "majorityPercentage": 12.2
},

{
  "index": 24065,
  "candidate": "Lizabel Nitoi",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 18069,
  "votePercentage": 32.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Sonia Baudelot",
  "party": "Conservative/Conservateur",
  "votes": 5423,
  "votePercentage": 9.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Ali Faour",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4741,
  "votePercentage": 8.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Bao Tran Le",
  "party": "Green Party/Parti Vert",
  "votes": 2111,
  "votePercentage": 3.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Emilio Migliozzi",
  "party": "People's Party/Parti populaire",
  "votes": 465,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24065,
  "candidate": "Elias Progakis",
  "party": "Independent/Indépendant(e)",
  "votes": 143,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Luc Berthold **",
  "party": "Conservative/Conservateur",
  "votes": 23392,
  "votePercentage": 49.2,
  "majority": 11143,
  "majorityPercentage": 23.5
},

{
  "index": 24047,
  "candidate": "Priscilla Corbeil",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 12249,
  "votePercentage": 25.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Isabelle Grégoire",
  "party": "Liberal/Libéral",
  "votes": 7388,
  "votePercentage": 15.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Mathieu Boisvert",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 1936,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Nicole Charette",
  "party": "Green Party/Parti Vert",
  "votes": 1258,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Marie  Claude Lauzier",
  "party": "People's Party/Parti populaire",
  "votes": 812,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Damien Roy",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 256,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24047,
  "candidate": "Jean Paradis",
  "party": "Independent/Indépendant(e)",
  "votes": 217,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "Simon Marcil **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 33219,
  "votePercentage": 51.1,
  "majority": 17057,
  "majorityPercentage": 26.2
},

{
  "index": 24048,
  "candidate": "Karl Trudel",
  "party": "Liberal/Libéral",
  "votes": 16162,
  "votePercentage": 24.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "François Desrochers",
  "party": "Conservative/Conservateur",
  "votes": 5940,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "Anne-Marie Saint-Germain",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5219,
  "votePercentage": 8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "Julie Tremblay",
  "party": "Green Party/Parti Vert",
  "votes": 3517,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "Christian Montpetit",
  "party": "People's Party/Parti populaire",
  "votes": 641,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24048,
  "candidate": "Pietro Biacchi",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 332,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Stéphane Bergeron",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 25366,
  "votePercentage": 42.8,
  "majority": 4305,
  "majorityPercentage": 7.3
},

{
  "index": 24049,
  "candidate": "Michel Picard **",
  "party": "Liberal/Libéral",
  "votes": 21061,
  "votePercentage": 35.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Djaouida Sellah",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4984,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Julie Sauvageau",
  "party": "Conservative/Conservateur",
  "votes": 4138,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Jean-Charles Pelland",
  "party": "Green Party/Parti Vert",
  "votes": 2967,
  "votePercentage": 5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Julie Lavallée",
  "party": "People's Party/Parti populaire",
  "votes": 501,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24049,
  "candidate": "Thomas Thibault-Vincent",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 211,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Luc Thériault **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 31791,
  "votePercentage": 58,
  "majority": 20591,
  "majorityPercentage": 37.6
},

{
  "index": 24050,
  "candidate": "Isabel Sayegh",
  "party": "Liberal/Libéral",
  "votes": 11200,
  "votePercentage": 20.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Gisèle Desroches",
  "party": "Conservative/Conservateur",
  "votes": 4942,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Julian Bonello-Stauch",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3514,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Mathieu Goyette",
  "party": "Green Party/Parti Vert",
  "votes": 2416,
  "votePercentage": 4.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Hugo Clénin",
  "party": "People's Party/Parti populaire",
  "votes": 524,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24050,
  "candidate": "Marc Labelle",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 419,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24051,
  "candidate": "Bernard Généreux **",
  "party": "Conservative/Conservateur",
  "votes": 20989,
  "votePercentage": 41.7,
  "majority": 4728,
  "majorityPercentage": 9.4
},

{
  "index": 24051,
  "candidate": "Louis Gagnon",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 16261,
  "votePercentage": 32.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24051,
  "candidate": "Aladin Legault d'Auteuil",
  "party": "Liberal/Libéral",
  "votes": 8210,
  "votePercentage": 16.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24051,
  "candidate": "Hugo Latulippe",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3481,
  "votePercentage": 6.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24051,
  "candidate": "Denis Ducharme",
  "party": "Green Party/Parti Vert",
  "votes": 1030,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24051,
  "candidate": "Serge Haché",
  "party": "People's Party/Parti populaire",
  "votes": 417,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Anthony Housefather **",
  "party": "Liberal/Libéral",
  "votes": 24590,
  "votePercentage": 56.3,
  "majority": 13703,
  "majorityPercentage": 31.4
},

{
  "index": 24052,
  "candidate": "David Tordjman",
  "party": "Conservative/Conservateur",
  "votes": 10887,
  "votePercentage": 24.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Eric-Abel Baland",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3609,
  "votePercentage": 8.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Clément Badra",
  "party": "Green Party/Parti Vert",
  "votes": 2389,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Xavier Levesque",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 1757,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Zachary Lozoff",
  "party": "People's Party/Parti populaire",
  "votes": 362,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24052,
  "candidate": "Diane Johnston",
  "party": "ML/ML",
  "votes": 85,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Marc Garneau **",
  "party": "Liberal/Libéral",
  "votes": 28323,
  "votePercentage": 56.3,
  "majority": 20570,
  "majorityPercentage": 40.9
},

{
  "index": 24053,
  "candidate": "Franklin Gertler",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7753,
  "votePercentage": 15.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Neil Drabkin",
  "party": "Conservative/Conservateur",
  "votes": 5759,
  "votePercentage": 11.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Robert Green",
  "party": "Green Party/Parti Vert",
  "votes": 5397,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Jennifer Jetté",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 2359,
  "votePercentage": 4.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "André Valiquette",
  "party": "People's Party/Parti populaire",
  "votes": 565,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Jeffery A. Thomas",
  "party": "Independent/Indépendant(e)",
  "votes": 98,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24053,
  "candidate": "Rachel Hoffman",
  "party": "ML/ML",
  "votes": 67,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Rachel Bendayan **",
  "party": "Liberal/Libéral",
  "votes": 19148,
  "votePercentage": 46.2,
  "majority": 10829,
  "majorityPercentage": 26.1
},

{
  "index": 24054,
  "candidate": "Andrea Clarke",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8319,
  "votePercentage": 20.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Célia Grimard",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 5741,
  "votePercentage": 13.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Daniel Green",
  "party": "Green Party/Parti Vert",
  "votes": 5018,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Jasmine Louras",
  "party": "Conservative/Conservateur",
  "votes": 2707,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Sabin Lévesque",
  "party": "People's Party/Parti populaire",
  "votes": 369,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24054,
  "candidate": "Mark John Hiemstra",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 155,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Justin Trudeau **",
  "party": "Liberal/Libéral",
  "votes": 25957,
  "votePercentage": 51.1,
  "majority": 16209,
  "majorityPercentage": 31.9
},

{
  "index": 24055,
  "candidate": "Christine Paré",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9748,
  "votePercentage": 19.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Christian Gagnon",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 8124,
  "votePercentage": 16,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Juan Vazquez",
  "party": "Green Party/Parti Vert",
  "votes": 3741,
  "votePercentage": 7.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Sophie Veilleux",
  "party": "Conservative/Conservateur",
  "votes": 2155,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Jean-Patrick Cacereco Berthiaume",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 363,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Mark Sibthorpe",
  "party": "People's Party/Parti populaire",
  "votes": 322,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Susanne Lefebvre",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 186,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Alain Magnan",
  "party": "Independent/Indépendant(e)",
  "votes": 76,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Luc Lupien",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 75,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24055,
  "candidate": "Steve Penner",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 34,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24014,
  "candidate": "Xavier Barsalou-Duval **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 31009,
  "votePercentage": 51,
  "majority": 13676,
  "majorityPercentage": 22.5
},

{
  "index": 24014,
  "candidate": "Simon Chalifoux",
  "party": "Liberal/Libéral",
  "votes": 17333,
  "votePercentage": 28.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24014,
  "candidate": "Mathieu Daviault",
  "party": "Conservative/Conservateur",
  "votes": 4910,
  "votePercentage": 8.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24014,
  "candidate": "Sean English",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4192,
  "votePercentage": 6.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24014,
  "candidate": "Dany Gariépy",
  "party": "Green Party/Parti Vert",
  "votes": 2955,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24014,
  "candidate": "Clifford Albert",
  "party": "People's Party/Parti populaire",
  "votes": 384,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Sameer Zuberi",
  "party": "Liberal/Libéral",
  "votes": 31305,
  "votePercentage": 56.4,
  "majority": 21508,
  "majorityPercentage": 38.8
},

{
  "index": 24056,
  "candidate": "Mariam Ishak",
  "party": "Conservative/Conservateur",
  "votes": 9797,
  "votePercentage": 17.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Bruno Ibrahim El-Khoury",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5687,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Edline Henri",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 4469,
  "votePercentage": 8.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Lisa Mintz",
  "party": "Green Party/Parti Vert",
  "votes": 2866,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Lee Weishar",
  "party": "People's Party/Parti populaire",
  "votes": 711,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Martin Plante",
  "party": "Independent/Indépendant(e)",
  "votes": 394,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24056,
  "candidate": "Shahid Khan",
  "party": "Independent/Indépendant(e)",
  "votes": 242,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "William Amos **",
  "party": "Liberal/Libéral",
  "votes": 30217,
  "votePercentage": 48.9,
  "majority": 19801,
  "majorityPercentage": 32.0
},

{
  "index": 24057,
  "candidate": "Dave Blackburn",
  "party": "Conservative/Conservateur",
  "votes": 10416,
  "votePercentage": 16.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Jonathan Carreiro-Benoit",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 9929,
  "votePercentage": 16.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Denise Giroux",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6503,
  "votePercentage": 10.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Claude Bertrand",
  "party": "Green Party/Parti Vert",
  "votes": 3762,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Mario Belec",
  "party": "People's Party/Parti populaire",
  "votes": 775,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Shawn Stewart",
  "party": "VCP/CAC",
  "votes": 194,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24057,
  "candidate": "Louis Lang",
  "party": "ML/ML",
  "votes": 51,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24058,
  "candidate": "Joël Godin **",
  "party": "Conservative/Conservateur",
  "votes": 28110,
  "votePercentage": 43.5,
  "majority": 12403,
  "majorityPercentage": 19.2
},

{
  "index": 24058,
  "candidate": "Mathieu Bonsaint",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15707,
  "votePercentage": 24.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24058,
  "candidate": "Annie Talbot",
  "party": "Liberal/Libéral",
  "votes": 12876,
  "votePercentage": 19.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24058,
  "candidate": "David-Roger Gagnon",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3758,
  "votePercentage": 5.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24058,
  "candidate": "Marie-Claude Gaudet",
  "party": "Green Party/Parti Vert",
  "votes": 2308,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24058,
  "candidate": "Luca Abbatiello",
  "party": "People's Party/Parti populaire",
  "votes": 1915,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Jean-Yves Duclos **",
  "party": "Liberal/Libéral",
  "votes": 18047,
  "votePercentage": 33.3,
  "majority": 325,
  "majorityPercentage": 0.6
},

{
  "index": 24059,
  "candidate": "Christiane Gagnon",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17722,
  "votePercentage": 32.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Bianca Boutin",
  "party": "Conservative/Conservateur",
  "votes": 8118,
  "votePercentage": 15,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Tommy Bureau",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6220,
  "votePercentage": 11.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Luc Joli-Coeur",
  "party": "Green Party/Parti Vert",
  "votes": 2949,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Bruno Dabiré",
  "party": "People's Party/Parti populaire",
  "votes": 674,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Sébastien CoRhino",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 349,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24059,
  "candidate": "Luc Paquin",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 119,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Monique Pauzé **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 34837,
  "votePercentage": 53.2,
  "majority": 16726,
  "majorityPercentage": 25.6
},

{
  "index": 24060,
  "candidate": "Josée Larose",
  "party": "Liberal/Libéral",
  "votes": 18111,
  "votePercentage": 27.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Pierre Branchaud",
  "party": "Conservative/Conservateur",
  "votes": 4878,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Meryem Benslimane",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4470,
  "votePercentage": 6.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Diane Beauregard",
  "party": "Green Party/Parti Vert",
  "votes": 2289,
  "votePercentage": 3.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Samuel Saint-Laurent",
  "party": "People's Party/Parti populaire",
  "votes": 524,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24060,
  "candidate": "Micheline Boucher Granger",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 347,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24061,
  "candidate": "Alain Rayes **",
  "party": "Conservative/Conservateur",
  "votes": 26553,
  "votePercentage": 45.3,
  "majority": 10014,
  "majorityPercentage": 17.1
},

{
  "index": 24061,
  "candidate": "Olivier Nolin",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 16539,
  "votePercentage": 28.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24061,
  "candidate": "Marc Patry",
  "party": "Liberal/Libéral",
  "votes": 8868,
  "votePercentage": 15.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24061,
  "candidate": "Laura Horth-Lepage",
  "party": "Green Party/Parti Vert",
  "votes": 3133,
  "votePercentage": 5.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24061,
  "candidate": "Olivier Guérin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2864,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24061,
  "candidate": "Jean Landry",
  "party": "People's Party/Parti populaire",
  "votes": 681,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Maxime Blanchette-Joncas",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17314,
  "votePercentage": 37.8,
  "majority": 4264,
  "majorityPercentage": 9.3
},

{
  "index": 24018,
  "candidate": "Guy Caron **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13050,
  "votePercentage": 28.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Chantal Pilon",
  "party": "Liberal/Libéral",
  "votes": 10095,
  "votePercentage": 22.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Nancy Brassard-Fortin",
  "party": "Conservative/Conservateur",
  "votes": 4073,
  "votePercentage": 8.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Jocelyn Rioux",
  "party": "Green Party/Parti Vert",
  "votes": 824,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Pierre Lacombe",
  "party": "People's Party/Parti populaire",
  "votes": 232,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24018,
  "candidate": "Lysane Picker-Paquin",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 179,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24062,
  "candidate": "Luc Desilets",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 23629,
  "votePercentage": 40.6,
  "majority": 2620,
  "majorityPercentage": 4.5
},

{
  "index": 24062,
  "candidate": "Linda Lapointe **",
  "party": "Liberal/Libéral",
  "votes": 21009,
  "votePercentage": 36.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24062,
  "candidate": "Joseph Hakizimana",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5002,
  "votePercentage": 8.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24062,
  "candidate": "Maikel Mikhael",
  "party": "Conservative/Conservateur",
  "votes": 4684,
  "votePercentage": 8.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24062,
  "candidate": "Ceylan Borgers",
  "party": "Green Party/Parti Vert",
  "votes": 3015,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24062,
  "candidate": "Hans Roker Jr",
  "party": "People's Party/Parti populaire",
  "votes": 845,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Rhéal Fortin **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 31281,
  "votePercentage": 52,
  "majority": 17879,
  "majorityPercentage": 29.7
},

{
  "index": 24063,
  "candidate": "Florence Gagnon",
  "party": "Liberal/Libéral",
  "votes": 13402,
  "votePercentage": 22.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Sylvie Fréchette",
  "party": "Conservative/Conservateur",
  "votes": 7120,
  "votePercentage": 11.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Myriam Ouellette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4194,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Joey Leckman",
  "party": "Green Party/Parti Vert",
  "votes": 3345,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Normand Michaud",
  "party": "People's Party/Parti populaire",
  "votes": 407,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Nicolas Riqueur-Lainé",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 225,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24063,
  "candidate": "Lucie St-Gelais",
  "party": "Independent/Indépendant(e)",
  "votes": 127,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Alexandre Boulerice **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 25575,
  "votePercentage": 42.5,
  "majority": 10999,
  "majorityPercentage": 18.3
},

{
  "index": 24064,
  "candidate": "Geneviève Hinse",
  "party": "Liberal/Libéral",
  "votes": 14576,
  "votePercentage": 24.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Claude André",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 14306,
  "votePercentage": 23.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Jean Désy",
  "party": "Green Party/Parti Vert",
  "votes": 3539,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Johanna Sarfati",
  "party": "Conservative/Conservateur",
  "votes": 1405,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Jos Guitare Lavoie",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 346,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Bobby Pellerin",
  "party": "People's Party/Parti populaire",
  "votes": 293,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Normand Raymond",
  "party": "Communist/Communiste",
  "votes": 86,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24064,
  "candidate": "Gisèle Desrochers",
  "party": "ML/ML",
  "votes": 80,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24066,
  "candidate": "Simon-Pierre Savard-Tremblay",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 23143,
  "votePercentage": 41.4,
  "majority": 11240,
  "majorityPercentage": 20.1
},

{
  "index": 24066,
  "candidate": "René Vincelette",
  "party": "Liberal/Libéral",
  "votes": 11903,
  "votePercentage": 21.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24066,
  "candidate": "Brigitte Sansoucy **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10297,
  "votePercentage": 18.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24066,
  "candidate": "Bernard Barré",
  "party": "Conservative/Conservateur",
  "votes": 8062,
  "votePercentage": 14.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24066,
  "candidate": "Sabrina Huet-Côté",
  "party": "Green Party/Parti Vert",
  "votes": 2031,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24066,
  "candidate": "Jean-François Bélanger",
  "party": "People's Party/Parti populaire",
  "votes": 478,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "Christine Normandin",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 27750,
  "votePercentage": 44.8,
  "majority": 8844,
  "majorityPercentage": 14.3
},

{
  "index": 24067,
  "candidate": "Jean Rioux **",
  "party": "Liberal/Libéral",
  "votes": 18906,
  "votePercentage": 30.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "Martin Thibert",
  "party": "Conservative/Conservateur",
  "votes": 6612,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "Chantal Reeves",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4794,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "André-Philippe Chenail",
  "party": "Green Party/Parti Vert",
  "votes": 3127,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "Marc Hivon",
  "party": "People's Party/Parti populaire",
  "votes": 397,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24067,
  "candidate": "Yvon Savary",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 289,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Emmanuella Lambropoulos **",
  "party": "Liberal/Libéral",
  "votes": 23527,
  "votePercentage": 58.6,
  "majority": 16522,
  "majorityPercentage": 41.2
},

{
  "index": 24068,
  "candidate": "Richard Serour",
  "party": "Conservative/Conservateur",
  "votes": 7005,
  "votePercentage": 17.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Miranda Gallo",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4065,
  "votePercentage": 10.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Thérèse Miljours",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 2845,
  "votePercentage": 7.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Georgia Kokotsis",
  "party": "Green Party/Parti Vert",
  "votes": 2150,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Christopher Mikus",
  "party": "People's Party/Parti populaire",
  "votes": 484,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24068,
  "candidate": "Ginette Boutet",
  "party": "ML/ML",
  "votes": 71,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Patricia Lattanzio",
  "party": "Liberal/Libéral",
  "votes": 27866,
  "votePercentage": 61.3,
  "majority": 22443,
  "majorityPercentage": 49.4
},

{
  "index": 24069,
  "candidate": "Ilario Maiolo",
  "party": "Conservative/Conservateur",
  "votes": 5423,
  "votePercentage": 11.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Dominique Mougin",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 4351,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Hassan Guillet",
  "party": "Independent/Indépendant(e)",
  "votes": 3061,
  "votePercentage": 6.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Paulina Ayala",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2964,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Alessandra Szilagyi",
  "party": "Green Party/Parti Vert",
  "votes": 1183,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Tina Di Serio",
  "party": "People's Party/Parti populaire",
  "votes": 501,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24069,
  "candidate": "Garnet Colly",
  "party": "ML/ML",
  "votes": 85,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24070,
  "candidate": "François-Philippe Champagne **",
  "party": "Liberal/Libéral",
  "votes": 23104,
  "votePercentage": 39.6,
  "majority": 3154,
  "majorityPercentage": 5.4
},

{
  "index": 24070,
  "candidate": "Nicole Morin",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 19950,
  "votePercentage": 34.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24070,
  "candidate": "Bruno-Pier Courchesne",
  "party": "Conservative/Conservateur",
  "votes": 9542,
  "votePercentage": 16.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24070,
  "candidate": "Barthélémy Boisguérin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3071,
  "votePercentage": 5.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24070,
  "candidate": "Stéphanie Dufresne",
  "party": "Green Party/Parti Vert",
  "votes": 1809,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24070,
  "candidate": "Julie Déziel",
  "party": "People's Party/Parti populaire",
  "votes": 938,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Claude Debellefeuille",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 29975,
  "votePercentage": 47.7,
  "majority": 11293,
  "majorityPercentage": 18.0
},

{
  "index": 24071,
  "candidate": "Marc Faubert",
  "party": "Liberal/Libéral",
  "votes": 18682,
  "votePercentage": 29.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Cynthia Larivière",
  "party": "Conservative/Conservateur",
  "votes": 6116,
  "votePercentage": 9.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Joan Gottman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5024,
  "votePercentage": 8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Nahed AlShawa",
  "party": "Green Party/Parti Vert",
  "votes": 1997,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Alain Savard",
  "party": "People's Party/Parti populaire",
  "votes": 767,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24071,
  "candidate": "Luc Bertrand",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 342,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Andréanne Larouche",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 23503,
  "votePercentage": 38.6,
  "majority": 898,
  "majorityPercentage": 1.5
},

{
  "index": 24072,
  "candidate": "Pierre Breton **",
  "party": "Liberal/Libéral",
  "votes": 22605,
  "votePercentage": 37.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Nathalie Clermont",
  "party": "Conservative/Conservateur",
  "votes": 7495,
  "votePercentage": 12.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Raymonde Plamondon",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3705,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Katherine Turgeon",
  "party": "Green Party/Parti Vert",
  "votes": 2814,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Mariam Sabbagh",
  "party": "People's Party/Parti populaire",
  "votes": 497,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24072,
  "candidate": "Darlène Daviault",
  "party": "Pour l'Indépendance du Québec/Pour l'Indépendance du Québec",
  "votes": 294,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Élisabeth Brière",
  "party": "Liberal/Libéral",
  "votes": 17490,
  "votePercentage": 29.3,
  "majority": 609,
  "majorityPercentage": 1.0
},

{
  "index": 24073,
  "candidate": "Pierre-Luc Dusseault **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16881,
  "votePercentage": 28.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Claude Forgues",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15470,
  "votePercentage": 25.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Dany Sévigny",
  "party": "Conservative/Conservateur",
  "votes": 6362,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Mathieu Morin",
  "party": "Green Party/Parti Vert",
  "votes": 2716,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Edwin Moreno",
  "party": "Independent/Indépendant(e)",
  "votes": 471,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Steve Côté",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 219,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24073,
  "candidate": "Hubert Richard",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 117,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Michel Boudrias **",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 31029,
  "votePercentage": 50.6,
  "majority": 13085,
  "majorityPercentage": 21.3
},

{
  "index": 24075,
  "candidate": "Frédéric Beauchemin",
  "party": "Liberal/Libéral",
  "votes": 17944,
  "votePercentage": 29.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "France Gagnon",
  "party": "Conservative/Conservateur",
  "votes": 4640,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Maxime Beaudoin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4627,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Réjean Monette",
  "party": "Green Party/Parti Vert",
  "votes": 2277,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Jeffrey Barnes",
  "party": "People's Party/Parti populaire",
  "votes": 399,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Paul Vézina",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 260,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24075,
  "candidate": "Jade Hébert",
  "party": "Independent/Indépendant(e)",
  "votes": 159,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Louise Chabot",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 24486,
  "votePercentage": 41.8,
  "majority": 3498,
  "majorityPercentage": 6.0
},

{
  "index": 24013,
  "candidate": "Ramez Ayoub **",
  "party": "Liberal/Libéral",
  "votes": 20988,
  "votePercentage": 35.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Marie Claude Fournier",
  "party": "Conservative/Conservateur",
  "votes": 5264,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Hannah Wolker",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4431,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Normand Beaudet",
  "party": "Green Party/Parti Vert",
  "votes": 2710,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Désiré Mounanga",
  "party": "People's Party/Parti populaire",
  "votes": 366,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Alain Lamontagne",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 215,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24013,
  "candidate": "Andy Piano",
  "party": "Independent/Indépendant(e)",
  "votes": 89,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Louise Charbonneau",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 17240,
  "votePercentage": 28.5,
  "majority": 1466,
  "majorityPercentage": 2.4
},

{
  "index": 24076,
  "candidate": "Valérie Renaud-Martin",
  "party": "Liberal/Libéral",
  "votes": 15774,
  "votePercentage": 26.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Yves Lévesque",
  "party": "Conservative/Conservateur",
  "votes": 15240,
  "votePercentage": 25.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Robert Aubin **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10090,
  "votePercentage": 16.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Marie Duplessis",
  "party": "Green Party/Parti Vert",
  "votes": 1492,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Marc André Gingras",
  "party": "People's Party/Parti populaire",
  "votes": 565,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24076,
  "candidate": "Ronald St-Onge Lynch",
  "party": "Independent/Indépendant(e)",
  "votes": 137,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24074,
  "candidate": "Peter Schiefke **",
  "party": "Liberal/Libéral",
  "votes": 32254,
  "votePercentage": 47.3,
  "majority": 15654,
  "majorityPercentage": 23.0
},

{
  "index": 24074,
  "candidate": "Noémie Rouillard",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 16600,
  "votePercentage": 24.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24074,
  "candidate": "Karen Cox",
  "party": "Conservative/Conservateur",
  "votes": 7804,
  "votePercentage": 11.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24074,
  "candidate": "Amanda MacDonald",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7368,
  "votePercentage": 10.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24074,
  "candidate": "Cameron Stiff",
  "party": "Green Party/Parti Vert",
  "votes": 3405,
  "votePercentage": 5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24074,
  "candidate": "Kaylin Tam",
  "party": "People's Party/Parti populaire",
  "votes": 711,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Marc Miller **",
  "party": "Liberal/Libéral",
  "votes": 28087,
  "votePercentage": 53.5,
  "majority": 19813,
  "majorityPercentage": 37.7
},

{
  "index": 24077,
  "candidate": "Sophie Thiébaut",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8274,
  "votePercentage": 15.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Nadia Bourque",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 6899,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Michael Forian",
  "party": "Conservative/Conservateur",
  "votes": 4609,
  "votePercentage": 8.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Liana Canton Cusmano",
  "party": "Green Party/Parti Vert",
  "votes": 3718,
  "votePercentage": 7.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Jean Langlais",
  "party": "People's Party/Parti populaire",
  "votes": 520,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Tommy Gaudet",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 140,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Louise B. O'Sullivan",
  "party": "Independent/Indépendant(e)",
  "votes": 117,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Marc Patenaude",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 113,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24077,
  "candidate": "Linda Sullivan",
  "party": "ML/ML",
  "votes": 45,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24078,
  "candidate": "Annie Koutrakis",
  "party": "Liberal/Libéral",
  "votes": 26490,
  "votePercentage": 47.7,
  "majority": 11035,
  "majorityPercentage": 19.9
},

{
  "index": 24078,
  "candidate": "Claire-Emmanuelle Beaulieu",
  "party": "Bloc Québécois/Bloc Québécois",
  "votes": 15455,
  "votePercentage": 27.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24078,
  "candidate": "Rima El-Helou",
  "party": "Conservative/Conservateur",
  "votes": 5951,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24078,
  "candidate": "Vassif Aliev",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4779,
  "votePercentage": 8.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24078,
  "candidate": "Faiza R'Guiba",
  "party": "Green Party/Parti Vert",
  "votes": 2125,
  "votePercentage": 3.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 24078,
  "candidate": "Suzanne Brunelle",
  "party": "People's Party/Parti populaire",
  "votes": 733,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Mark Holland **",
  "party": "Liberal/Libéral",
  "votes": 35198,
  "votePercentage": 57.7,
  "majority": 19334,
  "majorityPercentage": 31.7
},

{
  "index": 35001,
  "candidate": "Tom Dingwall",
  "party": "Conservative/Conservateur",
  "votes": 15864,
  "votePercentage": 26,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Shokat Malik",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7033,
  "votePercentage": 11.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Maia Knight",
  "party": "Green Party/Parti Vert",
  "votes": 2040,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Susanna Russo",
  "party": "People's Party/Parti populaire",
  "votes": 588,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Allen Keith Hadley",
  "party": "Independent/Indépendant(e)",
  "votes": 186,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35001,
  "candidate": "Intab Ali",
  "party": "Independent/Indépendant(e)",
  "votes": 111,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35002,
  "candidate": "Carol Hughes **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16883,
  "votePercentage": 41.6,
  "majority": 6258,
  "majorityPercentage": 15.4
},

{
  "index": 35002,
  "candidate": "Dave Williamson",
  "party": "Conservative/Conservateur",
  "votes": 10625,
  "votePercentage": 26.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35002,
  "candidate": "Heather Wilson",
  "party": "Liberal/Libéral",
  "votes": 9879,
  "votePercentage": 24.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35002,
  "candidate": "Max Chapman",
  "party": "Green Party/Parti Vert",
  "votes": 2192,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35002,
  "candidate": "Dave Delisle",
  "party": "People's Party/Parti populaire",
  "votes": 887,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35002,
  "candidate": "Le Marquis De Marmalade",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 125,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35003,
  "candidate": "Leona Alleslev **",
  "party": "Conservative/Conservateur",
  "votes": 23568,
  "votePercentage": 44.4,
  "majority": 1060,
  "majorityPercentage": 2.0
},

{
  "index": 35003,
  "candidate": "Leah Taylor Roy",
  "party": "Liberal/Libéral",
  "votes": 22508,
  "votePercentage": 42.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35003,
  "candidate": "Aaron Brown",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3820,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35003,
  "candidate": "Timothy Flemming",
  "party": "Green Party/Parti Vert",
  "votes": 2154,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35003,
  "candidate": "Priya Patil",
  "party": "People's Party/Parti populaire",
  "votes": 530,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35003,
  "candidate": "Serge Korovitsyn",
  "party": "Libertarian/Libertarien",
  "votes": 529,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35004,
  "candidate": "John Brassard **",
  "party": "Conservative/Conservateur",
  "votes": 23765,
  "votePercentage": 43.8,
  "majority": 7886,
  "majorityPercentage": 14.5
},

{
  "index": 35004,
  "candidate": "Lisa-Marie Wilson",
  "party": "Liberal/Libéral",
  "votes": 15879,
  "votePercentage": 29.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35004,
  "candidate": "Pekka Reinio",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8880,
  "votePercentage": 16.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35004,
  "candidate": "Bonnie North",
  "party": "Green Party/Parti Vert",
  "votes": 4716,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35004,
  "candidate": "Stephanie Robinson",
  "party": "People's Party/Parti populaire",
  "votes": 1013,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35005,
  "candidate": "Doug Shipley",
  "party": "Conservative/Conservateur",
  "votes": 20981,
  "votePercentage": 39,
  "majority": 4176,
  "majorityPercentage": 7.8
},

{
  "index": 35005,
  "candidate": "Brian Kalliecharan",
  "party": "Liberal/Libéral",
  "votes": 16805,
  "votePercentage": 31.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35005,
  "candidate": "Dan Janssen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7972,
  "votePercentage": 14.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35005,
  "candidate": "Marty Lancaster",
  "party": "Green Party/Parti Vert",
  "votes": 7066,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35005,
  "candidate": "David Patterson",
  "party": "People's Party/Parti populaire",
  "votes": 969,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35006,
  "candidate": "Neil Ellis **",
  "party": "Liberal/Libéral",
  "votes": 24099,
  "votePercentage": 39.2,
  "majority": 1449,
  "majorityPercentage": 2.4
},

{
  "index": 35006,
  "candidate": "Tim Durkin",
  "party": "Conservative/Conservateur",
  "votes": 22650,
  "votePercentage": 36.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35006,
  "candidate": "Stephanie Bell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9851,
  "votePercentage": 16,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35006,
  "candidate": "Danny Celovsky",
  "party": "Green Party/Parti Vert",
  "votes": 3740,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35006,
  "candidate": "Paul Bordonaro",
  "party": "People's Party/Parti populaire",
  "votes": 1207,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35007,
  "candidate": "Nathaniel Erskine-Smith **",
  "party": "Liberal/Libéral",
  "votes": 32647,
  "votePercentage": 57.2,
  "majority": 20451,
  "majorityPercentage": 35.8
},

{
  "index": 35007,
  "candidate": "Mae J. Nam",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12196,
  "votePercentage": 21.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35007,
  "candidate": "Nadirah Nazeer",
  "party": "Conservative/Conservateur",
  "votes": 8026,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35007,
  "candidate": "Sean Manners",
  "party": "Green Party/Parti Vert",
  "votes": 3378,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35007,
  "candidate": "Deborah McKenzie",
  "party": "People's Party/Parti populaire",
  "votes": 831,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35008,
  "candidate": "Ramesh Sangha **",
  "party": "Liberal/Libéral",
  "votes": 18771,
  "votePercentage": 47.2,
  "majority": 8075,
  "majorityPercentage": 20.3
},

{
  "index": 35008,
  "candidate": "Pawanjit Gosal",
  "party": "Conservative/Conservateur",
  "votes": 10696,
  "votePercentage": 26.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35008,
  "candidate": "Jordan Boswell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7819,
  "votePercentage": 19.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35008,
  "candidate": "Pauline Thornham",
  "party": "Green Party/Parti Vert",
  "votes": 1685,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35008,
  "candidate": "Baljit Bawa",
  "party": "People's Party/Parti populaire",
  "votes": 681,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35008,
  "candidate": "David Gershuny",
  "party": "ML/ML",
  "votes": 106,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Maninder Sidhu",
  "party": "Liberal/Libéral",
  "votes": 24050,
  "votePercentage": 47.4,
  "majority": 10682,
  "majorityPercentage": 21.0
},

{
  "index": 35009,
  "candidate": "Saranjit Singh",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13368,
  "votePercentage": 26.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Ramona Singh",
  "party": "Conservative/Conservateur",
  "votes": 12125,
  "votePercentage": 23.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Teresa Burgess-Ogilvie",
  "party": "Green Party/Parti Vert",
  "votes": 666,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Gaurav Walia",
  "party": "People's Party/Parti populaire",
  "votes": 244,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Manpreet Othi",
  "party": "Independent/Indépendant(e)",
  "votes": 211,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35009,
  "candidate": "Partap Dua",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 89,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35010,
  "candidate": "Ruby Sahota **",
  "party": "Liberal/Libéral",
  "votes": 25970,
  "votePercentage": 51.4,
  "majority": 11997,
  "majorityPercentage": 23.8
},

{
  "index": 35010,
  "candidate": "Arpan Khanna",
  "party": "Conservative/Conservateur",
  "votes": 13973,
  "votePercentage": 27.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35010,
  "candidate": "Melissa Edwards",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8533,
  "votePercentage": 16.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35010,
  "candidate": "Norbert D'Costa",
  "party": "Green Party/Parti Vert",
  "votes": 1516,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35010,
  "candidate": "Keith Frazer",
  "party": "People's Party/Parti populaire",
  "votes": 510,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Sonia Sidhu **",
  "party": "Liberal/Libéral",
  "votes": 24085,
  "votePercentage": 49.5,
  "majority": 10257,
  "majorityPercentage": 21.1
},

{
  "index": 35011,
  "candidate": "Ramandeep Brar",
  "party": "Conservative/Conservateur",
  "votes": 13828,
  "votePercentage": 28.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Mandeep Kaur",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7985,
  "votePercentage": 16.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Karen Fraser",
  "party": "Green Party/Parti Vert",
  "votes": 1926,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Rajwinder Ghuman",
  "party": "People's Party/Parti populaire",
  "votes": 354,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Wavey Mercer",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 285,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Mitesh Joshi",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 152,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35011,
  "candidate": "Dagmar Sullivan",
  "party": "ML/ML",
  "votes": 68,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Kamal Khera **",
  "party": "Liberal/Libéral",
  "votes": 28743,
  "votePercentage": 53.5,
  "majority": 15919,
  "majorityPercentage": 29.7
},

{
  "index": 35012,
  "candidate": "Murarilal Thapliyal",
  "party": "Conservative/Conservateur",
  "votes": 12824,
  "votePercentage": 23.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Navjit Kaur",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9855,
  "votePercentage": 18.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Jane Davidson",
  "party": "Green Party/Parti Vert",
  "votes": 1271,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Roger Sampson",
  "party": "People's Party/Parti populaire",
  "votes": 505,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Paul Tannahill",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 319,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Harinderpal Hundal",
  "party": "Communist/Communiste",
  "votes": 97,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35012,
  "candidate": "Anjum Malik",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 69,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Phil McColeman **",
  "party": "Conservative/Conservateur",
  "votes": 26849,
  "votePercentage": 40.3,
  "majority": 6395,
  "majorityPercentage": 9.6
},

{
  "index": 35013,
  "candidate": "Danielle Takacs",
  "party": "Liberal/Libéral",
  "votes": 20454,
  "votePercentage": 30.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Sabrina Sawyer",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13131,
  "votePercentage": 19.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Bob Jonkman",
  "party": "Green Party/Parti Vert",
  "votes": 4257,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Dave Wrobel",
  "party": "People's Party/Parti populaire",
  "votes": 1320,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Jeffrey Gallagher",
  "party": "VCP/CAC",
  "votes": 394,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "John The Engineer Turmel",
  "party": "Independent/Indépendant(e)",
  "votes": 146,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35013,
  "candidate": "Leslie Bory",
  "party": "Independent/Indépendant(e)",
  "votes": 115,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35014,
  "candidate": "Alex Ruff",
  "party": "Conservative/Conservateur",
  "votes": 26830,
  "votePercentage": 46.1,
  "majority": 9345,
  "majorityPercentage": 16.1
},

{
  "index": 35014,
  "candidate": "Michael Den Tandt",
  "party": "Liberal/Libéral",
  "votes": 17485,
  "votePercentage": 30.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35014,
  "candidate": "Chris Stephen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6797,
  "votePercentage": 11.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35014,
  "candidate": "Danielle Valiquette",
  "party": "Green Party/Parti Vert",
  "votes": 5114,
  "votePercentage": 8.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35014,
  "candidate": "Bill Townsend",
  "party": "People's Party/Parti populaire",
  "votes": 1614,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35014,
  "candidate": "Daniel Little",
  "party": "Libertarian/Libertarien",
  "votes": 321,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35015,
  "candidate": "Karina Gould **",
  "party": "Liberal/Libéral",
  "votes": 34989,
  "votePercentage": 48.6,
  "majority": 11059,
  "majorityPercentage": 15.4
},

{
  "index": 35015,
  "candidate": "Jane Michael",
  "party": "Conservative/Conservateur",
  "votes": 23930,
  "votePercentage": 33.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35015,
  "candidate": "Lenaee Dupuis",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7372,
  "votePercentage": 10.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35015,
  "candidate": "Gareth Williams",
  "party": "Green Party/Parti Vert",
  "votes": 4750,
  "votePercentage": 6.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35015,
  "candidate": "Peter Smetana",
  "party": "People's Party/Parti populaire",
  "votes": 944,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "Bryan May **",
  "party": "Liberal/Libéral",
  "votes": 22903,
  "votePercentage": 39.5,
  "majority": 5494,
  "majorityPercentage": 9.5
},

{
  "index": 35016,
  "candidate": "Sunny Attwal",
  "party": "Conservative/Conservateur",
  "votes": 17409,
  "votePercentage": 30,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "Scott Hamilton",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11177,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "Michele Braniff",
  "party": "Green Party/Parti Vert",
  "votes": 4343,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "David Haskell",
  "party": "People's Party/Parti populaire",
  "votes": 1872,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "George McMorrow",
  "party": "VCP/CAC",
  "votes": 162,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35016,
  "candidate": "Manuel Couto",
  "party": "ML/ML",
  "votes": 76,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35088,
  "candidate": "Pierre Poilievre **",
  "party": "Conservative/Conservateur",
  "votes": 32147,
  "votePercentage": 46.3,
  "majority": 5629,
  "majorityPercentage": 8.1
},

{
  "index": 35088,
  "candidate": "Chris Rodgers",
  "party": "Liberal/Libéral",
  "votes": 26518,
  "votePercentage": 38.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35088,
  "candidate": "Kevin Hua",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6479,
  "votePercentage": 9.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35088,
  "candidate": "Gordon Kubanek",
  "party": "Green Party/Parti Vert",
  "votes": 3423,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35088,
  "candidate": "Alain Musende",
  "party": "People's Party/Parti populaire",
  "votes": 792,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35017,
  "candidate": "Dave Epp",
  "party": "Conservative/Conservateur",
  "votes": 25359,
  "votePercentage": 46.9,
  "majority": 8460,
  "majorityPercentage": 15.6
},

{
  "index": 35017,
  "candidate": "Katie Omstead",
  "party": "Liberal/Libéral",
  "votes": 16899,
  "votePercentage": 31.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35017,
  "candidate": "Tony Walsh",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8229,
  "votePercentage": 15.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35017,
  "candidate": "Mark Vercouteren",
  "party": "Green Party/Parti Vert",
  "votes": 2233,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35017,
  "candidate": "John Balagtas",
  "party": "People's Party/Parti populaire",
  "votes": 1061,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35017,
  "candidate": "Paul Coulbeck",
  "party": "Radical Marijuana/Radical Marijuana",
  "votes": 307,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Julie Dzerowicz **",
  "party": "Liberal/Libéral",
  "votes": 23251,
  "votePercentage": 43.7,
  "majority": 1439,
  "majorityPercentage": 2.7
},

{
  "index": 35018,
  "candidate": "Andrew Cash",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 21812,
  "votePercentage": 41,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Sanjay Bhatia",
  "party": "Conservative/Conservateur",
  "votes": 4921,
  "votePercentage": 9.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Hannah Conover-Arthurs",
  "party": "Green Party/Parti Vert",
  "votes": 2397,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Francesco Ciardullo",
  "party": "People's Party/Parti populaire",
  "votes": 496,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Elizabeth Rowley",
  "party": "Communist/Communiste",
  "votes": 138,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Troy Young",
  "party": "Independent/Indépendant(e)",
  "votes": 86,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35018,
  "candidate": "Chai Kalevar",
  "party": "Independent/Indépendant(e)",
  "votes": 79,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35019,
  "candidate": "Yasmin Ratansi **",
  "party": "Liberal/Libéral",
  "votes": 25295,
  "votePercentage": 59.8,
  "majority": 15180,
  "majorityPercentage": 35.9
},

{
  "index": 35019,
  "candidate": "Michael Ma",
  "party": "Conservative/Conservateur",
  "votes": 10115,
  "votePercentage": 23.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35019,
  "candidate": "Nicholas Thompson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4647,
  "votePercentage": 11,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35019,
  "candidate": "Dan Turcotte",
  "party": "Green Party/Parti Vert",
  "votes": 1675,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35019,
  "candidate": "John P. Hendry",
  "party": "People's Party/Parti populaire",
  "votes": 562,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35020,
  "candidate": "Han Dong",
  "party": "Liberal/Libéral",
  "votes": 23495,
  "votePercentage": 50.4,
  "majority": 6989,
  "majorityPercentage": 15.0
},

{
  "index": 35020,
  "candidate": "Sarah Fischer",
  "party": "Conservative/Conservateur",
  "votes": 16506,
  "votePercentage": 35.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35020,
  "candidate": "Bruce Griffin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4285,
  "votePercentage": 9.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35020,
  "candidate": "Daniel Giavedoni",
  "party": "Green Party/Parti Vert",
  "votes": 1803,
  "votePercentage": 3.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35020,
  "candidate": "Jay Sobel",
  "party": "People's Party/Parti populaire",
  "votes": 482,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35021,
  "candidate": "Rob Oliphant **",
  "party": "Liberal/Libéral",
  "votes": 29148,
  "votePercentage": 55.8,
  "majority": 12844,
  "majorityPercentage": 24.6
},

{
  "index": 35021,
  "candidate": "Yvonne Robertson",
  "party": "Conservative/Conservateur",
  "votes": 16304,
  "votePercentage": 31.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35021,
  "candidate": "Laurel MacDowell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3804,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35021,
  "candidate": "Amanda Kistindey",
  "party": "Green Party/Parti Vert",
  "votes": 2257,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35021,
  "candidate": "Ian Prittie",
  "party": "People's Party/Parti populaire",
  "votes": 444,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35021,
  "candidate": "John Kittredge",
  "party": "Libertarian/Libertarien",
  "votes": 277,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35022,
  "candidate": "Kyle Seeback",
  "party": "Conservative/Conservateur",
  "votes": 28852,
  "votePercentage": 42,
  "majority": 6207,
  "majorityPercentage": 9.0
},

{
  "index": 35022,
  "candidate": "Michele Fisher",
  "party": "Liberal/Libéral",
  "votes": 22645,
  "votePercentage": 33,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35022,
  "candidate": "Allison Brown",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7981,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35022,
  "candidate": "Stefan Wiesen",
  "party": "Green Party/Parti Vert",
  "votes": 7303,
  "votePercentage": 10.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35022,
  "candidate": "Chad Ransom",
  "party": "People's Party/Parti populaire",
  "votes": 1516,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35022,
  "candidate": "Russ Emo",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 319,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35023,
  "candidate": "Erin O'Toole **",
  "party": "Conservative/Conservateur",
  "votes": 30752,
  "votePercentage": 42.1,
  "majority": 7205,
  "majorityPercentage": 9.9
},

{
  "index": 35023,
  "candidate": "Jonathan Giancroce",
  "party": "Liberal/Libéral",
  "votes": 23547,
  "votePercentage": 32.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35023,
  "candidate": "Sarah Whalen-Wright",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13323,
  "votePercentage": 18.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35023,
  "candidate": "Evan Price",
  "party": "Green Party/Parti Vert",
  "votes": 3950,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35023,
  "candidate": "Brenda Virtue",
  "party": "People's Party/Parti populaire",
  "votes": 1442,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35024,
  "candidate": "Marco Mendicino **",
  "party": "Liberal/Libéral",
  "votes": 29850,
  "votePercentage": 53.3,
  "majority": 11301,
  "majorityPercentage": 20.2
},

{
  "index": 35024,
  "candidate": "Chani Aryeh-Bain",
  "party": "Conservative/Conservateur",
  "votes": 18549,
  "votePercentage": 33.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35024,
  "candidate": "Alexandra Nash",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4741,
  "votePercentage": 8.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35024,
  "candidate": "Reuben DeBoer",
  "party": "Green Party/Parti Vert",
  "votes": 2278,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35024,
  "candidate": "Michael Staffieri",
  "party": "People's Party/Parti populaire",
  "votes": 586,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Karen Vecchio **",
  "party": "Conservative/Conservateur",
  "votes": 31026,
  "votePercentage": 50.2,
  "majority": 16702,
  "majorityPercentage": 27.0
},

{
  "index": 35025,
  "candidate": "Pam Armstrong",
  "party": "Liberal/Libéral",
  "votes": 14324,
  "votePercentage": 23.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Bob Hargreaves",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11019,
  "votePercentage": 17.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Ericha Hendel",
  "party": "Green Party/Parti Vert",
  "votes": 3562,
  "votePercentage": 5.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Donald Helkaa",
  "party": "People's Party/Parti populaire",
  "votes": 956,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Peter Redecop",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 618,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35025,
  "candidate": "Richard Styve",
  "party": "Libertarian/Libertarien",
  "votes": 249,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35026,
  "candidate": "Chris Lewis",
  "party": "Conservative/Conservateur",
  "votes": 28274,
  "votePercentage": 41.4,
  "majority": 4671,
  "majorityPercentage": 6.8
},

{
  "index": 35026,
  "candidate": "Tracey Ramsey **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23603,
  "votePercentage": 34.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35026,
  "candidate": "Audrey Festeryga",
  "party": "Liberal/Libéral",
  "votes": 12987,
  "votePercentage": 19,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35026,
  "candidate": "Jennifer Alderson",
  "party": "Green Party/Parti Vert",
  "votes": 2173,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35026,
  "candidate": "Bill Capes",
  "party": "People's Party/Parti populaire",
  "votes": 1251,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35027,
  "candidate": "Yvan Baker",
  "party": "Liberal/Libéral",
  "votes": 32800,
  "votePercentage": 51.9,
  "majority": 10996,
  "majorityPercentage": 17.4
},

{
  "index": 35027,
  "candidate": "Ted Opitz",
  "party": "Conservative/Conservateur",
  "votes": 21804,
  "votePercentage": 34.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35027,
  "candidate": "Heather Vickers-Wong",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4881,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35027,
  "candidate": "Cameron Semple",
  "party": "Green Party/Parti Vert",
  "votes": 2775,
  "votePercentage": 4.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35027,
  "candidate": "Nicholas Serdiuk",
  "party": "People's Party/Parti populaire",
  "votes": 664,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35027,
  "candidate": "Mark Wrzesniewski",
  "party": "Libertarian/Libertarien",
  "votes": 295,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35029,
  "candidate": "Kirsty Duncan **",
  "party": "Liberal/Libéral",
  "votes": 26388,
  "votePercentage": 61.4,
  "majority": 16864,
  "majorityPercentage": 39.3
},

{
  "index": 35029,
  "candidate": "Sarabjit Kaur",
  "party": "Conservative/Conservateur",
  "votes": 9524,
  "votePercentage": 22.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35029,
  "candidate": "Naiima Farah",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4654,
  "votePercentage": 10.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35029,
  "candidate": "Renata Ford",
  "party": "People's Party/Parti populaire",
  "votes": 1196,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35029,
  "candidate": "Nancy Ghuman",
  "party": "Green Party/Parti Vert",
  "votes": 1080,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35029,
  "candidate": "Sudhir Mehta",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 104,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35028,
  "candidate": "James Maloney **",
  "party": "Liberal/Libéral",
  "votes": 36061,
  "votePercentage": 51.9,
  "majority": 16109,
  "majorityPercentage": 23.2
},

{
  "index": 35028,
  "candidate": "Barry O'Brien",
  "party": "Conservative/Conservateur",
  "votes": 19952,
  "votePercentage": 28.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35028,
  "candidate": "Branko Gasperlin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8277,
  "votePercentage": 11.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35028,
  "candidate": "Chris Caldwell",
  "party": "Green Party/Parti Vert",
  "votes": 4141,
  "votePercentage": 6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35028,
  "candidate": "Jude Sulejmani",
  "party": "People's Party/Parti populaire",
  "votes": 921,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35028,
  "candidate": "Janice Murray",
  "party": "ML/ML",
  "votes": 163,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35030,
  "candidate": "David Sweet **",
  "party": "Conservative/Conservateur",
  "votes": 24527,
  "votePercentage": 39.2,
  "majority": 1652,
  "majorityPercentage": 2.6
},

{
  "index": 35030,
  "candidate": "Jennifer Stebbing",
  "party": "Liberal/Libéral",
  "votes": 22875,
  "votePercentage": 36.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35030,
  "candidate": "Allison Cillis",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10322,
  "votePercentage": 16.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35030,
  "candidate": "Janet Errygers",
  "party": "Green Party/Parti Vert",
  "votes": 3833,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35030,
  "candidate": "David Tilden",
  "party": "People's Party/Parti populaire",
  "votes": 982,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Francis Drouin **",
  "party": "Liberal/Libéral",
  "votes": 31293,
  "votePercentage": 47.6,
  "majority": 7633,
  "majorityPercentage": 11.6
},

{
  "index": 35031,
  "candidate": "Pierre Lemieux",
  "party": "Conservative/Conservateur",
  "votes": 23660,
  "votePercentage": 36,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Konstantine Malakos",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6851,
  "votePercentage": 10.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Marthe Lépine",
  "party": "Green Party/Parti Vert",
  "votes": 2113,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Jean-Jacques Desgranges",
  "party": "People's Party/Parti populaire",
  "votes": 1174,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Darcy Neal Donnelly",
  "party": "Libertarian/Libertarien",
  "votes": 262,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Daniel John Fey",
  "party": "Independent/Indépendant(e)",
  "votes": 239,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35031,
  "candidate": "Marc-Antoine Gagnier",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 199,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Lloyd Longfield **",
  "party": "Liberal/Libéral",
  "votes": 30497,
  "votePercentage": 40.4,
  "majority": 11261,
  "majorityPercentage": 14.9
},

{
  "index": 35032,
  "candidate": "Steve Dyck",
  "party": "Green Party/Parti Vert",
  "votes": 19236,
  "votePercentage": 25.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Ashish Sachan",
  "party": "Conservative/Conservateur",
  "votes": 14568,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Aisha Jahangir",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9297,
  "votePercentage": 12.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Mark Paralovos",
  "party": "People's Party/Parti populaire",
  "votes": 1087,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Gordon Truscott",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 498,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Juanita Burnett",
  "party": "Communist/Communiste",
  "votes": 166,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Michael Wassilyn",
  "party": "Independent/Indépendant(e)",
  "votes": 133,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35032,
  "candidate": "Kornelis Klevering",
  "party": "Independent/Indépendant(e)",
  "votes": 86,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Diane Finley **",
  "party": "Conservative/Conservateur",
  "votes": 28018,
  "votePercentage": 46.8,
  "majority": 13314,
  "majorityPercentage": 22.2
},

{
  "index": 35033,
  "candidate": "Kim Huffman",
  "party": "Liberal/Libéral",
  "votes": 14704,
  "votePercentage": 24.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Adrienne Roberts",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9192,
  "votePercentage": 15.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Brooke Martin",
  "party": "Green Party/Parti Vert",
  "votes": 4878,
  "votePercentage": 8.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Bob Forbes",
  "party": "People's Party/Parti populaire",
  "votes": 1234,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Harold Stewart",
  "party": "VCP/CAC",
  "votes": 1083,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35033,
  "candidate": "Lily Eggink",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 817,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35034,
  "candidate": "Jamie Schmale **",
  "party": "Conservative/Conservateur",
  "votes": 32257,
  "votePercentage": 49.1,
  "majority": 15190,
  "majorityPercentage": 23.1
},

{
  "index": 35034,
  "candidate": "Judi Forbes",
  "party": "Liberal/Libéral",
  "votes": 17067,
  "votePercentage": 26,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35034,
  "candidate": "Barbara Doyle",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9676,
  "votePercentage": 14.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35034,
  "candidate": "Elizabeth Fraser",
  "party": "Green Party/Parti Vert",
  "votes": 5515,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35034,
  "candidate": "Gene Balfour",
  "party": "People's Party/Parti populaire",
  "votes": 1245,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Matthew Green",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 20368,
  "votePercentage": 46.2,
  "majority": 7717,
  "majorityPercentage": 17.5
},

{
  "index": 35035,
  "candidate": "Jasper Kujavsky",
  "party": "Liberal/Libéral",
  "votes": 12651,
  "votePercentage": 28.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Monica Ciriello",
  "party": "Conservative/Conservateur",
  "votes": 6341,
  "votePercentage": 14.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Jason Lopez",
  "party": "Green Party/Parti Vert",
  "votes": 3370,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Melina Mamone",
  "party": "People's Party/Parti populaire",
  "votes": 833,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Gary Duyzer",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 182,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Tony Lemma",
  "party": "Independent/Indépendant(e)",
  "votes": 158,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Edward Graydon",
  "party": "Independent/Indépendant(e)",
  "votes": 134,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35035,
  "candidate": "Nathalie Xian Yi Yan",
  "party": "Independent/Indépendant(e)",
  "votes": 85,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35036,
  "candidate": "Bob Bratina **",
  "party": "Liberal/Libéral",
  "votes": 20112,
  "votePercentage": 38.6,
  "majority": 5182,
  "majorityPercentage": 9.9
},

{
  "index": 35036,
  "candidate": "Nick Milanovic",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 14930,
  "votePercentage": 28.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35036,
  "candidate": "Nikki Kaur",
  "party": "Conservative/Conservateur",
  "votes": 13130,
  "votePercentage": 25.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35036,
  "candidate": "Peter Ormond",
  "party": "Green Party/Parti Vert",
  "votes": 2902,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35036,
  "candidate": "Charles Crocker",
  "party": "People's Party/Parti populaire",
  "votes": 1072,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Scott Duvall **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 19135,
  "votePercentage": 36.1,
  "majority": 3078,
  "majorityPercentage": 5.8
},

{
  "index": 35037,
  "candidate": "Bruno Uggenti",
  "party": "Liberal/Libéral",
  "votes": 16057,
  "votePercentage": 30.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Peter Dyakowski",
  "party": "Conservative/Conservateur",
  "votes": 13443,
  "votePercentage": 25.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Dave Urquhart",
  "party": "Green Party/Parti Vert",
  "votes": 3115,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Trevor Lee",
  "party": "People's Party/Parti populaire",
  "votes": 760,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Jim Enos",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 330,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35037,
  "candidate": "Richard Plett",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 109,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35038,
  "candidate": "Filomena Tassi **",
  "party": "Liberal/Libéral",
  "votes": 30214,
  "votePercentage": 46.6,
  "majority": 12874,
  "majorityPercentage": 19.8
},

{
  "index": 35038,
  "candidate": "Bert Laranjo",
  "party": "Conservative/Conservateur",
  "votes": 17340,
  "votePercentage": 26.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35038,
  "candidate": "Yousaf Malik",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11527,
  "votePercentage": 17.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35038,
  "candidate": "Victoria Galea",
  "party": "Green Party/Parti Vert",
  "votes": 4770,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35038,
  "candidate": "Daniel Ricottone",
  "party": "People's Party/Parti populaire",
  "votes": 894,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35038,
  "candidate": "Spencer Rocchi",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 156,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35039,
  "candidate": "Derek Sloan",
  "party": "Conservative/Conservateur",
  "votes": 21968,
  "votePercentage": 41.4,
  "majority": 2247,
  "majorityPercentage": 4.2
},

{
  "index": 35039,
  "candidate": "Mike Bossio **",
  "party": "Liberal/Libéral",
  "votes": 19721,
  "votePercentage": 37.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35039,
  "candidate": "David Tough",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6984,
  "votePercentage": 13.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35039,
  "candidate": "Sari Watson",
  "party": "Green Party/Parti Vert",
  "votes": 3114,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35039,
  "candidate": "Adam L. E. Gray",
  "party": "People's Party/Parti populaire",
  "votes": 1307,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Judy Sgro **",
  "party": "Liberal/Libéral",
  "votes": 23187,
  "votePercentage": 61.1,
  "majority": 15989,
  "majorityPercentage": 42.1
},

{
  "index": 35121,
  "candidate": "Maria Augimeri",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7198,
  "votePercentage": 19,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Iftikhar Choudry",
  "party": "Conservative/Conservateur",
  "votes": 6164,
  "votePercentage": 16.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Mike Schmitz",
  "party": "Green Party/Parti Vert",
  "votes": 804,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Ania Krosinska",
  "party": "People's Party/Parti populaire",
  "votes": 402,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Stenneth Smith",
  "party": "UPC/UPC",
  "votes": 114,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35121,
  "candidate": "Christine Nugent",
  "party": "ML/ML",
  "votes": 89,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35040,
  "candidate": "Ben Lobb **",
  "party": "Conservative/Conservateur",
  "votes": 29512,
  "votePercentage": 48.5,
  "majority": 9345,
  "majorityPercentage": 15.4
},

{
  "index": 35040,
  "candidate": "Allan Thompson",
  "party": "Liberal/Libéral",
  "votes": 20167,
  "votePercentage": 33.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35040,
  "candidate": "Tony McQuail",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7421,
  "votePercentage": 12.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35040,
  "candidate": "Nicholas Wendler",
  "party": "Green Party/Parti Vert",
  "votes": 2665,
  "votePercentage": 4.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35040,
  "candidate": "Kevin M. Klerks",
  "party": "People's Party/Parti populaire",
  "votes": 1102,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35041,
  "candidate": "Karen McCrimmon **",
  "party": "Liberal/Libéral",
  "votes": 28746,
  "votePercentage": 43.1,
  "majority": 4385,
  "majorityPercentage": 6.6
},

{
  "index": 35041,
  "candidate": "Justina McCaffrey",
  "party": "Conservative/Conservateur",
  "votes": 24361,
  "votePercentage": 36.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35041,
  "candidate": "Melissa Coenraad",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8317,
  "votePercentage": 12.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35041,
  "candidate": "Jennifer Purdy",
  "party": "Green Party/Parti Vert",
  "votes": 4387,
  "votePercentage": 6.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35041,
  "candidate": "Scott Miller",
  "party": "People's Party/Parti populaire",
  "votes": 961,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35042,
  "candidate": "Eric Melillo",
  "party": "Conservative/Conservateur",
  "votes": 9445,
  "votePercentage": 34,
  "majority": 1110,
  "majorityPercentage": 4.0
},

{
  "index": 35042,
  "candidate": "Bob Nault **",
  "party": "Liberal/Libéral",
  "votes": 8335,
  "votePercentage": 30,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35042,
  "candidate": "Rudy Turtle",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7923,
  "votePercentage": 28.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35042,
  "candidate": "Kirsi Ralko",
  "party": "Green Party/Parti Vert",
  "votes": 1526,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35042,
  "candidate": "Michael Di Pasquale",
  "party": "People's Party/Parti populaire",
  "votes": 388,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35042,
  "candidate": "Kelvin Boucher-Chicago",
  "party": "Independent/Indépendant(e)",
  "votes": 170,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35043,
  "candidate": "Deb Schulte **",
  "party": "Liberal/Libéral",
  "votes": 28725,
  "votePercentage": 45,
  "majority": 1141,
  "majorityPercentage": 1.8
},

{
  "index": 35043,
  "candidate": "Anna Roberts",
  "party": "Conservative/Conservateur",
  "votes": 27584,
  "votePercentage": 43.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35043,
  "candidate": "Emilio Bernardo-Ciddio",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4297,
  "votePercentage": 6.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35043,
  "candidate": "Ann Raney",
  "party": "Green Party/Parti Vert",
  "votes": 2511,
  "votePercentage": 3.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35043,
  "candidate": "Anton Strgacic",
  "party": "People's Party/Parti populaire",
  "votes": 731,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35044,
  "candidate": "Mark Gerretsen **",
  "party": "Liberal/Libéral",
  "votes": 31205,
  "votePercentage": 45.8,
  "majority": 15349,
  "majorityPercentage": 22.5
},

{
  "index": 35044,
  "candidate": "Barrington Walker",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 15856,
  "votePercentage": 23.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35044,
  "candidate": "Ruslan Yakoviychuk",
  "party": "Conservative/Conservateur",
  "votes": 13304,
  "votePercentage": 19.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35044,
  "candidate": "Candice Christmas",
  "party": "Green Party/Parti Vert",
  "votes": 6059,
  "votePercentage": 8.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35044,
  "candidate": "Andy Brooke",
  "party": "People's Party/Parti populaire",
  "votes": 1769,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35045,
  "candidate": "Raj Saini **",
  "party": "Liberal/Libéral",
  "votes": 20316,
  "votePercentage": 36.7,
  "majority": 5922,
  "majorityPercentage": 10.7
},

{
  "index": 35045,
  "candidate": "Mike Morrice",
  "party": "Green Party/Parti Vert",
  "votes": 14394,
  "votePercentage": 26,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35045,
  "candidate": "Stephen Woodworth",
  "party": "Conservative/Conservateur",
  "votes": 13191,
  "votePercentage": 23.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35045,
  "candidate": "Andrew Moraga",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6238,
  "votePercentage": 11.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35045,
  "candidate": "Patrick Bernier",
  "party": "People's Party/Parti populaire",
  "votes": 1033,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35045,
  "candidate": "Ellen Papenburg",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 202,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "Marwan Tabbara **",
  "party": "Liberal/Libéral",
  "votes": 20986,
  "votePercentage": 40.2,
  "majority": 3506,
  "majorityPercentage": 6.7
},

{
  "index": 35047,
  "candidate": "Alan Keeso",
  "party": "Conservative/Conservateur",
  "votes": 17480,
  "votePercentage": 33.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "Wasai Rahimi",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6945,
  "votePercentage": 13.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "David Weber",
  "party": "Green Party/Parti Vert",
  "votes": 5671,
  "votePercentage": 10.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "Joseph Todd",
  "party": "People's Party/Parti populaire",
  "votes": 1005,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "Matthew Correia",
  "party": "VCP/CAC",
  "votes": 90,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35047,
  "candidate": "Elaine Baetz",
  "party": "ML/ML",
  "votes": 56,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35046,
  "candidate": "Tim Louis",
  "party": "Liberal/Libéral",
  "votes": 20480,
  "votePercentage": 39.7,
  "majority": 365,
  "majorityPercentage": 0.7
},

{
  "index": 35046,
  "candidate": "Harold Albrecht **",
  "party": "Conservative/Conservateur",
  "votes": 20115,
  "votePercentage": 39,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35046,
  "candidate": "Riani De Wet",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5204,
  "votePercentage": 10.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35046,
  "candidate": "Stephanie Goertz",
  "party": "Green Party/Parti Vert",
  "votes": 4946,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35046,
  "candidate": "Koltyn Wallar",
  "party": "People's Party/Parti populaire",
  "votes": 790,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35048,
  "candidate": "Lianne Rood",
  "party": "Conservative/Conservateur",
  "votes": 28651,
  "votePercentage": 49,
  "majority": 13837,
  "majorityPercentage": 23.7
},

{
  "index": 35048,
  "candidate": "Jesse McCormick",
  "party": "Liberal/Libéral",
  "votes": 14814,
  "votePercentage": 25.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35048,
  "candidate": "Dylan Mclay",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9355,
  "votePercentage": 16,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35048,
  "candidate": "Anthony Li",
  "party": "Green Party/Parti Vert",
  "votes": 3463,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35048,
  "candidate": "Bria Atkins",
  "party": "People's Party/Parti populaire",
  "votes": 1804,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35048,
  "candidate": "Rob Lalande",
  "party": "VCP/CAC",
  "votes": 325,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35049,
  "candidate": "Scott Reid **",
  "party": "Conservative/Conservateur",
  "votes": 30077,
  "votePercentage": 48.1,
  "majority": 14636,
  "majorityPercentage": 23.4
},

{
  "index": 35049,
  "candidate": "Kayley Kennedy",
  "party": "Liberal/Libéral",
  "votes": 15441,
  "votePercentage": 24.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35049,
  "candidate": "Satinka Schilling",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8835,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35049,
  "candidate": "Stephen Kotze",
  "party": "Green Party/Parti Vert",
  "votes": 7011,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35049,
  "candidate": "Matthew Barton",
  "party": "People's Party/Parti populaire",
  "votes": 1117,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35050,
  "candidate": "Michael Barrett **",
  "party": "Conservative/Conservateur",
  "votes": 28630,
  "votePercentage": 49,
  "majority": 13148,
  "majorityPercentage": 22.5
},

{
  "index": 35050,
  "candidate": "Josh Bennett",
  "party": "Liberal/Libéral",
  "votes": 15482,
  "votePercentage": 26.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35050,
  "candidate": "Michelle Taylor",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8201,
  "votePercentage": 14,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35050,
  "candidate": "Lorraine Rekmans",
  "party": "Green Party/Parti Vert",
  "votes": 5152,
  "votePercentage": 8.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35050,
  "candidate": "Evan Hindle",
  "party": "People's Party/Parti populaire",
  "votes": 988,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35052,
  "candidate": "Peter Fragiskatos **",
  "party": "Liberal/Libéral",
  "votes": 27247,
  "votePercentage": 42.7,
  "majority": 12181,
  "majorityPercentage": 19.1
},

{
  "index": 35052,
  "candidate": "Sarah Bokhari",
  "party": "Conservative/Conservateur",
  "votes": 15066,
  "votePercentage": 23.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35052,
  "candidate": "Dirka Prout",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 14887,
  "votePercentage": 23.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35052,
  "candidate": "Carol Dyck",
  "party": "Green Party/Parti Vert",
  "votes": 4872,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35052,
  "candidate": "Salim Mansur",
  "party": "People's Party/Parti populaire",
  "votes": 1532,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35052,
  "candidate": "Clara Sorrenti",
  "party": "Communist/Communiste",
  "votes": 137,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35053,
  "candidate": "Kate Young **",
  "party": "Liberal/Libéral",
  "votes": 30622,
  "votePercentage": 43,
  "majority": 10712,
  "majorityPercentage": 15.0
},

{
  "index": 35053,
  "candidate": "Liz Snelgrove",
  "party": "Conservative/Conservateur",
  "votes": 19910,
  "votePercentage": 27.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35053,
  "candidate": "Shawna Lewkowitz",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 15220,
  "votePercentage": 21.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35053,
  "candidate": "Mary Ann Hodge",
  "party": "Green Party/Parti Vert",
  "votes": 3827,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35053,
  "candidate": "Mike Mcmullen",
  "party": "People's Party/Parti populaire",
  "votes": 1171,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35053,
  "candidate": "Jacques Boudreau",
  "party": "Libertarian/Libertarien",
  "votes": 523,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35051,
  "candidate": "Lindsay Mathyssen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 22671,
  "votePercentage": 40.8,
  "majority": 7747,
  "majorityPercentage": 13.9
},

{
  "index": 35051,
  "candidate": "Mohamed Hammoud",
  "party": "Liberal/Libéral",
  "votes": 14924,
  "votePercentage": 26.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35051,
  "candidate": "Michael van Holst",
  "party": "Conservative/Conservateur",
  "votes": 13770,
  "votePercentage": 24.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35051,
  "candidate": "Tom Cull",
  "party": "Green Party/Parti Vert",
  "votes": 2781,
  "votePercentage": 5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35051,
  "candidate": "Bela Kosoian",
  "party": "People's Party/Parti populaire",
  "votes": 1132,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35051,
  "candidate": "Stephen Campbell",
  "party": "Independent/Indépendant(e)",
  "votes": 297,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35054,
  "candidate": "Helena Jaczek",
  "party": "Liberal/Libéral",
  "votes": 25055,
  "votePercentage": 38.9,
  "majority": 5352,
  "majorityPercentage": 8.3
},

{
  "index": 35054,
  "candidate": "Theodore Antony",
  "party": "Conservative/Conservateur",
  "votes": 19703,
  "votePercentage": 30.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35054,
  "candidate": "Jane Philpott **",
  "party": "Independent/Indépendant(e)",
  "votes": 13340,
  "votePercentage": 20.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35054,
  "candidate": "Hal Berman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4132,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35054,
  "candidate": "Roy Long",
  "party": "Green Party/Parti Vert",
  "votes": 1621,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35054,
  "candidate": "Jeremy Lin",
  "party": "People's Party/Parti populaire",
  "votes": 537,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35055,
  "candidate": "Mary Ng **",
  "party": "Liberal/Libéral",
  "votes": 23899,
  "votePercentage": 53.9,
  "majority": 8580,
  "majorityPercentage": 19.4
},

{
  "index": 35055,
  "candidate": "Alex Yuan",
  "party": "Conservative/Conservateur",
  "votes": 15319,
  "votePercentage": 34.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35055,
  "candidate": "Paul Sahbaz",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3233,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35055,
  "candidate": "Chris Williams",
  "party": "Green Party/Parti Vert",
  "votes": 1247,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35055,
  "candidate": "Peter Remedios",
  "party": "People's Party/Parti populaire",
  "votes": 357,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35055,
  "candidate": "Josephbai Macwan",
  "party": "Independent/Indépendant(e)",
  "votes": 276,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35056,
  "candidate": "Bob Saroya **",
  "party": "Conservative/Conservateur",
  "votes": 26133,
  "votePercentage": 48.9,
  "majority": 5649,
  "majorityPercentage": 10.6
},

{
  "index": 35056,
  "candidate": "Alan Ho",
  "party": "Liberal/Libéral",
  "votes": 20484,
  "votePercentage": 38.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35056,
  "candidate": "Gregory Hines",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3524,
  "votePercentage": 6.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35056,
  "candidate": "Elvin Kao",
  "party": "Green Party/Parti Vert",
  "votes": 2394,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35056,
  "candidate": "Sarah Chung",
  "party": "People's Party/Parti populaire",
  "votes": 861,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35057,
  "candidate": "Adam van Koeverden",
  "party": "Liberal/Libéral",
  "votes": 30882,
  "votePercentage": 51.7,
  "majority": 9318,
  "majorityPercentage": 15.6
},

{
  "index": 35057,
  "candidate": "Lisa Raitt **",
  "party": "Conservative/Conservateur",
  "votes": 21564,
  "votePercentage": 36.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35057,
  "candidate": "Farina Hassan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3851,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35057,
  "candidate": "Eleanor Hayward",
  "party": "Green Party/Parti Vert",
  "votes": 2769,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35057,
  "candidate": "Percy Dastur",
  "party": "People's Party/Parti populaire",
  "votes": 613,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35058,
  "candidate": "Omar Alghabra **",
  "party": "Liberal/Libéral",
  "votes": 29974,
  "votePercentage": 55.8,
  "majority": 14100,
  "majorityPercentage": 26.2
},

{
  "index": 35058,
  "candidate": "Milad Mikael",
  "party": "Conservative/Conservateur",
  "votes": 15874,
  "votePercentage": 29.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35058,
  "candidate": "Sarah Walji",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5173,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35058,
  "candidate": "Hugo Reinoso",
  "party": "Green Party/Parti Vert",
  "votes": 1646,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35058,
  "candidate": "David Micalef",
  "party": "People's Party/Parti populaire",
  "votes": 837,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35058,
  "candidate": "Greg Vezina",
  "party": "Independent/Indépendant(e)",
  "votes": 252,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35059,
  "candidate": "Peter Fonseca **",
  "party": "Liberal/Libéral",
  "votes": 27923,
  "votePercentage": 53.1,
  "majority": 10259,
  "majorityPercentage": 19.5
},

{
  "index": 35059,
  "candidate": "Wladyslaw Lizon",
  "party": "Conservative/Conservateur",
  "votes": 17664,
  "votePercentage": 33.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35059,
  "candidate": "Tom Takacs",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4643,
  "votePercentage": 8.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35059,
  "candidate": "Maha Rasheed",
  "party": "Green Party/Parti Vert",
  "votes": 1578,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35059,
  "candidate": "Syed Rizvi",
  "party": "People's Party/Parti populaire",
  "votes": 637,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35059,
  "candidate": "Anna Di Carlo",
  "party": "ML/ML",
  "votes": 178,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35060,
  "candidate": "Iqra Khalid **",
  "party": "Liberal/Libéral",
  "votes": 31181,
  "votePercentage": 53.5,
  "majority": 12131,
  "majorityPercentage": 20.8
},

{
  "index": 35060,
  "candidate": "Hani Tawfilis",
  "party": "Conservative/Conservateur",
  "votes": 19050,
  "votePercentage": 32.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35060,
  "candidate": "Salman Tariq",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5236,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35060,
  "candidate": "Remo Boscarino-Gaetano",
  "party": "Green Party/Parti Vert",
  "votes": 2147,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35060,
  "candidate": "Hazar Alsabagh",
  "party": "People's Party/Parti populaire",
  "votes": 648,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35061,
  "candidate": "Sven Spengemann **",
  "party": "Liberal/Libéral",
  "votes": 29526,
  "votePercentage": 48.4,
  "majority": 6786,
  "majorityPercentage": 11.1
},

{
  "index": 35061,
  "candidate": "Stella Ambler",
  "party": "Conservative/Conservateur",
  "votes": 22740,
  "votePercentage": 37.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35061,
  "candidate": "Adam Laughton",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5103,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35061,
  "candidate": "Cynthia Trentelman",
  "party": "Green Party/Parti Vert",
  "votes": 2814,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35061,
  "candidate": "Eugen Vizitiu",
  "party": "People's Party/Parti populaire",
  "votes": 717,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35061,
  "candidate": "Carlton Darby",
  "party": "UPC/UPC",
  "votes": 99,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Navdeep Bains **",
  "party": "Liberal/Libéral",
  "votes": 27890,
  "votePercentage": 57.5,
  "majority": 15362,
  "majorityPercentage": 31.7
},

{
  "index": 35062,
  "candidate": "Tom Varughese",
  "party": "Conservative/Conservateur",
  "votes": 12528,
  "votePercentage": 25.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Nikki Clarke",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6103,
  "votePercentage": 12.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Christina Porter",
  "party": "Green Party/Parti Vert",
  "votes": 1251,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Tahir Gora",
  "party": "People's Party/Parti populaire",
  "votes": 369,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Prudence Buchanan",
  "party": "UPC/UPC",
  "votes": 306,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35062,
  "candidate": "Frank Chilelli",
  "party": "ML/ML",
  "votes": 90,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35063,
  "candidate": "Gagan Sikand **",
  "party": "Liberal/Libéral",
  "votes": 29618,
  "votePercentage": 50.4,
  "majority": 10144,
  "majorityPercentage": 17.3
},

{
  "index": 35063,
  "candidate": "Ghada Melek",
  "party": "Conservative/Conservateur",
  "votes": 19474,
  "votePercentage": 33.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35063,
  "candidate": "Samir Girguis",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6036,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35063,
  "candidate": "Chris Hill",
  "party": "Green Party/Parti Vert",
  "votes": 2688,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35063,
  "candidate": "Thomas McIver",
  "party": "People's Party/Parti populaire",
  "votes": 706,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35063,
  "candidate": "Natalie Spizzirri",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 243,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35064,
  "candidate": "Chandra Arya **",
  "party": "Liberal/Libéral",
  "votes": 31933,
  "votePercentage": 45.9,
  "majority": 8613,
  "majorityPercentage": 12.4
},

{
  "index": 35064,
  "candidate": "Brian St. Louis",
  "party": "Conservative/Conservateur",
  "votes": 23320,
  "votePercentage": 33.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35064,
  "candidate": "Zaff Ansari",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9104,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35064,
  "candidate": "Jean-Luc Cooke",
  "party": "Green Party/Parti Vert",
  "votes": 4379,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35064,
  "candidate": "Azim Hooda",
  "party": "People's Party/Parti populaire",
  "votes": 687,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35064,
  "candidate": "Dustan Wang",
  "party": "Communist/Communiste",
  "votes": 160,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Tony Van Bynen",
  "party": "Liberal/Libéral",
  "votes": 26488,
  "votePercentage": 43.1,
  "majority": 3236,
  "majorityPercentage": 5.3
},

{
  "index": 35065,
  "candidate": "Lois Brown",
  "party": "Conservative/Conservateur",
  "votes": 23252,
  "votePercentage": 37.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Yvonne Kelly",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6576,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Walter Bauer",
  "party": "Green Party/Parti Vert",
  "votes": 3551,
  "votePercentage": 5.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Dorian Baxter",
  "party": "PC Party/Parti PC",
  "votes": 901,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Andrew McCaughtrie",
  "party": "People's Party/Parti populaire",
  "votes": 588,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35065,
  "candidate": "Laurie Goble",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 104,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Vance Badawey **",
  "party": "Liberal/Libéral",
  "votes": 20292,
  "votePercentage": 35,
  "majority": 2305,
  "majorityPercentage": 4.0
},

{
  "index": 35066,
  "candidate": "April Jeffs",
  "party": "Conservative/Conservateur",
  "votes": 17987,
  "votePercentage": 31,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Malcolm Allen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 15469,
  "votePercentage": 26.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Michael Tomaino",
  "party": "Green Party/Parti Vert",
  "votes": 3054,
  "votePercentage": 5.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Andrew Sainz-Nieto",
  "party": "People's Party/Parti populaire",
  "votes": 776,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Nic Bylsma",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 308,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35066,
  "candidate": "Robert Walker",
  "party": "ML/ML",
  "votes": 77,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Tony Baldinelli",
  "party": "Conservative/Conservateur",
  "votes": 24751,
  "votePercentage": 35.5,
  "majority": 2061,
  "majorityPercentage": 3.0
},

{
  "index": 35067,
  "candidate": "Andrea Kaiser",
  "party": "Liberal/Libéral",
  "votes": 22690,
  "votePercentage": 32.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Brian Barker",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12566,
  "votePercentage": 18,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Mike Strange",
  "party": "Independent/Indépendant(e)",
  "votes": 4997,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Sandra O'Connor",
  "party": "Green Party/Parti Vert",
  "votes": 3404,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Alexander Taylor",
  "party": "People's Party/Parti populaire",
  "votes": 968,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35067,
  "candidate": "Tricia O'Connor",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 358,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35068,
  "candidate": "Dean Allison **",
  "party": "Conservative/Conservateur",
  "votes": 24447,
  "votePercentage": 45.3,
  "majority": 7018,
  "majorityPercentage": 13.0
},

{
  "index": 35068,
  "candidate": "Ian Bingham",
  "party": "Liberal/Libéral",
  "votes": 17429,
  "votePercentage": 32.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35068,
  "candidate": "Nameer Rahman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6540,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35068,
  "candidate": "Terry Teather",
  "party": "Green Party/Parti Vert",
  "votes": 3620,
  "votePercentage": 6.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35068,
  "candidate": "Harold Jonker",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 1019,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35068,
  "candidate": "Miles Morton",
  "party": "People's Party/Parti populaire",
  "votes": 869,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35069,
  "candidate": "Marc G Serré **",
  "party": "Liberal/Libéral",
  "votes": 19046,
  "votePercentage": 39,
  "majority": 3390,
  "majorityPercentage": 6.9
},

{
  "index": 35069,
  "candidate": "Stef Paquette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 15656,
  "votePercentage": 32.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35069,
  "candidate": "Aino Laamanen",
  "party": "Conservative/Conservateur",
  "votes": 10343,
  "votePercentage": 21.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35069,
  "candidate": "Casey Lalonde",
  "party": "Green Party/Parti Vert",
  "votes": 2644,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35069,
  "candidate": "Mikko Paavola",
  "party": "People's Party/Parti populaire",
  "votes": 1159,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35070,
  "candidate": "Anthony Rota **",
  "party": "Liberal/Libéral",
  "votes": 19352,
  "votePercentage": 40.5,
  "majority": 6368,
  "majorityPercentage": 13.3
},

{
  "index": 35070,
  "candidate": "Jordy Carr",
  "party": "Conservative/Conservateur",
  "votes": 12984,
  "votePercentage": 27.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35070,
  "candidate": "Rob Boulet",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9784,
  "votePercentage": 20.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35070,
  "candidate": "Alex Gomm",
  "party": "Green Party/Parti Vert",
  "votes": 3111,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35070,
  "candidate": "Mark King",
  "party": "People's Party/Parti populaire",
  "votes": 2496,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35071,
  "candidate": "Philip Lawrence",
  "party": "Conservative/Conservateur",
  "votes": 27385,
  "votePercentage": 39.7,
  "majority": 2408,
  "majorityPercentage": 3.5
},

{
  "index": 35071,
  "candidate": "Kim Rudd **",
  "party": "Liberal/Libéral",
  "votes": 24977,
  "votePercentage": 36.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35071,
  "candidate": "Mallory MacDonald",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9615,
  "votePercentage": 13.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35071,
  "candidate": "Jeff Wheeldon",
  "party": "Green Party/Parti Vert",
  "votes": 5524,
  "votePercentage": 8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35071,
  "candidate": "Frank Vaughan",
  "party": "People's Party/Parti populaire",
  "votes": 1460,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35072,
  "candidate": "Anita Anand",
  "party": "Liberal/Libéral",
  "votes": 30265,
  "votePercentage": 46.3,
  "majority": 4704,
  "majorityPercentage": 7.2
},

{
  "index": 35072,
  "candidate": "Terence Young",
  "party": "Conservative/Conservateur",
  "votes": 25561,
  "votePercentage": 39.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35072,
  "candidate": "Jerome Adamo",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4928,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35072,
  "candidate": "James Elwick",
  "party": "Green Party/Parti Vert",
  "votes": 3704,
  "votePercentage": 5.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35072,
  "candidate": "JD Meaney",
  "party": "People's Party/Parti populaire",
  "votes": 798,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35072,
  "candidate": "Sushila Pereira",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 145,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35073,
  "candidate": "Pam Damoff **",
  "party": "Liberal/Libéral",
  "votes": 33597,
  "votePercentage": 48.3,
  "majority": 7113,
  "majorityPercentage": 10.2
},

{
  "index": 35073,
  "candidate": "Sean Weir",
  "party": "Conservative/Conservateur",
  "votes": 26484,
  "votePercentage": 38,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35073,
  "candidate": "Nicolas Dion",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5866,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35073,
  "candidate": "Michael Houghton",
  "party": "Green Party/Parti Vert",
  "votes": 2925,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35073,
  "candidate": "Gilbert Joseph Jubinville",
  "party": "People's Party/Parti populaire",
  "votes": 751,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35076,
  "candidate": "Marie-France Lalonde",
  "party": "Liberal/Libéral",
  "votes": 44183,
  "votePercentage": 54.3,
  "majority": 21199,
  "majorityPercentage": 26.0
},

{
  "index": 35076,
  "candidate": "David Bertschi",
  "party": "Conservative/Conservateur",
  "votes": 22984,
  "votePercentage": 28.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35076,
  "candidate": "Jacqui Wiens",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9428,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35076,
  "candidate": "Michelle Petersen",
  "party": "Green Party/Parti Vert",
  "votes": 3829,
  "votePercentage": 4.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35076,
  "candidate": "Roger Saint-Fleur",
  "party": "People's Party/Parti populaire",
  "votes": 986,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35074,
  "candidate": "Colin Carrie **",
  "party": "Conservative/Conservateur",
  "votes": 24087,
  "votePercentage": 38.9,
  "majority": 6419,
  "majorityPercentage": 10.4
},

{
  "index": 35074,
  "candidate": "Shailene Panylo",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 17668,
  "votePercentage": 28.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35074,
  "candidate": "Afroza Hossain",
  "party": "Liberal/Libéral",
  "votes": 15750,
  "votePercentage": 25.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35074,
  "candidate": "Jovannah Ramsden",
  "party": "Green Party/Parti Vert",
  "votes": 3151,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35074,
  "candidate": "Eric Mackenzie",
  "party": "People's Party/Parti populaire",
  "votes": 1215,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35074,
  "candidate": "Jeff Tomlinson",
  "party": "Communist/Communiste",
  "votes": 112,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Catherine McKenna **",
  "party": "Liberal/Libéral",
  "votes": 38391,
  "votePercentage": 48.7,
  "majority": 15475,
  "majorityPercentage": 19.6
},

{
  "index": 35075,
  "candidate": "Emilie Taman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 22916,
  "votePercentage": 29,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Carol Clemenhagen",
  "party": "Conservative/Conservateur",
  "votes": 9920,
  "votePercentage": 12.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Angela Keller-Herzog",
  "party": "Green Party/Parti Vert",
  "votes": 5837,
  "votePercentage": 7.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Merylee Sevilla",
  "party": "People's Party/Parti populaire",
  "votes": 720,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Coreen Corcoran",
  "party": "Libertarian/Libertarien",
  "votes": 360,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Shelby Bertrand",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 207,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Marie-Chantal Leriche",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 198,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Chris G Jones",
  "party": "Independent/Indépendant(e)",
  "votes": 177,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Stuart Ryan",
  "party": "Communist/Communiste",
  "votes": 111,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35075,
  "candidate": "Giang Ha Thu Vo",
  "party": "Independent/Indépendant(e)",
  "votes": 65,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "David McGuinty **",
  "party": "Liberal/Libéral",
  "votes": 34205,
  "votePercentage": 52.3,
  "majority": 18180,
  "majorityPercentage": 27.8
},

{
  "index": 35077,
  "candidate": "Eli Tannis",
  "party": "Conservative/Conservateur",
  "votes": 16025,
  "votePercentage": 24.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Morgan Gay",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10457,
  "votePercentage": 16,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Les Schram",
  "party": "Green Party/Parti Vert",
  "votes": 3645,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Rodrigo André Bolaños",
  "party": "People's Party/Parti populaire",
  "votes": 717,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Ahmed Bouragba",
  "party": "Independent/Indépendant(e)",
  "votes": 141,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Larry Wasslen",
  "party": "Communist/Communiste",
  "votes": 99,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35077,
  "candidate": "Sarmad Laith",
  "party": "Independent/Indépendant(e)",
  "votes": 87,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Anita Vandenbeld **",
  "party": "Liberal/Libéral",
  "votes": 28378,
  "votePercentage": 45.6,
  "majority": 11502,
  "majorityPercentage": 18.5
},

{
  "index": 35079,
  "candidate": "Abdul Abdi",
  "party": "Conservative/Conservateur",
  "votes": 16876,
  "votePercentage": 27.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Angella MacEwen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11646,
  "votePercentage": 18.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "David Stibbe",
  "party": "Green Party/Parti Vert",
  "votes": 3894,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Serge Guevorkian",
  "party": "People's Party/Parti populaire",
  "votes": 839,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Sean Mulligan",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 351,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Vincent Cama",
  "party": "Communist/Communiste",
  "votes": 103,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Butch Moore",
  "party": "No Affiliation/Aucune appartenance",
  "votes": 71,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35079,
  "candidate": "Nick Lin",
  "party": "ML/ML",
  "votes": 48,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Mona Fortier **",
  "party": "Liberal/Libéral",
  "votes": 32679,
  "votePercentage": 51.2,
  "majority": 19163,
  "majorityPercentage": 30.0
},

{
  "index": 35078,
  "candidate": "Stéphanie Mercier",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13516,
  "votePercentage": 21.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Joel E. Bernard",
  "party": "Conservative/Conservateur",
  "votes": 11118,
  "votePercentage": 17.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Oriana Ngabirano",
  "party": "Green Party/Parti Vert",
  "votes": 4796,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Paul Durst",
  "party": "People's Party/Parti populaire",
  "votes": 1064,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Derek Miller",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 229,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Joel Altman",
  "party": "Independent/Indépendant(e)",
  "votes": 211,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Michelle Paquette",
  "party": "Communist/Communiste",
  "votes": 115,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Daniel James McHugh",
  "party": "Independent/Indépendant(e)",
  "votes": 94,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35078,
  "candidate": "Christian Legeais",
  "party": "ML/ML",
  "votes": 59,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35080,
  "candidate": "Dave MacKenzie **",
  "party": "Conservative/Conservateur",
  "votes": 29310,
  "votePercentage": 48.1,
  "majority": 17004,
  "majorityPercentage": 27.9
},

{
  "index": 35080,
  "candidate": "Matthew Chambers",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12306,
  "votePercentage": 20.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35080,
  "candidate": "Brendan Knight",
  "party": "Liberal/Libéral",
  "votes": 11745,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35080,
  "candidate": "Lisa Birtch-Carriere",
  "party": "Green Party/Parti Vert",
  "votes": 4770,
  "votePercentage": 7.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35080,
  "candidate": "Wendy Martin",
  "party": "People's Party/Parti populaire",
  "votes": 1774,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35080,
  "candidate": "Melody Aldred",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 986,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Arif Virani **",
  "party": "Liberal/Libéral",
  "votes": 28852,
  "votePercentage": 47.4,
  "majority": 9672,
  "majorityPercentage": 15.9
},

{
  "index": 35081,
  "candidate": "Paul Taylor",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 19180,
  "votePercentage": 31.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Adam Pham",
  "party": "Conservative/Conservateur",
  "votes": 8015,
  "votePercentage": 13.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Nick Capra",
  "party": "Green Party/Parti Vert",
  "votes": 3916,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Greg Wycliffe",
  "party": "People's Party/Parti populaire",
  "votes": 643,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Terry Parker",
  "party": "Radical Marijuana/Radical Marijuana",
  "votes": 119,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Alykhan Pabani",
  "party": "Communist/Communiste",
  "votes": 119,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35081,
  "candidate": "Lorne Gershuny",
  "party": "ML/ML",
  "votes": 43,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35082,
  "candidate": "Scott Aitchison",
  "party": "Conservative/Conservateur",
  "votes": 22845,
  "votePercentage": 41.8,
  "majority": 6230,
  "majorityPercentage": 11.4
},

{
  "index": 35082,
  "candidate": "Trisha Cowie",
  "party": "Liberal/Libéral",
  "votes": 16615,
  "votePercentage": 30.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35082,
  "candidate": "Gord Miller",
  "party": "Green Party/Parti Vert",
  "votes": 8409,
  "votePercentage": 15.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35082,
  "candidate": "Tom Young",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6417,
  "votePercentage": 11.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35082,
  "candidate": "Daniel Predie Jr",
  "party": "Independent/Indépendant(e)",
  "votes": 377,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35083,
  "candidate": "John Nater **",
  "party": "Conservative/Conservateur",
  "votes": 25622,
  "votePercentage": 46.3,
  "majority": 10620,
  "majorityPercentage": 19.2
},

{
  "index": 35083,
  "candidate": "Pirie Mitchell",
  "party": "Liberal/Libéral",
  "votes": 15002,
  "votePercentage": 27.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35083,
  "candidate": "Geoff Krauter",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8094,
  "votePercentage": 14.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35083,
  "candidate": "Collan Simmons",
  "party": "Green Party/Parti Vert",
  "votes": 4949,
  "votePercentage": 9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35083,
  "candidate": "Roger Fuhr",
  "party": "People's Party/Parti populaire",
  "votes": 894,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35083,
  "candidate": "Irma DeVries",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 733,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Maryam Monsef **",
  "party": "Liberal/Libéral",
  "votes": 27400,
  "votePercentage": 39.3,
  "majority": 3043,
  "majorityPercentage": 4.4
},

{
  "index": 35084,
  "candidate": "Michael Skinner",
  "party": "Conservative/Conservateur",
  "votes": 24357,
  "votePercentage": 34.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Candace Shaw",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11872,
  "votePercentage": 17,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Andrew MacGregor",
  "party": "Green Party/Parti Vert",
  "votes": 4930,
  "votePercentage": 7.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Alexander Murphy",
  "party": "People's Party/Parti populaire",
  "votes": 890,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Robert M Bowers",
  "party": "Independent/Indépendant(e)",
  "votes": 180,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35084,
  "candidate": "Ken Ranney",
  "party": "Stop Climate Change/Arrêtonslechangementclimatique",
  "votes": 172,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35085,
  "candidate": "Jennifer O'Connell **",
  "party": "Liberal/Libéral",
  "votes": 32387,
  "votePercentage": 51,
  "majority": 13925,
  "majorityPercentage": 21.9
},

{
  "index": 35085,
  "candidate": "Cyma Musarat",
  "party": "Conservative/Conservateur",
  "votes": 18462,
  "votePercentage": 29.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35085,
  "candidate": "Eileen Higdon",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7582,
  "votePercentage": 11.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35085,
  "candidate": "Peter Forint",
  "party": "Green Party/Parti Vert",
  "votes": 3799,
  "votePercentage": 6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35085,
  "candidate": "Corneliu Chisu",
  "party": "People's Party/Parti populaire",
  "votes": 1265,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Cheryl Gallant **",
  "party": "Conservative/Conservateur",
  "votes": 31080,
  "votePercentage": 52.7,
  "majority": 19548,
  "majorityPercentage": 33.2
},

{
  "index": 35086,
  "candidate": "Ruben Marini",
  "party": "Liberal/Libéral",
  "votes": 11532,
  "votePercentage": 19.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Eileen Jones-Whyte",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8786,
  "votePercentage": 14.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Ian Pineau",
  "party": "Green Party/Parti Vert",
  "votes": 3230,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "David Ainsworth",
  "party": "People's Party/Parti populaire",
  "votes": 1463,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Dan Criger",
  "party": "Independent/Indépendant(e)",
  "votes": 1125,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Dheerendra Kumar",
  "party": "Independent/Indépendant(e)",
  "votes": 917,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Robert Cherrin",
  "party": "VCP/CAC",
  "votes": 358,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Stefan Klietsch",
  "party": "Libertarian/Libertarien",
  "votes": 266,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35086,
  "candidate": "Jonathan Davis",
  "party": "Independent/Indépendant(e)",
  "votes": 200,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35087,
  "candidate": "Majid Jowhari **",
  "party": "Liberal/Libéral",
  "votes": 21804,
  "votePercentage": 43.5,
  "majority": 212,
  "majorityPercentage": 0.4
},

{
  "index": 35087,
  "candidate": "Costas Menegakis",
  "party": "Conservative/Conservateur",
  "votes": 21592,
  "votePercentage": 43.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35087,
  "candidate": "Adam DeVita",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4425,
  "votePercentage": 8.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35087,
  "candidate": "Ichha Kohli",
  "party": "Green Party/Parti Vert",
  "votes": 1695,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35087,
  "candidate": "Igor Tvorogov",
  "party": "People's Party/Parti populaire",
  "votes": 507,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35087,
  "candidate": "Otto Wevers",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 126,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35089,
  "candidate": "Chris Bittle **",
  "party": "Liberal/Libéral",
  "votes": 24183,
  "votePercentage": 40.2,
  "majority": 5205,
  "majorityPercentage": 8.7
},

{
  "index": 35089,
  "candidate": "Krystina Waler",
  "party": "Conservative/Conservateur",
  "votes": 18978,
  "votePercentage": 31.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35089,
  "candidate": "Dennis Van Meer",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12431,
  "votePercentage": 20.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35089,
  "candidate": "Travis Mason",
  "party": "Green Party/Parti Vert",
  "votes": 3695,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35089,
  "candidate": "Allan DeRoo",
  "party": "People's Party/Parti populaire",
  "votes": 826,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35091,
  "candidate": "Marilyn Gladu **",
  "party": "Conservative/Conservateur",
  "votes": 28623,
  "votePercentage": 49.4,
  "majority": 15979,
  "majorityPercentage": 27.6
},

{
  "index": 35091,
  "candidate": "Adam Kilner",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12644,
  "votePercentage": 21.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35091,
  "candidate": "Carmen Lemieux",
  "party": "Liberal/Libéral",
  "votes": 12041,
  "votePercentage": 20.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35091,
  "candidate": "Peter Robert Smith",
  "party": "Green Party/Parti Vert",
  "votes": 2490,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35091,
  "candidate": "Brian Everaert",
  "party": "People's Party/Parti populaire",
  "votes": 1587,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35091,
  "candidate": "Thomas Laird",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 531,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35092,
  "candidate": "Terry Sheehan **",
  "party": "Liberal/Libéral",
  "votes": 16284,
  "votePercentage": 39.1,
  "majority": 2877,
  "majorityPercentage": 6.9
},

{
  "index": 35092,
  "candidate": "Sonny Spina",
  "party": "Conservative/Conservateur",
  "votes": 13407,
  "votePercentage": 32.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35092,
  "candidate": "Sara McCleary",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9459,
  "votePercentage": 22.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35092,
  "candidate": "Geo McLean",
  "party": "Green Party/Parti Vert",
  "votes": 1809,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35092,
  "candidate": "Amy Zuccato",
  "party": "People's Party/Parti populaire",
  "votes": 741,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35094,
  "candidate": "Salma Zahid **",
  "party": "Liberal/Libéral",
  "votes": 25695,
  "votePercentage": 55.2,
  "majority": 15308,
  "majorityPercentage": 32.9
},

{
  "index": 35094,
  "candidate": "Irshad Chaudhry",
  "party": "Conservative/Conservateur",
  "votes": 10387,
  "votePercentage": 22.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35094,
  "candidate": "Faiz Kamal",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5452,
  "votePercentage": 11.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35094,
  "candidate": "John Cannis",
  "party": "Independent/Indépendant(e)",
  "votes": 2524,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35094,
  "candidate": "Dordana Hakimzadah",
  "party": "Green Party/Parti Vert",
  "votes": 1336,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35094,
  "candidate": "Jeremiah Vijeyaratnam",
  "party": "People's Party/Parti populaire",
  "votes": 1162,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35096,
  "candidate": "Shaun Chen **",
  "party": "Liberal/Libéral",
  "votes": 20911,
  "votePercentage": 53.6,
  "majority": 9073,
  "majorityPercentage": 23.2
},

{
  "index": 35096,
  "candidate": "David Kong",
  "party": "Conservative/Conservateur",
  "votes": 11838,
  "votePercentage": 30.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35096,
  "candidate": "Yan Chen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5039,
  "votePercentage": 12.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35096,
  "candidate": "Avery Velez",
  "party": "Green Party/Parti Vert",
  "votes": 796,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35096,
  "candidate": "Jude Guerrier",
  "party": "People's Party/Parti populaire",
  "votes": 370,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35096,
  "candidate": "Janet Robinson",
  "party": "UPC/UPC",
  "votes": 83,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35098,
  "candidate": "Bill Blair **",
  "party": "Liberal/Libéral",
  "votes": 28965,
  "votePercentage": 57.2,
  "majority": 18463,
  "majorityPercentage": 36.5
},

{
  "index": 35098,
  "candidate": "Kimberly Fawcett Smith",
  "party": "Conservative/Conservateur",
  "votes": 10502,
  "votePercentage": 20.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35098,
  "candidate": "Keith McCrady",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7865,
  "votePercentage": 15.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35098,
  "candidate": "Amanda Cain",
  "party": "Green Party/Parti Vert",
  "votes": 2477,
  "votePercentage": 4.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35098,
  "candidate": "Italo Eratostene",
  "party": "People's Party/Parti populaire",
  "votes": 590,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35098,
  "candidate": "Simon Luisi",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 236,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35093,
  "candidate": "Jean Yip **",
  "party": "Liberal/Libéral",
  "votes": 21115,
  "votePercentage": 50.5,
  "majority": 5623,
  "majorityPercentage": 13.4
},

{
  "index": 35093,
  "candidate": "Sean Hu",
  "party": "Conservative/Conservateur",
  "votes": 15492,
  "votePercentage": 37,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35093,
  "candidate": "Larisa Julius",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3636,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35093,
  "candidate": "Randi Ramdeen",
  "party": "Green Party/Parti Vert",
  "votes": 1050,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35093,
  "candidate": "Anthony Internicola",
  "party": "People's Party/Parti populaire",
  "votes": 521,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "John McKay **",
  "party": "Liberal/Libéral",
  "votes": 26123,
  "votePercentage": 61.1,
  "majority": 16570,
  "majorityPercentage": 38.8
},

{
  "index": 35095,
  "candidate": "Quintus Thuraisingham",
  "party": "Conservative/Conservateur",
  "votes": 9553,
  "votePercentage": 22.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Michelle Spencer",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4806,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Tara McMahon",
  "party": "Green Party/Parti Vert",
  "votes": 1220,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Jigna Jani",
  "party": "People's Party/Parti populaire",
  "votes": 648,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Kevin Clarke",
  "party": "Independent/Indépendant(e)",
  "votes": 112,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Gus Stefanis",
  "party": "Nationalist/Nationaliste",
  "votes": 85,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Kathleen Marie Holding",
  "party": "Independent/Indépendant(e)",
  "votes": 70,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Stephen Abara",
  "party": "Independent/Indépendant(e)",
  "votes": 70,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35095,
  "candidate": "Farhan Alvi",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 55,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35097,
  "candidate": "Gary Anandasangaree **",
  "party": "Liberal/Libéral",
  "votes": 31360,
  "votePercentage": 62.2,
  "majority": 21245,
  "majorityPercentage": 42.1
},

{
  "index": 35097,
  "candidate": "Bobby Singh",
  "party": "Conservative/Conservateur",
  "votes": 10115,
  "votePercentage": 20.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35097,
  "candidate": "Kingsley Kwok",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5801,
  "votePercentage": 11.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35097,
  "candidate": "Jessica Hamilton",
  "party": "Green Party/Parti Vert",
  "votes": 2330,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35097,
  "candidate": "Dilano Sally",
  "party": "People's Party/Parti populaire",
  "votes": 467,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35097,
  "candidate": "Mark Theodoru",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 353,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35100,
  "candidate": "Bruce Stanton **",
  "party": "Conservative/Conservateur",
  "votes": 27241,
  "votePercentage": 43.4,
  "majority": 7931,
  "majorityPercentage": 12.6
},

{
  "index": 35100,
  "candidate": "Gerry Hawes",
  "party": "Liberal/Libéral",
  "votes": 19310,
  "votePercentage": 30.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35100,
  "candidate": "Angelique Belcourt",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8850,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35100,
  "candidate": "Valerie Powell",
  "party": "Green Party/Parti Vert",
  "votes": 5882,
  "votePercentage": 9.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35100,
  "candidate": "Stephen Makk",
  "party": "People's Party/Parti populaire",
  "votes": 1154,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35100,
  "candidate": "Chris Brown",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 341,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35099,
  "candidate": "Terry Dowdall",
  "party": "Conservative/Conservateur",
  "votes": 32812,
  "votePercentage": 43.5,
  "majority": 8887,
  "majorityPercentage": 11.8
},

{
  "index": 35099,
  "candidate": "Lorne Kenney",
  "party": "Liberal/Libéral",
  "votes": 23925,
  "votePercentage": 31.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35099,
  "candidate": "Sherri Jackson",
  "party": "Green Party/Parti Vert",
  "votes": 8589,
  "votePercentage": 11.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35099,
  "candidate": "Ilona Matthews",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8462,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35099,
  "candidate": "Richard Sommer",
  "party": "People's Party/Parti populaire",
  "votes": 1416,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35099,
  "candidate": "Tony D'Angelo",
  "party": "VCP/CAC",
  "votes": 305,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35101,
  "candidate": "Adam Vaughan **",
  "party": "Liberal/Libéral",
  "votes": 33822,
  "votePercentage": 55.8,
  "majority": 21634,
  "majorityPercentage": 35.7
},

{
  "index": 35101,
  "candidate": "Diana Yoon",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12188,
  "votePercentage": 20.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35101,
  "candidate": "Frank Fang",
  "party": "Conservative/Conservateur",
  "votes": 10680,
  "votePercentage": 17.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35101,
  "candidate": "Dean Maher",
  "party": "Green Party/Parti Vert",
  "votes": 3174,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35101,
  "candidate": "Robert Stewart",
  "party": "People's Party/Parti populaire",
  "votes": 672,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35101,
  "candidate": "Marcela Ramirez",
  "party": "Independent/Indépendant(e)",
  "votes": 114,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35102,
  "candidate": "Eric Duncan",
  "party": "Conservative/Conservateur",
  "votes": 28976,
  "votePercentage": 53.9,
  "majority": 15209,
  "majorityPercentage": 28.3
},

{
  "index": 35102,
  "candidate": "Heather Megill",
  "party": "Liberal/Libéral",
  "votes": 13767,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35102,
  "candidate": "Kelsey Catherine Schmitz",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7674,
  "votePercentage": 14.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35102,
  "candidate": "Raheem Aman",
  "party": "Green Party/Parti Vert",
  "votes": 2126,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35102,
  "candidate": "Sabile Trimm",
  "party": "People's Party/Parti populaire",
  "votes": 1168,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Paul Lefebvre **",
  "party": "Liberal/Libéral",
  "votes": 19643,
  "votePercentage": 40.9,
  "majority": 5758,
  "majorityPercentage": 12.0
},

{
  "index": 35103,
  "candidate": "Beth Mairs",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13885,
  "votePercentage": 28.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Pierre St-Amant",
  "party": "Conservative/Conservateur",
  "votes": 9864,
  "votePercentage": 20.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Bill Crumplin",
  "party": "Green Party/Parti Vert",
  "votes": 3225,
  "votePercentage": 6.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Sean Paterson",
  "party": "People's Party/Parti populaire",
  "votes": 873,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Chanel Lalonde",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 282,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "Charlene Sylvestre",
  "party": "Independent/Indépendant(e)",
  "votes": 135,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35103,
  "candidate": "J. David Popescu",
  "party": "Independent/Indépendant(e)",
  "votes": 70,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35104,
  "candidate": "Peter Kent **",
  "party": "Conservative/Conservateur",
  "votes": 29187,
  "votePercentage": 54.6,
  "majority": 10241,
  "majorityPercentage": 19.1
},

{
  "index": 35104,
  "candidate": "Gary Gladstone",
  "party": "Liberal/Libéral",
  "votes": 18946,
  "votePercentage": 35.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35104,
  "candidate": "Sara Petrucci",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3469,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35104,
  "candidate": "Josh Rachlis",
  "party": "Green Party/Parti Vert",
  "votes": 1600,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35104,
  "candidate": "Nathan Bregman",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 217,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35104,
  "candidate": "Waseem Malik",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 77,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35105,
  "candidate": "Marcus Powlowski",
  "party": "Liberal/Libéral",
  "votes": 14498,
  "votePercentage": 35.3,
  "majority": 2459,
  "majorityPercentage": 6.0
},

{
  "index": 35105,
  "candidate": "Linda Rydholm",
  "party": "Conservative/Conservateur",
  "votes": 12039,
  "votePercentage": 29.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35105,
  "candidate": "Yuk-Sem Won",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11944,
  "votePercentage": 29.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35105,
  "candidate": "Amanda Moddejonge",
  "party": "Green Party/Parti Vert",
  "votes": 1829,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35105,
  "candidate": "Andrew Hartnell",
  "party": "People's Party/Parti populaire",
  "votes": 741,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35106,
  "candidate": "Patty Hajdu **",
  "party": "Liberal/Libéral",
  "votes": 18502,
  "votePercentage": 42.9,
  "majority": 7466,
  "majorityPercentage": 17.3
},

{
  "index": 35106,
  "candidate": "Frank Pullia",
  "party": "Conservative/Conservateur",
  "votes": 11036,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35106,
  "candidate": "Anna Betty Achneepineskum",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9126,
  "votePercentage": 21.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35106,
  "candidate": "Bruce Hyer",
  "party": "Green Party/Parti Vert",
  "votes": 3639,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35106,
  "candidate": "Youssef Khanjari",
  "party": "People's Party/Parti populaire",
  "votes": 734,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35106,
  "candidate": "Alexander Vodden",
  "party": "Libertarian/Libertarien",
  "votes": 140,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35107,
  "candidate": "Charlie Angus **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 14885,
  "votePercentage": 40.5,
  "majority": 4978,
  "majorityPercentage": 13.5
},

{
  "index": 35107,
  "candidate": "Kraymr Grenke",
  "party": "Conservative/Conservateur",
  "votes": 9907,
  "votePercentage": 27,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35107,
  "candidate": "Michelle Boileau",
  "party": "Liberal/Libéral",
  "votes": 9443,
  "votePercentage": 25.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35107,
  "candidate": "Max Kennedy",
  "party": "Green Party/Parti Vert",
  "votes": 1257,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35107,
  "candidate": "Renaud Roy",
  "party": "People's Party/Parti populaire",
  "votes": 1248,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Bill Morneau **",
  "party": "Liberal/Libéral",
  "votes": 31271,
  "votePercentage": 57.4,
  "majority": 19129,
  "majorityPercentage": 35.1
},

{
  "index": 35108,
  "candidate": "Brian Chang",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12142,
  "votePercentage": 22.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Ryan Lester",
  "party": "Conservative/Conservateur",
  "votes": 6613,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Annamie Paul",
  "party": "Green Party/Parti Vert",
  "votes": 3852,
  "votePercentage": 7.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Rob Lewin",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 182,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Sean Carson",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 147,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Jason Tavares",
  "party": "Independent/Indépendant(e)",
  "votes": 126,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Bronwyn Cragg",
  "party": "Communist/Communiste",
  "votes": 125,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35108,
  "candidate": "Philip Fernandez",
  "party": "ML/ML",
  "votes": 54,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Julie Dabrusin **",
  "party": "Liberal/Libéral",
  "votes": 27681,
  "votePercentage": 47.7,
  "majority": 8398,
  "majorityPercentage": 14.5
},

{
  "index": 35109,
  "candidate": "Min Sook Lee",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 19283,
  "votePercentage": 33.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Zia Choudhary",
  "party": "Conservative/Conservateur",
  "votes": 6091,
  "votePercentage": 10.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Chris Tolley",
  "party": "Green Party/Parti Vert",
  "votes": 3761,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Tara Dos Remedios",
  "party": "People's Party/Parti populaire",
  "votes": 621,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Elizabeth Abbott",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 261,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "John Kladitis",
  "party": "Independent/Indépendant(e)",
  "votes": 210,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35109,
  "candidate": "Ivan Byard",
  "party": "Communist/Communiste",
  "votes": 151,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35090,
  "candidate": "Carolyn Bennett **",
  "party": "Liberal/Libéral",
  "votes": 32494,
  "votePercentage": 54.3,
  "majority": 19561,
  "majorityPercentage": 32.7
},

{
  "index": 35090,
  "candidate": "Jae Truesdell",
  "party": "Conservative/Conservateur",
  "votes": 12933,
  "votePercentage": 21.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35090,
  "candidate": "Alok Mukherjee",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9442,
  "votePercentage": 15.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35090,
  "candidate": "Sarah Climenhaga",
  "party": "Green Party/Parti Vert",
  "votes": 4042,
  "votePercentage": 6.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35090,
  "candidate": "John Kellen",
  "party": "People's Party/Parti populaire",
  "votes": 923,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Chrystia Freeland **",
  "party": "Liberal/Libéral",
  "votes": 29652,
  "votePercentage": 51.7,
  "majority": 17079,
  "majorityPercentage": 29.8
},

{
  "index": 35110,
  "candidate": "Melissa Jean-Baptiste Vajda",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12573,
  "votePercentage": 21.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Helen-Claire Tingling",
  "party": "Conservative/Conservateur",
  "votes": 9342,
  "votePercentage": 16.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Tim Grant",
  "party": "Green Party/Parti Vert",
  "votes": 4861,
  "votePercentage": 8.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Aran Lockwood",
  "party": "People's Party/Parti populaire",
  "votes": 510,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Liz White",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 159,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Drew Garvie",
  "party": "Communist/Communiste",
  "votes": 143,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Karin Brothers",
  "party": "Stop Climate Change/Arrêtonslechangementclimatique",
  "votes": 124,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35110,
  "candidate": "Steve Rutchinski",
  "party": "ML/ML",
  "votes": 27,
  "votePercentage": 0,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35111,
  "candidate": "Francesco Sorbara **",
  "party": "Liberal/Libéral",
  "votes": 25810,
  "votePercentage": 51.3,
  "majority": 7521,
  "majorityPercentage": 14.9
},

{
  "index": 35111,
  "candidate": "Teresa Kruze",
  "party": "Conservative/Conservateur",
  "votes": 18289,
  "votePercentage": 36.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35111,
  "candidate": "Peter DeVita",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3910,
  "votePercentage": 7.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35111,
  "candidate": "Raquel Fronte",
  "party": "Green Party/Parti Vert",
  "votes": 1302,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35111,
  "candidate": "Domenic Montesano",
  "party": "People's Party/Parti populaire",
  "votes": 852,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35111,
  "candidate": "Muhammad Hassan Khan",
  "party": "Independent/Indépendant(e)",
  "votes": 165,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35112,
  "candidate": "Bardish Chagger **",
  "party": "Liberal/Libéral",
  "votes": 31085,
  "votePercentage": 48.8,
  "majority": 15470,
  "majorityPercentage": 24.3
},

{
  "index": 35112,
  "candidate": "Jerry Zhang",
  "party": "Conservative/Conservateur",
  "votes": 15615,
  "votePercentage": 24.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35112,
  "candidate": "Lori Campbell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9710,
  "votePercentage": 15.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35112,
  "candidate": "Kirsten Wright",
  "party": "Green Party/Parti Vert",
  "votes": 6184,
  "votePercentage": 9.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35112,
  "candidate": "Erika Traub",
  "party": "People's Party/Parti populaire",
  "votes": 1112,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35113,
  "candidate": "Michael Chong **",
  "party": "Conservative/Conservateur",
  "votes": 33044,
  "votePercentage": 47.4,
  "majority": 13267,
  "majorityPercentage": 19.0
},

{
  "index": 35113,
  "candidate": "Lesley Barron",
  "party": "Liberal/Libéral",
  "votes": 19777,
  "votePercentage": 28.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35113,
  "candidate": "Ralph Martin",
  "party": "Green Party/Parti Vert",
  "votes": 8851,
  "votePercentage": 12.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35113,
  "candidate": "Andrew Bascombe",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6499,
  "votePercentage": 9.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35113,
  "candidate": "Syl Carle",
  "party": "People's Party/Parti populaire",
  "votes": 1509,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35114,
  "candidate": "Ryan Turnbull",
  "party": "Liberal/Libéral",
  "votes": 30182,
  "votePercentage": 43.7,
  "majority": 5618,
  "majorityPercentage": 8.1
},

{
  "index": 35114,
  "candidate": "Todd McCarthy",
  "party": "Conservative/Conservateur",
  "votes": 24564,
  "votePercentage": 35.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35114,
  "candidate": "Brian Dias",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9760,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35114,
  "candidate": "Paul Slavchenko",
  "party": "Green Party/Parti Vert",
  "votes": 3735,
  "votePercentage": 5.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35114,
  "candidate": "Mirko Pejic",
  "party": "People's Party/Parti populaire",
  "votes": 860,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Ali Ehsassi **",
  "party": "Liberal/Libéral",
  "votes": 22282,
  "votePercentage": 49,
  "majority": 5830,
  "majorityPercentage": 12.8
},

{
  "index": 35115,
  "candidate": "Daniel Lee",
  "party": "Conservative/Conservateur",
  "votes": 16452,
  "votePercentage": 36.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Leah Kalsi",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4231,
  "votePercentage": 9.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Sharolyn Vettese",
  "party": "Green Party/Parti Vert",
  "votes": 1671,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Richard Hillier",
  "party": "People's Party/Parti populaire",
  "votes": 563,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Birinder Singh Ahluwalia",
  "party": "Independent/Indépendant(e)",
  "votes": 200,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35115,
  "candidate": "Shodja Ziaian",
  "party": "Independent/Indépendant(e)",
  "votes": 71,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35117,
  "candidate": "Brian Masse **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 20800,
  "votePercentage": 40,
  "majority": 1922,
  "majorityPercentage": 3.7
},

{
  "index": 35117,
  "candidate": "Sandra Pupatello",
  "party": "Liberal/Libéral",
  "votes": 18878,
  "votePercentage": 36.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35117,
  "candidate": "Henry Lau",
  "party": "Conservative/Conservateur",
  "votes": 9925,
  "votePercentage": 19.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35117,
  "candidate": "Quinn Hunt",
  "party": "Green Party/Parti Vert",
  "votes": 1325,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35117,
  "candidate": "Darryl Burrell",
  "party": "People's Party/Parti populaire",
  "votes": 958,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35117,
  "candidate": "Margaret Villamizar",
  "party": "ML/ML",
  "votes": 76,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35116,
  "candidate": "Irek Kusmierczyk",
  "party": "Liberal/Libéral",
  "votes": 19046,
  "votePercentage": 33.4,
  "majority": 629,
  "majorityPercentage": 1.1
},

{
  "index": 35116,
  "candidate": "Cheryl Hardcastle **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 18417,
  "votePercentage": 32.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35116,
  "candidate": "Leo Demarce",
  "party": "Conservative/Conservateur",
  "votes": 15851,
  "votePercentage": 27.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35116,
  "candidate": "Giovanni Abati",
  "party": "Green Party/Parti Vert",
  "votes": 2177,
  "votePercentage": 3.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35116,
  "candidate": "Dan Burr",
  "party": "People's Party/Parti populaire",
  "votes": 1279,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35116,
  "candidate": "Laura Chesnik",
  "party": "ML/ML",
  "votes": 187,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35118,
  "candidate": "Michael Levitt **",
  "party": "Liberal/Libéral",
  "votes": 21680,
  "votePercentage": 50.2,
  "majority": 5828,
  "majorityPercentage": 13.5
},

{
  "index": 35118,
  "candidate": "Rachel Willson",
  "party": "Conservative/Conservateur",
  "votes": 15852,
  "votePercentage": 36.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35118,
  "candidate": "Andrea Vásquez Jiménez",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4251,
  "votePercentage": 9.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35118,
  "candidate": "Rebecca Wood",
  "party": "Green Party/Parti Vert",
  "votes": 1403,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35120,
  "candidate": "Ahmed Hussen **",
  "party": "Liberal/Libéral",
  "votes": 25976,
  "votePercentage": 58.4,
  "majority": 17561,
  "majorityPercentage": 39.5
},

{
  "index": 35120,
  "candidate": "Jasveen Rattan",
  "party": "Conservative/Conservateur",
  "votes": 8415,
  "votePercentage": 18.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35120,
  "candidate": "Yafet Tewelde",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7754,
  "votePercentage": 17.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35120,
  "candidate": "Nicki Ward",
  "party": "Green Party/Parti Vert",
  "votes": 1633,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35120,
  "candidate": "Gerard Racine",
  "party": "People's Party/Parti populaire",
  "votes": 685,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35119,
  "candidate": "Scot Davidson **",
  "party": "Conservative/Conservateur",
  "votes": 24918,
  "votePercentage": 46.3,
  "majority": 10511,
  "majorityPercentage": 19.5
},

{
  "index": 35119,
  "candidate": "Cynthia Wesley-Esquimaux",
  "party": "Liberal/Libéral",
  "votes": 14407,
  "votePercentage": 26.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35119,
  "candidate": "Jessa McLean",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7620,
  "votePercentage": 14.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35119,
  "candidate": "Jonathan Arnold",
  "party": "Green Party/Parti Vert",
  "votes": 4650,
  "votePercentage": 8.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35119,
  "candidate": "Keith Komar",
  "party": "Libertarian/Libertarien",
  "votes": 1311,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 35119,
  "candidate": "Michael Lotter",
  "party": "People's Party/Parti populaire",
  "votes": 875,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Larry Maguire **",
  "party": "Conservative/Conservateur",
  "votes": 26148,
  "votePercentage": 63.5,
  "majority": 20343,
  "majorityPercentage": 49.4
},

{
  "index": 46001,
  "candidate": "Ashley Duguay",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5805,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Terry Hayward",
  "party": "Liberal/Libéral",
  "votes": 4972,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Bill Tiessen",
  "party": "Green Party/Parti Vert",
  "votes": 2984,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Robin Lussier",
  "party": "People's Party/Parti populaire",
  "votes": 691,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Rebecca Hein",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 280,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Vanessa Hamilton",
  "party": "Independent/Indépendant(e)",
  "votes": 219,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46001,
  "candidate": "Robert Eastcott",
  "party": "Independent/Indépendant(e)",
  "votes": 107,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Marty Morantz",
  "party": "Conservative/Conservateur",
  "votes": 18815,
  "votePercentage": 40.7,
  "majority": 2417,
  "majorityPercentage": 5.2
},

{
  "index": 46002,
  "candidate": "Doug Eyolfson **",
  "party": "Liberal/Libéral",
  "votes": 16398,
  "votePercentage": 35.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Ken St. George",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6556,
  "votePercentage": 14.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Kristin Lauhn-Jensen",
  "party": "Green Party/Parti Vert",
  "votes": 2178,
  "votePercentage": 4.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Steven Fletcher",
  "party": "People's Party/Parti populaire",
  "votes": 1975,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Melissa Penner",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 166,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46002,
  "candidate": "Brian Ho",
  "party": "Independent/Indépendant(e)",
  "votes": 140,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46003,
  "candidate": "Niki Ashton **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11919,
  "votePercentage": 50.3,
  "majority": 6303,
  "majorityPercentage": 26.6
},

{
  "index": 46003,
  "candidate": "Judy Klassen",
  "party": "Liberal/Libéral",
  "votes": 5616,
  "votePercentage": 23.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46003,
  "candidate": "Cyara Bird",
  "party": "Conservative/Conservateur",
  "votes": 4714,
  "votePercentage": 19.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46003,
  "candidate": "Ralph McLean",
  "party": "Green Party/Parti Vert",
  "votes": 1144,
  "votePercentage": 4.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46003,
  "candidate": "Ken Klyne",
  "party": "People's Party/Parti populaire",
  "votes": 294,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46004,
  "candidate": "Dan Mazier",
  "party": "Conservative/Conservateur",
  "votes": 26103,
  "votePercentage": 64.3,
  "majority": 20379,
  "majorityPercentage": 50.2
},

{
  "index": 46004,
  "candidate": "Laverne Lewycky",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5724,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46004,
  "candidate": "Cathy Scofield-Singh",
  "party": "Liberal/Libéral",
  "votes": 5344,
  "votePercentage": 13.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46004,
  "candidate": "Kate Storey",
  "party": "Green Party/Parti Vert",
  "votes": 2214,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46004,
  "candidate": "Frank Godon",
  "party": "People's Party/Parti populaire",
  "votes": 711,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46004,
  "candidate": "Jenni Johnson",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 470,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46005,
  "candidate": "Daniel Blaikie **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 19786,
  "votePercentage": 45.6,
  "majority": 3546,
  "majorityPercentage": 8.2
},

{
  "index": 46005,
  "candidate": "Lawrence Toet",
  "party": "Conservative/Conservateur",
  "votes": 16240,
  "votePercentage": 37.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46005,
  "candidate": "Jennifer Malabar",
  "party": "Liberal/Libéral",
  "votes": 5346,
  "votePercentage": 12.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46005,
  "candidate": "Kelly Manweiler",
  "party": "Green Party/Parti Vert",
  "votes": 1480,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46005,
  "candidate": "Noel Gautron",
  "party": "People's Party/Parti populaire",
  "votes": 512,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Raquel Dancho",
  "party": "Conservative/Conservateur",
  "votes": 19856,
  "votePercentage": 44.8,
  "majority": 7500,
  "majorityPercentage": 16.9
},

{
  "index": 46006,
  "candidate": "MaryAnn Mihychuk **",
  "party": "Liberal/Libéral",
  "votes": 12356,
  "votePercentage": 27.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Evan Krosney",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9387,
  "votePercentage": 21.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Rylan Reed",
  "party": "Green Party/Parti Vert",
  "votes": 1777,
  "votePercentage": 4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Martin Deck",
  "party": "People's Party/Parti populaire",
  "votes": 510,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Spencer Katerynuk",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 304,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46006,
  "candidate": "Eduard Hiebert",
  "party": "Independent/Indépendant(e)",
  "votes": 108,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46007,
  "candidate": "Candice Bergen **",
  "party": "Conservative/Conservateur",
  "votes": 31600,
  "votePercentage": 70.8,
  "majority": 26821,
  "majorityPercentage": 60.1
},

{
  "index": 46007,
  "candidate": "Ken Werbiski",
  "party": "Liberal/Libéral",
  "votes": 4779,
  "votePercentage": 10.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46007,
  "candidate": "Cindy Friesen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3872,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46007,
  "candidate": "Beverley Eert",
  "party": "Green Party/Parti Vert",
  "votes": 2356,
  "votePercentage": 5.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46007,
  "candidate": "Aaron Archer",
  "party": "People's Party/Parti populaire",
  "votes": 1169,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46007,
  "candidate": "Jerome Dondo",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 860,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46008,
  "candidate": "Ted Falk **",
  "party": "Conservative/Conservateur",
  "votes": 31821,
  "votePercentage": 65.9,
  "majority": 25474,
  "majorityPercentage": 52.7
},

{
  "index": 46008,
  "candidate": "Trevor Kirczenow",
  "party": "Liberal/Libéral",
  "votes": 6347,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46008,
  "candidate": "Erin McGee",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6187,
  "votePercentage": 12.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46008,
  "candidate": "Janine G. Gibson",
  "party": "Green Party/Parti Vert",
  "votes": 2884,
  "votePercentage": 6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46008,
  "candidate": "Wayne Sturby",
  "party": "People's Party/Parti populaire",
  "votes": 1066,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46009,
  "candidate": "Dan Vandal **",
  "party": "Liberal/Libéral",
  "votes": 20300,
  "votePercentage": 42.9,
  "majority": 4864,
  "majorityPercentage": 10.3
},

{
  "index": 46009,
  "candidate": "Rejeanne Caron",
  "party": "Conservative/Conservateur",
  "votes": 15436,
  "votePercentage": 32.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46009,
  "candidate": "Billie Cross",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8037,
  "votePercentage": 17,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46009,
  "candidate": "Ben Linnick",
  "party": "Green Party/Parti Vert",
  "votes": 2671,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46009,
  "candidate": "Adam McAllister",
  "party": "People's Party/Parti populaire",
  "votes": 591,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46009,
  "candidate": "Sharma Baljeet",
  "party": "Independent/Indépendant(e)",
  "votes": 303,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46010,
  "candidate": "James Bezan **",
  "party": "Conservative/Conservateur",
  "votes": 31109,
  "votePercentage": 62.7,
  "majority": 22236,
  "majorityPercentage": 44.8
},

{
  "index": 46010,
  "candidate": "Robert A. Smith",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8873,
  "votePercentage": 17.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46010,
  "candidate": "Detlev Regelsky",
  "party": "Liberal/Libéral",
  "votes": 6003,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46010,
  "candidate": "Wayne James",
  "party": "Green Party/Parti Vert",
  "votes": 2934,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46010,
  "candidate": "Ian Kathwaroon",
  "party": "People's Party/Parti populaire",
  "votes": 683,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46011,
  "candidate": "Leah Gazan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13073,
  "votePercentage": 41.2,
  "majority": 2369,
  "majorityPercentage": 7.5
},

{
  "index": 46011,
  "candidate": "Robert-Falcon Ouellette **",
  "party": "Liberal/Libéral",
  "votes": 10704,
  "votePercentage": 33.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46011,
  "candidate": "Ryan Dyck",
  "party": "Conservative/Conservateur",
  "votes": 5561,
  "votePercentage": 17.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46011,
  "candidate": "Andrea Shalay",
  "party": "Green Party/Parti Vert",
  "votes": 1661,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46011,
  "candidate": "Yogi Henderson",
  "party": "People's Party/Parti populaire",
  "votes": 474,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46011,
  "candidate": "Stephanie Hein",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 251,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Kevin Lamoureux **",
  "party": "Liberal/Libéral",
  "votes": 15581,
  "votePercentage": 47.6,
  "majority": 7112,
  "majorityPercentage": 21.7
},

{
  "index": 46012,
  "candidate": "Kyle Mason",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8469,
  "votePercentage": 25.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Jordyn Ham",
  "party": "Conservative/Conservateur",
  "votes": 6820,
  "votePercentage": 20.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Sai Shanthanand Rajagopal",
  "party": "Green Party/Parti Vert",
  "votes": 906,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Victor Ong",
  "party": "People's Party/Parti populaire",
  "votes": 324,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Henry Hizon",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 279,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Kathy Doyle",
  "party": "Independent/Indépendant(e)",
  "votes": 231,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46012,
  "candidate": "Andrew Taylor",
  "party": "Communist/Communiste",
  "votes": 125,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46013,
  "candidate": "Terry Duguid **",
  "party": "Liberal/Libéral",
  "votes": 20182,
  "votePercentage": 42.1,
  "majority": 1645,
  "majorityPercentage": 3.4
},

{
  "index": 46013,
  "candidate": "Melanie Maher",
  "party": "Conservative/Conservateur",
  "votes": 18537,
  "votePercentage": 38.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46013,
  "candidate": "Jean-Paul Lapointe",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6678,
  "votePercentage": 13.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46013,
  "candidate": "Paul Bettess",
  "party": "Green Party/Parti Vert",
  "votes": 2073,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46013,
  "candidate": "Mirwais Nasiri",
  "party": "People's Party/Parti populaire",
  "votes": 419,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46014,
  "candidate": "Jim Carr **",
  "party": "Liberal/Libéral",
  "votes": 22799,
  "votePercentage": 45,
  "majority": 7748,
  "majorityPercentage": 15.3
},

{
  "index": 46014,
  "candidate": "Joyce Bateman",
  "party": "Conservative/Conservateur",
  "votes": 15051,
  "votePercentage": 29.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46014,
  "candidate": "Elizabeth Shearer",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8965,
  "votePercentage": 17.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46014,
  "candidate": "James Beddome",
  "party": "Green Party/Parti Vert",
  "votes": 3173,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46014,
  "candidate": "Jane MacDiarmid",
  "party": "People's Party/Parti populaire",
  "votes": 569,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 46014,
  "candidate": "Linda Marynuk",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 104,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47001,
  "candidate": "Rosemarie Falk **",
  "party": "Conservative/Conservateur",
  "votes": 28030,
  "votePercentage": 78.3,
  "majority": 23932,
  "majorityPercentage": 66.8
},

{
  "index": 47001,
  "candidate": "Marcella Pedersen",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4098,
  "votePercentage": 11.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47001,
  "candidate": "Larry Ingram",
  "party": "Liberal/Libéral",
  "votes": 2426,
  "votePercentage": 6.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47001,
  "candidate": "Jason MacInnis",
  "party": "People's Party/Parti populaire",
  "votes": 662,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47001,
  "candidate": "David Kim-Cragg",
  "party": "Green Party/Parti Vert",
  "votes": 605,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47004,
  "candidate": "Kelly Block **",
  "party": "Conservative/Conservateur",
  "votes": 35313,
  "votePercentage": 78.6,
  "majority": 29778,
  "majorityPercentage": 66.2
},

{
  "index": 47004,
  "candidate": "Jasmine Calix",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5535,
  "votePercentage": 12.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47004,
  "candidate": "Rebecca Malo",
  "party": "Liberal/Libéral",
  "votes": 2085,
  "votePercentage": 4.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47004,
  "candidate": "Dean Gibson",
  "party": "Green Party/Parti Vert",
  "votes": 873,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47004,
  "candidate": "Cody Payant",
  "party": "People's Party/Parti populaire",
  "votes": 799,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47004,
  "candidate": "Glenn Wright",
  "party": "Independent/Indépendant(e)",
  "votes": 344,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47002,
  "candidate": "Jeremy Patzer",
  "party": "Conservative/Conservateur",
  "votes": 31140,
  "votePercentage": 81.1,
  "majority": 27474,
  "majorityPercentage": 71.5
},

{
  "index": 47002,
  "candidate": "Trevor Peterson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3666,
  "votePercentage": 9.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47002,
  "candidate": "William Caton",
  "party": "Liberal/Libéral",
  "votes": 1595,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47002,
  "candidate": "Lee Harding",
  "party": "People's Party/Parti populaire",
  "votes": 1075,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47002,
  "candidate": "Bill Clary",
  "party": "Green Party/Parti Vert",
  "votes": 719,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47002,
  "candidate": "Maria Lewans",
  "party": "Independent/Indépendant(e)",
  "votes": 220,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47003,
  "candidate": "Gary Vidal",
  "party": "Conservative/Conservateur",
  "votes": 11531,
  "votePercentage": 42.3,
  "majority": 3790,
  "majorityPercentage": 13.9
},

{
  "index": 47003,
  "candidate": "Georgina Jolibois **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7741,
  "votePercentage": 28.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47003,
  "candidate": "Tammy Cook-Searson",
  "party": "Liberal/Libéral",
  "votes": 7225,
  "votePercentage": 26.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47003,
  "candidate": "Sarah Kraynick",
  "party": "Green Party/Parti Vert",
  "votes": 543,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47003,
  "candidate": "Jerome Perrault",
  "party": "People's Party/Parti populaire",
  "votes": 217,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47005,
  "candidate": "Tom Lukiwski **",
  "party": "Conservative/Conservateur",
  "votes": 31993,
  "votePercentage": 71.1,
  "majority": 24333,
  "majorityPercentage": 54.1
},

{
  "index": 47005,
  "candidate": "Talon Regent",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7660,
  "votePercentage": 17,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47005,
  "candidate": "Cecilia Melanson",
  "party": "Liberal/Libéral",
  "votes": 2517,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47005,
  "candidate": "Chey Craik",
  "party": "People's Party/Parti populaire",
  "votes": 1613,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47005,
  "candidate": "Gillian Walker",
  "party": "Green Party/Parti Vert",
  "votes": 1201,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47006,
  "candidate": "Randy Hoback **",
  "party": "Conservative/Conservateur",
  "votes": 26891,
  "votePercentage": 67.7,
  "majority": 19966,
  "majorityPercentage": 50.3
},

{
  "index": 47006,
  "candidate": "Harmony Johnson-Harder",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6925,
  "votePercentage": 17.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47006,
  "candidate": "Estelle Hjertaas",
  "party": "Liberal/Libéral",
  "votes": 4107,
  "votePercentage": 10.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47006,
  "candidate": "Kerri Wall",
  "party": "Green Party/Parti Vert",
  "votes": 839,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47006,
  "candidate": "Kelly Day",
  "party": "People's Party/Parti populaire",
  "votes": 778,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47006,
  "candidate": "Brian Littlepine",
  "party": "VCP/CAC",
  "votes": 170,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Warren Steinley",
  "party": "Conservative/Conservateur",
  "votes": 27088,
  "votePercentage": 52.5,
  "majority": 12321,
  "majorityPercentage": 23.9
},

{
  "index": 47007,
  "candidate": "Jigar Patel",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 14767,
  "votePercentage": 28.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Winter Fedyk",
  "party": "Liberal/Libéral",
  "votes": 6826,
  "votePercentage": 13.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Naomi Hunter",
  "party": "Green Party/Parti Vert",
  "votes": 2099,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Trevor Wowk",
  "party": "People's Party/Parti populaire",
  "votes": 573,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Don Morgan",
  "party": "Independent/Indépendant(e)",
  "votes": 201,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47007,
  "candidate": "Ian Bridges",
  "party": "National Citizens Alliance/Alliance Nationale Citoyens",
  "votes": 60,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Andrew Scheer **",
  "party": "Conservative/Conservateur",
  "votes": 24463,
  "votePercentage": 63.1,
  "majority": 16778,
  "majorityPercentage": 43.3
},

{
  "index": 47008,
  "candidate": "Ray Aldinger",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7685,
  "votePercentage": 19.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Jordan Ames-Sinclair",
  "party": "Liberal/Libéral",
  "votes": 4543,
  "votePercentage": 11.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Dale Dewar",
  "party": "Green Party/Parti Vert",
  "votes": 1282,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Tracey Sparrowhawk",
  "party": "People's Party/Parti populaire",
  "votes": 513,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "James Plummer",
  "party": "Libertarian/Libertarien",
  "votes": 116,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Kieran Szuchewycz",
  "party": "Independent/Indépendant(e)",
  "votes": 78,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47008,
  "candidate": "Éric Normand",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 75,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47009,
  "candidate": "Michael Kram",
  "party": "Conservative/Conservateur",
  "votes": 22418,
  "votePercentage": 49.4,
  "majority": 7176,
  "majorityPercentage": 15.8
},

{
  "index": 47009,
  "candidate": "Ralph Goodale **",
  "party": "Liberal/Libéral",
  "votes": 15242,
  "votePercentage": 33.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47009,
  "candidate": "Hailey Clark",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5801,
  "votePercentage": 12.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47009,
  "candidate": "Tamela Friesen",
  "party": "Green Party/Parti Vert",
  "votes": 1316,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47009,
  "candidate": "Mario Milanovski",
  "party": "People's Party/Parti populaire",
  "votes": 450,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47009,
  "candidate": "Evangeline Godron",
  "party": "Independent/Indépendant(e)",
  "votes": 128,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47012,
  "candidate": "Brad Redekopp",
  "party": "Conservative/Conservateur",
  "votes": 18597,
  "votePercentage": 47.7,
  "majority": 2889,
  "majorityPercentage": 7.4
},

{
  "index": 47012,
  "candidate": "Sheri Benson **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 15708,
  "votePercentage": 40.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47012,
  "candidate": "Shah Rukh",
  "party": "Liberal/Libéral",
  "votes": 2863,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47012,
  "candidate": "Shawn Setyo",
  "party": "Green Party/Parti Vert",
  "votes": 1042,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47012,
  "candidate": "Isaac Hayes",
  "party": "People's Party/Parti populaire",
  "votes": 775,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47010,
  "candidate": "Kevin Waugh **",
  "party": "Conservative/Conservateur",
  "votes": 26336,
  "votePercentage": 53.3,
  "majority": 13664,
  "majorityPercentage": 27.6
},

{
  "index": 47010,
  "candidate": "Erika Ritchie",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12672,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47010,
  "candidate": "Tracy Muggli",
  "party": "Liberal/Libéral",
  "votes": 8419,
  "votePercentage": 17,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47010,
  "candidate": "Neil Sinclair",
  "party": "Green Party/Parti Vert",
  "votes": 1320,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47010,
  "candidate": "Mark Friesen",
  "party": "People's Party/Parti populaire",
  "votes": 692,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47011,
  "candidate": "Corey Tochor",
  "party": "Conservative/Conservateur",
  "votes": 24514,
  "votePercentage": 52.1,
  "majority": 10520,
  "majorityPercentage": 22.4
},

{
  "index": 47011,
  "candidate": "Claire Card",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13994,
  "votePercentage": 29.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47011,
  "candidate": "Susan Hayton",
  "party": "Liberal/Libéral",
  "votes": 6146,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47011,
  "candidate": "Jan Norris",
  "party": "Green Party/Parti Vert",
  "votes": 1401,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47011,
  "candidate": "Guto Penteado",
  "party": "People's Party/Parti populaire",
  "votes": 667,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47011,
  "candidate": "Jeff Willerton",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 305,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47013,
  "candidate": "Robert Kitchen **",
  "party": "Conservative/Conservateur",
  "votes": 35067,
  "votePercentage": 84.4,
  "majority": 31853,
  "majorityPercentage": 76.7
},

{
  "index": 47013,
  "candidate": "Ashlee Hicks",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3214,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47013,
  "candidate": "Javin Ames-Sinclair",
  "party": "Liberal/Libéral",
  "votes": 1718,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47013,
  "candidate": "Phillip Zajac",
  "party": "People's Party/Parti populaire",
  "votes": 702,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47013,
  "candidate": "Judy Mergel",
  "party": "Green Party/Parti Vert",
  "votes": 681,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47013,
  "candidate": "Travis Patron",
  "party": "Nationalist/Nationaliste",
  "votes": 168,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47014,
  "candidate": "Cathay Wagantall **",
  "party": "Conservative/Conservateur",
  "votes": 29523,
  "votePercentage": 76.2,
  "majority": 24776,
  "majorityPercentage": 63.9
},

{
  "index": 47014,
  "candidate": "Carter Antoine",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4747,
  "votePercentage": 12.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47014,
  "candidate": "Connor Moen",
  "party": "Liberal/Libéral",
  "votes": 2488,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47014,
  "candidate": "Stacey Wiebe",
  "party": "Green Party/Parti Vert",
  "votes": 1070,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 47014,
  "candidate": "Ryan Schultz",
  "party": "People's Party/Parti populaire",
  "votes": 941,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48001,
  "candidate": "Blake Richards **",
  "party": "Conservative/Conservateur",
  "votes": 55504,
  "votePercentage": 71.1,
  "majority": 47079,
  "majorityPercentage": 60.3
},

{
  "index": 48001,
  "candidate": "Gwyneth Midgley",
  "party": "Liberal/Libéral",
  "votes": 8425,
  "votePercentage": 10.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48001,
  "candidate": "Anne Wilson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8185,
  "votePercentage": 10.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48001,
  "candidate": "Austin Mullins",
  "party": "Green Party/Parti Vert",
  "votes": 3315,
  "votePercentage": 4.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48001,
  "candidate": "Nadine Wellwood",
  "party": "People's Party/Parti populaire",
  "votes": 2651,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48002,
  "candidate": "Damien Kurek",
  "party": "Conservative/Conservateur",
  "votes": 53309,
  "votePercentage": 85.5,
  "majority": 50124,
  "majorityPercentage": 80.4
},

{
  "index": 48002,
  "candidate": "Natasha Fryzuk",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3185,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48002,
  "candidate": "Dianne Clarke",
  "party": "Liberal/Libéral",
  "votes": 2557,
  "votePercentage": 4.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48002,
  "candidate": "Geordie Nelson",
  "party": "Green Party/Parti Vert",
  "votes": 1689,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48002,
  "candidate": "David A. Michaud",
  "party": "People's Party/Parti populaire",
  "votes": 1620,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48003,
  "candidate": "Martin Shields **",
  "party": "Conservative/Conservateur",
  "votes": 46279,
  "votePercentage": 83.9,
  "majority": 43106,
  "majorityPercentage": 78.2
},

{
  "index": 48003,
  "candidate": "Margaret Rhemtulla",
  "party": "Liberal/Libéral",
  "votes": 3173,
  "votePercentage": 5.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48003,
  "candidate": "Lynn Macwilliam",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3086,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48003,
  "candidate": "Tom Ikert",
  "party": "People's Party/Parti populaire",
  "votes": 1321,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48003,
  "candidate": "Hendrika Maria Tuithof de Jonge",
  "party": "Green Party/Parti Vert",
  "votes": 826,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48003,
  "candidate": "Tom Lipp",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 453,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Greg McLean",
  "party": "Conservative/Conservateur",
  "votes": 37306,
  "votePercentage": 56.6,
  "majority": 19535,
  "majorityPercentage": 29.7
},

{
  "index": 48004,
  "candidate": "Kent Hehr **",
  "party": "Liberal/Libéral",
  "votes": 17771,
  "votePercentage": 27,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Jessica Buresi",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6516,
  "votePercentage": 9.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Thana Boonlert",
  "party": "Green Party/Parti Vert",
  "votes": 2853,
  "votePercentage": 4.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Chevy Johnston",
  "party": "People's Party/Parti populaire",
  "votes": 907,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Eden Gould",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 247,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Michael Pewtress",
  "party": "Independent/Indépendant(e)",
  "votes": 138,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48004,
  "candidate": "Dawid Pawlowski",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 126,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Len Webber **",
  "party": "Conservative/Conservateur",
  "votes": 36312,
  "votePercentage": 55.1,
  "majority": 21404,
  "majorityPercentage": 32.5
},

{
  "index": 48005,
  "candidate": "Jordan Stein",
  "party": "Liberal/Libéral",
  "votes": 14908,
  "votePercentage": 22.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Gurcharan Singh Sidhu",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7312,
  "votePercentage": 11.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Natalie Odd",
  "party": "Green Party/Parti Vert",
  "votes": 5700,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Colin Korol",
  "party": "People's Party/Parti populaire",
  "votes": 1136,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Tim Moen",
  "party": "Libertarian/Libertarien",
  "votes": 407,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48005,
  "candidate": "Kevan Hunter",
  "party": "ML/ML",
  "votes": 117,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Jasraj Singh Hallan",
  "party": "Conservative/Conservateur",
  "votes": 23805,
  "votePercentage": 59.6,
  "majority": 15115,
  "majorityPercentage": 37.8
},

{
  "index": 48006,
  "candidate": "Jag Anand",
  "party": "Liberal/Libéral",
  "votes": 8690,
  "votePercentage": 21.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Joe Pimlott",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4227,
  "votePercentage": 10.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "William Carnegie",
  "party": "Green Party/Parti Vert",
  "votes": 1318,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Dave Levesque",
  "party": "People's Party/Parti populaire",
  "votes": 1089,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Brent Nichols",
  "party": "Independent/Indépendant(e)",
  "votes": 388,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Esther Sutherland",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 222,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "Jonathan Trautman",
  "party": "Communist/Communiste",
  "votes": 134,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48006,
  "candidate": "William James Ryder",
  "party": "VCP/CAC",
  "votes": 91,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Bob Benzen **",
  "party": "Conservative/Conservateur",
  "votes": 40817,
  "votePercentage": 70.7,
  "majority": 32760,
  "majorityPercentage": 56.8
},

{
  "index": 48007,
  "candidate": "Scott Forsyth",
  "party": "Liberal/Libéral",
  "votes": 8057,
  "votePercentage": 14,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Holly Heffernan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5278,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Allie Tulick",
  "party": "Green Party/Parti Vert",
  "votes": 2027,
  "votePercentage": 3.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Stephanie Hoeppner",
  "party": "People's Party/Parti populaire",
  "votes": 1123,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Hunter Mills",
  "party": "Independent/Indépendant(e)",
  "votes": 228,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48007,
  "candidate": "Larry R. Heather",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 185,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48008,
  "candidate": "Stephanie Kusie **",
  "party": "Conservative/Conservateur",
  "votes": 50559,
  "votePercentage": 74.3,
  "majority": 43052,
  "majorityPercentage": 63.2
},

{
  "index": 48008,
  "candidate": "Brian Aalto",
  "party": "Liberal/Libéral",
  "votes": 7507,
  "votePercentage": 11,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48008,
  "candidate": "Gurmit Bhachu",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6445,
  "votePercentage": 9.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48008,
  "candidate": "Taylor Stasila",
  "party": "Green Party/Parti Vert",
  "votes": 1992,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48008,
  "candidate": "Edward Gao",
  "party": "People's Party/Parti populaire",
  "votes": 1585,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48009,
  "candidate": "Michelle Rempel **",
  "party": "Conservative/Conservateur",
  "votes": 38588,
  "votePercentage": 69.8,
  "majority": 29885,
  "majorityPercentage": 54.0
},

{
  "index": 48009,
  "candidate": "Josephine Tsang",
  "party": "Liberal/Libéral",
  "votes": 8703,
  "votePercentage": 15.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48009,
  "candidate": "Patrick King",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5304,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48009,
  "candidate": "Jocelyn Grossé",
  "party": "Green Party/Parti Vert",
  "votes": 1554,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48009,
  "candidate": "Kelly Lorencz",
  "party": "People's Party/Parti populaire",
  "votes": 1089,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48009,
  "candidate": "Peggy Askin",
  "party": "ML/ML",
  "votes": 71,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48010,
  "candidate": "Pat Kelly **",
  "party": "Conservative/Conservateur",
  "votes": 48253,
  "votePercentage": 68.3,
  "majority": 35241,
  "majorityPercentage": 49.9
},

{
  "index": 48010,
  "candidate": "Todd Kathol",
  "party": "Liberal/Libéral",
  "votes": 13012,
  "votePercentage": 18.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48010,
  "candidate": "Nathan LeBlanc Fortin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6051,
  "votePercentage": 8.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48010,
  "candidate": "Catriona Wright",
  "party": "Green Party/Parti Vert",
  "votes": 2011,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48010,
  "candidate": "Tyler Poulin",
  "party": "People's Party/Parti populaire",
  "votes": 1053,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48010,
  "candidate": "Shaoli Wang",
  "party": "Independent/Indépendant(e)",
  "votes": 270,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48011,
  "candidate": "Tom Kmiec **",
  "party": "Conservative/Conservateur",
  "votes": 58614,
  "votePercentage": 75,
  "majority": 49970,
  "majorityPercentage": 63.9
},

{
  "index": 48011,
  "candidate": "Del Arnold",
  "party": "Liberal/Libéral",
  "votes": 8644,
  "votePercentage": 11.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48011,
  "candidate": "David Brian Smith",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6828,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48011,
  "candidate": "Evelyn Tanaka",
  "party": "Green Party/Parti Vert",
  "votes": 2345,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48011,
  "candidate": "Kyle Scott",
  "party": "People's Party/Parti populaire",
  "votes": 1709,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Ron Liepert **",
  "party": "Conservative/Conservateur",
  "votes": 44421,
  "votePercentage": 70,
  "majority": 34699,
  "majorityPercentage": 54.7
},

{
  "index": 48012,
  "candidate": "Ghada Alatrash",
  "party": "Liberal/Libéral",
  "votes": 9722,
  "votePercentage": 15.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Khalis Ahmed",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5355,
  "votePercentage": 8.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Marco Reid",
  "party": "Green Party/Parti Vert",
  "votes": 2139,
  "votePercentage": 3.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Gord Squire",
  "party": "People's Party/Parti populaire",
  "votes": 1130,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Christina Bassett",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 511,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48012,
  "candidate": "Garry Dirk",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 200,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Jag Sahota",
  "party": "Conservative/Conservateur",
  "votes": 26533,
  "votePercentage": 52.5,
  "majority": 12206,
  "majorityPercentage": 24.1
},

{
  "index": 48013,
  "candidate": "Nirmala Naidoo",
  "party": "Liberal/Libéral",
  "votes": 14327,
  "votePercentage": 28.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Gurinder Singh Gill",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7540,
  "votePercentage": 14.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Signe Knutson",
  "party": "Green Party/Parti Vert",
  "votes": 800,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Harry Dhillon",
  "party": "People's Party/Parti populaire",
  "votes": 603,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Joseph Alexander",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 483,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Harpreet Singh Dawar",
  "party": "CFF - Canada's Fourth Front/QFC - Quatrième front du Canada",
  "votes": 136,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48013,
  "candidate": "Daniel Blanchard",
  "party": "ML/ML",
  "votes": 130,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "James Cumming",
  "party": "Conservative/Conservateur",
  "votes": 22006,
  "votePercentage": 41.4,
  "majority": 4482,
  "majorityPercentage": 8.4
},

{
  "index": 48014,
  "candidate": "Randy Boissonnault **",
  "party": "Liberal/Libéral",
  "votes": 17524,
  "votePercentage": 33,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Katherine Swampy",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10959,
  "votePercentage": 20.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Grad Murray",
  "party": "Green Party/Parti Vert",
  "votes": 1394,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Paul Hookham",
  "party": "People's Party/Parti populaire",
  "votes": 805,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Donovan Eckstrom",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 206,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Adil Pirbhai",
  "party": "Independent/Indépendant(e)",
  "votes": 119,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48014,
  "candidate": "Peggy Morton",
  "party": "ML/ML",
  "votes": 79,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Kerry Diotte **",
  "party": "Conservative/Conservateur",
  "votes": 24120,
  "votePercentage": 51.4,
  "majority": 12320,
  "majorityPercentage": 26.2
},

{
  "index": 48015,
  "candidate": "Mark Cherrington",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11800,
  "votePercentage": 25.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Habiba Mohamud",
  "party": "Liberal/Libéral",
  "votes": 8100,
  "votePercentage": 17.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Safi Khan",
  "party": "Green Party/Parti Vert",
  "votes": 1189,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Barbara Ellen Nichols",
  "party": "People's Party/Parti populaire",
  "votes": 1074,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Andrzej Gudanowski",
  "party": "Independent/Indépendant(e)",
  "votes": 216,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Christine Alva Armas",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 203,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Alex Boykowich",
  "party": "Communist/Communiste",
  "votes": 170,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48015,
  "candidate": "Mary Joyce",
  "party": "ML/ML",
  "votes": 91,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Ziad Aboultaif **",
  "party": "Conservative/Conservateur",
  "votes": 30425,
  "votePercentage": 55.9,
  "majority": 18733,
  "majorityPercentage": 34.4
},

{
  "index": 48016,
  "candidate": "Kamal Kadri",
  "party": "Liberal/Libéral",
  "votes": 11692,
  "votePercentage": 21.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Charmaine St. Germain",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9555,
  "votePercentage": 17.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Laura-Leah Shaw",
  "party": "Green Party/Parti Vert",
  "votes": 1255,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Daniel Summers",
  "party": "People's Party/Parti populaire",
  "votes": 1109,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Pam Phiri",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 276,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48016,
  "candidate": "Andre Vachon",
  "party": "ML/ML",
  "votes": 68,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48017,
  "candidate": "Tim Uppal",
  "party": "Conservative/Conservateur",
  "votes": 26736,
  "votePercentage": 50.3,
  "majority": 8857,
  "majorityPercentage": 16.7
},

{
  "index": 48017,
  "candidate": "Amarjeet Sohi **",
  "party": "Liberal/Libéral",
  "votes": 17879,
  "votePercentage": 33.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48017,
  "candidate": "Nigel Logan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6422,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48017,
  "candidate": "Tanya Herbert",
  "party": "Green Party/Parti Vert",
  "votes": 968,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48017,
  "candidate": "Annie Young",
  "party": "People's Party/Parti populaire",
  "votes": 953,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48017,
  "candidate": "Don Melanson",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 219,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48018,
  "candidate": "Matt Jeneroux **",
  "party": "Conservative/Conservateur",
  "votes": 35126,
  "votePercentage": 57.4,
  "majority": 21088,
  "majorityPercentage": 34.5
},

{
  "index": 48018,
  "candidate": "Tariq Chaudary",
  "party": "Liberal/Libéral",
  "votes": 14038,
  "votePercentage": 23,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48018,
  "candidate": "Audrey Redman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9332,
  "votePercentage": 15.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48018,
  "candidate": "Valerie Kennedy",
  "party": "Green Party/Parti Vert",
  "votes": 1797,
  "votePercentage": 2.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48018,
  "candidate": "Kevin Morris",
  "party": "People's Party/Parti populaire",
  "votes": 855,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Heather McPherson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 26823,
  "votePercentage": 47.3,
  "majority": 5788,
  "majorityPercentage": 10.2
},

{
  "index": 48019,
  "candidate": "Sam Lilly",
  "party": "Conservative/Conservateur",
  "votes": 21035,
  "votePercentage": 37.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Eleanor Olszewski",
  "party": "Liberal/Libéral",
  "votes": 6592,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Michael Kalmanovitch",
  "party": "Green Party/Parti Vert",
  "votes": 1152,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Ian Cameron",
  "party": "People's Party/Parti populaire",
  "votes": 941,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Naomi Rankin",
  "party": "Communist/Communiste",
  "votes": 125,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48019,
  "candidate": "Dougal MacDonald",
  "party": "ML/ML",
  "votes": 77,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48020,
  "candidate": "Kelly McCauley **",
  "party": "Conservative/Conservateur",
  "votes": 35719,
  "votePercentage": 60.9,
  "majority": 23907,
  "majorityPercentage": 40.8
},

{
  "index": 48020,
  "candidate": "Kerrie Johnston",
  "party": "Liberal/Libéral",
  "votes": 11812,
  "votePercentage": 20.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48020,
  "candidate": "Patrick Steuber",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8537,
  "votePercentage": 14.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48020,
  "candidate": "Jackie Pearce",
  "party": "Green Party/Parti Vert",
  "votes": 1441,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48020,
  "candidate": "Matthew Armstrong",
  "party": "People's Party/Parti populaire",
  "votes": 1126,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48021,
  "candidate": "Mike Lake **",
  "party": "Conservative/Conservateur",
  "votes": 63346,
  "votePercentage": 72.4,
  "majority": 52544,
  "majorityPercentage": 60.1
},

{
  "index": 48021,
  "candidate": "Richard Wong",
  "party": "Liberal/Libéral",
  "votes": 10802,
  "votePercentage": 12.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48021,
  "candidate": "Noah Garver",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9820,
  "votePercentage": 11.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48021,
  "candidate": "Emily Drzymala",
  "party": "Green Party/Parti Vert",
  "votes": 1660,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48021,
  "candidate": "Neil Doell",
  "party": "People's Party/Parti populaire",
  "votes": 1616,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48021,
  "candidate": "Travis Calliou",
  "party": "VCP/CAC",
  "votes": 211,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48022,
  "candidate": "John Barlow **",
  "party": "Conservative/Conservateur",
  "votes": 53872,
  "votePercentage": 82.1,
  "majority": 50016,
  "majorityPercentage": 76.3
},

{
  "index": 48022,
  "candidate": "Cheryl Moller",
  "party": "Liberal/Libéral",
  "votes": 3856,
  "votePercentage": 5.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48022,
  "candidate": "Mickail Hendi",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3767,
  "votePercentage": 5.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48022,
  "candidate": "Bridget Lacey",
  "party": "Green Party/Parti Vert",
  "votes": 2398,
  "votePercentage": 3.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48022,
  "candidate": "Greg Hession",
  "party": "People's Party/Parti populaire",
  "votes": 1698,
  "votePercentage": 2.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48023,
  "candidate": "David Yurdiga **",
  "party": "Conservative/Conservateur",
  "votes": 40706,
  "votePercentage": 79.9,
  "majority": 35858,
  "majorityPercentage": 70.3
},

{
  "index": 48023,
  "candidate": "Maggie Farrington",
  "party": "Liberal/Libéral",
  "votes": 4848,
  "votePercentage": 9.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48023,
  "candidate": "Matthew Gilks",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 2883,
  "votePercentage": 5.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48023,
  "candidate": "Matthew Barrett",
  "party": "People's Party/Parti populaire",
  "votes": 1674,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48023,
  "candidate": "Brian Deheer",
  "party": "Green Party/Parti Vert",
  "votes": 865,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48024,
  "candidate": "Chris Warkentin **",
  "party": "Conservative/Conservateur",
  "votes": 51198,
  "votePercentage": 84,
  "majority": 46953,
  "majorityPercentage": 77.0
},

{
  "index": 48024,
  "candidate": "Erin Alyward",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4245,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48024,
  "candidate": "Kenneth Munro",
  "party": "Liberal/Libéral",
  "votes": 2910,
  "votePercentage": 4.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48024,
  "candidate": "Douglas Gordon Burchill",
  "party": "People's Party/Parti populaire",
  "votes": 1492,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48024,
  "candidate": "Shelley Termuende",
  "party": "Green Party/Parti Vert",
  "votes": 1134,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Shannon Stubbs **",
  "party": "Conservative/Conservateur",
  "votes": 48314,
  "votePercentage": 83.9,
  "majority": 44586,
  "majorityPercentage": 77.4
},

{
  "index": 48025,
  "candidate": "Jeffrey Swanson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3728,
  "votePercentage": 6.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Mark Watson",
  "party": "Liberal/Libéral",
  "votes": 2565,
  "votePercentage": 4.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Alain Houle",
  "party": "People's Party/Parti populaire",
  "votes": 1468,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Kira Brunner",
  "party": "Green Party/Parti Vert",
  "votes": 1105,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Robert McFadzean",
  "party": "Libertarian/Libertarien",
  "votes": 251,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48025,
  "candidate": "Roberta Marie Graham",
  "party": "VCP/CAC",
  "votes": 147,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48026,
  "candidate": "Rachael Harder **",
  "party": "Conservative/Conservateur",
  "votes": 40713,
  "votePercentage": 65.8,
  "majority": 31603,
  "majorityPercentage": 51.1
},

{
  "index": 48026,
  "candidate": "Shandi Bleiken",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9110,
  "votePercentage": 14.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48026,
  "candidate": "Amy Bronson",
  "party": "Liberal/Libéral",
  "votes": 8443,
  "votePercentage": 13.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48026,
  "candidate": "Stephnie Watson",
  "party": "Green Party/Parti Vert",
  "votes": 1939,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48026,
  "candidate": "Grant Hepworth",
  "party": "People's Party/Parti populaire",
  "votes": 1007,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48026,
  "candidate": "Marc Slingerland",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 670,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48027,
  "candidate": "Glen Motz **",
  "party": "Conservative/Conservateur",
  "votes": 42045,
  "votePercentage": 79.2,
  "majority": 37406,
  "majorityPercentage": 70.4
},

{
  "index": 48027,
  "candidate": "Elizabeth Thomson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4639,
  "votePercentage": 8.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48027,
  "candidate": "Harris Kirshenbaum",
  "party": "Liberal/Libéral",
  "votes": 3528,
  "votePercentage": 6.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48027,
  "candidate": "Andrew Nelson",
  "party": "People's Party/Parti populaire",
  "votes": 1350,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48027,
  "candidate": "Shannon Hawthorne",
  "party": "Green Party/Parti Vert",
  "votes": 1203,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48027,
  "candidate": "Dave Phillips",
  "party": "Independent/Indépendant(e)",
  "votes": 337,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48028,
  "candidate": "Arnold Viersen **",
  "party": "Conservative/Conservateur",
  "votes": 41659,
  "votePercentage": 80.7,
  "majority": 37773,
  "majorityPercentage": 73.1
},

{
  "index": 48028,
  "candidate": "Jennifer Villebrun",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3886,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48028,
  "candidate": "Leslie Penny",
  "party": "Liberal/Libéral",
  "votes": 3148,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48028,
  "candidate": "John Schrader",
  "party": "People's Party/Parti populaire",
  "votes": 1579,
  "votePercentage": 3.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48028,
  "candidate": "Peter Nygaard",
  "party": "Green Party/Parti Vert",
  "votes": 1377,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48030,
  "candidate": "Blaine Calkins **",
  "party": "Conservative/Conservateur",
  "votes": 53843,
  "votePercentage": 79.8,
  "majority": 47831,
  "majorityPercentage": 70.9
},

{
  "index": 48030,
  "candidate": "Lauren Pezzella",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6012,
  "votePercentage": 8.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48030,
  "candidate": "Tiffany Rose",
  "party": "Liberal/Libéral",
  "votes": 3540,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48030,
  "candidate": "Laura Lynn Thompson",
  "party": "People's Party/Parti populaire",
  "votes": 2453,
  "votePercentage": 3.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48030,
  "candidate": "Sarah Palmer",
  "party": "Green Party/Parti Vert",
  "votes": 1596,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48029,
  "candidate": "Earl Dreeshen **",
  "party": "Conservative/Conservateur",
  "votes": 54765,
  "votePercentage": 80.3,
  "majority": 49819,
  "majorityPercentage": 73.1
},

{
  "index": 48029,
  "candidate": "Logan Garbanewski",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4946,
  "votePercentage": 7.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48029,
  "candidate": "Gary Tremblay",
  "party": "Liberal/Libéral",
  "votes": 3795,
  "votePercentage": 5.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48029,
  "candidate": "Paul Mitchell",
  "party": "People's Party/Parti populaire",
  "votes": 2637,
  "votePercentage": 3.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48029,
  "candidate": "Conner Borlé",
  "party": "Green Party/Parti Vert",
  "votes": 2026,
  "votePercentage": 3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48031,
  "candidate": "Michael Cooper **",
  "party": "Conservative/Conservateur",
  "votes": 39506,
  "votePercentage": 60.7,
  "majority": 27029,
  "majorityPercentage": 41.5
},

{
  "index": 48031,
  "candidate": "Greg Springate",
  "party": "Liberal/Libéral",
  "votes": 12477,
  "votePercentage": 19.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48031,
  "candidate": "Kathleen Mpulubusi",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9895,
  "votePercentage": 15.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48031,
  "candidate": "Rob Dunbar",
  "party": "Green Party/Parti Vert",
  "votes": 1594,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48031,
  "candidate": "Brigitte Cecelia",
  "party": "People's Party/Parti populaire",
  "votes": 1268,
  "votePercentage": 1.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48031,
  "candidate": "Robert Bruce Fraser",
  "party": "VCP/CAC",
  "votes": 351,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48032,
  "candidate": "Garnett Genuis **",
  "party": "Conservative/Conservateur",
  "votes": 53600,
  "votePercentage": 73.4,
  "majority": 44733,
  "majorityPercentage": 61.2
},

{
  "index": 48032,
  "candidate": "Aidan Theroux",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8867,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48032,
  "candidate": "Ron Thiering",
  "party": "Liberal/Libéral",
  "votes": 7357,
  "votePercentage": 10.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48032,
  "candidate": "Laura Sanderson",
  "party": "Green Party/Parti Vert",
  "votes": 1592,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48032,
  "candidate": "Darren Villetard",
  "party": "People's Party/Parti populaire",
  "votes": 1334,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48032,
  "candidate": "Patrick McElrea",
  "party": "VCP/CAC",
  "votes": 300,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48033,
  "candidate": "Dane Lloyd **",
  "party": "Conservative/Conservateur",
  "votes": 53235,
  "votePercentage": 77.5,
  "majority": 46295,
  "majorityPercentage": 67.4
},

{
  "index": 48033,
  "candidate": "Guy Desforges",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6940,
  "votePercentage": 10.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48033,
  "candidate": "Ronald Brochu",
  "party": "Liberal/Libéral",
  "votes": 4696,
  "votePercentage": 6.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48033,
  "candidate": "Cass Romyn",
  "party": "Green Party/Parti Vert",
  "votes": 1745,
  "votePercentage": 2.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48033,
  "candidate": "Tyler Beauchamp",
  "party": "People's Party/Parti populaire",
  "votes": 1625,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48033,
  "candidate": "Ernest Chauvet",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 416,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Gerald Soroka",
  "party": "Conservative/Conservateur",
  "votes": 45964,
  "votePercentage": 82.1,
  "majority": 42066,
  "majorityPercentage": 75.2
},

{
  "index": 48034,
  "candidate": "Kristine Bowman",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3898,
  "votePercentage": 7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Jeremy Hoefsloot",
  "party": "Liberal/Libéral",
  "votes": 2912,
  "votePercentage": 5.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Douglas Galavan",
  "party": "People's Party/Parti populaire",
  "votes": 1592,
  "votePercentage": 2.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Angelena Satdeo",
  "party": "Green Party/Parti Vert",
  "votes": 1272,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Cory Lystang",
  "party": "Libertarian/Libertarien",
  "votes": 222,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 48034,
  "candidate": "Gordon Francey",
  "party": "VCP/CAC",
  "votes": 108,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59001,
  "candidate": "Ed Fast **",
  "party": "Conservative/Conservateur",
  "votes": 25162,
  "votePercentage": 51.4,
  "majority": 14602,
  "majorityPercentage": 29.8
},

{
  "index": 59001,
  "candidate": "Seamus Heffernan",
  "party": "Liberal/Libéral",
  "votes": 10560,
  "votePercentage": 21.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59001,
  "candidate": "Madeleine Sauve",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8257,
  "votePercentage": 16.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59001,
  "candidate": "Stephen Fowler",
  "party": "Green Party/Parti Vert",
  "votes": 3702,
  "votePercentage": 7.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59001,
  "candidate": "Locke Duncan",
  "party": "People's Party/Parti populaire",
  "votes": 985,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59001,
  "candidate": "Aeriol Alderking",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 270,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Terry Beech **",
  "party": "Liberal/Libéral",
  "votes": 17770,
  "votePercentage": 35.5,
  "majority": 1585,
  "majorityPercentage": 3.2
},

{
  "index": 59002,
  "candidate": "Svend Robinson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16185,
  "votePercentage": 32.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Heather Leung",
  "party": "Conservative/Conservateur",
  "votes": 9734,
  "votePercentage": 19.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Amita Kuttner",
  "party": "Green Party/Parti Vert",
  "votes": 4801,
  "votePercentage": 9.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Rocky Dong",
  "party": "People's Party/Parti populaire",
  "votes": 1079,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Robert Taylor",
  "party": "Independent/Indépendant(e)",
  "votes": 271,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59002,
  "candidate": "Lewis Clarke Dahlby",
  "party": "Libertarian/Libertarien",
  "votes": 219,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Jagmeet Singh **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16956,
  "votePercentage": 37.7,
  "majority": 3042,
  "majorityPercentage": 6.8
},

{
  "index": 59003,
  "candidate": "Jay Shin",
  "party": "Conservative/Conservateur",
  "votes": 13914,
  "votePercentage": 30.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Neelam Brar",
  "party": "Liberal/Libéral",
  "votes": 10706,
  "votePercentage": 23.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Brennan Wauters",
  "party": "Green Party/Parti Vert",
  "votes": 2477,
  "votePercentage": 5.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Al Rawdah",
  "party": "People's Party/Parti populaire",
  "votes": 645,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Rex Brocki",
  "party": "Libertarian/Libertarien",
  "votes": 246,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59003,
  "candidate": "Brian Sproule",
  "party": "ML/ML",
  "votes": 62,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59004,
  "candidate": "Todd Doherty **",
  "party": "Conservative/Conservateur",
  "votes": 28848,
  "votePercentage": 52.7,
  "majority": 17916,
  "majorityPercentage": 32.7
},

{
  "index": 59004,
  "candidate": "Tracy Calogheros",
  "party": "Liberal/Libéral",
  "votes": 10932,
  "votePercentage": 20,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59004,
  "candidate": "Heather Sapergia",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8440,
  "votePercentage": 15.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59004,
  "candidate": "Mackenzie Kerr",
  "party": "Green Party/Parti Vert",
  "votes": 4998,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59004,
  "candidate": "Jing Lan Yang",
  "party": "People's Party/Parti populaire",
  "votes": 1206,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59004,
  "candidate": "Michael Orr",
  "party": "Independent/Indépendant(e)",
  "votes": 350,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59005,
  "candidate": "Dan Albas **",
  "party": "Conservative/Conservateur",
  "votes": 31135,
  "votePercentage": 47.9,
  "majority": 14883,
  "majorityPercentage": 22.9
},

{
  "index": 59005,
  "candidate": "Mary Ann Murphy",
  "party": "Liberal/Libéral",
  "votes": 16252,
  "votePercentage": 25,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59005,
  "candidate": "Joan Phillip",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10904,
  "votePercentage": 16.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59005,
  "candidate": "Robert Mellalieu",
  "party": "Green Party/Parti Vert",
  "votes": 5086,
  "votePercentage": 7.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59005,
  "candidate": "Allan Duncan",
  "party": "People's Party/Parti populaire",
  "votes": 1345,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59005,
  "candidate": "Jesse Regier",
  "party": "Libertarian/Libertarien",
  "votes": 213,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Mark Strahl **",
  "party": "Conservative/Conservateur",
  "votes": 26672,
  "votePercentage": 49.6,
  "majority": 15824,
  "majorityPercentage": 29.4
},

{
  "index": 59006,
  "candidate": "Kelly Velonis",
  "party": "Liberal/Libéral",
  "votes": 10848,
  "votePercentage": 20.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Heather McQuillan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8957,
  "votePercentage": 16.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Arthur Green",
  "party": "Green Party/Parti Vert",
  "votes": 5243,
  "votePercentage": 9.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Rob Bogunovic",
  "party": "People's Party/Parti populaire",
  "votes": 1760,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Daniel Lamache",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 202,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59006,
  "candidate": "Dorothy-Jean O'Donnell",
  "party": "ML/ML",
  "votes": 73,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59007,
  "candidate": "Tamara Jansen",
  "party": "Conservative/Conservateur",
  "votes": 20936,
  "votePercentage": 37.7,
  "majority": 1394,
  "majorityPercentage": 2.5
},

{
  "index": 59007,
  "candidate": "John Aldag **",
  "party": "Liberal/Libéral",
  "votes": 19542,
  "votePercentage": 35.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59007,
  "candidate": "Rae Banwarie",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10508,
  "votePercentage": 18.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59007,
  "candidate": "Caelum Nutbrown",
  "party": "Green Party/Parti Vert",
  "votes": 3572,
  "votePercentage": 6.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59007,
  "candidate": "Ian Kennedy",
  "party": "People's Party/Parti populaire",
  "votes": 930,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59008,
  "candidate": "Ron McKinnon **",
  "party": "Liberal/Libéral",
  "votes": 20178,
  "votePercentage": 34.7,
  "majority": 390,
  "majorityPercentage": 0.7
},

{
  "index": 59008,
  "candidate": "Nicholas Insley",
  "party": "Conservative/Conservateur",
  "votes": 19788,
  "votePercentage": 34,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59008,
  "candidate": "Christina Gower",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13383,
  "votePercentage": 23,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59008,
  "candidate": "Brad Nickason",
  "party": "Green Party/Parti Vert",
  "votes": 4025,
  "votePercentage": 6.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59008,
  "candidate": "Roland Spornicu",
  "party": "People's Party/Parti populaire",
  "votes": 703,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59008,
  "candidate": "Dan Iova",
  "party": "VCP/CAC",
  "votes": 98,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59009,
  "candidate": "Gord Johns **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 29790,
  "votePercentage": 41.2,
  "majority": 5854,
  "majorityPercentage": 8.1
},

{
  "index": 59009,
  "candidate": "Byron Horner",
  "party": "Conservative/Conservateur",
  "votes": 23936,
  "votePercentage": 33.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59009,
  "candidate": "Sean Wood",
  "party": "Green Party/Parti Vert",
  "votes": 9762,
  "votePercentage": 13.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59009,
  "candidate": "Jonah Baden Gowans",
  "party": "Liberal/Libéral",
  "votes": 8620,
  "votePercentage": 11.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59009,
  "candidate": "Barbara Biley",
  "party": "ML/ML",
  "votes": 172,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59010,
  "candidate": "Alistair MacGregor **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23519,
  "votePercentage": 36.1,
  "majority": 6560,
  "majorityPercentage": 10.1
},

{
  "index": 59010,
  "candidate": "Alana DeLong",
  "party": "Conservative/Conservateur",
  "votes": 16959,
  "votePercentage": 26,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59010,
  "candidate": "Lydia Hwitsum",
  "party": "Green Party/Parti Vert",
  "votes": 13181,
  "votePercentage": 20.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59010,
  "candidate": "Blair Herbert",
  "party": "Liberal/Libéral",
  "votes": 10301,
  "votePercentage": 15.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59010,
  "candidate": "Rhonda Chen",
  "party": "People's Party/Parti populaire",
  "votes": 1066,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59010,
  "candidate": "Robin Morton Stanbridge",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 202,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Carla Qualtrough **",
  "party": "Liberal/Libéral",
  "votes": 22257,
  "votePercentage": 41.2,
  "majority": 4448,
  "majorityPercentage": 8.2
},

{
  "index": 59011,
  "candidate": "Tanya Corbet",
  "party": "Conservative/Conservateur",
  "votes": 17809,
  "votePercentage": 33,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Randy Anderson-Fennell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8792,
  "votePercentage": 16.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Craig DeCraene",
  "party": "Green Party/Parti Vert",
  "votes": 3387,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Angelina Ireland",
  "party": "People's Party/Parti populaire",
  "votes": 948,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Amarit Bains",
  "party": "Independent/Indépendant(e)",
  "votes": 398,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59011,
  "candidate": "Tony Bennett",
  "party": "Independent/Indépendant(e)",
  "votes": 385,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Randall Garrison **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23887,
  "votePercentage": 34.1,
  "majority": 5381,
  "majorityPercentage": 7.7
},

{
  "index": 59026,
  "candidate": "David Merner",
  "party": "Green Party/Parti Vert",
  "votes": 18506,
  "votePercentage": 26.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Randall Pewarchuk",
  "party": "Conservative/Conservateur",
  "votes": 13409,
  "votePercentage": 19.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Jamie Hammond",
  "party": "Liberal/Libéral",
  "votes": 12554,
  "votePercentage": 17.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Jeremy Gustafson",
  "party": "People's Party/Parti populaire",
  "votes": 1089,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Josh Steffler",
  "party": "Libertarian/Libertarien",
  "votes": 287,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Tyson Strandlund",
  "party": "Communist/Communiste",
  "votes": 111,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Louis Lesosky",
  "party": "Independent/Indépendant(e)",
  "votes": 100,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Fidelia Godron",
  "party": "Independent/Indépendant(e)",
  "votes": 99,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59026,
  "candidate": "Philip Ney",
  "party": "Independent/Indépendant(e)",
  "votes": 83,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59012,
  "candidate": "Ken Hardie **",
  "party": "Liberal/Libéral",
  "votes": 18401,
  "votePercentage": 37.6,
  "majority": 1883,
  "majorityPercentage": 3.9
},

{
  "index": 59012,
  "candidate": "Shinder Purewal",
  "party": "Conservative/Conservateur",
  "votes": 16518,
  "votePercentage": 33.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59012,
  "candidate": "Annie Ohana",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10533,
  "votePercentage": 21.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59012,
  "candidate": "Tanya Baertl",
  "party": "Green Party/Parti Vert",
  "votes": 2360,
  "votePercentage": 4.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59012,
  "candidate": "Mike Poulin",
  "party": "People's Party/Parti populaire",
  "votes": 1093,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Cathy McLeod **",
  "party": "Conservative/Conservateur",
  "votes": 32415,
  "votePercentage": 44.7,
  "majority": 12699,
  "majorityPercentage": 17.5
},

{
  "index": 59013,
  "candidate": "Terry Lake",
  "party": "Liberal/Libéral",
  "votes": 19716,
  "votePercentage": 27.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Cynthia Egli",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9936,
  "votePercentage": 13.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Iain Currie",
  "party": "Green Party/Parti Vert",
  "votes": 8789,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Ken Finlayson",
  "party": "People's Party/Parti populaire",
  "votes": 1132,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Kira Cheeseborough",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 321,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59013,
  "candidate": "Peter Kerek",
  "party": "Communist/Communiste",
  "votes": 144,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "Tracy Gray",
  "party": "Conservative/Conservateur",
  "votes": 31497,
  "votePercentage": 45.6,
  "majority": 8870,
  "majorityPercentage": 12.8
},

{
  "index": 59014,
  "candidate": "Stephen Fuhr **",
  "party": "Liberal/Libéral",
  "votes": 22627,
  "votePercentage": 32.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "Justin Kulik",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8381,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "Travis Ashley",
  "party": "Green Party/Parti Vert",
  "votes": 5171,
  "votePercentage": 7.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "John Barr",
  "party": "People's Party/Parti populaire",
  "votes": 1225,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "Daniel Joseph",
  "party": "Independent/Indépendant(e)",
  "votes": 152,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59014,
  "candidate": "Silverado Socrates",
  "party": "Independent/Indépendant(e)",
  "votes": 67,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59015,
  "candidate": "Rob Morrison",
  "party": "Conservative/Conservateur",
  "votes": 30168,
  "votePercentage": 44.8,
  "majority": 7019,
  "majorityPercentage": 10.4
},

{
  "index": 59015,
  "candidate": "Wayne Stetski **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23149,
  "votePercentage": 34.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59015,
  "candidate": "Robin Goldsbury",
  "party": "Liberal/Libéral",
  "votes": 6151,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59015,
  "candidate": "Abra Brynne",
  "party": "Green Party/Parti Vert",
  "votes": 6145,
  "votePercentage": 9.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59015,
  "candidate": "Rick Stewart",
  "party": "People's Party/Parti populaire",
  "votes": 1378,
  "votePercentage": 2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59015,
  "candidate": "Trev Miller",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 339,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59016,
  "candidate": "Tako Van Popta",
  "party": "Conservative/Conservateur",
  "votes": 29823,
  "votePercentage": 47,
  "majority": 13569,
  "majorityPercentage": 21.4
},

{
  "index": 59016,
  "candidate": "Leon Jensen",
  "party": "Liberal/Libéral",
  "votes": 16254,
  "votePercentage": 25.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59016,
  "candidate": "Stacey Wakelin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10690,
  "votePercentage": 16.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59016,
  "candidate": "Kaija Farstad",
  "party": "Green Party/Parti Vert",
  "votes": 4881,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59016,
  "candidate": "Natalie Dipietra-Cudmore",
  "party": "People's Party/Parti populaire",
  "votes": 1305,
  "votePercentage": 2.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59016,
  "candidate": "Alex Joehl",
  "party": "Libertarian/Libertarien",
  "votes": 499,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59017,
  "candidate": "Brad Vis",
  "party": "Conservative/Conservateur",
  "votes": 19535,
  "votePercentage": 42.4,
  "majority": 7236,
  "majorityPercentage": 15.7
},

{
  "index": 59017,
  "candidate": "Jati Sidhu **",
  "party": "Liberal/Libéral",
  "votes": 12299,
  "votePercentage": 26.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59017,
  "candidate": "Michael Nenn",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8089,
  "votePercentage": 17.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59017,
  "candidate": "John Kidder",
  "party": "Green Party/Parti Vert",
  "votes": 5019,
  "votePercentage": 10.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59017,
  "candidate": "Julius Nick Csaszar",
  "party": "People's Party/Parti populaire",
  "votes": 1055,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59017,
  "candidate": "Elaine Wismer",
  "party": "ML/ML",
  "votes": 69,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Paul Manly **",
  "party": "Green Party/Parti Vert",
  "votes": 24844,
  "votePercentage": 34.6,
  "majority": 6210,
  "majorityPercentage": 8.6
},

{
  "index": 59018,
  "candidate": "John Hirst",
  "party": "Conservative/Conservateur",
  "votes": 18634,
  "votePercentage": 25.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Bob Chamberlin",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16985,
  "votePercentage": 23.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Michelle Corfield",
  "party": "Liberal/Libéral",
  "votes": 9735,
  "votePercentage": 13.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Jennifer Clarke",
  "party": "People's Party/Parti populaire",
  "votes": 1049,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Geoff Stoneman",
  "party": "Independent/Indépendant(e)",
  "votes": 235,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Brian Marlatt",
  "party": "PC Party/Parti PC",
  "votes": 207,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "James Chumsa",
  "party": "Communist/Communiste",
  "votes": 104,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59018,
  "candidate": "Echo White",
  "party": "Independent/Indépendant(e)",
  "votes": 71,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Peter Julian **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23437,
  "votePercentage": 44.2,
  "majority": 11023,
  "majorityPercentage": 20.8
},

{
  "index": 59019,
  "candidate": "Will Davis",
  "party": "Liberal/Libéral",
  "votes": 12414,
  "votePercentage": 23.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Megan Veck",
  "party": "Conservative/Conservateur",
  "votes": 11439,
  "votePercentage": 21.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Suzanne de Montigny",
  "party": "Green Party/Parti Vert",
  "votes": 4378,
  "votePercentage": 8.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Hansen Ginn",
  "party": "People's Party/Parti populaire",
  "votes": 862,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Neeraj Murarka",
  "party": "Libertarian/Libertarien",
  "votes": 307,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Ahmad Passyar",
  "party": "Independent/Indépendant(e)",
  "votes": 83,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59019,
  "candidate": "Joseph Theriault",
  "party": "ML/ML",
  "votes": 57,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Rachel Blaney **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23834,
  "votePercentage": 37.9,
  "majority": 3332,
  "majorityPercentage": 5.3
},

{
  "index": 59037,
  "candidate": "Shelley Downey",
  "party": "Conservative/Conservateur",
  "votes": 20502,
  "votePercentage": 32.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Mark de Bruijn",
  "party": "Green Party/Parti Vert",
  "votes": 8891,
  "votePercentage": 14.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Peter Schwarzhoff",
  "party": "Liberal/Libéral",
  "votes": 8251,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Brian Rundle",
  "party": "People's Party/Parti populaire",
  "votes": 1102,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Glen Staples",
  "party": "Independent/Indépendant(e)",
  "votes": 287,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59037,
  "candidate": "Carla Neal",
  "party": "ML/ML",
  "votes": 48,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59020,
  "candidate": "Mel Arnold **",
  "party": "Conservative/Conservateur",
  "votes": 36154,
  "votePercentage": 48.8,
  "majority": 19371,
  "majorityPercentage": 26.1
},

{
  "index": 59020,
  "candidate": "Cindy Derkaz",
  "party": "Liberal/Libéral",
  "votes": 16783,
  "votePercentage": 22.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59020,
  "candidate": "Harwinder Sandhu",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11353,
  "votePercentage": 15.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59020,
  "candidate": "Marc Reinarz",
  "party": "Green Party/Parti Vert",
  "votes": 7828,
  "votePercentage": 10.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59020,
  "candidate": "Kyle Delfing",
  "party": "People's Party/Parti populaire",
  "votes": 2027,
  "votePercentage": 2.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59021,
  "candidate": "Jonathan Wilkinson **",
  "party": "Liberal/Libéral",
  "votes": 26979,
  "votePercentage": 42.9,
  "majority": 10071,
  "majorityPercentage": 16.0
},

{
  "index": 59021,
  "candidate": "Andrew Saxton",
  "party": "Conservative/Conservateur",
  "votes": 16908,
  "votePercentage": 26.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59021,
  "candidate": "Justine Bell",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 10340,
  "votePercentage": 16.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59021,
  "candidate": "George Orr",
  "party": "Green Party/Parti Vert",
  "votes": 7868,
  "votePercentage": 12.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59021,
  "candidate": "Azmairnin Jadavji",
  "party": "People's Party/Parti populaire",
  "votes": 835,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59022,
  "candidate": "Marc Dalton",
  "party": "Conservative/Conservateur",
  "votes": 19650,
  "votePercentage": 36.2,
  "majority": 3525,
  "majorityPercentage": 6.5
},

{
  "index": 59022,
  "candidate": "Dan Ruimy **",
  "party": "Liberal/Libéral",
  "votes": 16125,
  "votePercentage": 29.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59022,
  "candidate": "John Mogk",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12958,
  "votePercentage": 23.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59022,
  "candidate": "Ariane Jaschke",
  "party": "Green Party/Parti Vert",
  "votes": 4332,
  "votePercentage": 8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59022,
  "candidate": "Bryton Cherrier",
  "party": "People's Party/Parti populaire",
  "votes": 698,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59022,
  "candidate": "Steve Ranta",
  "party": "Independent/Indépendant(e)",
  "votes": 468,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59023,
  "candidate": "Nelly Shin",
  "party": "Conservative/Conservateur",
  "votes": 16855,
  "votePercentage": 31.2,
  "majority": 153,
  "majorityPercentage": 0.3
},

{
  "index": 59023,
  "candidate": "Bonita Zarrillo",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16702,
  "votePercentage": 30.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59023,
  "candidate": "Sara Badiei",
  "party": "Liberal/Libéral",
  "votes": 15695,
  "votePercentage": 29.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59023,
  "candidate": "Bryce Watts",
  "party": "Green Party/Parti Vert",
  "votes": 3873,
  "votePercentage": 7.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59023,
  "candidate": "Jayson Chabot",
  "party": "People's Party/Parti populaire",
  "votes": 821,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59023,
  "candidate": "Roland Verrier",
  "party": "ML/ML",
  "votes": 57,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59024,
  "candidate": "Bob Zimmer **",
  "party": "Conservative/Conservateur",
  "votes": 38473,
  "votePercentage": 69.8,
  "majority": 32082,
  "majorityPercentage": 58.2
},

{
  "index": 59024,
  "candidate": "Mavis Erickson",
  "party": "Liberal/Libéral",
  "votes": 6391,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59024,
  "candidate": "Marcia Luccock",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5069,
  "votePercentage": 9.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59024,
  "candidate": "Catharine Kendall",
  "party": "Green Party/Parti Vert",
  "votes": 3448,
  "votePercentage": 6.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59024,
  "candidate": "Ron Vaillant",
  "party": "People's Party/Parti populaire",
  "votes": 1748,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59025,
  "candidate": "Alice Wong **",
  "party": "Conservative/Conservateur",
  "votes": 19037,
  "votePercentage": 49,
  "majority": 7985,
  "majorityPercentage": 20.6
},

{
  "index": 59025,
  "candidate": "Steven Kou",
  "party": "Liberal/Libéral",
  "votes": 11052,
  "votePercentage": 28.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59025,
  "candidate": "Dustin Innes",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 5617,
  "votePercentage": 14.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59025,
  "candidate": "Françoise Raunet",
  "party": "Green Party/Parti Vert",
  "votes": 2376,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59025,
  "candidate": "Ivan Pak",
  "party": "People's Party/Parti populaire",
  "votes": 538,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59025,
  "candidate": "Zhe Zhang",
  "party": "Independent/Indépendant(e)",
  "votes": 197,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59027,
  "candidate": "Elizabeth May **",
  "party": "Green Party/Parti Vert",
  "votes": 33454,
  "votePercentage": 49.1,
  "majority": 19670,
  "majorityPercentage": 28.9
},

{
  "index": 59027,
  "candidate": "David Busch",
  "party": "Conservative/Conservateur",
  "votes": 13784,
  "votePercentage": 20.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59027,
  "candidate": "Ryan Windsor",
  "party": "Liberal/Libéral",
  "votes": 11326,
  "votePercentage": 16.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59027,
  "candidate": "Sabina Singh",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8657,
  "votePercentage": 12.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59027,
  "candidate": "Ron Broda",
  "party": "People's Party/Parti populaire",
  "votes": 929,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Taylor Bachrach",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 16944,
  "votePercentage": 40.9,
  "majority": 3188,
  "majorityPercentage": 7.7
},

{
  "index": 59028,
  "candidate": "Claire Rattée",
  "party": "Conservative/Conservateur",
  "votes": 13756,
  "votePercentage": 33.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Dave Birdi",
  "party": "Liberal/Libéral",
  "votes": 4793,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Mike Sawyer",
  "party": "Green Party/Parti Vert",
  "votes": 3280,
  "votePercentage": 7.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Rod Taylor",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 1350,
  "votePercentage": 3.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Jody Craven",
  "party": "People's Party/Parti populaire",
  "votes": 940,
  "votePercentage": 2.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Danny Nunes",
  "party": "Independent/Indépendant(e)",
  "votes": 164,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59028,
  "candidate": "Merv Ritchie",
  "party": "Independent/Indépendant(e)",
  "votes": 157,
  "votePercentage": .4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59029,
  "candidate": "Richard Cannings **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 24809,
  "votePercentage": 36.4,
  "majority": 796,
  "majorityPercentage": 1.2
},

{
  "index": 59029,
  "candidate": "Helena Konanz",
  "party": "Conservative/Conservateur",
  "votes": 24013,
  "votePercentage": 35.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59029,
  "candidate": "Connie Denesiuk",
  "party": "Liberal/Libéral",
  "votes": 11705,
  "votePercentage": 17.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59029,
  "candidate": "Tara Howse",
  "party": "Green Party/Parti Vert",
  "votes": 5672,
  "votePercentage": 8.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59029,
  "candidate": "Sean Taylor",
  "party": "People's Party/Parti populaire",
  "votes": 1638,
  "votePercentage": 2.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59029,
  "candidate": "Carolina Hopkins",
  "party": "Independent/Indépendant(e)",
  "votes": 359,
  "votePercentage": .5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59030,
  "candidate": "Kerry-Lynne Findlay",
  "party": "Conservative/Conservateur",
  "votes": 24310,
  "votePercentage": 41.9,
  "majority": 2618,
  "majorityPercentage": 4.5
},

{
  "index": 59030,
  "candidate": "Gordie Hogg **",
  "party": "Liberal/Libéral",
  "votes": 21692,
  "votePercentage": 37.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59030,
  "candidate": "Stephen Crozier",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6716,
  "votePercentage": 11.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59030,
  "candidate": "Beverly Pixie Hobby",
  "party": "Green Party/Parti Vert",
  "votes": 4458,
  "votePercentage": 7.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59030,
  "candidate": "Joel Poulin",
  "party": "People's Party/Parti populaire",
  "votes": 852,
  "votePercentage": 1.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59031,
  "candidate": "Kenny Chiu",
  "party": "Conservative/Conservateur",
  "votes": 17478,
  "votePercentage": 41.7,
  "majority": 2747,
  "majorityPercentage": 6.5
},

{
  "index": 59031,
  "candidate": "Joe Peschisolido **",
  "party": "Liberal/Libéral",
  "votes": 14731,
  "votePercentage": 35.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59031,
  "candidate": "Jaeden Dela Torre",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6321,
  "votePercentage": 15.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59031,
  "candidate": "Nicole Iaci",
  "party": "Green Party/Parti Vert",
  "votes": 2972,
  "votePercentage": 7.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59031,
  "candidate": "Ping Chan",
  "party": "Independent/Indépendant(e)",
  "votes": 449,
  "votePercentage": 1.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "Randeep Singh Sarai **",
  "party": "Liberal/Libéral",
  "votes": 15453,
  "votePercentage": 37.4,
  "majority": 4100,
  "majorityPercentage": 9.9
},

{
  "index": 59032,
  "candidate": "Sarjit Singh Saran",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 11353,
  "votePercentage": 27.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "Tina Bains",
  "party": "Conservative/Conservateur",
  "votes": 10505,
  "votePercentage": 25.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "John Werring",
  "party": "Green Party/Parti Vert",
  "votes": 2558,
  "votePercentage": 6.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "Jaswinder Singh Dilawari",
  "party": "People's Party/Parti populaire",
  "votes": 709,
  "votePercentage": 1.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "Kevin Pielak",
  "party": "Christian Heritage Party/Parti de l'Héritage Chrétien",
  "votes": 378,
  "votePercentage": .9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "Jeffrey Breti",
  "party": "Independent/Indépendant(e)",
  "votes": 243,
  "votePercentage": .6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59032,
  "candidate": "George Gidora",
  "party": "Communist/Communiste",
  "votes": 120,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59033,
  "candidate": "Sukh Dhaliwal **",
  "party": "Liberal/Libéral",
  "votes": 18960,
  "votePercentage": 45,
  "majority": 6654,
  "majorityPercentage": 15.8
},

{
  "index": 59033,
  "candidate": "Harjit Singh Gill",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 12306,
  "votePercentage": 29.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59033,
  "candidate": "Harpreet Singh",
  "party": "Conservative/Conservateur",
  "votes": 8824,
  "votePercentage": 21,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59033,
  "candidate": "Rabaab Khehra",
  "party": "Green Party/Parti Vert",
  "votes": 1355,
  "votePercentage": 3.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59033,
  "candidate": "Holly Verchère",
  "party": "People's Party/Parti populaire",
  "votes": 653,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "Hedy Fry **",
  "party": "Liberal/Libéral",
  "votes": 23599,
  "votePercentage": 42.2,
  "majority": 10319,
  "majorityPercentage": 18.4
},

{
  "index": 59034,
  "candidate": "Breen Ouellette",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 13280,
  "votePercentage": 23.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "David Cavey",
  "party": "Conservative/Conservateur",
  "votes": 10782,
  "votePercentage": 19.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "Jesse Brown",
  "party": "Green Party/Parti Vert",
  "votes": 7002,
  "votePercentage": 12.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "Louise Kierans",
  "party": "People's Party/Parti populaire",
  "votes": 724,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "John Clarke",
  "party": "Libertarian/Libertarien",
  "votes": 379,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "Lily Bowman",
  "party": "Independent/Indépendant(e)",
  "votes": 142,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59034,
  "candidate": "Imtiaz Popat",
  "party": "Independent/Indépendant(e)",
  "votes": 38,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Jenny Kwan **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 29236,
  "votePercentage": 52.6,
  "majority": 19151,
  "majorityPercentage": 34.4
},

{
  "index": 59035,
  "candidate": "Kyle Demes",
  "party": "Liberal/Libéral",
  "votes": 10085,
  "votePercentage": 18.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Bridget Burns",
  "party": "Green Party/Parti Vert",
  "votes": 8062,
  "votePercentage": 14.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Chris Corsetti",
  "party": "Conservative/Conservateur",
  "votes": 6724,
  "votePercentage": 12.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Karin Litzcke",
  "party": "People's Party/Parti populaire",
  "votes": 679,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Gölök Z Buday",
  "party": "Libertarian/Libertarien",
  "votes": 562,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Peter Marcus",
  "party": "Communist/Communiste",
  "votes": 177,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59035,
  "candidate": "Anne Jamieson",
  "party": "ML/ML",
  "votes": 86,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59036,
  "candidate": "Jody Wilson-Raybould **",
  "party": "Independent/Indépendant(e)",
  "votes": 17265,
  "votePercentage": 32.6,
  "majority": 3177,
  "majorityPercentage": 6.0
},

{
  "index": 59036,
  "candidate": "Taleeb Noormohamed",
  "party": "Liberal/Libéral",
  "votes": 14088,
  "votePercentage": 26.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59036,
  "candidate": "Zach Segal",
  "party": "Conservative/Conservateur",
  "votes": 11605,
  "votePercentage": 21.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59036,
  "candidate": "Yvonne Hanson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 6960,
  "votePercentage": 13.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59036,
  "candidate": "Louise Boutin",
  "party": "Green Party/Parti Vert",
  "votes": 2683,
  "votePercentage": 5.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59036,
  "candidate": "Naomi Chocyk",
  "party": "People's Party/Parti populaire",
  "votes": 431,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Don Davies **",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 21680,
  "votePercentage": 49.1,
  "majority": 11486,
  "majorityPercentage": 26.0
},

{
  "index": 59038,
  "candidate": "Tamara Taggart",
  "party": "Liberal/Libéral",
  "votes": 10194,
  "votePercentage": 23.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Helen Quan",
  "party": "Conservative/Conservateur",
  "votes": 8804,
  "votePercentage": 19.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Lawrence Taylor",
  "party": "Green Party/Parti Vert",
  "votes": 2675,
  "votePercentage": 6.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Ian Torn",
  "party": "People's Party/Parti populaire",
  "votes": 427,
  "votePercentage": 1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Kimball Cariou",
  "party": "Communist/Communiste",
  "votes": 292,
  "votePercentage": .7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59038,
  "candidate": "Donna Petersen",
  "party": "ML/ML",
  "votes": 91,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59039,
  "candidate": "Joyce Murray **",
  "party": "Liberal/Libéral",
  "votes": 22093,
  "votePercentage": 43.5,
  "majority": 8011,
  "majorityPercentage": 15.8
},

{
  "index": 59039,
  "candidate": "Kathleen Dixon",
  "party": "Conservative/Conservateur",
  "votes": 14082,
  "votePercentage": 27.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59039,
  "candidate": "Leigh Kenny",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 7681,
  "votePercentage": 15.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59039,
  "candidate": "Geoff Wright",
  "party": "Green Party/Parti Vert",
  "votes": 6308,
  "votePercentage": 12.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59039,
  "candidate": "Sandra Filosof-Schipper",
  "party": "People's Party/Parti populaire",
  "votes": 428,
  "votePercentage": .8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59039,
  "candidate": "Austen Erhardt",
  "party": "Independent/Indépendant(e)",
  "votes": 162,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59040,
  "candidate": "Harjit S. Sajjan **",
  "party": "Liberal/Libéral",
  "votes": 17808,
  "votePercentage": 41.2,
  "majority": 3420,
  "majorityPercentage": 7.9
},

{
  "index": 59040,
  "candidate": "Wai Young",
  "party": "Conservative/Conservateur",
  "votes": 14388,
  "votePercentage": 33.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59040,
  "candidate": "Sean McQuillan",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 8015,
  "votePercentage": 18.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59040,
  "candidate": "Judy Zaichkowsky",
  "party": "Green Party/Parti Vert",
  "votes": 2451,
  "votePercentage": 5.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59040,
  "candidate": "Alain Deng",
  "party": "People's Party/Parti populaire",
  "votes": 532,
  "votePercentage": 1.2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Laurel Collins",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 23765,
  "votePercentage": 33.2,
  "majority": 2382,
  "majorityPercentage": 3.3
},

{
  "index": 59041,
  "candidate": "Racelle Kooy",
  "party": "Green Party/Parti Vert",
  "votes": 21383,
  "votePercentage": 29.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Nikki Macdonald",
  "party": "Liberal/Libéral",
  "votes": 15952,
  "votePercentage": 22.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Richard Caron",
  "party": "Conservative/Conservateur",
  "votes": 9038,
  "votePercentage": 12.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Alyson Culbert",
  "party": "People's Party/Parti populaire",
  "votes": 920,
  "votePercentage": 1.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Jordan Reichert",
  "party": "Animal Protection Party/Parti Protection Animaux",
  "votes": 221,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Robert Duncan",
  "party": "Communist/Communiste",
  "votes": 113,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "David Shebib",
  "party": "Independent/Indépendant(e)",
  "votes": 111,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59041,
  "candidate": "Keith Rosenberg",
  "party": "VCP/CAC",
  "votes": 46,
  "votePercentage": .1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Patrick Weiler",
  "party": "Liberal/Libéral",
  "votes": 22673,
  "votePercentage": 34.9,
  "majority": 5314,
  "majorityPercentage": 8.2
},

{
  "index": 59042,
  "candidate": "Gabrielle Loren",
  "party": "Conservative/Conservateur",
  "votes": 17359,
  "votePercentage": 26.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Dana Taylor",
  "party": "Green Party/Parti Vert",
  "votes": 14579,
  "votePercentage": 22.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Judith Wilson",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 9027,
  "votePercentage": 13.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Robert Douglas Bebb",
  "party": "People's Party/Parti populaire",
  "votes": 1010,
  "votePercentage": 1.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Gordon Jeffrey",
  "party": "Parti Rhinocéros Party/Parti Rhinocéros Party",
  "votes": 173,
  "votePercentage": .3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 59042,
  "candidate": "Terry Grimwood",
  "party": "Independent/Indépendant(e)",
  "votes": 159,
  "votePercentage": .2,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 60001,
  "candidate": "Larry Bagnell **",
  "party": "Liberal/Libéral",
  "votes": 7034,
  "votePercentage": 33.5,
  "majority": 153,
  "majorityPercentage": 0.7
},

{
  "index": 60001,
  "candidate": "Jonas Jacot Smith",
  "party": "Conservative/Conservateur",
  "votes": 6881,
  "votePercentage": 32.7,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 60001,
  "candidate": "Justin Lemphers",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 4617,
  "votePercentage": 22,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 60001,
  "candidate": "Lenore Morris",
  "party": "Green Party/Parti Vert",
  "votes": 2201,
  "votePercentage": 10.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 60001,
  "candidate": "Joseph Zelezny",
  "party": "People's Party/Parti populaire",
  "votes": 284,
  "votePercentage": 1.4,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 61001,
  "candidate": "Michael McLeod **",
  "party": "Liberal/Libéral",
  "votes": 6467,
  "votePercentage": 39.7,
  "majority": 2310,
  "majorityPercentage": 14.2
},

{
  "index": 61001,
  "candidate": "Yanik D'Aigle",
  "party": "Conservative/Conservateur",
  "votes": 4157,
  "votePercentage": 25.5,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 61001,
  "candidate": "Mary Beckett",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3640,
  "votePercentage": 22.3,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 61001,
  "candidate": "Paul Falvo",
  "party": "Green Party/Parti Vert",
  "votes": 1731,
  "votePercentage": 10.6,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 61001,
  "candidate": "Luke Quinlan",
  "party": "People's Party/Parti populaire",
  "votes": 296,
  "votePercentage": 1.8,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 62001,
  "candidate": "Mumilaaq Qaqqaq",
  "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
  "votes": 3861,
  "votePercentage": 40.8,
  "majority": 943,
  "majorityPercentage": 10.0
},

{
  "index": 62001,
  "candidate": "Megan Pizzo Lyall",
  "party": "Liberal/Libéral",
  "votes": 2918,
  "votePercentage": 30.9,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 62001,
  "candidate": "Leona Aglukkaq",
  "party": "Conservative/Conservateur",
  "votes": 2469,
  "votePercentage": 26.1,
  "majority": 0,
  "majorityPercentage": 0
},
{
  "index": 62001,
  "candidate": "Douglas Roy",
  "party": "Green Party/Parti Vert",
  "votes": 206,
  "votePercentage": 2.2,
  "majority": 0,
  "majorityPercentage": 0
}
];

const results20201026 = [
  {
    "index": 35108,
    "candidate": "Marci Ien",
    "party": "Liberal/Libéral",
    "votes": 10581,
    "votePercentage": 42,
    "majority": 2331,
    "majorityPercentage": 9.2
  },
  {
    "index": 35108,
    "candidate": "Annamie Paul",
    "party": "Green Party/Parti Vert",
    "votes": 8250,
    "votePercentage": 32.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Brian Chang",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 4280,
    "votePercentage": 17,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Benjamin Gauri Sharma",
    "party": "Conservative/Conservateur",
    "votes": 1435,
    "votePercentage": 5.7,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Baljit Bawa",
    "party": "People's Party - PPC/Parti populaire - PPC",
    "votes": 269,
    "votePercentage": 1.1,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Keith Komar",
    "party": "Libertarian/Libertarien",
    "votes": 135,
    "votePercentage": .5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Kevin Clarke",
    "party": "Independent/Indépendant(e)",
    "votes": 123,
    "votePercentage": .5,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Dwayne Cappelletti",
    "party": "Free Party Canada/Parti Libre Canada",
    "votes": 76,
    "votePercentage": .3,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35108,
    "candidate": "Above Znoneofthe",
    "party": "No Affiliation/Aucune appartenance",
    "votes": 56,
    "votePercentage": .2,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Ya'ara Saks",
    "party": "Liberal/Libéral",
    "votes": 8253,
    "votePercentage": 45.7,
    "majority": 701,
    "majorityPercentage": 3.9
  },

  {
    "index": 35118,
    "candidate": "Julius Tiangson",
    "party": "Conservative/Conservateur",
    "votes": 7552,
    "votePercentage": 41.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Andrea Vásquez Jiménez",
    "party": "NDP-New Democratic Party/NPD-Nouveau Parti démocratique",
    "votes": 1046,
    "votePercentage": 5.8,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Max Bernier",
    "party": "People's Party - PPC/Parti populaire - PPC",
    "votes": 642,
    "votePercentage": 3.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "Sasha Zavarella",
    "party": "Green Party/Parti Vert",
    "votes": 461,
    "votePercentage": 2.6,
    "majority": 0,
    "majorityPercentage": 0
  },
  {
    "index": 35118,
    "candidate": "John The Engineer Turmel",
    "party": "Independent/Indépendant(e)",
    "votes": 104,
    "votePercentage": .6,
    "majority": 0,
    "majorityPercentage": 0
  }
];

const resultsSet: DateResults[] = [{
  date: "2015-10-19T12:00:00.000Z",
  results: results20151019
}, {
  date: "2016-10-24T12:00:00.000Z",
  results: results20161024
}, {
  date: "2017-04-03T12:00:00.000Z",
  results: results20170403
}, {
  date: "2017-10-23T12:00:00.000Z",
  results: results20171023
}, {
  date: "2017-12-11T12:00:00.000Z",
  results: results20171211
}, {
  date: "2018-06-18T12:00:00.000Z",
  results: results20180618
}, {
  date: "2018-12-03T12:00:00.000Z",
  results: results20181203
}, {
  date: "2019-02-25T12:00:00.000Z",
  results: results20190225
}, {
  date: "2019-05-06T12:00:00.000Z",
  results: results20190506
}, {
  date: "2019-10-21T12:00:00.000Z",
  results: results20191021
}, {
  date: "2020-10-26T12:00:00.000Z",
  results: results20201026
}, {
  date: "2021-09-20T12:00:00.000Z",
  results: convertPreliminaryResults(PreliminaryResult.fromRows(prelimResults20211020TSV.split("\n")))
}];

interface DateResult {
  winner: Result
  date: string
}

function convertPreliminaryResults(prelims: PreliminaryResult[]): Result[] {
  return prelims.map((outer) => {
    const ridingSortedDescending = prelims.filter((inner) => inner.index === outer.index).sort((a, b) => b.votes - a.votes);
    const totalForRiding = ridingSortedDescending.reduce((subtotal, next) => subtotal + next.votes, 0);
    const isWinner = ridingSortedDescending[0] === outer;
    const challenger = isWinner ? ridingSortedDescending[1] : null;
    const majority = isWinner && challenger ? outer.votes - challenger.votes : 0;
    const majorityPercentage = isWinner && challenger ? outer.votePercentage - challenger.votePercentage : 0;
    return {
      index: outer.index,
      candidate: outer.name,
      party: `${outer.partyEn}/${outer.partyFr}`,
      votes: outer.votes,
      votePercentage: outer.votePercentage,
      majority: majority,
      majorityPercentage: majorityPercentage
    };
  });
}

function getResultsFor(election: Election): DateResults[] {
  const electionDate = new Date(Utils.electionToDate(election));
  return resultsSet.filter((ea) => {
    const resultDate = new Date(ea.date);
    return resultDate <= electionDate;
  });
}

function findWinnerFor(ridingIndex: number, election: Election): DateResult | null {
  let winner: Result | undefined;
  let date: string | undefined;
  const allResults = getResultsFor(election);
  allResults.forEach((dateResults, index) => {
    const resultWinner = dateResults.results.find((ea) => ea.index === ridingIndex && ea.majority > 0);
    const prevWinner = allResults[index - 1] ? allResults[index - 1].results.find((ea) => ea.index === ridingIndex && ea.majority > 0) : null;
    if (resultWinner) {
      winner = resultWinner;
      date = dateResults.date;
    }
  });
  return winner && date ? {
    winner: winner,
    date: date
  } : null;
}

function getSummaryByParty(election: Election): Summary {
  const partyByRiding: { [ridingId: string]: string } = {};
  const byParty: { [partyId: string]: number } = {};
  getResultsFor(election).forEach((dateResults) => {
    dateResults.results.forEach((result) => {
      if (result.majority > 0) {
        const hasChanged = result.changedParty && Utils.electionToDate(result.changedParty) <= Utils.electionToDate(election);
        const party = hasChanged && result.currentParty ? result.currentParty : result.party;
        partyByRiding[`${result.index}`] = party;
      }
    });
  });
  Object.keys(partyByRiding).forEach((ridingId) => {
    const party = partyByRiding[ridingId];
    if (typeof byParty[party] !== "number") {
      byParty[party] = 0;
    }
    byParty[party] = byParty[party] + 1;
  });
  return byParty;
}

function getResultsForRiding(riding: RidingData, election: Election): DateResults[] {
  return getResultsFor(election).map((dateResults) => {
    return Object.assign({}, dateResults, {
      results: dateResults.results.filter((result) => result.index === riding.index)
    });
  });
}

export { findWinnerFor, getSummaryByParty, getResultsForRiding }
