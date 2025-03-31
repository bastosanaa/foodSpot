import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appData from "../storage/appData";
import { NavigationProps, Restaurant } from "../types/types";
import colors from "../styles/colors";

export default function RestaurantsList() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <FlatList
        data={appData.stores}
        keyExtractor={(item) => item.name}
        renderItem={({ item }: { item: Restaurant }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("RestaurantDetails", { restaurant: item })}
          >
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: colors.grey,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    elevation: 3,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});
