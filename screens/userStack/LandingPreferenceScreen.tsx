import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { ListRenderItemInfo, TouchableOpacity } from "react-native";
import { Text, View, FlatList } from "react-native";
import { LocationObject } from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  ApplicationState,
  ON_UPDATE_AGEGROUP,
  ON_UPDATE_TAGS,
  UserState,
} from "../../Store";
import { styles } from "./styles";
import { connect } from "react-redux";
import { Activity, activityTags } from "../../util/data/activityTags";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AgeGroup, AgeGroups } from "../../util/data/ageGroups";

interface LandingPreferenceProps {
  userReducer: UserState;
}

export const _LandingPreferenceScreen: React.FC<LandingPreferenceProps> = (
  props
) => {
  const userReducer = props.userReducer;

  const [selectedTags, setSelectedTags] = useState<Array<Activity>>([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroups>(
    AgeGroup[0]
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function nextScreen() {
    await AsyncStorage.setItem("user_tags", JSON.stringify(selectedTags));

    await ON_UPDATE_TAGS(selectedTags);
    await ON_UPDATE_AGEGROUP(selectedAgeGroup);

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
        <Picker
          selectedValue={selectedAgeGroup}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedAgeGroup(itemValue)
          }
        >
          {AgeGroup.map((_agegroup, key) => (
            <Picker.Item key={key} label={_agegroup.name} value={_agegroup} />
          ))}
        </Picker>

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

const LandingPreferenceScreen = connect(mapToStateProps, {
  ON_UPDATE_AGEGROUP,
  ON_UPDATE_TAGS,
})(_LandingPreferenceScreen);

export default LandingPreferenceScreen;
