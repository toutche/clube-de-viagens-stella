import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Dot from '../../components/Dot';
import CustomButton from '../../components/CustomButton';
import { PRIMARY_COLOR, TEXT_COLOR_BKCOLORFUL } from '../../utils/variables';

const OverflowButton = ({
    index,
    onPress,
    data,
    loadingApi
}) => {

    const { width } = useWindowDimensions()

    const renderMap = () => {
        return data.map((_, i) => {
            if (i < 6) return <Dot key={i} index={i} currentIndex={index} />
        })
    }

    return (
        <View style={[styles.container, { width }]}>
            {index === 5 ?
                <View style={styles.renderComponent}>
                    <CustomButton
                        onPress={onPress}
                        loadingApi={loadingApi}
                        containerStyle={styles.sendButton}
                        titleStyle={styles.sendButtonText}
                        title="Finalizar Pesquisa"
                    />

                </View>
                :
                <View style={styles.renderComponent}>
                    {renderMap()}
                    <CustomButton
                        onPress={onPress}
                        containerStyle={styles.button}
                        titleStyle={styles.buttonText}
                        iconStyle={{ marginLeft: 5 }}
                        title={'Pular'}
                        type={AntDesign}
                        name={'arrowright'}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 10,
        marginTop: 15
    },
    renderComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        height: 50,
        width: '80%',
        borderRadius: 25,
        borderColor: TEXT_COLOR_BKCOLORFUL,
        backgroundColor: TEXT_COLOR_BKCOLORFUL,
        borderWidth: 1
    },
    sendButtonText: {
        paddingHorizontal: 5,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: "center",
        textTransform: "uppercase"
    },
    button: {
        flexDirection: 'row',
        right: '13%',
        position: 'absolute',
        alignItems: 'center',
    },
    buttonText: {
        color: '#f9f0f0',
        fontSize: 17
    }
})

export default OverflowButton