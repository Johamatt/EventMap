import { Dimensions } from "react-native";
import Constants from "expo-constants";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default {
  statusbar: Constants.statusBarHeight,
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
