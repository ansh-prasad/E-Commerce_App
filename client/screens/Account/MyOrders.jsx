import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomHeader from "../../components/Layout/CustomHeader";
import { orderData } from "../../Data/OrderData";
import Orderitem from "../../components/Form/Orderitem";

const MyOrders = () => {
  return (
    <>
      <CustomHeader title="My Orders" />
      <View style={styles.container}>
        <ScrollView>
          {orderData.map((order) => (
            <Orderitem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default MyOrders;
