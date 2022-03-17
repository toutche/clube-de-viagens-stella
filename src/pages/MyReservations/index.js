import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Body from "./Body";
import Header from "./Header";
import ModalCancel from "./ModalCancel";

export default ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ModalCancel isVisible={isVisible} onClose={() => setVisible(!isVisible)} />
      <Header navigation={navigation} />
      <Body openModal={() => setVisible(!isVisible)} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
