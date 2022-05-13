import React, { useRef, useState } from "react";
import { View, Modal, StyleSheet, useWindowDimensions, Platform, Linking, Alert, KeyboardAvoidingView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomIcon from "../CustomIcon";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import api from "../../services/api";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { useFilter } from "../../contexts/filter";

const ShareModal = ({ }) => {
  const { filterDestiny, filterCheck, filterPeople } = useFilter()
  const { width, height } = useWindowDimensions();
  const maxWidth = height / 2.2;
  const maxHeight = height / 2.2;

  const data = useRef({})
  const [email, setEmail] = useState('')
  const [visibleShare, setVisibleShare] = useState(false)
  const [visibleInput, setVisibleInput] = useState(false)

  ShareModal.show = (item) => {
    data.current = { ...item }
    setVisibleShare(true)
  }

  ShareModal.hide = () => {
    data.current = {}
    setVisibleShare(false)
  }

  const hideInput = () => {
    setEmail('')
    setVisibleInput(false)
  }

  const openInput = () => {
    setVisibleInput(true)
  }

  ShareModal.sendMail = async () => {
    if (data.current.option === 0) {
      const response = await api.post('/share/email', { email, id_package: data.current.id }).catch((res) => console.log('erro de enviar email', res))

      if (response) Alert.alert('Aviso', 'Seu email foi enviado com sucesso')
      else Alert.alert('Aviso', 'Aconteceu um erro ao enviar seu email, tente novamente mais tarde')

    } else {
      api.post('/share/email', {
        email,
        id_hotel: data.current.id,
        start_date: String(filterCheck.in).split('/').reverse().join('-'),
        end_date: String(filterCheck.out).split('/').reverse().join('-'),
        qtd_people: filterPeople.adult,
        city_code: filterDestiny.key,
      }).catch((res) => console.log(res))
    }

    hideInput()
    ShareModal.hide()
  }

  ShareModal.openWhatsapp = async () => {
    let message = ''

    if (data.current.option === 0) {
      const response = await api.post('/share/infos', { id_package: data.current.id }).catch((res) => console.log(res))
      message = `${response.data.message.assunto}\n${response.data.message.date}\n${response.data.message.name}\n${response.data.message.price}`
    } else {
      const response = await api.post('/share/infos', {
        id_hotel: data.current.id,
        start_date: String(filterCheck.in).split('/').reverse().join('-'),
        end_date: String(filterCheck.out).split('/').reverse().join('-'),
        qtd_people: filterPeople.adult,
        city_code: filterDestiny.key,
      }).catch((res) => console.log(res))
      message = `${response.data.message.assunto}\n${response.data.message.date}\n${response.data.message.name}\n${response.data.message.price}`
    }

    const url = `https://api.whatsapp.com/send?text=${message}`

    const result = await Linking.canOpenURL(url)

    if (result) await Linking.openURL(url)
    else Alert.alert('Aviso', 'Confira se o Whatsapp está instalado no dispositivo')

    ShareModal.hide()
  }

  return (
    <Modal
      statusBarTranslucent
      animationType='fade'
      transparent={true}
      visible={visibleShare}
      onRequestClose={ShareModal.hide}>

      <Modal
        statusBarTranslucent
        animationType='fade'
        transparent={true}
        visible={visibleInput}
        onRequestClose={() => setVisibleInput(false)}>
        <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', width: '90%', maxWidth: 400, borderRadius: 12, alignItems: 'center', paddingVertical: 16, paddingHorizontal: 20 }}>
            <CustomInput
              containerStyle={styles.containerInput}
              inputStyle={{ color: '#555' }}
              size={16}
              keyboardType={'email-address'}
              color={"#c1c1c1"}
              placeholder='email'
              placeholderTextColor={"#a1a1a1"}
              value={email}
              onChangeText={setEmail}
            />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <CustomButton
                onPress={hideInput}
                containerStyle={[styles.button, { backgroundColor: 'transparent', borderColor: '#d1d1d1', borderWidth: 1.5 }]}
                titleStyle={[styles.textButton, { color: "#d1d1d1" }]}
                title={'Cancelar'}
              />
              <CustomButton
                onPress={ShareModal.sendMail}
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={'Enviar email'}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <View style={styles.container} />

      <CustomIcon
        styleIcon={{
          top: 2,
        }}
        onPress={ShareModal.hide}
        size={26}
        color={"white"}
        type={AntDesign}
        name={"close"}
        containerStyle={styles.icon}
      />
      <View
        style={[
          styles.bow,
          {
            height: width * 0.85,
            bottom: (-width * 0.85) / 2,
            width: width * 0.8,
            maxWidth,
            maxHeight,
          },
        ]}>
        <CustomIcon
          size={35}
          color={PRIMARY_COLOR}
          type={Foundation}
          name={"mail"}
          onPress={openInput}
          containerStyle={{
            width: 54,
            height: 54,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            position: "absolute",
            left: 0,
            top: Platform.OS === "ios" ? -27 : -30,
          }}
        />
        <CustomIcon
          size={35}
          color={"white"}
          type={FontAwesome}
          name={"whatsapp"}
          onPress={ShareModal.openWhatsapp}
          containerStyle={{
            width: 54,
            height: 54,
            backgroundColor: "#25D366",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            position: "absolute",
            right: 0,
            top: Platform.OS === "ios" ? -27 : -30,
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,50,150,.5)",
  },
  containerInput: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: '48%',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 16,
    marginBottom: 4
  },
  textButton: {
    color: 'white',
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 15
  },
  bow: {
    backgroundColor: "transparent",
    borderColor: "rgba(0,0,0,.5)",
    borderWidth: 55,
    borderRadius: 1000,
    position: "absolute",
    alignSelf: "center",
  },
  icon: {
    backgroundColor: PRIMARY_COLOR,
    width: 80,
    height: 70,
    zIndex: 10,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: -5,
    position: "absolute",
    alignSelf: "center",
  },
});

export default ShareModal;
