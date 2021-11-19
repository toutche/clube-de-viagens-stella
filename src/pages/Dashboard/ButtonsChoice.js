import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

const ButtonsChoice = ({ value, onPress }) => {
    return (
        <View style={styles.container}>
            <CustomButton
                onPress={() => onPress(0)}
                containerStyle={[styles.button, {
                    backgroundColor: value === 0 ? '#cf0110' : 'transparent'
                }]}
                titleStyle={styles.text}
                title={'Pacote de viagens'}
            />
            <CustomButton
                onPress={() => onPress(1)}
                containerStyle={[styles.button, {
                    backgroundColor: value === 1 ? '#cf0110' : 'transparent'
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