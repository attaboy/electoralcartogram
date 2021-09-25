enum Row {
  index=0,
  status=3,
  lastName=5,
  middleName=6,
  firstName=7,
  partyEn=8,
  partyFr=9,
  votes=10,
  votePercentage=11,
  totalBallots=13
}

type PreliminaryResultStatus = "preliminary" | "validated";

export class PreliminaryResult {
  index: number;
  status: PreliminaryResultStatus;
  name: string;
  partyEn: string;
  partyFr: string;
  votes: number;
  votePercentage: number;
  totalBallots: number;

  constructor(row: string) {
    const columns = row.split("\t");
    this.index = columns[Row.index] ? Number.parseInt(columns[Row.index], 10) : 0;
    this.status = columns[Row.status] as PreliminaryResultStatus;
    this.name = `${columns[Row.firstName]}${columns[Row.middleName] ? " " + columns[Row.middleName] : ""} ${columns[Row.lastName]}`;
    this.partyEn = columns[Row.partyEn];
    this.partyFr = columns[Row.partyFr];
    this.votes = columns[Row.votes] ? Number.parseInt(columns[Row.votes], 10) : 0;
    this.votePercentage = columns[Row.votePercentage] ? Number.parseFloat(columns[Row.votePercentage]) : 0;
    this.totalBallots = Number.parseInt(columns[Row.totalBallots], 10);
  }

  static fromRows(rows: string[]): PreliminaryResult[] {
    const allRows = rows.map((row) => new PreliminaryResult(row));
    // Filter out duplicate rows and prefer validated results over preliminary results
    return allRows.filter((row) => {
      return row.status === "validated" ||
        !allRows.find((anotherRow) => anotherRow.status === "validated" &&
          anotherRow.index === row.index && anotherRow.name === row.name && anotherRow.partyEn === row.partyEn);
    });
  }
}

