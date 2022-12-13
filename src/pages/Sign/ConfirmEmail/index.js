import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
  TextInput
} from "react-native";

import {
  FONT_DEFAULT_STYLE,
  FONT_SIZE_BODY,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../../utils/variables";

import Copyright from "../../../components/Copyright";
import InputConfirm from "./InputConfirm";

import { useAuth } from "../../../contexts/auth";
import api from "../../../services/api";

const titlePage = "Insira seu código";
const subtitlePage =
  "Precisamos confirmar o seu cadastro.\nPor favor, insira o código enviado de 4 digitos enviado por SMS para seu celular.";

const ConfirmEmail = ({ navigation, route }) => {
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [newPhone, setNewPhone] = useState('');

  const { phone } = route.params;

  console.log(phone);

  const resendConfirmation = () => {
    const data = { email: undefined };
    if (user) {
      data.email = user.email;
    }

    api
      .post("/reenviar-email", data)
      .then(({ data }) => {
        Alert.alert("Código reenviado!", data.message);
      })
      .catch(e => {
        Alert.alert(
          "Falha!",
          "Não foi possível reenviar o código SMS para seu celular. Por favor, tente novamente.",
        );
        console.log(e);
      });
  };

  useEffect(() => {
    setNewPhone(phone);
  }, [])

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView bounces={false} style={Style.container} contentContainerStyle={Style.content}>
        <Image source={require("../../../../assets/header/ConfirmEmail.png")} style={Style.image} />

        <View style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <Text style={Style.subtitle}>{subtitlePage}</Text>

          <InputConfirm navigation={navigation} />

          <Text style={Style.quest}>Não recebeu nosso SMS?</Text>

          <Text style={Style.quest}>Gostaria de verificar se seu telefone está cadastrado corretamente?</Text>
          <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={Style.buttonResend}>
            <Text style={Style.resend}>Verificar número cadastrado</Text>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={Style.centeredView}>
              <View style={Style.modalView}>
                <Text style={Style.modalText}>Altere o número cadastrado abaixo</Text>
                <TextInput
                  style={Style.textInputNewPhone}
                  placeholder="Digite o novo número *"
                  value={newPhone}
                  onChangeText={(text) => setNewPhone(text)}
                />
                <TouchableOpacity
                  style={Style.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={Style.textStyle}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Text style={Style.quest}>Ou tente reenviar o código clicando no link abaixo.</Text>

          <TouchableOpacity onPress={resendConfirmation} style={Style.buttonResend}>
            <Text style={Style.resend}>Reenviar Código</Text>
          </TouchableOpacity>

          {/* <Text style={Style.text}>
            *Caso não esteja visualizando nosso e-mail na sua Caixa de Entrada, pode ser que tenha
            ido para sua caixa de Spam ou Lixo Eletrônico!
          </Text> */}
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
  }, centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 225,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    width: '100%',
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInputNewPhone: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    marginBottom: 15,
    width: "100%",
    height: 50,
  }
});

export default ConfirmEmail;
