import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

import { PRIMARY_COLOR } from "../../utils/variables";
import AnimatedCarousel from "./AnimatedCarousel";

export default ({ navigation }) => {
  useEffect(() => {
    logScreen(ScreenView.Intro);
  }, []);
  return (
    <View style={Style.container}>
      <AnimatedCarousel navigation={navigation} />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "stretch",
  },
});
