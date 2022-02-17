import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Platform, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { BLUE_COLOR, GREEN_COLOR, PRIMARY_COLOR, YELLOW_COLOR } from "../../utils/variables";
import { CheckBox } from "react-native-elements";
import { useAuth } from "../../contexts/auth";
import CustomPicker from "../../components/CustomPicker";
import api from "../../services/api";

const ModalPayment = ({ isVisible, onClose, data, index, setIndex, travelers, package_id }) => {
  const { user } = useAuth();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisiblePicker, setVisiblePicker] = useState(false);

  const openPicker = () => {
    setVisiblePicker(true);
  };

  const closePicker = () => {
    setVisiblePicker(false);
  };

  const payment = () => {
    console.log(package_id, data.payment_infos.card.id, index, check, travelers);

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
        console.log("then:", res);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
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
              dataPicker: data?.payment_infos?.installments,
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
                  Crédito: R$ {parseFloat(user?.wallet?.credit).toFixed(2) || 0}
                </Text>
              </View>

              <CheckBox
                onPress={() => setCheck(!check)}
                checked={check}
                title={"Usar saldo do plano"}
                textStyle={{
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
                  title={`${data?.payment_infos?.installments[index - 1].number}x de`}
                  boldText={`${data?.payment_infos?.installments[index - 1].price}`}
                />
              </View>
              <CustomButton
                loadingApi={loading}
                onPress={payment}
                containerStyle={styles.button}
                titleStyle={styles.textButton}
                title={`${data?.payment_infos?.btn_payment.text} | ${data?.payment_infos?.btn_payment.price}`}
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
  },
  textPayment_infos: {
    color: "#333",
    fontSize: 15,
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
    left: Platform.OS === "ios" ? 9 : 10,
    position: "absolute",
    fontSize: Platform.OS === "ios" ? 10 : 14,
    fontWeight: "bold",
    color: "white",
  },
  plan: {
    fontSize: 12.5,
    color: "white",
    marginLeft: 10,
  },
  credit: {
    color: "white",
    fontSize: 15,
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
