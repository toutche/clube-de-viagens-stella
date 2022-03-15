import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ShareModal from "../../components/ShareModal";
import BodyDetailsContractedPackages from "./BodyDetailsContractedPackages";
import HeaderDetailsContractedPackages from "./HeaderDetailsContractedPackages";

const DetailsContractedPackages = ({ navigation, route }) => {
  const { item } = route.params;
  const [isVisible, setVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ShareModal onClose={() => setVisible(!isVisible)} isVisible={isVisible} />
      <HeaderDetailsContractedPackages
        navigation={navigation}
        item={item}
        shareOpen={() => setVisible(!isVisible)}
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
