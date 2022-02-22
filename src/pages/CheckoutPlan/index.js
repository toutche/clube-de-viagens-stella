import React from "react";
import { StyleSheet, View } from "react-native";
import Body from "./Body";
import Header from "./Header";

export default ({ navigation, route }) => {
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Header {...{ data, navigation }} />
      <Body {...{ data, navigation }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
