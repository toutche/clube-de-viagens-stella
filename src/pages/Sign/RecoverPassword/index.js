import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

/*Componentes internos do app */
import {
  FONT_DEFAULT_BOLD_STYLE,
  FONT_DEFAULT_STYLE,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../../utils/variables";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";
import api from "../../../services/api";
import { logScreen } from "../../../services/firebase";
import { ScreenView } from "../../../services/firebase/constant";

const titlePage = "Insira o seu e-mail cadastrado para recuperar a senha.";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    logScreen(ScreenView.RecoverPassword);
  }, []);

  const recoverPass = ({ navigation }) => {
    if (email) {
      setLoading(true);
      api
        .post("/esqueci-senha", { email })
        .then(res => {
          Alert.alert("Aviso", "Um e-mail com o token foi enviado para você");
          navigation.goBack();
        })
        .catch(e => setLoading(false));
    } else Alert.alert("Aviso", "Campo de email não pode ser vazio");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView bounces={false} style={Style.container} contentContainerStyle={Style.content}>
        <Image source={require("../../../../assets/header/SignIn.jpg")} style={Style.image} />

        <CustomIcon
          onPress={() => navigation.goBack()}
          size={26}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={Style.icon}
        />

        <View style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <CustomInput
            placeholder='Insira o seu e-mail'
            size={16}
            type={FontAwesome}
            name={"envelope"}
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <CustomButton
            loadingApi={loading}
            onPress={recoverPass}
            containerStyle={Style.button}
            titleStyle={Style.buttonText}
            title={"Recuperar senha"}
          />
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
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: "absolute",
  },
  recoverText: {
    color: TEXT_COLOR_BKCOLORFUL,
    padding: 10,
    marginVertical: 15,
    textDecorationLine: "underline",
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
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    marginTop: 15,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: PRIMARY_COLOR,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 13,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
