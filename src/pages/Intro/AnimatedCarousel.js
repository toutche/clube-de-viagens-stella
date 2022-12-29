import React, { useEffect, useState } from "react";
import { View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api/";

export default ({ navigation }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response = await api.get("/links");
    const link = response.data.onboard;

    setImage(link);
  };
  const data = [
    {
      key: 1,
      image: image.first,
      onPress: () => navigation.navigate("VideoScreen"),
    },
    {
      key: 2,
      image: image.second,
    },
    {
      key: 3,
      image: image.third,
    },
  ];
  function done() {
    navigation.navigate("Sign");
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
      <TouchableWithoutFeedback onPress={item.onPress} style={{ width: "100%", height: "100%" }}>
        <ImageBackground
          resizeMode='stretch'
          style={{ width: "100%", height: "100%" }}
          source={{ uri: item.image }}
        />
      </TouchableWithoutFeedback>
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={data}
      onSkip={done}
      onDone={done}
      showSkipButton
      renderSkipButton={doneButton}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
    />
  );
};
