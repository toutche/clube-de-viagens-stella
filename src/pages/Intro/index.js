import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import {
    FONT_SIZE_BODY,
    HEIGHT,
    PRIMARY_COLOR,
    SECOND_COLOR,
    TEXT_COLOR_BKCOLORFUL,
    TITLE_COLOR_BKCOLORFUL,
    WIDTH
} from "../../utils/variables";
import AnimatedCarousel from "./AnimatedCarousel";

export default ({ navigation }) => {

    return (
        <View style={Style.container}>
            <AnimatedCarousel navigation={navigation} />
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "stretch",
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: PRIMARY_COLOR
    },

})