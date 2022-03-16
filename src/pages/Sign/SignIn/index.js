import React, { useState } from "react";
import { ScrollView, View, Text, Image, KeyboardAvoidingView, Platform } from "react-native";

/*Componentes internos do app */
import Style from "./style";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Copyright from "../../../components/Copyright";
import CustomIcon from "../../../components/CustomIcon";
import { useAuth } from "../../../contexts/auth";
import { setToken } from "../../../services/auth";
import api from "../../../services/api";

const titlePage = "Acesse seu Clube de Férias:";

export default ({ navigation }) => {
  const { verifyUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [previewPassword, setPreviewPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signIn = () => {
    setLoading(true);
    api
      .post("/login", { email: user.email, password: user.password })
      .then(({ data }) => {
        setToken(data.access_token);
        verifyUser(navigation);
      })
      .catch(e => {
        alert("Email ou senha inválidos");
        setLoading(false);
      });
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

        <View behavior={Platform.OS === "ios" ? "padding" : undefined} style={Style.body}>
          <Text style={Style.title}>{titlePage}</Text>

          <CustomInput
            placeholder='Insira o seu e-mail'
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
            placeholder='Insira uma senha'
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

          <CustomButton
            onPress={signIn}
            containerStyle={Style.button}
            loadingApi={loading}
            titleStyle={Style.buttonText}
            title={"Entrar"}
          />

          <Text style={Style.recoverText} onPress={() => navigation.navigate("RecoverPassword")}>
            Esqueceu a senha?
          </Text>
        </View>

        <Copyright display={1} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
