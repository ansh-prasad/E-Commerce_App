import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#000000", 
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "#000000" }, 
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
