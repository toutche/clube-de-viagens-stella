import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";

const CustomInput = ({
  value = "",
  containerStyle,
  onChangeText,
  inputStyle,
  type,
  name,
  size,
  lenght = 40,
  keyboardType = "default",
  color,
  placeholder = "",
  placeholderTextColor = "#d1d1d1",
  secureTextEntry = false,
  multiline = false,
  uri = null
}) => {
  const Icon = type || null;

  return (
    <View style={[styles.container, containerStyle]}>
      {uri
        ? <Image source={{ uri }} style={styles.image} />
        : Icon && <Icon name={name} size={size || 24} color={color || "white"} />}
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        secureTextEntry={secureTextEntry}
        maxLength={lenght}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={text => onChangeText(text)}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
    aspectRatio: 1
  },
  input: {
    fontFamily: FONT_DEFAULT_STYLE,
    flex: 1,
    paddingHorizontal: 10,
    color: "white",
    fontSize: 14.5,
  },
});

export default CustomInput;
