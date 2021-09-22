import { Election } from "../pages";

export const Utils = {
  electionToDate: function(election: Election): Date {
    return new Date(election + "T12:00:00.000Z");
  }
}
