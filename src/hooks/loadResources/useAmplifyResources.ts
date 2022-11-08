import { API, Auth, graphqlOperation } from "aws-amplify";
import { store } from "../../Store";
import { CognitoUserSession } from "amazon-cognito-identity-js";
import { getActivity, listActivities } from "../../graphql/queries";
import { ListActivitiesQuery } from "../../API";
CognitoUserSession;
export default async function useAmplifyResources() {
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

    const activitiesData = (await API.graphql(
      graphqlOperation(listActivities, { limit: 1000 })
    )) as {
      data: ListActivitiesQuery;
    };

    store.dispatch({
      type: "ON_UPDATE_ACTIVITIES",
      payload: activitiesData.data.listActivities?.items,
    });
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
  } finally {
    return true;
  }
}
