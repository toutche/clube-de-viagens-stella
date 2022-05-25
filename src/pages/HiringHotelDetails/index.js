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
  const id = route.params?.id;
  const { travelers, data: item } = useCheckout();

  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [comment, setComment] = useState("");

  useEffect(() => {
    api
      .post(`/hotel/get/agendamento/pagamento`, {
        'start_date': String(filterCheck.in).split('/').reverse().join('-'),
        'end_date': String(filterCheck.out).split('/').reverse().join('-'),
        'qtd_people': String(filterPeople.adult),
        'city_code': String(filterDestiny.key),
        'id_hotel': item.hotel.item.id,
        'hotel_key_detail': item.hotel.item.keyDetail,
        'hotel_room_code': item.hotel.roomCode,
        'use_credit': true
      })
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
        {...{ navigation, isVisible, onClose, data, index, setIndex, travelers, package_id: id, comment }}
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
