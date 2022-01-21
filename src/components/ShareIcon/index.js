import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ShareIcon = ({
    containerStyle,
    shareOpen
}) => {
    return (
        <TouchableWithoutFeedback onPress={shareOpen}>
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