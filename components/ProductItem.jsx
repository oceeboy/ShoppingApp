import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({ item, onAdd }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {item.photos.length > 0 && (
          <Image
            source={{
              uri: `https://api.timbu.cloud/images/${item.photos[0].url}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.current_price[0].NGN[0]}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onAdd(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",

    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#fff",
    marginVertical: 10,
    height: 300,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  price: {
    fontSize: 15,
    color: "black",
    fontWeight: "500",
  },
  button: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#4682A9",
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#F6F4EB",
  },
});
