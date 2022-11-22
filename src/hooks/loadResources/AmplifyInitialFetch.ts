import { API, Auth, graphqlOperation } from "aws-amplify";
import { store } from "../../Store";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { ListActivitiesQuery } from "../../API";
import {
  listActivitiesList,
  listActivitiesMap,
} from "../../../customQueries";
CognitoUserSession;
export default async function AmplifyInitialFetch() {
  try {
    // let authuser =
    await Auth.currentAuthenticatedUser({
      bypassCache: true,
    }).then((data) =>
      store.dispatch({
        type: "ON_UPDATE_AUTH",
        payload: data.signInUserSession,
      })
    );
    const activitiesDataList = (await API.graphql(
      graphqlOperation(listActivitiesList, { limit: 20 })
    )) as {
      data: ListActivitiesQuery;
    };

    const listActivitiesDataMap = (await API.graphql(
      graphqlOperation(listActivitiesMap, { limit: 1000 })
    )) as {
      data: ListActivitiesQuery;
    };

    store.dispatch({
      type: "ON_UPDATE_ACTIVITIESLIST",
      payload: {
        activitiesList: activitiesDataList.data.listActivities?.items,
        nextToken: activitiesDataList.data.listActivities?.nextToken,
      },
    });

    store.dispatch({
      type: "ON_UPDATE_ACTIVITIESMAP",
      payload: {
        activitiesMap: listActivitiesDataMap.data.listActivities?.items,
        nextToken: listActivitiesDataMap.data.listActivities?.nextToken,
      },
    });
  } catch (e) {
    console.warn(e);
  } finally {
    return true;
  }
}
