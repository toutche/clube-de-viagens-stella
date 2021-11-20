import React from 'react';
import { View, Modal, StyleSheet, useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomIcon from '../CustomIcon';
import { PRIMARY_COLOR } from '../../utils/variables';
import { FontAwesome, Foundation } from '@expo/vector-icons';

const ShareModal = ({
    isVisible = true,
    onClose
}) => {
    const { width, height } = useWindowDimensions()
    const maxWidth = height / 2.2
    const maxHeight = height / 2.2

    return (
        <Modal
            statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.container} />
            <CustomIcon
                styleIcon={{
                    top: 2
                }}
                onPress={onClose}
                size={26}
                color={'white'}
                type={AntDesign}
                name={'close'}
                containerStyle={styles.icon}
            />
            <View style={[styles.bow, {
                height: width * .85,
                bottom: -width * .85 / 2,
                width: width * .8,
                maxWidth,
                maxHeight
            }]}>
                <CustomIcon
                    size={35}
                    color={PRIMARY_COLOR}
                    type={Foundation}
                    name={'mail'}
                    containerStyle={{
                        width: 54,
                        height: 54,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        position: 'absolute',
                        left: 0,
                        top: -30
                    }}
                />
                <CustomIcon
                    size={35}
                    color={'white'}
                    type={FontAwesome}
                    name={'whatsapp'}
                    containerStyle={{
                        width: 54,
                        height: 54,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                        position: 'absolute',
                        right: 0,
                        top: -30
                    }}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,50,150,.5)'
    },
    bow: {
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,0,0,.5)',
        borderWidth: 55,
        borderRadius: 1000,
        position: 'absolute',
        alignSelf: 'center'
    },
    icon: {
        backgroundColor: PRIMARY_COLOR,
        width: 80,
        height: 70,
        zIndex: 10,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -5,
        position: 'absolute',
        alignSelf: 'center'
    }
})

export default ShareModal