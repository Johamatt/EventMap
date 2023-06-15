import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
interface SliderComponentProps {
  onValueChange: (value: number) => void;
}

const RadiusSlider: React.FC<SliderComponentProps> = ({ onValueChange }) => {
  const [value, setValue] = useState<number>(1);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
    onValueChange(newValue); // Call the callback function with the new value
  };

  return (
    <View>
      <Slider
        maximumTrackTintColor={"white"}
        minimumTrackTintColor={"red"}
        thumbTintColor={"red"}
        style={{ width: "80%", alignSelf: "center" }}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={value}
        onValueChange={handleValueChange}
      />
    </View>
  );
};

export default RadiusSlider;
