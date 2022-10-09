import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";

import { useNavigation } from "@react-navigation/core";
import CustomInput from "../../../components/Inputs/CustomInput";
import CustomButton from "../../../components/Buttons/CustomButton";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../../types";
import { Auth } from "aws-amplify";

type UserConfirmEmailScreenProp = RouteProp<
  RootStackParamList,
  "UserConfirmEmailScreen"
>;

interface Props {
  route: UserConfirmEmailScreenProp;
}

export const UserConfirmEmailScreen: React.FC<Props> = (props) => {
  const [code, setCode] = useState("");
  const username = props.route.params.username;
  const navigation = useNavigation();

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("UserLoginScreen");
    } catch (e) {
      console.log(e);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was resent to your email");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

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
