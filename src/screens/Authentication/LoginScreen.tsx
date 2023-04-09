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
import { ApplicationState } from "../../Store/reducers";
import { connect } from "react-redux";
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

      store.dispatch({
        type: "ON_UPDATE_AUTHENTICATIONMODE",
        payload: "AMAZON_COGNITO_USER_POOLS",
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
          placeholderTextColor="#003f5c"
          onChangeText={(username: string) => setUsername(username)}
          textAlign="center"
        />

        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password: string) => setPassword(password)}
          textAlign="center"
        />

        <TouchableOpacity style={styles.button} onPress={onSignInPressed}>
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "LOGIN"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("UserForgotPasswordScreen")}
        >
          <Text style={{ color: "white", paddingTop: 25 }}>
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
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "white",
  },

  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
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
