//https://blog.logrocket.com/using-react-native-to-implement-a-carousel/

import React from "react"
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"
import {CloseOutlined, CheckOutlined} from "@ant-design/icons"

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)
export const SLIDER_HEIGHT = Dimensions.get("window").height
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.7)



const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>

      <View style={styles.icon}>
          <CheckOutlined style={{color: "#287DFD", fontSize: 40}}/>
      </View>

      <Text style={styles.header}>{item.title}</Text>
      
      <Text style={styles.body}>{item.text}</Text>

      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    color: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 5,
    paddingVertical: 50,
    elevation: 7,
    margin: "auto"
  },
  image: {
    width: 200,
    height: 200,
    margin: "auto",
    paddingHorizontal: 50,
    marginBottom: 40
  },
  header: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 20,
    paddingHorizontal: 40,
    textAlign: "center"
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingHorizontal: 40,
    paddingBottom: 50,
    paddingTop: 10,
    textAlign: "center"
  },
  icon: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#287DFD",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10, 
    width: 70,
    height: 70,
    margin: "auto"
  },  
})


export default CarouselCardItem
