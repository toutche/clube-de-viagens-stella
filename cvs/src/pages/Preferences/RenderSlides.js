import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const RenderSlides = ({ item, index, pressCheck, pressClose, ITEM_WIDTH, ITEM_HEIGHT }) => {

    const renderModelOne = () => (
        <View style={{
            backgroundColor: '#FFF',
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            borderRadius: 10,
            alignItems: 'center',

        }}>
            <Image
                resizeMode={'cover'}
                source={{ uri: item.poster }}
                style={{
                    width: '100%',
                    height: '70%',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                }}
            />
            <Text style={styles.toast}>{item.toast}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <View style={styles.viewButtons}>
                <CustomIcon
                    onPress={pressClose}
                    type={AntDesign}
                    color={'#e10717'}
                    size={28}
                    name={'close'}
                    containerStyle={styles.icon}
                />
                <CustomIcon
                    onPress={pressCheck}
                    type={AntDesign}
                    color={'#287dfd'}
                    size={28}
                    name={'check'}
                    containerStyle={styles.icon}
                />
            </View>
        </View>
    )

    const renderModelTwo = () => (
        <View style={{
            backgroundColor: '#FFF',
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            borderRadius: 10,
            alignItems: 'center'
        }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Text style={styles.note}>{item.note}</Text>
            <Text style={styles.activitiesText}>{item.activitiesText} <Text style={styles.subActivitiesText}>({item.activities.length})</Text></Text>

            <ScrollView style={styles.ScrollViewMap}>
                {item.activities.map((it, ind) => {
                    return (
                        <CheckBox
                            key={ind}
                            title={it.name}
                            checked={it.check}
                            textStyle={{
                                color: it.check ? '#287dfd' : '#c9c9c9',
                                fontSize: 16,
                                fontWeight: 'normal'
                            }}
                            size={50}
                            containerStyle={{
                                width: '100%',
                                backgroundColor: 'white',
                                borderWidth: 0,
                                marginVertical: -5
                            }}
                            checkedIcon={<MaterialCommunityIcons name="check-box-outline" size={28} color={'#287dfd'} />}
                            uncheckedIcon={<MaterialCommunityIcons name="checkbox-blank-outline" size={28} color="#c9c9c9" />}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )

    return (
        <>
            {index !== 5 ? renderModelOne() : renderModelTwo()}
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        width: '90%',
        color: '#626262',
        fontSize: 16,
        paddingTop: 5,
        textAlign: 'center'
    },
    toast: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        textAlign: 'center',
        color: '#cacac9',
        paddingVertical: 5,
        paddingHorizontal: 15,
        position: 'absolute',
        borderRadius: 100,
        top: '59%'
    },
    viewButtons: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 100,
        padding: 5,
        elevation: 10
    },
    title: {
        paddingTop: 10,
        fontSize: 17,
        color: '#333333'
    },
    subTitle: {
        color: '#777',
        fontSize: 12,
        paddingHorizontal: 20,
        paddingVertical: 5,
        textAlign: 'center'
    },
    note: {
        color: '#333',
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#d1d1d1',
    },
    activitiesText: {
        fontSize: 17,
        paddingVertical: 5,
        color: '#333',
    },
    subActivitiesText: {
        color: '#777',
    },
    ScrollViewMap: {
        flex: 1,
        width: '95%',
        marginBottom: 5
    }
})


export default RenderSlides;