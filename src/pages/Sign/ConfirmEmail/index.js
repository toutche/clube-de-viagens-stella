import React, { useState } from "react";
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
import IntlPhoneInputLocal from "../../../components/IntlPhoneInput/IntlPhoneInput";
import { lightgray } from "color-name";

const titlePage = "Insira seu código";
const subtitlePage =
  "Precisamos confirmar o seu cadastro.\nPor favor, insira o código enviado de 4 digitos enviado por SMS para seu celular.";

const ConfirmEmail = ({ navigation }) => {
  const { user } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [newPhone, setNewPhone] = useState('');

  function redefinePhoneNumber() {
    api
      .post("/reenviar-token", { phone_number: newPhone })
      .then(({ data }) => {
        Alert.alert("Número alterado com sucesso", '');
      })
      .catch(e => {
        console.log(e);
      });
  }

  const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    if (dialCode === '+55') {
      const fullPhoneNumber = `${dialCode} ${phoneNumber.split(' ')[0]} ${phoneNumber.split(' ')[1]}-${phoneNumber.split(' ')[2]}`;
      setNewPhone(fullPhoneNumber);
    } else {
      const fullPhoneNumber = `${dialCode} ${phoneNumber}`;
      setNewPhone(fullPhoneNumber);
    }
  };

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

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView bounces={false} style={Style.container} contentContainerStyle={Style.content}>
        <Image source={require("../../../../assets/header/ConfirmEmail.png")} style={Style.image} />

        <View style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <Text style={Style.subtitle}>{subtitlePage}</Text>

          <InputConfirm navigation={navigation} />

          <Text style={Style.quest}>Ué, ainda não recebeu o SMS?</Text>

          <TouchableOpacity onPress={resendConfirmation} style={Style.buttonResend}>
            <Text style={Style.resend}>Reenviar Código</Text>
          </TouchableOpacity>

          <Text style={Style.quest}>Tá precisando alterar o telefone cadastrado?</Text>
          <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={Style.buttonResend}>
            <Text style={Style.resend}>Verificar número cadastrado</Text>
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Saindo da tela de alteração de telefone.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={Style.centeredView}>
              <View style={Style.modalView}>
                <Text style={Style.modalText}>OPA, tá com um número novo? Insira abaixo o seu novo número de telefone que vamos alterar rapidinho.</Text>
                {/* <TextInput
                  style={Style.textInputNewPhone}
                  placeholder="Digite o novo número *"
                  value={newPhone}
                  onChangeText={(text) => setNewPhone(maskPhone(text))}
                  keyboardType={"numeric"}
                /> */}
                <IntlPhoneInputLocal
                  onChangeText={onChangeText}
                  defaultCountry="BR"
                  screen='signUp'
                  containerStyle={Style.containerStyle}
                  flagStyle={Style.flagStyle}
                  closeText="Fechar"
                  dialCodeTextStyle={Style.dialCodeTextStyle}
                  phoneInputStyle={Style.phoneInputStyle}
                  filterText='Choose your country'
                  placeholderTextColor='black'
                  iconColor='black'
                />
                <TouchableOpacity
                  style={Style.button}
                  onPress={() => {
                    redefinePhoneNumber()
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={Style.textStyle}>Alterar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Style.button2}
                  onPress={() => {
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={Style.textStyle2}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

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
  },
  containerStyle: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    alignItems: "center",
  },
  flagStyle: {
    fontSize: 18,
  },
  dialCodeTextStyle: {
    marginRight: 2,
    color: 'black',
  },
  phoneInputStyle: {
    color: "black",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    width: '90%',
    height: 'auto',
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
    elevation: 2,
    marginTop: 20,
  },
  button2: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 10,
    width: '100%',
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyle2: {
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});

export default ConfirmEmail;
