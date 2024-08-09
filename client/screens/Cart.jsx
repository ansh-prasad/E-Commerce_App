import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CartData } from "../Data/CartData";
import PriceTable from "../components/cart/PriceTable";
import Layout from "../components/Layout/Layout";
import CartItem from "../components/cart/CartItem";
import CustomHeader from "../components/Layout/CustomHeader";

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>
      <CustomHeader title="Cart" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.heading}>
          {cartItems?.length > 0
            ? `${cartItems?.length} Items`
            : `OOPS Your Cart Is EMPTY`}
        </Text>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1.5,
            marginHorizontal: "10%",
            marginTop: 10,
          }}
        />
        {cartItems?.length > 0 && (
          <>
            {cartItems?.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}

            <View style={styles.container}>
              <PriceTable style={styles.tax} title={"Tax"} price={18} />
              <PriceTable
                style={styles.shipping}
                title={"Shipping"}
                price={70}
              />

              <View style={styles.container1}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.text}>1999</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("checkout")}
            >
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20,
  },
  heading: {
    marginLeft: "10%",
    color: "white",
    marginTop: 10,
    fontSize: 18,
  },
  container: {
    marginTop: 20,
    marginHorizontal: "5%",
    color: "gray",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#c8f560",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "9%",
    marginBottom: 140,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
