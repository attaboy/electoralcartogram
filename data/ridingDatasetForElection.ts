import type { Election } from "../pages";
import type { ProvinceData } from "./riding_data";
import { ridingDataSet2015 } from "./riding_data_2015";
import { ridingDataSet2025 } from "./riding_data-2025";

/** First election whose results use the post–2024 redistribution ridings. */
export const firstElectionUsing2025Ridings = "2025-04-25" as const satisfies Election;

const cutoffTimeMs = new Date(
  `${firstElectionUsing2025Ridings}T12:00:00.000Z`,
).getTime();

export function electionUses2025RidingBoundaries(election: Election): boolean {
  return new Date(election + "T12:00:00.000Z").getTime() >= cutoffTimeMs;
}

export function getRidingDatasetForElection(election: Election): ProvinceData[] {
  return electionUses2025RidingBoundaries(election)
    ? ridingDataSet2025
    : ridingDataSet2015;
}
