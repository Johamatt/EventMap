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
import { ApplicationState } from "../../Store/reducers";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/Colors";

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
      type: "ON_UPDATE_AUTHENTICATIONMODE",
      payload: "AWS_IAM",
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.33 }} />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(username: string) => setUsername(username)}
          textAlign="center"
        />

        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={(password: string) => setPassword(password)}
          textAlign="center"
        />

        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
            backgroundColor: "teal",
          }}
          onPress={onSignInPressed}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "LOGIN"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("UserForgotPasswordScreen")}
        >
          <Text style={{ color: "white", paddingTop: 10 }}>
            {" "}
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {!keyboardVisible && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{
              width: "80%",
              height: 50,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
              backgroundColor: Colors.light.headerBackground,
            }}
            onPress={() => onContinueAsGuest()}
          >
            <Text style={styles.buttonText}>Continue as Guest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserRegisterScreen")}
            style={{ paddingBottom: 20 }}
          >
            <Text style={{ color: "white" }}>
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
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
  },

  buttonsContainer: {
    flex: 0.33,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
  },

  linkText: {
    color: "teal",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  formContainer: {
    flex: 0.33,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

export default connect(mapStateToProps)(UserLoginScreen);
