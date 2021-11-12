import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import ProfileAvatar from '../../components/ProfileAvatar';
import CustomStatusBar from '../../components/CustomStatusBar';
import { PRIMARY_COLOR } from '../../utils/variables';
import SlidesDashboard from './SlidesDashboard';
import ButtonsChoice from './ButtonsChoice';


const HeaderDashboard = ({ navigation, option, setOption }) => {
    return (
        <View style={styles.container}>
            <CustomStatusBar />

            <View style={styles.profile}>
                <CustomIcon
                    size={22}
                    onPress={() => navigation.goBack()}
                    type={SimpleLineIcons}
                    name={'menu'}
                    containerStyle={styles.iconLeft}
                />

                <CustomIcon
                    size={26}
                    onPress={() => navigation.goBack()}
                    type={Ionicons}
                    name={'notifications-outline'}
                    containerStyle={styles.iconRight}
                />

                <ProfileAvatar title={`Olá Fernanda`} />
            </View>

            <SlidesDashboard />

            <Text style={styles.title}>Hospedagens em locais incríveis</Text>
            <Text style={styles.subTitle}>com preços exclusivos</Text>

            <ButtonsChoice
                value={option}
                onPress={value => setOption(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    iconLeft: {
        padding: 10,
        position: 'absolute',
        left: 5
    },
    iconRight: {
        padding: 10,
        right: 5,
        position: 'absolute'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    subTitle: {
        fontSize: 12.5,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10
    }
})

export default HeaderDashboard