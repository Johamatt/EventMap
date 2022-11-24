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
import { ApplicationState, store, UserState } from "../../../Store";
import { connect } from "react-redux";
import Colors from "../../../constants/Colors";

interface UserLoginScreenProps {
  userReducer: UserState;
}

const _UserLoginScreen: React.FC<UserLoginScreenProps> = (props) => {
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

  const onForgotPasswordPressed = () => {
    navigation.navigate("UserForgotPasswordScreen");
  };

  const onSignUpPress = () => {
    navigation.navigate("UserRegisterScreen");
  };

  const onUserConfirmEmailScreen = () => {
    navigation.navigate("UserConfirmEmailScreen");
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

      <TouchableOpacity onPress={onForgotPasswordPressed}>
        <Text style={styles.forgotBtnText}>Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onSignInPressed}>
        <Text style={styles.loginBtnText}>
          {loading ? "Loading..." : "LOGIN"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupTextArea} onPress={onSignUpPress}>
        <Text>
          Don't have an account? <Text style={styles.linkText}>Sign up</Text>{" "}
        </Text>
      </TouchableOpacity>

      {/* <Button title="Confirm email" onPress={onUserConfirmEmailScreen} /> */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const UserLoginScreen = connect(mapToStateProps, {})(_UserLoginScreen);

export default UserLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignSelf: "auto",
  },
  forgotBtnText: {
    height: 20,
    fontSize: 13,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: Colors.light.tint,
  },

  signupBtn: {
    width: "90%",
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#000",
    bottom: 0,
  },

  signupBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  linkText: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },

  signupTextArea: {
    marginTop: 10,

    width: "90%",
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Colors.light.containerBackground,
    bottom: 0,
  },

  loginBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
