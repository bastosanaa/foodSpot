import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { NavigationProps, RootStackParamList } from "../types/types";
import colors from "../styles/colors";
import {
  Phone,
  Instagram,
  Facebook,
  Mail,
  ShoppingCart,
  MessageCircle,
} from "lucide-react-native";

type RestaurantDetailsRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;

export default function RestaurantDetails() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RestaurantDetailsRouteProp>();
  const { restaurant } = route.params;

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir link:", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: restaurant.logo }} style={styles.logo} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("RestaurantMenu", { restaurant: restaurant })
        }
      >
        <Text style={styles.buttonText}>Ver Cardápio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => openLink(restaurant.delivery_link)}
      >
        <ShoppingCart color={colors.primary} size={18} />
        <Text style={styles.buttonOutlineText}>Pedir via App de Entrega</Text>
      </TouchableOpacity>

      <View style={styles.infoGroup}>
        <View style={styles.infoRow}>
          <Phone color={colors.primary} size={18} />
          <Text style={styles.infoText}>{restaurant.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <MessageCircle color={colors.primary} size={18} />
          <TouchableOpacity onPress={() => openLink(restaurant.whatsapp)}>
          <Text style={styles.link}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Mail color={colors.primary} size={18} />
          <TouchableOpacity onPress={() => openLink(`mailto:${restaurant.email}`)}>
            <Text style={styles.link}>{restaurant.email}</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => openLink(restaurant.social_media.instagram)}>
            <Instagram color={colors.primary} size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(restaurant.social_media.facebook)}>
            <Facebook color={colors.primary} size={24} style={{ marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.textPrimary,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutline: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  buttonOutlineText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  infoGroup: {
    marginTop: 30,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    color: colors.textPrimary,
    fontSize: 15,
  },
  link: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "bold",
    marginLeft: 4,
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
});
