import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BodyHiringPackageDetails from './BodyHiringPackageDetails';
import HeaderHiringPackageDetails from './HeaderHiringPackageDetails';
import ModalPayment from './ModalPayment';


const HiringPackageDetails = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <ModalPayment
                isVisible={isVisible}
                onClose={() => setVisible(!isVisible)}
            />
            <HeaderHiringPackageDetails
                navigation={navigation}
            />
            <BodyHiringPackageDetails
                openModal={() => setVisible(!isVisible)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HiringPackageDetails