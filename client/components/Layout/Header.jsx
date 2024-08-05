import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" style={styles.searchIcon} />

        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search"
          placeholderTextColor="#8E8E93"
        />
        <View style={styles.searchContainerIcon}>
          <Text style={styles.text}>Search</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 20,
    borderBottomColor: "#D7D7D7",
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    height: 56,
  },
  searchContainerIcon: {
    margin: 5,
    backgroundColor: "#FFE34C",
    height: 40,
    width: 80,
    borderRadius: 17,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 14,
    fontWeight: "1.5",
  },
  searchIcon: {
    color: "#ffffff",
    fontSize: 22,
    marginLeft: 15,
  },
  inputBox: {
    flex: 1,
    fontSize: 17,
    color: "#000000",
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
    color: "#ffffff",
  },
});
