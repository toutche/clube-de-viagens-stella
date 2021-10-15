import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Linking,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet
} from "react-native";


import Title from "../common/titleInternal";
import { 
  FONT_SIZE_BODY,
  HEIGHT, 
  PRIMARY_COLOR, 
  TEXT_COLOR_BKCOLORFUL, 
  WIDTH  } from "../variables";
import Copyright from "../common/copyright";

export default function InsertCode() {

  const [code, setCode] = useState("");
  const numCode1="", numCode2="", numCode3="", numCode4="";

  const Style = StyleSheet.create({
    container: {
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: PRIMARY_COLOR    
    },
    divIMG: {
      width: WIDTH, 
      alignContent: "stretch",
    },  
    imgBk: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      height: 250,
    },
    div: {
      flexDirection: "column",
      justifyContent: "flex-end",
      width: WIDTH, 
      height: 300
    },
    img: {    
      height: 100,
      width: 100
    },
    img2: {
      height: 100,
      width: WIDTH
    },
    containerInsert: {
      flex: 2,
      flexDirection: "column",  
      justifyContent: "flex-start",
      alignItems: "center",
    },
    boxDisplayFlex: {
      flex: 1,
      flexDirection: "row",  
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginHorizontal: "auto",
      marginTop: 30
    },
    inputView: {
      backgroundColor: "transparent",
      borderBottomColor: "#FFFFFF",
      borderBottomWidth: 1,    
      width: 10,    
      paddingHorizontal: 30,
      marginHorizontal: 5,
    }, 
    TextInput: {
      color: TEXT_COLOR_BKCOLORFUL,
    }, 
    link: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontSize: FONT_SIZE_BODY,
      marginTop: 15,
      fontWeight: "bold",
      textDecorationLine: "underline"
    },
    text: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontSize: FONT_SIZE_BODY
    },
    copyright: {
      flex: 3,
      flexDirection: "column",  
      justifyContent: "flex-end",
    }
  });

  return (
    <>
      <ScrollView style={Style.container} scrollEnabled={true}>
        <View style={Style.divIMG}>
          <ImageBackground source={require("../../../assets/img/img3.png")} style={Style.imgBk}>
            <View style={Style.div}>                    
              <View><Image source={require("../../../assets/img/vector2.png")} style={Style.img2}/></View> 
            </View>                   
          </ImageBackground>           
        </View>

        <Title 
        styleTitle="titleBKColorful"
        titlePage="Insira o código"/> 
      
        <View style={Style.containerInsert}>
          <Text style={Style.text}> Precisamos confirmar o seu e-mail.</Text>
          <Text style={Style.text}> Insira o código de 4 dígitos enviado.</Text>

          <View style={Style.boxDisplayFlex}>
            <View style={Style.inputView}>      
              <TextInput 
                style={Style.TextInput}
                onChangeText={(numCode1) => setCode(code.concat(numCode1))}/>                 
            </View>

            <View style={Style.inputView}>      
              <TextInput 
                style={Style.TextInput}
                onChangeText={(numCode2) => setCode(code.concat(numCode2))}/>                 
            </View>

            <View style={Style.inputView}>      
              <TextInput 
                style={Style.TextInput}
                onChangeText={(numCode3) => setCode(code.concat(numCode3))}/>                 
            </View>

            <View style={Style.inputView}>      
              <TextInput 
                style={Style.TextInput}
                onChangeText={(numCode4) => setCode(code.concat(numCode4))}/>                 
            </View>
          </View>

          <View style={Style.boxDisplayFlex}>
              <Text 
                  style={Style.link} 
                  onPress={() => Linking.openURL("http://google.com")}>
                  Reenviar ódigo
              </Text>
          </View>
          
        </View>

      </ScrollView>
      <View style={Style.copyright}>
        <Copyright display="none"/> 
      </View>
    </>
  );
}
