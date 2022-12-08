import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign } from "@expo/vector-icons";
import BoardingPlace from "./BoardingPlace";
import Travel from "../../components/Travel";
import Travelers from "./Travelers";
import TravelCard from "../../components/TravelCard";
import CustomButton from "../../components/CustomButton";
import { useCheckout } from "../../contexts/checkout";
import { useFilter } from "../../contexts/filter";

const Scheduling = ({ navigation, route }) => {
  const { getScheduling, data, travelers } = useCheckout();
  const {childrens, setChildrens} = useFilter();

  const id = route.params.item.id;

  useEffect(() => {
    getScheduling(id);
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={AntDesign}
        leftName={"arrowleft"}
        leftSize={26}
        handlerLeft={() => navigation.goBack()}
        title={"Resumo"}
      />

      <ScrollView bounces={false} style={styles.body}>
        <BoardingPlace {...{ data }} />
        <Travel {...{ data, display: data.hour_voo ? 0 : 1 }} />

        <TravelCard display={3} {...{ data }} value_observation={true} />
        <Travelers children={childrens} setChildren={setChildrens} {...{ data }} onPress={() => navigation.navigate("NewsTravelers")} />
        <CustomButton
          disabled={travelers.length === data.qtd_pax ? false : true}
          disabledMessage='Para continuar, nomeie os viajantes'
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Próximo`}
          onPress={() =>
            navigation.navigate({
              name: "HiringPackageDetails",
              params: {
                id,
              },
              merge: true,
            })
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: "#e1e1e1",
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#287dfd",
    borderRadius: 100,
    height: 50,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 14.5,
    color: "white",
    textAlign: "center",
  },
});

export default Scheduling;
