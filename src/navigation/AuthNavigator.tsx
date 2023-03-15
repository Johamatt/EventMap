import { UserConfirmEmailScreen } from "../screens/Authentication/UserConfirmEmailScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/UserForgotPasswordScreen";
import { UserLandingScreen } from "../screens/Authentication/UserLandingScreen";
import UserLoginScreen from "../screens/Authentication/UserLoginScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/UserNewPasswordScreen";
import { UserRegisterScreen } from "../screens/Authentication/UserRegisterScreen";
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
