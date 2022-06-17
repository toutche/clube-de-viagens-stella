import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import BoardingPlace from "./BoardingPlace";
import Travel from "../../components/Travel";
import Travelers from "./Travelers";
import TravelCard from "../../components/TravelCard";
import CustomButton from "../../components/CustomButton";
import { useCheckout } from "../../contexts/checkout";
import { useFilter } from "../../contexts/filter";
import Room from "./Room";
import { PRIMARY_COLOR } from "../../utils/variables";

const Scheduling = ({ navigation, route }) => {
  const { getScheduling, data, travelers } = useCheckout();
  const { filterDestiny, filterCheck, filterPeople } = useFilter();
  const { roomIndex } = route.params;

  if (Object.keys(data).length === 0)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
      </View>
    );

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
        <Travel  {...{ data, display: data.hour_voo ? 0 : 1 }} />
        
        <TravelCard display={3} {...{ data }} />
        <Travelers 
          {...{ data }} 
          onPress={() => 
            navigation.navigate({
              name: "NewsTravelers",
              params: { data }
            })
          }
        />

        {data && <Room data={data.rooms[roomIndex]} />}

        <CustomButton
          disabled={travelers.length === data.qtd_pax ? false : true}
          disabledMessage='Para continuar, nomeie os viajantes'
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Próximo`}
          onPress={() =>
            navigation.navigate({
              name: "HiringHotelDetails",
              params: {
                roomIndex,
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Scheduling;
