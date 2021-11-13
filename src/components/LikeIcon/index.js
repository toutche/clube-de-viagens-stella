import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '../../utils/variables';
import * as Animatable from 'react-native-animatable';

const LikeIcon = () => {
    const buttonRef = useRef(null)
    const [like, setLike] = useState(false)

    const pressHandler = () => {
        setLike(!like)
        buttonRef.current.pulse()
    }

    return (
        <TouchableWithoutFeedback onPress={pressHandler}>
            <Animatable.View style={styles.container}
                ref={buttonRef}
                useNativeDriver
                duration={1000}>
                <AntDesign
                    style={styles.icon}
                    name={like ? "heart" : "hearto"}
                    size={24}
                    color={PRIMARY_COLOR}
                />
            </Animatable.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        borderRadius: 100,
        left: 30,
        top: 55,
        position: 'absolute',
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        top: 2
    }
})

export default LikeIcon;