import React from "react";
import { CATEGORY } from "../../API";
import { StyleSheet, View, Text } from "react-native";
import Layout from "../../constants/Layout";
import { ListIconDynamoDB } from "../Icon/ListIconDynamoDB";
import Colors from "../../constants/Colors";

interface CategoriesListProps {
  category: CATEGORY;
}

export const CategoryCard: React.FC<CategoriesListProps> = (props) => {
  const category: CATEGORY = props.category;

  return (
    <View style={{ alignItems: "center" }}>
      <ListIconDynamoDB data={[category]} />
      <Text>{category}</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
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
