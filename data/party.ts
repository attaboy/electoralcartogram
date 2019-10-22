class Party {
  constructor(
    readonly rawName: string,
    readonly en: string,
    readonly fr: string,
    readonly color: string,
    readonly className: string
  ) {
    this.rawName = rawName;
    this.en = en;
    this.fr = fr;
    this.color = color;
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

Party.Liberal = new Party("Liberal/Libéral", "Liberal", "Libéral", "hsla(359, 78%, 47%, 1.0)", "liberal");
Party.NDP = new Party("NDP-New Democratic Party/NPD-Nouveau Parti démocratique", "NDP", "NPD", "hsla(34, 96%, 46%, 1.0)", "ndp");
Party.Conservative = new Party("Conservative/Conservateur", "Conservative", "Conservateur", "hsla(214, 63%, 34%, 1.0)", "conservative");
Party.Green = new Party("Green Party/Parti Vert", "Green Party", "Parti vert", "hsla(116, 49%, 37%, 1.0)", "green");
Party.BQ = new Party("Bloc Québécois/Bloc Québécois", "Bloc Québécois", "Bloc Québécois", "hsla(200, 80%, 46%, 1.0)", "bloc");
Party.PPC = new Party("People's Party/Parti populaire", "People’s Party", "Parti populaire", "hsla(285, 65%, 58%, 1.0)", "ppc");
Party.Independent = new Party("Independent/Indépendant(e)", "Independent", "Indépendant(e)", "hsla(45, 20%, 65%, 1.0)", "independent");
Party.Other = new Party("Other", "Other", "Autre", "hsla(0, 0%, 53%, 1.0)", "other");
Party.all = [Party.Liberal, Party.NDP, Party.Conservative, Party.Green, Party.BQ, Party.PPC, Party.Independent, Party.Other];

export default Party;
