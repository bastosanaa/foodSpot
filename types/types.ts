import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomePage: undefined;
  RestaurantsList: undefined;
  RestaurantDetails: { restaurant: Restaurant};
  RestaurantMenu: { restaurant: Restaurant};
  RestaurantMenuItem: { menuItem: MenuItem};
};

export type Restaurant = {
  name: string;
  logo: string;
  description: string;
  phone: string;
  whatsapp: string;
  social_media: {
    instagram: string;
    facebook: string;
  };
  email: string;
  delivery_link: string;
  menu_link: string;
  menu: 
  MenuItem[];
};

export type MenuItem = {
  name: string;
    image: string;
    description: string;
    quantity: string;
    ingredients: string[];
    price: number;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type RestaurantDetailsRouteProp = RouteProp<RootStackParamList, "RestaurantDetails">;

  