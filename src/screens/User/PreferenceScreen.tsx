import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  store,
  ON_UPDATE_OPENINGHOURS_ONLY,
  UserState,
} from "../../Store";
import { connect } from "react-redux";
import { RootStackParamList } from "../../navigation/types";
import { CATEGORY } from "../../API";
import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";
import { Switch } from "@rneui/themed";
import { CategoryCard } from "../../components/Cards/CategoryCard";
import { Button, Divider } from "@rneui/base";
import Colors from "../../constants/Colors";

interface PreferenceScreenProps {
  ON_UPDATE_EVENTPREFERENCES: Function;
  preferences: Array<CATEGORY>;
  ON_UPDATE_OPENINGHOURS_ONLY: Function;
  showCurrentlyOpen: boolean;
  showAllCategories: boolean;
}

export const _PreferenceScreen: React.FC<PreferenceScreenProps> = (props) => {
  const [selectedTags, setSelectedTags] = useState<Array<CATEGORY>>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    ON_UPDATE_EVENTPREFERENCES,
    ON_UPDATE_OPENINGHOURS_ONLY,
    preferences,
    showCurrentlyOpen,
    showAllCategories,
  } = props;

  const [showOpenHours, setShowOpenHours] =
    useState<boolean>(showCurrentlyOpen);

  const [selectAllCategories, setSelectAllCategories] =
    useState<boolean>(showAllCategories);

  function nextScreen() {
    if (selectAllCategories) {
      ON_UPDATE_EVENTPREFERENCES(Object.values(CATEGORY));
    } else {
      ON_UPDATE_EVENTPREFERENCES(selectedTags);
    }
    ON_UPDATE_OPENINGHOURS_ONLY(showOpenHours);

    navigation.goBack();
  }

  const handleSelectionMultiple = (item: CATEGORY) => {
    if (selectedTags.includes(item)) {
      setSelectedTags(selectedTags.filter((_item: CATEGORY) => _item !== item));
    } else {
      setSelectedTags((selectedTags) => [...selectedTags, item]);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.15,
          justifyContent: "center",
        }}
      >
        <Button
          title="Go back"
          color={"white"}
          icon={{
            name: "arrow-back-outline",
            type: "ionicon",
            size: 25,
            color: "black",
          }}
          onPress={() => nextScreen()}
          titleStyle={{ fontWeight: "700", color: "black" }}
          containerStyle={{
            width: Layout.window.width / 3,
            justifyContent: "center",
            backgroundColor: "white",
          }}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          flex: 0.3,
        }}
      >
        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.optionTitle}>Open hours</Text>
          <View style={styles.switchBox}>
            <Text>Show currently open</Text>

            <Switch
              style={{ bottom: 20, marginLeft: 10 }}
              value={showOpenHours}
              onValueChange={(value) => setShowOpenHours(value)}
            />
          </View>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.optionTitle}>Categories</Text>
          <View style={styles.switchBox}>
            <Text>Select all categories</Text>

            <Switch
              style={{ bottom: 20, marginLeft: 10 }}
              value={selectAllCategories}
              onValueChange={(value) => setSelectAllCategories(value)}
            />
          </View>
        </View>

        <View style={styles.switchBox}></View>
      </View>

      <View style={{ flex: 0.7 }}>
        <Divider />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={selectAllCategories ? styles.selectAll : undefined}
            pointerEvents={selectAllCategories ? "none" : "auto"}
          >
            <FlatList
              data={Object.values(CATEGORY)}
              numColumns={3}
              style={{}}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={
                    selectedTags.includes(item)
                      ? styles.checked
                      : styles.unchecked
                  }
                  disabled={selectAllCategories}
                  onPress={() => handleSelectionMultiple(item)}
                >
                  <CategoryCard category={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
      {/* Content Ends */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  preferences: state.UserReducer.preferences,
  showCurrentlyOpen: state.UserReducer.showCurrentlyOpen,
  showAllCategories: state.UserReducer.showAllCategories,
});

const PreferenceScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
  ON_UPDATE_OPENINGHOURS_ONLY,
})(_PreferenceScreen);

export default PreferenceScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  selectAll: {
    backgroundColor: Colors.light.selected,
    pointerEvents: "none",
  },

  switchBox: {
    alignContent: "center",

    flexDirection: "row",
  },

  header: {
    paddingBottom: 5,
  },

  optionTitle: {
    color: "gray",
  },

  checked: {
    backgroundColor: Colors.light.selected,
    width: Layout.window.width / 3,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
  },
  unchecked: {
    width: Layout.window.width / 3,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderColor: "gray",
    borderWidth: 0.5,
  },
});
