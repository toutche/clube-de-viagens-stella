import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE } from "../../utils/variables";

export default ({
  containerStyle,
  titleStyle,
  iconStyle,
  title,
  boldText,
  onPress,
  type,
  name,
  size,
  color,
  loadingApi = false,
  loadingApiColor = "red",
  left = false,
  disabled = false,
  disabledMessage = "",
}) => {
  const Icon = type || null;

  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={[containerStyle, disabled && { backgroundColor: "#d1d1d1" }]}>
      {!loadingApi && left && Icon && (
        <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />
      )}
      <Text style={[styles.text, titleStyle]}>
        {loadingApi ? <ActivityIndicator size={"small"} color={loadingApiColor} /> : title}
        {boldText && <Text style={styles.textBold}> {boldText}</Text>}
      </Text>
      {!loadingApi && !left && Icon && (
        <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
  },
  textBold: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
});
