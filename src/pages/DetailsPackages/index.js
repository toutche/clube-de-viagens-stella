import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ShareModal from '../../components/ShareModal';
import BodyDetailsPackages from './BodyDetailsPackages';
import HeaderDetailsPackages from './HeaderDetailsPackages';


const DetailsPackages = ({
    navigation,
    route
}) => {
    const { item } = route.params
    const [isVisible, setVisible] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <ShareModal
                onClose={() => setVisible(!isVisible)}
                isVisible={isVisible}
            />
            <HeaderDetailsPackages
                navigation={navigation}
                item={item}
                shareOpen={() => setVisible(!isVisible)}
            />
            <BodyDetailsPackages
                item={item}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    }
})

export default DetailsPackages