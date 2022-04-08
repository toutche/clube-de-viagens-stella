import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import api from "../../services/api";
import Body from "./Body";
import Header from "./Header";
import ModalCancel from "./ModalCancel";

export default ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);

  const [data, setData] = useState([])

    useEffect(() => {
        api.get('/pacote-viagem/minhas-reservas').then((res) => {
            setData(res.data)
        })
    }, [])

  return (
    <View style={styles.container}>
      <ModalCancel isVisible={isVisible} onClose={() => setVisible(!isVisible)} />
      <Header navigation={navigation} />
      <Body itens={data} openModal={() => setVisible(!isVisible)} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
