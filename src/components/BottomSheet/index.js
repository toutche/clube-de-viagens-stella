import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useFilter } from '../../contexts/filter';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';

export default ({ isVisible, onClose, id }) => {
    const {
        filterDays,
        filterMouth,
        filterYear,
        setFilterDays,
        setFilterMouth,
        setFilterYear
    } = useFilter()

    const [form, setForm] = useState({
        days: '',
        mouth: '',
        year: ''
    })

    const _renderDays = (
        <>
            <TextInput
                placeholder='Quantos dias?'
                onChangeText={days =>
                    setForm({
                        ...form,
                        days
                    })
                }
                value={form.days}
                style={styles.input}
            />
        </>
    )

    const _renderMouthYear = (
        <>
            <TextInput
                placeholder='Qual mês?'
                onChangeText={mouth =>
                    setForm({
                        ...form,
                        mouth
                    })
                }
                value={form.mouth}
                style={styles.input}
            />
            <TextInput
                placeholder='Qual ano?'
                onChangeText={year =>
                    setForm({
                        ...form,
                        year
                    })
                }
                value={form.year}
                style={styles.input}
            />
        </>
    )

    const handlePress = () => {
        if (id === 'days') {
            setFilterDays(Number(form.days))
        } else if (id === 'mouth/year') {
            setFilterMouth(Number(form.mouth))
            setFilterYear(Number(form.year))
        }
        onClose()
    }

    return (
        <Modal
            transparent
            statusBarTranslucent
            visible={isVisible}
            animationType='fade'
            onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.content}>
                            {id === 'days' ? _renderDays : _renderMouthYear}
                            <TouchableOpacity onPress={handlePress} style={styles.button_container}>
                                <Text style={styles.button_text}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,.5)",
        justifyContent: "flex-end",
    },
    content: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: PRIMARY_COLOR,
        borderBottomWidth: 2,
        marginBottom: 12,
        width: '90%'
    },
    button_container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        height: 50,
        marginTop: 16,
        marginBottom: 4,
        backgroundColor: PRIMARY_COLOR
    },
    button_text: {
        color: 'white',
        fontSize: 14.5,
        fontFamily: FONT_DEFAULT_STYLE
    }
})
