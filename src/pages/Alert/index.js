import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import BodyAlert from "./BodyAlert";
import HeaderAlert from "./HeaderAlert";

export default ({ navigation }) => {
  useEffect(() => {
    logScreen(ScreenView.Alert);
  }, []);

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

