import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  UserState,
} from "../../Store";
import { styles } from "./styles";
import { connect } from "react-redux";
import { RootStackParamList } from "../../navigation/types";
import { CATEGORY } from "../../API";
import useAmplifyResources from "../../hooks/loadResources/useAmplifyResources";

interface LandingPreferenceProps {
  userReducer: UserState;
  ON_UPDATE_EVENTPREFERENCES: Function;
}

export const _LandingPreferenceScreen: React.FC<LandingPreferenceProps> = (
  props
) => {
  const { ON_UPDATE_EVENTPREFERENCES, userReducer } = props;

  const [selectedTags, setSelectedTags] = useState<Array<CATEGORY>>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function nextScreen() {
    ON_UPDATE_EVENTPREFERENCES(selectedTags);
    navigation.navigate("LandingLocationScreen");
    // navigation.goBack();
  }

  const handleSelectionMultiple = (item: CATEGORY) => {
    if (selectedTags.includes(item)) {
      setSelectedTags(selectedTags.filter((_item: CATEGORY) => _item !== item));
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
          data={Object.values(CATEGORY)}
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
              <Text>{item.item}</Text>
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
          <Text style={styles.footerButtonText}>Confirm</Text>
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
  ON_UPDATE_EVENTPREFERENCES,
})(_LandingPreferenceScreen);

export default LandingPreferenceScreen;
