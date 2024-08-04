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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: p?.imageUrl }}
          style={styles.cardImg}
          resizeMode="contain"
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
  imageContainer: {
    width: "100%",
    height: 120,
    marginBottom: 10,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#fff", 
  },
  cardImg: {
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    color: "#EBEBEB",
    fontSize: 15,
    fontWeight: "600",
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
    fontSize: 15,
  },
  Btn: {
    backgroundColor: "#FFD700",
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  catIcon: {
    fontSize: 18,
  },
  messageContainer: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: [{ translateX: -45 }],
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    borderRadius: 20,
  },
  messageText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default ProductsCard;
