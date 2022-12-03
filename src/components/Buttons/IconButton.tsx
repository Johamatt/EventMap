import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { Button, IconNode } from "@rneui/base";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";

interface IconButtonProps {
  title?: string;
  iconStyle?: IconNode;
  iconContainerStyle?: Object;
  titleStyle?: Object;
  buttonStyle?: Object;
  navigation?: any;
}

export const IconButton: React.FC = (IconButtonProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Button
      title="Edit Preferences"
      icon={{
        name: "options-outline",
        type: "ionicon",
        size: 15,
        color: "white",
      }}
      onPress={() => navigation.navigate("PreferenceScreen")}
      iconRight
      iconContainerStyle={{ marginLeft: 10 }}
      titleStyle={{ fontWeight: "700", color: "white" }}
      buttonStyle={{
        backgroundColor: Colors.light.tint,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 30,
      }}
      containerStyle={{
        width: Layout.window.width / 2,
      }}
    />
  );
};
