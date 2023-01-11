import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Alert } from 'react-native';

import api from "../../services/api";
import { PRIMARY_COLOR } from '../../utils/variables';

import CustomButton from '../../components/CustomButton';
import { ModalAlert } from '../../components/ModalAlert';

const ModalCancel = ({
    isVisible = true,
    onClose,
    item,
    getReservations
}) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [textModal, setTextModal] = useState({
        title: '',
        message: '',
    })

    const handleCancel = async () => {
        await api
        .get(`/pacote-viagem/minhas-reservas/cancelamento/${item.id}/${item.sale_id}}`)
        .then( ({ data }) => {
            onClose();
            getReservations && getReservations();
            setTextModal({
                title: 'Cancelamento solicitado',
                message: data.message,
            })
            setVisibleModal(!visibleModal);
            // Alert.alert("Cancelamento solicitado", data.message );
        })
        .catch((e) => { 
            setTextModal({
                title: 'Aviso',
                message: "Não foi possível cancelar a reserva selecionada. Por favor, tente novamente.",
            })
            setVisibleModal(!visibleModal);
            console.error(e)
        });
    }

    return (
        <Modal statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Deseja cancelar esse pacote?</Text>

                    <View style={styles.body}>
                        <Text style={styles.subTitle}>Sua solicitação será atendida dentro das próximas 24 horas úteis</Text>
                        {/* <CustomButton
                            left
                            onPress={onClose}
                            type={AntDesign}
                            name={'exclamationcircle'}
                            color={'#287dfd'}
                            size={16}
                            containerStyle={styles.button}
                            titleStyle={styles.textButton}
                            title={`Verificar política de cancelamento`}
                        /> */}
                    </View>

                    <View style={styles.bottom}>
                        <CustomButton
                            onPress={onClose}
                            containerStyle={styles.buttonLeft}
                            titleStyle={styles.textButtonLeft}
                            title={`Não Cancelar`}
                        />
                        <CustomButton
                            onPress={handleCancel}
                            containerStyle={styles.buttonRight}
                            titleStyle={styles.textButtonRight}
                            title={`Sim, Cancelar`}
                        />
                    </View>
                </View>
                <ModalAlert
                    modalVisible={visibleModal}
                    setModalVisible={setVisibleModal}
                    title={textModal.title}
                    text={textModal.message}
                    textFirstButton='Voltar'
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'flex-end'
    },
    bottom: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    body: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d1d1d1',
        alignItems: 'center'
    },
    subTitle: {
        color: '#777',
        textAlign: 'center',
        width: '80%'
    },
    title: {
        color: '#555',
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 15
    },
    content: {
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        backgroundColor: 'white'
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#287dfd',
        borderRadius: 100,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 13.5,
        color: '#287dfd',
        textAlign: 'center',
        marginLeft: 10
    },
    buttonLeft: {
        borderWidth: 1.5,
        borderColor: '#999',
        borderRadius: 100,
        height: 50,
        width: '45%',
        maxWidth: 300,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonLeft: {
        fontSize: 14,
        color: '#999',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    buttonRight: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 100,
        height: 50,
        maxWidth: 300,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonRight: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
    },
})

export default ModalCancel