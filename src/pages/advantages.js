import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import Title from "../common/titleInternal";
import {
  FONT_SIZE_BODY,
  HEIGHT,
  PRIMARY_COLOR,
  SECOND_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  TITLE_COLOR_BKCOLORFUL,
  WIDTH
} from "../variables";

export default function Advantages({ navigation, route }) {

  const titleText = "Quais são as vantagens?";
  const Style = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "stretch",
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: PRIMARY_COLOR
    },
    topCarrossel: {
      width: WIDTH,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "stretch",
    },
    imgBkg: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      height: 450,
    },
    IconBtn: {
      fontSize: 20,
      color: TEXT_COLOR_BKCOLORFUL,
      margin: "auto",
    },
    textArea: {
      flex: 2,
      paddingHorizontal: 10,
    },
    subtitle: {
      fontSize: FONT_SIZE_BODY,
      fontWeight: "bold",
      paddingVertical: 10,
      color: TITLE_COLOR_BKCOLORFUL
    },
    buttonsLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    btn: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderColor: SECOND_COLOR,
      borderRadius: 200,
      borderStyle: "solid",
      borderWidth: 2,
    },
    btnText: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontWeight: "normal",
      fontSize: FONT_SIZE_BODY
    },
    btnActive: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: SECOND_COLOR,
      borderColor: SECOND_COLOR,
      borderRadius: 200,
      borderStyle: "solid",
      borderWidth: 2,
    },
    btnTextActive: {
      color: PRIMARY_COLOR,
      fontWeight: "normal",
      fontSize: FONT_SIZE_BODY
    },
    buttonsLineRtl: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-end",
    },
    linkBtnColor3: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  })


  return (
    <View style={Style.container}>
      <View style={Style.topCarrossel}>
        <Image source={require("../../../assets/img/clube.png")} style={Style.imgBkg}></Image>
      </View>
      <View style={Style.textArea}>
        <Title
          styleTitle="titleSimple"
          titlePage={titleText} />

        <View style={Style.buttonsLine}>
          <TouchableOpacity
            style={Style.btn}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Club")
            }
          >
            <Text style={Style.btnText}> O Clube </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.btnActive}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Advantages")
            }
          >
            <Text style={Style.btnTextActive}> Vantagens </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.btn}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Packs")
            }
          >
            <Text style={Style.btnText}> Pacotes </Text>
          </TouchableOpacity>
        </View>

        <View style={Style.buttonsLineRtl}>
          <TouchableOpacity
            style={Style.linkBtnColor3}
            activeOpacity={0.5}>
            <Text style={Style.btnText}> Pular </Text>
            <Icon style={Style.IconBtn} name={"long-arrow-right"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
