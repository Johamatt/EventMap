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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigationTypes";
import LottieView from "lottie-react-native";

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

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmitPressed = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      navigation.navigate("UserLoginScreen");
    } catch (error: any) {
      Alert.alert("Oops!", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lottie/background-polygon.json")}
        autoPlay
        loop
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <TextInput
        style={styles.TextInput}
        secureTextEntry
        placeholder="Enter your new password"
        textAlign="center"
        placeholderTextColor="#003f5c"
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Code"
        textAlign="center"
        placeholderTextColor="#003f5c"
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={onSubmitPressed}>
        <Text style={styles.sendBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "black",
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
});
