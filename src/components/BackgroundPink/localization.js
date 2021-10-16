import * as React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

/*Componentes internos do app */
import TitleInternal from "../common/titleInternal"


export default function LocalizationScreen({ navigation, route }){
  return (
    <View>
      <TitleInternal 
      styleTitle="titleBKColorful"
      titlePage="Estamos buscando a sua localização"/>  
      <StatusBar style="auto" />    
    </View>
  );
}
