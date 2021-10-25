import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { copyrightSwitch } from "../../utils";

export default function Copyright({ display, containerStyle }) {

  const option = copyrightSwitch(display)

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{option || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  text: {
    color: '#f8d4d5',
    fontSize: 11
  }
})

