import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import CustomInput from "../../../components/Inputs/CustomInput";
import { Auth } from "aws-amplify";
import { RootStackParamList } from "../../../navigation/types";
import { Button } from "@rneui/themed";

type UserNewPasswordScreenProp = RouteProp<
  RootStackParamList,
  "UserNewPasswordScreen"
>;

interface Props {
  route: UserNewPasswordScreenProp;
}

export const UserNewPasswordScreen: React.FC<Props> = (props) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const username = props.route.params.username;

  const navigation = useNavigation();

  const onSubmitPressed = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      navigation.navigate("UserLoginScreen");
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  const onSignInPress = async () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <Button title="Submit" onPress={onSubmitPressed} />

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
