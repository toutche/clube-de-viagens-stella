import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import CustomAvatar from '../CustomAvatar';

const CardAvatar = ({
    uri = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-black-gold-high-end-atmosphere-business-card-background-image_243091.jpg'
}) => {

    const renderText = (text, style) => {
        return (
            <View style={style}>
                <Text style={styles.text}>{text}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri }}
                imageStyle={styles.image}
                style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://lh3.googleusercontent.com/proxy/HbuGCTy8K3ZUmYrRlMxe_8wD9nSoxUX6mN3sVsASqBIWR1iAbD_ur0abAxafCrwrwP1X1JWtuAi6mkNZJRKhQpi71SZKYg' }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.containerAvatar}>
                        <CustomAvatar
                            item={'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg'}
                        />
                    </View>
                    <View style={styles.containerText}>
                        {renderText('Fernanda da Silva Lima', styles.name)}
                        <View style={styles.containerDirection}>
                            {renderText('CPF: 000.245.978-09', styles.cpf)}
                            {renderText('SP', styles.state)}
                        </View>
                        {renderText('Assinante desde 08/2020', styles.subscriber)}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 20
    },
    logo: {
        width: 80,
        height: 70,
        alignSelf: 'center'
    },
    imageContainer: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.8,
    },
    containerAvatar: {
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    containerText: {
        justifyContent: 'center',
        flex: 0.92
    },
    containerDirection: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        borderRadius: 15
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 12.5,
        color: '#555'
    },
    name: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    cpf: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        marginRight: 12,
        borderRadius: 5
    },
    state: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5
    },
    subscriber: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 5
    }
})

export default CardAvatar;