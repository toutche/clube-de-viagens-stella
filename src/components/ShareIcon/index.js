import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ShareIcon = () => {
    const [share, setShare] = useState(false)

    const pressHandler = () => {
        setShare(!share)
        alert('click')
    }

    return (
        <TouchableWithoutFeedback onPress={pressHandler}>
            <View style={styles.container}
                useNativeDriver
                duration={1000}>
                <Ionicons
                    style={styles.icon}
                    name={'share-social-sharp'}
                    size={26}
                    color={'#12aaeb'}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        borderRadius: 100,
        left: 30,
        top: 68,
        position: 'absolute',
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        right: 1,
        top: 1
    }
})

export default ShareIcon