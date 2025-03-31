import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import colors from "../styles/colors";

type RestaurantDetailsRouteProp = RouteProp<RootStackParamList, "RestaurantDetails">;

export default function RestaurantDetails() {
  const route = useRoute<RestaurantDetailsRouteProp>();
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.logo }} style={styles.logo} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: colors.textPrimary,
    backgroundColor: colors.background
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: colors.textPrimary,
  },
});
