import { UserConfirmEmailScreen } from "../screens/Authentication/userAuthentication/UserConfirmEmailScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/userAuthentication/UserForgotPasswordScreen";
import { UserLandingScreen } from "../screens/Authentication/userAuthentication/UserLandingScreen";
import UserLoginScreen from "../screens/Authentication/userAuthentication/UserLoginScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/userAuthentication/UserNewPasswordScreen";
import { UserRegisterScreen } from "../screens/Authentication/userAuthentication/UserRegisterScreen";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
export const AuthNavigator = (Stack: any) => {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserLandingScreen" component={UserLandingScreen} />
      <Stack.Screen
        name="UserConfirmEmailScreen"
        component={UserConfirmEmailScreen}
      />

      <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
      <Stack.Screen name="UserRegisterScreen" component={UserRegisterScreen} />

      <Stack.Screen
        name="UserForgotPasswordScreen"
        component={UserForgotPasswordScreen}
      />
      <Stack.Screen
        name="UserNewPasswordScreen"
        component={UserNewPasswordScreen}
      />
    </Stack.Group>
  );
};
