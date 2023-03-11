import { API, graphqlOperation } from "aws-amplify";
import { GetActivityQuery, ListActivitiesQuery } from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
export const listActivitiesCustom = async (
  nextToken: any,
  authMode: GraphQLOptions["authMode"],
  day: number,
  month: number,
  limit: number
) => {
  let filter = {
    and: [
      { availableDays: { attributeExists: day } },
      { availableMonths: { attributeExists: month } },
    ],
  };

  const activitiesData = await API.graphql({
    ...graphqlOperation(listActivitiesCustom, {
      limit: limit,
      nextToken,
      variables: { filter: filter },
    }),
    authMode: authMode,
  });
  return activitiesData as GraphQLResult<ListActivitiesQuery>;
};

export const getActivityCustom = async (id: string, authMode: string) => {
  try {
    const activity = await API.graphql({
      ...graphqlOperation(getActivityCustom, {
        id: id,
        authMode: authMode,
      }),
    });
    return activity as GraphQLResult<GetActivityQuery>;
  } catch (err) {
    console.log(err);
  }
};
