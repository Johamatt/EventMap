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
      <LottieView
        autoPlay
        ref={animation}
        loop={true}
        source={require("../../assets/lottie/background-polygon.json")}
      />

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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonsContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    backgroundColor: "transparent",
    borderRadius: 25,
    position: "absolute",
    bottom: 40,
    marginTop: 20, // add margin top to create space between buttons
  },

  button: {
    backgroundColor: "#FF6F61",
    borderRadius: 50,
    marginBottom: 25,
    paddingVertical: 15,
    width: "100%",
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },

  guestButton: {
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingVertical: 15,
    width: "100%",
  },
  guestButtonTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
