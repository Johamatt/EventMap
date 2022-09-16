import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },

  // Header styles
  header: { paddingTop: 50 },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "RationaleRegular",
  },

  headerText: {
    fontSize: 15,
    textAlign: "center",
    padding: 10,
  },

  // Content styles
  content: {
    padding: 20,
    margin: "auto",
  },

  pickerBox: {
    padding: 5,
    flexDirection: "row",
  },

  nearbyBox: {
    padding: 5,
    flexDirection: "row",
  },

  // Footer styles
  footer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  footerButton: {
    alignItems: "center",
    backgroundColor: "#2f95dc",
    fontWeight: "bold",
    padding: 10,
    width: 120,
  },

  footerButtonText: {
    fontWeight: "bold",
    color: "#fff",
  },

  //Util
  separator: {
    marginVertical: 20,
    height: 1,
  },
});
