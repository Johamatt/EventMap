// import { StyleSheet } from "react-native";
// import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { RootStackParamList } from "../../../../types";
import { ApplicationState, ON_UPDATE_TAGS, UserState } from "../../../Store";

import { activityTags } from "../../../util/data/activityTags";
import { Activity } from "../../../util/data/types";
import { styles } from "../styles";

interface TabTwoScreenProps {
  userReducer: UserState;
}

export const _TabTwoScreen: React.FC<TabTwoScreenProps> = (props) => {
  const [selectedTags, setSelectedTags] = useState<Array<Activity>>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function nextScreen() {
    await AsyncStorage.setItem("user_tags", JSON.stringify(selectedTags));
    ON_UPDATE_TAGS(selectedTags);
    navigation.navigate("UserRoot"); //
  }

  const handleSelectionMultiple = (item: Activity) => {
    if (selectedTags.includes(item)) {
      setSelectedTags(selectedTags.filter((_item: Activity) => _item !== item));
    } else {
      setSelectedTags((selectedTags) => [...selectedTags, item]);
    }
  };

  return (
    // Header starts
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Preferences</Text>
      </View>
      {/* Header ends */}

      {/* Content Starts */}
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          data={activityTags}
          extraData={selectedTags}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => handleSelectionMultiple(item.item)}
              style={
                selectedTags.includes(item.item)
                  ? styles.selectedListItem
                  : styles.unSelectedListItem
              }
            >
              <Text>{item.item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => nextScreen()}
        >
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* Footer Ends */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const TabTwoScreen = connect(mapToStateProps, {
  ON_UPDATE_TAGS,
})(_TabTwoScreen);

export default TabTwoScreen;
