import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../../components/Menu';
import BodyDashboard from './BodyDashboard';
import HeaderDashboard from './HeaderDashboard';


const Dashboard = ({ navigation }) => {
    const [option, setOption] = useState(0)
    const [isVisible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <Menu
                onClose={() => setVisible(!isVisible)}
                isVisible={isVisible}
            />
            <HeaderDashboard
                menuOpen={() => setVisible(!isVisible)}
                option={option}
                setOption={value => setOption(value)}
                navigation={navigation}
            />
            <BodyDashboard
                navigation={navigation}
                display={option}
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