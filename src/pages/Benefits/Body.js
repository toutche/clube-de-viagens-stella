import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';


export default ({ data = [] }) => {

    const handlePress = () => {

    }

    return (
        <View style={styles.container}>
            {
                data?.data?.benefits.map((i, k) => {
                    return (
                        <View style={styles.content} key={k}>
                            <View style={styles.containerImage}>
                                <Image source={{ uri: i.icon }} style={styles.image} />
                            </View>
                            <Text style={styles.text}>{i.description}</Text>
                        </View>
                    )
                })
            }

            <CustomButton
                onPress={handlePress}
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={String('Faça parte do clube').toUpperCase()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: BLUE_COLOR,
        borderRadius: 100,
        height: 50,
        marginTop: 8,
        marginBottom: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 14.5,
        color: "white",
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    containerImage: {
        width: 70,
        height: 70,
        backgroundColor: "#d50615",
        elevation: 3,
        borderRadius: 100,
        padding: 12
    },
    image: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 999,
    },
    text: {
        flex: 1,
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#FFF',
        marginLeft: 16
    }
})

