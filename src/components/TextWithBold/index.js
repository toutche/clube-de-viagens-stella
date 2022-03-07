import React from "react";
import { Text } from "react-native";
import { FONT_DEFAULT_BOLD_STYLE } from "../../utils/variables";

const TextWithBold = ({ boldText, text, textStyle }) => {
  return (
    <Text style={textStyle}>
      {text} <Text style={{ fontFamily: FONT_DEFAULT_BOLD_STYLE }}>{boldText}</Text>
    </Text>
  );
};

export default TextWithBold;
