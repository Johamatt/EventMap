import { API, graphqlOperation } from "aws-amplify";
import { listActivities } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { ListActivitiesQuery } from "../../API";

export const fetchUserActivitiesList = async (nextToken: any) => {
  let day = new Date().getDay();
  let month = new Date().getMonth();

  let filter = {
    and: [
      { availableDays: { attributeExists: day } },
      { availableMonths: { attributeExists: month } },
    ],
  };
  try {
    const activitiesData = (await API.graphql(
      graphqlOperation(listActivities, {
        limit: 8,
        nextToken,
        variables: { filter: filter },
      })
    )) as GraphQLResult<ListActivitiesQuery>;
    return activitiesData as GraphQLResult<ListActivitiesQuery>;
  } catch (error) {
    console.log(error);
  }
};

// authMode: "AMAZON_COGNITO_USER_POOLS",

export const fetchUserActivitiesMap = async (nextToken: any) => {
  let day = new Date().getDay();
  let month = new Date().getMonth();

  let filter = {
    and: [
      { availableDays: { attributeExists: day } },
      { availableMonths: { attributeExists: month } },
    ],
  };
  try {
    const activitiesData = (await API.graphql(
      graphqlOperation(listActivities, {
        limit: 8,
        nextToken,
        variables: { filter: filter },
      })
    )) as GraphQLResult<ListActivitiesQuery>;
    return activitiesData as GraphQLResult<ListActivitiesQuery>;
  } catch (error) {
    console.log(error);
  }
};
