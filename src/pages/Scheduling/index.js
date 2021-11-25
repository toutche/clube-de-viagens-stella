import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Schedulin = () => {
    return (
        <View style={styles.container}>
            <CustomHeader
                leftIcon={AntDesign}
                leftName={'arrowleft'}
                leftSize={26}
                handlerLeft={() => { }}
                title={'Agendamento'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Schedulin;