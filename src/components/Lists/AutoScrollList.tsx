import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/types";

const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

interface AutoScrollListProps {
  data: { id: string; image: string }[];
}

export const AutoScrollList: React.FC<AutoScrollListProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { width: screenWidth } = Dimensions.get("window"); // get the device screen width

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ y: nextIndex * screenWidth }); // assuming each image has a height of 200
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [currentIndex, data.length]); // add data.length as a dependency

  return (
    <ScrollView ref={scrollViewRef} horizontal={true}>
      {data.map((value, index) => (
        <TouchableOpacity
          key={value.id}
          // onPress={() => navigation.navigate("EventModal", { id: value.id })}
        >
          <Image
            resizeMode="contain"
            key={value.id}
            source={{ uri: value.image }}
            style={{ height: 300, width: screenWidth }} // set the width to the device screen width
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AutoScrollList;
