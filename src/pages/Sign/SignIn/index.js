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
import Icon from "react-native-vector-icons/FontAwesome"

/*Componentes internos do app */
import api from "../../../services/api";
import { loginSetToken, getToken } from "../../../services/auth";
import Style from "./style";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";

const titlePage = "Acesse seu Clube de Férias:"

export default ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        api.post("/login", {
            email: email,
            password: password
        }).then(function (response) {
            console.log("login: ", response.data);
            if (response.data.access_token) {
                loginSetToken(response.data.access_token);
                navigation.navigate("HomeLoggedScreen");
            } else {
                alert("Usuário e/ou senha incorretos");
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <ScrollView style={Style.container} contentContainerStyle={Style.content}>

            <ImageBackground source={require("../../../../assets/header/SignIn.png")} style={Style.image} />

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
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <CustomInput
                    placeholder="Insira uma senha"
                    size={16}
                    type={FontAwesome}
                    name={'lock'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <CustomButton
                    onPress={login}
                    containerStyle={Style.button}
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
