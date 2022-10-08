import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../../components/Inputs/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import SocialSignInButtons from "../../../components/Buttons/SocialSignInButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import Layout from "../../../constants/Layout";

export const UserLogin: React.FC = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate("UserRoot"); //
  };

  const onForgotPasswordPressed = () => {
    //   navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    //   navigation.navigate("SignUp");
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
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

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
