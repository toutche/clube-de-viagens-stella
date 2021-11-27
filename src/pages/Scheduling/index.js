import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import BoardingPlace from './BoardingPlace';
import Travel from '../../components/Travel';
import Travelers from './Travelers';
import TravelCard from '../../components/TravelCard';
import Note from './Note';
import CustomButton from '../../components/CustomButton';

const Scheduling = () => {
    return (
        <View style={styles.container}>
            <CustomHeader
                leftIcon={AntDesign}
                leftName={'arrowleft'}
                leftSize={26}
                handlerLeft={() => { }}
                title={'Agendamento'}
            />

            <ScrollView style={styles.body}>
                <BoardingPlace />
                <Travel />
                <Travelers />
                <TravelCard />
                <Note />
                <CustomButton
                    containerStyle={styles.button}
                    titleStyle={styles.textButton}
                    title={`Próximo`}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        backgroundColor: '#e1e1e1',
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        height: 50,
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14.5,
        color: 'white',
        textAlign: 'center'
    }
})

export default Scheduling