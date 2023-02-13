import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import LottieView from "lottie-react-native";

export const UserRegisterScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const animation = useRef(null);
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

  const onRegisterPressed = async () => {
    if (passwordRepeat === password) {
      try {
        await Auth.signUp({
          username,
          password,
        });
        navigation.navigate("UserConfirmEmailScreen", { username, password });
      } catch (error: any) {
        Alert.alert("Oops!", error.message);
      }
    } else {
      Alert.alert("Password fields do not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {/* <LottieView
          resizeMode="cover"
          autoPlay
          ref={animation}
          loop={true}
          source={require("../../../assets/lottie/register.json")}
        /> */}

        <View style={styles.textInputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            textAlign="center"
            onChangeText={(username: string) => setUsername(username)}
          />
        </View>

        <View style={styles.textInputView}>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password: string) => setPassword(password)}
            textAlign="center"
          />
        </View>

        <View style={styles.textInputView}>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInput}
            placeholder="Repeat Password"
            placeholderTextColor="#003f5c"
            onChangeText={(passwordRepeat: string) =>
              setPasswordRepeat(passwordRepeat)
            }
            textAlign="center"
          />
        </View>

        <TouchableOpacity style={styles.sendBtn} onPress={onRegisterPressed}>
          <Text style={styles.sendBtnText}>Register</Text>
        </TouchableOpacity>
        {!keyboardVisible && (
          <>
            <TouchableOpacity
              style={styles.confirmEmailText}
              onPress={() => navigation.navigate("UserConfirmEmailScreen")}
            >
              <Text>
                Already filled this form?{" "}
                <Text style={styles.linkText}>Confirm Email</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: Colors.light.headerBackground,
    justifyContent: "center",
    marginTop: StatusBar.length,
    paddingLeft: 10,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    marginTop: Constants.statusBarHeight,
  },

  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.9,
  },

  backBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.primary,
  },

  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  sendBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.secondary,
    bottom: 0,
    marginBottom: 20,
  },
  backBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },

  textInputView: {
    backgroundColor: Colors.light.inputBackground,
    borderRadius: 25,
    width: "70%",
    height: 52,
    margin: 10,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  confirmEmailText: {
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderBottomColor: Colors.light.secondary,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "white",
    bottom: 30,
    position: "absolute",
  },

  linkText: {
    color: Colors.light.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
