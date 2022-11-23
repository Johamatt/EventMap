import { Company, Location, OpenDays } from "../../../API";

export function parseOpendays(data: any) {
  let days: Array<number> = [];

  //@ts-ignore
  let opendays: OpenDays[] = Object.entries(data).map(([key, value]) => {
    let fromvalue =
      value?.from !== null
        ? value?.from.split("+")[0].split(":").slice(0, -1).join(":")
        : null;

    let tovalue =
      value?.to !== null
        ? value?.to.split("+")[0].split(":").slice(0, -1).join(":")
        : null;

    let day: number;

    if (key === "sunday") {
      days.push(0);
      day = 0;
    }
    if (key === "monday") {
      days.push(1);
      day = 1;
    }
    if (key === "tuesday") {
      days.push(2);
      day = 2;
    }
    if (key === "wednesday") {
      days.push(3);
      day = 3;
    }
    if (key === "thursday") {
      days.push(4);
      day = 4;
    }
    if (key === "friday") {
      days.push(5);
      day = 5;
    }
    if (key === "saturday") {
      days.push(6);
      day = 6;
    }

    return {
      //@ts-ignore
      day: day,
      timeFrom: fromvalue,
      timeTo: tovalue,
    };
  });

  [opendays[1], opendays[3]] = [opendays[3], opendays[1]];
  [opendays[2], opendays[3]] = [opendays[3], opendays[2]];
  [opendays[4], opendays[5]] = [opendays[5], opendays[4]];

  return { opendays: opendays, days: days };
}
