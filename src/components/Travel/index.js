import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Travel = ({ display = 0, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AntDesign name='checkcircleo' size={22} color='#287dfd' />
        <View style={styles.contentText}>
          <Text style={styles.title}>Data de viagem</Text>
          <Text style={styles.subTitle}>{data?.date}</Text>
        </View>
      </View>

      {display !== 1 && <View style={styles.separator} />}

      {display === 0 && (
        <View style={styles.content}>
          <AntDesign name='checkcircleo' size={22} color='#287dfd' />
          <View style={styles.contentText}>
            <Text style={styles.title}>Horário do Voo</Text>
            <Text style={styles.subTitle}>{data?.hour_voo}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 12,
    marginBottom: 10,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
  },
  separator: {
    height: 1.5,
    backgroundColor: "#e1e1e1",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  contentText: {
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 14.5,
  },
  subTitle: {
    color: "#287dfd",
    fontSize: 13,
    marginTop: -3,
  },
});

export default Travel;
