import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />

      <View>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center", 
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "#232323",
    borderRadius: 50,
    marginBottom: 5,
  },
});


export default Layout;
