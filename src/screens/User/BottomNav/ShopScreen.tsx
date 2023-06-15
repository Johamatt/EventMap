import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigationTypes";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { ApplicationState } from "../../../Store/reducers";

interface ShopScreenProps {
  authenticationMode: GraphQLOptions["authMode"];
}

export const _ShopScreen: React.FC<ShopScreenProps> = ({
  authenticationMode,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/pictures/no-favourites-Avatar.jpg")}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>
        Deals not available yet, check again later!
      </Text>

      <Text style={{ textAlign: "center", margin: 10, color: "red" }}>
        This section will later include various offers from restaurants, event
        organizers, and other interesting partners!
      </Text>
    </View>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
});

const ShopScreen = connect(mapToStateProps, {})(_ShopScreen);

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
});
