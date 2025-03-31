import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appData from "../storage/appData";
import { NavigationProps } from "../types/types";

export default function HomePage() {
  const navigation = useNavigation<NavigationProps>();

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <View style={styles.container}>
      {/* Banner */}
      {/* <Image source={require("../assets/foodhall-banner.jpg")} style={styles.banner} /> */}

      {/* Nome e Endereço */}
      <Text style={styles.title}>{appData.food_hall.name}</Text>
      <Text style={styles.address}>{appData.food_hall.address}</Text>

      {/* Botões de Contato */}
      <TouchableOpacity style={styles.button} onPress={() => openLink(appData.food_hall.map_location)}>
        <Text style={styles.buttonText}>📍 Ver no Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink(`tel:${appData.food_hall.phone}`)}>
        <Text style={styles.buttonText}>📞 Ligar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink(appData.food_hall.whatsapp)}>
        <Text style={styles.buttonText}>💬 WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink(appData.food_hall.website)}>
        <Text style={styles.buttonText}>🌍 Website</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink(`mailto:${appData.food_hall.email}`)}>
        <Text style={styles.buttonText}>✉️ E-mail</Text>
      </TouchableOpacity>

      {/* Redes Sociais */}
      <Text style={styles.socialTitle}>Redes Sociais</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink(appData.food_hall.social_media.instagram)}>
          <Text style={styles.socialLink}>📷 Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(appData.food_hall.social_media.facebook)}>
          <Text style={styles.socialLink}>📘 Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: "#fff", alignItems: "center" },
  banner: { width: "100%", height: 180, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  address: { fontSize: 16, color: "#555", marginBottom: 20, textAlign: "center" },
  button: { backgroundColor: "#ff5733", padding: 10, borderRadius: 8, marginBottom: 10, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  socialTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  socialContainer: { flexDirection: "row", gap: 15, marginTop: 10 },
  socialLink: { fontSize: 16, color: "#007AFF" },
});
