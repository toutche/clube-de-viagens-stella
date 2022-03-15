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

const Slides = data => [
  {
    text: "Você costuma fazer viagens em família?",
    toast: "Família",
    poster: "https://mfiles.alphacoders.com/806/806684.jpg",
  },
  {
    text: "Você normalmente viaja pelo Brasil?",
    toast: "Destino nacional",
    poster: "https://mfiles.alphacoders.com/806/806684.jpg",
  },
  {
    text: "Suas viagens duram mais de 4 dias?",
    toast: "Tempo de viagem",
    poster: "https://mfiles.alphacoders.com/806/806684.jpg",
  },
  {
    text: "Consegue viajar mais de uma vez ao ano?",
    toast: "Frêquencia de viagem",
    poster: "https://mfiles.alphacoders.com/806/806684.jpg",
  },
  {
    text: "Em suas viagens, você costuma se hospedar em hotéis econômicos?",
    toast: "Hotéis econômicos",
    poster: "https://mfiles.alphacoders.com/806/806684.jpg",
  },

  {
    title: "Estamos finalizando!",
    subTitle:
      "Só mais uma pergunta! Para que possamos entender um pouco mais do seu perfil, conte-nos sobre seus interesses e os meses que normalmente você faz as suas viagens?",
    note: "Selecione quantos desejar :)",
    activitiesText: "Atividades",
    activities: data,
  },
];

export default ({ navigation }) => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
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
      <CustomIcon
        size={26}
        onPress={handleBackButton}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      />
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
