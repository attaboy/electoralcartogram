class Party {
  constructor(
    readonly rawName: string,
    readonly en: string,
    readonly fr: string,
    readonly color: string
  ) {
    this.rawName = rawName;
    this.en = en;
    this.fr = fr;
    this.color = color;
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

Party.Liberal = new Party("Liberal/Libéral", "Liberal", "Libéral", "hsla(359, 78%, 47%, 1.0)");
Party.NDP = new Party("NDP-New Democratic Party/NPD-Nouveau Parti démocratique", "NDP", "NPD", "hsla(33, 94%, 55%, 1.0)");
Party.Conservative = new Party("Conservative/Conservateur", "Conservative", "Conservateur", "hsla(214, 63%, 31%, 1.0");
Party.Green = new Party("Green Party/Parti Vert", "Green Party", "Parti Vert", "hsla(116, 49%, 41%, 1.0)");
Party.BQ = new Party("Bloc Québécois/Bloc Québécois", "Bloc Québécois", "Bloc Québécois", "hsla(200, 70%, 50%, 1.0)");
Party.PPC = new Party("People's Party/Parti populaire", "People’s Party", "Parti populaire", "hsla(280, 57%, 56%, 1.0)");
Party.Independent = new Party("Independent/Indépendant(e)", "Independent", "Indépendant(e)", "hsla(0, 0%, 58%, 1.0)");
Party.Other = new Party("Other", "Other", "Autre", "hsla(0, 0%, 58%, 1.0)");
Party.all = [Party.Liberal, Party.NDP, Party.Conservative, Party.Green, Party.BQ, Party.PPC, Party.Independent, Party.Other];

export default Party;
