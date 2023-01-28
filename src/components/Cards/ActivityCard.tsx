import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Activity } from "../../API";
import { RootStackParamList } from "../../navigation/types";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { ListIconDynamoDB } from "../Lists/ListIconDynamoDB";

import Colors from "../../constants/Colors";

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  let day = new Date().getDay();

  const handleCardPress = () => {
    navigation.navigate("ActivityModal", { id: activity.id });
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={handleCardPress}>
        <View style={styles.cardTopContainer}>
          {/* {activity.company.logo && (
            <Image
              source={{ uri: companyLogo }}
              style={styles.companyLogo}
            />
          )} */}
          <Text style={styles.title}>{activity.Names.fi}</Text>
          <Text style={styles.companyName}>Nature with Borearctia</Text>

          <View style={styles.flexContainer}>
            <View style={styles.flexColumn}>
              {/* <Text style={styles.companyName}>{activity.company?.name}</Text> */}

              <ListIconDynamoDB data={activity.categories} />
            </View>

            <View style={styles.flexColumn}>
              {activity.OpenDays!.some((day) => day.timeFrom && day.timeTo) ? (
                <>
                  <Text style={styles.whiteTextBold}>Open hours</Text>
                  {activity.OpenDays!.map((day, index) => (
                    <Text
                      key={index}
                      style={
                        index === new Date().getDay()
                          ? styles.greenText
                          : styles.whiteText
                      }
                    >
                      {days[index]}: {day.timeFrom} - {day.timeTo}
                    </Text>
                  ))}
                </>
              ) : (
                <>
                  <Text style={styles.orangeText}>No Opening hours info</Text>
                  <Text style={styles.yellowText}>Press for more deatails</Text>
                </>
              )}
            </View>
          </View>
        </View>

        <View style={styles.priceContainer}>
          {activity.isFree ? (
            <Text style={styles.price}>
              {/* {activity.price.EurFrom! - activity.price.EurTo!} */}
              <Text>10 - 25 euros</Text>
            </Text>
          ) : (
            <>
              <Text style={styles.whiteText}>
                Price: <Text style={styles.free}>Free</Text>
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.cardBottomContainer}>
        <ScrollView horizontal={true} style={styles.pictureContainer}>
          {/* {pictures.map((img, i) => (
                <Image
                  key={i}
                  source={{ uri: img }}
                  style={styles.picture}
                />
            ))} */}
          <Image
            style={styles.picture}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flexColumn: {
    flex: 0.5,
  },

  orangeText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
  },
  yellowText: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 15,
  },

  cardContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: Colors.light.primary,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "black",
  },
  cardTopContainer: {
    flexDirection: "column",
    flex: 1,
  },

  greenText: {
    color: "green",
  },
  whiteText: {
    color: "white",
  },

  whiteTextBold: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  smallcategorypicture: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  cardMiddleContainer: {
    marginTop: 10,
  },

  priceContainer: {
    marginTop: 10,
  },

  companyName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  free: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardBottomContainer: {
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
  },
  pictureContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  picture: {
    width: ((Dimensions.get("window").width - 50) / 3) * 0.7,
    height: 100 * 0.7,
    marginRight: 5,
    marginBottom: 5,
  },
});
