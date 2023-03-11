import { API, graphqlOperation } from "aws-amplify";
import {
  GetCompanyQuery,
} from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import { getCompanyCustomQuery } from "./QueriesCustom/CustomCompanyQueries";

export const getCompanyCustom = async (id: string, authMode: string) => {
  try {
    const company = await API.graphql({
      ...graphqlOperation(getCompanyCustomQuery, {
        id: id,
        authMode: authMode,
      }),
    });
    return company as GraphQLResult<GetCompanyQuery>;
  } catch (err) {
    console.log(err);
  }
};
