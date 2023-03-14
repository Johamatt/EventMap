import axios from "axios";
import Constants from "expo-constants";

export const fetchTicketMasterToday = async (
  page: number,
  size: number,
  datetimeISOstring: string,
  category?: string
): Promise<Array<TicketMasterEvent>> => {
  const date = new Date();
  const isoDateString = datetimeISOstring.slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end

  try {
    const res = await axios.get(
      //@ts-ignore
      `https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&size=${size}&classificationName=${category}&startDateTime=${isoDateString}&sort=date,asc&city=Helsinki,Espoo,Vantaa&apikey=${Constants.expoConfig.extra.TICKETMASTER_KEY}`,
      {
        headers: {
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
        },
      }
    );
    const data: Array<TicketMasterEvent> = res.data._embedded.events;
    const dataWithSource = data.map((event) => ({
      ...event,
      __typename: "ticketmaster",
    }));
    return dataWithSource;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const fetchEvent = async (
  id: string
): Promise<TicketMasterEvent | undefined> => {
  try {
    const res = await axios.get(
      //@ts-ignore
      `https://app.ticketmaster.com/discovery/v2/events.json?id=${id}&size=1&apikey=${Constants.expoConfig.extra.TICKETMASTER_KEY}`,
      {
        headers: {
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res);

    const event: TicketMasterEvent = res.data._embedded.events[0];

    // for (let key in event) {
    //   if (typeof event[key] === "object" && event[key] !== null) {
    //     event[key].source = "Eventmaster";
    //   }
    // }

    return event;
  } catch (error) {
    console.log(error);
  }
};
