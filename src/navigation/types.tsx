import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Event as LiveEvent } from "../API";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  UserRoot: NavigatorScreenParams<RootTabParamList> | undefined;
  Splash: undefined;
  Modal: undefined;
  LandingLocationScreen: undefined;
  PreferenceScreen: undefined;
  UserProfileScreen: undefined;
  EventScreen: { liveEvent: LiveEvent };
  ActivityModal: { id: string };
  MapScreen2: undefined;
  EventListTab: undefined;
  ActivityListTab: undefined;
  UserNewPasswordScreen: { username: string };
  UserRegisterScreen: undefined;
  UserLoginScreen: undefined;
  UserConfirmEmailScreen: { username: string; password: string } | undefined;
  UserForgotPasswordScreen: undefined;
  UserLandingScreen: undefined;
};

export type RootTabParamList = {
  Map: undefined;
  Favourites: undefined;
  HomeScreen: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
