import { Election } from "../pages";

interface Parliaments {
  [key: string]: Election
}

export const Parliaments: Parliaments = {
  P42: "2015-10-19",
  P43: "2019-10-21",
  // P44: "2021-10-20" as Election
}
