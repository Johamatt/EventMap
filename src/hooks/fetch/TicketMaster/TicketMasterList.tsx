import axios from "axios";
import Constants from "expo-constants";

export const fetchTicketMasterToday = async (
  page: number,
  size: number,
  category?: string
) => {
  const date = new Date();
  const isoDateString = date.toISOString().slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end

  if (category)
    try {
      const res = await axios.get(
        //@ts-ignore
        `https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&size=${size}&startDateTime=${isoDateString}&classificationName=${category}&sort=date,asc&city=Helsinki,Espoo,Vantaa&apikey=${Constants.expoConfig.extra.TICKETMASTER_KEY}`,
        {
          headers: {
            "Access-Control-Allow-Methods": "GET",
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data._embedded.events;
      return data;
    } catch (error) {
      console.log(error);
    }

  try {
    const res = await axios.get(
      //@ts-ignore
      `https://app.ticketmaster.com/discovery/v2/events.json?page=${page}&size=${size}&startDateTime=${isoDateString}&sort=date,asc&city=Helsinki,Espoo,Vantaa&apikey=${Constants.expoConfig.extra.TICKETMASTER_KEY}`,
      {
        headers: {
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data._embedded.events;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEvent = async (id: string) => {
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
    const event = res.data._embedded.events[0];
    return event;
  } catch (error) {
    console.log(error);
  }
};
