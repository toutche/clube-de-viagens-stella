import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import CustomButton from "../../components/CustomButton";
import api from "../../services/api";
import { maskDocument, maskDate } from "../../utils/masks";

export default ({
  route: {
    params: { i, k },
  },
  navigation,
}) => {
  const [loading, setLoading] = useState(false);
  //   const name = [i?.name, i?.last_name].join(" ");
  const [form, setForm] = useState({
    name: i?.name || "",
    last_name: i?.last_name || "",
    birth_date: i?.birth_date || "",
    cpf: i?.cpf || "",
    passport: i?.passport || "",
  });

  const handlerPress = () => {
    setLoading(true);
    // let [name, ...last_name] = form?.name.split(" ");
    // last_name = last_name.join(" ") || name;
    // let cpf = form?.cpf.replace(".", "").replace(".", "").replace("-", "");
    // let cpf = form?.cpf.replaceAll(".", "").replace("-", "");
    let name = form?.name;
    let last_name = form?.last_name;
    let cpf = form?.cpf.replace(".", "").replace(".", "").replace("-", "");

    let form_data = form;

    form_data = {
      ...form_data,
      name: name,
      last_name: last_name,
      cpf: cpf,
      birth_date: form?.birth_date.split("/").reverse().join("-"),
    };

    api
      .put(`/familiar/${i?.id}/atualizar`, form_data)
      .then(res => {
        console.log(res.data);
        navigation.goBack();
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{`${k + 1}º viajante`}</Text>

      <CustomInput
        containerStyle={styles.container_input}
        inputStyle={styles.input}
        color={"#c1c1c1"}
        placeholder='Insira o nome'
        placeholderTextColor={"#a1a1a1"}
        type={FontAwesome}
        size={18}
        name={"user-o"}
        autoCapitalize={"words"}
        value={form?.name}
        onChangeText={name =>
          setForm({
            ...form,
            name,
          })
        }
      />

      <CustomInput
        containerStyle={styles.container_input}
        inputStyle={styles.input}
        color={"#c1c1c1"}
        placeholder='Insira o sobrenome'
        placeholderTextColor={"#a1a1a1"}
        type={FontAwesome}
        size={18}
        name={"user-o"}
        autoCapitalize={"words"}
        value={form?.last_name}
        onChangeText={last_name =>
          setForm({
            ...form,
            last_name,
          })
        }
      />

      <CustomInput
        containerStyle={styles.container_input}
        inputStyle={styles.input}
        placeholder='Data de nascimento'
        keyboardType={"numeric"}
        placeholderTextColor={"#a1a1a1"}
        color={"#c1c1c1"}
        size={18}
        type={FontAwesome}
        name={"calendar-o"}
        value={maskDate(form?.birth_date)}
        onChangeText={birth_date =>
          setForm({
            ...form,
            birth_date: maskDate(birth_date),
          })
        }
      />
      <CustomInput
        containerStyle={styles.container_input}
        inputStyle={styles.input}
        placeholder='CPF'
        keyboardType={"numeric"}
        placeholderTextColor={"#a1a1a1"}
        color={"#c1c1c1"}
        size={18}
        type={FontAwesome}
        name={"id-card-o"}
        value={maskDocument(form?.cpf)}
        onChangeText={cpf =>
          setForm({
            ...form,
            cpf: maskDocument(cpf),
          })
        }
      />

      <CustomInput
        containerStyle={styles.container_input}
        inputStyle={styles.input}
        placeholder='Passaporte (Viagem internacional)'
        placeholderTextColor={"#a1a1a1"}
        color={"#c1c1c1"}
        size={18}
        type={FontAwesome5}
        name={"passport"}
        value={form?.passport}
        onChangeText={passport =>
          setForm({
            ...form,
            passport,
          })
        }
      />

      <View style={styles.container_buttons}>
        <CustomButton
          onPress={() => navigation.goBack()}
          size={24}
          containerStyle={styles.button_left}
          titleStyle={styles.button_text_left}
          title={"Cancelar".toUpperCase()}
        />

        <CustomButton
          onPress={handlerPress}
          size={24}
          loadingApiColor={"white"}
          loadingApi={loading}
          containerStyle={styles.button_right}
          titleStyle={styles.button_text_right}
          title={"Salvar".toUpperCase()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#e1e1e1",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  title: {
    marginVertical: 8,
    fontSize: 17,
    textAlign: "center",
    fontFamily: FONT_DEFAULT_STYLE,
  },
  container_input: {
    borderColor: "white",
    backgroundColor: "white",
  },
  input: {
    color: "#555",
  },
  container_buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: 28,
  },
  button_left: {
    borderWidth: 1.5,
    borderColor: "#c1c1c1",
    borderRadius: 999,
    height: 50,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  button_text_left: {
    fontSize: 13.5,
    color: "#b1b1b1",
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginLeft: 10,
  },
  button_right: {
    borderRadius: 999,
    backgroundColor: BLUE_COLOR,
    height: 50,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  button_text_right: {
    fontSize: 13.5,
    color: "white",
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginLeft: 10,
  },
});
