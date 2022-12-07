import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

import { useAuth } from "../../contexts/auth";

import Icon from "../../../assets/img/Aviao_Branco.png";

export default ({ data = [], navigation }) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {/* {data?.data?.benefits.map((i, k) => {
        return (
          <View style={styles.content} key={k}>
            <View style={styles.containerImage}>
              <Image source={{ uri: i.icon }} style={styles.image} />
            </View>
            <Text style={styles.text}>{i.description}</Text>
          </View>
        );
      })} */}
      <View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Eaí, bora com o Clube?</Text>
        </Text>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.bold}>Garanta agora</Text> o seu lugar na{" "}
            <Text style={styles.bold}>Copa 2026</Text>.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.bold}>Prioridade de compra</Text> nos pacotes da Copa 2026.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.bold}>11% de desconto </Text>na compra de qualquer pacote e hotéis.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            Atendimento <Text style={styles.bold}>exclusivo e personalizado.</Text>
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.bold}>Todos os benefícios</Text> do Clube de Férias.
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={Icon} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.bold}>
              Sem carência, sem fidelidade e sem comprometer o limite do cartão.
            </Text>
          </Text>
        </View>

        <Text style={styles.text}>
          Com o <Text style={styles.bold}>Clube de Férias</Text> é assim: você{" "}
          <Text style={styles.bold}>ON em todas as Copas!</Text>
        </Text>
      </View>

      <CustomButton
        onPress={() =>
          //   user.plan ? navigation.navigate("Dashboard") : navigation.navigate("MyPlan")
          navigation.navigate("MyPlan")
        }
        containerStyle={styles.button}
        titleStyle={styles.textButton}
        title={user.plan ? "ASSINE AGORA" : "FAÇA PARTE DO CLUBE"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 50,
    marginTop: 8,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 14.5,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 20,
  },
  containerImage: {
    // width: 70,
    // height: 70,
    // backgroundColor: "#d50615",
    // elevation: 3,
    // borderRadius: 100,
    // padding: 12,
  },
  image: {
    // flex: 1,
    // marginBottom: 10,
    width: 25,
    height: 25,
    backgroundColor: PRIMARY_COLOR,
    // borderRadius: 999,
  },
  text: {
    flex: 1,
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 15,
    color: "#FFF",
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
