import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { PRIMARY_COLOR } from "../../utils/variables";
import { CreditCardInput } from "../../components/CreditInput";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import api from "../../services/api";
import { useFilter } from "../../contexts/filter";
import { ContentType, EventType, ScreenName } from "../../services/firebase/constant";
import { logEvent } from "../../services/firebase";

export default ({ data, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { cupom, setCupom, cupomExists, setCupomExists } = useFilter();
  
  const [card, setCard] = useState({});
  const [check, setCheck] = useState(false);

  const CARD_EXAMPLE = {
    plan_id: data.id,
    card_number: "4000000000000010",
    holder_name: "Igor M. S.",
    holder_cpf: "02660870004",
    validade_year: "23",
    validate_month: "08",
    cvv: "123" ,
    saved_card: check,
    cupom: cupomExists ? cupom : null,
  }

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
      .post("/transaction/plan/contracting",
        __DEV__ ? CARD_EXAMPLE
          :
          {
            plan_id: data.id,
            card_number: card.card_number,
            holder_name: card.holder_name,
            holder_cpf: card.holder_cpf,
            validade_year: card.validade_year,
            validate_month: card.validate_month,
            cvv: card.cvv,
            saved_card: check
          })
      .then(res => {
        console.log("sucess", res.data);
        logEvent(EventType.purchase, {
          screen_name: ScreenName.checkoutPlan,
          content_type: ContentType.payment,
          description: {
            plan_id: data.id
          }
        });
        if (res.data.type) {
          navigation.navigate({
            name: "CongratulationPlan",
            params: { ...res.data },
            merge: true,
          });
        } else {
          Alert.alert("Quase lá!", `Preencha os dados do seu cartão de crédito por completo para dar andamento a sua assinatura.`, [
            {
              text: "Voltar"
            }
          ])
        }
      })
      .catch(e => console.log("error", e.response.data))
      .finally(() => {
        setLoading(false)
        setCupomExists(null)
        setCupom('')
      })
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.containerScroll}>
        <Text style={styles.title}>Informe seus dados do cartão:</Text>
        <CreditCardInput requiresName onChange={onChange} />
        <CheckBox
          onPress={() => {
            logEvent(EventType.selectContent, {
              screen_name: ScreenName.checkoutPlan,
              content_type: ContentType.saveCard
            });
            setCheck(!check)
          }}
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
          title={`Realizar pagamento | R$${data.amount || 0}`}
        />
      </ScrollView>
    </KeyboardAvoidingView>
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
    alignItems: "center",
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
