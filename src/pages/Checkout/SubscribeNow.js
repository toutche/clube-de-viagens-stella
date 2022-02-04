import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { PRIMARY_COLOR } from "../../utils/variables";

const SubscribeNow = ({ amount = 0, discount = 0 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Assine agora por</Text>
      <Text style={styles.valueText}>R$ {amount} /mês</Text>
      <Text style={styles.bottomText}>Até {parseInt(discount)}% de desconto exclusivo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  topText: {
    textAlign: "center",
    color: "white",
    fontSize: 11,
  },
  valueText: {
    top: -3,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  bottomText: {
    top: -3,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    backgroundColor: "#12aaeb",
    borderRadius: 100,
    paddingVertical: 1,
    paddingHorizontal: 7,
  },
});

export default SubscribeNow;
