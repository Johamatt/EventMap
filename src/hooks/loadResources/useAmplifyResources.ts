import { Auth } from "aws-amplify";
import { store } from "../../Store";
import { CognitoUserSession } from "amazon-cognito-identity-js";
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
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
  } finally {
    return true;
  }
}

