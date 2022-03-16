import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, Image, Alert, Platform, View } from "react-native";
import CustomInput from "../../../components/CustomInput";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Style from "./style";
import Copyright from "../../../components/Copyright";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomAvatar from "../../../components/CustomAvatar";
import { maskPhone, maskDocument } from "../../../utils/masks";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../../services/api";
import { FONT_DEFAULT_STYLE } from "../../../utils/variables";
import CustomRadio from "../../../components/CustomRadio";

const titlePage = "É novo por aqui? Cadastre-se";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [previewPassword, setPreviewPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    document: "",
    email: "",
    phone_number: "",
    password: "",
    image: null,
  });

  const hasMediaPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return false;
      }
      return true;
    }
  };

  const pickImage = async () => {
    const hasPermission = await hasMediaPermission();
    if(!hasPermission) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setUser({
        ...user,
        image: result.uri,
      });
    }
  };

  const signUp = async () => {
    setLoading(true);

    let [name, ...last_name] = user.name.split(" ");
    last_name = last_name.join(" ") || name;

    const { data } = await api.post("/cadastrar", {
      name: name,
      last_name: last_name,
      document: user.document.replaceAll('.', '').replace('-', ''),
      email: user.email,
      password: user.password,
      password_confirmation: user.password,
      phone_number: user.phone_number,
      gender: "M",
      accept_terms: "Y",
      accept_privacy: "Y",
      image: user.image,
    });

    if (data.success) navigation.navigate("ConfirmEmail");
    else if (data.error) {
      Alert.alert("Aviso", `Aconteceu um erro, tente novamente mais tarde`);
      setLoading(false);
    } else {
      setLoading(false);
      Alert.alert("Erro", "Tente novamente mais tarde");
    }
  };

  const handlerPress = () => {
    if (check) signUp(user, navigation);
    else Alert.alert("Aviso", "Para continuar aceite os termos");
  };

  const general_text_style = {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 14,
    marginTop: 10,
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView bounces={false} style={Style.container} contentContainerStyle={Style.content}>
        <Image source={require("../../../../assets/header/SignUp.jpg")} style={Style.image} />

        <CustomIcon
          onPress={() => navigation.goBack()}
          size={26}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={Style.icon}
        />

        <View style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <CustomAvatar
            handlerPress={pickImage}
            item={
              user.image ||
              "https://toutche.com.br/clube_de_ferias/maquina-fotografica.png" 
            }
          />

          <CustomInput
            placeholder='Qual seu nome completo?'
            size={16}
            type={FontAwesome}
            name={"user"}
            autoCapitalize={"words"}
            value={user.name}
            onChangeText={text =>
              setUser({
                ...user,
                name: text,
              })
            }
          />

          <CustomInput
            placeholder='Seu CPF?'
            size={16}
            lenght={14}
            type={FontAwesome}
            name={"id-card"}
            keyboardType={'number-pad'}
            value={user.document}
            onChangeText={text =>
              setUser({
                ...user,
                document: maskDocument(text),
              })
            }
          />

          <CustomInput
            placeholder='Seu celular?'
            size={18}
            lenght={15}
            type={FontAwesome}
            name={"mobile"}
            keyboardType={'phone-pad'}
            value={user.phone_number}
            onChangeText={text =>
              setUser({
                ...user,
                phone_number: maskPhone(text),
              })
            }
          />

          <CustomInput
            placeholder='Melhor e-mail para contato?'
            size={16}
            type={FontAwesome}
            name={"envelope"}
            keyboardType={"email-address"}
            value={user.email}
            onChangeText={text =>
              setUser({
                ...user,
                email: text,
              })
            }
          />

          <CustomInput
            placeholder='Cadastre uma senha...'
            size={16}
            type={FontAwesome}
            name={"lock"}
            secureTextEntry={!previewPassword}
            previewPassword={previewPassword}
            setPreviewPassword={setPreviewPassword}
            value={user.password}
            onChangeText={text =>
              setUser({
                ...user,
                password: text,
              })
            }
          />

          <View style={{flexDirection: "row",}}>
            <CheckBox
              onPress={() => setCheck(!check)}
              checked={check}
              center
              size={28}
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 10,
              }}
              checkedIcon={<MaterialIcons name='check-box' size={28} color={"white"} />}
              uncheckedIcon={<MaterialIcons name='check-box-outline-blank' size={28} color='white' />}
            />

            <Text style={{...general_text_style}}>
              {"Aceitar "} 
              <Text style={{...general_text_style, textDecorationLine: 'underline'}} onPress={() => navigation.navigate("PrivacyPolicy")}>
                política de privacidade
              </Text> 
              {" e "} 
              <Text style={{...general_text_style, textDecorationLine: 'underline'}} onPress={() => navigation.navigate("TermsConditions")}>
                termos e condições
              </Text>
              .
            </Text>
          </View>

          <CustomButton
            onPress={handlerPress}
            loadingApi={loading}
            containerStyle={Style.button}
            titleStyle={Style.buttonText}
            title={"Cadastrar"}
          />
        </View>

        <Copyright display={1} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
