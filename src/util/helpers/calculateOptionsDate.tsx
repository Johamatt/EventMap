import { userOptionsAsyncStorage } from "../../types/storageType";

export function calculateOptionsDate(
  userOptions: userOptionsAsyncStorage | undefined | "" | null
) {
  const dateTimeNowPlus10Year = new Date(
    new Date().setFullYear(new Date().getFullYear() + 10)
  );
  if (
    userOptions === null ||
    userOptions === undefined ||
    userOptions === "" ||
    userOptions.selectedDate === undefined ||
    userOptions.selectedDate === "All"
  ) {
    const dateTimeNow = new Date();
    const dateTimeNowPlus10Year = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    );
    return {
      dateFrom: dateTimeNow.toISOString(),
      dateTo: dateTimeNowPlus10Year.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Today") {
    const dateTimeNow = new Date();
    const endOfDayToday = new Date(
      dateTimeNow.getFullYear(),
      dateTimeNow.getMonth(),
      dateTimeNow.getDate(),
      23,
      59
    );
    return {
      dateFrom: dateTimeNow.toISOString(),
      dateTo: endOfDayToday.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Tomorrow") {
    const dateTimeNow = new Date();
    const tomorrow = new Date(
      dateTimeNow.getFullYear(),
      dateTimeNow.getMonth(),
      dateTimeNow.getDate() + 1
    ); // set to tomorrow
    const startOfDayTomorrow = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      0,
      0
    );
    const endOfDayTomorrow = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      23,
      59
    );
    return {
      dateFrom: startOfDayTomorrow.toISOString(),
      dateTo: endOfDayTomorrow.toISOString(),
    };
  }

  if (userOptions.selectedDate === "This week") {
    const dateTimeNow = new Date();
    const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay())); // Set the date to the last day of the week
    endOfWeek.setHours(23, 59); // Set the time to the end of the day
    return {
      dateFrom: dateTimeNow.toISOString(),
      dateTo: endOfWeek.toISOString(),
    };
  }

  if (userOptions.selectedDate === "This weekend") {
    const today = new Date();

    // Calculate the start of the current weekend (assumes the weekend starts on Friday 18:00)
    const startOfWeekend = new Date(today);
    startOfWeekend.setHours(0, 0, 0, 0);
    const dayOfWeek = startOfWeekend.getDay();
    if (dayOfWeek >= 5) {
      // If today is Friday, Saturday, or Sunday, set the start of the weekend to the previous Friday
      startOfWeekend.setDate(startOfWeekend.getDate() - (dayOfWeek - 5));
    } else {
      // Otherwise, set the start of the weekend to the previous Friday
      startOfWeekend.setDate(startOfWeekend.getDate() - dayOfWeek - 2);
    }
    startOfWeekend.setHours(18, 0, 0, 0);

    const endOfWeekend = new Date(startOfWeekend);
    endOfWeekend.setDate(startOfWeekend.getDate() + 2);
    endOfWeekend.setHours(23, 59);

    return {
      dateFrom: startOfWeekend.toISOString(),
      dateTo: endOfWeekend.toISOString(),
    };
  }

  if (userOptions.selectedDate === "Next week") {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() + (8 - startOfWeek.getDay())); // Set the date to the first day of next week
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // Set the date to the last day of next week
    endOfWeek.setHours(23, 59); // Set the time to the end of the day
    return {
      dateFrom: startOfWeek.toISOString(),
      dateTo: endOfWeek.toISOString(),
    };
  }
  const dateTimeNow = new Date();
  return {
    dateFrom: dateTimeNow.toISOString(),
    dateTo: dateTimeNowPlus10Year.toISOString(),
  };
}
