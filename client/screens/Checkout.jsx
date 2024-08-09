import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomHeader from "../components/Layout/CustomHeader";

const Checkout = () => {
  return (
    <View>
      <CustomHeader title="Check Out" />
      <Text>Payment Options</Text>
      <Text>Total Amount : 1999</Text>
      <View>
        <Text>Selet Your Payment Mode</Text>
        <TouchableOpacity>
          <Text>Cash On Delevery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Online</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
