import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NavigationProps, RootStackParamList } from "../types/types";
import colors from "../styles/colors";

type RestaurantDetailsRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;

export default function RestaurantDetails() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RestaurantDetailsRouteProp>();
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.logo }} style={styles.logo} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("RestaurantMenu", { restaurant: restaurant })
        }
      >
        <Text style={styles.buttonText}> Ver Cardápio </Text>
      </TouchableOpacity>
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
    backgroundColor: colors.background,
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
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: { color: colors.buttonText, fontSize: 16, fontWeight: "bold" },
});
