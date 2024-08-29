import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LoginIcon from "../../assets/svg/RegisterIcon";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");


  const handleRegister = () => {
    if (!email || !password || !name  || !address || !phonenumber || !city) {
      return alert("Please Enter All Data");
    }
    alert("Account Created")
    navigation.navigate("login");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <LoginIcon />

        <InputBox
          placeholder={"Email"}
          autoComplete={"email"}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          placeholder={"Name"}
          autoComplete={"name"}
          value={name}
          setValue={setName}
        />
        <InputBox
          placeholder={"Password"}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <InputBox
          placeholder={"Phone Number"}
          autoComplete={"tel"}
          value={phonenumber}
          setValue={setPhonenumber}
        />
        <InputBox
          placeholder={"Address"}
          autoComplete={"address-line1"}
          value={address}
          setValue={setAddress}
        />
        <InputBox
          placeholder={"City"}
          autoComplete={"country"}
          value={city}
          setValue={setCity}
        />
        
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.loginbtn} onPress={handleRegister}>
            <Text style={styles.logintext}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.text}>Already Have An Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // alignItems: "center",
    justifyContent: "center",
  },
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginbtn: {
    backgroundColor: "#FFE34C",
    width: "40%",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
    marginVertical: 20,
  },
  logintext: {
    color: "#000",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  text: {
    color: "white",
  },
});

export default Register;