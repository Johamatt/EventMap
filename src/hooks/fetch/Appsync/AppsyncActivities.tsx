import { API, graphqlOperation } from "aws-amplify";
import { GetActivityQuery, ListActivitiesQuery } from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import { listActivitiesCustomQuery } from "./QueriesCustom/CustomActivityQueries";
import { GRAPHQL_AUTH_MODE, GraphQLQuery } from "@aws-amplify/api";
export const listActivitiesCustom = async (
  nextToken: any,
  authMode: GraphQLOptions["authMode"],
  limit: number
) => {
  try {
    const eventsData = await API.graphql<GraphQLQuery<ListActivitiesQuery>>({
      query: listActivitiesCustomQuery,
      variables: {
        nextToken: nextToken,
        limit: limit,
      },
      authMode: authMode,
    });
    return eventsData as GraphQLResult<ListActivitiesQuery>;
  } catch (err) {
    console.log(err);
  }
};
