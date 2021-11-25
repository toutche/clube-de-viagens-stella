import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomIcon from '../CustomIcon';
import { PRIMARY_COLOR } from '../../utils/variables';
import RenderItem from './RenderItem';
import FakeItem from './FakeItem';

const Menu = ({
    isVisible = true,
    onClose
}) => {

    return (
        <Modal
            statusBarTranslucent
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.line}>
                        <RenderItem
                            id={'Dashboard'}
                            text={'Reservas'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Dashboar'}
                            text={'Meu Plano'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Dashboar'}
                            text={'Minha Conta'}
                            onClose={onClose}
                        />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.line}>
                        <RenderItem
                            id={'Dashboar'}
                            text={'Favoritos'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Wallet'}
                            text={'Carteira'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Dashboar'}
                            text={'Alertas'}
                            onClose={onClose}
                        />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.line}>
                        <RenderItem
                            id={'Dashboar'}
                            text={'Sobre'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Dashboar'}
                            text={'Acompanhantes'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Contact'}
                            text={'Contato'}
                            onClose={onClose}
                        />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.line}>
                        <RenderItem
                            id={'Dashboar'}
                            text={'Vantagens'}
                            onClose={onClose}
                        />
                        <RenderItem
                            id={'Dashboar'}
                            text={'Documentos'}
                            onClose={onClose}
                        />
                        <FakeItem />
                    </View>
                </View>
            </View>

            <CustomIcon
                onPress={onClose}
                size={26}
                color={PRIMARY_COLOR}
                type={AntDesign}
                name={'close'}
                containerStyle={styles.icon}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    content: {
        paddingTop: 40,
        backgroundColor: 'white',
        paddingBottom: 20
    },
    line: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    separator: {
        marginVertical: 10
    },
    icon: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        position: 'absolute',
        alignSelf: 'center'
    }
})

export default Menu;