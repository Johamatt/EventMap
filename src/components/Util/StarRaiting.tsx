import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StarRating: React.FC<{ rating: number | null }> = ({ rating }) => {
  const stars = [];

  if (rating === null) {
    for (let i = 0; i < 5; i++) {
      stars.push(<Ionicons name="star-outline" size={24} color="black" />);
    }

    return <View style={styles.ratingContainer}>{stars}</View>;
  } else {
    for (let i = 0; i < 5; i++) {
      stars.push(
        <View key={i} style={styles.starContainer}>
          {i < rating ? (
            <Ionicons name="star-outline" size={24} color="black" />
          ) : (
            <Ionicons name="star-sharp" size={24} color="black" />
          )}
        </View>
      );
    }
    return <View style={styles.ratingContainer}>{stars}</View>;
  }
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starContainer: {
    marginRight: 5,
  },
});
