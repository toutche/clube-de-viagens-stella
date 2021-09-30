import React, { useState } from "react";
import { 
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";
import { Avatar } from "react-native-elements";

import Header from "./header";


export default function FinancialAreaScreen({ navigation, route }) {

  const textBtnUser = "Olá Fernanda";
  const textBtnPlans = "Ver Planos";
  const value = "0,00";
  const textInformation = "É necessário contratar um plano para iniciar o seu projeto da viagem dos sonhos."
  const imageUser = "../../assets/img/user.png";
  const Style = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: "100%",
      margin: 0
    },
    bk1: {
      backgroundColor: "#c70c34", 
      width: "100%",
      height: 300,
      paddingTop: 20,
      paddingHorizontal: 15,
    },
    bk2: {
      backgroundColor: "#F4F6FF",
      justifyContent: "flex-end",
      paddingHorizontal: 20,
    },
    lineTitlePage:{
      height: 50,
      width: "100%",
      backgroundColor: "#ffffff",
      justifyContent: "center"
    },
    textTitlePage:{
      fontSize: 16,
      fontWeight: "bold",
      color: "#78808B",
      textAlign: "center"
    },
    containerData: {
      width: "100%",
      height: 100,    
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    spaceBetweenViews:{
      marginBottom: 10,
      marginTop: 10
    },
    containerImg: {
      width: "100%", 
      justifyContent: "center",
      alignItems: "center"
    },
    image:{

    },
    btnUser:{
      backgroundColor:"#DF123E",
      borderColor: "#EF1F4B",
      borderWidth: 2,
      color: "#ffffff",
      borderRadius: 50,
      height: 40,
      width: "50%",
      marginRight:2
    },
    btnUserText:{
      color: "#ffffff",
      fontSize: 13,
      textAlign: "center",
    },
    value:{
      color: "#ffffff",
      fontSize: 23,
      textAlign: "center",
      fontWeight: "bold"
    },
    valueText:{
      color: "#ffffff",
      fontSize: 15,
      textAlign: "center",
    },
    btnPlans:{
      backgroundColor: "#FECD08",
      borderRadius: 80,
      paddingVertical: 15,
      paddingHorizontal: 100,
      width: "100%"
    },
    btnPlansText:{
      color: "#000",
      fontSize: 15,
      fontWeight: "bold"
    },
    textInformation:{
      color: "#ffffff",
      fontSize: 14,
      textAlign: "center",
      paddingHorizontal:30,
    }
  });
  
  return (
  <ScrollView style={Style.container} scrollEnabled={true}>
    <View style={Style.bk1}>

      <Header></Header>

      <View style={Style.containerData}>
        <View style={Style.containerImg}>        
          <TouchableOpacity
              style={Style.btnUser}
              activeOpacity={0.5}>
                {/*<Avatar rounded source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",}}/>*/}
                
              <Text style={Style.btnUserText}> 
                  {textBtnUser}                         
              </Text>          
          </TouchableOpacity>
        </View>

        <View style={Style.spaceBetweenViews}>
          <Text style={Style.valueText}>Valor disponível para viagem:</Text>
          <Text style={Style.value}> R$ {value}</Text>
        </View>

        <View>
          <TouchableOpacity
                style={Style.btnPlans}
                activeOpacity={0.5}>
                <Text style={Style.btnPlansText}> 
                    {textBtnPlans}                         
                </Text>          
            </TouchableOpacity>
        </View>

        <View style={Style.spaceBetweenViews}>
          <Text style={Style.textInformation}>{textInformation}</Text>
        </View>
      </View>
    </View>  

    <View style={Style.lineTitlePage}>
      <Text style={Style.textTitlePage}>Histórico de Pagamentos</Text>
    </View>

    <View style={Style.bk2}> 
    </View>  
  </ScrollView>
  );
}
