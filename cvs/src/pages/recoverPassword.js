import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Linking,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"


/*Componentes internos do app */
import { 
  FONT_SIZE_BODY,
  HEIGHT, 
  PRIMARY_COLOR, 
  TEXT_COLOR_BKCOLORFUL, 
  SECOND_COLOR,
  WIDTH  } from "../variables";
import Title from "../common/titleInternal"
import Copyright from "../../components/common/copyright";

export default function RecoverPassword() {

  const [email, setEmail] = useState("");
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
    containerInternal: {
      flexDirection: "column",  
      justifyContent: "flex-start",
      width: WIDTH,
      paddingHorizontal: 20,
    },
    containerInsert: {
      flex: 2,
    },
    div: {
      flexDirection: "column",
      justifyContent: "flex-end",
      width: WIDTH, 
      height: 300
    },
    img2: {
      height: 100,
      width: WIDTH
    },
    inputGroup: {
      height: 50,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderColor: TEXT_COLOR_BKCOLORFUL,
      borderWidth: 1,
      borderRadius: 25,
      marginBottom: 5,    
      paddingHorizontal: 20,
      flexDirection: "row"
    }, 
    IconTextInput: {
      fontSize: FONT_SIZE_BODY,
      color: TEXT_COLOR_BKCOLORFUL,
      paddingVertical: 20,
      paddingHorizontal: 10,
      height: 100
    },
    TextInput:{
      color: TEXT_COLOR_BKCOLORFUL,
    },
    button:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: SECOND_COLOR
    },
    buttonText: {
      color: PRIMARY_COLOR,
      fontSize: 12,
      marginHorizontal:"auto",
      textAlign: "center",
      textTransform: "uppercase",
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
     
      <View style={Style.containerInternal}>

          <Title 
            styleTitle="titleBKColorful"
            titlePage="Entre com seu e-mail para recuperar sua senha."/>

          <View style={Style.inputGroup}>      
              <TouchableWithoutFeedback>
                  <Icon style={Style.IconTextInput} name={"envelope"} size={20}/>  
              </TouchableWithoutFeedback>         
              <TextInput 
              style={Style.TextInput}
              placeholder="Insira o seu e-mail"
              placeholderTextColor={TEXT_COLOR_BKCOLORFUL}
              onChangeText={(email) => setEmail(email)}/>                 
          </View>

          <TouchableOpacity
              style={Style.button}
              activeOpacity={0.5}
              onPress={() => 
                navigation.navigate("Access")
            }>
              <Text style={Style.buttonText}> RECUPERAR SENHA </Text>
          </TouchableOpacity>                     

      </View>   
      
    </ScrollView>

    <View style={Style.copyright}>
      <Copyright display="none"/> 
    </View>
  </>
  );
}
