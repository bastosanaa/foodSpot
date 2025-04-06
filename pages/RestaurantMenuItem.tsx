import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import colors from "../styles/colors";
import appData from "../storage/appData";

// filepath: /home/nascido/Repos/UFSC_4fase/Embarcados/A01/foodSpot/pages/RestaurantMenuItem.tsx

type RestaurantMenuItemRouteProp = RouteProp<RootStackParamList, "RestaurantMenuItem">;

export default function RestaurantMenuItem() {
    const route = useRoute<RestaurantMenuItemRouteProp>();
    const { menuItem } = route.params;

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
                onPress={() => {}}
            >
                <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
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
      buttonText: {
        color: colors.buttonText,
        fontSize: 16,
        fontWeight: "bold",
      },
});