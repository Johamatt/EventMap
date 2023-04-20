import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ApplicationState } from "../../../Store/reducers";
import { connect } from "react-redux";
import { CATEGORY } from "../../../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userOptionsAsyncStorage } from "../../../types/storageType";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigationTypes";
import { store } from "../../../Store/store";

interface UserPreferenceModalProps {
  userOptions: userOptionsAsyncStorage | undefined;
}

const _UserPreferenceModal: React.FC<UserPreferenceModalProps> = ({
  userOptions,
}) => {
  const [selectedDate, setSelectedDate] = useState<String>(
    userOptions?.selectedDate || "All"
  );
  const [selectedCategories, setSelectedCategories] = useState<Array<CATEGORY>>(
    userOptions?.categories || []
  );
  const [selectAllCategories, setSelectAllCategories] = useState<boolean>(
    userOptions?.categories.length === 0 ? true : false
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dateButtons = [
    { label: "All", value: "All" },
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "This week", value: "This week" },
    { label: "This weekend", value: "This weekend" },
    { label: "Next week", value: "Next week" },
  ];

  const categoryButtonLabels: Array<CATEGORY> = [
    CATEGORY.CONCERT,
    CATEGORY.FESTIVAL,
    CATEGORY.EXPO,
    CATEGORY.SPORT,
    CATEGORY.GAMES,
    CATEGORY.PARTY,
    CATEGORY.TRIP,
    CATEGORY.STANDUP,
    CATEGORY.MUSEUM,
  ];

  // <--------- Render buttons ------->
  const renderDateButton = ({
    item,
  }: {
    item: { label: string; value: string };
  }) => {
    return (
      <TouchableOpacity
        onPress={() => handleDateSelectPress(item.value)}
        style={
          selectedDate === item.value ? styles.selectedButton : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderCategoryButton = ({ item }: { item: CATEGORY }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategorySelectPress(item)}
        style={
          selectedCategories.includes(item)
            ? styles.selectedButton
            : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item}</Text>
      </TouchableOpacity>
    );
  };
  //

  // <----- Handle Select Press ------>
  const handleDateSelectPress = (value: string) => {
    setSelectedDate(value);
  };

  const handleCategorySelectPress = (label: CATEGORY) => {
    const index = selectedCategories.indexOf(label);
    if (index > -1) {
      // Remove the label from the array if it's already selected
      setSelectedCategories([
        ...selectedCategories.slice(0, index),
        ...selectedCategories.slice(index + 1),
      ]);
    } else {
      setSelectedCategories([...selectedCategories, label]);
    }
    setSelectAllCategories(false);
  };
  //

  const handleSubmit = async () => {
    const jsonValue = JSON.stringify({
      categories: selectedCategories,
      selectedDate: selectedDate,
    } as userOptionsAsyncStorage);
    try {
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      store.dispatch({
        type: "ON_UPDATE_ASYNC_STORAGE",
        payload: jsonValue != null ? JSON.parse(jsonValue) : undefined,
      });

      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupHeader}>
        <FontAwesome name="calendar" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Date</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.value}
        data={dateButtons}
        renderItem={(item) => renderDateButton(item)}
        numColumns={3}
      />

      <View style={styles.buttonGroupHeader}>
        <MaterialCommunityIcons name="lightning-bolt" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Categories</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setSelectAllCategories(true);
          setSelectedCategories([]);
        }}
        style={[
          selectAllCategories === true ? styles.selectedButton : styles.button,
          { width: Dimensions.get("window").width - 10 },
        ]}
      >
        <Text style={styles.buttonLabel}>Select All</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={categoryButtonLabels}
        renderItem={(item) => renderCategoryButton(item)}
        numColumns={3}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userOptions: state.UserReducer.userOptions,
});

const UserPreferenceModal = connect(mapToStateProps)(_UserPreferenceModal);
export default UserPreferenceModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 20,
  },
  optionsTitle: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  datebuttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 40, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  selectedButton: {
    backgroundColor: "#f1c40f",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 40, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#1a1a1a",
    fontSize: 14,
    fontWeight: "bold",
  },

  buttonGroupHeader: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    alignContent: "center",
  },

  submitButton: {
    backgroundColor: "#f1c40f",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
