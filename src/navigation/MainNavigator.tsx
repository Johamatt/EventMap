import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Auth } from "aws-amplify";
import { connect, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { BottomTabNavigator1 } from "./BottomTabNavigator1";
import { AuthNavigator } from "./AuthNavigator";
import { RootState } from "../Store/store";
import { RootStackParamList } from "../types/navigationTypes";
import { AppsyncEventModal } from "../screens/User/modals/AppsyncEventModal";
import { TicketMasterEventModal } from "../screens/User/modals/TicketMasterEventModal";
import { Ionicons } from "@expo/vector-icons";

export const MainNavigation1 = (Stack: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserRoot"
      component={BottomTabNavigator1}
      options={{ headerShown: false }} // Add this line to hide the header for UserRoot
    />
    <Stack.Group
      screenOptions={{
        presentation: "modal",
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="TicketMasterEventModal"
        component={TicketMasterEventModal}
      />
      <Stack.Screen name="AppSyncEventModal" component={AppsyncEventModal} />
    </Stack.Group>
  </Stack.Navigator>
);
