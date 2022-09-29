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
import DropDownPicker from "react-native-dropdown-picker";

interface LandingPreferenceProps {
  userReducer: UserState;
  ON_UPDATE_TAGS: Function;
  ON_UPDATE_AGEGROUP: Function;
}

export const _LandingPreferenceScreen: React.FC<LandingPreferenceProps> = (
  props
) => {
  const { ON_UPDATE_AGEGROUP, ON_UPDATE_TAGS, userReducer } = props;

  const [selectedTags, setSelectedTags] = useState<Array<Activity>>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState([
    { label: "Kids", value: "kid" },
    { label: "Teens", value: "teen" },
    { label: "Adults", value: "adult" },
    { label: "Seniors", value: "senior" },
    { label: "Kids & Families", value: "kidsAndFamilies" },
  ]);

  function nextScreen() {
    ON_UPDATE_TAGS(selectedTags);
    ON_UPDATE_AGEGROUP(value);

    // navigation.navigate("UserRoot");

    navigation.navigate("HomeScreen");
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
        <DropDownPicker
          open={open}
          value={value}
          items={selectedAgeGroup}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSelectedAgeGroup}
          multiple={true}
          min={0}
          max={5}
          placeholder="Select Age Group(s)"
        />

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
