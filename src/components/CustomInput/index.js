import React from "react";
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";

const CustomInput = ({
  value = "",
  containerStyle,
  onChangeText,
  inputStyle,
  type,
  name,
  size = 24,
  lenght = 40,
  keyboardType = "default",
  color = 'white',
  placeholder = "",
  placeholderTextColor = "#d1d1d1",
  secureTextEntry = false,
  multiline = false,
  uri = null,
  autoCapitalize = "none",
  previewPassword = null,
  setPreviewPassword,
  rightIconLib = null,
  rightIconName = null,
  rightIconAction = null,
  rightIconSize = null,
  rightIconColor = null,
  editable = true,
  ...rest
}) => {
  const Icon = type || null;
  const RightIconLib = rightIconLib || null;

  return (
    <View style={[styles.container, containerStyle]}>
      {uri
        ? <Image source={{ uri }} style={styles.image} />
        : Icon && <View style={{ width: 30, alignItems: 'center' }}>
          <Icon name={name} size={size} color={color} />
        </View>
      }
      <TextInput
        {...rest}
        style={[styles.input, inputStyle]}
        value={value}
        secureTextEntry={secureTextEntry}
        maxLength={lenght}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={text => onChangeText(text)}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        editable={editable}
      />
      {previewPassword !== null && Icon &&
        <TouchableOpacity onPress={() => setPreviewPassword(state => !state)} style={styles.button_eye}>
          <Icon
            name={previewPassword ? "eye" : "eye-slash"}
            size={rightIconSize || 24}
            color={color || "white"}
          />
        </TouchableOpacity>
      }
      {RightIconLib !== null &&
        <TouchableOpacity onPress={rightIconAction} style={styles.button_eye}>
          <RightIconLib
            name={rightIconName}
            size={rightIconSize || 24}
            color={rightIconColor || "white"}
          />
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingHorizontal: 8,
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
    paddingHorizontal: 4,
    color: "white",
    fontSize: 14.5,
  },
  button_eye: {
    paddingHorizontal: 8,
    paddingVertical: 8
  }
});

export default CustomInput;
