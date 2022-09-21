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
import { AgeGroups } from "./util/data/ageGroups";

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
  LandingPreferenceScreen: undefined;
  Login: undefined;
  UserProfileScreen: undefined;
  EventScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Map: undefined;
  Favourites: undefined;
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

    address: {
      streetAddress: string;
      postalCode?: string;
      locality?: string;
    };
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
