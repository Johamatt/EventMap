/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Touchable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import {
  // AuthStackParamList,
  RootStackParamList,
  RootTabParamList,
} from "./types";

import SplashScreen from "../screens/SplashScreen";
import LandingLocationScreen from "../screens/User/LandingLocationScreen";

import MapScreen from "../screens/User/BottomNav/MapScreen";
import EventScreen from "../screens/User/EventScreen";
import HomeScreen from "../screens/User/BottomNav/HomeScreen";
import UserLoginScreen from "../screens/Authentication/userAuthentication/UserLoginScreen";
import FavouritesScreen from "../screens/User/BottomNav/FavouritesScreen";
import LandingPreferenceScreen from "../screens/User/LandingPreferenceScreen";
import { UserRegisterScreen } from "../screens/Authentication/userAuthentication/UserRegisterScreen";
import { UserConfirmEmailScreen } from "../screens/Authentication/userAuthentication/UserConfirmEmailScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/userAuthentication/UserNewPasswordScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/userAuthentication/UserForgotPasswordScreen";
import { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import UserProfileScreen from "../screens/User/BottomNav/UserProfileScreen";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_AUTH,
  store,
  UserState,
} from "../Store";
import { connect, Provider } from "react-redux";
import { userReducer } from "../Store/reducers/userReducer";
import { listActivities } from "../graphql/queries";
import { ON_UPDATE_ACTIVITIES } from "../Store/actions/activityAction";
import { ListActivitiesQuery } from "../API";
import { ActivityInfoModal } from "../screens/User/ActivityInfoModal";
// import { Authenticator } from "aws-amplify-react-native";

interface NavigationProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
  ON_UPDATE_AUTH: Function;
  ON_UPDATE_ACTIVITIES: Function;
}

const _Navigation: React.FC<NavigationProps> = (props) => {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);

        store.dispatch({
          type: "ON_UPDATE_AUTH",
          payload: {
            userAuth: authUser,
          },
        });
      } catch (e) {
        setUser(null);
      }
    };
    checkUser();
  }, [props.userReducer.userAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user === null || user === undefined
          ? AuthNavigator()
          : MainNavigation()}
        {/* {MainNavigation()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesReducer: state.ActivitiesReducer,
  userReducer: state.UserReducer,
});

const Navigation = connect(mapToStateProps, {
  ON_UPDATE_AUTH,
  ON_UPDATE_ACTIVITIES,
})(_Navigation);
export default Navigation;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
      <Stack.Screen name="UserRegisterScreen" component={UserRegisterScreen} />
      <Stack.Screen
        name="UserConfirmEmailScreen"
        component={UserConfirmEmailScreen}
      />
      <Stack.Screen
        name="UserNewPasswordScreen"
        component={UserNewPasswordScreen}
      />
      <Stack.Screen
        name="UserForgotPasswordScreen"
        component={UserForgotPasswordScreen}
      />
    </Stack.Group>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: false, //
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.containerBackground,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="UserRoot"
        component={BottomTabNavigator}
        options={{
          title: "EventMap",
          headerRight: () => (
            <View>
              <Ionicons name="filter-sharp" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="LandingLocationScreen"
        component={LandingLocationScreen}
        options={{
          title: "Landing Location",
        }}
      />

      <Stack.Screen
        name="LandingPreferenceScreen"
        component={LandingPreferenceScreen}
        options={{
          headerShown: true,

          title: "",
        }}
      />

      <Stack.Group screenOptions={{ presentation: "modal", headerShown: true }}>
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="ActivityInfoModal" component={ActivityInfoModal} />
      </Stack.Group>
    </Stack.Group>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ focused, color, size }) => {
            const icon = focused ? Colors.light.tint : "black";
            return <Feather name="map" size={24} color={icon} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: false,
          title: "Favourites",

          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="heart" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
