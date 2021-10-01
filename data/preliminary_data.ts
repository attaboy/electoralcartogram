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
