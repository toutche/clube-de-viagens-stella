import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

const FavIcon = () => {
    const buttonRef = useRef(null)
    const [fav, setFav] = useState(false)

    const pressHandler = () => {
        setFav(!fav)
        buttonRef.current.pulse()
    }

    return (
        <TouchableWithoutFeedback onPress={pressHandler}>
            <Animatable.View style={styles.container}
                ref={buttonRef}
                useNativeDriver
                duration={1000}>
                <AntDesign
                    name={fav ? "star" : "staro"}
                    size={14}
                    color={'#e8bc0d'}
                />
                <Text style={styles.star}>4.5</Text>
                <Text style={styles.total}>(345)</Text>
            </Animatable.View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 100,
        left: 30,
        top: 10,
        position: 'absolute',
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    total: {
        color: '#777',
        fontSize: 12.5
    },
    star: {
        color: 'blue',
        fontSize: 12.5,
        marginHorizontal: 3
    }
})

export default FavIcon;