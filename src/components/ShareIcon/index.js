import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShareModal from '../ShareModal';


const ShareIcon = ({ item, option = 0, containerStyle }) => {
    return (
        <TouchableWithoutFeedback onPress={() => ShareModal.show({ ...item, option })}>
            <View style={containerStyle}>
                <Ionicons
                    style={styles.icon}
                    name={'share-social-sharp'}
                    size={26}
                    color={'#12aaeb'}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    icon: {
        right: 1,
        top: 1
    }
})

export default ShareIcon