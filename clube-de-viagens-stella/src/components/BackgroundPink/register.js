import React, { useState } from "react";
import { 
    View, 
    TouchableOpacity, 
    ScrollView,
    Text, 
    Image,
    TextInput, 
    TouchableWithoutFeedback 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

/*Componentes internos do app */
import api from "../utils/api";
import { loginSetToken } from "../utils/auth";
import Title from "../common/titleInternal";
import Copyright from "../common/copyright";
import StyleBkPink from "./Styles/StyleBackgroundPink";
import AccessStyle from "./Styles/AccessStyle";


export default function RegisterScreen({ navigation, route }) {

  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const placeholderTextColor="#ffffff";
  const titlePage="Entre com seu e-mail e senha";

  const _register = () => {
    api.post("/cadastrar", {
        name: name,
        last_name: "aleatorio",
        email: email,
        password: password,
        password_confirmation: password,
        phone_number: phone_number,
        gender: "m"
    })
    .then(function (response) {
        console.log("cadastrar: ",response.data);
        loginSetToken(response.data.access_token);
        alert("Usuário cadastrado com sucesso.");
        navigation.navigate("Access");            
    })
    .catch(function (error) {
        console.log(error);
    });
}

  return (
    <View style={StyleBkPink.container}>
      <ScrollView scrollEnabled={true}>
        <View style={StyleBkPink.spacearea}>
        <View style={StyleBkPink.divRoundedWhite}>
          <Image source={require("../../../assets/img/logoquadrado.png")} style={StyleBkPink.imgDivWhite}/>
        </View>
      </View>

        <Title 
        styleTitle="titleBKColorful"
        titlePage="É novo aqui? Cadastre-se"/> 
     
        <View style={StyleBkPink.boxPink}>
          <View style={AccessStyle.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={"user"} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder="Insira o seu nome"
              placeholderTextColor={placeholderTextColor}
              onChangeText={(name) => setName(name)}/>                 
          </View>
          
          <View style={AccessStyle.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={"mobile"} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder="Insira o seu celular"
              placeholderTextColor={placeholderTextColor}
              onChangeText={(phone_number) => setPhoneNumber(phone_number)}/>                 
          </View>
       
          <View style={AccessStyle.inputGroup}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={"envelope"} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput 
                  style={AccessStyle.TextInput}
                  placeholder="Insira o seu e-mail"
                  placeholderTextColor={placeholderTextColor}
                  onChangeText={(email) => setEmail(email)}/>                 
            </View>
            <View style={AccessStyle.inputGroup}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={"lock"} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput
                  style={AccessStyle.TextInput} 
                  secureTextEntry={true}
                  placeholder="Insira uma senha"
                  placeholderTextColor={placeholderTextColor}
                  onChangeText={(password) => setPassword(password)}/>                 
            </View>
        </View>

        <View style={StyleBkPink.boxPink}>
          <View style={StyleBkPink.containerButtons}>        
            <TouchableOpacity
              style={StyleBkPink.buttonRegister}
              activeOpacity={0.5}
              onPress={_register}>
              <Text style={StyleBkPink.buttonTextDark}> Cadastrar </Text>
            </TouchableOpacity>
          </View>                   
        </View>       
         
        <Copyright/> 
      </ScrollView>
    </View>
  );
}
