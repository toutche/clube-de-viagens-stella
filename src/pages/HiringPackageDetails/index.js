import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import BodyHiringPackageDetails from "./BodyHiringPackageDetails";
import HeaderHiringPackageDetails from "./HeaderHiringPackageDetails";
import ModalPayment from "./ModalPayment";

const HiringPackageDetails = ({ navigation, route }) => {
  const id = route.params?.id;

  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/pacote-viagem/${id}/get/agendamento/pagamento`)
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator color={PRIMARY_COLOR} size={"large"} />
      </View>
    );

  return (
    <View style={styles.container}>
      <ModalPayment isVisible={isVisible} onClose={() => setVisible(!isVisible)} />
      <HeaderHiringPackageDetails {...{ navigation, data }} />
      <BodyHiringPackageDetails openModal={() => setVisible(!isVisible)} {...{ data }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HiringPackageDetails;
