import React, { useState } from "react";
import { 
    View, 
    TouchableOpacity, 
    ScrollView,
    Text, 
    Image,
    ImageBackground,
    TextInput, 
    TouchableWithoutFeedback 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

/*Componentes internos do app */
import api from "../../utils/api";
import { loginSetToken } from "../../utils/auth";
import Title from "../../common/titleInternal";
import Copyright from "../../common/copyright";
import Style from "./style";


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
      <ScrollView style={Style.container} scrollEnabled={true}>
        <View style={Style.divIMG}>
          <ImageBackground source={require("../../../../assets/img/img4.png")} style={Style.imgBk}>
            <View style={Style.div}>                    
              <View><Image source={require("../../../../assets/img/vector2.png")} style={Style.img2}/></View> 
            </View>                   
          </ImageBackground>           
        </View>
        
        <View style={Style.containerInternal}>

          <Title 
            styleTitle="titleSimple"
            titlePage="É novo aqui? Cadastre-se"/> 

          <View style={Style.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={Style.IconTextInput} name={"user"} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={Style.TextInput}
              placeholder="Insira o seu nome"
              placeholderTextColor={placeholderTextColor}
              onChangeText={(name) => setName(name)}/>                 
          </View>
          
          <View style={Style.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={Style.IconTextInput} name={"mobile"} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={Style.TextInput}
              placeholder="Insira o seu celular"
              placeholderTextColor={placeholderTextColor}
              onChangeText={(phone_number) => setPhoneNumber(phone_number)}/>                 
          </View>
       
          <View style={Style.inputGroup}>      
            <TouchableWithoutFeedback>
              <Icon style={Style.IconTextInput} name={"envelope"} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={Style.TextInput}
              placeholder="Insira o seu e-mail"
              placeholderTextColor={placeholderTextColor}
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
              placeholderTextColor={placeholderTextColor}
              onChangeText={(password) => setPassword(password)}/>                 
          </View>
        </View>

        <View style={Style.containerButtons}>        
          <TouchableOpacity
            style={Style.button}
            activeOpacity={0.5}
            onPress={_register}>
            <Text style={Style.buttonText}> Cadastrar </Text>
          </TouchableOpacity>
        </View>             
         
        <Copyright display="model2"/> 
      </ScrollView>
  );
}
