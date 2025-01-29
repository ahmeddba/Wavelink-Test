import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";


const products = [
  { id: "1", title: "Product 1", description: "This is product 1", image: require("../../assets/images/prd1.webp") },
  { id: "2", title: "Product 2", description: "This is product 2", image: require("../../assets/images/prd2.webp") },
  { id: "3", title: "Product 3", description: "This is product 3", image: require("../../assets/images/prd3.webp") },
];

export default function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ProductDetails", { product: item })} // Pass the full product object
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#6c757d",
  },
});
