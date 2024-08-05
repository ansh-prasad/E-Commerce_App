import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();
  const [showMessage, setShowMessage] = useState(false);

  const handleBtn = (id) => {
    navigation.navigate("productDetails", { _id: id });
  };

  const handleAddtocart = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => handleBtn(p._id)}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: p?.imageUrl }}
          style={styles.cardImg}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.cardTitle}>{p?.name}</Text>
      <View style={styles.priceButtonContainer}>
        <Text style={styles.cardPrice}>
          {"\u20B9"} {p?.price}
        </Text>
        <TouchableOpacity style={styles.Btn} onPress={handleAddtocart}>
          <Text>
            <Icon name="cart-heart" style={styles.catIcon} />
          </Text>
        </TouchableOpacity>
      </View>
      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Added to cart</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 8,
    width: "46%",
    padding: 10,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    marginBottom: 13,
    position: "relative",
    borderRadius: 20,
  },
  cardImg: {
    height: "100%",

    borderRadius: 18,
  },
  cardTitle: {
    color: "#EBEBEB",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  cardPrice: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
  },
  Btn: {
    backgroundColor: "#FFE34C",
    height: 35,
    width: 35,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  catIcon: {
    fontSize: 20,
  },
  messageContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    borderRadius: 20,
  },
  messageText: {
    color: "#ffffff",
    fontSize: 14,
  },
  imgContainer: {
    height: 120,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default ProductsCard;
