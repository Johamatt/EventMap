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
import { API, Auth, graphqlOperation } from "aws-amplify";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import { createUser } from "../../graphql/mutations";
import { CreateUserInput } from "../../API";

export const UserRegisterScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
        const ok = await Auth.signUp({ username, password });
        const user: CreateUserInput = {
          name: username,
          email: username,
        };

        navigation.navigate("UserConfirmEmailScreen", { username });
      } catch (error: any) {
        Alert.alert("Oops!", error.message);
      }
    } else {
      Alert.alert("Password fields do not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          textAlign="center"
          onChangeText={(username: string) => setUsername(username)}
        />

        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password: string) => setPassword(password)}
          textAlign="center"
        />

        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Repeat Password"
          placeholderTextColor="#003f5c"
          onChangeText={(passwordRepeat: string) =>
            setPasswordRepeat(passwordRepeat)
          }
          textAlign="center"
        />
      </View>

      <TouchableOpacity style={styles.sendBtn} onPress={onRegisterPressed}>
        <Text style={styles.sendBtnText}>Sign up</Text>
      </TouchableOpacity>
      {!keyboardVisible && (
        <TouchableOpacity
          style={styles.confirmEmailContainer}
          onPress={() => navigation.navigate("UserConfirmEmailScreen")}
        >
          <Text style={styles.confirmEmailButtonText}>
            Already filled this form?{" "}
            <Text style={styles.linkText}>Confirm Email</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },

  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  sendBtn: {
    marginTop: 20,
    width: "80%",
    height: 48,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  TextInput: {
    width: "90%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "white",
  },

  confirmEmailButtonText: {
    color: "white",
  },

  confirmEmailContainer: {
    alignSelf: "center",
    padding: 12,
    paddingTop: 30,
  },

  linkText: {
    color: "teal",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
