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
import api from "../../utils/api";
import { loginSetToken, getToken } from "../../utils/auth";
import Style from "./style";
import TitleInternal from "../../common/titleInternal";
import Copyright from "../../common/copyright";
import { TEXT_COLOR_BKCOLORFUL } from "../../variables";


export default function Access({ navigation, route }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const titlePage="Entre com seu e-mail e senha";

    const _login = () => {
        api.post("/login", {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log("login: ",response.data);
            if(response.data.access_token) {
                loginSetToken(response.data.access_token);
                navigation.navigate("HomeLoggedScreen");
            } else {
                alert("Usuário e/ou senha incorretos");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (   
    <>
        <ScrollView style={Style.container} scrollEnabled={true}>
            <View style={Style.divIMG}>
                <ImageBackground source={require("../../../../assets/img/img3.png")} style={Style.imgBk}>
                    <View style={Style.div}>                    
                        <View><Image source={require("../../../../assets/img/vector2.png")} style={Style.img2}/></View> 
                    </View>                   
                </ImageBackground>           
            </View>

            <View style={Style.containerAccess}>
                
                <TitleInternal titlePage={titlePage} styleTitle="titleIBKColorful"/>
                
                <View style={Style.inputGroup}>      
                    <TouchableWithoutFeedback>
                        <Icon style={Style.IconTextInput} name={"envelope"} size={20}/>  
                    </TouchableWithoutFeedback>         
                    <TextInput 
                    style={Style.TextInput}
                    placeholder="Insira o seu e-mail"
                    placeholderTextColor={TEXT_COLOR_BKCOLORFUL}
                    onChangeText={(email) => setEmail(email)}/>                 
                </View>

                <View style={Style.inputGroup}>      
                    <TouchableWithoutFeedback>
                        <Icon style={Style.IconTextInput} name={"lock"} size={20}/>  
                    </TouchableWithoutFeedback>         
                    <TextInput
                    style={Style.TextInput} 
                    secureTextEntry={true}
                    placeholder="Insira uma senha"
                    placeholderTextColor={TEXT_COLOR_BKCOLORFUL}
                    onChangeText={(password) => setPassword(password)}/>                 
                </View>
                                        
            </View>

            <View style={Style.containerButtons}>        
                <TouchableOpacity
                    style={Style.button}
                    activeOpacity={0.5}
                    onPress={_login}>
                    <Text style={Style.buttonText}> Entrar </Text>
                </TouchableOpacity>
            </View>         
                    
            <View style={Style.divLink}>
                <Text 
                    style={Style.link} 
                    onPress={() => 
                        navigation.navigate("RecoverPassword")
                    }>
                    Esqueceu a senha?
                </Text>
            </View>
        
        </ScrollView>
        <View style={Style.copyright}>
        <Copyright display="none"/> 
        </View>
    </>
  );
}
