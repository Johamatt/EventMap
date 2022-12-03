import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import { RootStackParamList, RootTabParamList } from "./types";
import LandingLocationScreen from "../screens/User/LandingLocationScreen";
import MapScreen from "../screens/User/BottomNav/MapScreen";
import EventScreen from "../screens/User/EventScreen";
import HomeScreen from "../screens/User/BottomNav/HomeScreen";
import FavouritesScreen from "../screens/User/BottomNav/FavouritesScreen";
import LandingPreferenceScreen from "../screens/User/PreferenceScreen";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import UserProfileScreen from "../screens/User/BottomNav/UserProfileScreen";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_AUTH,
  store,
  UserState,
} from "../Store";
import { connect } from "react-redux";
import { ActivityInfoModal } from "../screens/User/ActivityInfoModal";
import { AuthNavigator } from "./AuthNavigator";
import SplashScreen from "../screens/SplashScreen";
import PreferenceScreen from "../screens/User/PreferenceScreen";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
interface NavigationProps {
  userReducer: CognitoUserInterface | undefined;
  activitiesReducer: ActivitiesState;
  ON_UPDATE_AUTH: Function;
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
  }, [props.userReducer]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user === null || user === undefined
          ? AuthNavigator(Stack)
          : MainNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesReducer: state.ActivitiesReducer,
  userReducer: state.UserReducer.userAuth,
});

const Navigation = connect(mapToStateProps, {
  ON_UPDATE_AUTH,
})(_Navigation);
export default Navigation;

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

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
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{
          headerShown: false,
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

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
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
          tabBarIcon: ({ focused }) => {
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
