import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import appData from "../storage/appData";
import colors from "../styles/colors";
import {
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react-native";

export default function HomePage() {

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir link:", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner */}
      <Image
        source={{ uri: appData.food_hall.image }}
        style={styles.banner}
      />

      {/* Nome e Endereço */}
      <Text style={styles.title}>{appData.food_hall.name}</Text>
      <View style={styles.row}>
        <MapPin color={colors.primary} size={20} />
        <Text style={styles.address}>{appData.food_hall.address}</Text>
      </View>

      {/* Botões de Contato */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink(appData.food_hall.map_location)}
      >
        <Text style={styles.buttonText}>Ver no Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink(`tel:${appData.food_hall.phone}`)}
      >
        <View style={styles.iconRow}>
          <Phone color={colors.buttonText} size={18} />
          <Text style={styles.buttonText}>Ligar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink(appData.food_hall.whatsapp)}
      >
        <View style={styles.iconRow}>
          <MessageCircle color={colors.buttonText} size={18} />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink(appData.food_hall.website)}
      >
        <View style={styles.iconRow}>
          <Globe color={colors.buttonText} size={18} />
          <Text style={styles.buttonText}>Website</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink(`mailto:${appData.food_hall.email}`)}
      >
        <View style={styles.iconRow}>
          <Mail color={colors.buttonText} size={18} />
          <Text style={styles.buttonText}>E-mail</Text>
        </View>
      </TouchableOpacity>

      {/* Redes Sociais */}
      <Text style={styles.socialTitle}>Redes Sociais</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          onPress={() => openLink(appData.food_hall.social_media.instagram)}
        >
          <Instagram color={colors.secondary} size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink(appData.food_hall.social_media.facebook)}
        >
          <Facebook color={colors.secondary} size={26} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
    backgroundColor: colors.background,
  },
  banner: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: colors.bannerBorder,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.textPrimary,
    textAlign: "center",
  },
  address: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
    marginLeft: 8,
    flexShrink: 1,
    // flex: 1
  },
  row: {
    flexDirection: "row",
    // alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingLeft: 35
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: colors.textPrimary,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
});
