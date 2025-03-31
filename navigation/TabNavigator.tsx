import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Ícones para a navbar
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import RestaurantsList from "../pages/RestaurantsList";
import RestaurantDetails from "../pages/RestaurantDetails";
import SplashPage from "../pages/SplashPage";
import EventsPage from "../pages/EventsPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const RestaurantsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="RestaurantsList" component={RestaurantsList} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    );
  };

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Restaurants") {
              iconName = "restaurant";
            } else if (route.name=== "Events") {
                iconName = "musical-notes";
            } else {
              iconName = "ellipse";
            }
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff5733", // Cor do ícone ativo
          tabBarInactiveTintColor: "gray",
          headerShown: false, // Oculta a barra superior
        })}
      >
        <Tab.Screen name="Events" component={EventsPage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Restaurants" component={RestaurantsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
