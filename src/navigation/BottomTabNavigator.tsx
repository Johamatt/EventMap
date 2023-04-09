import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import ShopScreen from "../screens/User/BottomNav/ShopScreen";
import HomeScreen from "../screens/User/BottomNav/homescreen/HomeScreen";
import MapScreen from "../screens/User/BottomNav/MapScreen";
import UserProfileScreen from "../screens/User/BottomNav/UserProfileScreen";

export function BottomTabNavigator(BottomTab: any): React.ComponentType<any> {
  return () => (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgba(34,36,40,1)",
          height: 50,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }: { focused: boolean }) => {
            const color = focused ? Colors.light.primary : "white";
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen} // MapScreen
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            const icon = focused ? Colors.light.primary : "white";
            return <Feather name="map" size={24} color={icon} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,
          title: "Shop",

          tabBarIcon: ({ focused }: { focused: boolean }) => {
            const color = focused ? Colors.light.primary : "white";
            return <Feather name="shopping-bag" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            const color = focused ? Colors.light.primary : "white";
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
