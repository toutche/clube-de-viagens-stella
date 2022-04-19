import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { BLUE_COLOR } from "../../utils/variables";
import BodyMyAccount from "./BodyMyAccount";
import HeaderMyAccount from "./HeaderMyAccount";

const MyAccount = ({ navigation, item }) => {

  return (
    <View style={styles.container}>
      <HeaderMyAccount navigation={navigation} />

      <BodyMyAccount item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pipe: {
    color: BLUE_COLOR,
    marginHorizontal: Platform.OS === "ios" ? 3 : undefined,
  },
  containerPackage: {
    backgroundColor: "white",
    position: "absolute",
    top: 175,
    zIndex: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
});

export default MyAccount;
