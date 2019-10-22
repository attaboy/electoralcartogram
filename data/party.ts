class Party {
  constructor(
    readonly rawName: string,
    readonly en: string,
    readonly fr: string,
    readonly className: string
  ) {
    this.rawName = rawName;
    this.en = en;
    this.fr = fr;
    this.className = className;
  }

  static Liberal: Party;
  static NDP: Party;
  static Conservative: Party;
  static Green: Party;
  static BQ: Party;
  static PPC: Party;
  static Other: Party;
  static Independent: Party;
  static all: Party[];

  static findByRawName(rawName: string): Party {
    return Party.all.find((ea) => ea.rawName === rawName) || Party.Other;
  }
}

Party.Liberal = new Party("Liberal/Libéral", "Liberal", "Libéral", "liberal");
Party.NDP = new Party("NDP-New Democratic Party/NPD-Nouveau Parti démocratique", "NDP", "NPD", "ndp");
Party.Conservative = new Party("Conservative/Conservateur", "Conservative", "Conservateur", "conservative");
Party.Green = new Party("Green Party/Parti Vert", "Green Party", "Parti vert", "green");
Party.BQ = new Party("Bloc Québécois/Bloc Québécois", "Bloc Québécois", "Bloc Québécois", "bloc");
Party.PPC = new Party("People's Party/Parti populaire", "People’s Party", "Parti populaire", "ppc");
Party.Independent = new Party("Independent/Indépendant(e)", "Independent", "Indépendant(e)", "independent");
Party.Other = new Party("Other", "Other", "Autre", "other");
Party.all = [Party.Liberal, Party.NDP, Party.Conservative, Party.Green, Party.BQ, Party.PPC, Party.Independent, Party.Other];

export default Party;
