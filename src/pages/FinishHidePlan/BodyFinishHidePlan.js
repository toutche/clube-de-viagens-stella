import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { PRIMARY_COLOR } from '../../utils/variables';
import CurrentHide from './CurrentHide';


const BodyFinishHidePlan = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <Text style={styles.title}>Todos os detalhes foram enviados para o e-mail
                <Text style={{ color: 'blue' }}> teste@gmail.com.</Text>
            </Text>
            <CurrentHide />
            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`Ver pacotes e hoteis`}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR
    },
    containerScroll: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexGrow: 1,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 15,
        color: '#777',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20
    },
    button: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        height: 50,
        marginVertical: 20,
        width: '100%',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14.5,
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center'
    }
})

export default BodyFinishHidePlan