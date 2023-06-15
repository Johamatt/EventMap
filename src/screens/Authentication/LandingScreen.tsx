import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ApplicationState } from "../../Store/reducers";
import { store } from "../../Store/store";
import Colors from "../../constants/Colors";

const windowWidth = Dimensions.get("window").width;

const LandingScreen: React.FC = (props) => {
  const [user, setUser] = useState(null);

  const onContinueAsGuest = () => {
    store.dispatch({
      type: "ON_UPDATE_AUTHENTICATIONMODE",
      payload: "AWS_IAM",
    });
  };

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      setUser(data);
    });

    const fetchCurrentUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        store.dispatch({
          type: "ON_UPDATE_AUTH",
          payload: {
            userAuth: currentUser,
          },
        });
        store.dispatch({
          type: "ON_UPDATE_AUTHENTICATIONMODE",
          payload: "AMAZON_COGNITO_USER_POOLS",
        });
      } catch (error) {
        console.log("Not signed in");
      }
    };

    fetchCurrentUser();

    return unsubscribe;
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          <Text style={[styles.headerText, styles.headerTextFirst]}>F</Text>
          <Text style={[styles.headerText, styles.headerTextThird]}>L</Text>
        </Text>
        <Text style={styles.headerText}>
          <Text style={[styles.headerText, styles.headerTextThird]}>O</Text>
          <Text style={[styles.headerText, styles.headerTextSecond]}>W</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            })
          }
          style={styles.googleButton}
        >
          <Image
            source={require("../../assets/pictures/btn_google_dark_focus_hdpi.9.png")}
            style={styles.googleButtonIcon}
            resizeMode="contain"
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onContinueAsGuest} style={styles.button}>
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

export default connect(mapStateToProps)(LandingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Colors.primary.main,
    width: windowWidth * 0.8,
    minHeight: 60,
  },
  buttonText: {
    color: Colors.primary.text,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Rationale-Regular",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,

    backgroundColor: "#1b60d1", // Google red color
    width: windowWidth * 0.8,
  },
  googleButtonIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    resizeMode: "contain", // Add this line
  },
  googleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Rationale-Regular",
  },
  headerContainer: {
    position: "absolute",
    top: 5,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 65,
    fontFamily: "Rationale-Regular",
    letterSpacing: 10,
  },
  headerTextFirst: {
    color: "#eb1b66",
  },
  headerTextSecond: {
    color: "#26a9e1",
  },
  headerTextThird: {
    color: "#ffffff",
  },
  image: {
    width: windowWidth * 0.8,
  },
});
