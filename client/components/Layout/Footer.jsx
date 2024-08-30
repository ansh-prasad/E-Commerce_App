import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute, useNavigation } from "@react-navigation/native";


const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Function to determine if the route is active
  const isActive = (screenName) => route.name === screenName;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.menuContainer, isActive("home") && styles.active]}
        onPress={() => navigation.navigate("home")}
      >
        <Icon
          name="home-outline"
          style={[styles.icon, isActive("home") && styles.activeicon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, isActive("cart") && styles.active]}
        onPress={() => navigation.navigate("cart")}
      >
        <Icon
          name="cart-outline"
          style={[styles.icon, isActive("cart") && styles.activeicon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, isActive("account") && styles.active]}
        onPress={() => navigation.navigate("account")}
      >
        <Icon
          name="account-circle-outline"
          style={[styles.icon, isActive("account") && styles.activeicon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuContainer,
          isActive("Notification") && styles.active,
        ]}
        onPress={() => alert("Notification")}
      >
        <Icon
          name="bell-outline"
          style={[styles.icon, isActive("Notification") && styles.activeicon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, isActive("logout") && styles.active]}
        onPress={() => {
          alert("Logout Seccessfully"), navigation.navigate("login");
        }}
      >
        <Icon
          name="logout"
          style={[styles.icon, isActive("logout") && styles.activeicon]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 28,
    color: "#ECECEC",
  },
  active: {
    backgroundColor: "#FFE34C",
    width: 43,
    height: 43,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  activeicon: {
    color: "black",
  },
});

export default Footer;
