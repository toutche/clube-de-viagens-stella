import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useFilter } from '../../contexts/filter';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { IS_IOS } from '../../utils/consts'
import { maskOnlyNumbers } from '../../utils/masks';

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
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={3}
                onChangeText={text =>
                    setForm({
                        ...form,
                        days: maskOnlyNumbers(text)
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
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={2}
                onChangeText={text =>
                    setForm({
                        ...form,
                        mouth: maskOnlyNumbers(text)
                    })
                }
                value={form.mouth}
                style={styles.input}
            />
            <TextInput
                placeholder='Qual ano?'
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={4}
                onChangeText={text =>
                    setForm({
                        ...form,
                        year: maskOnlyNumbers(text)
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
        paddingVertical: IS_IOS ? 4 : 2,
        borderWidth: 1,
        borderRadius: 999,
        borderColor: '#d1d1d1',
        fontSize: 14.5,
        paddingVertical: IS_IOS ? 8 : 4,
        paddingHorizontal: 12,
        marginBottom: 8,
        width: '90%',
        includeFontPadding: false,
        fontFamily: FONT_DEFAULT_STYLE,
    },
    button_container: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        height: 50,
        marginTop: 8,
        marginBottom: 4,
        backgroundColor: PRIMARY_COLOR
    },
    button_text: {
        color: 'white',
        fontSize: 14.5,
        fontFamily: FONT_DEFAULT_STYLE
    }
})
