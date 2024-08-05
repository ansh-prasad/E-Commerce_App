import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../Data/ProductsData";
import Layout from "../components/Layout/Layout";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);
  const [alertMsg, setAlertMsg] = useState("");

  const { params } = route;

  useEffect(() => {
    const getProduct = ProductsData.find((p) => {
      return p?._id === params?._id;
    });
    setPDetails(getProduct);
  }, [params?._id]);

  const handleAddQty = () => {
    if (qty === 5) {
      setAlertMsg("You Can't Add More Than 5");
      setTimeout(() => setAlertMsg(""), 3000);
      return;
    }
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    setAlertMsg(`${qty} Items Added To Cart`);
    setTimeout(() => setAlertMsg(""), 3000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{pDetails?.name}</Text>
            <Text style={styles.desc}>{pDetails?.description}</Text>
            <View style={styles.priceQtyContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Price</Text>
                <Text style={styles.priceAmount}>₹{pDetails?.price}</Text>
              </View>
              <View style={styles.qtyContainer}>
                <TouchableOpacity
                  style={styles.btnQty}
                  onPress={handleRemoveQty}
                >
                  <Text style={styles.btnQtyText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{qty}</Text>
                <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                  <Text style={styles.btnQtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={handleAddToCart}
              disabled={pDetails?.quantity <= 0}
            >
              <Text style={styles.btnCartText}>
                {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {alertMsg ? (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{alertMsg}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    height: 300,
    width: "90%",
    backgroundColor: "#000000",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  desc: {
    color: "white",
    fontSize: 12,
    textAlign: "left",
    marginBottom: 30,
  },
  priceQtyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  priceContainer: {
    alignItems: "flex-start",
  },
  priceLabel: {
    color: "gray",
    fontSize: 14,
  },
  priceAmount: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnQty: {
    backgroundColor: "#FFE34C",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  btnQtyText: {
    fontSize: 25,
    color: "black",
  },
  qtyText: {
    fontSize: 18,
    marginHorizontal: 15,
    color: "white",
  },
  btnCart: {
    backgroundColor: "#c8f560",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCartText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  alertContainer: {
    position: "absolute",
    top: "30%",
    left: "20%",
    right: "20%", 
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  alertText: {
    color: "white",
    fontSize: 14,
  },
});

export default ProductDetails;
