import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";

import CustomIcon from "../../components/CustomIcon";
import {
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  FONT_SIZE_SUBTITLE,
  FONT_SIZE_BODY,
} from "../../utils/variables";
import Copyright from "../../components/Copyright";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";

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
import Item15 from "./items/item15";

const image = require("../../../assets/header/TermsAndPolicy.jpg");
import { useAuth } from "../../contexts/auth";
import style from "../Sign/SignUp/style";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

const titlePage = "Termos e condições gerais de uso e de compra e venda";

const text1 = "Bem-vindo ao aplicativo do Clube de Férias Stella Barros (neste documento denominado “aplicativo” ou “Clube de Férias”). Os serviços do Clube de Férias são fornecidos pela pessoa jurídica com a seguinte Razão Social/nome: ASSETUR ASSESSORIA, VIAGENS E TURISMO LTDA, com nome fantasia STELLA BARROS TURISMO, inscrito no CNPJ/CPF sob o nº 00.475.516/0001-92, titular da propriedade intelectual sobre software, website, aplicativos, conteúdos e demais ativos relacionados à plataforma Clube de Férias Stella Barros."
const text2 = "Este Aplicativo é oferecido mediante a sua aceitação de todos os termos, condições e aviso estabelecidos abaixo. O usuário concorda em cumprir com o presente termo de uso, com as leis e regulamentos aplicáveis. Leia os Termos de uso com atenção."
const text3 = "O conteúdo do aplicativo é direcionado para seus clientes atuais e em potencial, pessoas naturais ou jurídicas."
const text4 = "Nossa finalidade é trazer informações institucionais sobre a empresa e seus produtos e serviços."

const titleTerm1 = "1. Termos";
const term1 =
  "Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços.\
  Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento\
  de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,\
  está proíbido de usar ou acessar este site. Os materiais contidos neste site são\
  protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.";

const titleTerm2 = "2. Uso de licença";
const term2 =
  "É concedida permissão para baixar temporáriamente uma cópia dos materiais\
  (informações ou software) no site Stella Barros, apenas para visualização\
  transitória pessoal e não comercial. Esta é a concessão de uma licença,\
  não uma transferência de título e, sob esta licença, você nã pode:";

const box1 = "Modificar ou copiar os materiais";

const box2 =
  "Usar os materiais para qualquer finalidade comercialou para exibição pública (comercial ou não comercial);";

const box3 =
  "Tentar descompilar ou fazer engenharia reversa de qualquer\
  software contido no site Stella Barros: remover quaisquer\
  direitos autorais ou outras notações de propriedade dos materiais;";

export default ({ navigation }) => {
  const { loadingApi, updateUser } = useAuth();

  useEffect(() => {
    logScreen(ScreenView.TermsConditions);
  }, []);

  const scrollRef = useRef();
  const onScrollTopPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  return (
    <ScrollView style={Style.container} ref={scrollRef}>
      <ImageBackground source={image} style={Style.image} />

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
        <Text style={Style.text}>{text2}</Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.text}>{text3}</Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.text}>{text4}</Text>
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
      <Item15 />

      {/* <View style={Style.bottom}>
        <TouchableOpacity>
          <Text style={Style.itemBottom}>Baixar termos e condições</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Style.itemBottom}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        onPress={() => updateUser({ accept_terms: true }, navigation)}
        loadingApi={loadingApi}
        containerStyle={Style.button}
        titleStyle={Style.buttonText}
        title={"Aceitar"}
      /> */}
      
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
  image: {
    aspectRatio: 1.5,
    width: "100%",
    height: undefined,
    marginBottom: 5,
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
  titleItem: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_SUBTITLE - 2,
    fontWeight: "bold",
  },
  text: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
  },
  item: {
    marginHorizontal: 30,
    paddingBottom: 15,
  },
  boxTerms: {
    alignItems: "center",
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY,
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
