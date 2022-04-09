import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import { BLUE_COLOR, GREEN_COLOR, PRIMARY_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Travel from "../../components/Travel";
import TravelCard from "../../components/TravelCard";
import AlertCovid from "../../components/AlertCovid";
import InfoHotel from "../../components/InfoHotel";
import api from "../../services/api";
import ModalCancel from "../MyReservations/ModalCancel";

const BodyDetailsContractedPackages = ({item}) => {
  const [scheduling, setScheduling] = useState("")
  const [hotel, setHotel] = useState("")
  const [dayByDay, setDayByDay] = useState("")
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    (async () => {
      await api.get(`/pacote-viagem/${item.id}/get/agendamento`).then(res => {
        setScheduling(res.data);
        setHotel({
          hotel: res.data.hotel_name,
          service_description: res.data.service_description
        })
      }).catch(err => console.error(err));
      await api.get(`/pacote-viagem/${item.id}/get`).then(res => {
        setDayByDay(res.data.day_by_day)
      }).catch(err => console.error(err));
    })()
  }, [])
  return (
    <View style={styles.container}>
      <CustomButton
        type={AntDesign}
        name={"checkcircleo"}
        color={"white"}
        size={25}
        iconStyle={styles.icon}
        containerStyle={styles.buttonTop}
        titleStyle={styles.textButtonTop}
        title={"Pacote contratado para 15 de Maio / ás 14h"}
        // title={`Pacote contratado para ${scheduling.date}`}
      />

      <CustomButton
        onPress={() => { setVisible(!isVisible) }}
        type={AntDesign}
        name={"closecircleo"}
        color={PRIMARY_COLOR}
        size={25}
        iconStyle={styles.icon}
        containerStyle={styles.buttonBottom}
        titleStyle={styles.textButtonBottom}
        title={"Realizar cancelamento"}
      />

      <ModalCancel isVisible={isVisible} onClose={() => setVisible(!isVisible)}/>

      <TravelCard display={1} data={item}/>

      <Travel data={scheduling}/>

      <InfoHotel data={hotel}/>

      <CustomButton
        left
        type={AntDesign}
        name={"exclamationcircle"}
        color={BLUE_COLOR}
        size={16}
        containerStyle={styles.buttonPolicy}
        titleStyle={styles.textButtonPolicy}
        title={`Verificar política de cancelamento`}
      />

      <AlertCovid containerStyle={styles.covid} />
      
      {dayByDay.length > 0 && (
        <View style={styles.details}>

          {dayByDay.map((i, n) => (
            <View key={n}>
              <Text style={styles.subTitle}>Dia {i.day}</Text>
              <Text style={styles.text}>{i.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* <View style={styles.details}>
        <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
        <Text style={styles.text}>
          Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode
          tomar sol
        </Text>

        <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
        <Text style={styles.text}>
          Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode
          tomar sol
        </Text>

        <Text style={styles.title}>Ellaidhoo Maldives by Cinnamon</Text>
        <Text style={styles.text}>
          Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode
          tomar sol
        </Text>

        <Text style={styles.title}>Comodidades do estabelecimento</Text>
        <Text style={styles.text}>
          Ellaidhoo Maldives by cinnamon fica numa praia particular de areia branca onde vc pode
          tomar sol
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
    marginBottom: -20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  covid: {
    width: "100%",
  },
  details: {
    paddingHorizontal: 10,
  },
  title: {
    color: "#333",
    fontSize: 15,
  },
  text: {
    fontSize: 12.5,
    color: "#777",
    marginTop: 2,
    marginBottom: 10,
  },
  buttonPolicy: {
    marginTop: 20,
    marginBottom: 25,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: BLUE_COLOR,
    borderRadius: 100,
    height: 40,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonPolicy: {
    fontSize: 13.5,
    color: BLUE_COLOR,
    textAlign: "center",
    marginLeft: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  buttonTop: {
    height: 45,
    width: "95%",
    marginBottom: 10,
    maxWidth: 600,
    alignSelf: "center",
    elevation: 3,
    borderRadius: 100,
    backgroundColor: GREEN_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonTop: {
    fontSize: 14,
    maxWidth: "60%",
    textAlign: "center",
    color: "white",
  },
  buttonBottom: {
    borderWidth: 1.5,
    borderColor: PRIMARY_COLOR,
    height: 45,
    marginBottom: 15,
    width: "95%",
    maxWidth: 600,
    alignSelf: "center",
    elevation: 3,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonBottom: {
    fontSize: 16,
    color: PRIMARY_COLOR,
  },
  details: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 15.5,
    marginBottom:15
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 15,
    marginTop: 8,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    marginTop: 2,
    color: "#777",
  },
});

export default BodyDetailsContractedPackages;
