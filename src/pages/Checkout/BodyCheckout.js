import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { PRIMARY_COLOR } from "../../utils/variables";
import { CreditCardInput } from "../../components/CreditInput";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import api from "../../services/api";

const BodyCheckout = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState({
    card_number: "4000 0000 0000 0010",
    holder_name: "Igor M. S.",
    holder_cpf: "02660870004",
    validade_year: "23",
    validate_month: "08",
    cvv: "123",
  });
  const [check, setCheck] = useState(false);

  const onChange = ({ values }) => {
    setCard({
      card_number: values.number,
      holder_name: values.name,
      holder_cpf: values.CPF,
      validade_year: values.expiry.split("/")[1],
      validate_month: values.expiry.split("/")[0],
      cvv: values.cvc,
    });
  };

  const handlePress = () => {
    setLoading(true);
    api
      .post("/transaction/plan/contracting", {
        plan_id: data.id,
        card_number: card.card_number,
        holder_name: card.holder_name,
        holder_cpf: card.holder_cpf,
        validade_year: card.validade_year,
        validate_month: card.validate_month,
        cvv: card.cvv,
        saved_card: check,
      })
      .then(res => {
        console.log("sucess", res.data);
      })
      .catch(e => console.log("error", e))
      .finally(() => setLoading(false));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
      <Text style={styles.title}>Informe seus dados do cartão:</Text>
      <CreditCardInput requiresName onChange={onChange} />
      <CheckBox
        onPress={() => setCheck(!check)}
        checked={check}
        title={"Salvar cartão"}
        textStyle={{
          color: "#333",
          fontSize: 15,
        }}
        center
        size={28}
        containerStyle={{
          width: "100%",
          backgroundColor: "transparent",
          borderWidth: 0,
        }}
        checkedIcon={<MaterialIcons name='check-box' size={28} color={PRIMARY_COLOR} />}
        uncheckedIcon={<MaterialIcons name='check-box-outline-blank' size={28} color='#c9c9c9' />}
      />
      <CustomButton
        loadingApiColor={"white"}
        loadingApi={loading}
        onPress={handlePress}
        containerStyle={styles.button}
        titleStyle={styles.textButton}
        title={`Realizar pagamento R$${data.amount || 0}`}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  containerScroll: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 100,
    height: 50,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 14.5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BodyCheckout;
