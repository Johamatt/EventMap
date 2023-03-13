import { API } from "aws-amplify";
import { CATEGORY, GetEventQuery, ListEventsQuery } from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import { EventsbyStartingDateTimeCustomQuery } from "./QueriesCustom/CustomEventQueries";
import { GraphQLQuery } from "@aws-amplify/api";

export const listEventsCustom = async (
  nextToken: string | undefined,
  dateStart: string,
  dateEnd: string,
  authMode: GraphQLOptions["authMode"],
  limit: number,
  asCategory?: CATEGORY
) => {
  try {
    const filter = asCategory
      ? { category: { contains: asCategory } }
      : undefined;
    const eventsData = await API.graphql<GraphQLQuery<ListEventsQuery>>({
      query: EventsbyStartingDateTimeCustomQuery,
      variables: {
        sortDirection: "ASC",
        type: "Event",
        startingDateTime: {
          between: [dateStart, dateEnd],
        },
        filter,
        nextToken: nextToken,
        limit: limit,
      },
      authMode: authMode,
    });

    return eventsData as GraphQLResult<ListEventsQuery>;
  } catch (err) {
    console.log(err);
  }
};

export const getEventCustom = async (
  id: string,
  authMode: GraphQLOptions["authMode"]
) => {
  try {
    const event = await API.graphql<GraphQLQuery<ListEventsQuery>>({
      query: EventsbyStartingDateTimeCustomQuery,
      variables: {
        id: id,
      },
      authMode: authMode,
    });
    return event as GraphQLResult<GetEventQuery>;
  } catch (err) {
    console.log(err);
  }
};
