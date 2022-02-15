import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAuth } from "../../contexts/auth";
import { PRIMARY_COLOR } from "../../utils/variables";

const AlertCovid = ({ containerStyle }) => {
  const { user } = useAuth();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>
        Alerta relativo à COVID-19: os requisitos de viagem estão mudando rapidamente, incluindo a
        necessidade de testes com resultados negativo antes da partida e de quarentena logo após a
        chegada
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  text: {
    color: "#e1e1e1",
    fontSize: 13,
  },
});

export default AlertCovid;
