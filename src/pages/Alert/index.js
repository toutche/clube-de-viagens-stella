import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import BodyAlert from "./BodyAlert";
import HeaderAlert from "./HeaderAlert";

const Alert = () => {
  return (
    <View style={styles.container}>
      <HeaderAlert />
      <BodyAlert />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Alert;
