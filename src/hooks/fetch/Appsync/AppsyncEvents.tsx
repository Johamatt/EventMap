import { API } from "aws-amplify";
import {
  ByStartingDateTimeQuery,
  CATEGORY,
  GetEventQuery,
  ListEventsQuery,
  Event,
} from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import {
  EventsbyStartingDateTimeCustomQuery,
  getEventCustomQuery,
} from "./QueriesCustom/CustomEventQueries";
import { GraphQLQuery } from "@aws-amplify/api";

export const listEventsCustom = async (
  token: string | undefined,
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
    const eventsData = await API.graphql<GraphQLQuery<ByStartingDateTimeQuery>>(
      {
        query: EventsbyStartingDateTimeCustomQuery,
        variables: {
          sortDirection: "ASC",
          type: "Event",
          startingDateTime: {
            between: [dateStart, dateEnd],
          },
          filter,
          nextToken: token,
          limit: limit,
        },
        authMode: authMode,
      }
    );
    //@ts-ignore
    const { items, nextToken } = eventsData.data.byStartingDateTime;
    // Add source "AppsyncEvent" to every item
    const itemsWithSource = items.map((item: Event) => ({
      ...item,
      __typename: "AppsyncEvent",
    }));

    return { items: itemsWithSource, nextToken };
  } catch (err) {
    console.log(err);
  }
};

export const getEventCustom = async (
  id: string,
  authMode: GraphQLOptions["authMode"]
) => {
  try {
    const event = await API.graphql<GraphQLQuery<GetEventQuery>>({
      query: getEventCustomQuery,
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
