import React, { useState } from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    ImageBackground
} from "react-native";

/*Componentes internos do app */
import api from "../../../services/api";
import { loginSetToken, getToken } from "../../../services/auth";
import Style from "./style";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";
import { useAuth } from "../../../contexts/auth";

const titlePage = "Acesse seu Clube de Férias:"

export default ({ navigation }) => {
    const { signIn, loadingApi } = useAuth()

    const [user, setUser] = useState({
        email: 'eduardo_alvez51@outlook.com',
        password: '123456'
    })

    return (
        <ScrollView style={Style.container} contentContainerStyle={Style.content}>

            <ImageBackground source={require("../../../../assets/header/SignIn.jpg")} style={Style.image} />

            <CustomIcon
                onPress={() => navigation.goBack()}
                size={26}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={Style.icon}
            />

            <View style={Style.body}>

                <Text style={Style.title}>{titlePage}</Text>

                <CustomInput
                    placeholder="Insira o seu e-mail"
                    size={16}
                    type={FontAwesome}
                    name={'envelope'}
                    value={user.email}
                    onChangeText={text => setUser({
                        ...user,
                        email: text
                    })}
                />

                <CustomInput
                    placeholder="Insira uma senha"
                    size={16}
                    type={FontAwesome}
                    secureTextEntry
                    name={'lock'}
                    value={user.password}
                    onChangeText={text => setUser({
                        ...user,
                        password: text
                    })}
                />

                <CustomButton
                    onPress={() => signIn(user, navigation)}
                    containerStyle={Style.button}
                    loadingApi={loadingApi}
                    titleStyle={Style.buttonText}
                    title={'Entrar'}
                />

                <Text style={Style.recoverText}
                    onPress={() => navigation.navigate("RecoverPassword")}>
                    Esqueceu a senha?
                </Text>

            </View>

            <Copyright display={1} />

        </ScrollView>
    )
}
