import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { RouteProp } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import LottieView from "lottie-react-native";

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

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (props.route.params?.username) {
      setUsername(props.route.params.username);
    }
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(username, code);

      navigation.navigate("UserLoginScreen");
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  const onResendPress = async () => {
    if (!username) {
      Alert.alert("Oops!", "Enter Your Email");
    } else {
      try {
        await Auth.resendSignUp(username);
        Alert.alert("Success", "Code was resent to your email");
      } catch (error: any) {
        Alert.alert("Oops!", error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lottie/background-polygon.json")}
        autoPlay
        loop
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View style={styles.formContainer}>
        {!props.route.params?.username ? (
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            textAlign="center"
            onChangeText={(username: string) => setUsername(username)}
          />
        ) : (
          <View />
        )}

        <TextInput
          style={styles.TextInput}
          keyboardType="number-pad"
          placeholder="Enter your confirmation code"
          placeholderTextColor="#003f5c"
          onChangeText={(code: string) => setCode(code)}
          value={code}
          textAlign="center"
          textContentType="oneTimeCode"
        />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={onConfirmPressed}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      {!keyboardVisible && (
        <TouchableOpacity style={styles.resendButton} onPress={onResendPress}>
          <Text style={styles.resendText}>Resend code</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  TextInput: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "black",
  },

  title: {
    fontSize: 24,
    marginBottom: 16,
  },

  confirmButton: {
    marginTop: 20,
    width: "80%",
    height: 48,
    backgroundColor: "#007AFF",

    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  resendButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  resendText: {
    color: "black",
    fontWeight: "bold",
  },

  formContainer: {
    flex: 0.33,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
