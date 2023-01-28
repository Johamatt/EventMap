import axios from "axios";

export const fetchEventsTodayList = async (page: number) => {
  const events = [];

  const currentDate = new Date();
  currentDate.setUTCHours(23, 58, 99);
  console.log(currentDate);

  //   while (true) {
  try {
    const res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?start=today&end=today&page=${page}&page_size=20&sort=+end_time`,
      {
        headers: {
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.data.data;

    events.push(...data);
    page++;
  } catch (error) {
    console.log(error);
  }

  //   }
  return events;
};
