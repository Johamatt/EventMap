import { API, graphqlOperation } from "aws-amplify";
import { ListActivitiesQuery } from "../../API";
import { listActivities } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

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

// const activitiesData = await API.graphql({
//     ...graphqlOperation(listActivities, { input: todo }),
//     authMode: "AWS_IAM",
//   }); return activitiesData as GraphQLResult<ListActivitiesQuery>;

//   One of the reasons to use graphqlOperation is in the
//    case your method listMessages has any parameters you could pass
//     those in the call of graphqlOperation(listMessages, {...params})



