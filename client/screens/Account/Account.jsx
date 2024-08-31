import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomHeader from "../../components/Layout/CustomHeader";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../Data/UserData";

const Account = () => {
  return (
    <>
      <CustomHeader title="Account" />
      <Layout>
        <View style={styles.continer}>
          <Image source={{ uri: userData.profilePic }} style={styles.img} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={styles.name}>HI {userData.name} 👋</Text>
            <Text style={styles.email}>{userData.email}</Text>
            <Text style={styles.email}>{userData.contact}</Text>
          </View>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  continer: {
    marginVertical: 20,
  },
  img: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    color: "#fff",
    fontSize: 20,
  },
  email: {
    color: "#ffffff",
    
  },
});

export default Account;
