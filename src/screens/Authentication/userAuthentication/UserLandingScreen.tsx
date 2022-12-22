import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";
import Colors from "../../../constants/Colors";
import { Auth } from "aws-amplify";
import { store } from "../../../Store";
import { CognitoUserInterface } from "@aws-amplify/ui-components";

export interface ICredentials {
  accessKeyId: string;
  sessionToken: string;
  secretAccessKey: string;
  identityId: string;
  authenticated: boolean;
  expiration?: Date;
}

export const UserLandingScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onContinueAsGuest = () => {
    store.dispatch({
      type: "ON_UPDATE_GUESTUSER_SESSION",
      payload: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../../assets/logo/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      > */}
      {/* <Text style={styles.headerText}>EventMap</Text> */}
      <Image
        style={styles.image}
        source={require("../../../assets/logo/logo1.png")}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("UserLoginScreen")}
      >
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("UserRegisterScreen")}
      >
        <Text style={styles.loginBtnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => onContinueAsGuest()} // continue as guest
      >
        <Text style={styles.loginBtnText}>Continue as Guest</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 50,
    fontWeight: "900",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    justifyContent: "center",
    alignItems: "center",
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    marginBottom: 40,
    maxWidth: 250,
    maxHeight: 150,
    //

    width: 250,
    height: 150,
  },
  textInputView: {
    backgroundColor: Colors.light.inputBackground,
    borderRadius: 25,
    width: "70%",
    height: 52,
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignSelf: "auto",
  },
  forgotBtnText: {
    height: 20,
    fontSize: 13,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: Colors.light.tint,
  },

  signupBtn: {
    width: "90%",
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#000",
    bottom: 0,
  },

  signupBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  linkText: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },

  signupTextArea: {
    marginTop: 10,

    width: "90%",
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Colors.light.containerBackground,
    bottom: 0,
  },

  loginBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
