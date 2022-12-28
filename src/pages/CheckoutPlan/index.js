import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import Body from "./Body";
import Header from "./Header";

export default ({ navigation, route }) => {
  const data = route.params.data;

  useEffect(() => {
    logScreen(ScreenView.CheckoutPlan);
  }, []);

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
