import * as React from "react";
import { 
  TouchableOpacity,
  ImageBackground,
  Image, 
  StyleSheet, 
  View, 
  Text, 
  ScrollView 
} from "react-native";


/*Componentes internos do app */
import Copyright from "../common/copyright";
import Title from "../common/titleInternal"
import { FONT_SIZE_BODY, FONT_SIZE_SUBTITLE, HEIGHT, PRIMARY_COLOR, SECOND_COLOR, TEXT_COLOR_BKCOLORFUL, WIDTH } from "../variables";


export default function LoginScreen({ navigation }) {  

  const Style = StyleSheet.create({
    containerScroll: {
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
      height: 300,
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
    container: {
      width: WIDTH,
      height: HEIGHT,      
    },    
    subtitle: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontSize: FONT_SIZE_SUBTITLE,
      marginHorizontal: "auto",
      textAlign: "center"
    },
    text: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontSize: FONT_SIZE_BODY,
    },  
    containerButtons:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      marginTop: 10,
      width: WIDTH
    },
    containerButtons2:{
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 10,
      paddingHorizontal: 40,
      width: WIDTH
    },
    buttonFacebook: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      width: 130,    
      borderRadius: 25,
      backgroundColor: "#4167B2",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    buttonGloogle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      width: 130, 
      borderRadius: 25,
      backgroundColor: "#DF123E",
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginLeft: 30,
    },
    button:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 45,
      borderRadius: 25,
      borderColor: TEXT_COLOR_BKCOLORFUL,
      borderWidth: 2,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    buttonImageIcon: {
      padding: 10,
      resizeMode: "stretch",
      marginHorizontal:"auto",
    },
    buttonText: {
      color: TEXT_COLOR_BKCOLORFUL,
      fontSize: 12,
      marginHorizontal:"auto",
      textAlign: "center",
      textTransform: "uppercase",
    },
    containerSeparator:{
      marginBottom: 15,
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    separator: {
      height: 1,
      width: 100,
      backgroundColor: SECOND_COLOR,
      marginHorizontal: 10,
    },
    copyright: {
      flex: 3,
      flexDirection: "column",  
      justifyContent: "flex-end",
    }
    
  });
    return (
      <>
      <ScrollView style={Style.containerScroll} scrollEnabled={false}>
        
        <View style={Style.divIMG}>
          <ImageBackground source={require("../../../assets/img/img1.png")} style={Style.imgBk}>
            <View style={Style.div}>                    
              <View><Image source={require("../../../assets/img/vector2.png")} style={Style.img2}/></View> 
            </View>                   
          </ImageBackground> 
        </View>

        <View style={Style.container}>      

          <Title 
            styleTitle="titleBKColorful"
            titlePage="Bem-vindo ao seu clube de férias!"
          />

          <Text style={Style.subtitle}>Acessar com</Text>
          
          <View style={Style.containerButtons}>
      
            <TouchableOpacity
              style={Style.buttonFacebook}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("AddressNotFound"/*"Localization"*/)
              }>
              <Text style={Style.buttonText}> FACEBOOK </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.buttonGloogle}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("AddressNotFound"/*"Localization"*/)
                }>
              {/*<Image
                source={require("../../../assets/img/google.png")}
                style={Style.buttonImageIcon}
              />*/}
              <Text style={Style.buttonText}> GOOGLE </Text>
            </TouchableOpacity>  

          </View>        

          <View style={Style.containerSeparator}>
            <View style={Style.separator}/>
            <Text style={Style.text}> ou </Text>
            <View style={Style.separator}/>
          </View>

          <View style={Style.containerButtons2}>

            <TouchableOpacity
              style={Style.button}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Access")
              }>
              <Text style={Style.buttonText}> Entre com seu e-mail </Text>
            </TouchableOpacity>
        
          </View>           
        
          <View style={Style.containerButtons2}>        

            <TouchableOpacity
              style={Style.button}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Register")
              }>
              <Text style={Style.buttonText}> É novo por aqui? Cadastre-se </Text>
            </TouchableOpacity>
          
          </View>   
        </View>          
        
      </ScrollView>

      <View style={Style.copyright}>
        <Copyright display="model1"/> 
      </View>
    </>
    );
  }

