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
import CustomButton from "../../../components/Buttons/CustomButton";
import SocialSignInButtons from "../../../components/Buttons/SocialSignInButtons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import Layout from "../../../constants/Layout";
import { Auth } from "aws-amplify";
import useColorScheme from "../../../hooks/useColorScheme";
import {
  ApplicationState,
  ON_UPDATE_AGEGROUP,
  ON_UPDATE_TAGS,
  ON_UPDATE_USERLOGIN,
  UserState,
} from "../../../Store";
import { connect } from "react-redux";
import Navigation from "../../../navigation";

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
        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={onSignInPressed}
        />
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

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const UserLoginScreen = connect(mapToStateProps, {
  ON_UPDATE_USERLOGIN,
})(_UserLoginScreen);

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
