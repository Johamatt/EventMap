import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import CustomInput from "../../../components/Inputs/CustomInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";
import Layout from "../../../constants/Layout";
import { Auth } from "aws-amplify";
import useColorScheme from "../../../hooks/useColorScheme";
import { ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import Navigation from "../../../navigation";
import { Button } from "@rneui/themed";

interface UserLoginScreenProps {
  userReducer: UserState;
}

const _UserLoginScreen: React.FC<UserLoginScreenProps> = (props) => {
  console.log(props);

  const userReducer = props.userReducer;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  console.log(props);

  const onSignInPressed = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      // const signIn = await Auth.signIn(username, password);
      // ON_UPDATE_USERLOGIN(signIn);

      await Auth.signIn({ username: username, password: password });
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }

    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("UserForgotPasswordScreen");
  };

  const onSignUpPress = () => {
    navigation.navigate("UserRegisterScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <Button
          title={loading ? "Loading..." : "Sign In"}
          onPress={onSignInPressed}
        />
        <Button title="Forgot password?" onPress={onForgotPasswordPressed} />

        <Button
          title="Don't have an account? Create one"
          onPress={onSignUpPress}
        />
      </View>
    </ScrollView>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const UserLoginScreen = connect(mapToStateProps, {})(_UserLoginScreen);

export default UserLoginScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: Layout.window.height * 0.2,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});
