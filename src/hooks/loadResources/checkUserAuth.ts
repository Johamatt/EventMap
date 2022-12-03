import { Auth } from "aws-amplify";
import { store } from "../../Store";
import { CognitoUserSession } from "amazon-cognito-identity-js";
CognitoUserSession;
export default async function CheckUserAuth() {
  try {
    await Auth.currentAuthenticatedUser({
      bypassCache: true,
    }).then((data) =>
      store.dispatch({
        type: "ON_UPDATE_AUTH",
        payload: data.signInUserSession,
      })
    );
  } catch (e) {
    console.warn(e);
  } finally {
    return true;
  }
}
