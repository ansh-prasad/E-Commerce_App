import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomHeader from "../../components/Layout/CustomHeader";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../Data/UserData";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
            <Text style={styles.name}>HI {userData.name}</Text>
            <Text style={styles.email}>{userData.email}</Text>
          </View>

          <View style={styles.btncontainer}>
            <Text style={styles.btnText}>Account Setting</Text>
          </View>

          <View style={styles.details}>
            <TouchableOpacity style={styles.btn}>
              <Icon style={styles.btnI} name="account-edit" />
              <Text style={styles.btnT}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <TouchableOpacity style={styles.btn}>
              <Icon style={styles.btnI} name="store-search" />
              <Text style={styles.btnT}>My Orders</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <TouchableOpacity style={styles.btn}>
              <Icon style={styles.btnI} name="bell-badge" />
              <Text style={styles.btnT}>Notification</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <TouchableOpacity style={styles.btn}>
              <Icon style={styles.btnI} name="account-tie-hat" />
              <Text style={styles.btnT}>Admin Panel</Text>
            </TouchableOpacity>
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
    color: "#CCCCCC",
  },
  btncontainer: {
    padding: 10,
    backgroundColor: "#FFE34C",
    margin: 10,
    marginVertical: 20,
    marginHorizontal: 100,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  details: {
    padding: 5,
    backgroundColor: "#323232",
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal: 80,
    
    
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent:"center"
  },
  btnT: {
    fontSize: 17,
    marginRight: 10,
    color: "white"
  },
  btnI: {
    fontSize: 23,
    marginRight: 10,
    color: "white"
  },
});

export default Account;
