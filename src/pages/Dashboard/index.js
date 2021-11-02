import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderDashboard from './HeaderDashboard';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <HeaderDashboard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    }
})


export default Dashboard