import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { RootStackParamList } from "../../../navigation/types";
import Colors from "../../../constants/Colors";

type UserNewPasswordScreenProp = RouteProp<
  RootStackParamList,
  "UserNewPasswordScreen"
>;

interface Props {
  route: UserNewPasswordScreenProp;
}

export const UserNewPasswordScreen: React.FC<Props> = ({ route }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { username } = route.params;

  const navigation = useNavigation();

  const onSubmitPressed = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      navigation.navigate("UserLoginScreen");
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("UserLoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <View style={styles.textInputView}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry
          placeholder="Enter your new password"
          placeholderTextColor="#003f5c"
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.textInputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Code"
          placeholderTextColor="#003f5c"
          onChangeText={setCode}
        />
      </View>

      <TouchableOpacity style={styles.sendBtn} onPress={onSubmitPressed}>
        <Text style={styles.sendBtnText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={onSignInPress}>
        <Text style={styles.backBtnText}>Back to Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.containerBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputView: {
    backgroundColor: Colors.light.inputBackground,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderColor: Colors.light.tint,
    borderWidth: 1,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
  },

  backBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.tint,
    bottom: 0,
    position: "absolute",
    marginBottom: 20,
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
  },
  backBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
