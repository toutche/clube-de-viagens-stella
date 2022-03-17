import React, { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";

const titlePage = "É novo por aqui? Cadastre-se";

const CustomRadio = ({ 
  title,
  currentValue,
  value,
  setValue
}) => {
  return (
    <CheckBox
      center
      title={title}
      textStyle={{
        fontFamily: FONT_DEFAULT_STYLE,
        color: "white",
        fontSize: 14,
      }}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      containerStyle={{
        backgroundColor: "transparent",
        borderWidth: 0,
        marginTop: 0,
        marginBottom: 0,
        alignItems: "flex-start"
      }}
      uncheckedColor={"white"}
      checkedColor={"white"}
      checked={currentValue == value}
      onPress={() => setValue(value)}
    />
  );
};

export default CustomRadio;
