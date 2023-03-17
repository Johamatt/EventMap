import Colors from "../constants/Colors";
import { UserConfirmEmailScreen } from "../screens/Authentication/UserConfirmEmailScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/UserForgotPasswordScreen";
import { UserLandingScreen } from "../screens/Authentication/UserLandingScreen";
import UserLoginScreen from "../screens/Authentication/UserLoginScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/UserNewPasswordScreen";
import { UserRegisterScreen } from "../screens/Authentication/UserRegisterScreen";

export const AuthNavigator = (Stack: any) => {
  return (
    <Stack.Group>
      <Stack.Screen
        name="UserLandingScreen"
        component={UserLandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserConfirmEmailScreen"
        component={UserConfirmEmailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.light.headerBackground,
          },
          headerTintColor: "#ffffff",
        }}
      />

      <Stack.Screen
        name="UserLoginScreen"
        component={UserLoginScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="UserRegisterScreen"
        component={UserRegisterScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.light.headerBackground,
          },
          headerTintColor: "#ffffff",
        }}
      />

      <Stack.Screen
        name="UserForgotPasswordScreen"
        component={UserForgotPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.light.headerBackground,
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="UserNewPasswordScreen"
        component={UserNewPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.light.headerBackground,
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Group>
  );
};
