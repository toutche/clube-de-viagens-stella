import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { AntDesign } from "@expo/vector-icons";
import Body from './Body';
import { PRIMARY_COLOR } from '../../utils/variables';
import { logScreen } from '../../services/firebase';
import { ScreenView } from '../../services/firebase/constant';

export default ({ navigation, route }) => {
    useEffect(() => {
        logScreen(ScreenView.NewEscort);
    }, []);

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

