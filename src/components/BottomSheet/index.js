import React, { useState, useMemo } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useFilter } from '../../contexts/filter';
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { IS_IOS } from '../../utils/consts'
import { maskDate, maskOnlyNumbers } from '../../utils/masks';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const initial_form = {
    days: '',
    mouth: '',
    year: '',
    checkIn: '',
    checkOut: '',
    adult: '',
    children: '',
}

let id_check = null

export default ({ isVisible, onClose, id }) => {
    const {
        filterDays,
        filterMouth,
        filterYear,
        filterCheck,
        filterPeople,
        setFilterCheck,
        setFilterPeople,
        setFilterDays,
        setFilterMouth,
        setFilterYear
    } = useFilter()

    const [form, setForm] = useState({
        days: filterDays || '',
        mouth: filterMouth || '',
        year: filterYear || '',
        checkIn: filterCheck?.in || '',
        checkOut: filterCheck?.out || '',
        adult: filterPeople?.adult || '',
        children: filterPeople?.children || '',
    })
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (date) => {
        id_check === 0 ? setForm({ ...form, checkIn: moment(date).format("DD/MM/YYYY") }) : setForm({ ...form, checkOut: moment(date).format("DD/MM/YYYY") })
        hideDatePicker()
    }

    const _renderDatePicker = useMemo(() => (
        <DateTimePickerModal
            date={new Date()}
            cancelTextIOS='Cancelar'
            confirmTextIOS='Confirmar'
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
    ), [isDatePickerVisible])


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

    const _renderCheck = (
        <>
            <TouchableOpacity
                onPress={() => {
                    id_check = 0
                    showDatePicker()
                }}
                style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    editable={false}
                    placeholder='Qual data do check-in?'
                    placeholderTextColor={"#ccc"}
                    value={form.checkIn}
                    style={styles.input}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    id_check = 1
                    showDatePicker()
                }}
                style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='Qual data do check-out?'
                    placeholderTextColor={"#ccc"}
                    editable={false}
                    value={form.checkOut}
                    style={styles.input}
                />
            </TouchableOpacity>
        </>
    )

    const _renderPeople = (
        <>
            <TextInput
                placeholder='Quantos adultos?'
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={2}
                onChangeText={text =>
                    setForm({
                        ...form,
                        adult: maskOnlyNumbers(text)
                    })
                }
                value={form.adult}
                style={styles.input}
            />
            <TextInput
                placeholder='Quantas crianças?'
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={2}
                onChangeText={text =>
                    setForm({
                        ...form,
                        children: maskOnlyNumbers(text)
                    })
                }
                value={form.children}
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
        } else if (id === 'check') {
            setFilterCheck({
                in: form.checkIn,
                out: form.checkOut
            })
        } else if (id === 'people') {
            setFilterPeople({
                adult: Number(form.adult),
                children: Number(form.children),
            })
        }
        setForm(initial_form)
        onClose()
    }

    const _renderBottomSheet = () => {
        if (id === 'days')
            return _renderDays
        else if (id === 'mouth/year')
            return _renderMouthYear
        else if (id === 'check')
            return _renderCheck
        else if (id === 'people')
            return _renderPeople
    }

    return (
        <Modal
            transparent
            statusBarTranslucent
            visible={isVisible}
            animationType='fade'
            onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <>
                    {_renderDatePicker}
                    <KeyboardAvoidingView behavior='height' style={styles.container}>
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <View style={styles.content}>
                                {_renderBottomSheet()}
                                <TouchableOpacity onPress={handlePress} style={styles.button_container}>
                                    <Text style={styles.button_text}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </>
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
