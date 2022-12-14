import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";
import Colors from "../../../constants/Colors";

export const UserForgotPasswordScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
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

  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate("UserNewPasswordScreen", { username });
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder="User Email"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <TouchableOpacity style={styles.sendBtn} onPress={onSendPressed}>
        <Text style={styles.sendBtnText}>Send</Text>
      </TouchableOpacity>

      {!keyboardVisible && (
        <>
          <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
            <Text style={styles.backBtnText}>Back to Sign in</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: 250,
    maxHeight: 150,
    width: 250,
    height: 150,
  },
  textInputView: {
    backgroundColor: Colors.light.inputBackground,
    borderRadius: 25,
    width: "70%",
    height: 52,
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
  },
  sendBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.secondary,
    bottom: 0,
  },

  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  backBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.primary,
    bottom: 0,
    position: "absolute",
    marginBottom: 20,
  },

  backBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
