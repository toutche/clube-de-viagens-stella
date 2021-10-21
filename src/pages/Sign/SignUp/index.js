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
import CustomInput from "../../../components/CustomInput";
import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';

/*Componentes internos do app */
import api from "../../../services/api";
import { loginSetToken } from "../../../services/auth";
import Style from "./style";
import Copyright from "../../../components/Copyright";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomAvatar from "../../../components/CustomAvatar";

const titlePage = "É novo por aqui? Cadastre-se";

export default ({ navigation }) => {

  const [name, setName] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = () => {
    api.post("/cadastrar", {
      name: name,
      last_name: "aleatorio",
      email: email,
      password: password,
      password_confirmation: password,
      phone_number: phone_number,
      gender: "m"
    }).then((response) => {
      console.log("cadastrar: ", response.data);
      loginSetToken(response.data.access_token);
      alert("Usuário cadastrado com sucesso.");
      navigation.navigate("Access");
    }).catch((error) => console.log(error))
  }

  return (
    <ScrollView style={Style.container} contentContainerStyle={Style.content}>

      <ImageBackground source={require("../../../../assets/header/SignUp.jpg")} style={Style.image} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={'arrowleft'}
        containerStyle={Style.icon}
      />

      <View style={Style.body}>

        <Text style={Style.title}>{titlePage}</Text>

        <CustomAvatar item={'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg'} />

        <CustomInput
          placeholder="Qual seu nome"
          size={16}
          type={FontAwesome}
          name={'user'}
          value={name}
          onChangeText={text => setName(text)}
        />

        <CustomInput
          placeholder="Seu celular"
          size={18}
          type={FontAwesome}
          name={'mobile'}
          value={phone_number}
          onChangeText={text => setPhoneNumber(text)}
        />

        <CustomInput
          placeholder="Melhor e-mail para contato?"
          size={16}
          type={FontAwesome}
          name={'envelope'}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <CustomInput
          placeholder="Cadastre uma senha..."
          size={16}
          type={FontAwesome}
          name={'lock'}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <CustomButton
          onPress={() => navigation.navigate('ConfirmEmail')}
          containerStyle={Style.button}
          titleStyle={Style.buttonText}
          title={'Cadastrar'}
        />

      </View>

      <Copyright display={2} />

    </ScrollView>
  )
}
