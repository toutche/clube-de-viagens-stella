import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import {
  FONT_DEFAULT_STYLE,
  FONT_SIZE_BODY,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../../utils/variables";

import Copyright from "../../../components/Copyright";
import InputConfirm from "./InputConfirm";

const titlePage = "Insira seu código";
const subtitlePage =
  "Precisamos confirmar o seu e-mail.\nPor favor, insira o código enviado de 4 dígitos.";

const ConfirmEmail = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView bounces={false} style={Style.container} contentContainerStyle={Style.content}>
        <Image source={require("../../../../assets/header/ConfirmEmail.png")} style={Style.image} />

        <View style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <Text style={Style.subtitle}>{subtitlePage}</Text>

          <InputConfirm navigation={navigation} />

          <Text style={Style.quest}>Não recebeu o nosso e-mail?</Text>

          <TouchableOpacity style={Style.buttonResend}>
            <Text style={Style.resend}>Reenviar Código</Text>
          </TouchableOpacity>

          <Text style={Style.text}>
            *Caso não esteja visualizando nosso e-mail na sua Caixa de Entrada, pode ser que tenha
            ido para sua caixa de Spam ou Lixo Eletrônico!
          </Text>
        </View>

        <Copyright display={1} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
  },
  content: {
    justifyContent: "space-between",
    flexGrow: 1,
  },
  image: {
    aspectRatio: 1.5,
    width: "100%",
    height: undefined,
    marginBottom: 5,
  },
  body: {
    flex: 1,
    paddingHorizontal: "10%",
    alignItems: "center",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 18,
    color: TEXT_COLOR_BKCOLORFUL,
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 14.5,
    textAlign: "center",
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
    paddingTop: 20,
    textAlign: "center",
  },
  quest: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: TEXT_COLOR_BKCOLORFUL,
    opacity: 0.9,
    fontSize: 13,
    textAlign: "center",
    paddingTop: 10,
  },
  buttonResend: {
    padding: 10,
    marginTop: -5,
  },
  resend: {
    color: TEXT_COLOR_BKCOLORFUL,
    opacity: 0.9,
    textDecorationLine: "underline",
    fontSize: 12,
    textAlign: "center",
  },
});

export default ConfirmEmail;
