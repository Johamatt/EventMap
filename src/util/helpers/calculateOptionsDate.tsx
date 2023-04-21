import moment from "moment";
import { userOptionsAsyncStorage } from "../../types/storageType";

export function calculateOptionsDate(
  userOptions: userOptionsAsyncStorage | undefined | "" | null
) {
  if (
    !userOptions ||
    !userOptions.selectedDate ||
    userOptions.selectedDate === "All"
  ) {
    const dateTimeNow = moment();
    const dateTimeNowPlus2Year = moment().add(2, "years");
    return {
      dateFrom: dateTimeNow.toISOString(),
      dateTo: dateTimeNowPlus2Year.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Today") {
    const today = moment();
    const endOfDayToday = today.clone().endOf("day");
    return {
      dateFrom: today.toISOString(),
      dateTo: endOfDayToday.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Tomorrow") {
    const tomorrow = moment().add(1, "days"); // set to tomorrow
    const startOfDayTomorrow = tomorrow.clone().startOf("day");
    const endOfDayTomorrow = tomorrow.clone().endOf("day");
    return {
      dateFrom: startOfDayTomorrow.toISOString(),
      dateTo: endOfDayTomorrow.toISOString(),
    };
  }

  if (userOptions.selectedDate === "This week") {
    const today = moment();
    const endOfWeek = moment().endOf("week").add(1, "day");

    return {
      dateFrom: today.toISOString(),
      dateTo: endOfWeek.toISOString(),
    };
  }

  if (userOptions.selectedDate === "This weekend") {
    const friday4pm = moment()
      .day(5)
      .hour(16)
      .minute(0)
      .second(0)
      .millisecond(0); // Get Friday at 16:00
    const startOfWeekend = friday4pm.clone().startOf("day"); // Start of weekend is start of day on Friday
    const endOfWeekend = friday4pm.clone().add(2, "days").endOf("day"); // End of weekend is end of day on Sunday

    return {
      dateFrom: startOfWeekend.toISOString(),
      dateTo: endOfWeekend.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Next week") {
    const today = new Date();
    const nextMonday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + ((1 + 7 - today.getDay()) % 7)
    );
    const nextSunday = new Date(
      nextMonday.getFullYear(),
      nextMonday.getMonth(),
      nextMonday.getDate() + 6
    );
    return {
      dateFrom: nextMonday.toISOString(),
      dateTo: nextSunday.toISOString(),
    };
  }
}
