import axios from "axios";

export const fetchLinkedEvents = async (
  page: number,
  size: number,
  endTimeISOString: string,
  startTimeISOstring: string,
  category?: string
): Promise<Array<LinkedEvent>> => {
  const startDateString = startTimeISOstring.slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end
  const endDateString = endTimeISOString.slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end
  const url = category
    ? `https://api.hel.fi/linkedevents/v1/event?start=${startDateString}&end=${endDateString}&page=${page}&page_size=${size}&keyword=${category}&sort=start_time&max_duration=172800`
    : `https://api.hel.fi/linkedevents/v1/event?start=${startDateString}&end=${endDateString}&page=${page}&page_size=${size}&sort=start_time&max_duration=172800`;

  try {
    const res = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "GET",
        "Content-Type": "application/json",
      },
    });
    const data: Array<LinkedEvent> = res.data.data;
    const dataWithSource = data
      .filter((event: LinkedEvent) => {
        if (!event.start_time || !event.end_time) {
          return false;
        }

        // Skip events where the difference is greater than 1 month // APPROX milliseconds
        const startTime = new Date(event.start_time).getTime();
        const endTime = new Date(event.end_time).getTime();
        return endTime - startTime <= 2629746000;
      })
      .map((event) => ({
        ...event,
        __typename: "linkedEvent",
      }));

    return dataWithSource;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const fetchLinkedEventsWithLocation = async (
  page: number,
  size: number,
  endTimeISOString: string,
  startTimeISOstring: string,
  category?: string
): Promise<Array<LinkedEvent>> => {
  const startDateString = startTimeISOstring.slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end
  const endDateString = endTimeISOString.slice(0, -5) + "Z"; // Removes the last 5 characters (the dot and 4 digits) and adds the 'Z' at the end

  const url = category
    ? `https://api.hel.fi/linkedevents/v1/event?start=${startDateString}&end=${endDateString}&page=${page}&page_size=${size}&keyword=${category}&sort=start_time&max_duration=172800&include=location`
    : `https://api.hel.fi/linkedevents/v1/event?start=${startDateString}&end=${endDateString}&page=${page}&page_size=${size}&sort=start_time&max_duration=172800&include=location`;

  console.log(url);
  try {
    const { data } = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      },
    });
    const linkedEvents: LinkedEvent[] = data.data;
    const dataWithSource = linkedEvents
      .filter((event) => {
        if (!event.start_time || !event.end_time) {
          return false;
        }
        // Skip events where the difference is greater than 1 month // APPROX milliseconds
        const startTime = new Date(event.start_time).getTime();
        const endTime = new Date(event.end_time).getTime();
        return endTime - startTime <= 2629746000;
      })
      .map((event) => ({
        ...event,
        __typename: "linkedEvent",
      }));
    return dataWithSource;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export interface LinkedEvent {
  __typename: string;
  id: string;
  location: {
    "@id": string;
  };
  keywords: {
    "@id": string;
  }[];
  super_event: null;
  event_status: string;
  type_id: string;
  external_links: never[];
  offers: {
    is_free: boolean;
    info_url: {
      fi: string;
    };
    price: {
      fi: string;
    };
  }[];
  data_source: string;
  description: { fi: string; en: string };
  publisher: string;
  sub_events: never[];
  images: {
    id: number;
    license: string;
    created_time: string;
    last_modified_time: string;
    name: string;
    url: string;
    cropping: string;
    photographer_name: null;
    alt_text: null;
    data_source: string;
    publisher: string;
    "@id": string;
    "@context": string;
    "@type": string;
  }[];

  name: { fi: string; en: string };
  videos: never[];
  in_language: never[];
  audience: string[];
  created_time: string;
  last_modified_time: string;
  date_published: null;
  start_time: string | null;
  end_time: string | null;
  custom_data: null;
  audience_min_age: null;
  audience_max_age: null;
  super_event_type: null;
  deleted: boolean;
  maximum_attendee_capacity: null;
  remaining_attendee_capacity: null;
  minimum_attendee_capacity: null;
  enrolment_start_time: null;
  enrolment_end_time: null;
  local: boolean;
  search_vector_fi: string;
}
