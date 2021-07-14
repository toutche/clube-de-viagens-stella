//https://blog.logrocket.com/using-react-native-to-implement-a-carousel/


import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"
import {CloseOutlined, CheckOutlined} from '@ant-design/icons'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)
export const SLIDER_HEIGHT = Dimensions.get('window').height
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.7)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <View style={styles.areaButtons}>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <CloseOutlined style={{color: "#c70c34", fontSize: 40}}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <CheckOutlined style={{color: "#287DFD", fontSize: 40}}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 5,
    elevation: 7,
    margin: 'auto'
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 20,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,

  },
  areaButtons: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6'
  },
  button: {
    backgroundColor: "#fff",
    borderStyle: 'solid',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 50,
    padding: 15, 
  },  
})


export default CarouselCardItem
