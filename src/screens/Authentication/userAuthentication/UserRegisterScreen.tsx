import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Auth } from "aws-amplify";
import Colors from "../../../constants/Colors";

export const UserRegisterScreen: React.FC = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();
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

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo/logo1.png")}
      />
      <Text style={styles.title}>Create an account</Text>

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
          secureTextEntry={true}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password: string) => setPassword(password)}
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
        />
      </View>

      <TouchableOpacity style={styles.sendBtn} onPress={onRegisterPressed}>
        <Text style={styles.sendBtnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
        <Text style={styles.backBtnText}>Back to Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
  },

  backBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.tint,
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
  image: {
    marginBottom: 40,
    maxWidth: 250,
    maxHeight: 150,
    //

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
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});
