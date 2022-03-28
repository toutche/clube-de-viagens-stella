import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PRIMARY_COLOR } from "../../utils/variables";

const CustomStatusBar = ({ transparent = false }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        backgroundColor: transparent ? 'transparent' : PRIMARY_COLOR,
        height: insets.top,
        width: '100%'
      }}
    />
  );
};

export default CustomStatusBar;
