import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';


const ProfileAvatar = () => {
    const item = 'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg'

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    style={styles.image}
                    source={{ uri: item }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.text}>Olá Fernanda</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        borderRadius: 100
    },
    left: {
        zIndex: 1,
        left: 10,
        width: 55,
        height: 55,
        borderWidth: 2,
        borderRadius: 100,
        padding: 2.5,
        borderColor: '#f0c61e',
        backgroundColor: PRIMARY_COLOR,
        elevation: 12,
    },
    right: {
        height: 45,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ef091a',
        borderWidth: 1,
        elevation: 11,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    text: {
        fontSize: 15,
        color: 'white'
    }
})

export default ProfileAvatar