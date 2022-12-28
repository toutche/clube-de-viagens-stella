import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import api from "../../services/api";
import Body from "./Body";
import Header from "./Header";
import ModalCancel from "./ModalCancel";
import { useFocusEffect } from '@react-navigation/native';
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

export default ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    logScreen(ScreenView.MyReservations);
}, []);

  const [data, setData] = useState([]);

  const getReservations = () => {
    api.get('/pacote-viagem/minhas-reservas').then((res) => {
      setData(res.data)
    })
    console.log('buscando pacotes');
  }

  useEffect(() => {
    getReservations();
  }, [])

  useFocusEffect(
    useCallback(() => {
      getReservations();
    }, [])
  )

  const toggleModal = (item) => {
    setVisible(!isVisible);
    setItem(item);
  }

  return (
    <View style={styles.container}>
      <ModalCancel 
        isVisible={isVisible} 
        onClose={() => setVisible(!isVisible)} 
        item={item} 
        getReservations={getReservations} />
      <Header navigation={navigation} />
      <Body itens={data} openModal={toggleModal} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
