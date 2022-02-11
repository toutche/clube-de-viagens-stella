import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardAvatar from "../../components/CardAvatar";
import { PRIMARY_COLOR } from "../../utils/variables";

const HeaderFinishHidePlan = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        {data?.message_bold} <Text style={styles.text}>{data?.message}</Text>
      </Text>
      <CardAvatar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
  },
  textBold: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    width: "90%",
  },
  text: {
    color: "white",
    fontWeight: "normal",
  },
});

export default HeaderFinishHidePlan;
