import { StyleSheet, View } from "react-native";
import React from "react";
import EmptyCart from "../components/EmptyCart";
import images from "../constants/images";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  const handleProducts = () => {
    navigation.navigate("Products");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <EmptyCart
          placeholder="Thank you for Your Purchase"
          image={images.checkedsuccess}
          buttonText="Continue Shopping"
          click={handleProducts}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
