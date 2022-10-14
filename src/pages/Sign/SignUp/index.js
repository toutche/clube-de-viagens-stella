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
import { maskPhone, maskDocument, maskDate } from "../../../utils/masks";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../../services/api";
import { FONT_DEFAULT_STYLE } from "../../../utils/variables";
import { useAuth } from "../../../contexts/auth";

const titlePage = "É novo por aqui? Cadastre-se";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [previewPassword, setPreviewPassword] = useState(false);

  const { setUser: contextSetUser } = useAuth();

  const [user, setUser] = useState({
    name: "",
    nickname: "",
    birth_date: "",
    document: "",
    email: "",
    phone_number: "",
    password: "",
    image: null,
  });

  const [errors, setErros] = useState({
    name: "",
    nickname: "",
    birth_date: "",
    document: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const hasMediaPermission = async option => {
    if (Platform.OS !== "web") {
      let result = undefined;

      if (option === "CAMERA") {
        result = await ImagePicker.requestCameraPermissionsAsync();
      } else {
        result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      }

      if (result?.status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return false;
      }
      return true;
    }
  };

  const pickImage = async option => {
    const hasPermission = await hasMediaPermission(option);
    if (!hasPermission) {
      return;
    }

    let result = undefined;

    if (option === "CAMERA") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0,
      });
    }

    if (!result.cancelled) {
      setUser({
        ...user,
        image: result.uri,
      });
    }
  };

  const handlerPress = () => {
    if (!check) {
      Alert.alert("Aviso", "Para continuar aceite os termos");
    } else {
      signUp(user, navigation);
    }
  };

  const signUp = async () => {
    setLoading(true);

    let [name, ...last_name] = user.name.split(" ");
    last_name = last_name.join(" ") || name;

    let imageObject;

    if (user.image) {
      imageObject = {
        uri: user.image,
        type: "image/jpeg",
        name: "user.jpg",
      };
    }

    const body = new FormData();
    body.append("name", name);
    body.append("last_name", last_name);
    body.append("birth_date", user.birth_date.split("/").reverse().join("-"));
    body.append("nickname", user.nickname);
    body.append("document", user.document.replace(".", "").replace(".", "").replace("-", ""));
    body.append("email", user.email);
    body.append("password", user.password);
    body.append("password_confirmation", user.password);
    body.append("phone_number", user.phone_number);
    body.append("gender", "M");
    body.append("accept_terms", "Y");
    body.append("accept_privacy", "Y");
    body.append("image", imageObject);

    const { data } = await api
      .post("/cadastrar", body, {
        headers: { "Content-Type": "multipart/form-data;" },
      })
      .catch(error => console.log(error));

    if (data.type) {
      contextSetUser({ email: user.email });
      navigation.navigate("ConfirmEmail");
      if (data.message) Alert.alert("Sucesso", data.message);
    } else if (data.error) {
      Alert.alert("Aviso", `Verifique os campos não preenchidos para concluir o cadastro.`);
      setErros(data.error);
      setLoading(false);
    } else {
      setLoading(false);
      Alert.alert("Erro", "Tente novamente mais tarde");
    }
  };

  const general_text_style = {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 14,
    marginTop: 10,
  };

  const chooseImage = () => {
    return Alert.alert("Sua foto", `Deseja tirar uma foto agora ou escolher da galeria?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Câmera",
        onPress: () => pickImage("CAMERA"),
      },
      {
        text: "Galeria",
        onPress: () => pickImage("MEDIA_LIBRARY"),
      },
    ]);
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
            handlerPress={chooseImage}
            item={user.image || "https://toutche.com.br/clube_de_ferias/maquina-fotografica.png"}
          />

          <CustomInput
            placeholder='Qual seu nome completo?'
            size={16}
            type={FontAwesome}
            name={"user"}
            error={errors["name"]}
            errorFontWeight={"bold"}
            autoCapitalize={"words"}
            errorfontWeight={"bold"}
            borderWidth={!errors.name ? 1 : 3}
            value={user.name}
            onChangeText={text =>
              setUser({
                ...user,
                name: text,
              })
            }
          />

          <CustomInput
            placeholder='Como gostaria de ser chamado?'
            size={16}
            type={FontAwesome}
            name={"user-o"}
            error={errors["nickname"]}
            autoCapitalize={"words"}
            value={user.nickname}
            onChangeText={text =>
              setUser({
                ...user,
                nickname: text,
              })
            }
          />

          <CustomInput
            placeholder='Sua Data de Nascimento?'
            size={18}
            lenght={10}
            type={FontAwesome}
            name={"calendar-o"}
            keyboardType={"numeric"}
            error={errors["birth_date"]}
            errorFontWeight={"bold"}
            borderWidth={!errors.birth_date ? 1 : 3}
            value={user.birth_date}
            onChangeText={text =>
              setUser({
                ...user,
                birth_date: maskDate(text),
              })
            }
          />

          <CustomInput
            placeholder='Seu CPF?'
            size={16}
            lenght={14}
            type={FontAwesome}
            name={"id-card"}
            error={errors["document"]}
            keyboardType={"number-pad"}
            borderWidth={!errors.document ? 1 : 3}
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
            size={20}
            lenght={15}
            type={FontAwesome}
            name={"mobile"}
            keyboardType={"phone-pad"}
            value={user.phone_number}
            borderWidth={!errors.phone_number ? 1 : 3}
            error={errors["phone_number"]}
            errorFontWeight={"bold"}
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
            error={errors["email"]}
            borderWidth={!errors.email ? 1 : 3}
            errorFontWeight={"bold"}
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
            borderWidth={!errors.password ? 1 : 3}
            error={errors["password"]}
            errorFontWeight={"bold"}
            onChangeText={text =>
              setUser({
                ...user,
                password: text,
              })
            }
          />

          <View style={{ flexDirection: "row" }}>
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
              uncheckedIcon={
                <MaterialIcons name='check-box-outline-blank' size={28} color='white' />
              }
            />

            <Text style={{ ...general_text_style }}>
              {"Aceitar "}
              <Text
                style={{ ...general_text_style, textDecorationLine: "underline" }}
                onPress={() => navigation.navigate("PrivacyPolicy")}>
                política de privacidade
              </Text>
              {" e "}
              <Text
                style={{ ...general_text_style, textDecorationLine: "underline" }}
                onPress={() => navigation.navigate("TermsConditions")}>
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
