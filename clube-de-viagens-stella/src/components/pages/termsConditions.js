import * as React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


import Title from "../common/titleInternal"
import { 
  PRIMARY_COLOR, 
  WIDTH, 
  TEXT_COLOR_BKCOLORFUL, 
  FONT_SIZE_SUBTITLE, 
  FONT_SIZE_BODY 
} from "../variables";


export default function TermsConditions({ navigation, route }) {  
  
  /*TODO: Falta interação com a api */
  const image = require("../../../assets/img/topo-temporario.png");
  const titlePage = "Termos e condições de uso";
  const term1 = "Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços. \
  Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento \
  de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, \
  está proíbido de usar ou acessar este site. Os materiais contidos neste site são \
  protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.";
  const titleTerm1 = "1. Termos";
  const term2 = "É concedida permissão para baixar temporáriamente uma cópia dos materiais \
  (informações ou software) no site Stella Barros, apenas para visualização \
  transitória pessoal e não comercial. Esta é a concessão de uma licença, \
  não uma transferência de título e, sob esta licença, você nã pode:";
  const titleTerm2 = "2. Uso de licença";

  const Style = StyleSheet.create({
    container:{
      flexDirection: "column",
      width: WIDTH,
    },
    containerImg: {
      flex: 1     
    },
    imgTop:{
      justifyContent: "center",
      height: 250
    },
    containerText: {
      backgroundColor: PRIMARY_COLOR, 
      paddingBottom: 40
    },
    item: {
      textAlign: "left",
      marginHorizontal: 30,
      paddingBottom: 10,
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY
    },         
    titleItem: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_SUBTITLE-2,
        fontWeight: "bold"
    }, 
    boxTerms: {
        flex: 1,
        flexDirection: "row",  
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    iconTerms: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 7,
        marginRight: 10,
        paddingTop: 5
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
          titlePage={titlePage}/> 

          <View style={Style.container}>          
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{term1}</Text>
            </View>
                
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm2}</Text>
                <Text style={Style.text}>{term2}</Text>
            </View>

            <View style={Style.item}>
              <Text style={Style.titleItem}></Text>
              <Text style={Style.text}></Text>

              <View style={Style.boxTerms}>
                  <Icon style={Style.iconTerms} name={"circle"}/> 
                  <Text style={Style.text}>
                      Modificar ou copiar os materiais;
                  </Text>
              </View>

              <View style={Style.boxTerms}>
                <Icon style={Style.iconTerms} name={"circle"}/> 
                <Text style={Style.text}>
                    Usar os materiais para qualquer
                    finalidade comercialou para exibição pública (comercial ou não comercial); 
                </Text>
              </View>
              
              <View style={Style.boxTerms}>
                <Icon style={Style.iconTerms} name={"circle"}/> 
                <Text style={Style.text}>
                    Tentar descompilar ou fazer engenharia reversa de qualquer 
                    software contido no site Stella Barros: remover quaisquer 
                    direitos autorais ou outras notações de propriedade dos materiais;
                </Text>
              </View>
            </View>

          </View>       
        </View>
      </ScrollView>
    );
  }