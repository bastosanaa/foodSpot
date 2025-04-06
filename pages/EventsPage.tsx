import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import appData from "../storage/appData";
import { NavigationProps } from "../types/types";
import colors from "../styles/colors";

export default function EventsPage() {
  const navigation = useNavigation<NavigationProps>();

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir link:", err)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Eventos do FoodPark</Text>
      </View>
      <FlatList
        data={appData.events} // Pegando os eventos do appData
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventDay}>{item.day}</Text>
            <Text style={styles.eventTitle}>{item.event}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => openLink(item.video)}
            >
              <Text style={styles.buttonText}>Assistir Vídeo</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    backgroundColor: colors.background,
    alignItems: "center",
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
    marginLeft: 0,
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
  eventCard: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  eventDay: { fontSize: 16, fontWeight: "bold", color: colors.primary },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: colors.buttonText, fontWeight: "bold" },
});
