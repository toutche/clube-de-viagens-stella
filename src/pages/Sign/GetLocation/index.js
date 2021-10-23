import React, { useEffect, useRef, useState } from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    Animated,
    Keyboard
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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { consts } from "../../../utils/consts";
const titlePage = "Poxa, não achamos o seu endereço :("
const subtitlePage = "Você pode nos ajudar e indicar o seu endereço?."
const text = "Sabendo um pouco mais de você, poderemos conectar você com a sua próxima viagem!"

const GetLocation = () => {
    const googleRef = useRef()

    const [isKeyboard, setIsKeyboard] = useState(false)

    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [panel, setPanel] = useState(0)

    useEffect(() => {
        address && googleRef?.current?.setAddressText(address)
    }, [panel])

    useEffect(() => {
        const didShow = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const didHide = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {
            didShow.remove()
            didHide.remove()
        }
    }, [])

    function keyboardDidShow() {
        setIsKeyboard(true)
    }

    function keyboardDidHide() {
        setIsKeyboard(false)
    }

    const pressHander = (datas, details) => {
        setPanel(1)
        setAddress(details.formatted_address)
        setNumber('')
    }

    return (
        <View style={Style.container}>

            {!isKeyboard ?
                <ImageBackground source={require("../../../../assets/header/Location.jpg")} style={Style.image} />
                : null
            }

            <View style={Style.body}>

                {!isKeyboard ? panel ?
                    <Text style={Style.title}>Complete o seu endereço</Text>
                    :
                    <>
                        <Text style={Style.title}>{titlePage}</Text>

                        <Text style={Style.subtitle}>{subtitlePage}</Text>

                        <Text style={Style.subtitle}>{text}</Text>
                    </>
                    : null
                }
                {panel ?
                    <Location
                        isKeyboard={isKeyboard}
                        address={address}
                        numberAddress={number}
                        onChange={text => setAddress(text)}
                        changePanel={index => setPanel(index)}
                    />
                    :
                    <GooglePlacesAutocomplete
                        ref={googleRef}
                        placeholder='Digite o seu endereço'
                        enablePoweredByContainer={false}
                        minLength={1}
                        returnKeyType="search"
                        listViewDisplayed="auto"
                        fetchDetails
                        renderLeftButton={() => <AntDesign
                            size={22}
                            color={'red'}
                            name={'search1'}
                        />}
                        renderDescription={row => row.description}
                        onPress={pressHander}
                        query={{
                            key: consts.google_key,
                            language: 'pt-BR',
                            components: 'country:br',
                        }}
                        styles={autoCompleteStyle(isKeyboard)}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        GooglePlacesSearchQuery={{
                            rankby: 'distance',
                            type: 'store'
                        }}
                        GooglePlacesDetailsQuery={{ fields: 'formatted_address,geometry', }}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}
                    />
                }

            </View>

            {!isKeyboard ?
                <Copyright
                    display={1}
                />
                : null
            }

        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1
    },
    contentComplete: {
        backgroundColor: 'white',
        paddingVertical: 50,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 10,
        elevation: 5
    },
    image: {
        aspectRatio: 1.5
    },
    body: {
        flex: 1,
        paddingHorizontal: '10%'
    },
    title: {
        fontSize: 18,
        color: TEXT_COLOR_BKCOLORFUL,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 15
    },
    subtitle: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 14.5,
        textAlign: "center",
        marginBottom: 10
    }
})

const autoCompleteStyle = isKeyboard => ({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: isKeyboard ? 50 : 15,
        flex: 0
    },
    textInputContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 45,
        paddingLeft: 15,
        paddingRight: 5,
        borderColor: '#d1d1d1',
        borderRadius: 100,
        width: '100%'
    },
    textInput: {
        height: '100%',
        borderRadius: 100,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingBottom: 2,
        paddingLeft: 5,
        fontSize: 16,
    },
    listView: {
        marginHorizontal: 0,
        paddingHorizontal: 10,
        width: '100%',
        position: 'absolute',
        elevation: 5,
        top: 50,
        maxHeight: 168,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    description: {
        fontSize: 14.5,
    },
    row: {
        marginTop: 5,
        marginBottom: 5,
        height: 45,
    }
})

export default GetLocation