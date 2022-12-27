import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
interface Props {
  openModal: () => void;
}

const ShowMapCardModal = ({ openModal }: Props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    right: 18,
    bottom: 100,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#f3f4f6",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ShowMapCardModal;
