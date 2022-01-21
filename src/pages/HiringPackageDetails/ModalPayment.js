import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { BLUE_COLOR, GREEN_COLOR, PRIMARY_COLOR, YELLOW_COLOR } from '../../utils/variables';
import { CheckBox } from 'react-native-elements';

const ModalPayment = ({
    isVisible = true,
    onClose
}) => {

    const [check, setCheck] = useState(false)


    return (
        <Modal statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.content}>

                    <View style={styles.float}>
                        <View style={styles.top}>
                            <AntDesign
                                name="home"
                                size={13}
                                color={'white'}
                            />
                            <Text style={styles.plan}>Plano Gold</Text>
                        </View>
                        <Text style={styles.credit}>Crédito: R$ 6.900,00</Text>
                    </View>

                    <CheckBox
                        onPress={() => setCheck(!check)}
                        checked={check}
                        title={'Usar saldo do plano'}
                        textStyle={{
                            color: '#333',
                            fontSize: 15,
                            fontWeight: 'normal',
                            marginLeft: 5
                        }}
                        center
                        size={28}
                        containerStyle={{ borderWidth: 0 }}
                        checkedIcon={<MaterialIcons name="check-box" size={28} color={BLUE_COLOR} />}
                        uncheckedIcon={<MaterialIcons name="check-box-outline-blank" size={28} color="#c9c9c9" />}
                    />

                    <View style={styles.body}>
                        <Text style={styles.title}>Cartão salvo</Text>

                    </View>

                    <CustomButton
                        onPress={onClose}
                        containerStyle={styles.button}
                        titleStyle={styles.textButton}
                        title={`Pagar diferença | R$ 3.900,00`}
                    />

                </View>
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
    plan: {
        fontSize: 12.5,
        color: 'white',
        marginLeft: 5
    },
    credit: {
        color: 'white',
        fontSize: 15
    },
    body: {
        backgroundColor: '#ededed',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: '#555',
        marginVertical: 10
    },
    top: {
        flexDirection: 'row',
        position: 'absolute',
        top: -10,
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: YELLOW_COLOR,
        borderRadius: 100
    },
    float: {
        paddingTop: 18,
        paddingBottom: 10,
        backgroundColor: PRIMARY_COLOR,
        position: 'absolute',
        borderRadius: 100,
        top: -25,
        paddingVertical: 5,
        paddingHorizontal: 20,
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    content: {
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        backgroundColor: 'white',
        paddingTop: 20
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: GREEN_COLOR,
        borderRadius: 100,
        height: 45,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    }
})

export default ModalPayment