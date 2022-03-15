import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import moment from "moment";

const ListAlert = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.before} />
      <View style={styles.item}>
        <Text style={styles.date}>
          {moment(item.created_at).format("DD/MM/YYYY")} - {moment(item.created_at).format("HH:MM")}
          Hrs
        </Text>
        <Text style={styles.title}>Alerta 1</Text>
        <Text style={styles.description}>{item.sub_headline}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 4,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  item: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  before: {
    backgroundColor: BLUE_COLOR,
    width: 4,
    height: "100%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 18,
  },
  date: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#777",
    fontSize: 13,
  },
  description: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13,
    color: "#777",
  },
});

export default ListAlert;
