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
        <View style={styles.header}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Nossos Restaurantes</Text>
        </View>
      <FlatList
        data={appData.stores}
        keyExtractor={(item) => item.name}
        renderItem={({ item }: { item: Restaurant }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("RestaurantDetails", { restaurant: item })}
          >
            <Image source={{ uri: item.logo }} style={styles.restaurantLogo} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
  restaurantLogo: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    flex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },  
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
    paddingLeft: 20, 
    paddingRight: 30
  },
});
