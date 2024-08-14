import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/Layout/CustomHeader";
import Payment from "./Payment";
import Layout from "../components/Layout/Layout";

const Checkout = ({navigation}) => {

    const [showMessage, setShowMessage] = useState(false);
  
  const handelOnlin = () => {
    navigation.navigate("payment");
  }

  const handleCOD = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      navigation.navigate("home");
    }, 2000);
  };


  return (
    <Layout>
      <CustomHeader title="Check Out" />

      <View style={style.contaoner}>
        <Text style={style.heading}>Payment Options</Text>
        <Text style={style.price}>Total Amount : 1999</Text>
        <View style={style.paymentcard}>
          <Text style={style.paymentHeading}>Selet Your Payment Mode</Text>
          <TouchableOpacity style={style.paymentbtn} onPress={handleCOD}>
            <Text style={style.paymentText}>Cash On Delevery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.paymentbtn} onPress={handelOnlin}>
            <Text style={style.paymentText}>Online</Text>
          </TouchableOpacity>
        </View>
        {showMessage && (
          <View style={style.messageContainer}>
            <Text style={style.messageText}>Order Place Successfully</Text>
          </View>
        )}
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  contaoner: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  heading: {
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 30,
    color: "#fff",
  },
  price: {
    fontSize: 20,
    marginBottom: 15,
    color: "white",
  },
  paymentcard: {
    backgroundColor: "#323232",
    width: "80%",
    borderRadius: 20,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "#fff",
    marginBottom: 10,
  },
  paymentbtn: {
    backgroundColor: "#FFE34C",
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  paymentText: {
    color: "#000",
    textAlign: "center",
  },
  messageContainer: {
    position: "absolute",
    left: "40%",
    transform: [{ translateX: -50 }],
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    borderRadius: 20,
  },
  messageText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default Checkout;
