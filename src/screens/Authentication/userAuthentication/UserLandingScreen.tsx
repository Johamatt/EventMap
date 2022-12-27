import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RootStackParamList } from "../../../navigation/types";
import { store } from "../../../Store";

export const UserLandingScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [backgroundImage, setBackgroundImage] = useState(
    require("../../../assets/logo/background.jpg")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevBackgroundImage: string) => {
        if (
          prevBackgroundImage === require("../../../assets/logo/background.jpg")
        ) {
          return require("../../../assets/logo/background2.jpg");
        } else {
          return require("../../../assets/logo/background.jpg");
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onContinueAsGuest = () => {
    store.dispatch({
      type: "ON_UPDATE_GUESTUSER_SESSION",
      payload: true,
    });
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo/logo1.png")}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserRegisterScreen")}
        >
          <Text style={styles.buttonTitle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserLoginScreen")}
        >
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.guestButton}
          onPress={() => onContinueAsGuest()}
        >
          <Text style={styles.guestButtonTitle}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#0084ff",
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical: 15,
    width: "100%",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  guestButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,

    paddingVertical: 15,
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  guestButtonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
