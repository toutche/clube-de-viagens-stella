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
import { useAuth } from "../../../contexts/auth";
import Style from "./style";
import Copyright from "../../../components/Copyright";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomAvatar from "../../../components/CustomAvatar";
import { maskPhone } from '../../../utils/masks'

const titlePage = "É novo por aqui? Cadastre-se";

export default ({ navigation }) => {
  const { signUp, loadingApi } = useAuth()

  const [user, setUser] = useState({
    name: 'eduardo',
    email: 'eduardo_alvez51@outlook.com',
    phone_number: '16997057588',
    password: '123456',
    image: null
  })

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
    })

    if (!result.cancelled) {
      setUser({
        ...user,
        image: result.uri
      })
    }
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
          item={user.image || 'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg'}
        />

        <CustomInput
          placeholder="Qual seu nome?"
          size={16}
          type={FontAwesome}
          name={'user'}
          value={user.name}
          onChangeText={text => setUser({
            ...user,
            name: text
          })}
        />

        <CustomInput
          placeholder="Seu celular?"
          size={18}
          lenght={15}
          type={FontAwesome}
          name={'mobile'}
          value={user.phone_number}
          onChangeText={text => setUser({
            ...user,
            phone_number: maskPhone(text)
          })}
        />

        <CustomInput
          placeholder="Melhor e-mail para contato?"
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
          placeholder="Cadastre uma senha..."
          size={16}
          type={FontAwesome}
          name={'lock'}
          secureTextEntry
          value={user.password}
          onChangeText={text => setUser({
            ...user,
            password: text
          })}
        />

        <CustomButton
          onPress={() => signUp(user, navigation)}
          loadingApi={loadingApi}
          containerStyle={Style.button}
          titleStyle={Style.buttonText}
          title={'Cadastrar'}
        />

      </View>

      <Copyright display={2} />

    </ScrollView>
  )
}
