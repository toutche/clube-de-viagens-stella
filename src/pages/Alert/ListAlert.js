import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BLUE_COLOR } from "../../utils/variables";

const ListAlert = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.before} />
      <View style={styles.item}>
        <Text>25/04/2021 - 12:08hs</Text>
        <Text>Alerta 1</Text>
        <Text>bla bla bla bla bla bla</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 10,
    flexDirection: "row",
  },
  item: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  before: {
    backgroundColor: BLUE_COLOR,
    width: 4,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default ListAlert;
