import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

const AlertCovid = ({ containerStyle, text_alert }) => {
  const { user } = useAuth();

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={{ uri: user.images.covid }}
        style={{ width: 33, height: 33, marginRight: 8 }}
      />
      <Text style={styles.text}>{text_alert}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#e1e1e1",
    fontSize: 13,
    flex: 1,
  },
});

export default AlertCovid;
