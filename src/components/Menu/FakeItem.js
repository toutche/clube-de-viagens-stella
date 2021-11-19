import React from 'react';
import { View, StyleSheet } from 'react-native';

const FakeItem = () => {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 100
    }
})

export default FakeItem;