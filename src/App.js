import React from "react";
import { HomeScreen, DetailScreen, CommitDetails, CommitHash } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f8ff78"
          },
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Commit" component={CommitDetails} />
        {/* <Stack.Screen name="Hash" component={CommitHash} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
