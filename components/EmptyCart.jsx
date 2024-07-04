import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const EmptyCart = ({ placeholder, image, buttonText, click }) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyCartDetails}>
        <View style={styles.imagecontainer}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
        <Text style={styles.text}>{placeholder}</Text>
        <TouchableOpacity
          style={styles.continueShoppingBtn}
          onPress={() => click()}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  emptyCartDetails: {
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  imagecontainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  continueShoppingBtn: {
    backgroundColor: "#4682A9",
    height: 65,
    width: 200,
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    lineHeight: 25,
  },
});
