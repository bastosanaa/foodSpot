import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "@foodspot_cart";

export async function saveCart(cart: any[]) {
  try {
    const json = JSON.stringify(cart);
    await AsyncStorage.setItem(CART_KEY, json);
  } catch (error) {
    console.error("Erro ao salvar carrinho:", error);
  }
}

export async function loadCart(): Promise<any[]> {
  try {
    const json = await AsyncStorage.getItem(CART_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (error) {
    console.error("Erro ao carregar carrinho:", error);
    return [];
  }
}

export async function clearCart() {
  try {
    await AsyncStorage.removeItem(CART_KEY);
  } catch (error) {
    console.error("Erro ao limpar carrinho:", error);
  }
}
