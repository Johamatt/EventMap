import { API, graphqlOperation } from "aws-amplify";
import { ListActivitiesQuery } from "../../API";
import { listActivities } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import axios from "axios";
import { TICKETMASTER_KEY } from "../../constants/keys/TICKETMASTER_KEY";

export const fetchGuestActivitiesList = async (nextToken: any) => {
  let day = new Date().getDay();
  let month = new Date().getMonth();

  let filter = {
    and: [
      { availableDays: { attributeExists: day } },
      { availableMonths: { attributeExists: month } },
    ],
  };

  // https://github.com/aws/aws-appsync-community/issues/214

  const activitiesData = await API.graphql({
    ...graphqlOperation(listActivities, {
      limit: 8,
      nextToken,
      variables: { filter: filter },
    }),
    authMode: "AWS_IAM",
  });
  return activitiesData as GraphQLResult<ListActivitiesQuery>;
};

export const fetchGuestActivitiesMap = async (nextToken: any) => {
  let day = new Date().getDay();
  let month = new Date().getMonth();

  let filter = {
    and: [
      { availableDays: { attributeExists: day } },
      { availableMonths: { attributeExists: month } },
    ],
  };

  // https://github.com/aws/aws-appsync-community/issues/214

  const activitiesData = await API.graphql({
    ...graphqlOperation(listActivities, {
      limit: 8, // change later
      variables: { filter: filter },
    }),
    authMode: "AWS_IAM",
  });
  return activitiesData as GraphQLResult<ListActivitiesQuery>;
};

export const fetchPublicEventsList = async (page: number) => {
  try {
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?city=[helsinki,vantaa,espoo]&page=${page}&size=20&sort=date,asc&apikey=${TICKETMASTER_KEY}`,
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

// export const fetchPublicEventsList = async (page: number) => {
//   try {
//     const res = await axios.get(
//       `api.hel.fi/linkedevents/v1/event/?start=now&page=${page}`,
//       {
//         headers: {
//           "Access-Control-Allow-Methods": "GET",
//           "Content-Type": "*",
//         },
//       }
//     );

//     const data = res.data;

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

///

export const fetchPublicEventsMap = async () => {
  try {
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?city=[helsinki,vantaa,espoo]&size=100&sort=date,asc&apikey=${TICKETMASTER_KEY}`,
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
