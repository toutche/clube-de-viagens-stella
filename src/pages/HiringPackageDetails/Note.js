import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { FONT_DEFAULT_STYLE } from "../../utils/variables";
import { useAuth } from "../../contexts/auth";

const Note = () => {
  const { user } = useAuth();

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: user.images.checkout.comments }} style={{ width: 22, height: 22 }} />
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
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13.5,
    color: "#555",
    marginLeft: 8,
  },
});

export default Note;
