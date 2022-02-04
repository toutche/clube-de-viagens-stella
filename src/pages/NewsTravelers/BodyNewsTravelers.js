import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { BLUE_COLOR } from "../../utils/variables";
import { FontAwesome } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import api from "../../services/api";
import { useCheckout } from "../../contexts/checkout";

const BodyNewTravelers = ({ openModal, form = [], setForm = () => {} }) => {
  const { data } = useCheckout();

  const [loading, setLoading] = useState(false);
  const [newUsers, setUsers] = useState([]);

  const handlerPress = () => {
    setLoading(true);
    api
      .post("/familiar/criar", {
        name: "Carlos",
        last_name: "Eduardo",
        birth_date: "2000-10-03",
        cpf: "53242342321",
      })
      .then(({ data }) => {
        console.log(data);
        //setUsers([...newUsers, form]);
      })
      .catch(e => console.log("error", e))
      .finally(() => setLoading(false));
  };

  return (
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
              placeholder='Insira o nome'
              placeholderTextColor={"#a1a1a1"}
              type={FontAwesome}
              name={"user"}
              value={form[k]?.name}
              onChangeText={text => {
                let format = [...form];
                format[k] = { ...format[k], name: text };
                setForm(format);
              }}
            />
            <CustomInput
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholder='Data de nascimento'
              placeholderTextColor={"#a1a1a1"}
              size={16}
              color={"#c1c1c1"}
              type={FontAwesome}
              name={"envelope"}
              value={form[k]?.birth_date}
              onChangeText={text => {
                let format = [...form];
                format[k] = { ...format[k], birth_date: text };
                setForm(format);
              }}
            />
            <CustomInput
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholder='RG ou CPF'
              keyboardType={"numeric"}
              placeholderTextColor={"#a1a1a1"}
              size={16}
              color={"#c1c1c1"}
              type={FontAwesome}
              name={"envelope"}
              value={form[k]?.cpf}
              onChangeText={text => {
                let format = [...form];
                format[k] = { ...format[k], cpf: text };
                setForm(format);
              }}
            />

            <CustomInput
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholder='Passaporte (Viagem internacional)'
              placeholderTextColor={"#a1a1a1"}
              size={16}
              color={"#c1c1c1"}
              type={FontAwesome}
              name={"envelope"}
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
    color: "#333",
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
});
export default BodyNewTravelers;
