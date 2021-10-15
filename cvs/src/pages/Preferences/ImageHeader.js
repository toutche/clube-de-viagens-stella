import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from "react-native-elements";

const Preferences = () => {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size={60}
                source={{ uri: 'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg' }}
                overlayContainerStyle={styles.containerStyle}
                containerStyle={styles.containerStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
    overlayContainerStyle: {
        backgroundColor: 'white',
    },
    containerStyle: {
        borderColor: '#d12522',
        borderWidth: 1.5
    }
})


export default Preferences