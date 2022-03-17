import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PRIMARY_COLOR } from "../../utils/variables";

const CustomStatusBar = ({ transparent = false }) => {
  return (
    <View
      style={{
        backgroundColor: transparent ? 'transparent' : PRIMARY_COLOR,
        height: 22,
      }}
    />
  );
};

export default CustomStatusBar;
