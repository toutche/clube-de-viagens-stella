import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyDashboard from './BodyDashboard';
import HeaderDashboard from './HeaderDashboard';


const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderDashboard
                navigation={navigation}
            />
            <BodyDashboard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Dashboard;