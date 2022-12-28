import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useCheckout } from "../../contexts/checkout";
import api from "../../services/api";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import { PRIMARY_COLOR } from "../../utils/variables";
import BodyHiringPackageDetails from "./BodyHiringPackageDetails";
import HeaderHiringPackageDetails from "./HeaderHiringPackageDetails";
import ModalPayment from "./ModalPayment";

const HiringPackageDetails = ({ navigation, route }) => {
  const id = route.params?.id;
  const { travelers } = useCheckout();

  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [comment, setComment] = useState("");

  useEffect(() => {
    logScreen(ScreenView.HiringPackageDetails);
    api
      .get(`/pacote-viagem/${id}/Y/get/agendamento/pagamento`)
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const openModal = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={PRIMARY_COLOR} size={"large"} />
      </View>
    );

  return (
    <View style={styles.container}>
      <ModalPayment
        {...{
          navigation,
          isVisible,
          onClose,
          data,
          index,
          setIndex,
          travelers,
          package_id: id,
          comment,
        }}
      />
      <HeaderHiringPackageDetails {...{ navigation, data }} />
      <BodyHiringPackageDetails {...{ data, openModal, comment, setComment }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HiringPackageDetails;
