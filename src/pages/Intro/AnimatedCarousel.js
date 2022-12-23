import React from "react";
import { View, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const data = [
  {
    key: 1,
    backgroundColor: "#59b2ab",
    image: require("../../../assets/imagem-splash.png"),
  },
  {
    key: 2,
    backgroundColor: "#febe29",
    image: require("../../../assets/imagem-splash.png"),
  },
  {
    key: 3,
    backgroundColor: "#22bcb5",
    image: require("../../../assets/imagem-splash.png"),
  },
];

export default ({ navigation }) => {
  function done() {
    navigation.navigate("SignIn");
  }
  function nextButton() {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "rgba(0, 0, 0, .2)",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Ionicons
          name='arrow-forward-outline'
          color='rgba(255, 255, 255, .9)'
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  }
  function doneButton() {
    return (
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "rgba(0, 0, 0, .2)",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Ionicons
          name='checkmark'
          color='rgba(255, 255, 255, .9)'
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  }
  function renderItem({ item }) {
    return (
      <ImageBackground
        resizeMode='contain'
        style={{ width: "100%", height: "100%" }}
        source={item.image}
      />
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={data}
      showSkipButton
      renderSkipButton={doneButton}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
    />
  );
};
