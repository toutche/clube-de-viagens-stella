import React, { useState } from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomInput from "../../components/CustomInput";
import { FONT_DEFAULT_STYLE, TEXT_COLOR_BKWHITE } from "../../utils/variables";

const Note = ({ comment, setComment }) => {
  return (
    <CustomInput
      placeholder='Deixar alguma observação'
      autoCapitalize={"sentences"}
      value={comment}
      multiline={true}
      lenght={1024}
      containerStyle={styles.container}
      inputStyle={styles.text}
      placeholderTextColor={'rgba(0,0,0,0.5)'}
      onChangeText={text =>
        setComment(text)
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 12,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 20,
    backgroundColor: "white",
    alignItems: 'flex-start',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13.5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    color: "#555",
    marginLeft: 8,
  },
});

export default Note;
