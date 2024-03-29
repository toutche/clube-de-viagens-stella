import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import BodyDetailsContractedPackages from "./BodyDetailsContractedPackages";
import HeaderDetailsContractedPackages from "./HeaderDetailsContractedPackages";

const DetailsContractedPackages = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <HeaderDetailsContractedPackages
        navigation={navigation}
        item={item}
      />
      <BodyDetailsContractedPackages item={item} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
});

export default DetailsContractedPackages;
