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
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Touchable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";

import TabTwoScreen from "../screens/TabTwoScreen";
import { RootStackParamList, RootTabParamList } from "../types";

import SplashScreen from "../screens/SplashScreen";
import LandingLocationScreen from "../screens/userStack/LandingLocationScreen";
import LandingPreferenceScreen from "../screens/userStack/LandingPreferenceScreen";
import MapScreen from "../screens/MapScreen";
import EventScreen from "../screens/userStack/EventScreen";
import HomeScreen from "../screens/userStack/HomeScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, //
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },

        headerTintColor: Colors.light.background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* new Stack */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{ headerShown: true, headerTitle: "" }}
      />

      {/* new Stack */}
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
          title: "Landing Preference",
        }}
      />
      {/* <Stack.Screen
        name="LandingLocationScreen"
        component={LandingScreen}
        options={{
          title: "Landing Location",
        }}
      /> */}

      {/* new Stack ends */}

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
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarActiveBackgroundColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color="black" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Feather name="map" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={TabTwoScreen}
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color="black" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
