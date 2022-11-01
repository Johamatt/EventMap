import { FontAwesome } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ApplicationState, ON_UPDATE_AUTH, UserState } from "../../Store";

export default async function useAmplifyResources() {
  try {
    let authuser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    ON_UPDATE_AUTH(authuser);
  } catch (e) {
    // We might want to provide this error information to an error reporting service
    console.warn(e);
  } finally {
    return true;
  }
}
