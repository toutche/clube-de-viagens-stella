import React, { useEffect } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import Body from "./Body";
import Header from "./Header";

export default ({ navigation, route }) => {
  const data = route.params;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => backHandler.remove();
  }, []);

  const handleBackButton = () => {
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
      <Header {...{ data }} />
      <Body {...{ data, handleBackButton }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
