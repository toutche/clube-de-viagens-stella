import React, { useLayoutEffect, useState } from "react";
import { ScrollView, View, Text, Image, KeyboardAvoidingView, Platform, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import { ContentType, EventType, ScreenName } from "../../../services/firebase/constant";
import { logEvent } from "../../../services/firebase";

const titlePage = "Acesse seu Clube de Férias:";

export default ({ navigation }) => {
  const { verifyUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [previewPassword, setPreviewPassword] = useState(false);

  const [user, setUser] = useState({
    email: __DEV__ ? "igor@toutche.com.br" : "",
    password: __DEV__ ? "Igor1993" : "",
  });

  const [errors, setErros] = useState({
    email: "",
    password: "",
  });

  /* useLayoutEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem("credentials");

        const { success } = await LocalAuthentication.authenticateAsync({
          promptMessage: "Use sua digital para autenticar no Clube de Férias",
          cancelLabel: "Cancelar",
        });
        if (success) {
          setUser(JSON.parse(value));
          signIn(JSON.parse(value), true);
        }
      
    })();
  }, []); */

  const signIn = ({ email, password }, isBiometric = false) => {
    setLoading(true);
    api
      .post("/login", { email, password })
      .then(({ data }) => {
        if (data.error) {
          setLoading(false);
          setErros(data.error);
        } else {
          logEvent(EventType.selectContent, {
            screen_name: ScreenName.signIn,
            content_type: ContentType.logged
          }); 
          setToken(data.access_token);
          verifyUser(navigation);
          /* if (isBiometric) {
            setToken(data.access_token);
            verifyUser(navigation);
          } else
            
             Alert.alert("Aviso", "Deseja fazer login com biometria?", [
              {
                text: "Não",
                onPress: async () => {
                  await AsyncStorage.setItem("credentials", "");
                  setToken(data.access_token);
                  verifyUser(navigation);
                },
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  await AsyncStorage.setItem("credentials", JSON.stringify(user));
                  setToken(data.access_token);
                  verifyUser(navigation);
                },
              },
            ]); */
        }
      })
      .catch(e => {
        console.log("erro signIn", e.response.data);
        Alert.alert("Aviso", "Email ou senha inválidos");
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
            error={errors["email"]}
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
            error={errors["password"]}
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
            onPress={() => signIn(user)}
            containerStyle={Style.button}
            loadingApi={loading}
            titleStyle={Style.buttonText}
            title={"Entrar"}
          />

          <Text style={Style.recoverText} onPress={() => {
              logEvent(EventType.selectContent, {
                screen_name: ScreenName.signIn,
                content_type: ContentType.forgotPassword
              }); 
              navigation.navigate("RecoverPassword")
            }}>
            Esqueceu a senha?
          </Text>
        </View>

        <Copyright display={1} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
