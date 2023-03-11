import { API, graphqlOperation } from "aws-amplify";
import { CATEGORY, GetEventQuery, ListEventsQuery } from "../../../API";
import { GraphQLResult, GraphQLOptions } from "@aws-amplify/api-graphql";
import { EventsbyStartingDateTimeCustomQuery } from "./QueriesCustom/CustomEventQueries";

export const listEventsCustom = async (
  nextToken: string | undefined,
  dateStart: string,
  dateEnd: string,
  authMode: GraphQLOptions["authMode"],
  limit: number,
  category?: CATEGORY
) => {
  try {
    const filter = category ? { category: { contains: category } } : undefined;
    const eventsData = await API.graphql({
      ...graphqlOperation(EventsbyStartingDateTimeCustomQuery, {
        sortDirection: "ASC",
        type: "Event",
        startingDateTime: {
          between: [dateStart, dateEnd],
        },
        filter,
        authMode: authMode,
        nextToken: nextToken,
        limit: limit,
      }),
    });
    return eventsData as GraphQLResult<ListEventsQuery>;
  } catch (err) {
    console.log(err);
  }
};

export const getEventCustom = async (id: string, authMode: string) => {
  try {
    const event = await API.graphql({
      ...graphqlOperation(getEventCustom, {
        id: id,
        authMode: authMode,
      }),
    });
    return event as GraphQLResult<GetEventQuery>;
  } catch (err) {
    console.log(err);
  }
};
