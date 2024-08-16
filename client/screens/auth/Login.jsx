import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import LoginIcon from "../../assets/svg/LoginIcon";
import InputBox from "../../components/Form/InputBox";


const Login = () => {
  return (
    <View style={styles.container}>
      <LoginIcon />

      <InputBox placeholder={"Email"} autoComplete={"email"} />
      <InputBox placeholder={"Password"} />

      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
