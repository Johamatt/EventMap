import axios from "axios";

export const fetchEventsTodayMap = async (page: number) => {
  const events = [];

  //   while (true) {
  try {
    const res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?start=now&end=today&page=${page}&page_size=100`,
      {
        headers: {
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data.data;

    console.log(Array.isArray(data));

    events.push(...data);
    page++;
  } catch (error) {
    console.log(error);
  }

  //   }
  return events;
};
