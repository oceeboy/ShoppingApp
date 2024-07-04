import React, { useContext, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CartContext } from "../context/CartContext";
import CheckoutItem from "../components/CheckoutItem";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyCart from "../components/EmptyCart";
import { useNavigation } from "@react-navigation/native";
import images from "../constants/images";

export default function CheckoutScreen() {
  const { cart, removeFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);

  const totalPrice = useMemo(() => getTotalPrice(), [cart]);
  const navigation = useNavigation();
  const handlePayment = () => {
    navigation.navigate("OrderSuccess");
    clearCart();
  };
  const handleProducts = () => {
    navigation.navigate("Products");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF3FB" }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Checkout</Text>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        >
          <View>
            {cart.length === 0 ? (
              <View style={styles.emptyCartContainer}>
                <EmptyCart
                  placeholder="Your cart is empty"
                  image={images.emptycart}
                  buttonText="Continue Shopping"
                  click={handleProducts}
                />
              </View>
            ) : (
              cart.map((item) => (
                <CheckoutItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))
            )}
          </View>
          <View>
            {cart.length === 0 ? (
              <View />
            ) : (
              <View style={styles.footer}>
                <Text style={styles.totalText}>
                  Total: ${totalPrice.toFixed(2)}
                </Text>
                <TouchableOpacity style={styles.button} onPress={handlePayment}>
                  <Text style={styles.buttonText}>Click to Pay</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAF3FB",
    padding: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4682A9",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F6F4EB",
  },
  scrollViewContainer: {
    paddingBottom: 80,
    marginBottom: 10,
    justifyContent: "center",
  },
  emptyCartContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: "50%",
  },
});
