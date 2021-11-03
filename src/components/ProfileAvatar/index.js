import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatMoneyToBRL } from '../../utils';
import { PRIMARY_COLOR } from '../../utils/variables';


const ProfileAvatar = ({
    leftSize = 50,
    credit = 0
}) => {
    const item = 'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg'

    return (
        <View style={styles.container}>
            <View style={[styles.left, {
                width: leftSize,
                height: leftSize
            }]}>
                <Image
                    style={styles.image}
                    source={{ uri: item }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.text}>Olá Fernanda</Text>
                {credit !== null && <Text style={styles.text}>Crédito: R${formatMoneyToBRL(credit)}</Text>}
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
        left: 20,
        borderWidth: 2,
        borderRadius: 100,
        padding: 3,
        borderColor: '#f0c61e',
        backgroundColor: PRIMARY_COLOR,
        elevation: 6,
    },
    right: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 4,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ef091a',
        borderWidth: 1,
        elevation: 5,
        borderColor: 'rgba(0,0,0,0.01)',
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default ProfileAvatar