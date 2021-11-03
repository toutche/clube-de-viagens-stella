import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

const ButtonsChoice = () => {
    return (
        <View style={styles.container}>
            <CustomButton
                containerStyle={[styles.button, {
                    backgroundColor: 'transparent'
                }]}
                titleStyle={styles.text}
                title={'Pacote de viagens'}
            />
            <CustomButton
                containerStyle={[styles.button, {
                    backgroundColor: '#cf0110'
                }]}
                titleStyle={styles.text}
                title={'Hospedagem'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 13.5,
        color: 'white'
    }
})

export default ButtonsChoice