import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";

const Person = ({ item, index, toggle }) => {
  const [isEnabled, setIsEnabled] = useState(item.enabled || false);
  const toggleSwitch = () => {
    toggle(!isEnabled, index);
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.age} anos</Text>
      </View>
      <Switch
        trackColor={{ false: "#d1d1d1", true: "#d1d1d1" }}
        thumbColor={isEnabled ? BLUE_COLOR : "#d1d1d1"}
        onValueChange={toggleSwitch}
        ios_backgroundColor={"#d1d1d1"}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 16,
    color: "#333",
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14,
    color: "#777",
  },
});

export default Person;
