import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderDashboard from './HeaderDashboard';


const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderDashboard
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default Dashboard;