import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatMoneyToBRL } from '../../utils';
import { PRIMARY_COLOR } from '../../utils/variables';


const ProfileAvatar = ({
    title = 'Olá User',
    leftSize = 55,
    credit = 0,
    isHide = false,
    Plan = 'Ouro'
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
                {isHide &&
                    <View style={styles.viewHide}>
                        <Text style={styles.iconHide}>●</Text>
                        <Text style={styles.textHide}>{Plan}</Text>
                    </View>
                }
                <Text style={[styles.title, isHide && { top: 3 }]}>{title}</Text>
                {credit !== null && <Text style={[styles.subTitle, isHide && { top: 1 }]}>Crédito: R${formatMoneyToBRL(credit)}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewHide: {
        position: 'absolute',
        top: -10,
        left: 22,
        backgroundColor: '#e8bc0d',
        paddingVertical: 1,
        paddingHorizontal: 8,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconHide: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 1,
    },
    textHide: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 1
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle: {
        fontSize: 12,
        color: 'white',
    },
    image: {
        flex: 1,
        borderRadius: 100
    },
    left: {
        zIndex: 2,
        borderWidth: 2,
        borderRadius: 100,
        padding: 3,
        borderColor: '#f0c61e',
        backgroundColor: PRIMARY_COLOR,
        elevation: 6,
    },
    right: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        right: 20,
        marginRight: -20,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ff1324',
        borderWidth: 2,
        elevation: 5,
        borderColor: 'rgba(0,0,0,0.01)',
    }
})

export default ProfileAvatar