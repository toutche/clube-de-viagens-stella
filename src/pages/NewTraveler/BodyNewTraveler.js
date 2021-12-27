import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import QuantifyTravel from '../../components/QuantifyTravel';
import { BLUE_COLOR, PRIMARY_COLOR } from '../../utils/variables';
import Person from './Person';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import CustomInput from '../../components/CustomInput';

const BodyNewTraveler = () => {
    const [data, setData] = useState([{
        name: 'Fernando Lima Rocha',
        age: 20
    }, {
        name: 'Fernando Lima Rocha',
        age: 20
    }, {
        name: 'Fernando Lima Rocha',
        age: 20
    }])

    const [form, setForm] = useState({
        name: '',
        date: '',
        credential: ''
    })

    return (
        <ScrollView contentContainerStyle={styles.containerScroll}>
            <Text style={styles.title}>Adicione viajantes</Text>
            <Text style={styles.subTitle}>Você pode habilitar ou desabilitar os viajantes cadastrados.</Text>

            <QuantifyTravel />

            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={styles.list}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item, index }) => <Person
                        item={item}
                        index={index}
                    />}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.text}>Viajante</Text>
                <CustomInput
                    containerStyle={styles.containerInput}
                    inputStyle={styles.input}
                    size={16}
                    color={'#c1c1c1'}
                    placeholder="Insira o nome"
                    placeholderTextColor={'#a1a1a1'}
                    type={FontAwesome}
                    name={'user'}
                    value={form.name}
                    onChangeText={text => setForm({
                        ...form,
                        name: text
                    })}
                />
                <CustomInput
                    containerStyle={styles.containerInput}
                    inputStyle={styles.input}
                    placeholder="Data de nascimento"
                    placeholderTextColor={'#a1a1a1'}
                    size={16}
                    color={'#c1c1c1'}
                    type={FontAwesome}
                    name={'envelope'}
                    value={form.date}
                    onChangeText={text => setForm({
                        ...form,
                        date: text
                    })}
                />
                <CustomInput
                    containerStyle={styles.containerInput}
                    inputStyle={styles.input}
                    placeholder="RG ou CPF"
                    keyboardType={'numeric'}
                    placeholderTextColor={'#a1a1a1'}
                    size={16}
                    k
                    color={'#c1c1c1'}
                    type={FontAwesome}
                    name={'envelope'}
                    value={form.credential}
                    onChangeText={text => setForm({
                        ...form,
                        credential: text
                    })}
                />
            </View>

            <CustomButton
                left
                type={AntDesign}
                name={'pluscircleo'}
                color={BLUE_COLOR}
                size={20}
                containerStyle={styles.buttonAdc}
                titleStyle={styles.textButtonAdc}
                title={`Adicionar novo viajante`}
            />

            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`Próximo`}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        backgroundColor: '#f4f6ff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexGrow: 1
    },
    form: {
        marginVertical: 5
    },
    containerInput: {
        borderColor: 'white',
        backgroundColor: 'white'
    },
    input: {
        color: '#555'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: BLUE_COLOR,
        borderRadius: 100,
        marginVertical: 15,
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    buttonAdc: {
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: BLUE_COLOR,
        borderRadius: 100,
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonAdc: {
        fontSize: 13.5,
        color: BLUE_COLOR,
        textAlign: 'center',
        marginLeft: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#d1d1d1'
    },
    list: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 5,
        marginBottom: 15
    },
    text: {
        color: '#333',
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center'
    },
    title: {
        color: '#333',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 13.5,
        textAlign: 'center',
        color: '#555'
    }
})
export default BodyNewTraveler