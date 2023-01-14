import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import Colors from "../../../constants/Colors";
import LottieView from "lottie-react-native";
import { ApplicationState, store, UserState } from "../../../Store";

const UserLoginScreen: React.FC = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const animation = useRef(null);

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
      <LottieView
        resizeMode="cover"
        autoPlay
        ref={animation}
        loop={true}
        source={require("../../../assets/lottie/login.json")}
      />

      <View style={styles.TextInput}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(username: string) => setUsername(username)}
          textAlign="center"
        />
      </View>

      <View style={styles.TextInput}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password: string) => setPassword(password)}
          textAlign="center"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("UserForgotPasswordScreen")}
        style={styles.forgotBtn}
      >
        <Text> Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onSignInPressed}>
        <Text style={styles.loginBtnText}>
          {loading ? "Loading..." : "LOGIN"}
        </Text>
      </TouchableOpacity>

      {!keyboardVisible && (
        <>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => onContinueAsGuest()}
          >
            <Text style={styles.loginBtnText}>Continue as Guest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserRegisterScreen")}
            style={styles.signUpBtn}
          >
            <Text>
              Don't have an account?{" "}
              <Text style={styles.linkText}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}
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
  TextInput: {
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

  signUpBtn: {
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderBottomColor: Colors.light.secondary,
    color: "#fff",
    fontWeight: "bold",
    bottom: 30,
    position: "absolute",
    backgroundColor: "white",
  },

  forgotBtn: {
    marginBottom: 15,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: Colors.light.secondary,
    margin: 5,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtnText: {
    color: "white",
  },

  linkText: {
    color: Colors.light.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

export default connect(mapStateToProps)(UserLoginScreen);
