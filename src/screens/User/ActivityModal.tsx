import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import { Activity, GetActivityQuery } from "../../API";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { getActivity } from "../../graphql/queries";
import { Analytics, API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import LottieView from "lottie-react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Constants from "expo-constants";
import { ListIconDynamoDB } from "../../components/Lists/ListIconDynamoDB";

interface ActivityInfoModalProps {
  navigation: any;
  route: any;
}

export const ActivityModal: React.FC<ActivityInfoModalProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const animation = useRef(null);
  const [activity, setActivity] = useState<Activity>();

  if (activity?.updated_at_Source) {
    const newDate = new Date(activity?.updated_at_Source);
    // continue to format the date as desired
  } else {
    // Handle the case where date is null or undefined
  }

  useEffect(() => {
    Analytics.record({
      name: "activityOpened",
      attributes: { id: props.route.params.id },
    });

    requestAPI();
  }, []);

  console.log(activity);

  const requestAPI = async () => {
    const activity = (await API.graphql(
      graphqlOperation(getActivity, { id: props.route.params.id })
    )) as GraphQLResult<GetActivityQuery>;

    //@ts-ignore
    setActivity(activity.data!.getActivity);
  };

  if (activity === undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={42}
              color={Colors.light.primary}
            />
          </TouchableOpacity>
        </View>
        <LottieView
          resizeMode="contain"
          autoPlay
          ref={animation}
          loop={true}
          source={require("../../assets/lottie/Loading.json")}
          colorFilters={[
            {
              keypath: "**",
              color: "black",
            },
          ]}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={42}
            color={Colors.light.primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.separatorBold}></View>

      <View style={styles.topContainer}>
        <Text style={styles.activityNameText}>{activity?.Names.fi}</Text>

        <View style={styles.separator} />
        <ListIconDynamoDB data={activity.categories} />

        <Text style={styles.whiteText}>
          Average duration: {activity.duration} {activity.durationType}
        </Text>
        <Text style={styles.whiteText}> {activity.updated_at_Source}</Text>

        <View style={styles.separator}></View>

        <View style={styles.middleContainer}>
          <View style={styles.companyInfoContainer}>
            <Text style={styles.companyNameText}>
              Natura vaVidavavavavavvavav
            </Text>
            <Image
              style={styles.companyLogo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </View>

          <View style={styles.openHoursContainer}>
            {activity.OpenDays!.some((day) => day.timeFrom && day.timeTo) ? (
              <>
                <Text style={styles.openingHoursTitle}>Open hours</Text>
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
                <Text style={styles.openHourNoInfo}>No Opening hours info</Text>
              </>
            )}
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{activity?.Descriptions.fi}</Text>
      </View>

      <View style={styles.BottomContainer}>
        {activity?.Location.lat !== undefined ||
        (null && activity?.Location.lon !== undefined) ||
        null ? (
          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: activity!.Location.lat,
              longitude: activity!.Location.lon,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <Marker
              coordinate={{
                latitude: activity!.Location.lat,
                longitude: activity!.Location.lon,
              }}
            ></Marker>
          </MapView>
        ) : (
          <View />
        )}
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            {activity?.Location.streetAddress}
          </Text>
          <Text style={styles.addressText}>
            {activity?.Location.postalCode}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
  },

  loading: {
    color: "white",
  },

  topContainer: {
    paddingHorizontal: 20,
  },

  activityNameText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
  },

  middleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  companyInfoContainer: {
    flex: 0.5,
    padding: 10,
  },

  companyLogo: {
    marginTop: 20,
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  companyNameText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },

  openHoursContainer: {
    flex: 0.5,
    padding: 10,
  },

  openingHoursTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 10,
  },

  openHourNoInfo: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
  },

  greenText: {
    color: "green",
  },
  whiteText: {
    color: "white",
  },

  descriptionContainer: {
    padding: 20,
  },

  description: {
    fontSize: 18,
    lineHeight: 24,
    color: "white",
    margin: 16,
  },

  addressContainer: {
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    flexDirection: "row-reverse",
  },

  addressText: {
    color: "white",
    textAlign: "left",
  },

  BottomContainer: {
    padding: 20,
  },

  mapContainer: {
    width: Dimensions.get("window").width,
    height: 300,
  },

  separator: {
    borderWidth: 0.2,
    borderColor: "grey",
    marginVertical: 5,
  },

  separatorBold: {
    borderWidth: 1,

    marginVertical: 5,
  },

  header: {
    height: 50,
    backgroundColor: "black",
    paddingHorizontal: 15,
    marginTop: Constants.statusBarHeight,
  },
});
