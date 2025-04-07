import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import colors from "../styles/colors";
import { ShoppingCart } from "lucide-react-native"; // ← aqui!
import appData from "../storage/appData";
import { saveCart, loadCart } from "../storage/cartStorage";

type RestaurantMenuItemRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantMenuItem"
>;

export default function RestaurantMenuItem() {
  const route = useRoute<RestaurantMenuItemRouteProp>();
  const { menuItem } = route.params;

  const handleAddToCart = async () => {
    try {
      const currentCart = await loadCart();
  
      // Verifica se o item já está no carrinho (comparando pelo nome ou ID)
      const existingIndex = currentCart.findIndex(
        (item) => item.name === menuItem.name
      );
  
      let updatedCart = [...currentCart];
  
      if (existingIndex !== -1) {
        // Item já existe → incrementa a quantidade
        updatedCart[existingIndex].quantity += 1;
      } else {
        // Novo item → adiciona com quantity: 1
        updatedCart.push({ ...menuItem, quantity: 1 });
      }
  
      await saveCart(updatedCart);
      alert("Item adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };
  
  

  return (
    <ScrollView style={styles.container}>
      {menuItem.image ? (
        <Image source={{ uri: menuItem.image }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <Text style={styles.title}>{menuItem.name}</Text>
      <Text style={styles.description}>{menuItem.description}</Text>
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      {menuItem.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          - {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Quantidade:</Text>
      <Text style={styles.quantity}>{menuItem.quantity}</Text>
      <Text style={styles.price}>Preço: R$ {menuItem.price.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart()}
      >
        <View style={styles.buttonContent}>
          <ShoppingCart color={colors.buttonText} size={18} />
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.lightGrey,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 10,
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: 20,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 50,
    width: "100%",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});
