import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import LikeIcon from '../../components/LikeIcon';
import ShareIcon from '../../components/ShareIcon';
import { formatMoneyToBRL } from '../../utils/index'
import Hide from './Hide';

const ListItem = ({ item, index, display }) => {
    return (
        <View style={styles.containerItem}>
            <Image
                style={styles.image}
                source={{ uri: item.image }}
            />

            <Hide />

            <LikeIcon />

            <ShareIcon />

            <View style={styles.bodyItem}>

                <View style={styles.priceItem}>

                    <View style={styles.saveMoneyItem}>
                        <Text style={styles.textSaveMoney}>Economize até R$ {formatMoneyToBRL(item.saveMoney)} no Plano Gold</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: '#777',
                            fontSize: 15,
                            textDecorationLine: 'line-through'
                        }}>R$ {formatMoneyToBRL(item.oldPrice)}</Text>

                        <Text style={{
                            fontSize: 10,
                            color: '#287dfd',
                            marginHorizontal: 2
                        }}>●</Text>

                        <Text style={{
                            color: '#287dfd',
                            fontSize: 15
                        }}>R$ {formatMoneyToBRL(item.price)}</Text>

                        <Text style={{
                            fontSize: 16,
                            color: '#287dfd',
                            marginHorizontal: 3,
                            bottom: 1
                        }}>|</Text>

                        <View style={{
                            bottom: 1.5
                        }}>
                            <Text style={{
                                fontSize: 10,
                                marginBottom: -2,
                                color: '#287dfd'
                            }}>por</Text>
                            <Text style={{
                                fontSize: 10,
                                marginTop: -2,
                                color: '#287dfd'
                            }}>pessoa</Text>
                        </View>
                    </View>
                    <Text style={{
                        color: '#777',
                        fontSize: 12,
                        marginTop: -4
                    }}>Preço exclusivo para membros</Text>
                </View>

                <View style={{
                    borderBottomWidth: 1,
                    marginHorizontal: 15,
                    borderColor: '#d1d1d1',
                    marginBottom: 10,
                    paddingBottom: 5
                }}>
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center',
                        color: '#333'
                    }}>{item.title}</Text>

                    <Text style={{
                        color: '#777',
                        fontSize: 13,
                        textAlign: 'center'
                    }}>{item.description}</Text>
                </View>

                <View style={styles.containerButtons}>
                    <CustomButton
                        containerStyle={[styles.button, {
                            backgroundColor: 'white',
                            borderColor: '#d1d1d1',
                            borderWidth: 1,
                            flex: 0.35
                        }]}
                        titleStyle={[styles.textButton, {
                            color: '#287dfd'
                        }]}
                        title={'Detalhes'}
                    />
                    <CustomButton
                        containerStyle={[styles.button, {
                            backgroundColor: '#287dfd',
                            flex: 0.55
                        }]}
                        titleStyle={styles.textButton}
                        title={display === 0 ? 'Reservar agora' : 'Faça parte do Clube'}
                    />
                </View>

                <Text style={styles.textFooterItem}>Total para 2 viajantes R$11.888,00</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    saveMoneyItem: {
        backgroundColor: '#12aaeb',
        position: 'absolute',
        height: 25,
        paddingHorizontal: 10,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        top: -13,
    },
    textSaveMoney: {
        color: 'white',
        fontSize: 11.5,
        textAlign: 'center'
    },
    priceItem: {
        backgroundColor: 'white',
        position: 'absolute',
        paddingTop: 15,
        paddingBottom: 5,
        elevation: 5,
        width: '85%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: -30
    },
    bodyItem: {
        width: '82%',
        top: -30,
        paddingTop: 35,
        paddingBottom: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 2
    },
    textFooterItem: {
        color: '#44aa43',
        textAlign: 'center',
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10,
        color: '#777'
    },
    containerFlatlist: {

    },
    containerItem: {
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: undefined,
        aspectRatio: 1.5,
        borderRadius: 20
    },
    containerButtons: {
        height: 40,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    button: {
        height: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default ListItem