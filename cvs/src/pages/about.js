import * as React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";

import Title from "../common/titleInternal";
import {
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  WIDTH
} from "../variables";

export default function About({ navigation, route }) {  

  /*TODO: Falta interação com a api */
  const image = require("../../../assets/img/topo-temporario.png");
  const titleAbout ="Sobre o Clube de Férias";
  const text = "Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços.\
  Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento\
  de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,\
  está proíbido de usar ou acessar este site. Os materiais contidos neste site são \
  protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.\
  \
  \
  É concedida permissão para baixar temporáriamente uma cópia dos materiais\
  (informações ou software) no site Stella Barros, apenas para visualização\
  transitória pessoal e não comercial. Esta é a concessão de uma licença,\
  não uma transferência de título e, sob esta licença, você nã pode:\
  \
  \
  É concedida permissão para baixar temporáriamente uma cópia dos materiais\
  (informações ou software) no site Stella Barros, apenas para visualização\
  transitória pessoal e não comercial. Esta é a concessão de uma licença,\
  não uma transferência de título e, sob esta licença, você nã pode: ";

  const Style = StyleSheet.create({
    container:{
      flexDirection: "column",
      width: WIDTH,
    },
    containerImg: {
      flex: 1     
    },
    containerText: {
      backgroundColor: PRIMARY_COLOR, 
      paddingBottom: 40
    },
    item: {
      textAlign: "left",
      marginHorizontal: 30,
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 13
    }, 
    imgTop:{
      justifyContent: "center",
      height: 250
    }
  });
    return (
      <ScrollView style={Style.container} scrollEnabled={true}>

        <View style={Style.containerImg}>
          <ImageBackground source={image} resizeMode="stretch" style={Style.imgTop}></ImageBackground>
        </View>

        <View style={Style.containerText}>
        <Title 
        styleTitle="titleBKColorful"
        titlePage={titleAbout}/> 
          <View style={Style.item}>
              <Text style={Style.text}> {text}</Text>
          </View>          
        </View>
      </ScrollView>
    );
  }