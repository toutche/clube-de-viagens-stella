import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import ShareModal from '../../components/ShareModal';
import BodyDetails from './BodyDetails';
import HeaderDetails from './HeaderDetails';

const Details = ({ route, navigation }) => {
    const { item } = route.params
    const [isVisible, setVisible] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <ShareModal
                onClose={() => setVisible(!isVisible)}
                isVisible={isVisible}
            />
            <HeaderDetails
                shareOpen={() => setVisible(!isVisible)}
                navigation={navigation}
                item={item}
            />
            <BodyDetails
                item={item}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})

export default Details