import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Hide from "../../components/Hide";
import FavoriteIcon from "../../components/FavoriteIcon";
import ShareIcon from "../../components/ShareIcon";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";

const HeaderDetailsContractedPackages = ({ item, navigation, shareOpen }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.img }} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      />

      <Hide containerStyle={styles.hide} />

      <FavoriteIcon containerStyle={styles.like} />

      <ShareIcon shareOpen={shareOpen} containerStyle={styles.share} />

      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: "absolute",
  },
  hide: {
    position: "absolute",
    top: 40,
    right: 15,
    backgroundColor: "rgba(232,188,13,.7)",
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 95,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  share: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 150,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.2,
  },
});

export default HeaderDetailsContractedPackages;
