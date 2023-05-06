import React from "react";
import StackNavigator from "./components/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { View,SafeAreaView,Platform,StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={{marginTop:Platform.OS=="android"?StatusBar.currentHeight:0}}/>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </View>
  );
}
