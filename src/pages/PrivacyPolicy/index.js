import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomIcon from "../../components/CustomIcon";
import {
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  FONT_SIZE_SUBTITLE,
  FONT_SIZE_BODY,
} from "../../utils/variables";

import Copyright from "../../components/Copyright";
import Item1 from "./items/item1";
import Item2 from "./items/item2";
import Item3 from "./items/item3";
import Item4 from "./items/item4";
import Item5 from "./items/item5";
import Item6 from "./items/item6";
import Item7 from "./items/item7";
import Item8 from "./items/item8";
import Item9 from "./items/item9";
import Item10 from "./items/item10";
import Item11 from "./items/item11";
import Item12 from "./items/item12";
import Item13 from "./items/item13";
import Item14 from "./items/item14";

const image = require("../../../assets/header/TermsAndPolicy.jpg");
const titlePage = "Aviso de Privacidade";

const text1 =
  "Este site e aplicativo são mantidos e operados por Assetur Viagens e Tursimo Ltda, \
neste documento identificado como “Clube de Férias”. Nós coletamos e utilizamos alguns dados pessoais \
que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses \
dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados \
Pessoais - LGPD). Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta \
política de privacidade, que contém informações importantes sobre: ";

const subText1 = [
  "- Quem deve utilizar nossas plataformas;",
  "- Quais dados coletamos e o que fazemos com eles;",
  "- Seus direitos em relação aos seus dados pessoais;",
  "- Como entrar em contato conosco.",
];
const text2 =
  "O Clube de Férias se reserva no direito de alterar esta Política de Privacidade para \
adaptá-la à legislação aplicável ou às boas práticas comerciais de uso da internet. O Clube de Férias \
comunicará eventuais mudanças em seu App e/ou site com a devida antecedência.";
const text3 =
  "Caso tenha dúvidas ou precise tratar de qualquer assunto relacionado a este Aviso de \
Privacidade, entre em contato conosco por meio do seguinte canal de e-mail:";
const emailContato = " dpo@grupoaguia.com.br.";

export default ({ navigation }) => {
  const scrollRef = useRef();
  const onScrollTopPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  return (
    <ScrollView style={Style.container} ref={scrollRef}>
      <Image source={image} style={Style.image} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        color={"#222"}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={Style.icon}
      />

      <Text style={Style.title}>{titlePage}</Text>

      <View style={Style.item}>
        <Text style={Style.text}>{text1}</Text>
      </View>

      <View style={Style.item}>
        {subText1.map((item, index) => (
          <Text key={index} style={Style.text}>
            {item}
          </Text>
        ))}
      </View>

      <View style={Style.item}>
        <Text style={Style.text}>{text2}</Text>
        <Text style={Style.text}>
          {text3}
          <Text style={Style.email}>{emailContato}</Text>
        </Text>
      </View>

      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />

      <View style={Style.bottom}>
        {/* <TouchableOpacity>
          <Text style={Style.itemBottom}>Baixar termos e condições</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate("TermsConditions")}>
          <Text style={Style.itemBottom}>Termos de Uso</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={onScrollTopPress} style={Style.scrollTopContainer}>
        <AntDesign name="upcircleo" size={24} color="#FFFFFF" />
        <Text style={Style.scrollTopText}>Voltar para o topo</Text>
      </TouchableOpacity>

      <Copyright display={1} />
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  image: {
    aspectRatio: 1.5,
    width: "100%",
    height: undefined,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    width: "80%",
    marginTop: 15,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  icon: {
    left: 5,
    top: 30,
    padding: 10,
    position: "absolute",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    paddingTop: 10,
    paddingBottom: 15,
  },
  body: {
    flex: 1,
  },
  text: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
  },
  email: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
    fontStyle: "italic",
  },
  item: {
    marginHorizontal: 20,
    paddingBottom: 15,
  },
  bottom: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  itemBottom: {
    textDecorationLine: "underline",
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 12,
    padding: 5,
    margin: -5,
  },
  scrollTopContainer: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollTopText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 8
  }
});
