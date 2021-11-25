import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';
import CustomStatusBar from '../CustomStatusBar';

const CustomHeader = ({
    title,
    leftName,
    leftSize,
    leftIcon,
    rightName,
    rightSize,
    rightIcon,
    handlerRight,
    handlerLeft,
    containerStyle
}) => {
    const Left = leftIcon || null
    const Right = rightIcon || null

    return (
        <>
            <CustomStatusBar />
            <View style={[styles.container, containerStyle]}>
                {Left &&
                    <TouchableOpacity style={styles.left} onPress={handlerLeft}>
                        <Left name={leftName} color={'white'} size={leftSize} />
                    </TouchableOpacity>
                }
                <Text style={styles.title}>{title}</Text>
                {Right &&
                    <TouchableOpacity style={styles.right} onPress={handlerRight}>
                        <Right name={rightName} color={'white'} size={rightSize} />
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR
    },
    right: {
        position: 'absolute',
        right: 10,
        padding: 5,
    },
    left: {
        position: 'absolute',
        left: 10,
        padding: 5,
    },
    title: {
        fontSize: 17,
        color: 'white'
    }
})

export default CustomHeader