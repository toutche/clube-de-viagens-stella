import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { PRIMARY_COLOR, FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE } from '../../utils/variables';

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
            <Text style={styles.title}>Número da reserva:<Text style={styles.titleBlue}> {item?.number_reservation}</Text></Text>
        </View>
    )

    const renderBody = () => (
        <View style={styles.body}>
            <Image
                source={{ uri: item?.img }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.titleItem}>{item?.name}</Text>
                <Text style={styles.subTitleItem}>{item?.number_days}</Text>
                <View style={styles.containerDiscount}>
                    <Text style={styles.discountBold}>{item?.price_difference}
                        <Text style={styles.discount}> de desconto exclusivo</Text>
                    </Text>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.throughValue}>{item?.price}</Text>
                    <Text style={styles.value}> ● {item?.price_discount}</Text>
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderBody()}

            <CustomButton
                onPress={ () => { 
                    navigation.navigate({
                        name: "DetailsContractedPackages",
                        params: {
                            item
                        }
                    }) 
                }}
                type={AntDesign}
                name={'checkcircleo'}
                color={'white'}
                size={25}
                iconStyle={styles.iconButton}
                containerStyle={styles.buttonTop}
                titleStyle={styles.textButtonTop}
                title={`Detalhes do pacote`}
            />

            <CustomButton
                onPress={() => openModal(item)}
                type={AntDesign}
                name={'closecircleo'}
                color={PRIMARY_COLOR}
                size={25}
                iconStyle={styles.iconButton}
                containerStyle={[styles.buttonBottom, item.requested && {borderColor: "#d1d1d1"}]}
                titleStyle={styles.textButtonBottom}
                title={item.requested ? `Cancelamento solicitado` : `Realizar cancelamento`}
                disabled={item.requested}
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
    iconButton: {
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
        fontFamily: FONT_DEFAULT_STYLE,
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
        fontFamily: FONT_DEFAULT_BOLD_STYLE,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 12
    },
    discount: {
        fontFamily: FONT_DEFAULT_STYLE,
        fontWeight: 'normal'
    },
    titleItem: {
        fontFamily: FONT_DEFAULT_STYLE,
        fontSize: 15,
        color: '#555'
    },
    subTitleItem: {
        fontFamily: FONT_DEFAULT_STYLE,
        fontSize: 13,
        top: -2,
        color: '#287dfd'
    },
    borderBottom: {
        backgroundColor: '#d1d1d1',
        height: 2
    },
    content: {
        flex: 1,
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
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#555',
        marginLeft: 5,
        fontSize: 15
    },
    titleBlue: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: "#287dfd"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListPackages