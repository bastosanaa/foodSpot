import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../styles/colors";
import { ShoppingCart, Trash2 } from "lucide-react-native";
import { loadCart, saveCart, clearCart } from "../storage/cartStorage";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useFocusEffect(
    useCallback(() => {
      const fetchCart = async () => {
        const storedCart = await loadCart();
        setCartItems(storedCart);
      };

      fetchCart();
    }, [])
  );

  const removeFromCart = async (indexToRemove: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(indexToRemove, 1);
    setCartItems(updatedCart);
    await saveCart(updatedCart);
  };

  const handleCheckout = async () => {
    await clearCart();
    setCartItems([]);
    Alert.alert("Pedido Enviado", "Seu pedido foi enviado!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <ShoppingCart color={colors.primary} size={28} />
        <Text style={styles.title}>Meu Carrinho</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>Qtd: {item.quantity}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)} {item.quantity > 1 ? `x${item.quantity}`: ""}</Text>
              <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.removeButton}>
                <Trash2 size={18} color={colors.red} />
                <Text style={styles.removeText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Seu carrinho está vazio.</Text>}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 100,
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: colors.grey,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    marginLeft: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  itemQuantity: {
    color: colors.textSecondary,
  },
  itemPrice: {
    fontWeight: "bold",
    color: colors.primary,
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 8,
  },
  removeText: {
    color: colors.red,
    marginLeft: 6,
    fontSize: 14,
  },
  empty: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 30,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingTop: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});
