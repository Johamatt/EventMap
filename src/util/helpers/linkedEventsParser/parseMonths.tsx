import { ActivityMedia, Company } from "../../../API";

export function parseMonths(data: any) {
  let months: Array<number> = [];

  data.forEach((m: string) => {
    if (m === "january") {
      months.push(0);
    }

    if (m === "february") {
      months.push(1);
    }

    if (m === "march") {
      months.push(2);
    }

    if (m === "april") {
      months.push(3);
    }
    if (m === "may") {
      months.push(4);
    }
    if (m === "june") {
      months.push(5);
    }
    if (m === "july") {
      months.push(6);
    }
    if (m === "august") {
      months.push(7);
    }

    if (m === "september") {
      months.push(8);
    }

    if (m === "october") {
      months.push(9);
    }

    if (m === "november") {
      months.push(10);
    }
    if (m === "december") {
      months.push(11);
    }
  });
  return months;
}
