// import { Dimensions, ScrollView } from "react-native";

// import { RootStackParamList } from "../../navigation/types";

// import { Activity, Event as LiveEvent } from "../../API";
// import { View, Text, Image } from "react-native";
// import { ApplicationState, UserState } from "../../Store";
// import { connect } from "react-redux";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { styles } from "./styles";
// import React from "react";
// import MapView, { Marker } from "react-native-maps";

// interface ActivityInfoModalProps {
//   userReducer: UserState;
//   navigation: any;
//   route: any;
// }

// const ActivityInfoModal: React.FC<ActivityInfoModalProps> = (props) => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   const activity: Activity = props.route.params.Activity;

//   console.log(activity);

//   return (
//     <View>
//       <Text>ok</Text>
//     </View>
//     //     // Header starts
//     //     <ScrollView style={{ display: "flex", flex: 1 }}>
//     //       <View style={{ paddingTop: 25 }}>
//     //         <Image
//     //           source={{
//     //             uri: "https://reactnative.dev/img/tiny_logo.png",
//     //           }}
//     //         />
//     //         <Text
//     //           style={{
//     //             fontSize: 35,
//     //             textAlign: "center",
//     //             fontFamily: "Rationale-Regular",
//     //           }}
//     //         >
//     //           {event.Descriptions.fi}
//     //         </Text>
//     //       </View>
//     //       {/* Header ends */}

//     //       {/* Content Starts */}
//     //       <View style={{ padding: 20, margin: "auto" }}>
//     //         <View style={{ padding: 5, flexDirection: "row" }}>
//     //           {/* <Image
//     //             style={{ width: 105, height: 105 }}
//     //             source={{
//     //               uri:
//     //                 event.EventImage !== undefined
//     //                   ? event.EventImage[0].url
//     //                   : "../../assets/images/broken-link.png",
//     //             }}
//     //           /> */}

//     //           <View style={{ padding: 10 }}>
//     //             <View>
//     //               <Text>{event.startingDateTime}</Text>
//     //               <Text>{event.endingDateTime}</Text>
//     //             </View>

//     //             <View>
//     //               <Text>{event.location.streetAddress}</Text>
//     //               <Text>{event.location.postalCode}</Text>
//     //             </View>
//     //           </View>
//     //         </View>

//     //         <View style={{ padding: 5, flexDirection: "row" }}>
//     //           <View style={{ justifyContent: "center" }}>
//     //             <Text>{event.Descriptions.fi}</Text>
//     //           </View>
//     //         </View>

//     //         <View
//     //           style={{
//     //             flex: 1,
//     //             backgroundColor: "#fff",
//     //             alignItems: "center",
//     //             justifyContent: "center",
//     //           }}
//     //         >
//     //           {event.location.lat !== undefined ||
//     //           (null && event.location.lon !== undefined) ||
//     //           null ? (
//     //             <MapView
//     //               style={{
//     //                 width: Dimensions.get("window").width,
//     //                 height: 300,
//     //               }}
//     //               initialRegion={{
//     //                 latitude: event.location.lat,
//     //                 longitude: event.location.lon,
//     //                 latitudeDelta: 0.00922,
//     //                 longitudeDelta: 0.00421,
//     //               }}
//     //             >
//     //               <Marker
//     //                 coordinate={{
//     //                   latitude: event.location.lat,
//     //                   longitude: event.location.lon,
//     //                 }}
//     //               ></Marker>
//     //             </MapView>
//     //           ) : (
//     //             <View />
//     //           )}
//     //         </View>

//     //         <View></View>

//     //         <View style={styles.separator} />
//     //       </View>
//     //       {/* Content Ends */}

//     //       {/* Footer Starts */}
//     //       <View style={styles.footer}></View>
//     //       {/* Footer Ends */}
//     //     </ScrollView>
//   );
// };

// export default ActivityInfoModal;

import { Dimensions, ScrollView } from "react-native";

import { RootStackParamList } from "../../navigation/types";

import {
  Activity,
  Event as LiveEvent,
  GetActivityQuery,
  ListActivitiesQuery,
} from "../../API";
import { View, Text, Image } from "react-native";
import { ApplicationState, UserState } from "../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { getActivity } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import SplashScreen from "../SplashScreen";

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
    // Header starts
    <ScrollView style={{ display: "flex", flex: 1, padding: 20, }}>
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
      {/* Header ends */}

      {/* Content Starts */}
      <View style={{  margin: "auto" }}>


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

        <View></View>

        <View style={styles.separator} />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}></View>
      {/* Footer Ends */}
    </ScrollView>
  );
};
