import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatMoneyToBRL } from '../../utils';
import { PRIMARY_COLOR } from '../../utils/variables';


const ProfileAvatar = ({
    title = 'Olá User',
    leftSize = 50,
    credit = 0,
    isHide = false,
    Plan = 'default'
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
        justifyContent: 'center'
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
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 1
    },
    title: {
        fontSize: 12.5,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle: {
        fontSize: 11,
        color: 'white',
    },
    image: {
        flex: 1,
        borderRadius: 100
    },
    left: {
        borderWidth: 2,
        borderRadius: 100,
        padding: 3,
        borderColor: '#f0c61e',
        backgroundColor: PRIMARY_COLOR,
        elevation: 6,
    },
    right: {
        right: 20,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingTop: 5,
        paddingBottom: 5,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ef091a',
        borderWidth: 1,
        elevation: 5,
        borderColor: 'rgba(0,0,0,0.01)',
    }
})

export default ProfileAvatar