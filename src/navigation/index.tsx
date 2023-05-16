import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { AuthNavigator } from "./AuthNavigator";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { AppsyncEventModal } from "../screens/User/modals/AppsyncEventModal";
import { store } from "../Store/store";

import { ApplicationState } from "../Store/reducers";
import { RootStackParamList, RootTabParamList } from "../types/navigationTypes";
import { TicketMasterEventModal } from "../screens/User/modals/TicketMasterEventModal";
import { BottomTabNavigator } from "./BottomTabNavigator";

import Colors from "../constants/Colors";
import UserPreferenceModal from "../screens/User/modals/UserPreferenceModal";
import React from "react";
import { LinkedEventModal } from "../screens/User/modals/LinkedEventModal";

interface NavigationProps {
  authMode: GraphQLOptions["authMode"];
}

const _Navigation: React.FC<NavigationProps> = ({ authMode }) => {
  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser({ bypassCache: true });

        store.dispatch({
          type: "ON_UPDATE_AUTH",
          payload: user,
        });
        store.dispatch({
          type: "ON_UPDATE_AUTHENTICATIONMODE",
          payload: "AMAZON_COGNITO_USER_POOLS",
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, [authMode]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authMode === undefined ? AuthNavigator(Stack) : MainNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authMode: state.UserReducer.AuthenticationMode,
});

const Navigation = connect(mapToStateProps)(_Navigation);
export default Navigation;

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const MainNavigation = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserRoot" component={BottomTabNavigator(BottomTab)} />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.light.headerBackground,
          },
          headerTintColor: "#ffffff",
        }}
      >
        <Stack.Screen
          name="TicketMasterEventModal"
          component={TicketMasterEventModal}
        />
        <Stack.Screen name="AppSyncEventModal" component={AppsyncEventModal} />

        <Stack.Screen
          name="UserPreferenceModal"
          component={UserPreferenceModal}
        />

        <Stack.Screen name="LinkedEventModal" component={LinkedEventModal} />
      </Stack.Group>
    </Stack.Group>
  );
};
