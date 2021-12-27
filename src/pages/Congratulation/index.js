import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import InfoHotel from "../../components/InfoHotel";
import Travel from "../../components/Travel";
import TravelCard from "../../components/TravelCard";
import { BLUE_COLOR } from "../../utils/variables";

const Congratulation = () => {
  return (
    <ScrollView>
      <Image />
      <View style={styles.body}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>Parabens, </Text>
          sua viagem já foi solicitada e estamos organizando tudo para você :)
        </Text>

        <Text style={styles.subTitle}>
          Todos os detalhes foram enviados para o e-mail
          <Text style={styles.subTitleBold}> teste@gmail.com</Text>
        </Text>

        <Text style={styles.hideText}>Plano Utilizado</Text>

        <TravelCard display={2} />

        <Travel display={1} />

        <InfoHotel display={2} />

        <CustomButton
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Ver detalhes desse pacote`}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
  hideText: {
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
  body: {
    paddingHorizontal: 15,
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
});

export default Congratulation;
