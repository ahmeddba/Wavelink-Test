import React from "react";
import { View, Text, StyleSheet , Image} from "react-native";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params; // Retrieve the passed product

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
  },
});
