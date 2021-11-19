import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SlidesDetails from './SlidesDetails';

const Details = ({ route }) => {
    const { item } = route.params

    return (
        <View style={styles.container}>
            <SlidesDetails
                item={item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
    }
})

export default Details