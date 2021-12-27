import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyFinishHidePlan from './BodyFinishHidePlan';
import HeaderFinishHidePlan from './HeaderFinishHidePlan';


const FinishHidePlan = () => {
    return (
        <View style={styles.container}>
            <HeaderFinishHidePlan />
            <BodyFinishHidePlan />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default FinishHidePlan;