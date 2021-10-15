import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Button } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';

import Dot from '../../components/Dot';
import CustomButton from '../../components/CustomButton';
const OverflowButton = ({ index, onPress, data }) => {

    const { width } = useWindowDimensions()

    const renderMap = () => {
        return data.map((_, i) => {
            if (i < 6) return <Dot key={i} index={i} currentIndex={index} />
        })
    }

    return (
        <View style={[styles.container, { width }]}>
            {index === 5 ?
                <View style={styles.renderComponent}>
                    <Button
                        onPress={onPress}
                        buttonStyle={styles.buttonStyleElements}
                        containerStyle={styles.containerStyleElements}
                        titleStyle={styles.titleStyleElements}
                        title="Finalizar Pesquisa"
                        loading={false}
                    />
                </View>
                :
                <View style={styles.renderComponent}>
                    {renderMap()}
                    <CustomButton
                        onPress={onPress}
                        containerStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title={'Pular'}
                        type={AntDesign}
                        name={'arrowright'}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 10,
        marginTop: 15
    },
    renderComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyleElements: {
        height: 50,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    containerStyleElements: {
        width: '80%'
    },
    titleStyleElements: {
        color: '#e10717',
        textTransform: 'uppercase',
        fontSize: 14.5
    },
    button: {
        flexDirection: 'row',
        right: '15%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 70
    },
    buttonText: {
        color: '#f9f0f0',
        fontSize: 17
    }
})

export default OverflowButton