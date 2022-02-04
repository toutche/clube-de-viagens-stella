import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, Alert } from "react-native";

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
      onPress={disabled ? () => Alert.alert("Desabilitado", disabledMessage) : onPress}
      style={[containerStyle, disabled && { backgroundColor: "#d1d1d1" }]}>
      {!loadingApi && left && Icon && (
        <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />
      )}
      <Text style={titleStyle}>
        {loadingApi ? <ActivityIndicator size={"small"} color={loadingApiColor} /> : title}
        {boldText && <Text style={{ fontWeight: "bold" }}> {boldText}</Text>}
      </Text>
      {!loadingApi && !left && Icon && (
        <Icon style={iconStyle} name={name} size={size || 24} color={color || "white"} />
      )}
    </TouchableOpacity>
  );
};
