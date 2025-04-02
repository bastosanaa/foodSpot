import React from "react";
import { TouchableOpacity, View, Text, Image, FlatList, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/types";
import colors from "../styles/colors";

// filepath: /home/nascido/Repos/UFSC_4fase/Embarcados/A01/foodSpot/pages/RestaurantMenu.tsx

type RestaurantMenuRouteProp = RouteProp<RootStackParamList, "RestaurantMenu">;

export default function RestaurantMenu() {
    const route = useRoute<RestaurantMenuRouteProp>();
    const { restaurant } = route.params;
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cardápio de {restaurant.name}</Text>
            <FlatList
                data={restaurant.menu}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("RestaurantMenuItem", { menuItem: item })}>
                        {item.image ? (
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                        ) : (
                            <View style={styles.placeholderImage} />
                        )}
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.textPrimary,
        marginBottom: 20,
        textAlign: "center",
    },
    menuItem: {
        flexDirection: "row",
        backgroundColor: colors.grey,
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    placeholderImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: colors.lightGrey,
    },
    itemDetails: {
        flex: 1,
        justifyContent: "center",
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.textPrimary,
    },
    itemDescription: {
        fontSize: 14,
        color: colors.textSecondary,
        marginVertical: 5,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.primary,
    },
});