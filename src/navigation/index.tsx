import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { AuthNavigator } from "./AuthNavigator";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { useSelector } from "react-redux";
import { AppsyncEventModal } from "../screens/User/modals/AppsyncEventModal";
import { RootState, store } from "../Store/store";
import {
  ON_UPDATE_AUTH,
  ON_UPDATE_AUTHENTICATIONMODE,
} from "../Store/actions/userAction";
import { ApplicationState } from "../Store/reducers";
import { RootStackParamList, RootTabParamList } from "../types/navigationTypes";
import { TicketMasterEventModal } from "../screens/User/modals/TicketMasterEventModal";
import { BottomTabNavigator1 } from "./BottomTabNavigator1";

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

        const AuthenticationMode: GraphQLOptions["authMode"] =
          "AMAZON_COGNITO_USER_POOLS";
        store.dispatch({
          type: "ON_UPDATE_AUTHENTICATIONMODE",
          payload: AuthenticationMode,
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
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="UserRoot"
        component={BottomTabNavigator1(BottomTab)}
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
