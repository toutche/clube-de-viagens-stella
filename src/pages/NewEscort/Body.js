import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from '../../utils/variables';
import CustomButton from '../../components/CustomButton';
import api from '../../services/api';
import moment from 'moment';

export default ({ route, navigation }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        last_name: 'teste',
        birth_date: '',
        cpf: '',
        passport: ''
    })

    const handlerPress = () => {
        setLoading(true)
        api.post('/familiar/criar', {
            name: form?.name,
            last_name: form?.last_name,
            birth_date: (form?.birth_date).split('/').reverse().join('-'),
            cpf: form?.cpf,
            passport: form?.passport
        })
            .then((res) => {
                console.log(res.data)
                navigation.goBack()
            })
            .catch((e) => {
                console.log(e)
                setLoading(false)
            })
    }

    return (
        <ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.content}>

            <Text style={styles.title}>Novo viajante</Text>

            <CustomInput
                containerStyle={styles.container_input}
                inputStyle={styles.input}
                color={"#c1c1c1"}
                placeholder='Insira o nome'
                placeholderTextColor={"#a1a1a1"}
                type={FontAwesome}
                size={18}
                name={"user-o"}
                value={form?.name}
                onChangeText={name => setForm({
                    ...form,
                    name
                })}
            />

            <CustomInput
                containerStyle={styles.container_input}
                inputStyle={styles.input}
                placeholder='Data de nascimento'
                placeholderTextColor={"#a1a1a1"}
                color={"#c1c1c1"}
                size={18}
                type={FontAwesome}
                name={"calendar-o"}
                value={form?.birth_date}
                onChangeText={birth_date => setForm({
                    ...form,
                    birth_date
                })}
            />
            <CustomInput
                containerStyle={styles.container_input}
                inputStyle={styles.input}
                lenght={11}
                placeholder='CPF'
                keyboardType={"numeric"}
                placeholderTextColor={"#a1a1a1"}
                color={"#c1c1c1"}
                size={18}
                type={FontAwesome}
                name={"id-card-o"}
                value={form?.cpf}
                onChangeText={cpf => setForm({
                    ...form,
                    cpf
                })}
            />

            <CustomInput
                containerStyle={styles.container_input}
                inputStyle={styles.input}
                placeholder='Passaporte (Viagem internacional)'
                placeholderTextColor={"#a1a1a1"}
                color={"#c1c1c1"}
                size={18}
                lenght={11}
                type={FontAwesome5}
                name={"passport"}
                value={form?.passport}
                onChangeText={passport => setForm({
                    ...form,
                    passport
                })}
            />

            <View style={styles.container_buttons}>
                <CustomButton
                    onPress={() => navigation.goBack()}
                    size={24}
                    containerStyle={styles.button_left}
                    titleStyle={styles.button_text_left}
                    title={('Cancelar').toUpperCase()}
                />

                <CustomButton
                    onPress={handlerPress}
                    size={24}
                    loadingApiColor={'white'}
                    loadingApi={loading}
                    containerStyle={styles.button_right}
                    titleStyle={styles.button_text_right}
                    title={('Salvar').toUpperCase()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: '#e1e1e1'
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    title: {
        marginVertical: 8,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: FONT_DEFAULT_STYLE
    },
    container_input: {
        borderColor: "white",
        backgroundColor: "white",
    },
    input: {
        color: "#555",
    },
    container_buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginVertical: 28
    },
    button_left: {
        borderWidth: 1.5,
        borderColor: '#c1c1c1',
        borderRadius: 999,
        height: 50,
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
    },
    button_text_left: {
        fontSize: 13.5,
        color: '#b1b1b1',
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        marginLeft: 10,
    },
    button_right: {
        borderRadius: 999,
        backgroundColor: BLUE_COLOR,
        height: 50,
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
    },
    button_text_right: {
        fontSize: 13.5,
        color: 'white',
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        marginLeft: 10,
    },
})

