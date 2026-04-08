import { type Election } from "../pages";

export function electionToDate(election: Election): Date {
  return new Date(election + "T12:00:00.000Z");
}
