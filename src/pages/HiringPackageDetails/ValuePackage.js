import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE } from "../../utils/variables";

const ValuePackage = ({ price_discount = 0 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor do pacote</Text>
      <Text style={styles.subTitle}>R$ {price_discount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 100,
    backgroundColor: "#ff1324",
    borderWidth: 2,
    elevation: 5,
    borderColor: "rgba(0,0,0,0.0001)",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 11.5,
    marginBottom: -2,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    color: "white",
    fontSize: 15,
  },
});

export default ValuePackage;
