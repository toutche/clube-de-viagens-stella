import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { PRIMARY_COLOR } from '../../utils/variables';

const ListPackages = ({
    item,
    index,
    navigation,
    openModal
}) => {

    const renderHeader = () => (
        <View style={styles.header}>
            <Ionicons
                name="document-text-outline"
                size={22}
                color="#287dfd"
            />
            <Text style={styles.title}>Número da reserva:<Text style={styles.titleBlue}> CF43532</Text></Text>
        </View>
    )

    const renderBody = () => (
        <View style={styles.body}>
            <Image
                source={{ uri: 'https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2020/05/maldivas-bangalos-1500-840269698.jpg' }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.titleItem}>Anantara Veli Maldives Resort</Text>
                <Text style={styles.subTitleItem}>7 dias | + Hotel c/café da manhã</Text>
                <View style={styles.containerDiscount}>
                    <Text style={styles.discountBold}>R$ 2542,00
                        <Text style={styles.discount}> de desconto exclusivo</Text>
                    </Text>
                </View>
                <Text style={styles.throughValue}>R$ 17.999,00
                    <Text style={styles.value}> ● R$ 14.999,00</Text>
                </Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderBody()}

            <CustomButton
                onPress={() => navigation.navigate({ name: 'DetailsPackages' })}
                type={AntDesign}
                name={'checkcircleo'}
                color={'white'}
                size={25}
                iconStyle={styles.iconBottom}
                containerStyle={styles.buttonTop}
                titleStyle={styles.textButtonTop}
                title={`Detalhes do pacote`}
            />

            <CustomButton
                onPress={openModal}
                type={AntDesign}
                name={'closecircleo'}
                color={PRIMARY_COLOR}
                size={25}
                iconStyle={styles.iconBottom}
                containerStyle={styles.buttonBottom}
                titleStyle={styles.textButtonBottom}
                title={`Realizar cancelamento`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 12,
        borderRadius: 10,
        elevation: 5
    },
    iconTop: {
        position: 'absolute',
        left: 10
    },
    iconBottom: {
        position: 'absolute',
        left: 10
    },
    buttonTop: {
        backgroundColor: '#58ba01',
        borderRadius: 100,
        height: 45,
        marginBottom: 10,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textButtonTop: {
        fontSize: 14.5,
        color: 'white',
        textAlign: 'center'
    },
    buttonBottom: {
        borderWidth: 1.5,
        borderColor: PRIMARY_COLOR,
        borderRadius: 100,
        height: 45,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textButtonBottom: {
        fontSize: 14.5,
        color: PRIMARY_COLOR,
        textAlign: 'center'
    },
    throughValue: {
        fontSize: 14.5,
        textDecorationLine: 'line-through',
        color: '#555'
    },
    value: {
        color: '#287dfd',
        textDecorationLine: 'none'
    },
    containerDiscount: {
        backgroundColor: '#287dfd',
        borderRadius: 100,
        paddingVertical: 3,
        paddingHorizontal: 20
    },
    discountBold: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 12
    },
    discount: {
        fontWeight: 'normal'
    },
    titleItem: {
        fontSize: 15,
        color: '#555'
    },
    subTitleItem: {
        fontSize: 13,
        top: -2,
        color: '#287dfd'
    },
    borderBottom: {
        backgroundColor: '#d1d1d1',
        height: 2
    },
    content: {
        marginLeft: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        marginBottom: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d1d1d1'
    },
    title: {
        color: '#555',
        marginLeft: 5,
        fontSize: 15
    },
    titleBlue: {
        color: "#287dfd"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListPackages