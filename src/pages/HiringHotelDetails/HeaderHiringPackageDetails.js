import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import CustomStatusBar from "../../components/CustomStatusBar";
import { PRIMARY_COLOR } from "../../utils/variables";
import InsertCupom from "../../components/InsertCupom";
import ValuePackage from "./ValuePackage";

const HeaderHiringPackageDetails = ({ navigation, data }) => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <CustomIcon
        size={26}
        onPress={() => navigation.goBack()}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.iconLeft}
      />

      <View style={styles.header}>
        <ProfileAvatar isShow />
        <View style={styles.separator} />
        <ValuePackage price_discount={data.price_discount} />
      </View>

      {/* <InsertCupom /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  separator: {
    marginHorizontal: 5,
  },
  header: {
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    padding: 10,
    left: 5,
    alignSelf: "flex-start",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    fontSize: 12.5,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
});

export default HeaderHiringPackageDetails;
