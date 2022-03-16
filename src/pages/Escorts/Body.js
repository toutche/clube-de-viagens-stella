import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, Switch, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from '../../utils/variables';
import { AntDesign } from "@expo/vector-icons";


export default ({ data = [], navigation }) => {
    const [loading, setLoading] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handlePress = () => {

    }

    return (
        <ScrollView
            bounces={false}
            style={styles.container}
            contentContainerStyle={styles.containerScroll}>

            <Text style={styles.title}>Gestão de acompnhantes</Text>

            <View style={styles.content_list}>
                {data?.members?.map((i, k) => {
                    return (
                        <View key={k}>
                            <View style={styles.content_item}>
                                <View style={styles.content_text}>
                                    <Text style={styles.title_item}>{i?.name} {i?.last_name}</Text>
                                    <View style={styles.icon_item}>
                                        <Image style={styles.icon_person} source={{ uri: i.icon }} />
                                        <Text style={styles.date_item}>{i?.age} anos</Text>
                                    </View>
                                </View>
                                <View style={styles.icon_item}>
                                    <Image style={styles.icon_edit} source={{ uri: data?.icon_edit }} />
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                            {k !== data.length - 1 &&
                                <View style={styles.separator} />
                            }
                        </View>
                    )
                })}
            </View>


            <CustomButton
                onPress={() => navigation.navigate({
                    name: 'NewEscort',
                    params: data?.icons_form,
                    merge: true
                })}
                left
                type={AntDesign}
                name={"pluscircleo"}
                color={BLUE_COLOR}
                size={24}
                containerStyle={styles.buttonPlus}
                titleStyle={styles.textButtonPlus}
                title={`Adicionar novo acompanhante`}
            />

            <View style={styles.bottom}>
                <CustomButton
                    onPress={handlePress}
                    size={24}
                    containerStyle={styles.buttonLeft}
                    titleStyle={styles.textButtonLeft}
                    title={('Cancelar').toUpperCase()}
                />

                <CustomButton
                    onPress={handlePress}
                    size={24}
                    containerStyle={styles.buttonRight}
                    titleStyle={styles.textButtonRight}
                    title={('Salvar').toUpperCase()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
    },
    icon_item: {
        flexDirection: 'row',
    },
    icon_person: {
        marginRight: 8,
        width: 14,
        height: 14,
        alignSelf: 'center'
    },
    icon_edit: {
        marginRight: 8,
        width: 16,
        height: 16,
        alignSelf: 'center'
    },
    containerScroll: {
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 28
    },
    buttonLeft: {
        borderWidth: 1.5,
        borderColor: '#c1c1c1',
        borderRadius: 100,
        height: 50,
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonLeft: {
        fontSize: 13.5,
        color: '#b1b1b1',
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        marginLeft: 10,
    },
    buttonRight: {
        borderRadius: 100,
        backgroundColor: BLUE_COLOR,
        height: 50,
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonRight: {
        fontSize: 13.5,
        color: 'white',
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        marginLeft: 10,
    },
    buttonPlus: {
        marginTop: 28,
        marginBottom: 25,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: BLUE_COLOR,
        borderRadius: 100,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonPlus: {
        fontSize: 13.5,
        color: BLUE_COLOR,
        fontFamily: FONT_DEFAULT_STYLE,
        textAlign: "center",
        marginLeft: 10,
    },
    content_list: {
        borderRadius: 12,
        backgroundColor: 'white',
    },
    separator: {
        height: 2,
        backgroundColor: '#e1e1e1'
    },
    content_item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    content_text: {
        flex: 1,
    },
    title_item: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#555',
        fontSize: 15,
    },
    date_item: {
        fontFamily: FONT_DEFAULT_STYLE,
        color: '#a1a1a1'
    },
    title: {
        marginTop: 24,
        marginBottom: 16,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: FONT_DEFAULT_STYLE
    },
    chevron: {
        width: 45,
        height: 45,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        borderWidth: 2,
        borderColor: "#d1d1d1",
    },
})
