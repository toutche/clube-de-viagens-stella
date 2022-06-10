import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useCheckout } from "../../contexts/checkout";
import { useFilter } from "../../contexts/filter";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import BodyHiringPackageDetails from "./BodyHiringPackageDetails";
import HeaderHiringPackageDetails from "./HeaderHiringPackageDetails";
import ModalPayment from "./ModalPayment";

const HiringPackageDetails = ({ navigation, route }) => {
  const { filterDestiny, filterCheck, filterPeople } = useFilter();
  const { travelers, data } = useCheckout();
  const { roomIndex } = route.params;

  const [isVisible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const [comment, setComment] = useState("");

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
        {...{ navigation, isVisible, onClose, data, index, setIndex, travelers, comment, roomIndex }}
      />
      <HeaderHiringPackageDetails {...{ navigation, data }} />
      <BodyHiringPackageDetails {...{ data, openModal, comment, setComment, roomIndex }} />
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
