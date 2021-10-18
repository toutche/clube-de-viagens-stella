import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome"


export default function Header() {

    return (
        <View style={styles.header}>
            <View style={styles.containerIcon}>
                <TouchableWithoutFeedback>
                    <Icon style={styles.iconBars} name={"bars"} size={20} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.containerImg}>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/img/logo/logo-color.png")}
                />
            </View>

            <View style={styles.containerIcon}>
                <TouchableWithoutFeedback>
                    <Icon style={styles.iconBars} name={"bell"} size={20} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        resizeMode: "contain",
        marginTop: -10
    },
    iconBars: {
        color: "#ffffff",
        paddingTop: 20
    },
    header: {
        backgroundColor: "transparent",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 0
    },
    containerImg: {
        width: 100,
        height: 100,
    },
    containerIcon: {}
})

