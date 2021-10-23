import React, { useState } from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    ImageBackground
} from "react-native";

import {
    FONT_SIZE_BODY,
    FONT_SIZE_SUBTITLE,
    HEIGHT,
    PRIMARY_COLOR,
    SECOND_COLOR,
    TEXT_COLOR_BKCOLORFUL,
    TEXT_COLOR_BKWHITE,
    WIDTH
} from "../../../utils/variables";

import Copyright from "../../../components/Copyright";
import Location from './Location';
import CustomButton from "../../../components/CustomButton";

const titlePage = "Poxa, não achamos o seu endereço :("
const subtitlePage = "Você pode nos ajudar e indicar o seu endereço?."
const text = "Sabendo um pouco mais de você, poderemos conectar você com a sua próxima viagem!"

const GetLocation = () => {

    const [address, setAddress] = useState('')

    return (
        <ScrollView style={Style.container} contentContainerStyle={Style.content}>

            <ImageBackground source={require("../../../../assets/header/Location.jpg")} style={Style.image} />

            <View style={Style.body}>

                <Text style={Style.title}>{titlePage}</Text>

                <Text style={Style.subtitle}>{subtitlePage}</Text>

                <Text style={Style.subtitle}>{text}</Text>

                <Location
                    text={address}
                    onChange={text => setAddress(text)}
                />

                {address ?
                    <CustomButton
                        containerStyle={Style.button}
                        titleStyle={Style.buttonText}
                        title={'Confirmar'}
                    />
                    : null
                }

            </View>

            <Copyright display={1} />

        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
    },
    buttonText: {
        paddingHorizontal: 5,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: "center",
        textTransform: "uppercase",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: '100%',
        marginTop: 15,
        borderRadius: 25,
        borderColor: TEXT_COLOR_BKCOLORFUL,
        backgroundColor: TEXT_COLOR_BKCOLORFUL,
        borderWidth: 1,
    },
    content: {
        justifyContent: 'space-between',
        flexGrow: 1
    },
    image: {
        aspectRatio: 1.5
    },
    body: {
        flex: 1,
        paddingHorizontal: '10%',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: TEXT_COLOR_BKCOLORFUL,
        textAlign: "center",
        marginVertical: 10
    },
    subtitle: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 14.5,
        textAlign: "center",
        marginBottom: 10
    }
})

export default GetLocation