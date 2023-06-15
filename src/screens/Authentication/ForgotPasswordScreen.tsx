import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import LottieView from "lottie-react-native";

export const UserForgotPasswordScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate("UserNewPasswordScreen", { username });
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
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
      <Text style={styles.title}>Reset password</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#003f5c"
        placeholder="Email"
        textAlign="center"
        onChangeText={(text) => setUsername(text)}
        value={username}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={onSendPressed}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "black",
  },
  input: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "black",
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
