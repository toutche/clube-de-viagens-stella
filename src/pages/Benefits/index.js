import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import api from "../../services/api";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import { PRIMARY_COLOR } from "../../utils/variables";
import Body from "./Body";
import Header from "./Header";

export default ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    logScreen(ScreenView.Benefits);
    api.get("/benefits/list").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <ScrollView bounces={false} style={styles.container}>
      {/* <Image backgroundColor='blue' source={Imagem} /> */}
      <Header {...{ data, navigation }} />
      <Body {...{ data, navigation }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});
