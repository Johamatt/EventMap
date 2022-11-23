import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import CustomInput from "../../../components/Inputs/CustomInput";
import { Auth } from "aws-amplify";
import { Button } from "@rneui/themed";
import Colors from "../../../constants/Colors";

export const UserForgotPasswordScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }

    navigation.navigate("UserNewPasswordScreen", { username: username });
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        placeholder="User Email"
        value={username}
        setValue={setUsername}
      />

      <Button title="Send" onPress={onSendPressed} />

      <Button title="Back to Sign in" onPress={onSignInPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderColor: Colors.light.tint,
    borderWidth: 1,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
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
    borderRadius: 25,
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

  loginBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