export const prelimResults20211020TSV =
`10001	Avalon	Avalon	preliminary	préliminaires	Chapman		Matthew	Conservative	Conservateur	12801	34.4	0	37233
10001	Avalon	Avalon	preliminary	préliminaires	Davis		Carolyn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5162	13.9	0	37233
10001	Avalon	Avalon	preliminary	préliminaires	McDonald		Ken	Liberal	Libéral	18623	50	0	37233
10001	Avalon	Avalon	preliminary	préliminaires	Stewart		Lainie	People's Party - PPC	Parti populaire - PPC	647	1.7	0	37233
10001	Avalon	Avalon	validated	validés	Chapman		Matthew	Conservative	Conservateur	12738	34.3	273	37417
10001	Avalon	Avalon	validated	validés	Davis		Carolyn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5151	13.9	273	37417
10001	Avalon	Avalon	validated	validés	McDonald		Ken	Liberal	Libéral	18608	50.1	273	37417
10001	Avalon	Avalon	validated	validés	Stewart		Lainie	People's Party - PPC	Parti populaire - PPC	647	1.7	273	37417
10002	Bonavista--Burin--Trinity	Bonavista--Burin--Trinity	preliminary	préliminaires	Anonsen		Anne Marie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2484	8.3	0	29962
10002	Bonavista--Burin--Trinity	Bonavista--Burin--Trinity	preliminary	préliminaires	Hogan		Linda	People's Party - PPC	Parti populaire - PPC	1257	4.2	0	29962
10002	Bonavista--Burin--Trinity	Bonavista--Burin--Trinity	preliminary	préliminaires	Rogers		Churence	Liberal	Libéral	13972	46.6	0	29962
10002	Bonavista--Burin--Trinity	Bonavista--Burin--Trinity	preliminary	préliminaires	Vokey		Sharon	Conservative	Conservateur	12249	40.9	0	29962
10003	Coast of Bays--Central--Notre Dame	Coast of Bays--Central--Notre Dame	preliminary	préliminaires	Ruby		Jamie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2186	7.3	0	29942
10003	Coast of Bays--Central--Notre Dame	Coast of Bays--Central--Notre Dame	preliminary	préliminaires	Simms		Scott	Liberal	Libéral	13579	45.4	0	29942
10003	Coast of Bays--Central--Notre Dame	Coast of Bays--Central--Notre Dame	preliminary	préliminaires	Small		Clifford	Conservative	Conservateur	14177	47.3	0	29942
10004	Labrador	Labrador	preliminary	préliminaires	Champion		Shannon	People's Party - PPC	Parti populaire - PPC	293	3.2	0	9037
10004	Labrador	Labrador	preliminary	préliminaires	Dumaresque		Shane	Conservative	Conservateur	2754	30.5	0	9037
10004	Labrador	Labrador	preliminary	préliminaires	Jones		Yvonne	Liberal	Libéral	3797	42	0	9037
10004	Labrador	Labrador	preliminary	préliminaires	Norman		Amy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2193	24.3	0	9037
10005	Long Range Mountains	Long Range Mountains	preliminary	préliminaires	Anstey		Carol	Conservative	Conservateur	14459	39.4	0	36708
10005	Long Range Mountains	Long Range Mountains	preliminary	préliminaires	Hutchings		Gudie	Liberal	Libéral	16276	44.3	0	36708
10005	Long Range Mountains	Long Range Mountains	preliminary	préliminaires	Mintz		Kaila	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4387	12	0	36708
10005	Long Range Mountains	Long Range Mountains	preliminary	préliminaires	Shelley		Darrell	People's Party - PPC	Parti populaire - PPC	1586	4.3	0	36708
10006	St. John's East	St. John's-Est	preliminary	préliminaires	Etchegary		Glenn	Conservative	Conservateur	7245	19	0	38222
10006	St. John's East	St. John's-Est	preliminary	préliminaires	Metcalfe		Dana	People's Party - PPC	Parti populaire - PPC	723	1.9	0	38222
10006	St. John's East	St. John's-Est	preliminary	préliminaires	Shortall		Mary	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13015	34.1	0	38222
10006	St. John's East	St. John's-Est	preliminary	préliminaires	Thompson		Joanne	Liberal	Libéral	17239	45.1	0	38222
10007	St. John's South--Mount Pearl	St. John's-Sud--Mount Pearl	preliminary	préliminaires	Critch		Ray	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8123	23.3	0	34863
10007	St. John's South--Mount Pearl	St. John's-Sud--Mount Pearl	preliminary	préliminaires	Hodder		Steve	Conservative	Conservateur	6528	18.7	0	34863
10007	St. John's South--Mount Pearl	St. John's-Sud--Mount Pearl	preliminary	préliminaires	O'Regan		Seamus	Liberal	Libéral	19576	56.2	0	34863
10007	St. John's South--Mount Pearl	St. John's-Sud--Mount Pearl	preliminary	préliminaires	Stewart		Georgia Faith	People's Party - PPC	Parti populaire - PPC	636	1.8	0	34863
11001	Cardigan	Cardigan	preliminary	préliminaires	Hardy		Kevin	People's Party - PPC	Parti populaire - PPC	715	3.3	0	21994
11001	Cardigan	Cardigan	preliminary	préliminaires	MacAulay		Lawrence	Liberal	Libéral	11175	50.8	0	21994
11001	Cardigan	Cardigan	preliminary	préliminaires	MacLean		Michael	Green Party	Parti Vert	1064	4.8	0	21994
11001	Cardigan	Cardigan	preliminary	préliminaires	MacLeod		Fred	Christian Heritage Party	Parti de l'Héritage Chrétien	145	.7	0	21994
11001	Cardigan	Cardigan	preliminary	préliminaires	Phelan		Wayne	Conservative	Conservateur	6817	31	0	21994
11001	Cardigan	Cardigan	preliminary	préliminaires	Thiele		Lynne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2078	9.4	0	21994
11001	Cardigan	Cardigan	validated	validés	Hardy		Kevin	People's Party - PPC	Parti populaire - PPC	725	3.3	199	22293
11001	Cardigan	Cardigan	validated	validés	MacAulay		Lawrence	Liberal	Libéral	11175	50.6	199	22293
11001	Cardigan	Cardigan	validated	validés	MacLean		Michael	Green Party	Parti Vert	1064	4.8	199	22293
11001	Cardigan	Cardigan	validated	validés	MacLeod		Fred	Christian Heritage Party	Parti de l'Héritage Chrétien	145	.7	199	22293
11001	Cardigan	Cardigan	validated	validés	Phelan		Wayne	Conservative	Conservateur	6817	30.9	199	22293
11001	Cardigan	Cardigan	validated	validés	Thiele		Lynne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2168	9.8	199	22293
11002	Charlottetown	Charlottetown	preliminary	préliminaires	Andrade		Margaret	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2048	10.7	0	19100
11002	Charlottetown	Charlottetown	preliminary	préliminaires	Casey		Sean	Liberal	Libéral	8919	46.7	0	19100
11002	Charlottetown	Charlottetown	preliminary	préliminaires	Currie		Doug	Conservative	Conservateur	5932	31.1	0	19100
11002	Charlottetown	Charlottetown	preliminary	préliminaires	Lanthier		Darcie	Green Party	Parti Vert	1832	9.6	0	19100
11002	Charlottetown	Charlottetown	preliminary	préliminaires	McPhee		Scott	People's Party - PPC	Parti populaire - PPC	369	1.9	0	19100
11002	Charlottetown	Charlottetown	validated	validés	Andrade		Margaret	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2048	10.7	198	19298
11002	Charlottetown	Charlottetown	validated	validés	Casey		Sean	Liberal	Libéral	8919	46.7	198	19298
11002	Charlottetown	Charlottetown	validated	validés	Currie		Doug	Conservative	Conservateur	5932	31.1	198	19298
11002	Charlottetown	Charlottetown	validated	validés	Lanthier		Darcie	Green Party	Parti Vert	1832	9.6	198	19298
11002	Charlottetown	Charlottetown	validated	validés	McPhee		Scott	People's Party - PPC	Parti populaire - PPC	369	1.9	198	19298
11003	Egmont	Egmont	preliminary	préliminaires	Balsom		Barry	Conservative	Conservateur	6088	31.1	0	19571
11003	Egmont	Egmont	preliminary	préliminaires	Biggar		Wayne	People's Party - PPC	Parti populaire - PPC	974	5	0	19571
11003	Egmont	Egmont	preliminary	préliminaires	Bradshaw		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1688	8.6	0	19571
11003	Egmont	Egmont	preliminary	préliminaires	Clark		Alex	Green Party	Parti Vert	1771	9	0	19571
11003	Egmont	Egmont	preliminary	préliminaires	Morrissey		Bobby	Liberal	Libéral	9050	46.2	0	19571
11003	Egmont	Egmont	validated	validés	Balsom		Barry	Conservative	Conservateur	6088	31.1	244	19805
11003	Egmont	Egmont	validated	validés	Biggar		Wayne	People's Party - PPC	Parti populaire - PPC	974	5	244	19805
11003	Egmont	Egmont	validated	validés	Bradshaw		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1688	8.6	244	19805
11003	Egmont	Egmont	validated	validés	Clark		Alex	Green Party	Parti Vert	1771	9.1	244	19805
11003	Egmont	Egmont	validated	validés	Morrissey		Bobby	Liberal	Libéral	9040	46.2	244	19805
11004	Malpeque	Malpeque	preliminary	préliminaires	Keenan		Anna	Green Party	Parti Vert	3381	14.3	0	23607
11004	Malpeque	Malpeque	preliminary	préliminaires	Landry		Christopher	People's Party - PPC	Parti populaire - PPC	680	2.9	0	23607
11004	Malpeque	Malpeque	preliminary	préliminaires	MacDonald		Heath	Liberal	Libéral	9812	41.6	0	23607
11004	Malpeque	Malpeque	preliminary	préliminaires	Neill		Michelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1898	8	0	23607
11004	Malpeque	Malpeque	preliminary	préliminaires	Sanderson		Jody	Conservative	Conservateur	7836	33.2	0	23607
11004	Malpeque	Malpeque	validated	validés	Keenan		Anna	Green Party	Parti Vert	3381	14.3	174	23881
11004	Malpeque	Malpeque	validated	validés	Landry		Christopher	People's Party - PPC	Parti populaire - PPC	680	2.9	174	23881
11004	Malpeque	Malpeque	validated	validés	MacDonald		Heath	Liberal	Libéral	9912	41.8	174	23881
11004	Malpeque	Malpeque	validated	validés	Neill		Michelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1898	8	174	23881
11004	Malpeque	Malpeque	validated	validés	Sanderson		Jody	Conservative	Conservateur	7836	33.1	174	23881
12001	Cape Breton--Canso	Cape Breton--Canso	preliminary	préliminaires	Grandy		Brad	People's Party - PPC	Parti populaire - PPC	1589	4.2	0	37465
12001	Cape Breton--Canso	Cape Breton--Canso	preliminary	préliminaires	Kelloway		Mike	Liberal	Libéral	17348	46.3	0	37465
12001	Cape Breton--Canso	Cape Breton--Canso	preliminary	préliminaires	MacLeod		Fiona	Conservative	Conservateur	13133	35.1	0	37465
12001	Cape Breton--Canso	Cape Breton--Canso	preliminary	préliminaires	Reddick		Jana	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5395	14.4	0	37465
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Cotter		Steven	Conservative	Conservateur	13044	32.3	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Fraser		Sean	Liberal	Libéral	18656	46.1	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Frazer		Chris	Communist	Communiste	137	.3	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Henderson		Harvey	Independent	Indépendant(e)	365	.9	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	MacDonald		Betsy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6230	15.4	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Muir		Al	People's Party - PPC	Parti populaire - PPC	1442	3.6	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Nikas		Katerina	Green Party	Parti Vert	488	1.2	0	40428
12002	Central Nova	Nova-Centre	preliminary	préliminaires	Smyth		Ryan	Parti Rhinocéros Party	Parti Rhinocéros Party	66	.2	0	40428
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	Archer		Bill	People's Party - PPC	Parti populaire - PPC	1671	4.1	0	40410
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	Ellis		Stephen	Conservative	Conservateur	18646	46.1	0	40410
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	Foster		Jillian	Green Party	Parti Vert	1050	2.6	0	40410
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	O'Blenis		Jody	Independent	Indépendant(e)	273	.7	0	40410
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	Osborne		Daniel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4931	12.2	0	40410
12003	Cumberland--Colchester	Cumberland--Colchester	preliminary	préliminaires	Zann		Lenore	Liberal	Libéral	13839	34.2	0	40410
12004	Dartmouth--Cole Harbour	Dartmouth--Cole Harbour	preliminary	préliminaires	Fisher		Darren	Liberal	Libéral	24495	52.8	0	46396
12004	Dartmouth--Cole Harbour	Dartmouth--Cole Harbour	preliminary	préliminaires	Lindsay		Michelle	People's Party - PPC	Parti populaire - PPC	4865	10.5	0	46396
12004	Dartmouth--Cole Harbour	Dartmouth--Cole Harbour	preliminary	préliminaires	Payne		Kevin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15474	33.4	0	46396
12004	Dartmouth--Cole Harbour	Dartmouth--Cole Harbour	preliminary	préliminaires	Zaman		Rana	Green Party	Parti Vert	1562	3.4	0	46396
12005	Halifax	Halifax	preliminary	préliminaires	Campbell		Katie	Communist	Communiste	200	.4	0	52260
12005	Halifax	Halifax	preliminary	préliminaires	Ells		Cameron	Conservative	Conservateur	6802	13	0	52260
12005	Halifax	Halifax	preliminary	préliminaires	Fillmore		Andy	Liberal	Libéral	22274	42.6	0	52260
12005	Halifax	Halifax	preliminary	préliminaires	Hébert		B. Alexander	People's Party - PPC	Parti populaire - PPC	1084	2.1	0	52260
12005	Halifax	Halifax	preliminary	préliminaires	Roberts		Jo-Ann	Green Party	Parti Vert	1165	2.2	0	52260
12005	Halifax	Halifax	preliminary	préliminaires	Roberts		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20735	39.7	0	52260
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Diab		Lena Metlege	Liberal	Libéral	24700	48.5	0	50934
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Humphries		Eleanor	Conservative	Conservateur	11206	22	0	50934
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Roberts		Jonathan Keith	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12326	24.2	0	50934
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Schulthies		Kevin	Christian Heritage Party	Parti de l'Héritage Chrétien	105	.2	0	50934
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Scott		Julie	People's Party - PPC	Parti populaire - PPC	1424	2.8	0	50934
12006	Halifax West	Halifax-Ouest	preliminary	préliminaires	Zurawski		Richard	Green Party	Parti Vert	1173	2.3	0	50934
12006	Halifax West	Halifax-Ouest	validated	validés	Diab		Lena Metlege	Liberal	Libéral	24744	48.5	191	51222
12006	Halifax West	Halifax-Ouest	validated	validés	Humphries		Eleanor	Conservative	Conservateur	11243	22	191	51222
12006	Halifax West	Halifax-Ouest	validated	validés	Roberts		Jonathan Keith	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12331	24.2	191	51222
12006	Halifax West	Halifax-Ouest	validated	validés	Schulthies		Kevin	Christian Heritage Party	Parti de l'Héritage Chrétien	85	.2	191	51222
12006	Halifax West	Halifax-Ouest	validated	validés	Scott		Julie	People's Party - PPC	Parti populaire - PPC	1447	2.8	191	51222
12006	Halifax West	Halifax-Ouest	validated	validés	Zurawski		Richard	Green Party	Parti Vert	1181	2.3	191	51222
12007	Kings--Hants	Kings--Hants	preliminary	préliminaires	Blois		Kody	Liberal	Libéral	20189	44.9	0	44953
12007	Kings--Hants	Kings--Hants	preliminary	préliminaires	Ford		Steven	People's Party - PPC	Parti populaire - PPC	1945	4.3	0	44953
12007	Kings--Hants	Kings--Hants	preliminary	préliminaires	Parent		Mark	Conservative	Conservateur	13234	29.4	0	44953
12007	Kings--Hants	Kings--Hants	preliminary	préliminaires	Richardson		Sheila G.	Green Party	Parti Vert	940	2.1	0	44953
12007	Kings--Hants	Kings--Hants	preliminary	préliminaires	Schneider		Stephen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8645	19.2	0	44953
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	preliminary	préliminaires	Chisholm		Jenna	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12011	26.3	0	45603
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	preliminary	préliminaires	Conrad		Angela	Conservative	Conservateur	12044	26.4	0	45603
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	preliminary	préliminaires	Edmonds		Anthony	Green Party	Parti Vert	933	2	0	45603
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	preliminary	préliminaires	Gosse		Earl	People's Party - PPC	Parti populaire - PPC	1776	3.9	0	45603
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	preliminary	préliminaires	Samson		Darrell	Liberal	Libéral	18839	41.3	0	45603
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	validated	validés	Chisholm		Jenna	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12012	26.3	252	45858
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	validated	validés	Conrad		Angela	Conservative	Conservateur	12047	26.4	252	45858
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	validated	validés	Edmonds		Anthony	Green Party	Parti Vert	933	2	252	45858
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	validated	validés	Gosse		Earl	People's Party - PPC	Parti populaire - PPC	1776	3.9	252	45858
12008	Sackville--Preston--Chezzetcook	Sackville--Preston--Chezzetcook	validated	validés	Samson		Darrell	Liberal	Libéral	18838	41.3	252	45858
12009	South Shore--St. Margarets	South Shore--St. Margarets	preliminary	préliminaires	Dorey		Olivia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9541	19.1	0	49947
12009	South Shore--St. Margarets	South Shore--St. Margarets	preliminary	préliminaires	Jordan		Bernadette	Liberal	Libéral	18527	37.1	0	49947
12009	South Shore--St. Margarets	South Shore--St. Margarets	preliminary	préliminaires	Perkins		Rick	Conservative	Conservateur	20444	40.9	0	49947
12009	South Shore--St. Margarets	South Shore--St. Margarets	preliminary	préliminaires	Trappenberg		Thomas	Green Party	Parti Vert	1435	2.9	0	49947
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Barron		Ronald Angus	People's Party - PPC	Parti populaire - PPC	1195	3.3	0	36231
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Battiste		Jaime	Liberal	Libéral	14198	39.2	0	36231
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Boisvert		Nikki	Marxist-Leninist	Marxiste-Léniniste	129	.4	0	36231
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Embrett		Mark	Green Party	Parti Vert	443	1.2	0	36231
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Orrell		Eddie	Conservative	Conservateur	13107	36.2	0	36231
12010	Sydney--Victoria	Sydney--Victoria	preliminary	préliminaires	Ward		Jeff	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7159	19.8	0	36231
12011	West Nova	Nova-Ouest	preliminary	préliminaires	Burbidge		Cheryl	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5645	12.8	0	43986
12011	West Nova	Nova-Ouest	preliminary	préliminaires	Chamberlain		Alxys	Liberal	Libéral	13747	31.3	0	43986
12011	West Nova	Nova-Ouest	preliminary	préliminaires	Spidle		Scott	People's Party - PPC	Parti populaire - PPC	2490	5.7	0	43986
12011	West Nova	Nova-Ouest	preliminary	préliminaires	d'Entremont		Chris	Conservative	Conservateur	22104	50.3	0	43986
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Cormier		Serge	Liberal	Libéral	27831	64.8	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Doiron		Richer	Free Party Canada	Parti Libre Canada	549	1.3	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Hébert		Mélissa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4900	11.4	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Johns		Rachel	Green Party	Parti Vert	1203	2.8	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Langford		Kenneth Edward	People's Party - PPC	Parti populaire - PPC	2541	5.9	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	preliminary	préliminaires	Lanteigne		Jean-Paul	Conservative	Conservateur	5916	13.8	0	42940
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Cormier		Serge	Liberal	Libéral	27817	64.8	511	43433
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Doiron		Richer	Free Party Canada	Parti Libre Canada	549	1.3	511	43433
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Hébert		Mélissa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4906	11.4	511	43433
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Johns		Rachel	Green Party	Parti Vert	1203	2.8	511	43433
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Langford		Kenneth Edward	People's Party - PPC	Parti populaire - PPC	2531	5.9	511	43433
13001	Acadie--Bathurst	Acadie--Bathurst	validated	validés	Lanteigne		Jean-Paul	Conservative	Conservateur	5916	13.8	511	43433
13002	Beauséjour	Beauséjour	preliminary	préliminaires	Girouard		Stella Anna	Green Party	Parti Vert	2797	5.7	0	49238
13002	Beauséjour	Beauséjour	preliminary	préliminaires	Godfrey		Evelyne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5479	11.1	0	49238
13002	Beauséjour	Beauséjour	preliminary	préliminaires	LeBlanc		Dominic	Liberal	Libéral	27313	55.5	0	49238
13002	Beauséjour	Beauséjour	preliminary	préliminaires	Minor		Jack	People's Party - PPC	Parti populaire - PPC	3723	7.6	0	49238
13002	Beauséjour	Beauséjour	preliminary	préliminaires	Mitchell		Shelly	Conservative	Conservateur	9535	19.4	0	49238
13002	Beauséjour	Beauséjour	preliminary	préliminaires	Sauriol Chiasson		Isabelle	Free Party Canada	Parti Libre Canada	391	.8	0	49238
13003	Fredericton	Fredericton	preliminary	préliminaires	Atwin		Jenica	Liberal	Libéral	16316	37	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	Johnson		Andrea	Conservative	Conservateur	15814	35.9	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	Kirby		Brandon	Libertarian	Libertarien	234	.5	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	O'Byrne		Nicole	Green Party	Parti Vert	5666	12.9	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	Oldenburg		Shawn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5564	12.6	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	Patterson		June	Communist	Communiste	158	.4	0	44062
13003	Fredericton	Fredericton	preliminary	préliminaires	Smith		Jen	Independent	Indépendant(e)	310	.7	0	44062
13003	Fredericton	Fredericton	validated	validés	Atwin		Jenica	Liberal	Libéral	16316	37	301	44363
13003	Fredericton	Fredericton	validated	validés	Johnson		Andrea	Conservative	Conservateur	15814	35.9	301	44363
13003	Fredericton	Fredericton	validated	validés	Kirby		Brandon	Libertarian	Libertarien	234	.5	301	44363
13003	Fredericton	Fredericton	validated	validés	O'Byrne		Nicole	Green Party	Parti Vert	5666	12.9	301	44363
13003	Fredericton	Fredericton	validated	validés	Oldenburg		Shawn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5564	12.6	301	44363
13003	Fredericton	Fredericton	validated	validés	Patterson		June	Communist	Communiste	158	.4	301	44363
13003	Fredericton	Fredericton	validated	validés	Smith		Jen	Independent	Indépendant(e)	310	.7	301	44363
13004	Fundy Royal	Fundy Royal	preliminary	préliminaires	Dykeman		Whitney	Liberal	Libéral	11172	25	0	44738
13004	Fundy Royal	Fundy Royal	preliminary	préliminaires	Floyd		Josh	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6295	14.1	0	44738
13004	Fundy Royal	Fundy Royal	preliminary	préliminaires	Moore		Rob	Conservative	Conservateur	21561	48.2	0	44738
13004	Fundy Royal	Fundy Royal	preliminary	préliminaires	Thompson		Tim	Green Party	Parti Vert	2236	5	0	44738
13004	Fundy Royal	Fundy Royal	preliminary	préliminaires	Wheeler		Wayne	People's Party - PPC	Parti populaire - PPC	3474	7.8	0	44738
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	Arseneault		René	Liberal	Libéral	16854	55.2	0	30522
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	Beaulieu		Shawn	Conservative	Conservateur	7857	25.7	0	30522
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	Berube		Louis	Free Party Canada	Parti Libre Canada	1277	4.2	0	30522
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	Blaevoet		Rebecca	Green Party	Parti Vert	786	2.6	0	30522
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	MacDonald		Elizabeth	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1859	6.1	0	30522
13005	Madawaska--Restigouche	Madawaska--Restigouche	preliminary	préliminaires	Mercier		Nancy	People's Party - PPC	Parti populaire - PPC	1889	6.2	0	30522
13006	Miramichi--Grand Lake	Miramichi--Grand Lake	preliminary	préliminaires	Deitch		Patty	Green Party	Parti Vert	1393	4.3	0	32505
13006	Miramichi--Grand Lake	Miramichi--Grand Lake	preliminary	préliminaires	Harris		Lisa	Liberal	Libéral	12762	39.3	0	32505
13006	Miramichi--Grand Lake	Miramichi--Grand Lake	preliminary	préliminaires	Nowlan		Ron	People's Party - PPC	Parti populaire - PPC	1835	5.6	0	32505
13006	Miramichi--Grand Lake	Miramichi--Grand Lake	preliminary	préliminaires	Potter		Bruce	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2294	7.1	0	32505
13006	Miramichi--Grand Lake	Miramichi--Grand Lake	preliminary	préliminaires	Stewart		Jake	Conservative	Conservateur	14221	43.8	0	32505
13007	Moncton--Riverview--Dieppe	Moncton--Riverview--Dieppe	preliminary	préliminaires	Carrier		Lorilee	People's Party - PPC	Parti populaire - PPC	2899	6.3	0	45840
13007	Moncton--Riverview--Dieppe	Moncton--Riverview--Dieppe	preliminary	préliminaires	Dunn		Richard	Green Party	Parti Vert	2231	4.9	0	45840
13007	Moncton--Riverview--Dieppe	Moncton--Riverview--Dieppe	preliminary	préliminaires	Landry		Serge	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7804	17	0	45840
13007	Moncton--Riverview--Dieppe	Moncton--Riverview--Dieppe	preliminary	préliminaires	Petitpas Taylor		Ginette	Liberal	Libéral	22179	48.4	0	45840
13007	Moncton--Riverview--Dieppe	Moncton--Riverview--Dieppe	preliminary	préliminaires	Smith		Darlene	Conservative	Conservateur	10727	23.4	0	45840
13008	New Brunswick Southwest	Nouveau-Brunswick-Sud-Ouest	preliminary	préliminaires	Hickey		Jason	Liberal	Libéral	8797	24	0	36668
13008	New Brunswick Southwest	Nouveau-Brunswick-Sud-Ouest	preliminary	préliminaires	Reist		John	Green Party	Parti Vert	1588	4.3	0	36668
13008	New Brunswick Southwest	Nouveau-Brunswick-Sud-Ouest	preliminary	préliminaires	Sarty		Meryl	People's Party - PPC	Parti populaire - PPC	3080	8.4	0	36668
13008	New Brunswick Southwest	Nouveau-Brunswick-Sud-Ouest	preliminary	préliminaires	Warren		Richard Trevor	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4892	13.3	0	36668
13008	New Brunswick Southwest	Nouveau-Brunswick-Sud-Ouest	preliminary	préliminaires	Williamson		John	Conservative	Conservateur	18311	49.9	0	36668
13009	Saint John--Rothesay	Saint John--Rothesay	preliminary	préliminaires	Long		Wayne	Liberal	Libéral	17371	46.4	0	37456
13009	Saint John--Rothesay	Saint John--Rothesay	preliminary	préliminaires	McAllister		Ann	Green Party	Parti Vert	948	2.5	0	37456
13009	Saint John--Rothesay	Saint John--Rothesay	preliminary	préliminaires	Norton		Mel	Conservative	Conservateur	12315	32.9	0	37456
13009	Saint John--Rothesay	Saint John--Rothesay	preliminary	préliminaires	Paulin		Don	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4821	12.9	0	37456
13009	Saint John--Rothesay	Saint John--Rothesay	preliminary	préliminaires	Pereira		Nicholas	People's Party - PPC	Parti populaire - PPC	2001	5.3	0	37456
13009	Saint John--Rothesay	Saint John--Rothesay	validated	validés	Long		Wayne	Liberal	Libéral	17375	46.4	214	37664
13009	Saint John--Rothesay	Saint John--Rothesay	validated	validés	McAllister		Ann	Green Party	Parti Vert	948	2.5	214	37664
13009	Saint John--Rothesay	Saint John--Rothesay	validated	validés	Norton		Mel	Conservative	Conservateur	12315	32.9	214	37664
13009	Saint John--Rothesay	Saint John--Rothesay	validated	validés	Paulin		Don	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4816	12.9	214	37664
13009	Saint John--Rothesay	Saint John--Rothesay	validated	validés	Pereira		Nicholas	People's Party - PPC	Parti populaire - PPC	1996	5.3	214	37664
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	Bragdon		Richard	Conservative	Conservateur	17537	51	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	LaForest		Steven J	Independent	Indépendant(e)	398	1.2	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	Martin		Anthony	Green Party	Parti Vert	1657	4.8	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	Miller		Meriet Gray	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3656	10.6	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	Robinson		Cully	Liberal	Libéral	8222	23.9	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	preliminary	préliminaires	Waggoner		Daniel Joseph	People's Party - PPC	Parti populaire - PPC	2928	8.5	0	34398
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	Bragdon		Richard	Conservative	Conservateur	17536	51	291	34691
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	LaForest		Steven J	Independent	Indépendant(e)	398	1.2	291	34691
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	Martin		Anthony	Green Party	Parti Vert	1657	4.8	291	34691
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	Miller		Meriet Gray	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3656	10.6	291	34691
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	Robinson		Cully	Liberal	Libéral	8223	23.9	291	34691
13010	Tobique--Mactaquac	Tobique--Mactaquac	validated	validés	Waggoner		Daniel Joseph	People's Party - PPC	Parti populaire - PPC	2930	8.5	291	34691
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Brazeau		Cédric	Free Party Canada	Parti Libre Canada	589	2.1	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Bérubé		Sylvie	Bloc Québécois	Bloc Québécois	10768	38	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Cloutier		Michaël	People's Party - PPC	Parti populaire - PPC	1077	3.8	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Corriveau		Steve	Conservative	Conservateur	4500	15.9	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Kistabish		Lise	Liberal	Libéral	7324	25.9	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Lameboy		Pauline	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3307	11.7	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Levesque		Jimmy	Marijuana Party	Parti Marijuana	324	1.1	0	28327
24001	Abitibi--Baie-James--Nunavik--Eeyou	Abitibi--Baie-James--Nunavik--Eeyou	preliminary	préliminaires	Pilon		Didier	Green Party	Parti Vert	438	1.5	0	28327
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Chartrand		Martin	Green Party	Parti Vert	748	1.6	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Gonzalez Venegas		Luis Henry	Conservative	Conservateur	5339	11.7	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Goulet		Dany	Free Party Canada	Parti Libre Canada	857	1.9	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Lacroix		Eric	People's Party - PPC	Parti populaire - PPC	1536	3.4	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Legault-Lacasse		William	Liberal	Libéral	11013	24.1	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Lemire		Sébastien	Bloc Québécois	Bloc Québécois	23125	50.6	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Lirette		Joël	Parti Rhinocéros Party	Parti Rhinocéros Party	276	.6	0	45670
24002	Abitibi--Témiscamingue	Abitibi--Témiscamingue	preliminary	préliminaires	Stewart		Bethany	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2776	6.1	0	45670
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Chaabi		Ghada	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5836	11.6	0	50426
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Chevalier		Manon	People's Party - PPC	Parti populaire - PPC	1315	2.6	0	50426
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Duarte		Steven	Conservative	Conservateur	4249	8.4	0	50426
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Joli-Coeur		Luc	Green Party	Parti Vert	1511	3	0	50426
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Joly		Mélanie	Liberal	Libéral	26400	52.4	0	50426
24003	Ahuntsic-Cartierville	Ahuntsic-Cartierville	preliminary	préliminaires	Simonyan		Anna	Bloc Québécois	Bloc Québécois	11115	22	0	50426
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	Cappelletti		Dwayne	Free Party Canada	Parti Libre Canada	1467	2.9	0	51256
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	Corneillet		Pierre-Alexandre	Green Party	Parti Vert	940	1.8	0	51256
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	D'Anello		Angiolino	Conservative	Conservateur	6988	13.6	0	51256
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	Dion		Isabel	Bloc Québécois	Bloc Québécois	13399	26.1	0	51256
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	Iacono		Angelo	Liberal	Libéral	24516	47.8	0	51256
24004	Alfred-Pellan	Alfred-Pellan	preliminary	préliminaires	Mercer		Cindy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3946	7.7	0	51256
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Destroismaisons		Yves	Bloc Québécois	Bloc Québécois	17834	35.2	0	50645
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Lauzon		Stéphane	Liberal	Libéral	19366	38.2	0	50645
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Louis-Seize		Marie	Conservative	Conservateur	6549	12.9	0	50645
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Lynes		Paul	Free Party Canada	Parti Libre Canada	746	1.5	0	50645
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Vachon		Marc	People's Party - PPC	Parti populaire - PPC	2765	5.5	0	50645
24005	Argenteuil--La Petite-Nation	Argenteuil--La Petite-Nation	preliminary	préliminaires	Welt		Michel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3385	6.7	0	50645
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Barnabé		Eric	People's Party - PPC	Parti populaire - PPC	969	2.9	0	33099
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Dumas		Germain	Conservative	Conservateur	2912	8.8	0	33099
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Gendron		Mélanie	Free Party Canada	Parti Libre Canada	826	2.5	0	33099
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Marchand		Christel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1521	4.6	0	33099
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Michaud		Kristina	Bloc Québécois	Bloc Québécois	19776	59.7	0	33099
24006	Avignon--La Mitis--Matane--Matapédia	Avignon--La Mitis--Matane--Matapédia	preliminary	préliminaires	Savoie		Louis-Éric	Liberal	Libéral	7095	21.4	0	33099
24007	Beauce	Beauce	preliminary	préliminaires	Bernier		Maxime	People's Party - PPC	Parti populaire - PPC	10347	18.2	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Giguère		Chantale	Free Party Canada	Parti Libre Canada	1099	1.9	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Jacques-Côté		François	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1637	2.9	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Langlois		Philippe-Alexandre	Liberal	Libéral	6992	12.3	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Lehoux		Richard	Conservative	Conservateur	27488	48.3	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Tanguay		Sébastien	Marijuana Party	Parti Marijuana	206	.4	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Thibodeau		Solange	Bloc Québécois	Bloc Québécois	8606	15.1	0	56861
24007	Beauce	Beauce	preliminary	préliminaires	Wisniowski		Andrzej	Green Party	Parti Vert	486	.9	0	56861
24007	Beauce	Beauce	validated	validés	Bernier		Maxime	People's Party - PPC	Parti populaire - PPC	10362	18.2	895	57875
24007	Beauce	Beauce	validated	validés	Giguère		Chantale	Free Party Canada	Parti Libre Canada	1096	1.9	895	57875
24007	Beauce	Beauce	validated	validés	Jacques-Côté		François	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1654	2.9	895	57875
24007	Beauce	Beauce	validated	validés	Langlois		Philippe-Alexandre	Liberal	Libéral	7018	12.3	895	57875
24007	Beauce	Beauce	validated	validés	Lehoux		Richard	Conservative	Conservateur	27514	48.3	895	57875
24007	Beauce	Beauce	validated	validés	Tanguay		Sébastien	Marijuana Party	Parti Marijuana	206	.4	895	57875
24007	Beauce	Beauce	validated	validés	Thibodeau		Solange	Bloc Québécois	Bloc Québécois	8644	15.2	895	57875
24007	Beauce	Beauce	validated	validés	Wisniowski		Andrzej	Green Party	Parti Vert	486	.9	895	57875
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Clarke		Alupa	Conservative	Conservateur	14092	29	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Elhak		Dalila	Green Party	Parti Vert	1078	2.2	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Garon		Camille Esther	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5055	10.4	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Gingras		Ann	Liberal	Libéral	12355	25.4	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Moreau		Claude	Marxist-Leninist	Marxiste-Léniniste	119	.2	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Verret		Lyne	Free Party Canada	Parti Libre Canada	737	1.5	0	48552
24008	Beauport--Limoilou	Beauport--Limoilou	preliminary	préliminaires	Vignola		Julie	Bloc Québécois	Bloc Québécois	15116	31.1	0	48552
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Blanchette		André	Free Party Canada	Parti Libre Canada	1215	2.4	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Caisse		Yanick	Conservative	Conservateur	8404	16.8	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Gauvin		Catherine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2531	5.1	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Pettersen		Eric	People's Party - PPC	Parti populaire - PPC	1224	2.4	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Plamondon		Louis	Bloc Québécois	Bloc Québécois	27403	54.8	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Rochefort		Nathalie	Liberal	Libéral	8451	16.9	0	49998
24009	Bécancour--Nicolet--Saurel	Bécancour--Nicolet--Saurel	preliminary	préliminaires	Turcotte		David	Green Party	Parti Vert	770	1.5	0	49998
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Arcand		Raymond	Free Party Canada	Parti Libre Canada	1802	2.9	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Gagnon Gauthier		Marie-Philippe	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3183	5	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Khuon		Chamroeun	Independent	Indépendant(e)	306	.5	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Lefebvre		Hélène	Green Party	Parti Vert	913	1.4	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Richard		Marie-Christine	Bloc Québécois	Bloc Québécois	14670	23.2	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Vaillancourt		Daniel	Liberal	Libéral	10075	15.9	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	preliminary	préliminaires	Vien		Dominique	Conservative	Conservateur	32259	51	0	63208
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Arcand		Raymond	Free Party Canada	Parti Libre Canada	1793	2.8	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Gagnon Gauthier		Marie-Philippe	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3184	5	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Khuon		Chamroeun	Independent	Indépendant(e)	306	.5	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Lefebvre		Hélène	Green Party	Parti Vert	918	1.5	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Richard		Marie-Christine	Bloc Québécois	Bloc Québécois	14669	23.2	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Vaillancourt		Daniel	Liberal	Libéral	10074	15.9	1138	64320
24010	Bellechasse--Les Etchemins--Lévis	Bellechasse--Les Etchemins--Lévis	validated	validés	Vien		Dominique	Conservative	Conservateur	32238	51	1138	64320
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Blanchet		Yves-François	Bloc Québécois	Bloc Québécois	34678	53.1	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Blondin		Michel	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	163	.2	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Béliveau		Marie-Josée	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5525	8.5	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Ejov		Danila	People's Party - PPC	Parti populaire - PPC	1344	2.1	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Grimard		Mario	Free Party Canada	Parti Libre Canada	845	1.3	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Gélinas Larrain		Fabrice	Green Party	Parti Vert	1294	2	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Hamel		Marie-Chantal	Liberal	Libéral	15460	23.7	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Robichaud		Stéphane	Conservative	Conservateur	5622	8.6	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Thibault-Vincent		Thomas	Parti Rhinocéros Party	Parti Rhinocéros Party	185	.3	0	65307
24011	Beloeil--Chambly	Beloeil--Chambly	preliminary	préliminaires	Vachon		Benjamin	Marijuana Party	Parti Marijuana	191	.3	0	65307
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Bellemare		Alexandre	Liberal	Libéral	8403	15.3	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Brosseau		Ruth Ellen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	18351	33.4	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Brown		Denis	Free Party Canada	Parti Libre Canada	531	1	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Lamirande		Steven	Marijuana Party	Parti Marijuana	199	.4	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Perron		Yves	Bloc Québécois	Bloc Québécois	19339	35.2	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Requilé		Laurence	Green Party	Parti Vert	548	1	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Soulières		Léo	Conservative	Conservateur	6007	10.9	0	54874
24012	Berthier--Maskinongé	Berthier--Maskinongé	preliminary	préliminaires	Sénécal		Geneviève	People's Party - PPC	Parti populaire - PPC	1496	2.7	0	54874
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Aubé		Vincent	People's Party - PPC	Parti populaire - PPC	1388	2.7	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Ayoub		Ramez	Liberal	Libéral	18398	35.2	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Bissonnette		Marc	Conservative	Conservateur	5752	11	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Chabot		Louise	Bloc Québécois	Bloc Québécois	21520	41.2	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Paré-Poupart		Simon	Green Party	Parti Vert	1020	2	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Soumaoro		Julienne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3816	7.3	0	52261
24013	Thérèse-De Blainville	Thérèse-De Blainville	preliminary	préliminaires	Tassignon		Peggy	Free Party Canada	Parti Libre Canada	367	.7	0	52261
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Barsalou-Duval		Xavier	Bloc Québécois	Bloc Québécois	30009	54.3	0	55282
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Blais		Alexandre	People's Party - PPC	Parti populaire - PPC	1112	2	0	55282
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Boisvert		Carole	Free Party Canada	Parti Libre Canada	779	1.4	0	55282
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Girard		Louis-Gabriel	Liberal	Libéral	14279	25.8	0	55282
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Leprohon		Martin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4231	7.7	0	55282
24014	Pierre-Boucher--Les Patriotes--Verchères	Pierre-Boucher--Les Patriotes--Verchères	preliminary	préliminaires	Painchaud		Jérôme	Conservative	Conservateur	4872	8.8	0	55282
24015	Bourassa	Bourassa	preliminary	préliminaires	Dia		Ardo	Bloc Québécois	Bloc Québécois	6907	18.9	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Dubourg		Emmanuel	Liberal	Libéral	22003	60.1	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Lavoie		Michel	People's Party - PPC	Parti populaire - PPC	1349	3.7	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Perrone		Nathe	Green Party	Parti Vert	687	1.9	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Ponari		Nicholas	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2928	8	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Prairie		Michel	Independent	Indépendant(e)	151	.4	0	36612
24015	Bourassa	Bourassa	preliminary	préliminaires	Sykes		Ilyasa	Conservative	Conservateur	2587	7.1	0	36612
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Alarie		Marilou	Bloc Québécois	Bloc Québécois	21288	34.6	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Corcos		Michelle	Green Party	Parti Vert	1466	2.4	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Cotton		Lawrence	VCP	CAC	216	.4	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Desjardins		Dany	Independent	Indépendant(e)	145	.2	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Duhamel		Vincent	Conservative	Conservateur	9961	16.2	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Lefebvre		Susanne	Christian Heritage Party	Parti de l'Héritage Chrétien	133	.2	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Panton		Andrew	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3827	6.2	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Richard		Maryse	Free Party Canada	Parti Libre Canada	961	1.6	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	St-Onge		Pascale	Liberal	Libéral	21474	34.9	0	61453
24016	Brome--Missisquoi	Brome--Missisquoi	preliminary	préliminaires	Stogowski		Alexis	People's Party - PPC	Parti populaire - PPC	1982	3.2	0	61453
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Alves		Marcos	Conservative	Conservateur	6308	11.9	0	52979
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Audet		Marc	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5517	10.4	0	52979
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Desgagné		Marie-Laurence	Bloc Québécois	Bloc Québécois	10640	20.1	0	52979
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Hu		Engineer-Ingénieur	Free Party Canada	Parti Libre Canada	593	1.1	0	52979
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Mendès		Alexandra	Liberal	Libéral	28631	54	0	52979
24017	Brossard--Saint-Lambert	Brossard--Saint-Lambert	preliminary	préliminaires	Ross		Brenda	People's Party - PPC	Parti populaire - PPC	1290	2.4	0	52979
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Blanchette-Joncas		Maxime	Bloc Québécois	Bloc Québécois	20653	49.1	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Bureau-Civil		Noémi	Independent	Indépendant(e)	1471	3.5	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Gagnon		France	Conservative	Conservateur	5569	13.2	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Hodges		Megan	Parti Rhinocéros Party	Parti Rhinocéros Party	192	.5	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Lajoie		Léonie	Liberal	Libéral	10437	24.8	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Lajoie		Sylvain	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2637	6.3	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Raymond		Michel	Free Party Canada	Parti Libre Canada	432	1	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	preliminary	préliminaires	Tardy		Jean	People's Party - PPC	Parti populaire - PPC	699	1.7	0	42090
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Blanchette-Joncas		Maxime	Bloc Québécois	Bloc Québécois	20657	49	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Bureau-Civil		Noémi	Independent	Indépendant(e)	1467	3.5	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Gagnon		France	Conservative	Conservateur	5569	13.2	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Hodges		Megan	Parti Rhinocéros Party	Parti Rhinocéros Party	192	.5	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Lajoie		Léonie	Liberal	Libéral	10482	24.9	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Lajoie		Sylvain	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2641	6.3	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Raymond		Michel	Free Party Canada	Parti Libre Canada	430	1	881	43019
24018	Rimouski-Neigette--Témiscouata--Les Basques	Rimouski-Neigette--Témiscouata--Les Basques	validated	validés	Tardy		Jean	People's Party - PPC	Parti populaire - PPC	700	1.7	881	43019
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Coly		René-Paul	Liberal	Libéral	11416	19.8	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Cyr		Wayne	People's Party - PPC	Parti populaire - PPC	1296	2.2	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Lacroix		Michel Marc	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3446	6	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Lamontagne		Marie-Christine	Bloc Québécois	Bloc Québécois	14407	25	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Palardy-Dion		Jacques	Green Party	Parti Vert	972	1.7	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Paul-Hus		Pierre	Conservative	Conservateur	25633	44.5	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	preliminary	préliminaires	Pelletier		Daniel	Free Party Canada	Parti Libre Canada	468	.8	0	57638
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Coly		René-Paul	Liberal	Libéral	11326	19.7	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Cyr		Wayne	People's Party - PPC	Parti populaire - PPC	1296	2.3	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Lacroix		Michel Marc	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3446	6	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Lamontagne		Marie-Christine	Bloc Québécois	Bloc Québécois	14237	24.8	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Palardy-Dion		Jacques	Green Party	Parti Vert	972	1.7	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Paul-Hus		Pierre	Conservative	Conservateur	25623	44.7	1136	58485
24019	Charlesbourg--Haute-Saint-Charles	Charlesbourg--Haute-Saint-Charles	validated	validés	Pelletier		Daniel	Free Party Canada	Parti Libre Canada	449	.8	1136	58485
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Amyot		Frédéric	Green Party	Parti Vert	769	1.5	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Bernier		Alexandra	Liberal	Libéral	10296	20.6	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Desbiens		Caroline	Bloc Québécois	Bloc Québécois	19212	38.5	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Du Verle		Frédéric	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2239	4.5	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Laplante		Chantal	Free Party Canada	Parti Libre Canada	448	.9	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Laprise		Véronique	Conservative	Conservateur	15826	31.7	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Lefrançois		Jenniefer	People's Party - PPC	Parti populaire - PPC	891	1.8	0	49917
24020	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	Beauport-Côte-de-Beaupré-Île d'Orléans-Charlevoix	preliminary	préliminaires	Lépine		Vicky	Independent	Indépendant(e)	236	.5	0	49917
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Benoit		Jeff	People's Party - PPC	Parti populaire - PPC	1870	3.8	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Bournaki		Pierre	Conservative	Conservateur	5534	11.3	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Gagnon		Marc	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	295	.6	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Lafrance		André	Free Party Canada	Parti Libre Canada	449	.9	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	O'Hara		Patrick	Bloc Québécois	Bloc Québécois	18368	37.4	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Olivier		Frédéric	Green Party	Parti Vert	804	1.6	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Shanahan		Brenda	Liberal	Libéral	17762	36.1	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	preliminary	préliminaires	Wolker		Hannah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4089	8.3	0	49171
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Benoit		Jeff	People's Party - PPC	Parti populaire - PPC	1836	3.8	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Bournaki		Pierre	Conservative	Conservateur	5534	11.4	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Gagnon		Marc	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	277	.6	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Lafrance		André	Free Party Canada	Parti Libre Canada	449	.9	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	O'Hara		Patrick	Bloc Québécois	Bloc Québécois	18028	37	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Olivier		Frédéric	Green Party	Parti Vert	804	1.6	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Shanahan		Brenda	Liberal	Libéral	17742	36.4	964	49713
24021	Châteauguay--Lacolle	Châteauguay--Lacolle	validated	validés	Wolker		Hannah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4079	8.4	964	49713
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Bouchard		Julie	Bloc Québécois	Bloc Québécois	14096	33.4	0	42224
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Duplain		Jean	Liberal	Libéral	7746	18.3	0	42224
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Laporte		Yves	Green Party	Parti Vert	489	1.2	0	42224
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Martel		Richard	Conservative	Conservateur	17291	41	0	42224
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Raymond		Ismaël	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1952	4.6	0	42224
24022	Chicoutimi--Le Fjord	Chicoutimi--Le Fjord	preliminary	préliminaires	Voyer		Jimmy	People's Party - PPC	Parti populaire - PPC	650	1.5	0	42224
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Allen		Geneva	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4277	7.4	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Bibeau		Marie-Claude	Liberal	Libéral	21188	36.7	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Bourassa		Yves	People's Party - PPC	Parti populaire - PPC	2167	3.7	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Bresse		Nathalie	Bloc Québécois	Bloc Québécois	17688	30.6	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Dodier		Sylvain	Green Party	Parti Vert	1626	2.8	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Gendron		Déitane	Free Party Canada	Parti Libre Canada	576	1	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Longpré		Sylvain	Independent	Indépendant(e)	187	.3	0	57796
24023	Compton--Stanstead	Compton--Stanstead	preliminary	préliminaires	Tremblay		Pierre	Conservative	Conservateur	10087	17.5	0	57796
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Bazelais		Jude	Conservative	Conservateur	5754	12	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Dhillon		Anju	Liberal	Libéral	25233	52.4	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Jenneau		Cloé Rose	Bloc Québécois	Bloc Québécois	7542	15.7	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Mariani		Laura	Green Party	Parti Vert	1351	2.8	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Ngamaleu Teumeni		Fabiola	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6241	13	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	preliminary	préliminaires	Patterson		Michael	People's Party - PPC	Parti populaire - PPC	2020	4.2	0	48141
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Bazelais		Jude	Conservative	Conservateur	5754	12	786	48927
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Dhillon		Anju	Liberal	Libéral	25233	52.4	786	48927
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Jenneau		Cloé Rose	Bloc Québécois	Bloc Québécois	7542	15.7	786	48927
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Mariani		Laura	Green Party	Parti Vert	1351	2.8	786	48927
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Ngamaleu Teumeni		Fabiola	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6241	13	786	48927
24024	Dorval--Lachine--LaSalle	Dorval--Lachine--LaSalle	validated	validés	Patterson		Michael	People's Party - PPC	Parti populaire - PPC	2020	4.2	786	48927
24025	Drummond	Drummond	preliminary	préliminaires	Berri		Mustapha	Liberal	Libéral	9614	18.8	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Champoux		Martin	Bloc Québécois	Bloc Québécois	23819	46.6	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Choquette		François	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5723	11.2	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Clermont		Nathalie	Conservative	Conservateur	9166	17.9	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Joyal		Josée	Free Party Canada	Parti Libre Canada	1732	3.4	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Marcoux		Sylvain	No Affiliation	Aucune appartenance	419	.8	0	51147
24025	Drummond	Drummond	preliminary	préliminaires	Munger		Lucas	Animal Protection Party	Parti Protection Animaux	674	1.3	0	51147
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Bernatchez		Guy	Bloc Québécois	Bloc Québécois	14480	39.3	0	36835
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Lebouthillier		Diane	Liberal	Libéral	17097	46.4	0	36835
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Leduc		Monique	Free Party Canada	Parti Libre Canada	282	.8	0	36835
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Phung		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1359	3.7	0	36835
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Pigeon		Jean-Pierre	Conservative	Conservateur	2996	8.1	0	36835
24026	Gaspésie--Les Îles-de-la-Madeleine	Gaspésie--Les Îles-de-la-Madeleine	preliminary	préliminaires	Rioux		Christian	People's Party - PPC	Parti populaire - PPC	621	1.7	0	36835
24027	Gatineau	Gatineau	preliminary	préliminaires	Bernard		Joel E.	Conservative	Conservateur	5708	10.9	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Grenier		Sébastien	Parti Rhinocéros Party	Parti Rhinocéros Party	180	.3	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Jemmah		Rachid	Green Party	Parti Vert	781	1.5	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Lavoie		Luc	Free Party Canada	Parti Libre Canada	548	1	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	MacKinnon		Steven	Liberal	Libéral	26162	49.9	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Nadeau		Geneviève	Bloc Québécois	Bloc Québécois	12236	23.3	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Rengel		Fernanda	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4501	8.6	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Saint-Jean		Mathieu	People's Party - PPC	Parti populaire - PPC	2279	4.3	0	52459
24027	Gatineau	Gatineau	preliminary	préliminaires	Soublière		Pierre	Marxist-Leninist	Marxiste-Léniniste	64	.1	0	52459
24027	Gatineau	Gatineau	validated	validés	Bernard		Joel E.	Conservative	Conservateur	5752	11	818	53315
24027	Gatineau	Gatineau	validated	validés	Grenier		Sébastien	Parti Rhinocéros Party	Parti Rhinocéros Party	178	.3	818	53315
24027	Gatineau	Gatineau	validated	validés	Jemmah		Rachid	Green Party	Parti Vert	783	1.5	818	53315
24027	Gatineau	Gatineau	validated	validés	Lavoie		Luc	Free Party Canada	Parti Libre Canada	411	.8	818	53315
24027	Gatineau	Gatineau	validated	validés	MacKinnon		Steven	Liberal	Libéral	26267	50	818	53315
24027	Gatineau	Gatineau	validated	validés	Nadeau		Geneviève	Bloc Québécois	Bloc Québécois	12278	23.4	818	53315
24027	Gatineau	Gatineau	validated	validés	Rengel		Fernanda	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4508	8.6	818	53315
24027	Gatineau	Gatineau	validated	validés	Saint-Jean		Mathieu	People's Party - PPC	Parti populaire - PPC	2264	4.3	818	53315
24027	Gatineau	Gatineau	validated	validés	Soublière		Pierre	Marxist-Leninist	Marxiste-Léniniste	56	.1	818	53315
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Calle Cabrera		Aime	Conservative	Conservateur	2186	4.6	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Dandenault		Christine	Marxist-Leninist	Marxiste-Léniniste	82	.2	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Doucet-Beauchamp		Marc-André	People's Party - PPC	Parti populaire - PPC	1070	2.3	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Lavarenne		Zachary	Green Party	Parti Vert	958	2	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Marchand		Simon	Bloc Québécois	Bloc Québécois	14866	31.5	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Martinez Ferrada		Soraya	Liberal	Libéral	17953	38	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Paquette		Michelle	Communist	Communiste	118	.2	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Roy-Goyette		Catheryn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9751	20.6	0	47221
24028	Hochelaga	Hochelaga	preliminary	préliminaires	Smithee		Alan	Parti Rhinocéros Party	Parti Rhinocéros Party	237	.5	0	47221
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Ayala		Paulina	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3537	7.3	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Croteau		Guy	Conservative	Conservateur	5096	10.5	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Deltorto-Russell		Bianca	Green Party	Parti Vert	738	1.5	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Le Seigle		Yves	Marxist-Leninist	Marxiste-Léniniste	89	.2	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Lévesque-Marin		Charlotte	Bloc Québécois	Bloc Québécois	7908	16.3	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Miranda		Lucilia	People's Party - PPC	Parti populaire - PPC	2023	4.2	0	48452
24029	Honoré-Mercier	Honoré-Mercier	preliminary	préliminaires	Rodriguez		Pablo	Liberal	Libéral	29061	60	0	48452
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Dickins		Catherine	Independent	Indépendant(e)	144	.3	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Fergus		Greg	Liberal	Libéral	26893	52.5	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Fleury		Eric	People's Party - PPC	Parti populaire - PPC	1873	3.7	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Gendron		Samuel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6486	12.7	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Gnocchini-Messier		Simon	Green Party	Parti Vert	1461	2.9	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Lafleur		Josée	Free Party Canada	Parti Libre Canada	378	.7	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	LeBlanc		Mike	Parti Rhinocéros Party	Parti Rhinocéros Party	227	.4	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Perion		Sandrine	Conservative	Conservateur	5514	10.8	0	51235
24030	Hull--Aylmer	Hull--Aylmer	preliminary	préliminaires	Provost		Simon	Bloc Québécois	Bloc Québécois	8259	16.1	0	51235
24031	Joliette	Joliette	preliminary	préliminaires	Beaudet		Alexis	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3100	5.5	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Bourgeois		Michel	Liberal	Libéral	12731	22.7	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Coutu		Manon	Free Party Canada	Parti Libre Canada	992	1.8	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Leclerc		Maxime	People's Party - PPC	Parti populaire - PPC	1771	3.2	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Materne		Roger	Conservative	Conservateur	5314	9.5	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Poirier		Érica	Green Party	Parti Vert	1126	2	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Ste-Marie		Gabriel	Bloc Québécois	Bloc Québécois	30913	55	0	56198
24031	Joliette	Joliette	preliminary	préliminaires	Théoret		Yanick	Marijuana Party	Parti Marijuana	251	.4	0	56198
24032	Jonquière	Jonquière	preliminary	préliminaires	Bégin		Stéphane	Liberal	Libéral	9529	20.9	0	45629
24032	Jonquière	Jonquière	preliminary	préliminaires	Bélanger		Line	Parti Rhinocéros Party	Parti Rhinocéros Party	372	.8	0	45629
24032	Jonquière	Jonquière	preliminary	préliminaires	Gravel		Louise	Conservative	Conservateur	13323	29.2	0	45629
24032	Jonquière	Jonquière	preliminary	préliminaires	Ruel		Marieve	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2625	5.8	0	45629
24032	Jonquière	Jonquière	preliminary	préliminaires	Simard		Mario	Bloc Québécois	Bloc Québécois	19036	41.7	0	45629
24032	Jonquière	Jonquière	preliminary	préliminaires	Yelle		Marie-Josée	Green Party	Parti Vert	744	1.6	0	45629
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Anania		Massimo	Conservative	Conservateur	3441	6.7	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Beaulieu		Mario	Bloc Québécois	Bloc Québécois	23835	46.5	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Desclin		Jonathan	People's Party - PPC	Parti populaire - PPC	1399	2.7	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Fadeu		Jonas	Liberal	Libéral	16480	32.1	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Falquet		Agnès	Free Party Canada	Parti Libre Canada	605	1.2	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Gervais		Charles Phillippe	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	221	.4	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Royer		Genevieve	Marxist-Leninist	Marxiste-Léniniste	170	.3	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	preliminary	préliminaires	Vallerand		Alexandre	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5124	10	0	51275
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Anania		Massimo	Conservative	Conservateur	3427	6.7	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Beaulieu		Mario	Bloc Québécois	Bloc Québécois	23835	46.7	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Desclin		Jonathan	People's Party - PPC	Parti populaire - PPC	1399	2.7	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Fadeu		Jonas	Liberal	Libéral	16508	32.3	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Falquet		Agnès	Free Party Canada	Parti Libre Canada	577	1.1	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Gervais		Charles Phillippe	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	221	.4	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Royer		Genevieve	Marxist-Leninist	Marxiste-Léniniste	159	.3	1239	52319
24033	La Pointe-de-l'Île	La Pointe-de-l'Île	validated	validés	Vallerand		Alexandre	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4954	9.7	1239	52319
24034	La Prairie	La Prairie	preliminary	préliminaires	Chouinard		Normand	Marxist-Leninist	Marxiste-Léniniste	98	.2	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	Desrochers		Caroline	Liberal	Libéral	20447	34.6	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	Fontaine		Ruth	People's Party - PPC	Parti populaire - PPC	1535	2.6	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	Hernandez		Victoria	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4338	7.3	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	Joannette		Barbara	Green Party	Parti Vert	1005	1.7	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	Therrien		Alain	Bloc Québécois	Bloc Québécois	25742	43.6	0	59042
24034	La Prairie	La Prairie	preliminary	préliminaires	des Greniers		Lise	Conservative	Conservateur	5877	10	0	59042
24035	Lac-Saint-Jean	Lac-Saint-Jean	preliminary	préliminaires	Bergeron		Serge	Conservative	Conservateur	12788	25.6	0	49996
24035	Lac-Saint-Jean	Lac-Saint-Jean	preliminary	préliminaires	Brunelle-Duceppe		Alexis	Bloc Québécois	Bloc Québécois	25351	50.7	0	49996
24035	Lac-Saint-Jean	Lac-Saint-Jean	preliminary	préliminaires	Chambers		Mathieu	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1723	3.4	0	49996
24035	Lac-Saint-Jean	Lac-Saint-Jean	preliminary	préliminaires	Thibault		Annie	Green Party	Parti Vert	823	1.6	0	49996
24035	Lac-Saint-Jean	Lac-Saint-Jean	preliminary	préliminaires	Étienne		Marjolaine	Liberal	Libéral	9311	18.6	0	49996
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Francis		Ann	Conservative	Conservateur	10570	19.1	0	55206
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Gray		Jonathan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7370	13.3	0	55206
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Kona-Mancini		Milan	Green Party	Parti Vert	1805	3.3	0	55206
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Lassy		Afia	People's Party - PPC	Parti populaire - PPC	1679	3	0	55206
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Lebeuf		Rémi	Bloc Québécois	Bloc Québécois	3005	5.4	0	55206
24036	Lac-Saint-Louis	Lac-Saint-Louis	preliminary	préliminaires	Scarpaleggia		Francis	Liberal	Libéral	30777	55.7	0	55206
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Antonin		Pascal	Free Party Canada	Parti Libre Canada	646	1.4	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Carter		Sarah	Green Party	Parti Vert	1439	3	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	De Lierre		Jason	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9156	19.3	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Fortin		JP	Communist	Communiste	232	.5	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Guérard		Raphaël	Bloc Québécois	Bloc Québécois	10636	22.4	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Lametti		David	Liberal	Libéral	20254	42.7	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Moran		Janina	Conservative	Conservateur	3520	7.4	0	47479
24037	LaSalle--Émard--Verdun	LaSalle--Émard--Verdun	preliminary	préliminaires	Walsh		Michel	People's Party - PPC	Parti populaire - PPC	1596	3.4	0	47479
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Baland		Eric-Abel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3905	6.1	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Evanko		Richard	People's Party - PPC	Parti populaire - PPC	2433	3.8	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Gaudreau		Marie-Hélène	Bloc Québécois	Bloc Québécois	32033	50	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Laframboise		Kathy	Conservative	Conservateur	6769	10.6	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Le Comte		Michel	Green Party	Parti Vert	1570	2.5	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Leclerc		Michel	Free Party Canada	Parti Libre Canada	1165	1.8	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Menassa		Antoine	Liberal	Libéral	15950	24.9	0	64003
24038	Laurentides--Labelle	Laurentides--Labelle	preliminary	préliminaires	Sorel		Jean-Noël	Independent	Indépendant(e)	178	.3	0	64003
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Guilbeault		Steven	Liberal	Libéral	16916	37.9	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Julien		Cyril	Independent	Indépendant(e)	74	.2	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Lachapelle		Serge	Marxist-Leninist	Marxiste-Léniniste	70	.2	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Lamontagne		Kimberly	Animal Protection Party	Parti Protection Animaux	199	.4	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Lavarenne		Jean-Michel	Green Party	Parti Vert	1002	2.2	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Machouf		Nimâ	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14674	32.9	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Michel		Marie-Eve-Lyne	Bloc Québécois	Bloc Québécois	9110	20.4	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Morin		Julie	Free Party Canada	Parti Libre Canada	239	.5	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Reich		Ronan	Conservative	Conservateur	1483	3.3	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Tanguay		Daniel	People's Party - PPC	Parti populaire - PPC	758	1.7	0	44619
24039	Laurier--Sainte-Marie	Laurier--Sainte-Marie	preliminary	préliminaires	Welsh		Adrien	Communist	Communiste	94	.2	0	44619
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	Couture		Matthieu	People's Party - PPC	Parti populaire - PPC	2549	5.1	0	50451
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	El-Khoury		Fayçal	Liberal	Libéral	24631	48.8	0	50451
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	Jolivet		Guillaume	Bloc Québécois	Bloc Québécois	9665	19.2	0	50451
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	Pettas		Spyridonas	Conservative	Conservateur	8944	17.7	0	50451
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	Taleb		Ahmed	Green Party	Parti Vert	799	1.6	0	50451
24040	Laval--Les Îles	Laval--Les Îles	preliminary	préliminaires	Woodmass		Rowan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3863	7.7	0	50451
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Boisclair		Nathalie	Bloc Québécois	Bloc Québécois	16959	35.4	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Cardin		Nancy	Green Party	Parti Vert	1163	2.4	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Chénier		Pierre	Marxist-Leninist	Marxiste-Léniniste	128	.3	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Dhatsenpa		Kalden	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4957	10.3	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Lalonde		Isabelle	Conservative	Conservateur	4035	8.4	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Olinga		Tiny	People's Party - PPC	Parti populaire - PPC	1409	2.9	0	47970
24041	Longueuil--Charles-LeMoyne	Longueuil--Charles-LeMoyne	preliminary	préliminaires	Romanado		Sherry	Liberal	Libéral	19319	40.3	0	47970
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Bergeron		Charles-Eugène	Green Party	Parti Vert	855	1.4	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Brochu		Carl	Parti Patriote	Parti Patriote	95	.2	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Daigle		Ghislain	Liberal	Libéral	9270	14.6	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Dumont		Guylaine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4490	7.1	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Gourde		Jacques	Conservative	Conservateur	32668	51.6	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Lamarche		Samuel	Bloc Québécois	Bloc Québécois	13739	21.7	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Lemay		Mariève	Free Party Canada	Parti Libre Canada	548	.9	0	63326
24042	Lévis--Lotbinière	Lévis--Lotbinière	preliminary	préliminaires	Simard		Benoit	People's Party - PPC	Parti populaire - PPC	1661	2.6	0	63326
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Gagnon		Florence	Liberal	Libéral	21930	38.3	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Girard		Manon	People's Party - PPC	Parti populaire - PPC	1358	2.4	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	King		Simon	Green Party	Parti Vert	1599	2.8	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Lafrenaye		Jacinthe	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	252	.4	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Murray		Mildred	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4553	8	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Tall		Boukare	Conservative	Conservateur	3964	6.9	0	57235
24043	Longueuil--Saint-Hubert	Longueuil--Saint-Hubert	preliminary	préliminaires	Trudel		Denis	Bloc Québécois	Bloc Québécois	23579	41.2	0	57235
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Blanchette		Denis	Green Party	Parti Vert	1572	2.6	0	59789
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Dahan		Ali	Independent	Indépendant(e)	379	.6	0	59789
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Dean		Marc	Bloc Québécois	Bloc Québécois	16249	27.2	0	59789
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Lightbound		Joël	Liberal	Libéral	22933	38.4	0	59789
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Lépine		Gilles	Conservative	Conservateur	14332	24	0	59789
24044	Louis-Hébert	Louis-Hébert	preliminary	préliminaires	Nadji		Hamid	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4324	7.2	0	59789
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Bilodeau		Thierry	Bloc Québécois	Bloc Québécois	13069	20.4	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Chicoine		Daniel	Green Party	Parti Vert	907	1.4	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Côté		Guillaume	People's Party - PPC	Parti populaire - PPC	1337	2.1	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Deltell		Gérard	Conservative	Conservateur	33098	51.6	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Fortin		Mélanie	Free Party Canada	Parti Libre Canada	1089	1.7	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Huang		Yu-Ti Eva	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3370	5.3	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	preliminary	préliminaires	Morin		Nathanielle	Liberal	Libéral	11228	17.5	0	64098
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Bilodeau		Thierry	Bloc Québécois	Bloc Québécois	13069	20.4	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Chicoine		Daniel	Green Party	Parti Vert	907	1.4	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Côté		Guillaume	People's Party - PPC	Parti populaire - PPC	1337	2.1	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Deltell		Gérard	Conservative	Conservateur	33098	51.6	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Fortin		Mélanie	Free Party Canada	Parti Libre Canada	1089	1.7	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Huang		Yu-Ti Eva	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3370	5.3	1232	65330
24045	Louis-Saint-Laurent	Louis-Saint-Laurent	validated	validés	Morin		Nathanielle	Liberal	Libéral	11228	17.5	1232	65330
24046	Manicouagan	Manicouagan	preliminary	préliminaires	Gagné		Thomas	Liberal	Libéral	6539	18.7	0	34968
24046	Manicouagan	Manicouagan	preliminary	préliminaires	Gill		Marilène	Bloc Québécois	Bloc Québécois	18414	52.7	0	34968
24046	Manicouagan	Manicouagan	preliminary	préliminaires	Girard		Bianca	Free Party Canada	Parti Libre Canada	887	2.5	0	34968
24046	Manicouagan	Manicouagan	preliminary	préliminaires	St-Jean		Nichola	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1514	4.3	0	34968
24046	Manicouagan	Manicouagan	preliminary	préliminaires	Vigneault		Rodrigue	Conservative	Conservateur	7614	21.8	0	34968
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Berthold		Luc	Conservative	Conservateur	26121	56.3	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Blais		Gloriane	Independent	Indépendant(e)	403	.9	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Boisvert		Mathieu	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1308	2.8	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Gagnon		Jonathan	People's Party - PPC	Parti populaire - PPC	1677	3.6	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Hamel		Emilie	Green Party	Parti Vert	592	1.3	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Labonté		Éric	Bloc Québécois	Bloc Québécois	9318	20.1	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Lukofsky		Adam	Liberal	Libéral	6329	13.6	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	preliminary	préliminaires	Pepin		Real	Free Party Canada	Parti Libre Canada	680	1.5	0	46428
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Berthold		Luc	Conservative	Conservateur	26121	56.3	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Blais		Gloriane	Independent	Indépendant(e)	403	.9	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Boisvert		Mathieu	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1308	2.8	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Gagnon		Jonathan	People's Party - PPC	Parti populaire - PPC	1677	3.6	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Hamel		Emilie	Green Party	Parti Vert	592	1.3	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Labonté		Éric	Bloc Québécois	Bloc Québécois	9318	20.1	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Lukofsky		Adam	Liberal	Libéral	6329	13.6	785	47213
24047	Mégantic--L'Érable	Mégantic--L'Érable	validated	validés	Pepin		Real	Free Party Canada	Parti Libre Canada	680	1.5	785	47213
24048	Mirabel	Mirabel	preliminary	préliminaires	Bourassa		Benoit	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5305	8.4	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Croteau		Ariane	Free Party Canada	Parti Libre Canada	1187	1.9	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Garon		Jean-Denis	Bloc Québécois	Bloc Québécois	29293	46.4	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Guay		Mario	Green Party	Parti Vert	1415	2.2	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Lefebvre		Catherine	Conservative	Conservateur	8478	13.4	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Loza		François	Liberal	Libéral	14847	23.5	0	63122
24048	Mirabel	Mirabel	preliminary	préliminaires	Montpetit		Christian	People's Party - PPC	Parti populaire - PPC	2597	4.1	0	63122
24049	Montarville	Montarville	preliminary	préliminaires	Bergeron		Stéphane	Bloc Québécois	Bloc Québécois	25972	45.3	0	57394
24049	Montarville	Montarville	preliminary	préliminaires	Hynes		Natasha	People's Party - PPC	Parti populaire - PPC	1229	2.1	0	57394
24049	Montarville	Montarville	preliminary	préliminaires	Pelchat		Marie-Ève	Liberal	Libéral	19942	34.7	0	57394
24049	Montarville	Montarville	preliminary	préliminaires	Sauvageau		Julie	Conservative	Conservateur	5455	9.5	0	57394
24049	Montarville	Montarville	preliminary	préliminaires	Sellah		Djaouida	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4796	8.4	0	57394
24050	Montcalm	Montcalm	preliminary	préliminaires	Beaudry		Bruno	People's Party - PPC	Parti populaire - PPC	2258	4.4	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Bellerose		Robert	Free Party Canada	Parti Libre Canada	1074	2.1	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Desroches		Gisèle	Conservative	Conservateur	6011	11.7	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Goué		Oulai B.	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3218	6.3	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Goyette		Mathieu	Green Party	Parti Vert	1317	2.6	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Qureshi		Javeria	Liberal	Libéral	10196	19.8	0	51452
24050	Montcalm	Montcalm	preliminary	préliminaires	Thériault		Luc	Bloc Québécois	Bloc Québécois	27378	53.2	0	51452
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	Bérubé		Simon	Bloc Québécois	Bloc Québécois	12523	26.2	0	47797
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	English		Sean	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	1597	3.3	0	47797
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	Généreux		Bernard	Conservative	Conservateur	24118	50.5	0	47797
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	Lapointe		François	Liberal	Libéral	8371	17.5	0	47797
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	Mony		Thibaud	Parti Rhinocéros Party	Parti Rhinocéros Party	269	.6	0	47797
24051	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	Montmagny--L'Islet--Kamouraska--Rivière-du-Loup	preliminary	préliminaires	Rochon		Nancy	Free Party Canada	Parti Libre Canada	919	1.9	0	47797
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Badra		Clement	Green Party	Parti Vert	1085	2.7	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Cavallaro		Frank	Conservative	Conservateur	9871	24.5	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	El-Khoury		Ibrahim Bruno	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3378	8.4	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Housefather		Anthony	Liberal	Libéral	23292	57.7	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Johnston		Diane	Marxist-Leninist	Marxiste-Léniniste	96	.2	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Komarov		Yegor	Bloc Québécois	Bloc Québécois	1582	3.9	0	40357
24052	Mount Royal	Mont-Royal	preliminary	préliminaires	Lozoff		Zachary	People's Party - PPC	Parti populaire - PPC	1053	2.6	0	40357
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Craig Larouche		Jordan	Bloc Québécois	Bloc Québécois	2409	5.3	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Elbourne-Weinstock		Emma	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8753	19.2	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Fairbrother		Sam	Green Party	Parti Vert	1829	4	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Freiheit		David	People's Party - PPC	Parti populaire - PPC	1498	3.3	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Garneau		Marc	Liberal	Libéral	24593	53.8	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Hoffman		Rachel	Marxist-Leninist	Marxiste-Léniniste	126	.3	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Kaminski		Mathew	Conservative	Conservateur	6407	14	0	45680
24053	Notre-Dame-de-Grâce--Westmount	Notre-Dame-de-Grâce--Westmount	preliminary	préliminaires	Wandji		Geofryde	Christian Heritage Party	Parti de l'Héritage Chrétien	65	.1	0	45680
24054	Outremont	Outremont	preliminary	préliminaires	Bendayan		Rachel	Liberal	Libéral	16442	45.2	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Grimard		Célia	Bloc Québécois	Bloc Québécois	5491	15.1	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Joshi		Angela-Angie	Independent	Indépendant(e)	94	.3	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Louras		Jasmine	Conservative	Conservateur	2848	7.8	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Pinto		Yehuda	People's Party - PPC	Parti populaire - PPC	813	2.2	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Péclet		Ève	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9487	26.1	0	36377
24054	Outremont	Outremont	preliminary	préliminaires	Tarabey		Grace	Green Party	Parti Vert	1202	3.3	0	36377
24055	Papineau	Papineau	preliminary	préliminaires	Ben Youssef		Nabila	Bloc Québécois	Bloc Québécois	6874	15.1	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Boutin		Christian	People's Party - PPC	Parti populaire - PPC	1060	2.3	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Colly		Garnet	Marxist-Leninist	Marxiste-Léniniste	115	.3	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Lepine		Alain	Green Party	Parti Vert	1458	3.2	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Martin		Raymond	Independent	Indépendant(e)	108	.2	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Paré		Christine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10303	22.6	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Rivera		Julio	Conservative	Conservateur	2203	4.8	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Trudeau		Justin	Liberal	Libéral	22526	49.5	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Zako		Béatrice	Independent	Indépendant(e)	427	.9	0	45502
24055	Papineau	Papineau	preliminary	préliminaires	Znoneofthe		Above	Parti Rhinocéros Party	Parti Rhinocéros Party	428	.9	0	45502
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	preliminary	préliminaires	Bourque		Nadia	Bloc Québécois	Bloc Québécois	4141	7.9	0	52306
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	preliminary	préliminaires	Roberts		Terry	Conservative	Conservateur	10893	20.8	0	52306
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	preliminary	préliminaires	Sibthorpe		Mark	People's Party - PPC	Parti populaire - PPC	1942	3.7	0	52306
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	preliminary	préliminaires	Tumbar		Maninderjit Kaur	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6034	11.5	0	52306
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	preliminary	préliminaires	Zuberi		Sameer	Liberal	Libéral	29296	56	0	52306
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	validated	validés	Bourque		Nadia	Bloc Québécois	Bloc Québécois	4141	7.9	615	52921
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	validated	validés	Roberts		Terry	Conservative	Conservateur	10893	20.8	615	52921
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	validated	validés	Sibthorpe		Mark	People's Party - PPC	Parti populaire - PPC	1942	3.7	615	52921
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	validated	validés	Tumbar		Maninderjit Kaur	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6034	11.5	615	52921
24056	Pierrefonds--Dollard	Pierrefonds--Dollard	validated	validés	Zuberi		Sameer	Liberal	Libéral	29296	56	615	52921
24057	Pontiac	Pontiac	preliminary	préliminaires	Chatel		Sophie	Liberal	Libéral	26999	43.4	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	Desjardins		Gabrielle	Bloc Québécois	Bloc Québécois	10425	16.8	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	Gauthier		Michel	Conservative	Conservateur	12798	20.6	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	Giroux		Denise	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6824	11	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	Gottfred		David Bruce	People's Party - PPC	Parti populaire - PPC	2821	4.5	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	Labonté-Chartrand		Geneviève	Free Party Canada	Parti Libre Canada	507	.8	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	McArthur		Shaughn	Green Party	Parti Vert	1710	2.8	0	62156
24057	Pontiac	Pontiac	preliminary	préliminaires	McNair		James	CFF - Canada's Fourth Front	QFC - Quatrième front du Canada	72	.1	0	62156
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Diallo		Sani	Liberal	Libéral	10068	15.4	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Fiset		Charles	Free Party Canada	Parti Libre Canada	677	1	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Gagnon		David-Roger	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3323	5.1	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Godin		Joël	Conservative	Conservateur	33638	51.4	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Hébert		Christian	Bloc Québécois	Bloc Québécois	15595	23.8	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Mathieu		Nash	People's Party - PPC	Parti populaire - PPC	1709	2.6	0	65500
24058	Portneuf--Jacques-Cartier	Portneuf--Jacques-Cartier	preliminary	préliminaires	Pelletier		Tommy	Parti Rhinocéros Party	Parti Rhinocéros Party	490	.7	0	65500
24059	Québec	Québec	preliminary	préliminaires	Boutin		Bianca	Conservative	Conservateur	9195	18	0	51172
24059	Québec	Québec	preliminary	préliminaires	Brisson		Daniel	People's Party - PPC	Parti populaire - PPC	855	1.7	0	51172
24059	Québec	Québec	preliminary	préliminaires	Bureau		Tommy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6666	13	0	51172
24059	Québec	Québec	preliminary	préliminaires	Duclos		Jean-Yves	Liberal	Libéral	18121	35.4	0	51172
24059	Québec	Québec	preliminary	préliminaires	Kerr		Patrick	Green Party	Parti Vert	1176	2.3	0	51172
24059	Québec	Québec	preliminary	préliminaires	Sansfaçon		Louis	Bloc Québécois	Bloc Québécois	14854	29	0	51172
24059	Québec	Québec	preliminary	préliminaires	Simard		Karine	Free Party Canada	Parti Libre Canada	305	.6	0	51172
24060	Repentigny	Repentigny	preliminary	préliminaires	Bapfou Vozang Siewe		Pascal	Conservative	Conservateur	5332	8.9	0	59692
24060	Repentigny	Repentigny	preliminary	préliminaires	Boucher Granger		Micheline	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	516	.9	0	59692
24060	Repentigny	Repentigny	preliminary	préliminaires	Duval		Pierre	Free Party Canada	Parti Libre Canada	2026	3.4	0	59692
24060	Repentigny	Repentigny	preliminary	préliminaires	Kernizan		Yvelie	Liberal	Libéral	16471	27.6	0	59692
24060	Repentigny	Repentigny	preliminary	préliminaires	Mathieu Chauvette		Naomie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4489	7.5	0	59692
24060	Repentigny	Repentigny	preliminary	préliminaires	Pauzé		Monique	Bloc Québécois	Bloc Québécois	30858	51.7	0	59692
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Bureau		Nataël	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2539	4.5	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Delisle		Marjolaine	Parti Rhinocéros Party	Parti Rhinocéros Party	448	.8	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Desmarais		Alexandre	Liberal	Libéral	8543	15	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Fougeron		Nadine	People's Party - PPC	Parti populaire - PPC	2058	3.6	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Rayes		Alain	Conservative	Conservateur	28253	49.7	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Richard		Louis	Free Party Canada	Parti Libre Canada	898	1.6	0	56889
24061	Richmond--Arthabaska	Richmond--Arthabaska	preliminary	préliminaires	Scalzo		Diego	Bloc Québécois	Bloc Québécois	14150	24.9	0	56889
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Beauséjour		Valérie	Free Party Canada	Parti Libre Canada	847	1.6	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Bute		Julius	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	129	.2	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Desilets		Luc	Bloc Québécois	Bloc Québécois	21645	40.5	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Dionne		Michael	Parti Patriote	Parti Patriote	148	.3	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Duffy-Vincelette		Marc	Conservative	Conservateur	5479	10.2	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Hakizimana		Joseph	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3903	7.3	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Lapointe		Linda	Liberal	Libéral	18838	35.2	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Roker Jr		Hans	People's Party - PPC	Parti populaire - PPC	1505	2.8	0	53465
24062	Rivière-des-Mille-Îles	Rivière-des-Mille-Îles	preliminary	préliminaires	Ware		Alec	Green Party	Parti Vert	971	1.8	0	53465
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Bajkin		Theodora	Liberal	Libéral	12766	22.2	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Damour		Marie-Eve	Free Party Canada	Parti Libre Canada	1035	1.8	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Fortin		Rhéal	Bloc Québécois	Bloc Québécois	29941	52.2	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Morrissette		Patricia	Conservative	Conservateur	6891	12	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Paspaliaris		Mary-Helen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3950	6.9	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Ravanshid		Keeyan	People's Party - PPC	Parti populaire - PPC	2165	3.8	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	René		Jean-François	Parti Rhinocéros Party	Parti Rhinocéros Party	374	.7	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	preliminary	préliminaires	Riqueur-Lainé		Nicolas	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	282	.5	0	57404
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Bajkin		Theodora	Liberal	Libéral	12767	22.3	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Damour		Marie-Eve	Free Party Canada	Parti Libre Canada	1036	1.8	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Fortin		Rhéal	Bloc Québécois	Bloc Québécois	29943	52.2	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Morrissette		Patricia	Conservative	Conservateur	6803	11.9	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Paspaliaris		Mary-Helen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3958	6.9	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Ravanshid		Keeyan	People's Party - PPC	Parti populaire - PPC	2164	3.8	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	René		Jean-François	Parti Rhinocéros Party	Parti Rhinocéros Party	373	.7	1327	58656
24063	Rivière-du-Nord	Rivière-du-Nord	validated	validés	Riqueur-Lainé		Nicolas	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	285	.5	1327	58656
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Boulerice		Alexandre	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	26726	48.6	0	55022
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Desrochers		Gisèle	Marxist-Leninist	Marxiste-Léniniste	346	.6	0	55022
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Drolet		Nancy	Liberal	Libéral	12633	23	0	55022
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Fiori		Franco	Green Party	Parti Vert	1378	2.5	0	55022
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Perez Hernandez		Surelys	Conservative	Conservateur	2207	4	0	55022
24064	Rosemont--La Petite-Patrie	Rosemont--La Petite-Patrie	preliminary	préliminaires	Vaithyanathasarma		Shophika	Bloc Québécois	Bloc Québécois	11732	21.3	0	55022
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Faour		Ali	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4451	8.6	0	52020
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Flibotte		Micheline	Free Party Canada	Parti Libre Canada	990	1.9	0	52020
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Lacharité		Manon D.	Bloc Québécois	Bloc Québécois	16055	30.9	0	52020
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Léger		Louis	People's Party - PPC	Parti populaire - PPC	1509	2.9	0	52020
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Petrari		Sarah	Conservative	Conservateur	6120	11.8	0	52020
24065	Marc-Aurèle-Fortin	Marc-Aurèle-Fortin	preliminary	préliminaires	Robillard		Yves	Liberal	Libéral	22895	44	0	52020
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Boucher		Caroline-Joan	Liberal	Libéral	12030	22.7	0	53045
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Desautels		Sébastien	Free Party Canada	Parti Libre Canada	1053	2	0	53045
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Lepage		André	Conservative	Conservateur	7156	13.5	0	53045
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Pariseau		Sylvain	People's Party - PPC	Parti populaire - PPC	1445	2.7	0	53045
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Sansoucy		Brigitte	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6170	11.6	0	53045
24066	Saint-Hyacinthe--Bagot	Saint-Hyacinthe--Bagot	preliminary	préliminaires	Savard-Tremblay		Simon-Pierre	Bloc Québécois	Bloc Québécois	25191	47.5	0	53045
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Benoit		Serge	Conservative	Conservateur	7544	12.7	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Cléroux		Jean-Charles	Free Party Canada	Parti Libre Canada	1790	3	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Duteau		Pierre	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	413	.7	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Fournier		Jeremy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4308	7.3	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Normandin		Christine	Bloc Québécois	Bloc Québécois	27243	46	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	Rioux		Jean	Liberal	Libéral	16650	28.1	0	59210
24067	Saint-Jean	Saint-Jean	preliminary	préliminaires	V. Ryan		Leigh	Green Party	Parti Vert	1262	2.1	0	59210
24067	Saint-Jean	Saint-Jean	validated	validés	Benoit		Serge	Conservative	Conservateur	7544	12.7	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	Cléroux		Jean-Charles	Free Party Canada	Parti Libre Canada	1790	3	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	Duteau		Pierre	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	413	.7	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	Fournier		Jeremy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4308	7.3	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	Normandin		Christine	Bloc Québécois	Bloc Québécois	27243	46	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	Rioux		Jean	Liberal	Libéral	16650	28.1	1527	60737
24067	Saint-Jean	Saint-Jean	validated	validés	V. Ryan		Leigh	Green Party	Parti Vert	1262	2.1	1527	60737
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Boutet		Ginette	Marxist-Leninist	Marxiste-Léniniste	146	.4	0	37312
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Devereaux		Nathan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4052	10.9	0	37312
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Lambropoulos		Emmanuella	Liberal	Libéral	22056	59.1	0	37312
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Racicot		Florence	Bloc Québécois	Bloc Québécois	2973	8	0	37312
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Serour		Richard	Conservative	Conservateur	6902	18.5	0	37312
24068	Saint-Laurent	Saint-Laurent	preliminary	préliminaires	Yablunovsky		Gregory	People's Party - PPC	Parti populaire - PPC	1183	3.2	0	37312
24069	Saint-Léonard--Saint-Michel	Saint-Léonard--Saint-Michel	preliminary	préliminaires	Di Tullio		Alicia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3460	8.3	0	41931
24069	Saint-Léonard--Saint-Michel	Saint-Léonard--Saint-Michel	preliminary	préliminaires	Ialenti		Louis	Conservative	Conservateur	4381	10.4	0	41931
24069	Saint-Léonard--Saint-Michel	Saint-Léonard--Saint-Michel	preliminary	préliminaires	Lattanzio		Patricia	Liberal	Libéral	29024	69.2	0	41931
24069	Saint-Léonard--Saint-Michel	Saint-Léonard--Saint-Michel	preliminary	préliminaires	Massey		Laurence	Bloc Québécois	Bloc Québécois	3487	8.3	0	41931
24069	Saint-Léonard--Saint-Michel	Saint-Léonard--Saint-Michel	preliminary	préliminaires	Ritacca		Daniele	People's Party - PPC	Parti populaire - PPC	1579	3.8	0	41931
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Beaumont Tremblay		Hugo	Marijuana Party	Parti Marijuana	307	.5	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Bergeron		Valérie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2839	5	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Bouchard		Jacques	Conservative	Conservateur	10139	18	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Bruneau		Jacynthe	Bloc Québécois	Bloc Québécois	16942	30	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Champagne		François-Philippe	Liberal	Libéral	23913	42.4	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Frazer		Dji-Pé	Parti Rhinocéros Party	Parti Rhinocéros Party	290	.5	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Gaudet		Marie-Claude	Green Party	Parti Vert	731	1.3	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Magnan		Alain	Independent	Indépendant(e)	241	.4	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	preliminary	préliminaires	Rouleau		Marie Gabrielle	Free Party Canada	Parti Libre Canada	1059	1.9	0	56461
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Beaumont Tremblay		Hugo	Marijuana Party	Parti Marijuana	307	.5	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Bergeron		Valérie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	2849	5.1	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Bouchard		Jacques	Conservative	Conservateur	10139	18	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Bruneau		Jacynthe	Bloc Québécois	Bloc Québécois	16940	30.1	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Champagne		François-Philippe	Liberal	Libéral	23913	42.4	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Frazer		Dji-Pé	Parti Rhinocéros Party	Parti Rhinocéros Party	285	.5	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Gaudet		Marie-Claude	Green Party	Parti Vert	731	1.3	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Magnan		Alain	Independent	Indépendant(e)	241	.4	1379	57716
24070	Saint-Maurice--Champlain	Saint-Maurice--Champlain	validated	validés	Rouleau		Marie Gabrielle	Free Party Canada	Parti Libre Canada	932	1.7	1379	57716
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Bertrand		Luc	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	452	.7	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Collette		Jean	Conservative	Conservateur	7475	12.3	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Debellefeuille		Claude	Bloc Québécois	Bloc Québécois	29013	47.7	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Gallant		Linda	Liberal	Libéral	16545	27.2	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Gottman		Joan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4529	7.5	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Goyette		Marcel	Free Party Canada	Parti Libre Canada	561	.9	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	preliminary	préliminaires	Thivierge		Nicolas	People's Party - PPC	Parti populaire - PPC	2207	3.6	0	60782
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Bertrand		Luc	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	449	.7	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Collette		Jean	Conservative	Conservateur	7476	12.3	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Debellefeuille		Claude	Bloc Québécois	Bloc Québécois	29093	47.8	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Gallant		Linda	Liberal	Libéral	16550	27.2	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Gottman		Joan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4529	7.4	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Goyette		Marcel	Free Party Canada	Parti Libre Canada	561	.9	1355	62220
24071	Salaberry--Suroît	Salaberry--Suroît	validated	validés	Thivierge		Nicolas	People's Party - PPC	Parti populaire - PPC	2207	3.6	1355	62220
24072	Shefford	Shefford	preliminary	préliminaires	Beaudry-Graham		Jean-Philippe	Pour l'Indépendance du Québec	Pour l'Indépendance du Québec	239	.4	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Breton		Pierre	Liberal	Libéral	19902	33.4	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Brisebois		Yannick	Marijuana Party	Parti Marijuana	294	.5	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Jasmin		Patrick	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3173	5.3	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Lacroix		Joël	Free Party Canada	Parti Libre Canada	599	1	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Lalancette		Céline	Conservative	Conservateur	7228	12.1	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Larouche		Andréanne	Bloc Québécois	Bloc Québécois	24996	42	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Morin		Mathieu	Green Party	Parti Vert	1060	1.8	0	59564
24072	Shefford	Shefford	preliminary	préliminaires	Schieder		Gerda	People's Party - PPC	Parti populaire - PPC	2073	3.5	0	59564
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Berger		Marie-Clarisse	Green Party	Parti Vert	1670	2.9	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Boivin		Maxime	Free Party Canada	Parti Libre Canada	787	1.4	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Brière		Élisabeth	Liberal	Libéral	21830	37.5	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Haidar		Ensaf	Bloc Québécois	Bloc Québécois	16848	29	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Lalime		Marika	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8097	13.9	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Niculescu		Marcela	People's Party - PPC	Parti populaire - PPC	1453	2.5	0	58175
24073	Sherbrooke	Sherbrooke	preliminary	préliminaires	Winters		Andrea	Conservative	Conservateur	7490	12.9	0	58175
24073	Sherbrooke	Sherbrooke	validated	validés	Berger		Marie-Clarisse	Green Party	Parti Vert	1670	2.9	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Boivin		Maxime	Free Party Canada	Parti Libre Canada	787	1.4	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Brière		Élisabeth	Liberal	Libéral	21830	37.5	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Haidar		Ensaf	Bloc Québécois	Bloc Québécois	16848	29	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Lalime		Marika	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8107	13.9	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Niculescu		Marcela	People's Party - PPC	Parti populaire - PPC	1453	2.5	1355	59540
24073	Sherbrooke	Sherbrooke	validated	validés	Winters		Andrea	Conservative	Conservateur	7490	12.9	1355	59540
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Brake		Niklas	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6795	10.5	0	64630
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Cox		Karen	Conservative	Conservateur	10566	16.3	0	64630
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Destrempes		Ginette	Free Party Canada	Parti Libre Canada	1359	2.1	0	64630
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Schiefke		Peter	Liberal	Libéral	29960	46.4	0	64630
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Stiff		Cameron	Green Party	Parti Vert	1637	2.5	0	64630
24074	Vaudreuil--Soulanges	Vaudreuil--Soulanges	preliminary	préliminaires	Vadnais-Lapierre		Thierry	Bloc Québécois	Bloc Québécois	14313	22.1	0	64630
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Boudrias		Michel	No Affiliation	Aucune appartenance	3874	6.6	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Desjardins		Frédérick	Conservative	Conservateur	6184	10.5	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Forget		Eric	Liberal	Libéral	17474	29.6	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Fortin-Dubé		Nathan	Free Party Canada	Parti Libre Canada	821	1.4	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Hamelin- Schuilenburg		David	Green Party	Parti Vert	847	1.4	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Mayba		Luke	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3903	6.6	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Sinclair-Desgagné		Nathalie	Bloc Québécois	Bloc Québécois	24248	41.1	0	58945
24075	Terrebonne	Terrebonne	preliminary	préliminaires	Stinziani		Louis	People's Party - PPC	Parti populaire - PPC	1594	2.7	0	58945
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Brodeur		Gilles	Free Party Canada	Parti Libre Canada	733	1.3	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Francoeur		Martin	Liberal	Libéral	16560	28.6	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Holman		Andrew	Green Party	Parti Vert	780	1.3	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Landry		Jean	People's Party - PPC	Parti populaire - PPC	1112	1.9	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Levesque		Yves	Conservative	Conservateur	17027	29.4	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Simidzija		Adis	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4658	8	0	57990
24076	Trois-Rivières	Trois-Rivières	preliminary	préliminaires	Villemure		René	Bloc Québécois	Bloc Québécois	17120	29.5	0	57990
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Charbonneau-Lavictoire		Cynthia	Green Party	Parti Vert	1353	2.7	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Dubé		Denise	People's Party - PPC	Parti populaire - PPC	1324	2.6	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Miller		Marc	Liberal	Libéral	25519	50.5	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Orihuela-Bouchard		Soledad	Bloc Québécois	Bloc Québécois	6276	12.4	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Shanahan		Steve	Conservative	Conservateur	6320	12.5	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Sullivan		Linda	Marxist-Leninist	Marxiste-Léniniste	125	.2	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Thiébaut		Sophie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9498	18.8	0	50552
24077	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	Ville-Marie--Le Sud-Ouest--Île-des-Soeurs	preliminary	préliminaires	Vargas		Hans Armando	Marijuana Party	Parti Marijuana	137	.3	0	50552
24078	Vimy	Vimy	preliminary	préliminaires	Aliev		Vassif	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4731	9.3	0	50881
24078	Vimy	Vimy	preliminary	préliminaires	Bandou		Rachid	Bloc Québécois	Bloc Québécois	11810	23.2	0	50881
24078	Vimy	Vimy	preliminary	préliminaires	El-Helou		Rima	Conservative	Conservateur	6829	13.4	0	50881
24078	Vimy	Vimy	preliminary	préliminaires	Koutrakis		Annie	Liberal	Libéral	25322	49.8	0	50881
24078	Vimy	Vimy	preliminary	préliminaires	Morales-Loaiza		Alejandro	People's Party - PPC	Parti populaire - PPC	2189	4.3	0	50881
35001	Ajax	Ajax	preliminary	préliminaires	Awan		Arshad	Conservative	Conservateur	13206	26.6	0	49714
35001	Ajax	Ajax	preliminary	préliminaires	Holland		Mark	Liberal	Libéral	28294	56.9	0	49714
35001	Ajax	Ajax	preliminary	préliminaires	Hughes		Monique	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6960	14	0	49714
35001	Ajax	Ajax	preliminary	préliminaires	Paulseth		Leigh	Green Party	Parti Vert	1254	2.5	0	49714
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Baarda		Clarence	Christian Heritage Party	Parti de l'Héritage Chrétien	270	.7	0	38539
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Hughes		Carol	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15306	39.7	0	38539
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Jaaskelainen		Harry	People's Party - PPC	Parti populaire - PPC	2857	7.4	0	38539
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Peltier		Duke	Liberal	Libéral	8501	22.1	0	38539
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Sagman		John	Conservative	Conservateur	10902	28.3	0	38539
35002	Algoma--Manitoulin--Kapuskasing	Algoma--Manitoulin--Kapuskasing	preliminary	préliminaires	Zimmermann		Stephen	Green Party	Parti Vert	703	1.8	0	38539
35003	Aurora--Oak Ridges--Richmond Hill	Aurora--Oak Ridges--Richmond Hill	preliminary	préliminaires	Alleslev		Leona	Conservative	Conservateur	19314	42.1	0	45906
35003	Aurora--Oak Ridges--Richmond Hill	Aurora--Oak Ridges--Richmond Hill	preliminary	préliminaires	Hagan		Janice	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3594	7.8	0	45906
35003	Aurora--Oak Ridges--Richmond Hill	Aurora--Oak Ridges--Richmond Hill	preliminary	préliminaires	Korovitsyn		Serge	Libertarian	Libertarien	500	1.1	0	45906
35003	Aurora--Oak Ridges--Richmond Hill	Aurora--Oak Ridges--Richmond Hill	preliminary	préliminaires	Siskos		Anthony	People's Party - PPC	Parti populaire - PPC	1734	3.8	0	45906
35003	Aurora--Oak Ridges--Richmond Hill	Aurora--Oak Ridges--Richmond Hill	preliminary	préliminaires	Taylor Roy		Leah	Liberal	Libéral	20764	45.2	0	45906
35004	Barrie--Innisfil	Barrie--Innisfil	preliminary	préliminaires	Brancato		Corrado	People's Party - PPC	Parti populaire - PPC	4060	7.7	0	52917
35004	Barrie--Innisfil	Barrie--Innisfil	preliminary	préliminaires	Brassard		John	Conservative	Conservateur	25234	47.7	0	52917
35004	Barrie--Innisfil	Barrie--Innisfil	preliminary	préliminaires	Gostkowski		Aleesha	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8344	15.8	0	52917
35004	Barrie--Innisfil	Barrie--Innisfil	preliminary	préliminaires	Wilson		Lisa-Marie	Liberal	Libéral	15279	28.9	0	52917
35004	Barrie--Innisfil	Barrie--Innisfil	validated	validés	Brancato		Corrado	People's Party - PPC	Parti populaire - PPC	4060	7.7	433	53368
35004	Barrie--Innisfil	Barrie--Innisfil	validated	validés	Brassard		John	Conservative	Conservateur	25234	47.7	433	53368
35004	Barrie--Innisfil	Barrie--Innisfil	validated	validés	Gostkowski		Aleesha	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8349	15.8	433	53368
35004	Barrie--Innisfil	Barrie--Innisfil	validated	validés	Wilson		Lisa-Marie	Liberal	Libéral	15292	28.9	433	53368
35005	Barrie--Springwater--Oro-Medonte	Barrie--Springwater--Oro-Medonte	preliminary	préliminaires	Lochhead		Sarah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8913	17.1	0	52241
35005	Barrie--Springwater--Oro-Medonte	Barrie--Springwater--Oro-Medonte	preliminary	préliminaires	Saari		Tanya	Liberal	Libéral	16145	30.9	0	52241
35005	Barrie--Springwater--Oro-Medonte	Barrie--Springwater--Oro-Medonte	preliminary	préliminaires	Shipley		Doug	Conservative	Conservateur	23554	45.1	0	52241
35005	Barrie--Springwater--Oro-Medonte	Barrie--Springwater--Oro-Medonte	preliminary	préliminaires	Webb		Chris	People's Party - PPC	Parti populaire - PPC	3629	6.9	0	52241
35006	Bay of Quinte	Baie de Quinte	preliminary	préliminaires	Bell		Stephanie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9185	14.9	0	61687
35006	Bay of Quinte	Baie de Quinte	preliminary	préliminaires	Charlton		Erica	Green Party	Parti Vert	1386	2.2	0	61687
35006	Bay of Quinte	Baie de Quinte	preliminary	préliminaires	Ellis		Neil	Liberal	Libéral	22542	36.5	0	61687
35006	Bay of Quinte	Baie de Quinte	preliminary	préliminaires	LeClerc		Janine	People's Party - PPC	Parti populaire - PPC	3045	4.9	0	61687
35006	Bay of Quinte	Baie de Quinte	preliminary	préliminaires	Williams		Ryan	Conservative	Conservateur	25529	41.4	0	61687
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	DeBoer		Reuben Anthony	Green Party	Parti Vert	1376	2.7	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Erskine-Smith		Nathaniel	Liberal	Libéral	28706	56.6	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Fernandez		Philip	Marxist-Leninist	Marxiste-Léniniste	50	.1	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Moxon		Jennifer	Communist	Communiste	131	.3	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Rautescu		Radu	People's Party - PPC	Parti populaire - PPC	1601	3.2	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Robinson		Lisa	Conservative	Conservateur	7292	14.4	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Ruiz Vargas		Alejandra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11420	22.5	0	50742
35007	Beaches--East York	Beaches--East York	preliminary	préliminaires	Wilde		Karen Lee	Independent	Indépendant(e)	166	.3	0	50742
35008	Brampton Centre	Brampton-Centre	preliminary	préliminaires	Ali		Shafqat	Liberal	Libéral	16184	47.7	0	33934
35008	Brampton Centre	Brampton-Centre	preliminary	préliminaires	McDowell		Jim	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5900	17.4	0	33934
35008	Brampton Centre	Brampton-Centre	preliminary	préliminaires	Shino		Ronni	Independent	Indépendant(e)	812	2.4	0	33934
35008	Brampton Centre	Brampton-Centre	preliminary	préliminaires	Singh		Jagdeep	Conservative	Conservateur	11038	32.5	0	33934
35008	Brampton Centre	Brampton-Centre	validated	validés	Ali		Shafqat	Liberal	Libéral	16189	47.7	488	34459
35008	Brampton Centre	Brampton-Centre	validated	validés	McDowell		Jim	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5932	17.5	488	34459
35008	Brampton Centre	Brampton-Centre	validated	validés	Shino		Ronni	Independent	Indépendant(e)	824	2.4	488	34459
35008	Brampton Centre	Brampton-Centre	validated	validés	Singh		Jagdeep	Conservative	Conservateur	11026	32.5	488	34459
35009	Brampton East	Brampton-Est	preliminary	préliminaires	Bajaj		Naval	Conservative	Conservateur	11669	28.1	0	41520
35009	Brampton East	Brampton-Est	preliminary	préliminaires	Bannister-Clarke		Gail	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6576	15.8	0	41520
35009	Brampton East	Brampton-Est	preliminary	préliminaires	Sidhu		Maninder	Liberal	Libéral	22187	53.4	0	41520
35009	Brampton East	Brampton-Est	preliminary	préliminaires	Singh		Manjeet	People's Party - PPC	Parti populaire - PPC	1088	2.6	0	41520
35010	Brampton North	Brampton-Nord	preliminary	préliminaires	Joshi		Medha	Conservative	Conservateur	13267	31.1	0	42656
35010	Brampton North	Brampton-Nord	preliminary	préliminaires	Sahota		Ruby	Liberal	Libéral	23003	53.9	0	42656
35010	Brampton North	Brampton-Nord	preliminary	préliminaires	Yeh		Teresa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6386	15	0	42656
35011	Brampton South	Brampton-Sud	preliminary	préliminaires	Brar		Ramandeep	Conservative	Conservateur	12599	30.4	0	41426
35011	Brampton South	Brampton-Sud	preliminary	préliminaires	Craniotis		Nicholas	People's Party - PPC	Parti populaire - PPC	1818	4.4	0	41426
35011	Brampton South	Brampton-Sud	preliminary	préliminaires	Sidhu		Sonia	Liberal	Libéral	21115	51	0	41426
35011	Brampton South	Brampton-Sud	preliminary	préliminaires	Singh		Tejinder	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5894	14.2	0	41426
35012	Brampton West	Brampton-Ouest	preliminary	préliminaires	Chambers		Jermaine	Conservative	Conservateur	13168	28.3	0	46547
35012	Brampton West	Brampton-Ouest	preliminary	préliminaires	Gill		Gurprit	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6105	13.1	0	46547
35012	Brampton West	Brampton-Ouest	preliminary	préliminaires	Khera		Kamal	Liberal	Libéral	25732	55.3	0	46547
35012	Brampton West	Brampton-Ouest	preliminary	préliminaires	Ramasamy		Sivakumar	Independent	Indépendant(e)	329	.7	0	46547
35012	Brampton West	Brampton-Ouest	preliminary	préliminaires	Zia		Rahul Samuel	People's Party - PPC	Parti populaire - PPC	1213	2.6	0	46547
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Bory		Leslie	Independent	Indépendant(e)	162	.2	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Brock		Larry	Conservative	Conservateur	26668	40.3	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Csordas		Karleigh	Green Party	Parti Vert	1760	2.7	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Macdonald		Alison	Liberal	Libéral	18784	28.4	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Roberts		Adrienne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12950	19.6	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Squire		Cole	People's Party - PPC	Parti populaire - PPC	5634	8.5	0	66096
35013	Brantford--Brant	Brantford--Brant	preliminary	préliminaires	Turmel		John The Engineer	Independent	Indépendant(e)	138	.2	0	66096
35013	Brantford--Brant	Brantford--Brant	validated	validés	Bory		Leslie	Independent	Indépendant(e)	160	.2	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Brock		Larry	Conservative	Conservateur	26675	40.3	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Csordas		Karleigh	Green Party	Parti Vert	1759	2.7	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Macdonald		Alison	Liberal	Libéral	18795	28.4	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Roberts		Adrienne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12964	19.6	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Squire		Cole	People's Party - PPC	Parti populaire - PPC	5633	8.5	393	66515
35013	Brantford--Brant	Brantford--Brant	validated	validés	Turmel		John The Engineer	Independent	Indépendant(e)	136	.2	393	66515
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Fosbrooke		Anna-Marie	People's Party - PPC	Parti populaire - PPC	4863	8.1	0	59954
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Kaikkonen		Reima	Independent	Indépendant(e)	545	.9	0	59954
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Lawrence		Ashley Michelle	Green Party	Parti Vert	1830	3.1	0	59954
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Neudorf		Christopher	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8107	13.5	0	59954
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Ruff		Alex	Conservative	Conservateur	29559	49.3	0	59954
35014	Bruce--Grey--Owen Sound	Bruce--Grey--Owen Sound	preliminary	préliminaires	Watson		Anne Marie	Liberal	Libéral	15050	25.1	0	59954
35015	Burlington	Burlington	preliminary	préliminaires	Bator		Michael	People's Party - PPC	Parti populaire - PPC	2764	4	0	69208
35015	Burlington	Burlington	preliminary	préliminaires	Brown		Emily	Conservative	Conservateur	25842	37.3	0	69208
35015	Burlington	Burlington	preliminary	préliminaires	Carroll		Jevin David	Parti Rhinocéros Party	Parti Rhinocéros Party	122	.2	0	69208
35015	Burlington	Burlington	preliminary	préliminaires	Cullis		Christian	Green Party	Parti Vert	1368	2	0	69208
35015	Burlington	Burlington	preliminary	préliminaires	Gould		Karina	Liberal	Libéral	31602	45.7	0	69208
35015	Burlington	Burlington	preliminary	préliminaires	Page		Nick	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7510	10.9	0	69208
35016	Cambridge	Cambridge	preliminary	préliminaires	Braniff		Michele	Green Party	Parti Vert	1863	3.4	0	54757
35016	Cambridge	Cambridge	preliminary	préliminaires	Bruce		Lorne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9316	17	0	54757
35016	Cambridge	Cambridge	preliminary	préliminaires	Cody		Connie	Conservative	Conservateur	18851	34.4	0	54757
35016	Cambridge	Cambridge	preliminary	préliminaires	May		Bryan	Liberal	Libéral	20796	38	0	54757
35016	Cambridge	Cambridge	preliminary	préliminaires	Segounis		Maggie	People's Party - PPC	Parti populaire - PPC	3931	7.2	0	54757
35017	Chatham-Kent--Leamington	Chatham-Kent--Leamington	preliminary	préliminaires	Epp		Dave	Conservative	Conservateur	22335	40.8	0	54752
35017	Chatham-Kent--Leamington	Chatham-Kent--Leamington	preliminary	préliminaires	Gelinas		Dan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8007	14.6	0	54752
35017	Chatham-Kent--Leamington	Chatham-Kent--Leamington	preliminary	préliminaires	Hetherington		Greg	Liberal	Libéral	15681	28.6	0	54752
35017	Chatham-Kent--Leamington	Chatham-Kent--Leamington	preliminary	préliminaires	Vallee		Liz	People's Party - PPC	Parti populaire - PPC	7891	14.4	0	54752
35017	Chatham-Kent--Leamington	Chatham-Kent--Leamington	preliminary	préliminaires	Vercouteren		Mark	Green Party	Parti Vert	838	1.5	0	54752
35018	Davenport	Davenport	preliminary	préliminaires	Bravo		Alejandra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	19695	41.8	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Currie		Adrian	Green Party	Parti Vert	1078	2.3	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Dos Remedios		Tara	People's Party - PPC	Parti populaire - PPC	1582	3.4	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Dzerowicz		Julie	Liberal	Libéral	19860	42.1	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Kalevar		Chai	Independent	Indépendant(e)	85	.2	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Kalimbet		Jenny	Conservative	Conservateur	4740	10.1	0	47125
35018	Davenport	Davenport	preliminary	préliminaires	Young		Troy	Independent	Indépendant(e)	85	.2	0	47125
35019	Don Valley East	Don Valley-Est	preliminary	préliminaires	Coteau		Michael	Liberal	Libéral	22503	59.5	0	37843
35019	Don Valley East	Don Valley-Est	preliminary	préliminaires	De Marco		Peter	People's Party - PPC	Parti populaire - PPC	2033	5.4	0	37843
35019	Don Valley East	Don Valley-Est	preliminary	préliminaires	Topp		Simon	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4879	12.9	0	37843
35019	Don Valley East	Don Valley-Est	preliminary	préliminaires	Williams		Penelope	Conservative	Conservateur	8428	22.3	0	37843
35020	Don Valley North	Don Valley-Nord	preliminary	préliminaires	Dong		Han	Liberal	Libéral	22067	54.3	0	40604
35020	Don Valley North	Don Valley-Nord	preliminary	préliminaires	Griffin		Bruce	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4337	10.7	0	40604
35020	Don Valley North	Don Valley-Nord	preliminary	préliminaires	Sobel		Jay	People's Party - PPC	Parti populaire - PPC	1366	3.4	0	40604
35020	Don Valley North	Don Valley-Nord	preliminary	préliminaires	Telfer		Natalie	Green Party	Parti Vert	780	1.9	0	40604
35020	Don Valley North	Don Valley-Nord	preliminary	préliminaires	Zuniga		Sabrina	Conservative	Conservateur	12054	29.7	0	40604
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Caputolan		Elvira	Green Party	Parti Vert	761	1.6	0	47024
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Khan		Adil	Centrist	Centriste	65	.1	0	47024
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Minas		Michael	People's Party - PPC	Parti populaire - PPC	881	1.9	0	47024
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Oliphant		Rob	Liberal	Libéral	24796	52.7	0	47024
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Riaz		Syeda	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3814	8.1	0	47024
35021	Don Valley West	Don Valley-Ouest	preliminary	préliminaires	Robertson		Yvonne	Conservative	Conservateur	16707	35.5	0	47024
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	Le Forestier		Jenni Michelle	Green Party	Parti Vert	2898	4.2	0	69038
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	McKendrick		Stephen	Independent	Indépendant(e)	248	.4	0	69038
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	Post		Lisa	Liberal	Libéral	22587	32.7	0	69038
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	Sanchez		Samantha	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6972	10.1	0	69038
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	Seeback		Kyle	Conservative	Conservateur	31736	46	0	69038
35022	Dufferin--Caledon	Dufferin--Caledon	preliminary	préliminaires	Zambito		Anthony	People's Party - PPC	Parti populaire - PPC	4597	6.7	0	69038
35023	Durham	Durham	preliminary	préliminaires	Baron		Sarah Gabrielle	Independent	Indépendant(e)	251	.4	0	67619
35023	Durham	Durham	preliminary	préliminaires	Cameron		Chris	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11823	17.5	0	67619
35023	Durham	Durham	preliminary	préliminaires	Conlin		Patricia	People's Party - PPC	Parti populaire - PPC	3722	5.5	0	67619
35023	Durham	Durham	preliminary	préliminaires	Giancroce		Jonathan	Liberal	Libéral	20205	29.9	0	67619
35023	Durham	Durham	preliminary	préliminaires	O'Toole		Erin	Conservative	Conservateur	31421	46.5	0	67619
35023	Durham	Durham	preliminary	préliminaires	Patch		Kurdil-Telt	Independent	Indépendant(e)	49	.1	0	67619
35023	Durham	Durham	preliminary	préliminaires	Smith		Adam	Parti Rhinocéros Party	Parti Rhinocéros Party	148	.2	0	67619
35024	Eglinton--Lawrence	Eglinton--Lawrence	preliminary	préliminaires	Frydman		Eric	Green Party	Parti Vert	1475	3	0	49250
35024	Eglinton--Lawrence	Eglinton--Lawrence	preliminary	préliminaires	Gleeson		Timothy	People's Party - PPC	Parti populaire - PPC	1410	2.9	0	49250
35024	Eglinton--Lawrence	Eglinton--Lawrence	preliminary	préliminaires	Mendicino		Marco	Liberal	Libéral	23939	48.6	0	49250
35024	Eglinton--Lawrence	Eglinton--Lawrence	preliminary	préliminaires	Pollock		Geoff	Conservative	Conservateur	17916	36.4	0	49250
35024	Eglinton--Lawrence	Eglinton--Lawrence	preliminary	préliminaires	Senneker		Caleb	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4510	9.2	0	49250
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Ajibowu		Afeez	Liberal	Libéral	12325	19.6	0	62964
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Cody		Katelyn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10085	16	0	62964
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Hillier		Chelsea	People's Party - PPC	Parti populaire - PPC	7429	11.8	0	62964
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Hopkins		Michael	Christian Heritage Party	Parti de l'Héritage Chrétien	336	.5	0	62964
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Stark		Amanda	Green Party	Parti Vert	1417	2.3	0	62964
35025	Elgin--Middlesex--London	Elgin--Middlesex--London	preliminary	préliminaires	Vecchio		Karen	Conservative	Conservateur	31372	49.8	0	62964
35026	Essex	Essex	preliminary	préliminaires	Charron-Rowberry		Beth	People's Party - PPC	Parti populaire - PPC	6925	9.9	0	69926
35026	Essex	Essex	preliminary	préliminaires	Festeryga		Audrey	Liberal	Libéral	10778	15.4	0	69926
35026	Essex	Essex	preliminary	préliminaires	George		Andrew	Independent	Indépendant(e)	172	.2	0	69926
35026	Essex	Essex	preliminary	préliminaires	Lewis		Chris	Conservative	Conservateur	28741	41.1	0	69926
35026	Essex	Essex	preliminary	préliminaires	Palko		Jeremy	Christian Heritage Party	Parti de l'Héritage Chrétien	182	.3	0	69926
35026	Essex	Essex	preliminary	préliminaires	Pancheshan		Nancy	Green Party	Parti Vert	859	1.2	0	69926
35026	Essex	Essex	preliminary	préliminaires	Ramsey		Tracey	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	22269	31.8	0	69926
35027	Etobicoke Centre	Etobicoke-Centre	preliminary	préliminaires	Baker		Yvan	Liberal	Libéral	27623	47.9	0	57640
35027	Etobicoke Centre	Etobicoke-Centre	preliminary	préliminaires	Cormier		Maurice	People's Party - PPC	Parti populaire - PPC	4000	6.9	0	57640
35027	Etobicoke Centre	Etobicoke-Centre	preliminary	préliminaires	Da silva		Ashley	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5809	10.1	0	57640
35027	Etobicoke Centre	Etobicoke-Centre	preliminary	préliminaires	Turner		Geoffrey	Conservative	Conservateur	20208	35.1	0	57640
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Bains		Indira	Conservative	Conservateur	20436	31.9	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Carson		Sean	Parti Rhinocéros Party	Parti Rhinocéros Party	119	.2	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Di Carlo		Anna	Marxist-Leninist	Marxiste-Léniniste	139	.2	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Elue		Afam	Green Party	Parti Vert	1363	2.1	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Kane		Sasha	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8774	13.7	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	Maloney		James	Liberal	Libéral	30359	47.4	0	64047
35028	Etobicoke--Lakeshore	Etobicoke--Lakeshore	preliminary	préliminaires	McLachlan		Bill	People's Party - PPC	Parti populaire - PPC	2857	4.5	0	64047
35029	Etobicoke North	Etobicoke-Nord	preliminary	préliminaires	Boutsikakis		Jim	People's Party - PPC	Parti populaire - PPC	1536	4.3	0	35637
35029	Etobicoke North	Etobicoke-Nord	preliminary	préliminaires	Duncan		Kirsty	Liberal	Libéral	21212	59.5	0	35637
35029	Etobicoke North	Etobicoke-Nord	preliminary	préliminaires	Lamba		Priti	Conservative	Conservateur	8873	24.9	0	35637
35029	Etobicoke North	Etobicoke-Nord	preliminary	préliminaires	Peter		Cecil	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3691	10.4	0	35637
35029	Etobicoke North	Etobicoke-Nord	preliminary	préliminaires	Royer		Carol	Independent	Indépendant(e)	325	.9	0	35637
35030	Flamborough--Glanbrook	Flamborough--Glanbrook	preliminary	préliminaires	Hatch		Thomas	Green Party	Parti Vert	1403	2.3	0	59878
35030	Flamborough--Glanbrook	Flamborough--Glanbrook	preliminary	préliminaires	Muys		Dan	Conservative	Conservateur	24031	40.1	0	59878
35030	Flamborough--Glanbrook	Flamborough--Glanbrook	preliminary	préliminaires	Newick		Lorne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9409	15.7	0	59878
35030	Flamborough--Glanbrook	Flamborough--Glanbrook	preliminary	préliminaires	Panchyshyn		Bill	People's Party - PPC	Parti populaire - PPC	3685	6.2	0	59878
35030	Flamborough--Glanbrook	Flamborough--Glanbrook	preliminary	préliminaires	Sgro		Vito	Liberal	Libéral	21350	35.7	0	59878
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Austring		Brennan	People's Party - PPC	Parti populaire - PPC	4477	6.7	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Bisaillon		Marc	Free Party Canada	Parti Libre Canada	429	.6	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Drouin		Francis	Liberal	Libéral	30564	46	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Joker		The	Independent	Indépendant(e)	315	.5	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Lapierre		Daniel	Green Party	Parti Vert	1357	2	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	Malakos		Konstantine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7100	10.7	0	66375
35031	Glengarry--Prescott--Russell	Glengarry--Prescott--Russell	preliminary	préliminaires	McArthur		Susan	Conservative	Conservateur	22133	33.3	0	66375
35032	Guelph	Guelph	preliminary	préliminaires	Bowman		Michelle	Green Party	Parti Vert	5250	7.5	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Dineen		Tristan	Communist	Communiste	187	.3	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Jahangir		Aisha	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14716	21.1	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Leier		Joshua	People's Party - PPC	Parti populaire - PPC	3182	4.6	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Levenson		Karen	Animal Protection Party	Parti Protection Animaux	262	.4	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Longfield		Lloyd	Liberal	Libéral	29376	42.1	0	69769
35032	Guelph	Guelph	preliminary	préliminaires	Sachan		Ashish	Conservative	Conservateur	16796	24.1	0	69769
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	Gilpin		Ken	People's Party - PPC	Parti populaire - PPC	6570	10.5	0	62505
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	Lewis		Leslyn	Conservative	Conservateur	29586	47.3	0	62505
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	Lugosi		Charles	Christian Heritage Party	Parti de l'Héritage Chrétien	559	.9	0	62505
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	Matthews		Karen	Liberal	Libéral	17208	27.5	0	62505
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	McMorrow		George	VCP	CAC	262	.4	0	62505
35033	Haldimand--Norfolk	Haldimand--Norfolk	preliminary	préliminaires	Piironen		Meghan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8320	13.3	0	62505
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Balfour		Gene	Libertarian	Libertarien	463	.7	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Davidson		Alison	People's Party - PPC	Parti populaire - PPC	4769	7	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Forbes		Judi	Liberal	Libéral	15645	23.1	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Godsoe		Angel	Green Party	Parti Vert	1699	2.5	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Miller		Zac	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9730	14.4	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	preliminary	préliminaires	Schmale		Jamie	Conservative	Conservateur	35418	52.3	0	67724
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Balfour		Gene	Libertarian	Libertarien	463	.7	493	68214
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Davidson		Alison	People's Party - PPC	Parti populaire - PPC	4769	7	493	68214
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Forbes		Judi	Liberal	Libéral	15645	23.1	493	68214
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Godsoe		Angel	Green Party	Parti Vert	1696	2.5	493	68214
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Miller		Zac	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9730	14.4	493	68214
35034	Haliburton--Kawartha Lakes--Brock	Haliburton--Kawartha Lakes--Brock	validated	validés	Schmale		Jamie	Conservative	Conservateur	35418	52.3	493	68214
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Barber		Kevin	People's Party - PPC	Parti populaire - PPC	2704	6.5	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Bennett		Margaret	Liberal	Libéral	11010	26.5	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Cheriyan		Nigel	Communist	Communiste	217	.5	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Green		Matthew	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20139	48.4	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Grenning		Fabian	Conservative	Conservateur	6317	15.2	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Weinstein		Avra Caroline	Green Party	Parti Vert	1129	2.7	0	41616
35035	Hamilton Centre	Hamilton-Centre	preliminary	préliminaires	Yan		Nathalie Xian Yi	Independent	Indépendant(e)	100	.2	0	41616
35036	Hamilton East--Stoney Creek	Hamilton-Est--Stoney Creek	preliminary	préliminaires	Collins		Chad	Liberal	Libéral	18377	37	0	49730
35036	Hamilton East--Stoney Creek	Hamilton-Est--Stoney Creek	preliminary	préliminaires	Kuruc		Ned	Conservative	Conservateur	13988	28.1	0	49730
35036	Hamilton East--Stoney Creek	Hamilton-Est--Stoney Creek	preliminary	préliminaires	Milanovic		Nick	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12653	25.4	0	49730
35036	Hamilton East--Stoney Creek	Hamilton-Est--Stoney Creek	preliminary	préliminaires	Pattison		Larry	Green Party	Parti Vert	1018	2	0	49730
35036	Hamilton East--Stoney Creek	Hamilton-Est--Stoney Creek	preliminary	préliminaires	Ricci		Mario	People's Party - PPC	Parti populaire - PPC	3694	7.4	0	49730
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Allen		Malcolm	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15712	32.4	0	48504
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Enos		Jim	Christian Heritage Party	Parti de l'Héritage Chrétien	336	.7	0	48504
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Hepfner		Lisa	Liberal	Libéral	16547	34.1	0	48504
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Miles		Al	Conservative	Conservateur	11838	24.4	0	48504
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Taylor		Chelsey	People's Party - PPC	Parti populaire - PPC	3097	6.4	0	48504
35037	Hamilton Mountain	Hamilton Mountain	preliminary	préliminaires	Urquhart		Dave	Green Party	Parti Vert	974	2	0	48504
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Galea		Victoria	Green Party	Parti Vert	1663	2.7	0	62648
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Henriquez		Roberto	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12337	19.7	0	62648
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Laranjo		Bert	Conservative	Conservateur	18122	28.9	0	62648
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Rocchi		Spencer	Parti Rhinocéros Party	Parti Rhinocéros Party	137	.2	0	62648
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Tassi		Filomena	Liberal	Libéral	27797	44.4	0	62648
35038	Hamilton West--Ancaster--Dundas	Hamilton-Ouest--Ancaster--Dundas	preliminary	préliminaires	Woods		Dean	People's Party - PPC	Parti populaire - PPC	2592	4.1	0	62648
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	Babcock		James	People's Party - PPC	Parti populaire - PPC	3131	5.7	0	54669
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	Bossio		Mike	Liberal	Libéral	19056	34.9	0	54669
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	DeBues		Matilda	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6020	11	0	54669
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	Kramp-Neuman		Shelby	Conservative	Conservateur	24653	45.1	0	54669
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	Sloan		Jennifer	Independent	Indépendant(e)	838	1.5	0	54669
35039	Hastings--Lennox and Addington	Hastings--Lennox and Addington	preliminary	préliminaires	Wilson		Reg	Green Party	Parti Vert	971	1.8	0	54669
35040	Huron--Bruce	Huron--Bruce	preliminary	préliminaires	Johnstone		Jan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9123	14.8	0	61846
35040	Huron--Bruce	Huron--Bruce	preliminary	préliminaires	Lobb		Ben	Conservative	Conservateur	31591	51.1	0	61846
35040	Huron--Bruce	Huron--Bruce	preliminary	préliminaires	Rice		James	Liberal	Libéral	16138	26.1	0	61846
35040	Huron--Bruce	Huron--Bruce	preliminary	préliminaires	Smith		Justin L	Independent	Indépendant(e)	523	.8	0	61846
35040	Huron--Bruce	Huron--Bruce	preliminary	préliminaires	Stecho		Jack	People's Party - PPC	Parti populaire - PPC	4471	7.2	0	61846
35041	Kanata--Carleton	Kanata--Carleton	preliminary	préliminaires	Coenraad		Melissa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8822	14	0	63156
35041	Kanata--Carleton	Kanata--Carleton	preliminary	préliminaires	McAndrew		Jennifer	Conservative	Conservateur	24373	38.6	0	63156
35041	Kanata--Carleton	Kanata--Carleton	preliminary	préliminaires	Miller		Scott	People's Party - PPC	Parti populaire - PPC	1858	2.9	0	63156
35041	Kanata--Carleton	Kanata--Carleton	preliminary	préliminaires	Purdy		Jennifer	Green Party	Parti Vert	1709	2.7	0	63156
35041	Kanata--Carleton	Kanata--Carleton	preliminary	préliminaires	Sudds		Jenna	Liberal	Libéral	26394	41.8	0	63156
35042	Kenora	Kenora	preliminary	préliminaires	Bruno		David	Liberal	Libéral	5190	19.9	0	26084
35042	Kenora	Kenora	preliminary	préliminaires	Martin		Craig	People's Party - PPC	Parti populaire - PPC	1625	6.2	0	26084
35042	Kenora	Kenora	preliminary	préliminaires	Melillo		Eric	Conservative	Conservateur	11103	42.6	0	26084
35042	Kenora	Kenora	preliminary	préliminaires	Rheault		Remi	Green Party	Parti Vert	364	1.4	0	26084
35042	Kenora	Kenora	preliminary	préliminaires	Seymour		Janine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7802	29.9	0	26084
35043	King--Vaughan	King--Vaughan	preliminary	préliminaires	Herod		Roberta	Green Party	Parti Vert	620	1.2	0	49979
35043	King--Vaughan	King--Vaughan	preliminary	préliminaires	Lozano		Sandra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3234	6.5	0	49979
35043	King--Vaughan	King--Vaughan	preliminary	préliminaires	Oprisan		Gilmar	People's Party - PPC	Parti populaire - PPC	2139	4.3	0	49979
35043	King--Vaughan	King--Vaughan	preliminary	préliminaires	Roberts		Anna	Conservative	Conservateur	22529	45.1	0	49979
35043	King--Vaughan	King--Vaughan	preliminary	préliminaires	Schulte		Deb	Liberal	Libéral	21457	42.9	0	49979
35044	Kingston and the Islands	Kingston et les Îles	preliminary	préliminaires	Gerretsen		Mark	Liberal	Libéral	27661	41.3	0	67001
35044	Kingston and the Islands	Kingston et les Îles	preliminary	préliminaires	Khan		Waji	Green Party	Parti Vert	1651	2.5	0	67001
35044	Kingston and the Islands	Kingston et les Îles	preliminary	préliminaires	Oosterhof		Gary	Conservative	Conservateur	15748	23.5	0	67001
35044	Kingston and the Islands	Kingston et les Îles	preliminary	préliminaires	Sahai		Vic	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	19638	29.3	0	67001
35044	Kingston and the Islands	Kingston et les Îles	preliminary	préliminaires	Sayle-Udall		Shelley	People's Party - PPC	Parti populaire - PPC	2303	3.4	0	67001
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Boskovic		Diane	People's Party - PPC	Parti populaire - PPC	3481	6.8	0	51275
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Henein Thorn		Mary	Conservative	Conservateur	12535	24.4	0	51275
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Morrice		Mike	Green Party	Parti Vert	17870	34.9	0	51275
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Papenburg		Ellen	Animal Protection Party	Parti Protection Animaux	154	.3	0	51275
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Saini		Raj	Liberal	Libéral	8297	16.2	0	51275
35045	Kitchener Centre	Kitchener-Centre	preliminary	préliminaires	Zubi		Beisan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8938	17.4	0	51275
35046	Kitchener--Conestoga	Kitchener--Conestoga	preliminary	préliminaires	Bradley		Owen	Green Party	Parti Vert	1842	3.6	0	50903
35046	Kitchener--Conestoga	Kitchener--Conestoga	preliminary	préliminaires	Dupuis		Kevin	People's Party - PPC	Parti populaire - PPC	3692	7.3	0	50903
35046	Kitchener--Conestoga	Kitchener--Conestoga	preliminary	préliminaires	Hawley		Carlene	Conservative	Conservateur	19447	38.2	0	50903
35046	Kitchener--Conestoga	Kitchener--Conestoga	preliminary	préliminaires	Louis		Tim	Liberal	Libéral	19975	39.2	0	50903
35046	Kitchener--Conestoga	Kitchener--Conestoga	preliminary	préliminaires	Sookram		Narine Dat	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5947	11.7	0	50903
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Arangath		Suresh	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8079	16.3	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Baetz		Elaine	Marxist-Leninist	Marxiste-Léniniste	57	.1	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Baumgaertner		Melissa	People's Party - PPC	Parti populaire - PPC	3351	6.7	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Bradford		Valerie	Liberal	Libéral	18596	37.5	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Calver		Tyler	Conservative	Conservateur	17649	35.5	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Davis		Stephen	Parti Rhinocéros Party	Parti Rhinocéros Party	93	.2	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Morrison		C.A.	Independent	Indépendant(e)	119	.2	0	49654
35047	Kitchener South--Hespeler	Kitchener-Sud--Hespeler	preliminary	préliminaires	Rose		Gabe	Green Party	Parti Vert	1710	3.4	0	49654
35048	Lambton--Kent--Middlesex	Lambton--Kent--Middlesex	preliminary	préliminaires	Henry		Jason	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11053	18.2	0	60609
35048	Lambton--Kent--Middlesex	Lambton--Kent--Middlesex	preliminary	préliminaires	Hull		Jeremy	Green Party	Parti Vert	1035	1.7	0	60609
35048	Lambton--Kent--Middlesex	Lambton--Kent--Middlesex	preliminary	préliminaires	Mitchell		Kevin	People's Party - PPC	Parti populaire - PPC	6567	10.8	0	60609
35048	Lambton--Kent--Middlesex	Lambton--Kent--Middlesex	preliminary	préliminaires	Ranade		Sudit	Liberal	Libéral	12522	20.7	0	60609
35048	Lambton--Kent--Middlesex	Lambton--Kent--Middlesex	preliminary	préliminaires	Rood		Lianne	Conservative	Conservateur	29432	48.6	0	60609
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Bors		Florian	People's Party - PPC	Parti populaire - PPC	3835	6.1	0	62916
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Foxton		Michelle	Liberal	Libéral	16626	26.4	0	62916
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Garrison		Steve	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9825	15.6	0	62916
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Hamilton		Blake	Parti Rhinocéros Party	Parti Rhinocéros Party	212	.3	0	62916
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Neufeld		Calvin	Green Party	Parti Vert	1723	2.7	0	62916
35049	Lanark--Frontenac--Kingston	Lanark--Frontenac--Kingston	preliminary	préliminaires	Reid		Scott	Conservative	Conservateur	30695	48.8	0	62916
35050	Leeds-Grenville-Thousand Islands and Rideau Lakes	Leeds-Grenville-Thousand Islands et Rideau Lakes	preliminary	préliminaires	Abbott		Roberta L	Liberal	Libéral	14964	25.3	0	59223
35050	Leeds-Grenville-Thousand Islands and Rideau Lakes	Leeds-Grenville-Thousand Islands et Rideau Lakes	preliminary	préliminaires	Barrett		Michael	Conservative	Conservateur	29947	50.6	0	59223
35050	Leeds-Grenville-Thousand Islands and Rideau Lakes	Leeds-Grenville-Thousand Islands et Rideau Lakes	preliminary	préliminaires	Cassell		Alex	People's Party - PPC	Parti populaire - PPC	3398	5.7	0	59223
35050	Leeds-Grenville-Thousand Islands and Rideau Lakes	Leeds-Grenville-Thousand Islands et Rideau Lakes	preliminary	préliminaires	Rekmans		Lorraine	Green Party	Parti Vert	2135	3.6	0	59223
35050	Leeds-Grenville-Thousand Islands and Rideau Lakes	Leeds-Grenville-Thousand Islands et Rideau Lakes	preliminary	préliminaires	Taylor		Michelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8779	14.8	0	59223
35051	London--Fanshawe	London--Fanshawe	preliminary	préliminaires	Free		Kyle	People's Party - PPC	Parti populaire - PPC	4718	9.2	0	51430
35051	London--Fanshawe	London--Fanshawe	preliminary	préliminaires	Hammoud		Mohamed	Liberal	Libéral	11881	23.1	0	51430
35051	London--Fanshawe	London--Fanshawe	preliminary	préliminaires	Mathyssen		Lindsay	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	22340	43.4	0	51430
35051	London--Fanshawe	London--Fanshawe	preliminary	préliminaires	Vanderley		Mattias	Conservative	Conservateur	12491	24.3	0	51430
35051	London--Fanshawe	London--Fanshawe	validated	validés	Free		Kyle	People's Party - PPC	Parti populaire - PPC	4718	9.2	511	51933
35051	London--Fanshawe	London--Fanshawe	validated	validés	Hammoud		Mohamed	Liberal	Libéral	11882	23.1	511	51933
35051	London--Fanshawe	London--Fanshawe	validated	validés	Mathyssen		Lindsay	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	22336	43.4	511	51933
35051	London--Fanshawe	London--Fanshawe	validated	validés	Vanderley		Mattias	Conservative	Conservateur	12486	24.3	511	51933
35052	London North Centre	London-Centre-Nord	preliminary	préliminaires	Emery		Marc	People's Party - PPC	Parti populaire - PPC	2902	5	0	58554
35052	London North Centre	London-Centre-Nord	preliminary	préliminaires	Fragiskatos		Peter	Liberal	Libéral	22856	39	0	58554
35052	London North Centre	London-Centre-Nord	preliminary	préliminaires	Gallant		Stephen	Conservative	Conservateur	15881	27.1	0	58554
35052	London North Centre	London-Centre-Nord	preliminary	préliminaires	Hodge		Mary Ann	Green Party	Parti Vert	1292	2.2	0	58554
35052	London North Centre	London-Centre-Nord	preliminary	préliminaires	Prout		Dirka	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15623	26.7	0	58554
35053	London West	London-Ouest	preliminary	préliminaires	Boudreau		Jacques Y	Libertarian	Libertarien	822	1.2	0	68608
35053	London West	London-Ouest	preliminary	préliminaires	Flack		Rob	Conservative	Conservateur	22291	32.5	0	68608
35053	London West	London-Ouest	preliminary	préliminaires	Kayabaga		Arielle	Liberal	Libéral	25247	36.8	0	68608
35053	London West	London-Ouest	preliminary	préliminaires	Lewkowitz		Shawna	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16763	24.4	0	68608
35053	London West	London-Ouest	preliminary	préliminaires	McMullen		Mike	People's Party - PPC	Parti populaire - PPC	3485	5.1	0	68608
35054	Markham--Stouffville	Markham--Stouffville	preliminary	préliminaires	Baig		Uzair	Green Party	Parti Vert	975	1.8	0	55158
35054	Markham--Stouffville	Markham--Stouffville	preliminary	préliminaires	De Vries		René	People's Party - PPC	Parti populaire - PPC	1810	3.3	0	55158
35054	Markham--Stouffville	Markham--Stouffville	preliminary	préliminaires	Jaczek		Helena	Liberal	Libéral	27997	50.8	0	55158
35054	Markham--Stouffville	Markham--Stouffville	preliminary	préliminaires	Sahi		Muhammad Ahsin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4674	8.5	0	55158
35054	Markham--Stouffville	Markham--Stouffville	preliminary	préliminaires	Smith		Ben	Conservative	Conservateur	19702	35.7	0	55158
35055	Markham--Thornhill	Markham--Thornhill	preliminary	préliminaires	Felian		Melissa	Conservative	Conservateur	10126	26.3	0	38505
35055	Markham--Thornhill	Markham--Thornhill	preliminary	préliminaires	Lee		Mimi	Green Party	Parti Vert	813	2.1	0	38505
35055	Markham--Thornhill	Markham--Thornhill	preliminary	préliminaires	Ng		Mary	Liberal	Libéral	23699	61.5	0	38505
35055	Markham--Thornhill	Markham--Thornhill	preliminary	préliminaires	Pashaev		Ilia	People's Party - PPC	Parti populaire - PPC	645	1.7	0	38505
35055	Markham--Thornhill	Markham--Thornhill	preliminary	préliminaires	Sahbaz		Paul	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3222	8.4	0	38505
35056	Markham--Unionville	Markham--Unionville	preliminary	préliminaires	Chiang		Paul	Liberal	Libéral	21912	48.5	0	45151
35056	Markham--Unionville	Markham--Unionville	preliminary	préliminaires	Kao		Elvin	Green Party	Parti Vert	1246	2.8	0	45151
35056	Markham--Unionville	Markham--Unionville	preliminary	préliminaires	Qureshi		Aftab	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3000	6.6	0	45151
35056	Markham--Unionville	Markham--Unionville	preliminary	préliminaires	Saroya		Bob	Conservative	Conservateur	18993	42.1	0	45151
35057	Milton	Milton	preliminary	préliminaires	Akbar		Nadeem	Conservative	Conservateur	18297	32.7	0	55878
35057	Milton	Milton	preliminary	préliminaires	Haddad		Shibli	People's Party - PPC	Parti populaire - PPC	2365	4.2	0	55878
35057	Milton	Milton	preliminary	préliminaires	Kowalchuk		Chris	Green Party	Parti Vert	1280	2.3	0	55878
35057	Milton	Milton	preliminary	préliminaires	Sahi		Muhammad Riaz	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4925	8.8	0	55878
35057	Milton	Milton	preliminary	préliminaires	van Koeverden		Adam	Liberal	Libéral	29011	51.9	0	55878
35058	Mississauga Centre	Mississauga-Centre	preliminary	préliminaires	Alghabra		Omar	Liberal	Libéral	25714	54.2	0	47446
35058	Mississauga Centre	Mississauga-Centre	preliminary	préliminaires	Diab		Elie	People's Party - PPC	Parti populaire - PPC	2148	4.5	0	47446
35058	Mississauga Centre	Mississauga-Centre	preliminary	préliminaires	Laferriere		Craig	Green Party	Parti Vert	864	1.8	0	47446
35058	Mississauga Centre	Mississauga-Centre	preliminary	préliminaires	Samuel		Teneshia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5330	11.2	0	47446
35058	Mississauga Centre	Mississauga-Centre	preliminary	préliminaires	Zhao		Kathy-Ying	Conservative	Conservateur	13390	28.2	0	47446
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Adamu		Grace	Conservative	Conservateur	14739	32.2	0	45778
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Elliott		Gord	Independent	Indépendant(e)	339	.7	0	45778
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Fonseca		Peter	Liberal	Libéral	22781	49.8	0	45778
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Sullivan		Dagmar	Marxist-Leninist	Marxiste-Léniniste	312	.7	0	45778
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Takacs		Tom	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4670	10.2	0	45778
35059	Mississauga East--Cooksville	Mississauga-Est--Cooksville	preliminary	préliminaires	Westover		Joseph	People's Party - PPC	Parti populaire - PPC	2937	6.4	0	45778
35060	Mississauga--Erin Mills	Mississauga--Erin Mills	preliminary	préliminaires	Bayer		Michael	People's Party - PPC	Parti populaire - PPC	1713	3.4	0	50677
35060	Mississauga--Erin Mills	Mississauga--Erin Mills	preliminary	préliminaires	DeSilva		Ewan	Green Party	Parti Vert	825	1.6	0	50677
35060	Mississauga--Erin Mills	Mississauga--Erin Mills	preliminary	préliminaires	Khalid		Iqra	Liberal	Libéral	25751	50.8	0	50677
35060	Mississauga--Erin Mills	Mississauga--Erin Mills	preliminary	préliminaires	Nguyen		James	Conservative	Conservateur	17094	33.7	0	50677
35060	Mississauga--Erin Mills	Mississauga--Erin Mills	preliminary	préliminaires	Usman		Kaukab	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5294	10.4	0	50677
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Ras		Michael	Conservative	Conservateur	21751	38.7	0	56244
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Robertson		Elizabeth	Green Party	Parti Vert	1265	2.2	0	56244
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Seyfaie		Vahid	People's Party - PPC	Parti populaire - PPC	2361	4.2	0	56244
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Spengemann		Sven	Liberal	Libéral	25284	45	0	56244
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Tahk		Kayleigh	Parti Rhinocéros Party	Parti Rhinocéros Party	100	.2	0	56244
35061	Mississauga--Lakeshore	Mississauga--Lakeshore	preliminary	préliminaires	Walji		Sarah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5483	9.7	0	56244
35062	Mississauga--Malton	Mississauga--Malton	preliminary	préliminaires	Ahmed		Waseem	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5761	14	0	41176
35062	Mississauga--Malton	Mississauga--Malton	preliminary	préliminaires	Chilelli		Frank	Marxist-Leninist	Marxiste-Léniniste	283	.7	0	41176
35062	Mississauga--Malton	Mississauga--Malton	preliminary	préliminaires	Davidson		Mark	Green Party	Parti Vert	811	2	0	41176
35062	Mississauga--Malton	Mississauga--Malton	preliminary	préliminaires	Gaheer		Iqwinder	Liberal	Libéral	21766	52.9	0	41176
35062	Mississauga--Malton	Mississauga--Malton	preliminary	préliminaires	Roach		Clyde	Conservative	Conservateur	12555	30.5	0	41176
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Hassan		Farina	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6150	11.8	0	52015
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Hill		Chris	Green Party	Parti Vert	1079	2.1	0	52015
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Rattan		Jasveen	Conservative	Conservateur	17505	33.7	0	52015
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Spizzirri		Natalie	Animal Protection Party	Parti Protection Animaux	254	.5	0	52015
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Valdez		Rechie	Liberal	Libéral	24645	47.4	0	52015
35063	Mississauga--Streetsville	Mississauga--Streetsville	preliminary	préliminaires	Wolosz		Gurdeep	People's Party - PPC	Parti populaire - PPC	2382	4.6	0	52015
35064	Nepean	Nepean	preliminary	préliminaires	Arya		Chandra	Liberal	Libéral	29620	45.1	0	65748
35064	Nepean	Nepean	preliminary	préliminaires	Devine		Sean	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10786	16.4	0	65748
35064	Nepean	Nepean	preliminary	préliminaires	Kubanek		Gordon	Green Party	Parti Vert	1318	2	0	65748
35064	Nepean	Nepean	preliminary	préliminaires	Nera		Jay	People's Party - PPC	Parti populaire - PPC	1840	2.8	0	65748
35064	Nepean	Nepean	preliminary	préliminaires	Triemstra		Matt	Conservative	Conservateur	22184	33.7	0	65748
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Baxter		Dorian	Independent	Indépendant(e)	260	.5	0	55220
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Flemming		Tim	Green Party	Parti Vert	1015	1.8	0	55220
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Gagnon		Andre	People's Party - PPC	Parti populaire - PPC	2296	4.2	0	55220
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Kelly		Yvonne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6338	11.5	0	55220
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Kim		Harold	Conservative	Conservateur	21173	38.3	0	55220
35065	Newmarket--Aurora	Newmarket--Aurora	preliminary	préliminaires	Van Bynen		Tony	Liberal	Libéral	24138	43.7	0	55220
35066	Niagara Centre	Niagara-Centre	preliminary	préliminaires	Badawey		Vance	Liberal	Libéral	20574	35	0	58809
35066	Niagara Centre	Niagara-Centre	preliminary	préliminaires	Kimmons		Michael	People's Party - PPC	Parti populaire - PPC	4670	7.9	0	58809
35066	Niagara Centre	Niagara-Centre	preliminary	préliminaires	McCartney		Kurtis	Green Party	Parti Vert	1143	1.9	0	58809
35066	Niagara Centre	Niagara-Centre	preliminary	préliminaires	McGlashan		Melissa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14098	24	0	58809
35066	Niagara Centre	Niagara-Centre	preliminary	préliminaires	Speck		Graham	Conservative	Conservateur	18324	31.2	0	58809
35067	Niagara Falls	Niagara Falls	preliminary	préliminaires	Baldinelli		Tony	Conservative	Conservateur	26810	37.9	0	70662
35067	Niagara Falls	Niagara Falls	preliminary	préliminaires	Barker		Brian	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12871	18.2	0	70662
35067	Niagara Falls	Niagara Falls	preliminary	préliminaires	Holm		Melanie	Green Party	Parti Vert	1380	2	0	70662
35067	Niagara Falls	Niagara Falls	preliminary	préliminaires	Kaiser		Andrea	Liberal	Libéral	23650	33.5	0	70662
35067	Niagara Falls	Niagara Falls	preliminary	préliminaires	Taras		Peter	People's Party - PPC	Parti populaire - PPC	5951	8.4	0	70662
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Allison		Dean	Conservative	Conservateur	25276	45.7	0	55351
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Bingham		Ian	Liberal	Libéral	16813	30.4	0	55351
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Derkson		Shaunalee	People's Party - PPC	Parti populaire - PPC	3937	7.1	0	55351
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Jonker		Harold	Christian Heritage Party	Parti de l'Héritage Chrétien	667	1.2	0	55351
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Kocsis		Joanna	Green Party	Parti Vert	1604	2.9	0	55351
35068	Niagara West	Niagara-Ouest	preliminary	préliminaires	Rahman		Nameer	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7054	12.7	0	55351
35069	Nickel Belt	Nickel Belt	preliminary	préliminaires	Chénier		Andréane Simone	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13597	27.3	0	49798
35069	Nickel Belt	Nickel Belt	preliminary	préliminaires	Gravelle		Craig	Green Party	Parti Vert	864	1.7	0	49798
35069	Nickel Belt	Nickel Belt	preliminary	préliminaires	Hobbs		David	People's Party - PPC	Parti populaire - PPC	4549	9.1	0	49798
35069	Nickel Belt	Nickel Belt	preliminary	préliminaires	Humphrey		Charles	Conservative	Conservateur	13430	27	0	49798
35069	Nickel Belt	Nickel Belt	preliminary	préliminaires	Serré		Marc G	Liberal	Libéral	17358	34.9	0	49798
35070	Nipissing--Timiskaming	Nipissing--Timiskaming	preliminary	préliminaires	Galante		Gregory J	People's Party - PPC	Parti populaire - PPC	3504	7.4	0	47210
35070	Nipissing--Timiskaming	Nipissing--Timiskaming	preliminary	préliminaires	Robertson		Scott	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10573	22.4	0	47210
35070	Nipissing--Timiskaming	Nipissing--Timiskaming	preliminary	préliminaires	Rota		Anthony	Liberal	Libéral	18047	38.2	0	47210
35070	Nipissing--Timiskaming	Nipissing--Timiskaming	preliminary	préliminaires	Trahan		Steven	Conservative	Conservateur	15086	32	0	47210
35071	Northumberland--Peterborough South	Northumberland--Peterborough-Sud	preliminary	préliminaires	Lang		Nathan	People's Party - PPC	Parti populaire - PPC	3785	5.5	0	69285
35071	Northumberland--Peterborough South	Northumberland--Peterborough-Sud	preliminary	préliminaires	Lawrence		Philip	Conservative	Conservateur	30839	44.5	0	69285
35071	Northumberland--Peterborough South	Northumberland--Peterborough-Sud	preliminary	préliminaires	Lester		Alison	Liberal	Libéral	23136	33.4	0	69285
35071	Northumberland--Peterborough South	Northumberland--Peterborough-Sud	preliminary	préliminaires	McArthur-Jackson		Kim	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9760	14.1	0	69285
35071	Northumberland--Peterborough South	Northumberland--Peterborough-Sud	preliminary	préliminaires	Wilson		Christina	Green Party	Parti Vert	1765	2.5	0	69285
35072	Oakville	Oakville	preliminary	préliminaires	Adamo		Jerome	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5377	8.9	0	60583
35072	Oakville	Oakville	preliminary	préliminaires	Anand		Anita	Liberal	Libéral	28126	46.4	0	60583
35072	Oakville	Oakville	preliminary	préliminaires	Colborne		Kerry	Conservative	Conservateur	24020	39.6	0	60583
35072	Oakville	Oakville	preliminary	préliminaires	Knox		Oriana	Green Party	Parti Vert	1090	1.8	0	60583
35072	Oakville	Oakville	preliminary	préliminaires	Meaney		JD	People's Party - PPC	Parti populaire - PPC	1970	3.3	0	60583
35073	Oakville North--Burlington	Oakville-Nord--Burlington	preliminary	préliminaires	Damoff		Pam	Liberal	Libéral	30851	46.8	0	65948
35073	Oakville North--Burlington	Oakville-Nord--Burlington	preliminary	préliminaires	Dupuis		Lenaee	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6602	10	0	65948
35073	Oakville North--Burlington	Oakville-Nord--Burlington	preliminary	préliminaires	Jubinville		Gilbert	People's Party - PPC	Parti populaire - PPC	2409	3.7	0	65948
35073	Oakville North--Burlington	Oakville-Nord--Burlington	preliminary	préliminaires	Rizkalla		Hanan	Conservative	Conservateur	25074	38	0	65948
35073	Oakville North--Burlington	Oakville-Nord--Burlington	preliminary	préliminaires	Sousa		Bruno	Green Party	Parti Vert	1012	1.5	0	65948
35074	Oshawa	Oshawa	preliminary	préliminaires	Carrie		Colin	Conservative	Conservateur	22409	39.7	0	56427
35074	Oshawa	Oshawa	preliminary	préliminaires	Hossain		Afroza	Liberal	Libéral	12866	22.8	0	56427
35074	Oshawa	Oshawa	preliminary	préliminaires	Mackie		Darryl	People's Party - PPC	Parti populaire - PPC	3985	7.1	0	56427
35074	Oshawa	Oshawa	preliminary	préliminaires	Mir		Sonny	Green Party	Parti Vert	1110	2	0	56427
35074	Oshawa	Oshawa	preliminary	préliminaires	Panylo		Shailene	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16057	28.5	0	56427
35074	Oshawa	Oshawa	validated	validés	Carrie		Colin	Conservative	Conservateur	22409	39.7	417	56842
35074	Oshawa	Oshawa	validated	validés	Hossain		Afroza	Liberal	Libéral	13044	23.1	417	56842
35074	Oshawa	Oshawa	validated	validés	Mackie		Darryl	People's Party - PPC	Parti populaire - PPC	4029	7.1	417	56842
35074	Oshawa	Oshawa	validated	validés	Mir		Sonny	Green Party	Parti Vert	864	1.5	417	56842
35074	Oshawa	Oshawa	validated	validés	Panylo		Shailene	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16079	28.5	417	56842
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Bertrand		Shelby	Animal Protection Party	Parti Protection Animaux	290	.4	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Clemenhagen		Carol	Conservative	Conservateur	11626	15.6	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Joyal		Richard "Rich"	Independent	Indépendant(e)	185	.2	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Keller-Herzog		Angela	Green Party	Parti Vert	2184	2.9	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	MacEwen		Angella	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	24544	33	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	McDonald		Alex	Communist	Communiste	202	.3	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Naqvi		Yasir	Liberal	Libéral	33836	45.4	0	74483
35075	Ottawa Centre	Ottawa-Centre	preliminary	préliminaires	Watteel		Regina	People's Party - PPC	Parti populaire - PPC	1616	2.2	0	74483
35076	Orléans	Orléans	preliminary	préliminaires	Cléroux		André Junior	Free Party Canada	Parti Libre Canada	220	.3	0	75283
35076	Orléans	Orléans	preliminary	préliminaires	Hartnett		Michael	Green Party	Parti Vert	1233	1.6	0	75283
35076	Orléans	Orléans	preliminary	préliminaires	Joanis		Jessica	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10983	14.6	0	75283
35076	Orléans	Orléans	preliminary	préliminaires	Lalonde		Marie-France	Liberal	Libéral	39101	51.9	0	75283
35076	Orléans	Orléans	preliminary	préliminaires	Oklobdzija		Spencer	People's Party - PPC	Parti populaire - PPC	2046	2.7	0	75283
35076	Orléans	Orléans	preliminary	préliminaires	Wolfe		Mary-Elsie	Conservative	Conservateur	21700	28.8	0	75283
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	Hall		Chylow	People's Party - PPC	Parti populaire - PPC	1887	3.2	0	59481
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	McGuinty		David	Liberal	Libéral	29038	48.8	0	59481
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	Mukbil		Huda	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11506	19.3	0	59481
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	Schram		Les	Green Party	Parti Vert	1401	2.4	0	59481
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	Tannis		Eli	Conservative	Conservateur	15505	26.1	0	59481
35077	Ottawa South	Ottawa-Sud	preliminary	préliminaires	Wasslen		Larry	Communist	Communiste	144	.2	0	59481
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Bourguignon		Crystelle	Free Party Canada	Parti Libre Canada	190	.3	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Desgranges		Jean-Jacques	People's Party - PPC	Parti populaire - PPC	1860	3.2	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Elford		Daniel	Libertarian	Libertarien	268	.5	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Fortier		Mona	Liberal	Libéral	28513	49	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Inamuco		Lyse-Pascale	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13757	23.7	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Jensen		Heidi	Conservative	Conservateur	11599	19.9	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Leriche		Marie-Chantal TaiEl	Independent	Indépendant(e)	165	.3	0	58168
35078	Ottawa--Vanier	Ottawa--Vanier	preliminary	préliminaires	Proulx		Christian	Green Party	Parti Vert	1816	3.1	0	58168
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Hameed		Yavar	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11101	19.4	0	57129
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Jennekens		Jennifer	Conservative	Conservateur	16356	28.6	0	57129
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Mulligan		Sean	Christian Heritage Party	Parti de l'Héritage Chrétien	330	.6	0	57129
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Stibbe		David	Green Party	Parti Vert	1631	2.9	0	57129
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Vandenbeld		Anita	Liberal	Libéral	25796	45.2	0	57129
35079	Ottawa West--Nepean	Ottawa-Ouest--Nepean	preliminary	préliminaires	Yeo		David	People's Party - PPC	Parti populaire - PPC	1915	3.4	0	57129
35080	Oxford	Oxford	preliminary	préliminaires	Chambers		Matthew	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11231	18.2	0	61593
35080	Oxford	Oxford	preliminary	préliminaires	MacKenzie		Dave	Conservative	Conservateur	29034	47.1	0	61593
35080	Oxford	Oxford	preliminary	préliminaires	Martin		Wendy	People's Party - PPC	Parti populaire - PPC	6619	10.7	0	61593
35080	Oxford	Oxford	preliminary	préliminaires	Quinto		Elizabeth	Liberal	Libéral	12563	20.4	0	61593
35080	Oxford	Oxford	preliminary	préliminaires	Reid		Bob	Green Party	Parti Vert	1668	2.7	0	61593
35080	Oxford	Oxford	preliminary	préliminaires	Scovil		Allen	Christian Heritage Party	Parti de l'Héritage Chrétien	478	.8	0	61593
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Danzinger		Wilfried Richard Alexander	People's Party - PPC	Parti populaire - PPC	1642	3.1	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Gershuny		Lorne	Marxist-Leninist	Marxiste-Léniniste	90	.2	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Marchand-Lafortune		Diem	Green Party	Parti Vert	957	1.8	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Parker		Terry	Marijuana Party	Parti Marijuana	130	.2	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Sanajko		Nestor	Conservative	Conservateur	6815	13	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Taylor		Paul	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20602	39.2	0	52543
35081	Parkdale--High Park	Parkdale--High Park	preliminary	préliminaires	Virani		Arif	Liberal	Libéral	22307	42.5	0	52543
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Aitchison		Scott	Conservative	Conservateur	26603	47.9	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Fawcett		James	National Citizens Alliance	Alliance Nationale Citoyens	95	.2	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Hay		Heather	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9374	16.9	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Mantha		Marc	Green Party	Parti Vert	3099	5.6	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Nicoyishakiye		Jovanie	Liberal	Libéral	11980	21.6	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Predie Jr		Daniel	Independent	Indépendant(e)	203	.4	0	55538
35082	Parry Sound--Muskoka	Parry Sound--Muskoka	preliminary	préliminaires	Tole		James	People's Party - PPC	Parti populaire - PPC	4184	7.5	0	55538
35083	Perth--Wellington	Perth--Wellington	preliminary	préliminaires	Baker		Wayne	People's Party - PPC	Parti populaire - PPC	5357	9.6	0	55697
35083	Perth--Wellington	Perth--Wellington	preliminary	préliminaires	Knight		Brendan	Liberal	Libéral	13784	24.7	0	55697
35083	Perth--Wellington	Perth--Wellington	preliminary	préliminaires	Kruchkywich		Kevin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9552	17.1	0	55697
35083	Perth--Wellington	Perth--Wellington	preliminary	préliminaires	Nater		John	Conservative	Conservateur	27004	48.5	0	55697
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	Bowers		Robert M.	Independent	Indépendant(e)	226	.3	0	70055
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	Ferreri		Michelle	Conservative	Conservateur	27301	39	0	70055
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	Lachica		Joy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13335	19	0	70055
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	Lawton		Paul	People's Party - PPC	Parti populaire - PPC	3078	4.4	0	70055
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	Monsef		Maryam	Liberal	Libéral	24564	35.1	0	70055
35084	Peterborough--Kawartha	Peterborough--Kawartha	preliminary	préliminaires	White		Chanté	Green Party	Parti Vert	1551	2.2	0	70055
35085	Pickering--Uxbridge	Pickering--Uxbridge	preliminary	préliminaires	Chisu		Corneliu	People's Party - PPC	Parti populaire - PPC	2327	4	0	58026
35085	Pickering--Uxbridge	Pickering--Uxbridge	preliminary	préliminaires	Higdon		Eileen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7545	13	0	58026
35085	Pickering--Uxbridge	Pickering--Uxbridge	preliminary	préliminaires	Mantle		Jacob	Conservative	Conservateur	20976	36.1	0	58026
35085	Pickering--Uxbridge	Pickering--Uxbridge	preliminary	préliminaires	O'Connell		Jennifer	Liberal	Libéral	27178	46.8	0	58026
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Ainsworth		David	People's Party - PPC	Parti populaire - PPC	4469	7.6	0	58456
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Gallant		Cheryl	Conservative	Conservateur	28967	49.6	0	58456
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Klietsch		Stefan	Independent	Indépendant(e)	379	.6	0	58456
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Lariviere		Michael	Green Party	Parti Vert	1109	1.9	0	58456
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Mills		Cyndi	Liberal	Libéral	11289	19.3	0	58456
35086	Renfrew--Nipissing--Pembroke	Renfrew--Nipissing--Pembroke	preliminary	préliminaires	Primeau		Jodie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12243	20.9	0	58456
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	DeVita		Adam	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3995	8.7	0	45662
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	DiPaola		Charity	Independent	Indépendant(e)	619	1.4	0	45662
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	Jowhari		Majid	Liberal	Libéral	21784	47.7	0	45662
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	Keller		Angelika	Independent	Indépendant(e)	186	.4	0	45662
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	Menegakis		Costas	Conservative	Conservateur	17715	38.8	0	45662
35087	Richmond Hill	Richmond Hill	preliminary	préliminaires	Tvorogov		Igor	People's Party - PPC	Parti populaire - PPC	1363	3	0	45662
35088	Carleton	Carleton	preliminary	préliminaires	Crawley		Peter	People's Party - PPC	Parti populaire - PPC	1728	2.4	0	70873
35088	Carleton	Carleton	preliminary	préliminaires	Dookeran		Nira	Green Party	Parti Vert	1327	1.9	0	70873
35088	Carleton	Carleton	preliminary	préliminaires	Hua		Kevin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8164	11.5	0	70873
35088	Carleton	Carleton	preliminary	préliminaires	Poilievre		Pierre	Conservative	Conservateur	35356	49.9	0	70873
35088	Carleton	Carleton	preliminary	préliminaires	Roy		Gustave	Liberal	Libéral	24298	34.3	0	70873
35089	St. Catharines	St. Catharines	preliminary	préliminaires	Bittle		Chris	Liberal	Libéral	22071	37.8	0	58364
35089	St. Catharines	St. Catharines	preliminary	préliminaires	Hahn		Rebecca	People's Party - PPC	Parti populaire - PPC	3860	6.6	0	58364
35089	St. Catharines	St. Catharines	preliminary	préliminaires	McLennon		Trecia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12294	21.1	0	58364
35089	St. Catharines	St. Catharines	preliminary	préliminaires	Rhodes		Catharine	Green Party	Parti Vert	1091	1.9	0	58364
35089	St. Catharines	St. Catharines	preliminary	préliminaires	Waler		Krystina	Conservative	Conservateur	19048	32.6	0	58364
35090	Toronto--St. Paul's	Toronto--St. Paul's	preliminary	préliminaires	Bennett		Carolyn	Liberal	Libéral	25943	49.2	0	52777
35090	Toronto--St. Paul's	Toronto--St. Paul's	preliminary	préliminaires	Coles		Sidney	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8836	16.7	0	52777
35090	Toronto--St. Paul's	Toronto--St. Paul's	preliminary	préliminaires	De Luna		Phil	Green Party	Parti Vert	3191	6	0	52777
35090	Toronto--St. Paul's	Toronto--St. Paul's	preliminary	préliminaires	Osadchuk		Stephanie	Conservative	Conservateur	13377	25.3	0	52777
35090	Toronto--St. Paul's	Toronto--St. Paul's	preliminary	préliminaires	Remedios		Peter	People's Party - PPC	Parti populaire - PPC	1430	2.7	0	52777
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Bunko		Stefanie	Green Party	Parti Vert	848	1.5	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Everaert		Brian	People's Party - PPC	Parti populaire - PPC	6359	11.2	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Gladu		Marilyn	Conservative	Conservateur	26292	46.3	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Kilner		Adam	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11945	21	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Laird		Tom	Christian Heritage Party	Parti de l'Héritage Chrétien	478	.8	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	preliminary	préliminaires	Nantais		Lois	Liberal	Libéral	10865	19.1	0	56787
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Bunko		Stefanie	Green Party	Parti Vert	848	1.5	346	57245
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Everaert		Brian	People's Party - PPC	Parti populaire - PPC	6359	11.2	346	57245
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Gladu		Marilyn	Conservative	Conservateur	26292	46.2	346	57245
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Kilner		Adam	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11990	21.1	346	57245
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Laird		Tom	Christian Heritage Party	Parti de l'Héritage Chrétien	435	.8	346	57245
35091	Sarnia--Lambton	Sarnia--Lambton	validated	validés	Nantais		Lois	Liberal	Libéral	10975	19.3	346	57245
35092	Sault Ste. Marie	Sault Ste. Marie	preliminary	préliminaires	Makowski		Kasper	People's Party - PPC	Parti populaire - PPC	1943	4.8	0	40201
35092	Sault Ste. Marie	Sault Ste. Marie	preliminary	préliminaires	Morin-Strom		Marie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8043	20	0	40201
35092	Sault Ste. Marie	Sault Ste. Marie	preliminary	préliminaires	Sheehan		Terry	Liberal	Libéral	15231	37.9	0	40201
35092	Sault Ste. Marie	Sault Ste. Marie	preliminary	préliminaires	Spina		Sonny	Conservative	Conservateur	14984	37.3	0	40201
35093	Scarborough--Agincourt	Scarborough--Agincourt	preliminary	préliminaires	Balasingham		Arjun	Green Party	Parti Vert	631	1.7	0	36602
35093	Scarborough--Agincourt	Scarborough--Agincourt	preliminary	préliminaires	Johnson		Mark	Conservative	Conservateur	10630	29	0	36602
35093	Scarborough--Agincourt	Scarborough--Agincourt	preliminary	préliminaires	Julius		Larisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3680	10.1	0	36602
35093	Scarborough--Agincourt	Scarborough--Agincourt	preliminary	préliminaires	Muraven		Eric	People's Party - PPC	Parti populaire - PPC	979	2.7	0	36602
35093	Scarborough--Agincourt	Scarborough--Agincourt	preliminary	préliminaires	Yip		Jean	Liberal	Libéral	20682	56.5	0	36602
35094	Scarborough Centre	Scarborough-Centre	preliminary	préliminaires	Kamal		Faiz	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5472	13.6	0	40107
35094	Scarborough Centre	Scarborough-Centre	preliminary	préliminaires	Mathew		Aylwin T	National Citizens Alliance	Alliance Nationale Citoyens	262	.7	0	40107
35094	Scarborough Centre	Scarborough-Centre	preliminary	préliminaires	Ponnayan		Malcolm	Conservative	Conservateur	9789	24.4	0	40107
35094	Scarborough Centre	Scarborough-Centre	preliminary	préliminaires	Rozoveanu		Petru	People's Party - PPC	Parti populaire - PPC	1460	3.6	0	40107
35094	Scarborough Centre	Scarborough-Centre	preliminary	préliminaires	Zahid		Salma	Liberal	Libéral	23124	57.7	0	40107
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Bountrogiannis		James	People's Party - PPC	Parti populaire - PPC	1096	2.9	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Clarke		Kevin	Independent	Indépendant(e)	155	.4	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Day		Opa	Independent	Indépendant(e)	85	.2	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Khan		Aslam	Centrist	Centriste	129	.3	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	McKay		John	Liberal	Libéral	22938	61.1	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Spencer		Michelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5092	13.6	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Stefanis		Gus	Nationalist	Nationaliste	52	.1	0	37535
35095	Scarborough--Guildwood	Scarborough--Guildwood	preliminary	préliminaires	Wilson		Carmen	Conservative	Conservateur	7988	21.3	0	37535
35096	Scarborough North	Scarborough-Nord	preliminary	préliminaires	Chen		Shaun	Liberal	Libéral	21178	64.4	0	32871
35096	Scarborough North	Scarborough-Nord	preliminary	préliminaires	Khan		Sheraz	Centrist	Centriste	361	1.1	0	32871
35096	Scarborough North	Scarborough-Nord	preliminary	préliminaires	Love		Christina	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3514	10.7	0	32871
35096	Scarborough North	Scarborough-Nord	preliminary	préliminaires	Moore		David	People's Party - PPC	Parti populaire - PPC	763	2.3	0	32871
35096	Scarborough North	Scarborough-Nord	preliminary	préliminaires	Shah		Fazal	Conservative	Conservateur	7055	21.5	0	32871
35097	Scarborough--Rouge Park	Scarborough--Rouge Park	preliminary	préliminaires	Anandasangaree		Gary	Liberal	Libéral	28703	62.8	0	45723
35097	Scarborough--Rouge Park	Scarborough--Rouge Park	preliminary	préliminaires	Choudhary		Zia	Conservative	Conservateur	9631	21.1	0	45723
35097	Scarborough--Rouge Park	Scarborough--Rouge Park	preliminary	préliminaires	Kwok		Kingsley	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6073	13.3	0	45723
35097	Scarborough--Rouge Park	Scarborough--Rouge Park	preliminary	préliminaires	Rehman		Asad	People's Party - PPC	Parti populaire - PPC	1316	2.9	0	45723
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Arale		Guled	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6924	16	0	43182
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Bhuiyan		Mohsin	Conservative	Conservateur	8991	20.8	0	43182
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Blair		Bill	Liberal	Libéral	24823	57.5	0	43182
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Cain		Amanda	Green Party	Parti Vert	1068	2.5	0	43182
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Pache		Ramona	People's Party - PPC	Parti populaire - PPC	1259	2.9	0	43182
35098	Scarborough Southwest	Scarborough-Sud-Ouest	preliminary	préliminaires	Poon		David Edward-Ooi	Independent	Indépendant(e)	117	.3	0	43182
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Clayton		Nicholas	Green Party	Parti Vert	2933	3.9	0	75514
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Dowdall		Terry	Conservative	Conservateur	35548	47.1	0	75514
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Gillies		Lucas	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10090	13.4	0	75514
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Minatel		Adam	People's Party - PPC	Parti populaire - PPC	5534	7.3	0	75514
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Munro		Bren	Liberal	Libéral	21026	27.8	0	75514
35099	Simcoe--Grey	Simcoe--Grey	preliminary	préliminaires	Stouffer		Ken	Christian Heritage Party	Parti de l'Héritage Chrétien	383	.5	0	75514
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Brooks		Krystal	Green Party	Parti Vert	1903	3	0	63687
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Chambers		Adam	Conservative	Conservateur	27383	43	0	63687
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Durnford		Janet-Lynne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9950	15.6	0	63687
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Emo		Russ	Christian Heritage Party	Parti de l'Héritage Chrétien	210	.3	0	63687
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Makk		Stephen	People's Party - PPC	Parti populaire - PPC	4939	7.8	0	63687
35100	Simcoe North	Simcoe-Nord	preliminary	préliminaires	Wesley-Esquimaux		Cynthia	Liberal	Libéral	19302	30.3	0	63687
35101	Spadina--Fort York	Spadina--Fort York	preliminary	préliminaires	Di Pasquale		Norm	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16833	34.5	0	48820
35101	Spadina--Fort York	Spadina--Fort York	preliminary	préliminaires	Jandu		Sukhi	Conservative	Conservateur	9875	20.2	0	48820
35101	Spadina--Fort York	Spadina--Fort York	preliminary	préliminaires	Roden		Ian	People's Party - PPC	Parti populaire - PPC	1476	3	0	48820
35101	Spadina--Fort York	Spadina--Fort York	preliminary	préliminaires	Rosenstock		Amanda	Green Party	Parti Vert	1645	3.4	0	48820
35101	Spadina--Fort York	Spadina--Fort York	preliminary	préliminaires	Vuong		Kevin	Liberal	Libéral	18991	38.9	0	48820
35102	Stormont--Dundas--South Glengarry	Stormont--Dundas--South Glengarry	preliminary	préliminaires	Anber		David	People's Party - PPC	Parti populaire - PPC	3954	7.5	0	52914
35102	Stormont--Dundas--South Glengarry	Stormont--Dundas--South Glengarry	preliminary	préliminaires	Duncan		Eric	Conservative	Conservateur	29276	55.3	0	52914
35102	Stormont--Dundas--South Glengarry	Stormont--Dundas--South Glengarry	preliminary	préliminaires	Kennedy		Trevor	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5839	11	0	52914
35102	Stormont--Dundas--South Glengarry	Stormont--Dundas--South Glengarry	preliminary	préliminaires	Moquin		Denis	Liberal	Libéral	12615	23.8	0	52914
35102	Stormont--Dundas--South Glengarry	Stormont--Dundas--South Glengarry	preliminary	préliminaires	Warnock		Jeanie	Green Party	Parti Vert	1230	2.3	0	52914
35103	Sudbury	Sudbury	preliminary	préliminaires	LaPointe		Viviane	Liberal	Libéral	15871	34.5	0	46005
35103	Sudbury	Sudbury	preliminary	préliminaires	Methé		Colette Andréa	People's Party - PPC	Parti populaire - PPC	2735	5.9	0	46005
35103	Sudbury	Sudbury	preliminary	préliminaires	Popescu		J. David	Independent	Indépendant(e)	111	.2	0	46005
35103	Sudbury	Sudbury	preliminary	préliminaires	Robinson		David Robert	Green Party	Parti Vert	967	2.1	0	46005
35103	Sudbury	Sudbury	preliminary	préliminaires	Symington		Ian	Conservative	Conservateur	12752	27.7	0	46005
35103	Sudbury	Sudbury	preliminary	préliminaires	Verrelli		Nadia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13569	29.5	0	46005
35104	Thornhill	Thornhill	preliminary	préliminaires	Gladstone		Gary	Liberal	Libéral	18168	36.3	0	50082
35104	Thornhill	Thornhill	preliminary	préliminaires	Greenfield		Samuel	People's Party - PPC	Parti populaire - PPC	2322	4.6	0	50082
35104	Thornhill	Thornhill	preliminary	préliminaires	Lantsman		Melissa	Conservative	Conservateur	25716	51.3	0	50082
35104	Thornhill	Thornhill	preliminary	préliminaires	Mikanovsky		Daniella	Green Party	Parti Vert	844	1.7	0	50082
35104	Thornhill	Thornhill	preliminary	préliminaires	Razvi		Raz	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3032	6.1	0	50082
35105	Thunder Bay--Rainy River	Thunder Bay--Rainy River	preliminary	préliminaires	Aubut		Alan	People's Party - PPC	Parti populaire - PPC	2636	6.6	0	39891
35105	Thunder Bay--Rainy River	Thunder Bay--Rainy River	preliminary	préliminaires	MacKinnon		Tracey	Green Party	Parti Vert	571	1.4	0	39891
35105	Thunder Bay--Rainy River	Thunder Bay--Rainy River	preliminary	préliminaires	Pecchia		Adelina	Conservative	Conservateur	11671	29.3	0	39891
35105	Thunder Bay--Rainy River	Thunder Bay--Rainy River	preliminary	préliminaires	Powlowski		Marcus	Liberal	Libéral	13660	34.2	0	39891
35105	Thunder Bay--Rainy River	Thunder Bay--Rainy River	preliminary	préliminaires	Won		Yuk-Sem	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11353	28.5	0	39891
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Bryson		Chantelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11243	27.1	0	41460
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Daines		Rick	People's Party - PPC	Parti populaire - PPC	2464	5.9	0	41460
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Hajdu		Patty	Liberal	Libéral	16877	40.7	0	41460
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Moddejonge		Amanda	Green Party	Parti Vert	730	1.8	0	41460
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Taylor		Joshua	Conservative	Conservateur	10035	24.2	0	41460
35106	Thunder Bay--Superior North	Thunder Bay--Supérieur-Nord	preliminary	préliminaires	Vodden		Alexander	Libertarian	Libertarien	111	.3	0	41460
35107	Timmins--James Bay	Timmins--Baie James	preliminary	préliminaires	Angus		Charlie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12132	35.1	0	34565
35107	Timmins--James Bay	Timmins--Baie James	preliminary	préliminaires	Black		Steve	Liberal	Libéral	8447	24.4	0	34565
35107	Timmins--James Bay	Timmins--Baie James	preliminary	préliminaires	Ellerton		Morgan	Conservative	Conservateur	9449	27.3	0	34565
35107	Timmins--James Bay	Timmins--Baie James	preliminary	préliminaires	MacLeod		Stephen	People's Party - PPC	Parti populaire - PPC	4537	13.1	0	34565
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Byard		Ivan	Communist	Communiste	181	.4	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Chang		Brian	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11919	26	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Ien		Marci	Liberal	Libéral	23079	50.3	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Jaffery		Syed	People's Party - PPC	Parti populaire - PPC	1119	2.4	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Lester		Ryan	Conservative	Conservateur	5571	12.1	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Paul		Annamie	Green Party	Parti Vert	3921	8.5	0	45906
35108	Toronto Centre	Toronto-Centre	preliminary	préliminaires	Stubbins		Peter	Animal Protection Party	Parti Protection Animaux	116	.3	0	45906
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Carey		Michael	Conservative	Conservateur	6510	12.5	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Dabrusin		Julie	Liberal	Libéral	25213	48.4	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Desai		Habiba	Independent	Indépendant(e)	129	.2	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Hacksel		Clare	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	17552	33.7	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Rowley		Elizabeth	Communist	Communiste	215	.4	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Simmons		Wayne	People's Party - PPC	Parti populaire - PPC	1282	2.5	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	Tollar		Maryem	Green Party	Parti Vert	1023	2	0	52108
35109	Toronto--Danforth	Toronto--Danforth	preliminary	préliminaires	White		Liz	Animal Protection Party	Parti Protection Animaux	184	.4	0	52108
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Freeland		Chrystia	Liberal	Libéral	22050	47.6	0	46318
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Garvie		Drew	Communist	Communiste	244	.5	0	46318
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Grant		Tim	Green Party	Parti Vert	1927	4.2	0	46318
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Kent		David	People's Party - PPC	Parti populaire - PPC	1158	2.5	0	46318
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Robicheau		Nicole	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11524	24.9	0	46318
35110	University--Rosedale	University--Rosedale	preliminary	préliminaires	Taylor		Steven	Conservative	Conservateur	9415	20.3	0	46318
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	DeVita		Peter Michael	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3265	6.9	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	Greco		Mario	People's Party - PPC	Parti populaire - PPC	2567	5.4	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	Khan		Muhammad Hassan	Green Party	Parti Vert	453	1	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	Mele		Luca	Independent	Indépendant(e)	159	.3	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	Panacci		Angela	Conservative	Conservateur	19019	40.4	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	preliminary	préliminaires	Sorbara		Francesco	Liberal	Libéral	21669	46	0	47132
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	DeVita		Peter Michael	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3265	6.9	460	47622
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	Greco		Mario	People's Party - PPC	Parti populaire - PPC	2567	5.4	460	47622
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	Khan		Muhammad Hassan	Green Party	Parti Vert	453	1	460	47622
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	Mele		Luca	Independent	Indépendant(e)	159	.3	460	47622
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	Panacci		Angela	Conservative	Conservateur	19019	40.3	460	47622
35111	Vaughan--Woodbridge	Vaughan--Woodbridge	validated	validés	Sorbara		Francesco	Liberal	Libéral	21699	46	460	47622
35112	Waterloo	Waterloo	preliminary	préliminaires	Cassels		Jonathan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11359	19.1	0	59586
35112	Waterloo	Waterloo	preliminary	préliminaires	Chagger		Bardish	Liberal	Libéral	26844	45.1	0	59586
35112	Waterloo	Waterloo	preliminary	préliminaires	Doucette		Patrick	People's Party - PPC	Parti populaire - PPC	2806	4.7	0	59586
35112	Waterloo	Waterloo	preliminary	préliminaires	Shannon		Meghan	Conservative	Conservateur	16535	27.7	0	59586
35112	Waterloo	Waterloo	preliminary	préliminaires	Villagomez Fajardo		Karla	Green Party	Parti Vert	2042	3.4	0	59586
35113	Wellington--Halton Hills	Wellington--Halton Hills	preliminary	préliminaires	Carle		Syl	People's Party - PPC	Parti populaire - PPC	4355	6.4	0	67671
35113	Wellington--Halton Hills	Wellington--Halton Hills	preliminary	préliminaires	Chong		Michael	Conservative	Conservateur	35337	52.2	0	67671
35113	Wellington--Halton Hills	Wellington--Halton Hills	preliminary	préliminaires	Jahangir		Noor	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7051	10.4	0	67671
35113	Wellington--Halton Hills	Wellington--Halton Hills	preliminary	préliminaires	Lang		Melanie	Liberal	Libéral	18314	27.1	0	67671
35113	Wellington--Halton Hills	Wellington--Halton Hills	preliminary	préliminaires	Zhu		Ran	Green Party	Parti Vert	2614	3.9	0	67671
35114	Whitby	Whitby	preliminary	préliminaires	Androvic		Thomas	People's Party - PPC	Parti populaire - PPC	2720	4.4	0	61819
35114	Whitby	Whitby	preliminary	préliminaires	Dias		Brian	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8787	14.2	0	61819
35114	Whitby	Whitby	preliminary	préliminaires	Kotilainen		Johannes	Green Party	Parti Vert	988	1.6	0	61819
35114	Whitby	Whitby	preliminary	préliminaires	Shahid		Maleeha	Conservative	Conservateur	22151	35.8	0	61819
35114	Whitby	Whitby	preliminary	préliminaires	Turnbull		Ryan	Liberal	Libéral	27173	44	0	61819
35115	Willowdale	Willowdale	preliminary	préliminaires	Berman		Hal	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4217	10.3	0	41001
35115	Willowdale	Willowdale	preliminary	préliminaires	Ehsassi		Ali	Liberal	Libéral	20973	51.2	0	41001
35115	Willowdale	Willowdale	preliminary	préliminaires	Gorka		Anna	Green Party	Parti Vert	812	2	0	41001
35115	Willowdale	Willowdale	preliminary	préliminaires	Lee		Daniel	Conservative	Conservateur	13900	33.9	0	41001
35115	Willowdale	Willowdale	preliminary	préliminaires	Wahab		Al	People's Party - PPC	Parti populaire - PPC	1099	2.7	0	41001
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Borrelli		Kathy	Conservative	Conservateur	14603	25.6	0	56969
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Chesnik		Laura	Marxist-Leninist	Marxiste-Léniniste	164	.3	0	56969
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Green		Victor	People's Party - PPC	Parti populaire - PPC	5928	10.4	0	56969
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Hardcastle		Cheryl	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	17459	30.6	0	56969
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Kusmierczyk		Irek	Liberal	Libéral	18134	31.8	0	56969
35116	Windsor--Tecumseh	Windsor--Tecumseh	preliminary	préliminaires	Oulevey		Henry	Green Party	Parti Vert	681	1.2	0	56969
35117	Windsor West	Windsor-Ouest	preliminary	préliminaires	Giancola		Matthew	People's Party - PPC	Parti populaire - PPC	4080	8.3	0	49044
35117	Windsor West	Windsor-Ouest	preliminary	préliminaires	Masse		Brian	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	21702	44.3	0	49044
35117	Windsor West	Windsor-Ouest	preliminary	préliminaires	Orlando		Anthony	Conservative	Conservateur	9436	19.2	0	49044
35117	Windsor West	Windsor-Ouest	preliminary	préliminaires	Pupatello		Sandra	Liberal	Libéral	13670	27.9	0	49044
35117	Windsor West	Windsor-Ouest	preliminary	préliminaires	Villamizar		Margaret	Marxist-Leninist	Marxiste-Léniniste	156	.3	0	49044
35118	York Centre	York-Centre	preliminary	préliminaires	Ahmed		Kemal	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3753	10.2	0	36823
35118	York Centre	York-Centre	preliminary	préliminaires	Etienne		Joel Yakov	Conservative	Conservateur	13898	37.7	0	36823
35118	York Centre	York-Centre	preliminary	préliminaires	Nguyen		Nixon	People's Party - PPC	Parti populaire - PPC	1751	4.8	0	36823
35118	York Centre	York-Centre	preliminary	préliminaires	Saks		Ya'ara	Liberal	Libéral	17421	47.3	0	36823
35119	York--Simcoe	York--Simcoe	preliminary	préliminaires	Davidson		Scot	Conservative	Conservateur	23890	49.6	0	48188
35119	York--Simcoe	York--Simcoe	preliminary	préliminaires	Jenkins		Benjamin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6890	14.3	0	48188
35119	York--Simcoe	York--Simcoe	preliminary	préliminaires	Johnson		Daniella	Liberal	Libéral	13856	28.8	0	48188
35119	York--Simcoe	York--Simcoe	preliminary	préliminaires	Lotter		Michael	People's Party - PPC	Parti populaire - PPC	3552	7.4	0	48188
35120	York South--Weston	York-Sud--Weston	preliminary	préliminaires	Chiu		Sitara	People's Party - PPC	Parti populaire - PPC	1822	4.7	0	38563
35120	York South--Weston	York-Sud--Weston	preliminary	préliminaires	Hussen		Ahmed	Liberal	Libéral	21579	56	0	38563
35120	York South--Weston	York-Sud--Weston	preliminary	préliminaires	Mire		Hawa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6543	17	0	38563
35120	York South--Weston	York-Sud--Weston	preliminary	préliminaires	Mohan		Sajanth	Conservative	Conservateur	7741	20.1	0	38563
35120	York South--Weston	York-Sud--Weston	preliminary	préliminaires	Ward		Nicki	Green Party	Parti Vert	878	2.3	0	38563
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	Anderson		Raatib	People's Party - PPC	Parti populaire - PPC	1235	4	0	31029
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	Nugent		Christine	Marxist-Leninist	Marxiste-Léniniste	125	.4	0	31029
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	Sgro		Judy	Liberal	Libéral	18833	60.7	0	31029
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	Shah		Rinku	Conservative	Conservateur	5402	17.4	0	31029
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	Tibbin		Unblind	Green Party	Parti Vert	368	1.2	0	31029
35121	Humber River--Black Creek	Humber River--Black Creek	preliminary	préliminaires	de Dovitiis		Matias	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5066	16.3	0	31029
46001	Brandon--Souris	Brandon--Souris	preliminary	préliminaires	Baer		Tylor	People's Party - PPC	Parti populaire - PPC	2981	7.8	0	38162
46001	Brandon--Souris	Brandon--Souris	preliminary	préliminaires	Branconnier		Linda	Liberal	Libéral	4608	12.1	0	38162
46001	Brandon--Souris	Brandon--Souris	preliminary	préliminaires	Hodgins		Whitney	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7840	20.5	0	38162
46001	Brandon--Souris	Brandon--Souris	preliminary	préliminaires	Maguire		Larry	Conservative	Conservateur	22733	59.6	0	38162
46002	Charleswood--St. James--Assiniboia--Headingley	Charleswood--St. James--Assiniboia--Headingley	preliminary	préliminaires	Dwyer		Madelaine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7171	16.2	0	44327
46002	Charleswood--St. James--Assiniboia--Headingley	Charleswood--St. James--Assiniboia--Headingley	preliminary	préliminaires	Eyolfson		Doug	Liberal	Libéral	17312	39.1	0	44327
46002	Charleswood--St. James--Assiniboia--Headingley	Charleswood--St. James--Assiniboia--Headingley	preliminary	préliminaires	Morantz		Marty	Conservative	Conservateur	17336	39.1	0	44327
46002	Charleswood--St. James--Assiniboia--Headingley	Charleswood--St. James--Assiniboia--Headingley	preliminary	préliminaires	Parks		Vanessa	Green Party	Parti Vert	935	2.1	0	44327
46002	Charleswood--St. James--Assiniboia--Headingley	Charleswood--St. James--Assiniboia--Headingley	preliminary	préliminaires	Van Hussen		Angela	People's Party - PPC	Parti populaire - PPC	1573	3.5	0	44327
46003	Churchill--Keewatinook Aski	Churchill--Keewatinook Aski	preliminary	préliminaires	Ashton		Niki	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7639	42.6	0	17934
46003	Churchill--Keewatinook Aski	Churchill--Keewatinook Aski	preliminary	préliminaires	Larocque		Charlotte	Conservative	Conservateur	4330	24.1	0	17934
46003	Churchill--Keewatinook Aski	Churchill--Keewatinook Aski	preliminary	préliminaires	McLean		Ralph	Green Party	Parti Vert	552	3.1	0	17934
46003	Churchill--Keewatinook Aski	Churchill--Keewatinook Aski	preliminary	préliminaires	Robinson		Shirley	Liberal	Libéral	4513	25.2	0	17934
46003	Churchill--Keewatinook Aski	Churchill--Keewatinook Aski	preliminary	préliminaires	Young		Dylan	People's Party - PPC	Parti populaire - PPC	900	5	0	17934
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	Carlson		Kevin	Liberal	Libéral	4797	12.5	0	38504
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	Falloon-Austin		Lori	Maverick Party	Maverick Party	407	1.1	0	38504
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	Holroyd		Arthur	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5688	14.8	0	38504
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	Lambrecht		Shirley	Green Party	Parti Vert	845	2.2	0	38504
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	Mazier		Dan	Conservative	Conservateur	22717	59	0	38504
46004	Dauphin--Swan River--Neepawa	Dauphin--Swan River--Neepawa	preliminary	préliminaires	McKenna		Donnan	People's Party - PPC	Parti populaire - PPC	4050	10.5	0	38504
46005	Elmwood--Transcona	Elmwood--Transcona	preliminary	préliminaires	Blaikie		Daniel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20791	49.7	0	41839
46005	Elmwood--Transcona	Elmwood--Transcona	preliminary	préliminaires	Caron		Rejeanne	Conservative	Conservateur	11768	28.1	0	41839
46005	Elmwood--Transcona	Elmwood--Transcona	preliminary	préliminaires	Cumming		Jamie	People's Party - PPC	Parti populaire - PPC	2435	5.8	0	41839
46005	Elmwood--Transcona	Elmwood--Transcona	preliminary	préliminaires	Hinchey		Devlin	Green Party	Parti Vert	676	1.6	0	41839
46005	Elmwood--Transcona	Elmwood--Transcona	preliminary	préliminaires	Mirwaldt		Sara	Liberal	Libéral	6169	14.7	0	41839
46006	Kildonan--St. Paul	Kildonan--St. Paul	preliminary	préliminaires	Bennett		Mary-Jane	Liberal	Libéral	12944	29.4	0	43953
46006	Kildonan--St. Paul	Kildonan--St. Paul	preliminary	préliminaires	Clark		Emily	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10309	23.5	0	43953
46006	Kildonan--St. Paul	Kildonan--St. Paul	preliminary	préliminaires	Dancho		Raquel	Conservative	Conservateur	18375	41.8	0	43953
46006	Kildonan--St. Paul	Kildonan--St. Paul	preliminary	préliminaires	Howe		Sean	People's Party - PPC	Parti populaire - PPC	2325	5.3	0	43953
46007	Portage--Lisgar	Portage--Lisgar	preliminary	préliminaires	Bergen		Candice	Conservative	Conservateur	23819	52.5	0	45382
46007	Portage--Lisgar	Portage--Lisgar	preliminary	préliminaires	Carrier		Andrew	Liberal	Libéral	4967	10.9	0	45382
46007	Portage--Lisgar	Portage--Lisgar	preliminary	préliminaires	Dondo		Jerome	Christian Heritage Party	Parti de l'Héritage Chrétien	712	1.6	0	45382
46007	Portage--Lisgar	Portage--Lisgar	preliminary	préliminaires	Friesen		Ken	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6094	13.4	0	45382
46007	Portage--Lisgar	Portage--Lisgar	preliminary	préliminaires	Wiebe		Solomon	People's Party - PPC	Parti populaire - PPC	9790	21.6	0	45382
46008	Provencher	Provencher	preliminary	préliminaires	Falk		Ted	Conservative	Conservateur	24294	48.7	0	49842
46008	Provencher	Provencher	preliminary	préliminaires	Gautron		Nöel	People's Party - PPC	Parti populaire - PPC	8168	16.4	0	49842
46008	Provencher	Provencher	preliminary	préliminaires	Gibson		Janine G.	Green Party	Parti Vert	1272	2.6	0	49842
46008	Provencher	Provencher	preliminary	préliminaires	Kirczenow		Trevor	Liberal	Libéral	8472	17	0	49842
46008	Provencher	Provencher	preliminary	préliminaires	Loewen		Rick	Independent	Indépendant(e)	1366	2.7	0	49842
46008	Provencher	Provencher	preliminary	préliminaires	Pottinger		Serina	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6270	12.6	0	49842
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Agboola		Shola	Conservative	Conservateur	13091	28.6	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Anderson		Scott A A	Independent	Indépendant(e)	57	.1	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Berthiaume		Denis	Independent	Indépendant(e)	19	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Boudreault		Jean-Denis	Independent	Indépendant(e)	21	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	CoRhino		Sébastien	Parti Rhinocéros Party	Parti Rhinocéros Party	80	.2	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Correia		Matthew	VCP	CAC	16	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Crisostomo		Naomi	Independent	Indépendant(e)	27	.1	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Currie		Charles	Independent	Indépendant(e)	24	.1	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Desbiens		Manon Lili	Independent	Indépendant(e)	12	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Engering		Alexandra	Independent	Indépendant(e)	13	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Falkingham		Scott	Independent	Indépendant(e)	13	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Hildebrandt		Kerri	Independent	Indépendant(e)	33	.1	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Huard		Ryan	Independent	Indépendant(e)	14	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Lukawski		Conrad	Independent	Indépendant(e)	7	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	MacDiarmid		Jane	People's Party - PPC	Parti populaire - PPC	1976	4.3	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Poliquin		Laurent	Green Party	Parti Vert	658	1.4	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Rosenblum		Eliana	Independent	Indépendant(e)	13	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Strzalkowski		Patrick	Independent	Indépendant(e)	19	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Szuchewycz		Tomas	Independent	Indépendant(e)	15	0	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Vandal		Dan	Liberal	Libéral	19696	43	0	45805
46009	Saint Boniface--Saint Vital	Saint-Boniface--Saint-Vital	preliminary	préliminaires	Waters		Meghan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10001	21.8	0	45805
46010	Selkirk--Interlake--Eastman	Selkirk--Interlake--Eastman	preliminary	préliminaires	Bezan		James	Conservative	Conservateur	28311	57.1	0	49612
46010	Selkirk--Interlake--Eastman	Selkirk--Interlake--Eastman	preliminary	préliminaires	James		Wayne	Green Party	Parti Vert	1328	2.7	0	49612
46010	Selkirk--Interlake--Eastman	Selkirk--Interlake--Eastman	preliminary	préliminaires	Kathwaroon		Ian	People's Party - PPC	Parti populaire - PPC	3807	7.7	0	49612
46010	Selkirk--Interlake--Eastman	Selkirk--Interlake--Eastman	preliminary	préliminaires	Regelsky		Detlev	Liberal	Libéral	6563	13.2	0	49612
46010	Selkirk--Interlake--Eastman	Selkirk--Interlake--Eastman	preliminary	préliminaires	Smith		Margaret	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9603	19.4	0	49612
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Bhakoo		Bhavni	People's Party - PPC	Parti populaire - PPC	1229	4.2	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Brenot		Sabrina	Conservative	Conservateur	3818	12.9	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Brown		Andrew	Green Party	Parti Vert	713	2.4	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Buhler		Jamie	Libertarian	Libertarien	373	1.3	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Gazan		Leah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14761	49.9	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Ong		Paul	Liberal	Libéral	8446	28.6	0	29554
46011	Winnipeg Centre	Winnipeg-Centre	preliminary	préliminaires	Wall		Debra	Animal Protection Party	Parti Protection Animaux	214	.7	0	29554
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Brydges		Angela	Green Party	Parti Vert	428	1.4	0	31403
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Chung-Mowat		Melissa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8998	28.7	0	31403
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Crooks		Robert	Communist	Communiste	109	.3	0	31403
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Kassem		Anas	Conservative	Conservateur	4098	13	0	31403
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Lamoureux		Kevin	Liberal	Libéral	16375	52.1	0	31403
46012	Winnipeg North	Winnipeg-Nord	preliminary	préliminaires	Neilan		Patrick	People's Party - PPC	Parti populaire - PPC	1395	4.4	0	31403
46013	Winnipeg South	Winnipeg-Sud	preliminary	préliminaires	Boettcher		Greg	Green Party	Parti Vert	680	1.4	0	47237
46013	Winnipeg South	Winnipeg-Sud	preliminary	préliminaires	Duguid		Terry	Liberal	Libéral	22422	47.5	0	47237
46013	Winnipeg South	Winnipeg-Sud	preliminary	préliminaires	Gryba		Byron Curtis	People's Party - PPC	Parti populaire - PPC	1622	3.4	0	47237
46013	Winnipeg South	Winnipeg-Sud	preliminary	préliminaires	Kahanovitch		Aiden	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6601	14	0	47237
46013	Winnipeg South	Winnipeg-Sud	preliminary	préliminaires	Maher		Melanie	Conservative	Conservateur	15912	33.7	0	47237
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Bateman		Joyce	Conservative	Conservateur	13566	27.8	0	48861
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Carr		Jim	Liberal	Libéral	22214	45.5	0	48861
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Hemmerling		Douglas	Green Party	Parti Vert	1431	2.9	0	48861
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Riddell		Julia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10064	20.6	0	48861
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Scott		Cam	Communist	Communiste	234	.5	0	48861
46014	Winnipeg South Centre	Winnipeg-Centre-Sud	preliminary	préliminaires	Wells		Chase	People's Party - PPC	Parti populaire - PPC	1352	2.8	0	48861
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Falk		Rosemarie	Conservative	Conservateur	21511	68.6	0	31336
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Hansen		Erik	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3762	12	0	31336
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Ingram		Larry	Liberal	Libéral	1779	5.7	0	31336
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Rutherford		Ken	Maverick Party	Maverick Party	2186	7	0	31336
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Sieben		Terry	People's Party - PPC	Parti populaire - PPC	1859	5.9	0	31336
47001	Battlefords--Lloydminster	Battlefords--Lloydminster	preliminary	préliminaires	Wall		Kerri	Green Party	Parti Vert	239	.8	0	31336
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Hird		Mackenzie	Liberal	Libéral	1402	4.2	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Hislop		Charles Reginald	People's Party - PPC	Parti populaire - PPC	2808	8.4	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Lewans		Maria Rose	Independent	Indépendant(e)	187	.6	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	McPhee		Alex	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3390	10.2	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Patzer		Jeremy	Conservative	Conservateur	23890	71.9	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Skagen		Mark	Maverick Party	Maverick Party	1286	3.9	0	33236
47002	Cypress Hills--Grasslands	Cypress Hills--Grasslands	preliminary	préliminaires	Vandale		Carol	Green Party	Parti Vert	273	.8	0	33236
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	Belanger		Buckley	Liberal	Libéral	5533	26.8	0	20654
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	Chalifoux		Nasser Dean	Green Party	Parti Vert	215	1	0	20654
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	King		Harmonie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3628	17.6	0	20654
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	King		Stephen	Independent	Indépendant(e)	240	1.2	0	20654
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	Reddekopp		Dezirae	People's Party - PPC	Parti populaire - PPC	1002	4.9	0	20654
47003	Desnethé--Missinippi--Churchill River	Desnethé--Missinippi--Rivière Churchill	preliminary	préliminaires	Vidal		Gary	Conservative	Conservateur	10036	48.6	0	20654
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	Andruschak		Harrison	Liberal	Libéral	2063	5	0	41083
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	Block		Kelly	Conservative	Conservateur	28068	68.3	0	41083
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	Bohach		Micheal	People's Party - PPC	Parti populaire - PPC	3886	9.5	0	41083
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	O'Toole		Shannon	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5626	13.7	0	41083
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	Pastoor		Diane	Maverick Party	Maverick Party	1056	2.6	0	41083
47004	Carlton Trail--Eagle Creek	Sentier Carlton--Eagle Creek	preliminary	préliminaires	Reemaul		Cherese	Green Party	Parti Vert	384	.9	0	41083
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Craik		Chey	People's Party - PPC	Parti populaire - PPC	4712	11.4	0	41184
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Hunter		Isaiah	Green Party	Parti Vert	438	1.1	0	41184
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Regent		Talon	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7975	19.4	0	41184
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Tolmie		Fraser	Conservative	Conservateur	24869	60.4	0	41184
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Townsend		David Craig	Maverick Party	Maverick Party	664	1.6	0	41184
47005	Moose Jaw--Lake Centre--Lanigan	Moose Jaw--Lake Centre--Lanigan	preliminary	préliminaires	Zimmer		Katelyn	Liberal	Libéral	2526	6.1	0	41184
47006	Prince Albert	Prince Albert	preliminary	préliminaires	Graham		Hamish	Green Party	Parti Vert	364	1.1	0	34475
47006	Prince Albert	Prince Albert	preliminary	préliminaires	Hjertaas		Estelle	Liberal	Libéral	3653	10.6	0	34475
47006	Prince Albert	Prince Albert	preliminary	préliminaires	Hoback		Randy	Conservative	Conservateur	22340	64.8	0	34475
47006	Prince Albert	Prince Albert	preliminary	préliminaires	MacDougall		Ken	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5214	15.1	0	34475
47006	Prince Albert	Prince Albert	preliminary	préliminaires	McCrea		Joseph	People's Party - PPC	Parti populaire - PPC	2438	7.1	0	34475
47006	Prince Albert	Prince Albert	preliminary	préliminaires	Schmitt		Heather	Maverick Party	Maverick Party	466	1.4	0	34475
47007	Regina--Lewvan	Regina--Lewvan	preliminary	préliminaires	Cameron		Susan	Liberal	Libéral	6301	13.8	0	45591
47007	Regina--Lewvan	Regina--Lewvan	preliminary	préliminaires	Donaldson		Tria	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15719	34.5	0	45591
47007	Regina--Lewvan	Regina--Lewvan	preliminary	préliminaires	Kletchko		Roderick	People's Party - PPC	Parti populaire - PPC	1635	3.6	0	45591
47007	Regina--Lewvan	Regina--Lewvan	preliminary	préliminaires	Steinley		Warren	Conservative	Conservateur	21376	46.9	0	45591
47007	Regina--Lewvan	Regina--Lewvan	preliminary	préliminaires	Wright		Michael	Green Party	Parti Vert	560	1.2	0	45591
47008	Regina--Qu'Appelle	Regina--Qu'Appelle	preliminary	préliminaires	Bos		Annaliese	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6883	20.9	0	32986
47008	Regina--Qu'Appelle	Regina--Qu'Appelle	preliminary	préliminaires	Hunter		Naomi	Green Party	Parti Vert	701	2.1	0	32986
47008	Regina--Qu'Appelle	Regina--Qu'Appelle	preliminary	préliminaires	Melanson		Cecilia	Liberal	Libéral	3324	10.1	0	32986
47008	Regina--Qu'Appelle	Regina--Qu'Appelle	preliminary	préliminaires	Scheer		Andrew	Conservative	Conservateur	20400	61.8	0	32986
47008	Regina--Qu'Appelle	Regina--Qu'Appelle	preliminary	préliminaires	Yubeta		Andrew	People's Party - PPC	Parti populaire - PPC	1678	5.1	0	32986
47009	Regina--Wascana	Regina--Wascana	preliminary	préliminaires	Hidlebaugh		Erin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6981	18.1	0	38602
47009	Regina--Wascana	Regina--Wascana	preliminary	préliminaires	Kram		Michael	Conservative	Conservateur	19247	49.9	0	38602
47009	Regina--Wascana	Regina--Wascana	preliminary	préliminaires	Lau		Victor	Green Party	Parti Vert	632	1.6	0	38602
47009	Regina--Wascana	Regina--Wascana	preliminary	préliminaires	McEachern		Sean	Liberal	Libéral	10390	26.9	0	38602
47009	Regina--Wascana	Regina--Wascana	preliminary	préliminaires	Milanovski		Mario	People's Party - PPC	Parti populaire - PPC	1352	3.5	0	38602
47010	Saskatoon--Grasswood	Saskatoon--Grasswood	preliminary	préliminaires	Friesen		Mark	People's Party - PPC	Parti populaire - PPC	2111	4.6	0	45722
47010	Saskatoon--Grasswood	Saskatoon--Grasswood	preliminary	préliminaires	Kitzul		Kyla	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13731	30	0	45722
47010	Saskatoon--Grasswood	Saskatoon--Grasswood	preliminary	préliminaires	Sarwar		Rokhan	Liberal	Libéral	6482	14.2	0	45722
47010	Saskatoon--Grasswood	Saskatoon--Grasswood	preliminary	préliminaires	Walker		Gillian	Green Party	Parti Vert	556	1.2	0	45722
47010	Saskatoon--Grasswood	Saskatoon--Grasswood	preliminary	préliminaires	Waugh		Kevin	Conservative	Conservateur	22842	50	0	45722
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Card		Claire	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15042	35.4	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Dumont Walker		Dawn	Liberal	Libéral	4608	10.8	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Fisher		Jeremy	Communist	Communiste	100	.2	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Hunter		North-Marie	Green Party	Parti Vert	400	.9	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Penteado		Guto	People's Party - PPC	Parti populaire - PPC	1778	4.2	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Tochor		Corey	Conservative	Conservateur	20384	48	0	42507
47011	Saskatoon--University	Saskatoon--University	preliminary	préliminaires	Wesolowski		Carl A	Christian Heritage Party	Parti de l'Héritage Chrétien	195	.5	0	42507
47011	Saskatoon--University	Saskatoon--University	validated	validés	Card		Claire	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15042	35.4	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Dumont Walker		Dawn	Liberal	Libéral	4608	10.8	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Fisher		Jeremy	Communist	Communiste	100	.2	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Hunter		North-Marie	Green Party	Parti Vert	405	1	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Penteado		Guto	People's Party - PPC	Parti populaire - PPC	1778	4.2	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Tochor		Corey	Conservative	Conservateur	20389	48	294	42811
47011	Saskatoon--University	Saskatoon--University	validated	validés	Wesolowski		Carl A	Christian Heritage Party	Parti de l'Héritage Chrétien	195	.5	294	42811
47012	Saskatoon West	Saskatoon-Ouest	preliminary	préliminaires	Boychuk		Kevin	People's Party - PPC	Parti populaire - PPC	2064	6.1	0	33846
47012	Saskatoon West	Saskatoon-Ouest	preliminary	préliminaires	Doucette		Robert	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13268	39.2	0	33846
47012	Saskatoon West	Saskatoon-Ouest	preliminary	préliminaires	Greenfield		Dave	Green Party	Parti Vert	357	1.1	0	33846
47012	Saskatoon West	Saskatoon-Ouest	preliminary	préliminaires	Rajakumar		Ruben	Liberal	Libéral	2778	8.2	0	33846
47012	Saskatoon West	Saskatoon-Ouest	preliminary	préliminaires	Redekopp		Brad	Conservative	Conservateur	15379	45.4	0	33846
47012	Saskatoon West	Saskatoon-Ouest	validated	validés	Boychuk		Kevin	People's Party - PPC	Parti populaire - PPC	2064	6.1	284	34190
47012	Saskatoon West	Saskatoon-Ouest	validated	validés	Doucette		Robert	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13328	39.3	284	34190
47012	Saskatoon West	Saskatoon-Ouest	validated	validés	Greenfield		Dave	Green Party	Parti Vert	357	1.1	284	34190
47012	Saskatoon West	Saskatoon-Ouest	validated	validés	Rajakumar		Ruben	Liberal	Libéral	2778	8.2	284	34190
47012	Saskatoon West	Saskatoon-Ouest	validated	validés	Redekopp		Brad	Conservative	Conservateur	15379	45.4	284	34190
47013	Souris--Moose Mountain	Souris--Moose Mountain	preliminary	préliminaires	Ames-Sinclair		Javin	Liberal	Libéral	1663	4.2	0	39603
47013	Souris--Moose Mountain	Souris--Moose Mountain	preliminary	préliminaires	Douglas		Greg	Maverick Party	Maverick Party	991	2.5	0	39603
47013	Souris--Moose Mountain	Souris--Moose Mountain	preliminary	préliminaires	Duerr		Hannah Ann	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3155	8	0	39603
47013	Souris--Moose Mountain	Souris--Moose Mountain	preliminary	préliminaires	Kitchen		Robert	Conservative	Conservateur	30200	76.3	0	39603
47013	Souris--Moose Mountain	Souris--Moose Mountain	preliminary	préliminaires	Neufeld		Diane	People's Party - PPC	Parti populaire - PPC	3594	9.1	0	39603
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Ames-Sinclair		Jordan	Liberal	Libéral	2183	6.3	0	34733
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Brooks		Valerie	Green Party	Parti Vert	615	1.8	0	34733
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Loucks		Denise	Maverick Party	Maverick Party	601	1.7	0	34733
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Robertson		Braden	People's Party - PPC	Parti populaire - PPC	3247	9.3	0	34733
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Rust		Halsten David	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4237	12.2	0	34733
47014	Yorkton--Melville	Yorkton--Melville	preliminary	préliminaires	Wagantall		Cathay	Conservative	Conservateur	23850	68.7	0	34733
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Blum		Aidan	Green Party	Parti Vert	1405	1.8	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Elnaga		Tariq	Maverick Party	Maverick Party	1475	1.9	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Gamble		David	Liberal	Libéral	9472	12.3	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	O'Driscoll		Caroline	Independent	Indépendant(e)	489	.6	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Richards		Blake	Conservative	Conservateur	43677	56.8	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Sloan		Derek	No Affiliation	Aucune appartenance	2015	2.6	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Voss		Ron	Independent	Indépendant(e)	65	.1	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Wellwood		Nadine	People's Party - PPC	Parti populaire - PPC	5816	7.6	0	76876
48001	Banff--Airdrie	Banff--Airdrie	preliminary	préliminaires	Zagoda		Sarah	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12462	16.2	0	76876
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Brisbin		Daniel	Green Party	Parti Vert	565	1	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Golka		Jeff	Maverick Party	Maverick Party	2395	4.1	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Irwin		John	VCP	CAC	178	.3	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Kurek		Damien	Conservative	Conservateur	41805	71.3	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	McLeod		Leah Diane	Liberal	Libéral	2527	4.3	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Ratushniak		Tonya	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5743	9.8	0	58639
48002	Battle River--Crowfoot	Battle River--Crowfoot	preliminary	préliminaires	Trepanier		Dennis	People's Party - PPC	Parti populaire - PPC	5426	9.3	0	58639
48003	Bow River	Bow River	preliminary	préliminaires	Bliss		Orrin	Maverick Party	Maverick Party	1362	2.7	0	50939
48003	Bow River	Bow River	preliminary	préliminaires	Bridges		Jonathan	People's Party - PPC	Parti populaire - PPC	5097	10	0	50939
48003	Bow River	Bow River	preliminary	préliminaires	Lipp		Tom	Christian Heritage Party	Parti de l'Héritage Chrétien	391	.8	0	50939
48003	Bow River	Bow River	preliminary	préliminaires	MacLean		Michael	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4726	9.3	0	50939
48003	Bow River	Bow River	preliminary	préliminaires	Shawile		Getu	Liberal	Libéral	3928	7.7	0	50939
48003	Bow River	Bow River	preliminary	préliminaires	Shields		Martin	Conservative	Conservateur	35435	69.6	0	50939
48004	Calgary Centre	Calgary-Centre	preliminary	préliminaires	Estevez Moreno		Juan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9615	16.3	0	59152
48004	Calgary Centre	Calgary-Centre	preliminary	préliminaires	Grover		Sabrina	Liberal	Libéral	17593	29.7	0	59152
48004	Calgary Centre	Calgary-Centre	preliminary	préliminaires	McLean		Greg	Conservative	Conservateur	30404	51.4	0	59152
48004	Calgary Centre	Calgary-Centre	preliminary	préliminaires	Mullins		Austin	Green Party	Parti Vert	965	1.6	0	59152
48004	Calgary Centre	Calgary-Centre	preliminary	préliminaires	Pawlowski		Dawid	Christian Heritage Party	Parti de l'Héritage Chrétien	575	1	0	59152
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Akter		Gulshan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10559	17.1	0	61575
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Gao		Edward	People's Party - PPC	Parti populaire - PPC	2672	4.3	0	61575
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Hunter		Kevan	Marxist-Leninist	Marxiste-Léniniste	178	.3	0	61575
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Odd		Natalie	Green Party	Parti Vert	2297	3.7	0	61575
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Sigler		Murray	Liberal	Libéral	17574	28.5	0	61575
48005	Calgary Confederation	Calgary Confederation	preliminary	préliminaires	Webber		Len	Conservative	Conservateur	28295	46	0	61575
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Gunn		Keira	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6254	18	0	34653
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Hallan		Jasraj Singh	Conservative	Conservateur	15389	44.4	0	34653
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Holub		Dwayne	People's Party - PPC	Parti populaire - PPC	2518	7.3	0	34653
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Rutherford		Carey	Green Party	Parti Vert	699	2	0	34653
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Stein		Jordan	Liberal	Libéral	9608	27.7	0	34653
48006	Calgary Forest Lawn	Calgary Forest Lawn	preliminary	préliminaires	Trautman		Jonathan	Communist	Communiste	185	.5	0	34653
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Bedard		Bailey	People's Party - PPC	Parti populaire - PPC	2682	5	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Benzen		Bob	Conservative	Conservateur	30870	57.7	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Dejewski		Mark	Parti Rhinocéros Party	Parti Rhinocéros Party	265	.5	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Forsyth		Scott	Liberal	Libéral	8969	16.7	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Freeman		Annelise	Maverick Party	Maverick Party	714	1.3	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Johnson		Kathleen M.	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9281	17.3	0	53547
48007	Calgary Heritage	Calgary Heritage	preliminary	préliminaires	Labell		Malka	Green Party	Parti Vert	766	1.4	0	53547
48007	Calgary Heritage	Calgary Heritage	validated	validés	Bedard		Bailey	People's Party - PPC	Parti populaire - PPC	2682	5	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Benzen		Bob	Conservative	Conservateur	30870	57.7	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Dejewski		Mark	Parti Rhinocéros Party	Parti Rhinocéros Party	230	.4	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Forsyth		Scott	Liberal	Libéral	8960	16.7	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Freeman		Annelise	Maverick Party	Maverick Party	714	1.3	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Johnson		Kathleen M.	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9320	17.4	313	53855
48007	Calgary Heritage	Calgary Heritage	validated	validés	Labell		Malka	Green Party	Parti Vert	766	1.4	313	53855
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Bhachu		Gurmit	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11826	18.3	0	64530
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Hagel		Jonathan	People's Party - PPC	Parti populaire - PPC	3930	6.1	0	64530
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Kusie		Stephanie	Conservative	Conservateur	39147	60.7	0	64530
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Magolan		Matt	Maverick Party	Maverick Party	812	1.3	0	64530
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Pulsifer		Shaun T.	Green Party	Parti Vert	868	1.3	0	64530
48008	Calgary Midnapore	Calgary Midnapore	preliminary	préliminaires	Zafar		Zarnab	Liberal	Libéral	7947	12.3	0	64530
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Bhachu		Gurmit	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11826	18.3	355	64885
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Hagel		Jonathan	People's Party - PPC	Parti populaire - PPC	3930	6.1	355	64885
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Kusie		Stephanie	Conservative	Conservateur	39147	60.7	355	64885
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Magolan		Matt	Maverick Party	Maverick Party	812	1.3	355	64885
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Pulsifer		Shaun T.	Green Party	Parti Vert	868	1.3	355	64885
48008	Calgary Midnapore	Calgary Midnapore	validated	validés	Zafar		Zarnab	Liberal	Libéral	7947	12.3	355	64885
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Ahmed		Khalis	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8500	16.9	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Askin		Peggy	Marxist-Leninist	Marxiste-Léniniste	105	.2	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Dale-Walker		Jessica	Liberal	Libéral	10311	20.5	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Garvey		Stephen J	National Citizens Alliance	Alliance Nationale Citoyens	65	.1	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Hansell		Judson	Green Party	Parti Vert	636	1.3	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Heather		Larry R.	Christian Heritage Party	Parti de l'Héritage Chrétien	169	.3	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Rempel Garner		Michelle	Conservative	Conservateur	28001	55.6	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Scott		Kyle	People's Party - PPC	Parti populaire - PPC	2324	4.6	0	50396
48009	Calgary Nose Hill	Calgary Nose Hill	preliminary	préliminaires	Wang		Vanessa	Parti Rhinocéros Party	Parti Rhinocéros Party	285	.6	0	50396
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	Kelly		Pat	Conservative	Conservateur	36034	54.5	0	66063
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	Kieren		Jena Dianne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10748	16.3	0	66063
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	MacLeod		Rory	People's Party - PPC	Parti populaire - PPC	3002	4.5	0	66063
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	Munir		Shahnaz	Liberal	Libéral	14673	22.2	0	66063
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	Robinson		David	Maverick Party	Maverick Party	554	.8	0	66063
48010	Calgary Rocky Ridge	Calgary Rocky Ridge	preliminary	préliminaires	Wright		Catriona	Green Party	Parti Vert	1052	1.6	0	66063
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Halmo		Jesse	National Citizens Alliance	Alliance Nationale Citoyens	77	.1	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Jessel		Raj	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12078	16.4	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Kmiec		Tom	Conservative	Conservateur	44363	60.3	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Lee		Andrea	Maverick Party	Maverick Party	902	1.2	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Macdonald		Cam	Liberal	Libéral	10295	14	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Muirhead		Konstantine	Independent	Indépendant(e)	228	.3	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Tanaka		Evelyn	Green Party	Parti Vert	1320	1.8	0	73547
48011	Calgary Shepard	Calgary Shepard	preliminary	préliminaires	Vaillant		Ron	People's Party - PPC	Parti populaire - PPC	4284	5.8	0	73547
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	Copp		Ajay	Maverick Party	Maverick Party	568	.9	0	60153
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	Corrigall		Keiran	Green Party	Parti Vert	1094	1.8	0	60153
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	Debrey		Nick	People's Party - PPC	Parti populaire - PPC	2859	4.8	0	60153
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	Duncan		Shawn	Liberal	Libéral	11706	19.5	0	60153
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	King		Patrick	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8863	14.7	0	60153
48012	Calgary Signal Hill	Calgary Signal Hill	preliminary	préliminaires	Liepert		Ron	Conservative	Conservateur	35063	58.3	0	60153
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Aquart		Lee	Independent	Indépendant(e)	184	.4	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Blanchard		Daniel	Marxist-Leninist	Marxiste-Léniniste	111	.2	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Chahal		George	Liberal	Libéral	20092	42.7	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Dhillon		Harry	People's Party - PPC	Parti populaire - PPC	1720	3.7	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Gill		Gurinder Singh	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7690	16.3	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Rana		Nadeem	Centrist	Centriste	93	.2	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	Sahota		Jag	Conservative	Conservateur	16768	35.6	0	47089
48013	Calgary Skyview	Calgary Skyview	preliminary	préliminaires	So		Janna	Green Party	Parti Vert	431	.9	0	47089
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	Boissonnault		Randy	Liberal	Libéral	16561	33.7	0	49118
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	Crocker		Brock	People's Party - PPC	Parti populaire - PPC	2094	4.3	0	49118
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	Cumming		James	Conservative	Conservateur	15945	32.5	0	49118
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	Edwards		Merryn	Marxist-Leninist	Marxiste-Léniniste	112	.2	0	49118
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	Keefe		Valerie	Libertarian	Libertarien	265	.5	0	49118
48014	Edmonton Centre	Edmonton-Centre	preliminary	préliminaires	MacKenzie		Heather	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14141	28.8	0	49118
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Boykowich		Alex	Communist	Communiste	140	.3	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Desjarlais		Blake	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	17437	40.5	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Diotte		Kerry	Conservative	Conservateur	15969	37.1	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Joyce		Mary	Marxist-Leninist	Marxiste-Léniniste	102	.2	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Lau		Heather	Green Party	Parti Vert	540	1.3	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Matty		Thomas	People's Party - PPC	Parti populaire - PPC	2632	6.1	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Mohamud		Habiba	Liberal	Libéral	5988	13.9	0	43082
48015	Edmonton Griesbach	Edmonton Griesbach	preliminary	préliminaires	Watson		Morgan	Libertarian	Libertarien	274	.6	0	43082
48016	Edmonton Manning	Edmonton Manning	preliminary	préliminaires	Aboultaif		Ziad	Conservative	Conservateur	20218	41.1	0	49225
48016	Edmonton Manning	Edmonton Manning	preliminary	préliminaires	Halvorson		Martin	People's Party - PPC	Parti populaire - PPC	3407	6.9	0	49225
48016	Edmonton Manning	Edmonton Manning	preliminary	préliminaires	Smith		Donna Lynn	Liberal	Libéral	10468	21.3	0	49225
48016	Edmonton Manning	Edmonton Manning	preliminary	préliminaires	St. Germain		Charmaine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14999	30.5	0	49225
48016	Edmonton Manning	Edmonton Manning	preliminary	préliminaires	Vachon		Andre	Marxist-Leninist	Marxiste-Léniniste	133	.3	0	49225
48017	Edmonton Mill Woods	Edmonton Mill Woods	preliminary	préliminaires	Henderson		Ben	Liberal	Libéral	16499	34	0	48512
48017	Edmonton Mill Woods	Edmonton Mill Woods	preliminary	préliminaires	Logan		Nigel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10615	21.9	0	48512
48017	Edmonton Mill Woods	Edmonton Mill Woods	preliminary	préliminaires	McCormack		Paul Edward	People's Party - PPC	Parti populaire - PPC	2967	6.1	0	48512
48017	Edmonton Mill Woods	Edmonton Mill Woods	preliminary	préliminaires	Rankin		Naomi	Communist	Communiste	183	.4	0	48512
48017	Edmonton Mill Woods	Edmonton Mill Woods	preliminary	préliminaires	Uppal		Tim	Conservative	Conservateur	18248	37.6	0	48512
48018	Edmonton Riverbend	Edmonton Riverbend	preliminary	préliminaires	Chaudary		Tariq	Liberal	Libéral	14213	24.9	0	56972
48018	Edmonton Riverbend	Edmonton Riverbend	preliminary	préliminaires	Gray		Shawn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14154	24.8	0	56972
48018	Edmonton Riverbend	Edmonton Riverbend	preliminary	préliminaires	Hoffman		Melanie	Green Party	Parti Vert	761	1.3	0	56972
48018	Edmonton Riverbend	Edmonton Riverbend	preliminary	préliminaires	Jeneroux		Matt	Conservative	Conservateur	25702	45.1	0	56972
48018	Edmonton Riverbend	Edmonton Riverbend	preliminary	préliminaires	Peace		Jennifer	People's Party - PPC	Parti populaire - PPC	2142	3.8	0	56972
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	Green		Kelly	Green Party	Parti Vert	674	1.3	0	52253
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	Janke		Wes	People's Party - PPC	Parti populaire - PPC	2356	4.5	0	52253
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	McPherson		Heather	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	31700	60.7	0	52253
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	Mohamed		Hibo	Liberal	Libéral	3948	7.6	0	52253
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	Obasan		Tunde	Conservative	Conservateur	13300	25.5	0	52253
48019	Edmonton Strathcona	Edmonton Strathcona	preliminary	préliminaires	Stinson		Malcolm	Libertarian	Libertarien	275	.5	0	52253
48020	Edmonton West	Edmonton-Ouest	preliminary	préliminaires	Brown		Adam Wilson	Liberal	Libéral	13016	23.2	0	55989
48020	Edmonton West	Edmonton-Ouest	preliminary	préliminaires	Hunter		Sandra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14190	25.3	0	55989
48020	Edmonton West	Edmonton-Ouest	preliminary	préliminaires	Kinzel		Brent	People's Party - PPC	Parti populaire - PPC	3354	6	0	55989
48020	Edmonton West	Edmonton-Ouest	preliminary	préliminaires	McCauley		Kelly	Conservative	Conservateur	25278	45.1	0	55989
48020	Edmonton West	Edmonton-Ouest	preliminary	préliminaires	Morton		Peggy	Marxist-Leninist	Marxiste-Léniniste	151	.3	0	55989
48021	Edmonton--Wetaskiwin	Edmonton--Wetaskiwin	preliminary	préliminaires	Beauchamp		Tyler	People's Party - PPC	Parti populaire - PPC	7666	8.8	0	86708
48021	Edmonton--Wetaskiwin	Edmonton--Wetaskiwin	preliminary	préliminaires	Calliou		Travis	VCP	CAC	345	.4	0	86708
48021	Edmonton--Wetaskiwin	Edmonton--Wetaskiwin	preliminary	préliminaires	Charles		Hugo	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	18222	21	0	86708
48021	Edmonton--Wetaskiwin	Edmonton--Wetaskiwin	preliminary	préliminaires	Lake		Mike	Conservative	Conservateur	48285	55.7	0	86708
48021	Edmonton--Wetaskiwin	Edmonton--Wetaskiwin	preliminary	préliminaires	Thiering		Ron	Liberal	Libéral	12190	14.1	0	86708
48022	Foothills	Foothills	preliminary	préliminaires	Barlow		John	Conservative	Conservateur	44356	69.2	0	64115
48022	Foothills	Foothills	preliminary	préliminaires	Hunter		Daniel	People's Party - PPC	Parti populaire - PPC	5111	8	0	64115
48022	Foothills	Foothills	preliminary	préliminaires	Rogers		Brett	Green Party	Parti Vert	802	1.3	0	64115
48022	Foothills	Foothills	preliminary	préliminaires	Shimp		Paula	Liberal	Libéral	4441	6.9	0	64115
48022	Foothills	Foothills	preliminary	préliminaires	Traxel		Michelle	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7116	11.1	0	64115
48022	Foothills	Foothills	preliminary	préliminaires	Wylie		Josh	Maverick Party	Maverick Party	2289	3.6	0	64115
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Abdi		Abdifatah	Liberal	Libéral	3060	7.2	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Deheer		Brian	Green Party	Parti Vert	429	1	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Goodridge		Laila	Conservative	Conservateur	28806	67.3	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	McDonald		Shawn	People's Party - PPC	Parti populaire - PPC	5475	12.8	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Meyers		Jonathan	Maverick Party	Maverick Party	485	1.1	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Robinson		Garnett	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4427	10.3	0	42777
48023	Fort McMurray--Cold Lake	Fort McMurray--Cold Lake	preliminary	préliminaires	Whitmore		Hughie Shane	VCP	CAC	95	.2	0	42777
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	Campbell		Dan	Liberal	Libéral	2429	4.6	0	53180
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	Eckstrom		Donovan	Parti Rhinocéros Party	Parti Rhinocéros Party	324	.6	0	53180
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	McLean		Shawn	People's Party - PPC	Parti populaire - PPC	5411	10.2	0	53180
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	Ralph		Ambrose	Maverick Party	Maverick Party	2194	4.1	0	53180
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	Villebrun		Jennifer	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6462	12.2	0	53180
48024	Grande Prairie--Mackenzie	Grande Prairie--Mackenzie	preliminary	préliminaires	Warkentin		Chris	Conservative	Conservateur	36360	68.4	0	53180
48025	Lakeland	Lakeland	preliminary	préliminaires	Bissonnette		Des	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5705	10.8	0	52846
48025	Lakeland	Lakeland	preliminary	préliminaires	Brunner		Kira	Green Party	Parti Vert	474	.9	0	52846
48025	Lakeland	Lakeland	preliminary	préliminaires	McCormack		Ann	People's Party - PPC	Parti populaire - PPC	5823	11	0	52846
48025	Lakeland	Lakeland	preliminary	préliminaires	Sirett		Fred	Maverick Party	Maverick Party	1687	3.2	0	52846
48025	Lakeland	Lakeland	preliminary	préliminaires	Stubbs		Shannon	Conservative	Conservateur	36541	69.1	0	52846
48025	Lakeland	Lakeland	preliminary	préliminaires	Turvey		John	Liberal	Libéral	2616	5	0	52846
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Capp		Geoffrey	Christian Heritage Party	Parti de l'Héritage Chrétien	566	1	0	59291
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Harder		Rachael	Conservative	Conservateur	33038	55.7	0	59291
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Hargreaves		Devon	Liberal	Libéral	8928	15.1	0	59291
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Hovan		Kimmie	People's Party - PPC	Parti populaire - PPC	4197	7.1	0	59291
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Perez		Elaine	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11386	19.2	0	59291
48026	Lethbridge	Lethbridge	preliminary	préliminaires	Siever		Kim	Independent	Indépendant(e)	1176	2	0	59291
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Bruised Head		Diandra	Green Party	Parti Vert	719	1.5	0	48358
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Heidinger		Brodie	People's Party - PPC	Parti populaire - PPC	4495	9.3	0	48358
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Motz		Glen	Conservative	Conservateur	31639	65.4	0	48358
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Shoesmith		Geoff	Maverick Party	Maverick Party	1222	2.5	0	48358
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Stenger		Jocelyn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6787	14	0	48358
48027	Medicine Hat--Cardston--Warner	Medicine Hat--Cardston--Warner	preliminary	préliminaires	Wilson		Hannah	Liberal	Libéral	3496	7.2	0	48358
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	Boisson		Darryl	People's Party - PPC	Parti populaire - PPC	6021	12.9	0	46833
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	Krieger		Colin	Maverick Party	Maverick Party	2587	5.5	0	46833
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	MacDougall		Jordan Francis	Green Party	Parti Vert	375	.8	0	46833
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	Penny		Leslie	Liberal	Libéral	2423	5.2	0	46833
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	Ungstad		Gail	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5999	12.8	0	46833
48028	Peace River--Westlock	Peace River--Westlock	preliminary	préliminaires	Viersen		Arnold	Conservative	Conservateur	29428	62.8	0	46833
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Adewumi		Olumide	Liberal	Libéral	4145	6.5	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Dreeshen		Earl	Conservative	Conservateur	40634	64.2	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Grabowski		Marie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8820	13.9	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Lorencz		Kelly	People's Party - PPC	Parti populaire - PPC	7570	12	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Pilon		Jared	Libertarian	Libertarien	210	.3	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Wilcox		Mark	Maverick Party	Maverick Party	1639	2.6	0	63325
48029	Red Deer--Mountain View	Red Deer--Mountain View	preliminary	préliminaires	Willington		Clayten	Independent	Indépendant(e)	307	.5	0	63325
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Barnes		Joan	No Affiliation	Aucune appartenance	574	.9	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Calkins		Blaine	Conservative	Conservateur	39316	64.1	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Heyden-Kaye		Tanya	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8694	14.2	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Joujan		Harry	Maverick Party	Maverick Party	978	1.6	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Lim		Megan	People's Party - PPC	Parti populaire - PPC	7883	12.9	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Ondieki		David	Liberal	Libéral	3684	6	0	61342
48030	Red Deer--Lacombe	Red Deer--Lacombe	preliminary	préliminaires	Watson		Matthew	Libertarian	Libertarien	213	.3	0	61342
48031	St. Albert--Edmonton	St. Albert--Edmonton	preliminary	préliminaires	Cecelia		Brigitte	People's Party - PPC	Parti populaire - PPC	3684	5.9	0	62339
48031	St. Albert--Edmonton	St. Albert--Edmonton	preliminary	préliminaires	Cooper		Michael	Conservative	Conservateur	29652	47.6	0	62339
48031	St. Albert--Edmonton	St. Albert--Edmonton	preliminary	préliminaires	Mpulubusi		Kathleen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	17816	28.6	0	62339
48031	St. Albert--Edmonton	St. Albert--Edmonton	preliminary	préliminaires	Springate		Greg	Liberal	Libéral	11187	17.9	0	62339
48031	St. Albert--Edmonton	St. Albert--Edmonton	validated	validés	Cecelia		Brigitte	People's Party - PPC	Parti populaire - PPC	3684	5.9	338	62678
48031	St. Albert--Edmonton	St. Albert--Edmonton	validated	validés	Cooper		Michael	Conservative	Conservateur	29652	47.6	338	62678
48031	St. Albert--Edmonton	St. Albert--Edmonton	validated	validés	Mpulubusi		Kathleen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	17816	28.6	338	62678
48031	St. Albert--Edmonton	St. Albert--Edmonton	validated	validés	Springate		Greg	Liberal	Libéral	11188	17.9	338	62678
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Genuis		Garnett	Conservative	Conservateur	41092	57.5	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Holm		Tanya	Liberal	Libéral	8730	12.2	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Newberry		Todd	Maverick Party	Maverick Party	849	1.2	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Perris		Sheldon Jonah	Green Party	Parti Vert	701	1	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Simpson		Charles	Independent	Indépendant(e)	282	.4	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Theroux		Aidan Bradley	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	14750	20.7	0	71408
48032	Sherwood Park--Fort Saskatchewan	Sherwood Park--Fort Saskatchewan	preliminary	préliminaires	Wetterstrand		John	People's Party - PPC	Parti populaire - PPC	5004	7	0	71408
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	Dunham		Jeff	Maverick Party	Maverick Party	1243	1.9	0	65888
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	Lloyd		Dane	Conservative	Conservateur	40423	61.4	0	65888
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	MacKinnon		Murray	People's Party - PPC	Parti populaire - PPC	6599	10	0	65888
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	Mills		Kendra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12602	19.1	0	65888
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	Walker		Irene	Liberal	Libéral	4526	6.9	0	65888
48033	Sturgeon River--Parkland	Sturgeon River--Parkland	preliminary	préliminaires	Willerton		Jeffrey	Christian Heritage Party	Parti de l'Héritage Chrétien	495	.8	0	65888
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Francey		Gordon	VCP	CAC	149	.3	0	50819
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Manchen		Michael	People's Party - PPC	Parti populaire - PPC	6452	12.7	0	50819
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Muir		Todd	Maverick Party	Maverick Party	1763	3.5	0	50819
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Roy		Guillaume	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5977	11.8	0	50819
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Schumacher		Sheila	Liberal	Libéral	2856	5.6	0	50819
48034	Yellowhead	Yellowhead	preliminary	préliminaires	Soroka		Gerald	Conservative	Conservateur	33622	66.2	0	50819
59001	Abbotsford	Abbotsford	preliminary	préliminaires	Fast		Ed	Conservative	Conservateur	21607	47.9	0	45079
59001	Abbotsford	Abbotsford	preliminary	préliminaires	Fowler		Stephen	Green Party	Parti Vert	1517	3.4	0	45079
59001	Abbotsford	Abbotsford	preliminary	préliminaires	Gill		Navreen	Liberal	Libéral	10879	24.1	0	45079
59001	Abbotsford	Abbotsford	preliminary	préliminaires	Sinclair		Kevin	People's Party - PPC	Parti populaire - PPC	3337	7.4	0	45079
59001	Abbotsford	Abbotsford	preliminary	préliminaires	yakandawela		dharmasena	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7739	17.2	0	45079
59002	Burnaby North--Seymour	Burnaby-Nord--Seymour	preliminary	préliminaires	Beech		Terry	Liberal	Libéral	18748	39.4	0	47541
59002	Burnaby North--Seymour	Burnaby-Nord--Seymour	preliminary	préliminaires	Dolling		Peter	Green Party	Parti Vert	1462	3.1	0	47541
59002	Burnaby North--Seymour	Burnaby-Nord--Seymour	preliminary	préliminaires	Hanson		Jim	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13815	29.1	0	47541
59002	Burnaby North--Seymour	Burnaby-Nord--Seymour	preliminary	préliminaires	Nickerson		Brad	People's Party - PPC	Parti populaire - PPC	1331	2.8	0	47541
59002	Burnaby North--Seymour	Burnaby-Nord--Seymour	preliminary	préliminaires	Shein		Kelsey	Conservative	Conservateur	12185	25.6	0	47541
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Curran		Maureen	Green Party	Parti Vert	1185	2.9	0	40618
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Kendell		Martin	Independent	Indépendant(e)	296	.7	0	40618
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Lavji		Likky	Conservative	Conservateur	9104	22.4	0	40618
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Sami		Brea Huang	Liberal	Libéral	12361	30.4	0	40618
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Singh		Jagmeet	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16382	40.3	0	40618
59003	Burnaby South	Burnaby-Sud	preliminary	préliminaires	Williams		Marcella	People's Party - PPC	Parti populaire - PPC	1290	3.2	0	40618
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	Doherty		Todd	Conservative	Conservateur	25770	50.8	0	50762
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	Frizzell		Garth	Liberal	Libéral	8447	16.6	0	50762
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	Gustafson		Jeremy	People's Party - PPC	Parti populaire - PPC	4160	8.2	0	50762
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	Hunsinger-Chang		Leigh	Green Party	Parti Vert	1844	3.6	0	50762
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	McKinnon		Audrey	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10323	20.3	0	50762
59004	Cariboo--Prince George	Cariboo--Prince George	preliminary	préliminaires	Thiessen		Henry	Christian Heritage Party	Parti de l'Héritage Chrétien	218	.4	0	50762
59005	Central Okanagan--Similkameen--Nicola	Central Okanagan--Similkameen--Nicola	preliminary	préliminaires	Albas		Dan	Conservative	Conservateur	29826	45.9	0	64972
59005	Central Okanagan--Similkameen--Nicola	Central Okanagan--Similkameen--Nicola	preliminary	préliminaires	Eves		Sarah	Liberal	Libéral	15305	23.6	0	64972
59005	Central Okanagan--Similkameen--Nicola	Central Okanagan--Similkameen--Nicola	preliminary	préliminaires	Mcdonald		Kathryn	People's Party - PPC	Parti populaire - PPC	4661	7.2	0	64972
59005	Central Okanagan--Similkameen--Nicola	Central Okanagan--Similkameen--Nicola	preliminary	préliminaires	Phillip		Joan	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13462	20.7	0	64972
59005	Central Okanagan--Similkameen--Nicola	Central Okanagan--Similkameen--Nicola	preliminary	préliminaires	Wauters		Brennan	Green Party	Parti Vert	1718	2.6	0	64972
59006	Chilliwack--Hope	Chilliwack--Hope	preliminary	préliminaires	Bogunovic		Rob	People's Party - PPC	Parti populaire - PPC	4004	7.7	0	52170
59006	Chilliwack--Hope	Chilliwack--Hope	preliminary	préliminaires	Green		Arthur	Green Party	Parti Vert	1401	2.7	0	52170
59006	Chilliwack--Hope	Chilliwack--Hope	preliminary	préliminaires	Pohl		DJ	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13927	26.7	0	52170
59006	Chilliwack--Hope	Chilliwack--Hope	preliminary	préliminaires	Strahl		Mark	Conservative	Conservateur	23987	46	0	52170
59006	Chilliwack--Hope	Chilliwack--Hope	preliminary	préliminaires	Velonis		Kelly	Liberal	Libéral	8851	17	0	52170
59007	Cloverdale--Langley City	Cloverdale--Langley City	preliminary	préliminaires	Aldag		John	Liberal	Libéral	20890	39.2	0	53305
59007	Cloverdale--Langley City	Cloverdale--Langley City	preliminary	préliminaires	Jansen		Tamara	Conservative	Conservateur	19272	36.2	0	53305
59007	Cloverdale--Langley City	Cloverdale--Langley City	preliminary	préliminaires	Jayaprakash		Rajesh	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10584	19.9	0	53305
59007	Cloverdale--Langley City	Cloverdale--Langley City	preliminary	préliminaires	Kennedy		Ian	People's Party - PPC	Parti populaire - PPC	2559	4.8	0	53305
59007	Cloverdale--Langley City	Cloverdale--Langley City	validated	validés	Aldag		John	Liberal	Libéral	20877	39.2	508	53758
59007	Cloverdale--Langley City	Cloverdale--Langley City	validated	validés	Jansen		Tamara	Conservative	Conservateur	19223	36.1	508	53758
59007	Cloverdale--Langley City	Cloverdale--Langley City	validated	validés	Jayaprakash		Rajesh	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10587	19.9	508	53758
59007	Cloverdale--Langley City	Cloverdale--Langley City	validated	validés	Kennedy		Ian	People's Party - PPC	Parti populaire - PPC	2563	4.8	508	53758
59008	Coquitlam--Port Coquitlam	Coquitlam--Port Coquitlam	preliminary	préliminaires	Anastasiadis		Katerina	Conservative	Conservateur	17047	30.3	0	56187
59008	Coquitlam--Port Coquitlam	Coquitlam--Port Coquitlam	preliminary	préliminaires	Brundell		Kimberly	People's Party - PPC	Parti populaire - PPC	2388	4.3	0	56187
59008	Coquitlam--Port Coquitlam	Coquitlam--Port Coquitlam	preliminary	préliminaires	Dupont		Laura	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15114	26.9	0	56187
59008	Coquitlam--Port Coquitlam	Coquitlam--Port Coquitlam	preliminary	préliminaires	McKinnon		Ron	Liberal	Libéral	21638	38.5	0	56187
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Biley		Barbara	Marxist-Leninist	Marxiste-Léniniste	122	.2	0	69301
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Eppich		Robert	People's Party - PPC	Parti populaire - PPC	3467	5	0	69301
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Farlinger		Susan	Liberal	Libéral	9241	13.3	0	69301
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Johns		Gord	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	30604	44.2	0	69301
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Lawson		Susanne	Green Party	Parti Vert	3670	5.3	0	69301
59009	Courtenay--Alberni	Courtenay--Alberni	preliminary	préliminaires	Lee		Mary	Conservative	Conservateur	22197	32	0	69301
59010	Cowichan--Malahat--Langford	Cowichan--Malahat--Langford	preliminary	préliminaires	DeLong		Alana	Conservative	Conservateur	17091	28.3	0	60381
59010	Cowichan--Malahat--Langford	Cowichan--Malahat--Langford	preliminary	préliminaires	Hecht		Mark	People's Party - PPC	Parti populaire - PPC	3814	6.3	0	60381
59010	Cowichan--Malahat--Langford	Cowichan--Malahat--Langford	preliminary	préliminaires	Herbert		Blair	Liberal	Libéral	9892	16.4	0	60381
59010	Cowichan--Malahat--Langford	Cowichan--Malahat--Langford	preliminary	préliminaires	MacGregor		Alistair	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	25803	42.7	0	60381
59010	Cowichan--Malahat--Langford	Cowichan--Malahat--Langford	preliminary	préliminaires	Versaevel		Lia	Green Party	Parti Vert	3781	6.3	0	60381
59011	Delta	Delta	preliminary	préliminaires	Dean		Monika	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9580	18.3	0	52302
59011	Delta	Delta	preliminary	préliminaires	Pan		Hong Yan	Independent	Indépendant(e)	388	.7	0	52302
59011	Delta	Delta	preliminary	préliminaires	Qualtrough		Carla	Liberal	Libéral	22105	42.3	0	52302
59011	Delta	Delta	preliminary	préliminaires	Shearer		Garry	Conservative	Conservateur	17695	33.8	0	52302
59011	Delta	Delta	preliminary	préliminaires	Smith		Jeremy	Green Party	Parti Vert	1243	2.4	0	52302
59011	Delta	Delta	preliminary	préliminaires	Tarasenko		Paul	People's Party - PPC	Parti populaire - PPC	1291	2.5	0	52302
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	Birring		Amrit	People's Party - PPC	Parti populaire - PPC	1242	2.8	0	43970
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	DeNure		Perry	Green Party	Parti Vert	824	1.9	0	43970
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	Hardie		Ken	Liberal	Libéral	19868	45.2	0	43970
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	Hayer		Dave	Conservative	Conservateur	13639	31	0	43970
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	Krishnan		Murali	Independent	Indépendant(e)	137	.3	0	43970
59012	Fleetwood--Port Kells	Fleetwood--Port Kells	preliminary	préliminaires	Toor		Raji	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8260	18.8	0	43970
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	Allan		Wayne	Independent	Indépendant(e)	147	.2	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	Caputo		Frank	Conservative	Conservateur	29881	42.7	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	Currie		Iain	Green Party	Parti Vert	2576	3.7	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	Delwo		Corally	People's Party - PPC	Parti populaire - PPC	4033	5.8	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	McCormick		Jesse	Liberal	Libéral	12717	18.2	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	O'Brien		Bob	Independent	Indépendant(e)	291	.4	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	preliminary	préliminaires	Sundhu		Bill	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20406	29.1	0	70051
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	Allan		Wayne	Independent	Indépendant(e)	146	.2	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	Caputo		Frank	Conservative	Conservateur	30281	43	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	Currie		Iain	Green Party	Parti Vert	2576	3.7	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	Delwo		Corally	People's Party - PPC	Parti populaire - PPC	4033	5.7	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	McCormick		Jesse	Liberal	Libéral	12717	18.1	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	O'Brien		Bob	Independent	Indépendant(e)	264	.4	324	70772
59013	Kamloops--Thompson--Cariboo	Kamloops--Thompson--Cariboo	validated	validés	Sundhu		Bill	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20431	29	324	70772
59014	Kelowna--Lake Country	Kelowna--Lake Country	preliminary	préliminaires	Desjarlais		Cade	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12204	18.2	0	67082
59014	Kelowna--Lake Country	Kelowna--Lake Country	preliminary	préliminaires	Gray		Tracy	Conservative	Conservateur	30409	45.3	0	67082
59014	Kelowna--Lake Country	Kelowna--Lake Country	preliminary	préliminaires	Krupa		Tim	Liberal	Libéral	17707	26.4	0	67082
59014	Kelowna--Lake Country	Kelowna--Lake Country	preliminary	préliminaires	Rogers		Brian	People's Party - PPC	Parti populaire - PPC	4688	7	0	67082
59014	Kelowna--Lake Country	Kelowna--Lake Country	preliminary	préliminaires	Szeman		Imre	Green Party	Parti Vert	2074	3.1	0	67082
59015	Kootenay--Columbia	Kootenay--Columbia	preliminary	préliminaires	Bennett		Sarah	People's Party - PPC	Parti populaire - PPC	4320	7.1	0	61237
59015	Kootenay--Columbia	Kootenay--Columbia	preliminary	préliminaires	Goldsbury		Robin	Liberal	Libéral	5482	9	0	61237
59015	Kootenay--Columbia	Kootenay--Columbia	preliminary	préliminaires	Morrison		Rob	Conservative	Conservateur	26845	43.8	0	61237
59015	Kootenay--Columbia	Kootenay--Columbia	preliminary	préliminaires	Nelson		Rana	Green Party	Parti Vert	2411	3.9	0	61237
59015	Kootenay--Columbia	Kootenay--Columbia	preliminary	préliminaires	Stetski		Wayne	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	22179	36.2	0	61237
59016	Langley--Aldergrove	Langley--Aldergrove	preliminary	préliminaires	Boychuk		Rayna	People's Party - PPC	Parti populaire - PPC	3341	5.3	0	62657
59016	Langley--Aldergrove	Langley--Aldergrove	preliminary	préliminaires	Chang		Michael	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12288	19.6	0	62657
59016	Langley--Aldergrove	Langley--Aldergrove	preliminary	préliminaires	Farstad		Kaija	Green Party	Parti Vert	1799	2.9	0	62657
59016	Langley--Aldergrove	Langley--Aldergrove	preliminary	préliminaires	Richter		Kim	Liberal	Libéral	16585	26.5	0	62657
59016	Langley--Aldergrove	Langley--Aldergrove	preliminary	préliminaires	Van Popta		Tako	Conservative	Conservateur	28644	45.7	0	62657
59017	Mission--Matsqui--Fraser Canyon	Mission--Matsqui--Fraser Canyon	preliminary	préliminaires	Bellay		Nicole	Green Party	Parti Vert	1891	4.4	0	43156
59017	Mission--Matsqui--Fraser Canyon	Mission--Matsqui--Fraser Canyon	preliminary	préliminaires	Grewal		Geet	Liberal	Libéral	10597	24.6	0	43156
59017	Mission--Matsqui--Fraser Canyon	Mission--Matsqui--Fraser Canyon	preliminary	préliminaires	Niles		Tyler	People's Party - PPC	Parti populaire - PPC	3073	7.1	0	43156
59017	Mission--Matsqui--Fraser Canyon	Mission--Matsqui--Fraser Canyon	preliminary	préliminaires	Perrin		Lynn	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8729	20.2	0	43156
59017	Mission--Matsqui--Fraser Canyon	Mission--Matsqui--Fraser Canyon	preliminary	préliminaires	Vis		Brad	Conservative	Conservateur	18866	43.7	0	43156
59018	Nanaimo--Ladysmith	Nanaimo--Ladysmith	preliminary	préliminaires	Barron		Lisa Marie	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	18051	29.1	0	61945
59018	Nanaimo--Ladysmith	Nanaimo--Ladysmith	preliminary	préliminaires	Corfield		Michelle	Liberal	Libéral	8327	13.4	0	61945
59018	Nanaimo--Ladysmith	Nanaimo--Ladysmith	preliminary	préliminaires	Kronis		Tamara	Conservative	Conservateur	17050	27.5	0	61945
59018	Nanaimo--Ladysmith	Nanaimo--Ladysmith	preliminary	préliminaires	Manly		Paul	Green Party	Parti Vert	15313	24.7	0	61945
59018	Nanaimo--Ladysmith	Nanaimo--Ladysmith	preliminary	préliminaires	Welton		Stephen	People's Party - PPC	Parti populaire - PPC	3204	5.2	0	61945
59019	New Westminster--Burnaby	New Westminster--Burnaby	preliminary	préliminaires	Heide		Kevin	People's Party - PPC	Parti populaire - PPC	1840	3.7	0	49224
59019	New Westminster--Burnaby	New Westminster--Burnaby	preliminary	préliminaires	Jaffer		Rozina	Liberal	Libéral	11685	23.7	0	49224
59019	New Westminster--Burnaby	New Westminster--Burnaby	preliminary	préliminaires	Julian		Peter	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	23954	48.7	0	49224
59019	New Westminster--Burnaby	New Westminster--Burnaby	preliminary	préliminaires	Macdonald		David	Green Party	Parti Vert	2035	4.1	0	49224
59019	New Westminster--Burnaby	New Westminster--Burnaby	preliminary	préliminaires	Munro		Paige	Conservative	Conservateur	9710	19.7	0	49224
59019	New Westminster--Burnaby	New Westminster--Burnaby	validated	validés	Heide		Kevin	People's Party - PPC	Parti populaire - PPC	1840	3.7	462	49786
59019	New Westminster--Burnaby	New Westminster--Burnaby	validated	validés	Jaffer		Rozina	Liberal	Libéral	11685	23.7	462	49786
59019	New Westminster--Burnaby	New Westminster--Burnaby	validated	validés	Julian		Peter	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	24054	48.8	462	49786
59019	New Westminster--Burnaby	New Westminster--Burnaby	validated	validés	Macdonald		David	Green Party	Parti Vert	2035	4.1	462	49786
59019	New Westminster--Burnaby	New Westminster--Burnaby	validated	validés	Munro		Paige	Conservative	Conservateur	9710	19.7	462	49786
59020	North Okanagan--Shuswap	North Okanagan--Shuswap	preliminary	préliminaires	Arnold		Mel	Conservative	Conservateur	33596	46.4	0	72369
59020	North Okanagan--Shuswap	North Okanagan--Shuswap	preliminary	préliminaires	Delfing		Kyle	People's Party - PPC	Parti populaire - PPC	7209	10	0	72369
59020	North Okanagan--Shuswap	North Okanagan--Shuswap	preliminary	préliminaires	Desautels		Shelley	Liberal	Libéral	13667	18.9	0	72369
59020	North Okanagan--Shuswap	North Okanagan--Shuswap	preliminary	préliminaires	Gunner		Andrea	Green Party	Parti Vert	3967	5.5	0	72369
59020	North Okanagan--Shuswap	North Okanagan--Shuswap	preliminary	préliminaires	Johnston		Ron	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	13930	19.2	0	72369
59021	North Vancouver	North Vancouver	preliminary	préliminaires	Bentz		Tammy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11750	19.8	0	59320
59021	North Vancouver	North Vancouver	preliminary	préliminaires	Galloway		John	People's Party - PPC	Parti populaire - PPC	1545	2.6	0	59320
59021	North Vancouver	North Vancouver	preliminary	préliminaires	Jickling		Les	Conservative	Conservateur	16671	28.1	0	59320
59021	North Vancouver	North Vancouver	preliminary	préliminaires	Kaario		Archie	Green Party	Parti Vert	2598	4.4	0	59320
59021	North Vancouver	North Vancouver	preliminary	préliminaires	Wilkinson		Jonathan	Liberal	Libéral	26756	45.1	0	59320
59021	North Vancouver	North Vancouver	validated	validés	Bentz		Tammy	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	11750	19.8	383	59703
59021	North Vancouver	North Vancouver	validated	validés	Galloway		John	People's Party - PPC	Parti populaire - PPC	1545	2.6	383	59703
59021	North Vancouver	North Vancouver	validated	validés	Jickling		Les	Conservative	Conservateur	16671	28.1	383	59703
59021	North Vancouver	North Vancouver	validated	validés	Kaario		Archie	Green Party	Parti Vert	2598	4.4	383	59703
59021	North Vancouver	North Vancouver	validated	validés	Wilkinson		Jonathan	Liberal	Libéral	26756	45.1	383	59703
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Buddle		Peter	Parti Rhinocéros Party	Parti Rhinocéros Party	161	.3	0	52923
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Dalton		Marc	Conservative	Conservateur	19371	36.6	0	52923
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Hoffmann		Juliuss	People's Party - PPC	Parti populaire - PPC	2890	5.5	0	52923
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Klapwyk		Phil	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16869	31.9	0	52923
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Ranta		Steven William	Independent	Indépendant(e)	453	.9	0	52923
59022	Pitt Meadows--Maple Ridge	Pitt Meadows--Maple Ridge	preliminary	préliminaires	Yousef		Ahmed	Liberal	Libéral	13179	24.9	0	52923
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	preliminary	préliminaires	Davis		Will	Liberal	Libéral	14231	27.3	0	52087
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	preliminary	préliminaires	McPherson		Desta	People's Party - PPC	Parti populaire - PPC	1762	3.4	0	52087
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	preliminary	préliminaires	Shin		Nelly	Conservative	Conservateur	16605	31.9	0	52087
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	preliminary	préliminaires	Verrier		Roland	Marxist-Leninist	Marxiste-Léniniste	122	.2	0	52087
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	preliminary	préliminaires	Zarrillo		Bonita	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	19367	37.2	0	52087
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	validated	validés	Davis		Will	Liberal	Libéral	14231	27.3	428	52519
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	validated	validés	McPherson		Desta	People's Party - PPC	Parti populaire - PPC	1766	3.4	428	52519
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	validated	validés	Shin		Nelly	Conservative	Conservateur	16605	31.9	428	52519
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	validated	validés	Verrier		Roland	Marxist-Leninist	Marxiste-Léniniste	122	.2	428	52519
59023	Port Moody--Coquitlam	Port Moody--Coquitlam	validated	validés	Zarrillo		Bonita	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	19367	37.2	428	52519
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Alavi		Amir	Liberal	Libéral	4236	8.6	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Dyck		Ryan	People's Party - PPC	Parti populaire - PPC	5138	10.5	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Hewkin		Phil	CFF - Canada's Fourth Front	QFC - Quatrième front du Canada	53	.1	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Jeffers		David	Maverick Party	Maverick Party	1581	3.2	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Kendall		Catharine	Green Party	Parti Vert	1661	3.4	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Longley		Cory Grizz	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	6644	13.5	0	49096
59024	Prince George--Peace River--Northern Rockies	Prince George--Peace River--Northern Rockies	preliminary	préliminaires	Zimmer		Bob	Conservative	Conservateur	29783	60.7	0	49096
59025	Richmond Centre	Richmond-Centre	preliminary	préliminaires	Gillanders		Laura	Green Party	Parti Vert	1063	3.3	0	32359
59025	Richmond Centre	Richmond-Centre	preliminary	préliminaires	Hinton		James	People's Party - PPC	Parti populaire - PPC	707	2.2	0	32359
59025	Richmond Centre	Richmond-Centre	preliminary	préliminaires	Miao		Wilson	Liberal	Libéral	12701	39.3	0	32359
59025	Richmond Centre	Richmond-Centre	preliminary	préliminaires	Nixon		Sandra	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	5849	18.1	0	32359
59025	Richmond Centre	Richmond-Centre	preliminary	préliminaires	Wong		Alice	Conservative	Conservateur	12039	37.2	0	32359
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Anderson		Rob	People's Party - PPC	Parti populaire - PPC	2919	4.8	0	60434
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Frost		Laura Anne	Conservative	Conservateur	13099	21.7	0	60434
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Garrison		Randall	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	25745	42.6	0	60434
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Gordon		Harley	Green Party	Parti Vert	5436	9	0	60434
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Kobayashi		Doug	Liberal	Libéral	13009	21.5	0	60434
59026	Esquimalt--Saanich--Sooke	Esquimalt--Saanich--Sooke	preliminary	préliminaires	Strandlund		Tyson Riel	Communist	Communiste	226	.4	0	60434
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	Busch		David	Conservative	Conservateur	14775	22.5	0	65537
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	Currie		Dock	Communist	Communiste	141	.2	0	65537
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	Hilderman		David	People's Party - PPC	Parti populaire - PPC	1943	3	0	65537
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	May		Elizabeth	Green Party	Parti Vert	24558	37.5	0	65537
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	Moore-Arbour		Sherri	Liberal	Libéral	12056	18.4	0	65537
59027	Saanich--Gulf Islands	Saanich--Gulf Islands	preliminary	préliminaires	Singh		Sabina	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	12064	18.4	0	65537
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Bachrach		Taylor	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15100	42.3	0	35678
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Craven		Jody	People's Party - PPC	Parti populaire - PPC	2794	7.8	0	35678
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Jhaj		Lakhwinder	Liberal	Libéral	2790	7.8	0	35678
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Rattee		Claire	Conservative	Conservateur	12885	36.1	0	35678
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Taylor		Rod	Christian Heritage Party	Parti de l'Héritage Chrétien	754	2.1	0	35678
59028	Skeena--Bulkley Valley	Skeena--Bulkley Valley	preliminary	préliminaires	Young		Adeana	Green Party	Parti Vert	1355	3.8	0	35678
59029	South Okanagan--West Kootenay	Okanagan-Sud--Kootenay-Ouest	preliminary	préliminaires	Cannings		Richard	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	27372	41.3	0	66308
59029	South Okanagan--West Kootenay	Okanagan-Sud--Kootenay-Ouest	preliminary	préliminaires	Howse		Tara	Green Party	Parti Vert	2472	3.7	0	66308
59029	South Okanagan--West Kootenay	Okanagan-Sud--Kootenay-Ouest	preliminary	préliminaires	Konanz		Helena	Conservative	Conservateur	23473	35.4	0	66308
59029	South Okanagan--West Kootenay	Okanagan-Sud--Kootenay-Ouest	preliminary	préliminaires	Robertson		Ken	Liberal	Libéral	8129	12.3	0	66308
59029	South Okanagan--West Kootenay	Okanagan-Sud--Kootenay-Ouest	preliminary	préliminaires	Taylor		Sean	People's Party - PPC	Parti populaire - PPC	4862	7.3	0	66308
59030	South Surrey--White Rock	Surrey-Sud--White Rock	preliminary	préliminaires	Findlay		Kerry-Lynne	Conservative	Conservateur	24176	42.4	0	56968
59030	South Surrey--White Rock	Surrey-Sud--White Rock	preliminary	préliminaires	Hogg		Gordie	Liberal	Libéral	22164	38.9	0	56968
59030	South Surrey--White Rock	Surrey-Sud--White Rock	preliminary	préliminaires	Jensen		Gary	People's Party - PPC	Parti populaire - PPC	2190	3.8	0	56968
59030	South Surrey--White Rock	Surrey-Sud--White Rock	preliminary	préliminaires	Liu		June	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	8438	14.8	0	56968
59031	Steveston--Richmond East	Steveston--Richmond-Est	preliminary	préliminaires	Bains		Parm	Liberal	Libéral	16542	42.5	0	38944
59031	Steveston--Richmond East	Steveston--Richmond-Est	preliminary	préliminaires	Chiu		Kenny	Conservative	Conservateur	13065	33.5	0	38944
59031	Steveston--Richmond East	Steveston--Richmond-Est	preliminary	préliminaires	Raunet		Françoise	Green Party	Parti Vert	859	2.2	0	38944
59031	Steveston--Richmond East	Steveston--Richmond-Est	preliminary	préliminaires	Singh		Jennifer	People's Party - PPC	Parti populaire - PPC	955	2.5	0	38944
59031	Steveston--Richmond East	Steveston--Richmond-Est	preliminary	préliminaires	Trovato		Jack	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	7523	19.3	0	38944
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Abbott		Ryan	Communist	Communiste	137	.4	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Andhi		Sonia	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	10628	27.7	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Bains		Tina	Conservative	Conservateur	8075	21	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Kennedy		Joe	People's Party - PPC	Parti populaire - PPC	1539	4	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Kongyuy		Felix	Green Party	Parti Vert	838	2.2	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Pielak		Kevin	Christian Heritage Party	Parti de l'Héritage Chrétien	289	.8	0	38368
59032	Surrey Centre	Surrey-Centre	preliminary	préliminaires	Sarai		Randeep	Liberal	Libéral	16862	43.9	0	38368
59033	Surrey--Newton	Surrey--Newton	preliminary	préliminaires	Dhaliwal		Sukh	Liberal	Libéral	19721	53.9	0	36610
59033	Surrey--Newton	Surrey--Newton	preliminary	préliminaires	Hundal		Parveer	Independent	Indépendant(e)	628	1.7	0	36610
59033	Surrey--Newton	Surrey--Newton	preliminary	préliminaires	Johal		Avneet	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9536	26	0	36610
59033	Surrey--Newton	Surrey--Newton	preliminary	préliminaires	Mohsin		Syed	Conservative	Conservateur	5758	15.7	0	36610
59033	Surrey--Newton	Surrey--Newton	preliminary	préliminaires	Singh		Pamela	People's Party - PPC	Parti populaire - PPC	967	2.6	0	36610
59034	Vancouver Centre	Vancouver-Centre	preliminary	préliminaires	Cockell		Harry	Conservative	Conservateur	11473	22	0	52114
59034	Vancouver Centre	Vancouver-Centre	preliminary	préliminaires	Fry		Hedy	Liberal	Libéral	20916	40.1	0	52114
59034	Vancouver Centre	Vancouver-Centre	preliminary	préliminaires	Ouellette		Breen	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	15911	30.5	0	52114
59034	Vancouver Centre	Vancouver-Centre	preliminary	préliminaires	Paivarinta		Alaric	Green Party	Parti Vert	2077	4	0	52114
59034	Vancouver Centre	Vancouver-Centre	preliminary	préliminaires	Singleton-Fookes		Taylor	People's Party - PPC	Parti populaire - PPC	1737	3.3	0	52114
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Buday		Gölök	Libertarian	Libertarien	831	1.7	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Francis		Mauro	Conservative	Conservateur	5389	10.9	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Hale		Natasha	Communist	Communiste	387	.8	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Kwan		Jenny	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	27899	56.4	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Litzcke		Karin	People's Party - PPC	Parti populaire - PPC	1382	2.8	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Matthew		Cheryl	Green Party	Parti Vert	3813	7.7	0	49508
59035	Vancouver East	Vancouver-Est	preliminary	préliminaires	Vander Vies		Josh	Liberal	Libéral	9807	19.8	0	49508
59036	Vancouver Granville	Vancouver Granville	preliminary	préliminaires	Appadurai		Anjali	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16619	33.5	0	49575
59036	Vancouver Granville	Vancouver Granville	preliminary	préliminaires	Che		Kailin	Conservative	Conservateur	13290	26.8	0	49575
59036	Vancouver Granville	Vancouver Granville	preliminary	préliminaires	Jewett		Damian	People's Party - PPC	Parti populaire - PPC	1177	2.4	0	49575
59036	Vancouver Granville	Vancouver Granville	preliminary	préliminaires	Noormohamed		Taleeb	Liberal	Libéral	17055	34.4	0	49575
59036	Vancouver Granville	Vancouver Granville	preliminary	préliminaires	Popat		Imtiaz	Green Party	Parti Vert	1434	2.9	0	49575
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Blaney		Rachel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	22559	39.3	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Downey		Shelley	Conservative	Conservateur	20779	36.2	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Gastis		Stacey	Maverick Party	Maverick Party	322	.6	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Grenz		Jennifer	Liberal	Libéral	7540	13.1	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Macknight		Paul	People's Party - PPC	Parti populaire - PPC	2685	4.7	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Neal		Carla	Marxist-Leninist	Marxiste-Léniniste	89	.2	0	57456
59037	North Island--Powell River	North Island--Powell River	preliminary	préliminaires	Wegg		Jessica	Green Party	Parti Vert	3482	6.1	0	57456
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Binda		Carson	Conservative	Conservateur	5368	13.6	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Bremner		Virginia	Liberal	Libéral	10852	27.4	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Cariou		Kimball	Communist	Communiste	172	.4	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Chishtie		Farrukh	Green Party	Parti Vert	1560	3.9	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Davies		Don	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	20659	52.3	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	MacKenzie		Jeremy	People's Party - PPC	Parti populaire - PPC	860	2.2	0	39536
59038	Vancouver Kingsway	Vancouver Kingsway	preliminary	préliminaires	Petersen		Donna	Marxist-Leninist	Marxiste-Léniniste	65	.2	0	39536
59039	Vancouver Quadra	Vancouver Quadra	preliminary	préliminaires	Abenes		Naden	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9220	19.3	0	47705
59039	Vancouver Quadra	Vancouver Quadra	preliminary	préliminaires	Armstrong		Brad	Conservative	Conservateur	13786	28.9	0	47705
59039	Vancouver Quadra	Vancouver Quadra	preliminary	préliminaires	Murray		Joyce	Liberal	Libéral	20814	43.6	0	47705
59039	Vancouver Quadra	Vancouver Quadra	preliminary	préliminaires	Siekmann		Renate	People's Party - PPC	Parti populaire - PPC	963	2	0	47705
59039	Vancouver Quadra	Vancouver Quadra	preliminary	préliminaires	Singh		Devyani	Green Party	Parti Vert	2922	6.1	0	47705
59040	Vancouver South	Vancouver-Sud	preliminary	préliminaires	Cook		Anthony	People's Party - PPC	Parti populaire - PPC	1104	2.7	0	40233
59040	Vancouver South	Vancouver-Sud	preliminary	préliminaires	Gill		Sukhbir Singh	Conservative	Conservateur	9030	22.4	0	40233
59040	Vancouver South	Vancouver-Sud	preliminary	préliminaires	Jamieson		Anne	Marxist-Leninist	Marxiste-Léniniste	287	.7	0	40233
59040	Vancouver South	Vancouver-Sud	preliminary	préliminaires	McQuillan		Sean	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	9923	24.7	0	40233
59040	Vancouver South	Vancouver-Sud	preliminary	préliminaires	Sajjan		Harjit S.	Liberal	Libéral	19889	49.4	0	40233
59041	Victoria	Victoria	preliminary	préliminaires	Collins		Laurel	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	27335	44	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Hodson		Hannah	Conservative	Conservateur	8670	14	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Loughton		Nick	Green Party	Parti Vert	6999	11.3	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Macdonald		Nikki	Liberal	Libéral	16537	26.6	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Phipps		John Randal	People's Party - PPC	Parti populaire - PPC	1999	3.2	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Reichert		Jordan	Animal Protection Party	Parti Protection Animaux	250	.4	0	62058
59041	Victoria	Victoria	preliminary	préliminaires	Zroback		Janis	Communist	Communiste	268	.4	0	62058
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Bebb		Doug	People's Party - PPC	Parti populaire - PPC	2306	3.6	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Grimwood		Terry	Independent	Indépendant(e)	50	.1	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Jeffrey		Gordon	Parti Rhinocéros Party	Parti Rhinocéros Party	98	.2	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Lewis		Avi	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	16262	25.6	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	MacGregor		Chris	Independent	Indépendant(e)	77	.1	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Simpson		Mike	Green Party	Parti Vert	4113	6.5	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Weiler		Patrick	Liberal	Libéral	21470	33.8	0	63438
59042	West Vancouver--Sunshine Coast--Sea to Sky Country	West Vancouver--Sunshine Coast--Sea to Sky Country	preliminary	préliminaires	Weston		John	Conservative	Conservateur	19062	30	0	63438
60001	Yukon	Yukon	preliminary	préliminaires	Dunlop		Barbara	Conservative	Conservateur	5096	26.2	0	19479
60001	Yukon	Yukon	preliminary	préliminaires	Hanley		Brendan	Liberal	Libéral	6471	33.2	0	19479
60001	Yukon	Yukon	preliminary	préliminaires	Morris		Lenore	Green Party	Parti Vert	919	4.7	0	19479
60001	Yukon	Yukon	preliminary	préliminaires	Smith		Jonas Jacot	Independent	Indépendant(e)	2639	13.5	0	19479
60001	Yukon	Yukon	preliminary	préliminaires	Vollans-Leduc		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4354	22.4	0	19479
60001	Yukon	Yukon	validated	validés	Dunlop		Barbara	Conservative	Conservateur	5096	26.3	142	19548
60001	Yukon	Yukon	validated	validés	Hanley		Brendan	Liberal	Libéral	6471	33.3	142	19548
60001	Yukon	Yukon	validated	validés	Morris		Lenore	Green Party	Parti Vert	846	4.4	142	19548
60001	Yukon	Yukon	validated	validés	Smith		Jonas Jacot	Independent	Indépendant(e)	2639	13.6	142	19548
60001	Yukon	Yukon	validated	validés	Vollans-Leduc		Lisa	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4354	22.4	142	19548
61001	Northwest Territories	Territoires du Nord-Ouest	preliminary	préliminaires	Groenewegen		Jane	Independent	Indépendant(e)	1791	12.7	0	14122
61001	Northwest Territories	Territoires du Nord-Ouest	preliminary	préliminaires	Kotchilea		Kelvin	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	4558	32.3	0	14122
61001	Northwest Territories	Territoires du Nord-Ouest	preliminary	préliminaires	Laufer		Roland	Green Party	Parti Vert	355	2.5	0	14122
61001	Northwest Territories	Territoires du Nord-Ouest	preliminary	préliminaires	McLeod		Michael	Liberal	Libéral	5387	38.1	0	14122
61001	Northwest Territories	Territoires du Nord-Ouest	preliminary	préliminaires	Mollison		Lea Anne	Conservative	Conservateur	2031	14.4	0	14122
62001	Nunavut	Nunavut	preliminary	préliminaires	Angnakak		Pat	Liberal	Libéral	2588	35.6	0	7276
62001	Nunavut	Nunavut	preliminary	préliminaires	Idlout		Lori	NDP-New Democratic Party	NPD-Nouveau Parti démocratique	3483	47.9	0	7276
62001	Nunavut	Nunavut	preliminary	préliminaires	Mackenzie		Laura	Conservative	Conservateur	1205	16.6	0	7276
`;
