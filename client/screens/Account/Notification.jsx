import { View, Text } from "react-native";
import React from "react";
import CustomHeader from "../../components/Layout/CustomHeader";
import Layout from "../../components/Layout/Layout";


const Notification = () => {
  return (
    <>
      <CustomHeader title="Notification" />
      <Layout>
        <View style={{justifyContent:"center" , alignItems:"center" , height:"80%"}}>
            <Text style={{color:"#fff"}}>
                Opps ! You Dont Have Any Notofications
            </Text>
        </View>
      </Layout>
    </>
  );
};

export default Notification;
