import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../context/CartContext";
import ProductItem from "../components/ProductItem";
// import { products } from "../constants";
import icons from "../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { getProducts } from "../api/apiService";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const { cart, addToCart, getItemCount } = useContext(CartContext);

  const navigation = useNavigation();

  const handleCheckout = () => {
    navigation.navigate("Checkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity
          style={styles.cartBtnContainer}
          onPress={handleCheckout}
        >
          <Image
            source={icons.carticon}
            style={styles.image}
            resizeMode="contain"
          />

          <View
            style={
              cart.length === 0
                ? styles.cartBtnContainerNotactive
                : styles.cartBtnTextContainer
            }
          >
            <Text style={styles.cartBtnText}>{getItemCount()}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {isLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator color="green" size="large" />
            </View>
          ) : error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : (
            <View style={styles.grid}>
              {products.map((item) => (
                <ProductItem key={item.id} item={item} onAdd={addToCart} />
              ))}
            </View>
          )}
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>All Exclusive</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF3FB",
  },
  header: {
    alignItems: "flex-start",
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    width: 22,
    height: 22,
  },
  cartBtnContainer: {
    marginRight: 20,
    position: "relative",
  },
  scrollViewContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  footerContainer: {
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  cartBtnTextContainer: {
    position: "absolute",
    top: -10,
    bottom: 0,
    left: 10,
    backgroundColor: "#4682A9",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  cartBtnText: {
    fontSize: 15,
    lineHeight: 20,
    color: "white",
    fontWeight: "bold",
  },
  cartBtnContainerNotactive: {
    display: "none",
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
});
