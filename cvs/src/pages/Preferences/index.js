import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AnimatedCarousel from './AnimatedCarousel';
import ImageHeader from './ImageHeader';
import CustomIcon from '../../components/CustomIcon';
import TextWelcome from './TextWelcome';
import Copyright from '../../components/Copyright';

export default () => {
    return (
        <View style={styles.container}>
            <CustomIcon type={AntDesign} name={'arrowleft'} containerStyle={styles.icon} />
            <ImageHeader />
            <TextWelcome textStyle={styles.text} title={'Tudo bem Jéssica?'} subTitle={'Queremos saber mais sobre você :)'} />
            <AnimatedCarousel />
            <Copyright display={'none'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    }
})

