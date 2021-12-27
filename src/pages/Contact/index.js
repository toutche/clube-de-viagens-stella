import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderWithIcon from '../../components/HeaderWithIcon';
import BodyContact from './BodyContact';

const Contact = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderWithIcon
                navigation={navigation}
            />
            <BodyContact />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Contact;