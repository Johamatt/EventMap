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
      <Text style={styles.title}>Enter your email</Text>
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
    backgroundColor: "black",
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
    color: "white",
  },
  input: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "white",
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
