import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardAvatar from "../../components/CardAvatar";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

const HeaderFinishHidePlan = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        {data?.message_bold} <Text style={styles.text}>{data?.message}</Text>
      </Text>
      <CardAvatar {...{ data }} />
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
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    width: "90%",
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontWeight: "normal",
  },
});

export default HeaderFinishHidePlan;
