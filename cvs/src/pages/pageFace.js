import * as React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";

import { 
  WIDTH, 
  HEIGHT 
} from "../variables";

export default function Page1({ navigation, route }) {  

  const image = require("../../../assets/img/page1.png");
  
  const Style = StyleSheet.create({
    container:{
      flexDirection: "column",
      width: WIDTH
    },
    containerImg: {
      flex: 1     
    },
    imgTop:{
      justifyContent: "center",
      height: HEIGHT
    }
  });
    return (
      <ScrollView style={Style.container} scrollEnabled={true}>
        <View style={Style.containerImg}>
          <ImageBackground source={image} resizeMode="stretch" style={Style.imgTop}></ImageBackground>
        </View>
      </ScrollView>
    );
  }