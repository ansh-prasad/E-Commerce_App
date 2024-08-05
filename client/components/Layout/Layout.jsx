import { View, Text, StatusBar , StyleSheet } from "react-native";
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
  footer:{
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    // borderWidth: 1,
    // borderColor: "#232323",
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "#232323",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,


  }
})


export default Layout;
