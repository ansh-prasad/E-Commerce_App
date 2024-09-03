import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Orderitem = ({ order }) => {
  return (
    <>
      <View>
        <Text style={styles.haddingt}>Order Details</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.text1}>Order Date</Text>
          <Text style={styles.text2}>{order.date}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text1}>Product Name</Text>
          <Text style={styles.text2}>{order.productInfo.name}</Text>
        </View>
        <View style={styles.info1}>
          <Text style={styles.text1}>Total Amount</Text>
          <Text style={styles.text2}>$ {order.totalAmount}</Text>
        </View>
      </View>
     
      <View style={styles.container}>
        <View style={styles.info1}>
          <Text style={styles.text1}>Order Status</Text>
          <Text style={styles.text2}>{order.status}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  haddingt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 20,
    marginTop: 20,
  },
  
  container: {
    backgroundColor: "#323232",
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,

    borderBottomWidth: 1,
    borderColor: "#515151",
    padding: 10,
  },
  info1: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,

    padding: 10,
  },
  text1: {
    color: "#D6D6D6",
    fontSize: 16,
    fontWeight: "800",
  },
  text2: {
    color: "#FFE34C",
    fontSize: 16,
    fontWeight: "800",
  },
});
export default Orderitem;
