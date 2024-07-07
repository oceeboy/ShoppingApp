import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const CheckoutItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://api.timbu.cloud/images/${item.photos[0].url}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.current_price[0].NGN[0]}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRemove(item.id)}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    borderBottomWidth: 2,
    borderBottomColor: "#CDCDCD",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemDetails: {
    flexDirection: "row",
    width: "70%",
    padding: 10,
    gap: 5,
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  image: {
    width: "99%",
    height: "99%",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  itemName: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
});
