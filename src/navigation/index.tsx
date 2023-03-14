import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import { RootStackParamList, RootTabParamList } from "./types";
import MapScreen from "../screens/User/BottomNav/mapscreen/MapScreen";
import HomeScreen from "../screens/User/BottomNav/homescreen/HomescreenTabs/HomeScreen";
import FavouritesScreen from "../screens/User/BottomNav/FavouritesScreen";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import UserProfileScreen from "../screens/User/BottomNav/UserProfileScreen";
import {
  ApplicationState,
  ON_UPDATE_AUTH,
  ON_UPDATE_AUTHENTICATIONMODE,
  RootState,
} from "../Store";
import { connect } from "react-redux";
import { AuthNavigator } from "./AuthNavigator";
import { TicketMasterEventModal } from "../screens/User/modals/EventModal";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { useSelector } from "react-redux";
import { AppsyncEventModal } from "../screens/User/modals/AppsyncEventModal";

interface NavigationProps {
  userAuth: any;
  ON_UPDATE_AUTH: Function;
  ON_UPDATE_AUTHENTICATIONMODE: Function;
  authmode: GraphQLOptions["authMode"];
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
      } catch (e) {
        setUser(null);
      }
    };
    checkUser();
  }, [props.userAuth, props.authmode]);

  const authmode = useSelector(
    (state: RootState) => state.UserReducer.AuthenticationMode
  );

  if (authmode !== undefined) {
    return (
      <NavigationContainer>
        <Stack.Navigator>{MainNavigation()}</Stack.Navigator>
      </NavigationContainer>
    );
  }

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
  userAuth: state.UserReducer.userAuth,
  authMode: state.UserReducer.AuthenticationMode,
});

const Navigation = connect(mapToStateProps, {
  ON_UPDATE_AUTH,
  ON_UPDATE_AUTHENTICATIONMODE,
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
          backgroundColor: Colors.light.primary,
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

      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "",
        }}
      >
        <Stack.Screen
          name="TicketMasterEventModal"
          component={TicketMasterEventModal}
        />

        <Stack.Screen name="AppSyncEventModal" component={AppsyncEventModal} />
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
        tabBarStyle: {
          backgroundColor: "rgba(34,36,40,1)",
          height: 50,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.primary : "white";
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen} // MapScreen
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ focused }) => {
            const icon = focused ? Colors.light.primary : "white";
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
            const color = focused ? Colors.light.primary : "white";
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
            const color = focused ? Colors.light.primary : "white";
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
