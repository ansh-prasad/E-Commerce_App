import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from "@react-navigation/native";

const Footer = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.menuContainer, route.name == "home" && styles.active]}
        onPress={() => alert("Home")}
      >
        <Icon
          name="home-outline"
          style={[styles.icon, route.name == "home" && styles.activeicon]}
        />
        {/* <Text style={styles.iconText}>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, route.name == "Cart" && styles.active]}
        onPress={() => alert("Cart")}
      >
        <Icon
          name="cart-outline"
          style={[styles.icon, route.name == "Cart" && styles.activeicon]}
        />
        {/* <Text style={styles.iconText}>Cart</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, route.name == "Account" && styles.active]}
        onPress={() => alert("Account")}
      >
        <Icon
          name="account-circle-outline"
          style={[styles.icon, route.name == "Account" && styles.activeicon]}
        />
        {/* <Text style={styles.iconText}>Account</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuContainer,
          route.name == "Notification" && styles.active,
        ]}
        onPress={() => alert("Notification")}
      >
        <Icon
          name="bell-outline"
          style={[
            styles.icon,
            route.name == "Notification" && styles.activeicon,
          ]}
        />
        {/* <Text style={styles.iconText}>Notification</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuContainer, route.name == "logout" && styles.active]}
        onPress={() => alert("logout")}
      >
        <Icon
          name="logout"
          style={[styles.icon, route.name == "logout" && styles.activeicon]}
        />
        {/* <Text style={styles.iconText}>Home</Text> */}
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
  // iconText: {
  //   color: "#000000",
  //   fontSize: 10,
  // },
  active: {
    backgroundColor: "#FFE34C",
    width: 43,
    height: 43,
    borderRadius: 50,
  },
  activeicon: {
    color: "black",
  },
});

export default Footer;
