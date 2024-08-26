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

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please Enter The Email or Password");
    }
    navigation.navigate("home");
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
          value={email}
          setValue={setEmail}
        />
        <InputBox
          placeholder={"Password"}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.loginbtn} onPress={handleLogin}>
            <Text style={styles.logintext}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.text}>Account</Text>
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