import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BodyContractedPackages from './BodyContractedPackages';
import HeaderContractedPackages from './HeaderContractedPackages';
import ModalCancel from './ModalCancel';

const ContractedPackages = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <ModalCancel
                isVisible={isVisible}
                onClose={() => setVisible(!isVisible)}
            />
            <HeaderContractedPackages
                navigation={navigation}
            />
            <BodyContractedPackages
                openModal={() => setVisible(!isVisible)}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ContractedPackages