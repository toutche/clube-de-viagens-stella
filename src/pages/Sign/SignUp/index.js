import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  ImageBackground
} from "react-native";
import CustomInput from "../../../components/CustomInput";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

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
  const [image, setImage] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const register = () => {
    api.post("/cadastrar", {
      name,
      email,
      password,
      password_confirmation: password,
      phone_number,
      gender: "m",
      image
    }).then(({ data }) => {
      navigation.replace('ConfirmEmail', { params: data.dados })
    }).catch((error) => console.log(error))
  }

  return (
    <ScrollView style={Style.container} contentContainerStyle={Style.content}>

      <ImageBackground
        source={require("../../../../assets/header/SignUp.jpg")}
        style={Style.image}
      />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={'arrowleft'}
        containerStyle={Style.icon}
      />

      <View style={Style.body}>

        <Text style={Style.title}>{titlePage}</Text>

        <CustomAvatar
          handlerPress={pickImage}
          item={image || 'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg'}
        />

        <CustomInput
          placeholder="Qual seu nome?"
          size={16}
          type={FontAwesome}
          name={'user'}
          value={name}
          onChangeText={text => setName(text)}
        />

        <CustomInput
          placeholder="Seu celular?"
          size={18}
          lenght={15}
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
          onPress={register}
          containerStyle={Style.button}
          titleStyle={Style.buttonText}
          title={'Cadastrar'}
        />

      </View>

      <Copyright display={2} />

    </ScrollView>
  )
}
