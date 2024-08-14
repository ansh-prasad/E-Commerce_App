import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);
  const [alertMsg, setAlertMsg] = useState("");

  const handleAddQty = () => {
    if (qty === 5) {
      setAlertMsg("You Can't Add More Than 5");
      setTimeout(() => setAlertMsg(""), 3000);
      return;
    }
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: item?.imageUrl }} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item?.name}</Text>

          <View style={styles.pcontainer}>
            <Text style={styles.price}>{item?.price}</Text>

            <View style={styles.qtyContainer}>
              <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
                <Text style={styles.btnQtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{qty}</Text>
              <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                <Text style={styles.btnQtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {alertMsg ? (
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{alertMsg}</Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1.5,
          marginHorizontal: "10%",
          paddingTop: 10
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 20,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    marginHorizontal: "10%",
    color: "white",
  },
  pcontainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  price: {
    marginRight: "20%",
    color: "white",
    fontSize: 18,
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnQty: {
    backgroundColor: "#FFE34C",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  btnQtyText: {
    fontSize: 20,
    color: "black",
  },
  qtyText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "white",
  },
  alertContainer: {
    position: "absolute",
    top: "30%",
    left: "20%",
    right: "20%",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  alertText: {
    color: "white",
    fontSize: 14,
  },
});

export default CartItem;
