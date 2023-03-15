import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import LottieView from "lottie-react-native";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { store } from "../../Store/store";
import { RootStackParamList } from "../../types/navigationTypes";

export const UserLandingScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const animation = useRef(null);
  const onContinueAsGuest = () => {
    const AuthenticationMode: GraphQLOptions["authMode"] = "AWS_IAM";
    store.dispatch({
      type: "ON_UPDATE_AUTHENTICATIONMODE",
      payload: AuthenticationMode,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          resizeMode="cover"
          autoPlay
          ref={animation}
          loop={true}
          source={require("../../assets/lottie/welcomeScreenLottie.json")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserLoginScreen")}
        >
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserRegisterScreen")}
        >
          <Text style={styles.buttonTitle}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.guestButton}
          onPress={() => onContinueAsGuest()}
        >
          <Text style={styles.guestButtonTitle}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  lottieContainer: {
    flex: 0.5,
  },

  buttonsContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#0084ff",
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical: 15,
    width: "100%",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  guestButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    paddingVertical: 15,
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  guestButtonTitle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
