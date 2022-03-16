import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

export default () => {
    return (
        <View style={styles.container}>
            <CustomHeader title={'Acompanhante'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

