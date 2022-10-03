import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Icon from './Icon';
import CustomStatusBar from '../CustomStatusBar';
import CustomIcon from "../../components/CustomIcon";
import { PRIMARY_COLOR } from '../../utils/variables';
import { useFilter } from '../../contexts/filter';

const HeaderWithIcon = ({ url = null, navigation }) => {
  const { isVisibleMenu, setVisibleMenu } = useFilter()
  return (
        <View style={styles.container}>
            <CustomStatusBar />
            <CustomIcon
                onPress={() => {
                    navigation.goBack()
                    setVisibleMenu(!isVisibleMenu)
                }}
                size={26}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={styles.icon}
            />
            <Icon {...{ url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 32
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    },
})

export default HeaderWithIcon;