import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../../Data/ProductsData";

const Products = () => {
  const renderItem = ({ item }) => <ProductsCard p={item} />;

  return (
    <FlatList
      data={ProductsData}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "2%",
    marginTop: 13
  },
});

export default Products;
