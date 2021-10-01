import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import Title from "../common/titleInternal";
import { FONT_SIZE_BODY, FONT_SIZE_SUBTITLE, FONT_SIZE_SUBTITLE_INTERNAL, FONT_SIZE_TITLE, HEIGHT, PRIMARY_COLOR, SECOND_COLOR, TEXT_COLOR_BKCOLORFUL, TITLE_COLOR_BKCOLORFUL, WIDTH } from "../variables";

export default function  DreamTrip({ navigation, route }) {

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
      height: HEIGHT/2,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "stretch",
    },
    imgBkg: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    IconBtn: {
      fontSize: 20,
      color: TEXT_COLOR_BKCOLORFUL,
      margin: "auto",
    },
    textArea: {
      paddingHorizontal: 30,
    },
    subtitle: {
      fontSize: FONT_SIZE_BODY,
      fontWeight: "bold",
      paddingVertical: 10,
      color: TITLE_COLOR_BKCOLORFUL
    },
    text: {
      fontSize: FONT_SIZE_BODY,
      color: TEXT_COLOR_BKCOLORFUL
    },
    buttonsLine: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20
    },
    btn: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderColor: SECOND_COLOR,
      borderRadius: 200,
      borderStyle: "solid",
      borderWidth: 2,
    },
    btnText:{
      color: TEXT_COLOR_BKCOLORFUL,
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
  });


  return (
    <View style={Style.container}>
      <View style={Style.topCarrossel}>
         <ImageBackground source={require("../../../assets/img/conheca.png")} style={Style.imgBkg}></ImageBackground>
      </View>
      <View style={Style.textArea}>
        <Title
          styleTitle="titleIBKColorLEFT"
          titlePage="Realize a sua viagem dos sonhos"/>

          <Text style={Style.subtitle}>
            Entre no Clube de férias e garanta preços exclusivos para os membros.
          </Text>

          <Text style={Style.text}>
            App intuitivo, auxilia os assinantes de forma simples, rápida e segura a planejarem seu
            próximo destino. Baseado em suas preferências, sugerindo constantemente diversas opções de destinos com preços 
            imbatíveis, tudo isso 100% on line em nossa plataforma.
          </Text>
      </View>
      <View style={Style.buttonsLine}>        
        <TouchableOpacity
        style={Style.btn}
        activeOpacity={0.5}>
          <Text style={Style.btnText}> O Clube </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={Style.btn}
        activeOpacity={0.5}>
          <Text style={Style.btnText}> Vantagens </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={Style.btn}
        activeOpacity={0.5}>
          <Text style={Style.btnText}> Pacotes </Text>
        </TouchableOpacity>
      </View>        

      <View style={Style.buttonsLineRtl}>        
        <TouchableOpacity
        style={Style.linkBtnColor3}
        activeOpacity={0.5}>
          <Text style={Style.btnText}> Pular </Text>
          <Icon style={Style.IconBtn} name={"long-arrow-right"}/> 
        </TouchableOpacity>
      </View>    
    </View>
  );
}
