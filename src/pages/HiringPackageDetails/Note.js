import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const Note = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name='message' size={22} color='#287dfd' />
      <Text style={styles.text}>Deixar alguma observação</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 100,
    flexDirection: "row",
  },
  text: {
    fontSize: 14.5,
    color: "#555",
    marginLeft: 5,
  },
});

export default Note;
