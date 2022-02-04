import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BLUE_COLOR } from "../../utils/variables";
import { AntDesign } from "@expo/vector-icons";

const QuantifyTravel = ({
  users = [
    {
      text: "1 Criança",
    },
    {
      text: "2 Adultos",
    },
  ],
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {users.map((item, index) => (
          <View key={index} style={styles.item}>
            <AntDesign name='checkcircleo' size={16} color={BLUE_COLOR} />
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    borderRadius: 100,
    width: "100%",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
  },
  text: {
    marginLeft: 5,
    color: BLUE_COLOR,
  },
  separator: {
    width: 5,
  },
});

export default QuantifyTravel;
