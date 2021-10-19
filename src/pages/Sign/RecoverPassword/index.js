import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Linking,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet
} from "react-native";

/*Componentes internos do app */
import {
  FONT_SIZE_BODY,
  HEIGHT,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  SECOND_COLOR,
  WIDTH
} from "../../../utils/variables";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";

const titlePage = "Insira o seu e-mail cadastrado para recuperar a senha."

export default ({ navigation }) => {

  const [email, setEmail] = useState("")

  return (
    <ScrollView style={Style.container} contentContainerStyle={Style.content}>

      <ImageBackground source={require("../../../../assets/header/SignIn.png")} style={Style.image} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={'arrowleft'}
        containerStyle={Style.icon}
      />

      <View style={Style.body}>

        <Text style={Style.title}>{titlePage}</Text>

        <CustomInput
          placeholder="Insira o seu e-mail"
          size={16}
          type={FontAwesome}
          name={'envelope'}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <CustomButton
          containerStyle={Style.button}
          titleStyle={Style.buttonText}
          title={'Recuperar senha'}
        />

      </View>

      <Copyright display={1} />

    </ScrollView>
  )
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
    flexGrow: 1
  },
  image: {
    aspectRatio: 1.5
  },
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: 'absolute'
  },
  recoverText: {
    color: TEXT_COLOR_BKCOLORFUL,
    padding: 10,
    marginVertical: 15,
    textDecorationLine: 'underline'
  },
  body: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: TEXT_COLOR_BKCOLORFUL,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: '100%',
    marginTop: 15,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  }
})