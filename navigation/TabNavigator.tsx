import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import RestaurantsList from "../pages/RestaurantsList";
import RestaurantDetails from "../pages/RestaurantDetails";
import RestaurantMenu from "../pages/RestaurantMenu";
import RestaurantMenuItem from "../pages/RestaurantMenuItem";
import SplashPage from "../pages/SplashPage";
import EventsPage from "../pages/EventsPage";
import colors from "../styles/colors";
import CartPage from "../pages/CartPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const RestaurantsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { 
          backgroundColor: colors.background, 
          borderBottomColor: colors.lightGrey, 
          borderBottomWidth: 1, 
        },
        headerTintColor: colors.lightGrey, 
      }}
    >
      <Stack.Screen 
        name="RestaurantsList" 
        component={RestaurantsList} 
        options={{ 
          headerShown: false,
          title: ""
        }} 
      />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ title: "" }} />
      <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} options={{ title: "" }} 
      />
      <Stack.Screen name="RestaurantMenuItem" component={RestaurantMenuItem} options={{ title: "" }} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Restaurantes") {
              iconName = "restaurant";
            } else if (route.name === "Eventos") {
              iconName = "musical-notes";
            } else if(route.name === "Carrinho"){
              iconName = "cart"
            } else{
              iconName = "ellipse";
            }
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary, 
          tabBarInactiveTintColor: colors.lightGrey,
          tabBarStyle: { backgroundColor: colors.background , borderColor: colors.grey}, 
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Eventos" component={EventsPage} />
        <Tab.Screen name="Restaurantes" component={RestaurantsStack}/>
        <Tab.Screen name="Carrinho" component={CartPage} />
      </Tab.Navigator>
  );
};

export default TabNavigator;
