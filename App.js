import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as usePtsans,
  PTSans_400Regular,
} from "@expo-google-fonts/pt-sans";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area.components";
import { Ionicons } from "@expo/vector-icons";
import { restaurantRequest } from "./src/services/restaurants/restaurants.service";

const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restaurant: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const Settings = () => (
    <SafeArea>
      <Text> Settings </Text>
    </SafeArea>
  );
  const Map = () => (
    <SafeArea>
      <Text> Map </Text>
    </SafeArea>
  );


  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name]
    return {
      tabBarIcon: ({size, color}) => (
        <Ionicons name={iconName} size={size} color={color} />
      )
    }
  }

export default function App() {
  const [ptsansLoaded] = usePtsans({
    PTSans_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!ptsansLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
              tabBarOptions={{
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              }}
          >
            <Tab.Screen options={{headerShown: false}} name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen options={{headerShown: false}} name="Map" component={Map} />
            <Tab.Screen options={{headerShown: false}} name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

