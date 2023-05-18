import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import DateOptionsList from "../../../components/Lists/DateOptionsList";
import { CategoryOptionsList } from "../../../components/Lists/CategoryOptionsList";
import RadiusSlider from "../../../components/Sliders/RadiusSlider";

interface UserPreferenceModalProps {
  userOptions: userOptionsAsyncStorage | undefined;
}

const _UserPreferenceModal: React.FC<UserPreferenceModalProps> = ({
  userOptions,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    userOptions?.selectedDate || "All"
  );
  const [selectedCategories, setSelectedCategories] = useState<Array<CATEGORY>>(
    userOptions?.categories || []
  );
  const [selectAllCategories, setSelectAllCategories] = useState<boolean>(
    userOptions?.categories.length === 0 ? true : false
  );

  const [selectedRadius, setSelectedRadius] = useState<number>(
    userOptions?.radius || 10
  );

  console.log(userOptions);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // <----- Handle Select Press ------>
  const handleDateSelectPress = (value: string) => {
    setSelectedDate(value);
  };

  const handleSliderChange = (value: number) => {
    setSelectedRadius(value);
  };

  const handleCategorySelectPress = (label: CATEGORY) => {
    console.log(selectedCategories);
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
      radius: selectedRadius,
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

      <DateOptionsList
        selectedDate={selectedDate}
        handleDateSelectPress={handleDateSelectPress}
      />

      <View style={styles.buttonGroupHeader}>
        <MaterialCommunityIcons name="lightning-bolt" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Categories</Text>
      </View>

      <CategoryOptionsList
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleCategorySelectPress={handleCategorySelectPress}
        selectAllCategories={selectAllCategories}
        setSelectAllCategories={setSelectAllCategories}
      />

      <RadiusSlider onValueChange={handleSliderChange} />

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

  submitButtonText: {
    color: "black",
    fontSize: 16,
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
