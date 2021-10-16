import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions  } from "react-native";
import {ArrowRightOutlined} from "@ant-design/icons"

import Carousel from "./CarouselCards";
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height


export default function NotificationsPage() {

  return (
    <View style={{
      backgroundColor: "#c70c34", 
      flexDirection: "column",
      height: "100%"
    }}>
      <View style={styles.background}>
        <View style={styles.container}>        
          <Carousel/>
        </View>

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
      paddingVertical: 50
    },
  })