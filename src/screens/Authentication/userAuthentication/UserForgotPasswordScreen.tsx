import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import CustomInput from "../../../components/Inputs/CustomInput";
import { Auth } from "aws-amplify";
import { Button } from "@rneui/themed";

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <Button title="Send" onPress={onSendPressed} />

        <Button title="Back to Sign in" onPress={onSignInPress} />
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
