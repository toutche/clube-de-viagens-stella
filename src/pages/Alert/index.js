import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import BodyAlert from "./BodyAlert";
import HeaderAlert from "./HeaderAlert";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderAlert {...{ navigation }} />
      <BodyAlert />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

