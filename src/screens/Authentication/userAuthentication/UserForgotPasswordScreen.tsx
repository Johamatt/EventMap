import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import CustomInput from "../../../components/Inputs/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import { Auth } from "aws-amplify";

export const UserForgotPasswordScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
    } catch (e) {
      console.log(e);
    }

    navigation.navigate("UserNewPasswordScreen", { username: username });
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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
});
