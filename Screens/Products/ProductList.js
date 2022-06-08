import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

var { width, height } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{ width: "50%" }}
      onPress={() =>
        props.navigation.navigate("Single Product", { item: item })
      }
    >
      <View
        style={{
        
          width: width / 2,
          backgroundColor: "gainshboro",
          paddingTop: 30,
        }}
      >
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
