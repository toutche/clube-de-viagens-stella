import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { FONT_DEFAULT_STYLE, BLUE_COLOR, PRIMARY_COLOR } from "../../utils/variables";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import { maskDocument, maskDate } from "../../utils/masks";
import { BEHAVIOR } from "../../utils/consts";

const BodyNewTravelers = ({
  data = [],
  openModal,
  form = [],
  errors = [],
  setForm = () => { },
  handlerPress = () => { },
}) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={BEHAVIOR}>
      <ScrollView bounces={false} contentContainerStyle={styles.containerScroll}>
        {data.paxs.map((i, k) => {
          return (
            <View key={k} style={styles.form}>
              <Text style={styles.title}>{i}</Text>

              <CustomButton
                onPress={() => openModal(true, k)}
                containerStyle={styles.buttonModal}
                titleStyle={styles.textButtonModal}
                title={`Adicionar Viajante Cadastrado`}
              />

              <CustomInput
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                size={16}
                color={"#c1c1c1"}
                placeholder='Insira o nome *'
                placeholderTextColor={"#a1a1a1"}
                error={errors[k]?.name}
                errorColor={PRIMARY_COLOR}
                type={FontAwesome}
                name={"user-o"}
                autoCapitalize={"words"}
                value={form[k]?.name}
                onChangeText={text => {
                  let format = [...form];
                  format[k] = { ...format[k], name: text };
                  setForm(format);
                }}
              />

              <CustomInput
                error={errors[k]?.birthDate}
                errorColor={PRIMARY_COLOR}
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                placeholder='Data de nascimento *'
                keyboardType={"numeric"}
                placeholderTextColor={"#a1a1a1"}
                size={16}
                lenght={10}
                color={"#c1c1c1"}
                type={FontAwesome}
                name={"calendar-o"}
                value={form[k]?.birth_date}
                onChangeText={text => {
                  let format = [...form];
                  format[k] = { ...format[k], birth_date: maskDate(text) };
                  setForm(format);
                }}
              />

              <CustomInput
                error={errors[k]?.CPF}
                errorColor={PRIMARY_COLOR}
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                placeholder={'CPF *'}
                keyboardType={"numeric"}
                placeholderTextColor={"#a1a1a1"}
                size={16}
                lenght={14}
                color={"#c1c1c1"}
                type={FontAwesome}
                name={"id-card-o"}
                value={form[k]?.cpf}
                onChangeText={text => {
                  let format = [...form];
                  format[k] = { ...format[k], cpf: maskDocument(text) };
                  setForm(format);
                }}
              />

              <CustomInput
                containerStyle={styles.containerInput}
                inputStyle={styles.input}
                placeholder={'Passaporte (Viagem internacional) *'}
                placeholderTextColor={"#a1a1a1"}
                size={16}
                color={"#c1c1c1"}
                type={FontAwesome5}
                name={"passport"}
                value={form[k]?.passport}
                onChangeText={text => {
                  let format = [...form];
                  format[k] = { ...format[k], passport: text };
                  setForm(format);
                }}
              />
            </View>
          );
        })}

        <CustomButton
          onPress={handlerPress}
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Salvar`}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#f4f6ff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexGrow: 1,
  },
  textButtonModal: {
    color: "white",
    fontSize: 13.5,
  },
  buttonModal: {
    marginVertical: 5,
    backgroundColor: "#777",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  form: {
    marginVertical: 5,
  },
  containerInput: {
    borderColor: "white",
    backgroundColor: "white",
  },
  input: {
    color: "#555",
  },
  button: {
    flexDirection: "row",
    backgroundColor: BLUE_COLOR,
    borderRadius: 100,
    marginVertical: 15,
    height: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
});
export default BodyNewTravelers;
