import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { categoriesData } from "../../Data/CategoriesData";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map((item) => (
          <TouchableOpacity
            key={item._id}
            style={styles.catContainer}
            onPress={() => navigation.navigate(item.path)}
          >
            <View style={styles.iconContainer}>
              <Icon name={item.icon} style={styles.catIcon} />
            </View>
            <Text style={styles.catTitle}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    padding: 5,
    flexDirection: "row",
    borderTopColor: "#D7D7D7",
    borderTopWidth: 0.5,
    borderBottomColor: "#D7D7D7",
    borderBottomWidth: 0.5,
  },
  catContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  catIcon: {
    color: "#D7D7D7",
    fontSize: 30,
  },
  catTitle: {
    fontSize: 12,
    color: "#D7D7D7",
    textAlign: "center",
  },
});
