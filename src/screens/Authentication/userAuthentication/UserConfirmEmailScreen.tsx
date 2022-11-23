import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import { Auth } from "aws-amplify";
import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";

type UserConfirmEmailScreenProp = RouteProp<
  RootStackParamList,
  "UserConfirmEmailScreen"
>;

interface Props {
  route: UserConfirmEmailScreenProp;
}

export const UserConfirmEmailScreen: React.FC<Props> = (props) => {
  const [code, setCode] = useState("");
  const username = props.route.params!.username
  const navigation = useNavigation();

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("UserLoginScreen");
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was resent to your email");
    } catch (error: any) {
      Alert.alert("Oops!", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <Input placeholder="Enter your confirmation code" value={code} />
        <TextInput
          onChangeText={setCode}
          value={code}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button title="Confirm" onPress={onConfirmPressed} />
        <Button title="Resend code" onPress={onResendPress} />
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
