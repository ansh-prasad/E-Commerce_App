import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../components/Layout/CustomHeader";
import { userData } from "../../Data/UserData";
import InputBox from "../../components/Form/InputBox";

const Profile = ({navigation}) => {
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [phonenumber, setPhonenumber] = useState(userData.contact);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [profilePic, setProfilePic] = useState(userData.profilePic);

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !phonenumber || !city) {
      return alert("Please Enter All Data");
    }
    alert("Account Update Successfully");
    navigation.navigate("account");
  };

  return (
    <>
      <CustomHeader title="Edit Profile" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgc}>
            <Image style={styles.img} source={{ uri: profilePic }} />
          </View>
          <View style={styles.inputbox}>
            <InputBox
              value={name}
              setValue={setName}
              placeholder={"Name"}
              autoComplete={"name"}
            />
            <InputBox
              value={email}
              setValue={setEmail}
              placeholder={"Email"}
              autoComplete={"email"}
            />
            <InputBox
              value={password}
              setValue={setPassword}
              placeholder={"Password"}
              secureTextEntry={true}
            />
            <InputBox
              value={phonenumber}
              setValue={setPhonenumber}
              placeholder={"Phone Number"}
              autoComplete={"tel"}
            />
            <InputBox
              value={address}
              setValue={setAddress}
              placeholder={"Address"}
              autoComplete={"address-line1"}
            />
            <InputBox
              value={city}
              setValue={setCity}
              placeholder={"City"}
              autoComplete={"country"}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
              <Text style={styles.text}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imgc: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  inputbox: {
    marginTop: 50,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#FFE34C",
    padding: 10,
    marginHorizontal: "29%",
    borderRadius: 30,
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },
});
export default Profile;
