import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BodyDashboard from './BodyDashboard';
import HeaderDashboard from './HeaderDashboard';


const Dashboard = ({ navigation }) => {
    const [option, setOption] = useState(0)

    return (
        <View style={styles.container}>
            <HeaderDashboard
                option={option}
                setOption={value => setOption(value)}
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