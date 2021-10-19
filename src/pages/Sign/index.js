import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text
} from "react-native";

import Copyright from "../../components/Copyright";
import {
  FONT_SIZE_BODY,
  FONT_SIZE_SUBTITLE,
  PRIMARY_COLOR,
  SECOND_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../utils/variables";
import { AntDesign, Fontisto } from '@expo/vector-icons';
import CustomButton from "../../components/CustomButton";
import TextWithBold from "../../components/TextWithBold";

export default ({ navigation }) => {
  return (
    <ScrollView style={Style.container} contentContainerStyle={Style.content}>

      <ImageBackground source={require("../../../assets/header/Sign.png")} style={Style.image} />

      <View style={Style.body}>

        <TextWithBold
          textStyle={Style.title}
          text={'Bem-vindo ao seu'}
          boldText={'Clube de férias!'}
        />

        <Text style={Style.subtitle}>Acessar com:</Text>

        <View style={Style.containerButtons}>
          <CustomButton
            onPress={() => navigation.navigate("AddressNotFound"/*"Localization"*/)}
            containerStyle={[Style.buttonSocial, { backgroundColor: "#4167B2" }]}
            titleStyle={[Style.buttonText, { marginLeft: 5 }]}
            title={'Facebook'}
            left
            size={18}
            type={Fontisto}
            name={'facebook'}
          />

          <CustomButton
            onPress={() => navigation.navigate("AddressNotFound"/*"Localization"*/)}
            containerStyle={[Style.buttonSocial, { backgroundColor: "#fbbc05" }]}
            titleStyle={Style.buttonText}
            title={'Google'}
            left
            size={18}
            type={AntDesign}
            name={'google'}
          />
        </View>

        <View style={Style.containerSeparator}>
          <View style={Style.separator} />
          <Text style={Style.text}>ou</Text>
          <View style={Style.separator} />
        </View>

        <View style={Style.containerSignButtons}>

          <CustomButton
            onPress={() => navigation.navigate("SignIn")}
            containerStyle={[Style.button, { marginBottom: 15 }]}
            titleStyle={Style.buttonText}
            title={'Entre com'}
            boldText={'seu e-mail'}
          />

          <CustomButton
            onPress={() => navigation.navigate("SignUp")}
            containerStyle={Style.button}
            titleStyle={Style.buttonText}
            title={'É novo por aqui?'}
            boldText={'Cadastre-se'}
          />
        </View>
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
  body: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: TEXT_COLOR_BKCOLORFUL,
    textAlign: "center",
  },
  subtitle: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_SUBTITLE,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 12
  },
  text: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
    textTransform: 'uppercase'
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%'
  },
  containerSignButtons: {
    width: '100%'
  },
  buttonSocial: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: '47%',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
  containerSeparator: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 1,
    width: 100,
    backgroundColor: SECOND_COLOR,
    marginHorizontal: 15
  }
})

