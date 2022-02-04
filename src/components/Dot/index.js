import React from "react";
import { View } from "react-native";
import { BLUE_COLOR } from "../../utils/variables";

export default function Dot({ index, currentIndex, carousel = false }) {
  const bool = index === currentIndex ? true : false;

  return (
    <>
      {carousel ? (
        <View
          style={{
            backgroundColor: bool ? BLUE_COLOR : "#d1d1d1",
            width: 9,
            height: 9,
            borderRadius: 9,
            margin: 4,
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: bool ? "transparent" : "#e9939a",
            width: bool ? 10 : 6,
            height: bool ? 10 : 6,
            borderWidth: bool ? 2.5 : 0,
            borderColor: "#fbfbfb",
            borderRadius: 5,
            margin: 4,
          }}
        />
      )}
    </>
  );
}
