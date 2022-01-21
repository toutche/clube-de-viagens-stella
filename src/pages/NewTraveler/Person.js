import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { BLUE_COLOR } from '../../utils/variables';

const Person = ({ item, index }) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subTitle}>{item.age} anos</Text>
            </View>
            <Switch
                trackColor={{ false: "#d1d1d1", true: "#d1d1d1" }}
                thumbColor={isEnabled ? BLUE_COLOR : "#d1d1d1"}
                onValueChange={toggleSwitch}
                ios_backgroundColor={'#d1d1d1'}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    subTitle: {
        fontSize: 14,
        color: '#777'
    }
})

export default Person