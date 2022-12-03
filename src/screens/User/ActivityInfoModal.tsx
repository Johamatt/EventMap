import { Dimensions, ScrollView } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import { GetActivityQuery } from "../../API";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { getActivity } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

interface ActivityInfoModalProps {
  navigation: any;
  route: any;
}

export const ActivityInfoModal: React.FC<ActivityInfoModalProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [activity, setActivity] = useState<any>();

  useEffect(() => {
    requestAPI();
  }, []);

  const requestAPI = async () => {
    const activity = (await API.graphql(
      graphqlOperation(getActivity, { id: props.route.params.id })
    )) as GraphQLResult<GetActivityQuery>;
    setActivity(activity.data!.getActivity);
  };

  if (activity === undefined) {
    return <View></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 25 }}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {activity.Names.fi}
        </Text>
      </View>

      <View style={{ margin: "auto" }}>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Text>{activity.Descriptions.fi}</Text>
          </View>
        </View>

        <View style={{ padding: 5, flexDirection: "row" }}>
          <View style={{ padding: 10 }}>
            <View>
              <Text>{activity.Location.streetAddress}</Text>
              <Text>{activity.Location.postalCode}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {activity.Location.lat !== undefined ||
          (null && activity.Location.lon !== undefined) ||
          null ? (
            <MapView
              style={{
                width: Dimensions.get("window").width,
                height: 300,
              }}
              initialRegion={{
                latitude: activity.Location.lat,
                longitude: activity.Location.lon,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: activity.Location.lat,
                  longitude: activity.Location.lon,
                }}
              ></Marker>
            </MapView>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.separator} />
      </View>
      <View style={styles.footer}></View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 20,
  },

  // Footer styles
  footer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  //Util
  separator: {
    marginVertical: 20,
    height: 2,
    color: "#000",
  },

  selectedListItem: {
    backgroundColor: "#2f95dc",
    alignItems: "center",
    width: Layout.window.width / 2.5,
  },

  unSelectedListItem: {
    width: Layout.window.width / 2.2,
  },
});
