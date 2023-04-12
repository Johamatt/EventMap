import axios from "axios";
import Constants from "expo-constants";
import { TicketMasterEvent } from "../../../types/TicketMasterType";

export const fetchTicketMaster = async (
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

    if (!res.data._embedded.events) {
      return new Array<TicketMasterEvent>();
    }

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

export const fetchTicketMasterEvent = async (
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

    const event: TicketMasterEvent = res.data._embedded.events[0];

    return event;
  } catch (error) {
    console.log(error);
  }
};
