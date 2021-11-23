import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';
import CustomInput from '../../components/CustomInput';
import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

const BodyContact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <Text style={styles.title}>Entre em contato</Text>
            <Text style={styles.subTitle}>Podemos ajudar?</Text>
            <CustomInput
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                size={16}
                color={'#c1c1c1'}
                placeholder="Nome completo"
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
                placeholder="E-mail"
                placeholderTextColor={'#a1a1a1'}
                size={16}
                color={'#c1c1c1'}
                type={FontAwesome}
                name={'envelope'}
                value={form.email}
                onChangeText={text => setForm({
                    ...form,
                    email: text
                })}
            />
            <CustomInput
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                placeholder="Assunto"
                placeholderTextColor={'#a1a1a1'}
                size={16}
                color={'#c1c1c1'}
                type={FontAwesome}
                name={'envelope'}
                value={form.subject}
                onChangeText={text => setForm({
                    ...form,
                    subject: text
                })}
            />
            <CustomInput
                containerStyle={styles.containerInputMessage}
                inputStyle={styles.inputMessage}
                placeholder="Mensagem"
                placeholderTextColor={'#a1a1a1'}
                size={16}
                color={'#c1c1c1'}
                type={FontAwesome}
                name={'envelope'}
                value={form.message}
                onChangeText={text => setForm({
                    ...form,
                    message: text
                })}
                multiline
                lenght={300}
            />
            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`Enviar`}
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
    containerInputMessage: {
        height: 100,
        borderRadius: 15,
        paddingVertical: 10,
        borderColor: '#c1c1c1',
        alignItems: 'flex-start'
    },
    inputMessage: {
        color: '#555',
        textAlignVertical: 'top',
        bottom: 2,
        height: '100%'
    },
    containerInput: {
        borderColor: '#c1c1c1',
    },
    input: {
        color: '#555'
    },
    button: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        height: 50,
        marginVertical: 20,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14.5,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#444',
        marginTop: 20,
        fontSize: 17.5
    },
    subTitle: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 14,
        color: '#777'
    }
})

export default BodyContact;