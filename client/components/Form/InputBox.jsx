import { View, Text, TextInput , StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({
  autoComplete,
  placeholder,
  secureTextEntry,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoComplete={autoComplete}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20
    
  },
  input:{
    width:"80%",
    backgroundColor: "#323232",
    height: 50,
    marginLeft: 40,
    borderRadius: 20,
    color: "#fff",
    textAlign: "left",
    paddingLeft: 20, 
    
  },
})

export default InputBox;