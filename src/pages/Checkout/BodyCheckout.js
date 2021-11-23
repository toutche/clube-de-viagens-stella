import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/variables';
import { CreditCardInput } from "../../components/CreditInput";
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

const BodyCheckout = () => {

    const [check, setCheck] = useState(false)

    const onChange = props => {
        console.log(props.values)
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
            <Text style={styles.title}>Informe seus dados do cartão:</Text>
            <CreditCardInput requiresName onChange={onChange} />
            <CheckBox
                onPress={() => setCheck(!check)}
                checked={check}
                title={'Salvar cartão'}
                textStyle={{
                    color: '#333',
                    fontSize: 15,
                }}
                center
                size={28}
                containerStyle={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                }}
                checkedIcon={<MaterialIcons name="check-box" size={28} color={PRIMARY_COLOR} />}
                uncheckedIcon={<MaterialIcons name="check-box-outline-blank" size={28} color="#c9c9c9" />}
            />
            <CustomButton
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`Realizar pagamento R$ 490,00`}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
    },
    containerScroll: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexGrow: 1
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 100,
        height: 50,
        marginBottom: 20,
        width: '90%',
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
        color: '#333',
        marginVertical: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default BodyCheckout;