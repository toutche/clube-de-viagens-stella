import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AnimatedCarousel from './AnimatedCarousel';
import CustomIcon from '../../components/CustomIcon';
import TextWelcome from './TextWelcome';
import Copyright from '../../components/Copyright';
import CustomAvatar from '../../components/CustomAvatar';
import { PRIMARY_COLOR, TEXT_COLOR_BKCOLORFUL } from '../../utils/variables';

export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomIcon
                size={26}
                onPress={() => navigation.goBack()}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={styles.icon}
            />
            <CustomAvatar
                containerStyle={styles.avatar}
                item={'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg'}
            />
            <TextWelcome
                textStyle={styles.text}
                title={'Tudo bem Jéssica?'}
                subTitle={'Queremos saber mais sobre você :)'}
            />
            <AnimatedCarousel />
            <Copyright display={1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
    },
    avatar: {
        width: 70,
        height: 70,
        padding: 7,
        marginTop: 40,
        marginBottom: 0
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 15
    },
    icon: {
        left: 5,
        top: 25,
        padding: 10,
        position: 'absolute'
    }
})

