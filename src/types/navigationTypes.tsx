import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}

export type RootStackParamList = {
  UserRoot: NavigatorScreenParams<RootTabParamList> | undefined;
  Splash: undefined;
  UserProfileScreen: undefined;
  UserNewPasswordScreen: { username: string };
  UserRegisterScreen: undefined;
  UserLoginScreen: undefined;
  UserConfirmEmailScreen?: { username: string } | undefined;
  UserForgotPasswordScreen: undefined;
  UserLandingScreen: undefined;

  UserPreferenceModal: undefined;
  TicketMasterEventModal: { id: string };
  AppSyncEventModal: { id: string };
  LinkedEventModal: { event: any };
};

export type RootTabParamList = {
  Map: undefined;
  ShopScreen: undefined;
  HomeScreen: undefined;
  Profile: undefined;
};

export type RootDrawerParamList = {
  Main: NavigatorScreenParams<RootStackParamList>;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    DrawerScreenProps<RootDrawerParamList>
  >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen> &
    DrawerScreenProps<RootDrawerParamList>;
