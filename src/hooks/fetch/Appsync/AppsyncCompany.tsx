import { API, graphqlOperation } from "aws-amplify";
import { GetCompanyQuery } from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import { getCompanyCustomQuery } from "./QueriesCustom/CustomCompanyQueries";
import { GRAPHQL_AUTH_MODE, GraphQLQuery } from "@aws-amplify/api";

export const getCompanyCustom = async (
  id: string,
  authMode: GraphQLOptions["authMode"]
) => {
  try {
    const company = await API.graphql<GraphQLQuery<GetCompanyQuery>>({
      query: getCompanyCustomQuery,
      variables: {
        id: id,
      },
      authMode: authMode,
    });
    return company as GraphQLResult<GetCompanyQuery>;
  } catch (err) {
    console.log(err);
  }
};
