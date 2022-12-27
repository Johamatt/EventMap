import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import Colors from "../../../constants/Colors";

import { ApplicationState, store, UserState } from "../../../Store";

interface UserLoginScreenProps {
  userReducer: UserState;
}

const UserLoginScreen: React.FC<UserLoginScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const signIn = await Auth.signIn(username, password);

      store.dispatch({
        type: "ON_UPDATE_AUTH",
        payload: {
          userAuth: signIn,
        },
      });
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }

    setLoading(false);
  };

  const onContinueAsGuest = () => {
    store.dispatch({
      type: "ON_UPDATE_GUESTUSER_SESSION",
      payload: true,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo/logo1.png")}
      />

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

      <TouchableOpacity
        onPress={() => navigation.navigate("UserForgotPasswordScreen")}
      >
        <Text style={styles.forgotBtnText}>Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onSignInPressed}>
        <Text style={styles.loginBtnText}>
          {loading ? "Loading..." : "LOGIN"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => onContinueAsGuest()}
      >
        <Text style={styles.loginBtnText}>Continue as Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupTextArea}
        onPress={() => navigation.navigate("UserRegisterScreen")}
      >
        <Text>
          Don't have an account? <Text style={styles.linkText}>Sign up</Text>{" "}
        </Text>
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
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
  },
  TextInput: {
    height: 50,
    color: "white",
  },
  forgotBtnText: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: Colors.light.tint,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginBtnText: {
    color: "white",
  },
  signupTextArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

export default connect(mapStateToProps)(UserLoginScreen);
