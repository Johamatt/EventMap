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
  // UserAuth: NavigatorScreenParams<AuthStackParamList> | undefined;
  Splash: undefined;
  Modal: undefined;
  LandingLocationScreen: undefined;
  LandingPreferenceScreen: undefined;
  UserProfileScreen: undefined;
  EventScreen: { liveEvent: LiveEvent };

  UserNewPasswordScreen: { username: string };
  UserRegisterScreen: undefined;
  UserLoginScreen: undefined;
  UserConfirmEmailScreen: { username: string };
  UserForgotPasswordScreen: undefined;
};

// export type AuthStackParamList = {
//   UserNewPasswordScreen: { username: string };
//   UserRegisterScreen: undefined;
//   UserLoginScreen: UserLoginScreenProps;
//   UserConfirmEmailScreen: { username: string };
//   UserForgotPasswordScreen: undefined;
// };

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
//   NativeStackScreenProps<RootStackParamList, Screen>;

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

// models
