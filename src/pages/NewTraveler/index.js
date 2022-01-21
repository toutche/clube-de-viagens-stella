import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { AntDesign } from '@expo/vector-icons';
import BodyNewTraveler from './BodyNewTraveler';

const NewTraveler = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomHeader
                leftIcon={AntDesign}
                leftName={'arrowleft'}
                leftSize={26}
                handlerLeft={() => navigation.goBack()}
                title={'Viajantes'}
            />
            <BodyNewTraveler />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default NewTraveler