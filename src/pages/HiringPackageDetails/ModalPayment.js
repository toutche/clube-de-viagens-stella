import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, Platform, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import {
  BLUE_COLOR,
  FONT_DEFAULT_STYLE,
  GREEN_COLOR,
  PRIMARY_COLOR,
  YELLOW_COLOR,
} from "../../utils/variables";
import { CheckBox } from "react-native-elements";
import { useAuth } from "../../contexts/auth";
import CustomPicker from "../../components/CustomPicker";
import api from "../../services/api";

const ModalPayment = ({
  navigation,
  isVisible,
  onClose,
  data,
  index,
  setIndex,
  travelers,
  package_id,
}) => {

  const { user } = useAuth();
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isVisiblePicker, setVisiblePicker] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(data?.payment_infos?.view_card);
  const [installments, setInstallments] = useState(data?.payment_infos?.installments);
  const [btnPrice, setBtnPrice] = useState(data?.payment_infos?.btn_payment?.price);
  // const [data, setData] = useState();

  const parse = (number) => {
    try {
      if(isNaN(number)) {
        number = number.replace(".", "");
        number = number.replace(",", ".");
        number = parseFloat(number);
        return number;
      } else {
        throw number + " is " + typeof number;
      }
    } catch(e) {
      return e;
    }
  };

  const format = (number) => {
    try {
      if(isNaN(number)) throw number + " is " + typeof number;
      number = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number); 
      return number;
    } catch(e) {
      return e;
    }
  }

  const usePlanCredit = async () => {
    try { 

      setCheck(!check); 
      
      if(!check) {
        // pagamento com saldo
        await api
          .get(`/pacote-viagem/${package_id}/Y/get/agendamento/pagamento`)
          .then( ({ data }) => { 
            setInstallments(data?.payment_infos?.installments);
            setBtnPrice(data?.payment_infos?.btn_payment?.price);
            setIsCardVisible(data?.payment_infos?.view_card);
           })
          .catch((e) => { console.error(e) });

      } else {
        // pagamento sem saldo
        await api
          .get(`/pacote-viagem/${package_id}/N/get/agendamento/pagamento`)
          .then(({ data }) => {
            setIsCardVisible(data?.payment_infos?.view_card);
            setInstallments(data?.payment_infos?.installments);
            setBtnPrice(data?.payment_infos?.btn_payment?.price);
          })
          .catch(e => console.error(e))

      }

    } catch(e) {
      console.error(e);
    }
  };

  const openPicker = () => {
    setVisiblePicker(true);
  };

  const closePicker = () => {
    setVisiblePicker(false);
  };

  const payment = () => {
    setLoading(true);
    api
      .post("/transaction/package/contracting", {
        package_id,
        card_id: data.payment_infos.card.id,
        installments: index,
        use_credit: check,
        travelers,
        comments: "",
      })
      .then(res => {
        onClose();
        navigation.replace("CongratulationPackage", { ...res.data });
      })
      .catch(() => setLoading(false));
  };

  return (
    <Modal
      statusBarTranslucent
      animationType='fade'
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <CustomPicker
            {...{
              dataPicker: installments,
              isVisiblePicker,
              closePicker,
              setIndex,
            }}
          />
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <View style={styles.float}>
                <View style={styles.top}>
                  <Text style={styles.iconHide}>●</Text>
                  <Text style={styles.plan}>{user?.plan?.name}</Text>
                </View>
                <Text style={styles.credit}>
                  Crédito: R$ {user?.wallet?.credit || 0}
                </Text>
              </View>

              <CheckBox
                onPress={() => { usePlanCredit() }}
                checked={check}
                title={"Usar saldo do plano"}
                textStyle={{
                  fontFamily: FONT_DEFAULT_STYLE,
                  color: "#333",
                  fontSize: 15,
                  fontWeight: "normal",
                  marginLeft: 5,
                }}
                center
                size={28}
                containerStyle={{ borderWidth: 0 }}
                checkedIcon={<MaterialIcons name='check-box' size={28} color={BLUE_COLOR} />}
                uncheckedIcon={
                  <MaterialIcons name='check-box-outline-blank' size={28} color='#c9c9c9' />
                }
              />

              {
              isCardVisible ? 
              <View style={styles.body}>
                <Text style={styles.title}>Cartão salvo</Text>
                <View style={styles.payment_infos}>
                  <View style={styles.changeView}>
                    <Text style={styles.textPayment_infos}>Cartão</Text>
                    <CustomButton
                      containerStyle={styles.changeButton}
                      titleStyle={styles.textChangeButton}
                      title={"Alterar"}
                    />
                  </View>
                  <View style={styles.cardText}>
                    <Text style={styles.textPayment_infos}>{data?.payment_infos?.card.number}</Text>
                    <AntDesign name={"check"} color={GREEN_COLOR} size={22} />
                  </View>
                </View>

                <CustomButton
                  onPress={openPicker}
                  type={Entypo}
                  name={"chevron-thin-down"}
                  size={16}
                  color={"#444"}
                  containerStyle={styles.selectButton}
                  titleStyle={styles.textSelectButton}
                  title={`${installments[index - 1].number}x de`}
                  boldText={`${installments[index - 1].price}`}
                /> 
              </View>
              : <></>
              }
              <CustomButton
                loadingApiColor={"white"}
                loadingApi={loading}
                onPress={payment}
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`${data?.payment_infos?.btn_payment.text} | ${btnPrice}`}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 16.5,
    color: "#444",
    marginVertical: 10,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  textPayment_infos: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 16,
  },
  payment_infos: {
    width: "100%",
  },
  cardText: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  textChangeButton: {
    fontSize: 16,
    color: BLUE_COLOR,
  },
  changeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  changeView: {
    borderBottomWidth: 1.5,
    borderColor: "#e1e1e1",
    backgroundColor: "white",
    paddingLeft: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSelectButton: {
    fontSize: 15.5,
    color: "#333",
  },
  selectButton: {
    flexDirection: "row",
    borderRadius: 999,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  iconHide: {
    fontFamily: FONT_DEFAULT_STYLE,
    left: 11,
    position: "absolute",
    fontSize: 14,
    color: "white",
  },
  plan: {
    fontSize: 12,
    color: "white",
    marginLeft: 10,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  credit: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 14,
  },
  body: {
    backgroundColor: "#ededed",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  top: {
    flexDirection: "row",
    position: "absolute",
    top: -10,
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: YELLOW_COLOR,
    borderRadius: 100,
  },
  float: {
    paddingTop: 18,
    paddingBottom: 10,
    backgroundColor: PRIMARY_COLOR,
    position: "absolute",
    borderRadius: 100,
    top: -25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
  content: {
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: GREEN_COLOR,
    borderRadius: 100,
    height: 45,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});

export default ModalPayment;
