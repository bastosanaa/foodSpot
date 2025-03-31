import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appData from "../storage/appData";
import { NavigationProps } from "../types/types";

export default function EventsPage() {
  const navigation = useNavigation<NavigationProps>();

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <View style={styles.container}>
      <Text>Página de eventos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: "#fff", alignItems: "center" },
  
});
