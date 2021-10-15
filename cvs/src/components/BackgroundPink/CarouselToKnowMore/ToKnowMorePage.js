import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions  } from "react-native";
import {ArrowRightOutlined} from "@ant-design/icons"

import Carousel from "./CarouselCards";
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height



export default function ToKnowMorePage() {

  return (
    <View style={{
      backgroundColor: "#c70c34", 
      flexDirection: "column",
      height: "100%"
    }}>
      <View style={styles.background}>
        <Text style={styles.title}>
            Queremos saber mais sobre você
          </Text>
        <View style={styles.container}>        
          <Carousel/>
        </View>

        <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}>

          <Text style={styles.btnText}>Pular
            <ArrowRightOutlined style={{ marginLeft: 15, fontSize: 20}}/>
          </Text>
          
        </TouchableOpacity>        
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#c70c34", 
    alignContent: "stretch",
    width: WIDTH,
  },
    container: {
      flex: 3,
      margin: "0 auto",
      padding: 0,
      flexDirection:"row",
      justifyContent: "flex-start",
      alignContent: "flex-start",
    },
    title: {
      flex: 1,
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      paddingVertical: 30,
      paddingHorizontal: 0
    },
    button: {      
      alignItems: "flex-end", 
      marginRight: 20,
      flex: 1,
      top: -45
    },  
    btnText: {
      color: "#FFFFFF",     
      fontSize: 16,
      fontWeight: "300",
      display: "flex",      
    }
  })
