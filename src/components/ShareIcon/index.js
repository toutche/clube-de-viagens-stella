import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ShareIcon = ({
    containerStyle
}) => {
    const [share, setShare] = useState(false)

    const pressHandler = () => {
        setShare(!share)
        alert('click')
    }

    return (
        <TouchableWithoutFeedback onPress={pressHandler}>
            <View style={containerStyle}
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
    icon: {
        right: 1,
        top: 1
    }
})

export default ShareIcon