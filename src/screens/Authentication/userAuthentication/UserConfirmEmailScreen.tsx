import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import { Auth } from "aws-amplify";
import Colors from "../../../constants/Colors";

type UserConfirmEmailScreenProp = RouteProp<
  RootStackParamList,
  "UserConfirmEmailScreen"
>;

interface Props {
  route: UserConfirmEmailScreenProp;
}

export const UserConfirmEmailScreen: React.FC<Props> = (props) => {
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.route.params?.username === undefined) {
    } else {
      setUsername(props.route.params.username);
      setPassword(props.route.params.password);
    }
  }, []);

  const navigation = useNavigation();

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      await Auth.signIn(username, password);

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

  if (props.route.params === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(username: string) => setUsername(username)}
          />
        </View>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your confirmation code"
            placeholderTextColor="#003f5c"
            onChangeText={(code: string) => setCode(code)}
          />
        </View>

        <TouchableOpacity style={styles.confirmBtn} onPress={onConfirmPressed}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendBtn} onPress={onResendPress}>
          <Text style={styles.resendBtnText}>Resend code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
          <Text style={styles.backBtnText}>Back to Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your confirmation code"
            placeholderTextColor="#003f5c"
            onChangeText={(code: string) => setCode(code)}
          />
        </View>

        <TouchableOpacity style={styles.confirmBtn} onPress={onConfirmPressed}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resendBtn} onPress={onResendPress}>
          <Text style={styles.resendBtnText}>Resend code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
          <Text style={styles.backBtnText}>Back to Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
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
  },

  //

  resendBtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.attention,
    bottom: 0,
  },

  resendBtnText: {
    color: "#000",
    fontWeight: "bold",
  },
  //

  confirmBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  confirmBtn: {
    marginBottom: 10,
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.secondary,
  },

  //
  backBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  backBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.tint,
    bottom: 0,
    position: "absolute",
    marginBottom: 20,
  },
});
