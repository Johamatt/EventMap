/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { UserState } from "./src/Store";
import { AgeGroups } from "./src/util/data/ageGroups";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

interface UserLoginScreenProps {
  userReducer: UserState;
  ON_UPDATE_USERLOGIN: Function;
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

export type LiveEvent = {
  id: string;
  name: {
    fi: string;
    en?: string | null;
  };

  source: string;
  infoUrl: string | null;

  description: {
    title: string;
    body: string;
  };

  eventDates: {
    // starting_day: Date;
    // ending_day: Date;
    starting_day: string;
    ending_day: string;
  };

  location: {
    lat: Float;
    lon: Float;

    streetAddress: string;
    postalCode?: string;
    locality?: string;
  };

  tags: Tag[];

  ageGroup: AgeGroups[];

  images?: [
    {
      url: string;
      license_type: number;
      license_name: string;
    }
  ];
  modified_at?: Date;
};

export type User = {
  id: string;
  name: string;
  imageUri?: string;
  attending?: [Event];
};

export type Tag = {
  id: string;
  name: string;
};

export type Event = {
  id: Number;
  name: String;
  source: String;
  infoUrl: String;
  title: String;
  description: String;
  startingDay: Date;
  endingDay: Date;
};

export type Location = {
  lat: Float;
  lon: Float;
  streetAddress: String;
  postalCode: Number;
  id: Number;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  category: [String];
  format: [String];
  tags: [String];
  createdAt: Date;
  updatedAt: Date;
  eventCategoryId: Number;
};

export type Images = {};
