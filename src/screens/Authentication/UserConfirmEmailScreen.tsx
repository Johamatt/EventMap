import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { RouteProp } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import { Colors } from "react-native/Libraries/NewAppScreen";

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

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  const onResendPress = async () => {
    if (!username) {
      Alert.alert("Enter Your Email");
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
      <Text style={styles.title}>Confirm your email</Text>

      <View style={styles.textInputView}>
        {props.route.params?.username ? (
          <View style={styles.textInputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              textAlign="center"
              onChangeText={(username: string) => setUsername(username)}
            />
          </View>
        ) : (
          <View />
        )}

        <TextInput
          keyboardType="number-pad"
          placeholder="Enter your confirmation code"
          placeholderTextColor="#003f5c"
          onChangeText={(code: string) => setCode(code)}
          value={code}
          textAlign="center"
          textContentType="oneTimeCode"
        />
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={onConfirmPressed}>
        <Text style={styles.confirmBtnText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendBtn} onPress={onResendPress}>
        <Text style={styles.resendBtnText}>Resend code</Text>
      </TouchableOpacity>
      {!keyboardVisible && (
        <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
          <Text style={styles.backBtnText}>Back to Sign in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  textInputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    borderWidth: 1,

    justifyContent: "center",
    alignContent: "center",
  },

  //
  confirmBtn: {
    width: "80%",
    backgroundColor: Colors.light.secondary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  confirmBtnText: {
    color: "white",
  },

  //
  resendBtn: {
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  resendBtnText: {
    color: "white",
  },

  //
  backBtn: {
    width: "80%",
    backgroundColor: Colors.light.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    bottom: 30,
    position: "absolute",
  },
  backBtnText: {
    color: "#fff",
  },
});
