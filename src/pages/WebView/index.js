import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default ({ navigation, route: { params } }) => {

    return (
        <WebView
            style={styles.container}
            source={{ uri: params?.link }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
