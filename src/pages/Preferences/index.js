import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AnimatedCarousel from "./AnimatedCarousel";
import CustomIcon from "../../components/CustomIcon";
import TextWelcome from "./TextWelcome";
import CustomAvatar from "../../components/CustomAvatar";
import { PRIMARY_COLOR, TEXT_COLOR_BKCOLORFUL } from "../../utils/variables";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { logout } from "../../services/auth";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

const Slides = data => [
  {
    text: "Suas viagens duram mais de 4 dias?",
    toast: "Tempo de viagem",
    poster: "https://toutche.com.br/clube_de_ferias/search-02.jpg",
  },
  {
    text: "Normalmente você planeja suas viagens com menos de 7 dias de antecedência?",
    toast: "Família",
    poster: "https://toutche.com.br/clube_de_ferias/search-01.jpg",
  },
  {
    title: "Estamos finalizando!",
    subTitle:
      "Só mais uma pergunta! Para que possamos entender um pouco mais do seu perfil, conte-nos quais dos interesses abaixo normamente fazem parte das suas viagens?",
    note: "Selecione quantos desejar :)",
    activitiesText: "Atividades",
    activities: data,
  },
];

export default ({ navigation }) => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    logScreen(ScreenView.Preferences);
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    api
      .get("/interesses/listar")
      .then(({ data }) => {
        if (data.status !== "Authorization Token not found") {
          setTimeout(() => {
            setData(Slides(data));
            //console.log("renderQuestionary", data);
          }, 500);
        }
      })
      .catch(e => console.log(e));
  }, []);

  const handleBackButton = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else {
      logout();
      navigation.replace("Sign");
    }
  };

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={"white"} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <CustomIcon
        size={26}
        onPress={handleBackButton}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      /> */}
      <CustomAvatar
        containerStyle={styles.avatar}
        item={
          user?.image ||
          "https://www.globaltec.com.br/wp-content/uploads/2021/01/laptop-user-1-1179329.png"
        }
      />
      <TextWelcome
        textStyle={styles.text}
        title={`Tudo bem ${user?.name}?`}
        subTitle={"Queremos saber mais sobre você :)"}
      />
      <AnimatedCarousel data={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  avatar: {
    width: 70,
    height: 70,
    padding: 7,
    marginTop: 35,
    marginBottom: -5,
  },
  text: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 15,
  },
  icon: {
    left: 5,
    top: 30,
    padding: 10,
    position: "absolute",
  },
});
