import React from "react";
import PopularScreen from "../screens/Popular";
import RecommendationScreen from "../screens/Recommendation";
import LikedScreen from "../screens/Liked";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: RFValue(12), fontFamily: "monospace" },
        tabBarItemStyle: { borderWidth: 1, borderColor: "white" },
        tabBarStyle: { backgroundColor: "#182854" },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Recommended" component={RecommendationScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
  );
}
