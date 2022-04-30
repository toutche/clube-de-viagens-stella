import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
const height = Dimensions.get("window").height; 
const width = Dimensions.get("window").width; 

const Banner = () => {
    return (
        <View>
            <Image source={{ uri: "https://placeimg.com/640/480/tech/grayscale" }} style={styles.img} />
        </View>)
}
const styles = StyleSheet.create({
    img: {
        height: height * .22, 
        width: width * .95, 
        margin: 10,
        borderRadius: 5
    }
})

export default Banner;
