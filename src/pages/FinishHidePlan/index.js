import React, { useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import BodyFinishHidePlan from "./BodyFinishHidePlan";
import HeaderFinishHidePlan from "./HeaderFinishHidePlan";

const FinishHidePlan = ({ navigation, route }) => {
  const data = route.params;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => backHandler.remove();
  }, []);

  const handleBackButton = e => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Dashboard",
        },
      ],
    });
    return true;
  };

  return (
    <View style={styles.container}>
      <HeaderFinishHidePlan {...{ data }} />
      <BodyFinishHidePlan {...{ data, handleBackButton }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FinishHidePlan;
