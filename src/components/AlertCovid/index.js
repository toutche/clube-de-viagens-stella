import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { Feather } from "@expo/vector-icons";

const AlertCovid = ({ containerStyle, text_alert }) => {
  const { user } = useAuth();

  return (
    <View style={[styles.container, containerStyle]}>
      {/* <Image
        source={{ uri: user.images.covid }}
        style={{ width: 33, height: 33, marginRight: 8 }}
      /> */}
      <Feather name='alert-triangle' size={40} color='red' />
      <Text style={styles.text}>{text_alert}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FCE3E3",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13,
    flex: 1,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AlertCovid;
