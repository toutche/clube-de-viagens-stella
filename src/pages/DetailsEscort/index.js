import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { AntDesign } from "@expo/vector-icons";
import Body from './Body';
import { PRIMARY_COLOR } from '../../utils/variables';

export default ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <CustomHeader
                leftName={'arrowleft'}
                leftSize={26}
                leftIcon={AntDesign}
                title={'Acompanhante'}
                handlerLeft={() => navigation.goBack()}
            />
            <Body {...{ navigation, route }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR
    }
})

