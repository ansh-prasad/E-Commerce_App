import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PriceTable = ({ price, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    
  },
  text:{
    color:"white"
  }
});

export default PriceTable;
