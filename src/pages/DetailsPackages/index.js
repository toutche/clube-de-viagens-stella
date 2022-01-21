import React, { useState } from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import ShareModal from "../../components/ShareModal";
import BodyDetailsPackages from "./BodyDetailsPackages";
import HeaderDetailsPackages from "./HeaderDetailsPackages";

const DetailsPackages = ({ route, navigation }) => {
  const { item } = route.params;
  const [isVisible, setVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ShareModal onClose={() => setVisible(!isVisible)} isVisible={isVisible} />
      <HeaderDetailsPackages
        shareOpen={() => setVisible(!isVisible)}
        navigation={navigation}
        item={item}
      />
      <BodyDetailsPackages item={item} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default DetailsPackages;
