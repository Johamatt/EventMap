import { API, graphqlOperation } from "aws-amplify";
import { ListActivitiesQuery } from "../../../API";
import { listActivities } from "../../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import axios from "axios";

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
