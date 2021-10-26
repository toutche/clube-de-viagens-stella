import * as React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';

import Title from "../../common/titleInternal"
import CustomIcon from "../../components/CustomIcon";
import {
  PRIMARY_COLOR,
  WIDTH,
  TEXT_COLOR_BKCOLORFUL,
  FONT_SIZE_SUBTITLE,
  FONT_SIZE_BODY
} from "../../utils/variables";
import Copyright from "../../components/Copyright";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";

const image = require("../../../assets/header/TermsAndPolicy.jpg")
import { useAuth } from "../../contexts/auth";

const titlePage = "Termos e condições de uso"

const titleTerm1 = "1. Termos"
const term1 = "Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços.\
  Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento\
  de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,\
  está proíbido de usar ou acessar este site. Os materiais contidos neste site são\
  protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis."


const titleTerm2 = "2. Uso de licença"
const term2 = "É concedida permissão para baixar temporáriamente uma cópia dos materiais\
  (informações ou software) no site Stella Barros, apenas para visualização\
  transitória pessoal e não comercial. Esta é a concessão de uma licença,\
  não uma transferência de título e, sob esta licença, você nã pode:"

const box1 = "Modificar ou copiar os materiais"

const box2 = "Usar os materiais para qualquer finalidade comercialou para exibição pública (comercial ou não comercial);"

const box3 = "Tentar descompilar ou fazer engenharia reversa de qualquer\
  software contido no site Stella Barros: remover quaisquer\
  direitos autorais ou outras notações de propriedade dos materiais;"

export default ({ navigation }) => {

  const { loadingApi, updateUser } = useAuth()

  return (
    <ScrollView style={Style.container}>

      <ImageBackground source={image} style={Style.image} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        color={'#222'}
        type={AntDesign}
        name={'arrowleft'}
        containerStyle={Style.icon}
      />

      <Text style={Style.title}>{titlePage}</Text>

      <View style={Style.item}>
        <Text style={Style.titleItem}>{titleTerm1}</Text>
        <Text style={Style.text}>{term1}</Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.titleItem}>{titleTerm2}</Text>
        <Text style={Style.text}>{term2}</Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.boxTerms}>
          <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box1}
        </Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.boxTerms}>
          <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box2}
        </Text>
      </View>

      <View style={Style.item}>
        <Text style={Style.boxTerms}>
          <FontAwesome color={TEXT_COLOR_BKCOLORFUL} size={9} name={"circle"} /> {box3}
        </Text>
      </View>

      <View style={Style.bottom}>
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
        title={'Aceitar'}
      />

      <Copyright display={1} />

    </ScrollView>
  )
}


const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    height: 50,
    width: '80%',
    marginTop: 15,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  image: {
    aspectRatio: 1.5
  },
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: 'absolute'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 15
  },
  body: {
    flex: 1
  },
  titleItem: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_SUBTITLE - 2,
    fontWeight: "bold"
  },
  text: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY
  },
  item: {
    marginHorizontal: 30,
    paddingBottom: 15,
  },
  boxTerms: {
    alignItems: "center",
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_BODY
  },
  bottom: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  itemBottom: {
    textDecorationLine: 'underline',
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 12,
    padding: 5,
    margin: -5,
  }
})