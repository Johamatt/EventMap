import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import { Auth } from "aws-amplify";
import { store } from "../../Store/store";
import LottieView from "lottie-react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ApplicationState } from "../../Store/reducers";
import { connect } from "react-redux";

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
      <View style={styles.animationContainer}>
        <LottieView
          resizeMode="contain"
          autoPlay
          ref={animation}
          loop={true}
          source={require("../../assets/lottie/loginScreenLottie.json")}
        />
      </View>

      <View style={styles.formContainer}>
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
          <Text style={styles.loginBtnText}> Forgot your Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={onSignInPressed}>
          <Text style={styles.loginBtnText}>
            {loading ? "Loading..." : "LOGIN"}
          </Text>
        </TouchableOpacity>
      </View>

      {!keyboardVisible && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.questBtn}
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  TextInput: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
  },
  loginBtn: {
    width: "80%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  questBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
  },

  loginBtnText: {
    color: "white",
  },

  buttonsContainer: {
    bottom: 10,
    position: "absolute",
    alignSelf: "center",
  },

  signUpBtn: {
    padding: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderBottomColor: Colors.light.secondary,
    color: "#fff",
    fontWeight: "bold",

    backgroundColor: "white",

    alignSelf: "center",
  },

  forgotBtn: {
    marginBottom: 15,
  },

  linkText: {
    color: Colors.light.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  animationContainer: {
    height: "33.33%",
  },
  animation: {
    flex: 1,
  },
  formContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

export default connect(mapStateToProps)(UserLoginScreen);
