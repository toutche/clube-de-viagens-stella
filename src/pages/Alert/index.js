import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import BodyAlert from "./BodyAlert";
import HeaderAlert from "./HeaderAlert";

export default ({ route, navigation }) => {
  const { fromMenu } = route.params;

  return (
    <View style={styles.container}>
      <HeaderAlert
        fromMenu={fromMenu}
        {...{ navigation }}
      />
      <BodyAlert />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

