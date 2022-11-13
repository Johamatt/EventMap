import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { Button } from "@rneui/base";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";


export const ActivitiesListPreferencesBtn: React.FC = () => {
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
      onPress={() => navigation.navigate("LandingPreferenceScreen")}
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
