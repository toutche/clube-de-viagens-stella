import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

export default ({
  containerStyle,
  name,
  type,
  onPress,
  size,
  color,
  styleIcon = {},
  loadingApi = false,
  loadingApiColor = "white",
}) => {
  const Icon = type;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      {loadingApi ? (
        <ActivityIndicator size={"small"} color={loadingApiColor} />
      ) : (
        <Icon name={name} size={size || 24} color={color || "white"} style={styleIcon} />
      )}
    </TouchableOpacity>
  );
};
