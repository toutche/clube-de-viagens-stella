import React from "react";
import { StyleSheet, View } from "react-native";
import BodyCheckout from "./BodyCheckout";
import HeaderCheckout from "./HeaderCheckout";

const Checkout = ({ navigation, route }) => {
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <HeaderCheckout {...{ data, navigation }} />
      <BodyCheckout {...{ data, navigation }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Checkout;
