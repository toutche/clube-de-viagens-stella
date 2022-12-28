import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useEffect } from "react";
import { BackHandler, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import InfoHotel from "../../components/InfoHotel";
import Travel from "../../components/Travel";
import TravelCard from "../../components/TravelCard";
import { BLUE_COLOR, FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE } from "../../utils/variables";
import { useAuth } from "../../contexts/auth";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

const CongratulationPackage = ({ route, navigation }) => {
  const data = route.params;
  const { user } = useAuth();

  useEffect(() => {
     logScreen(ScreenView.CongratulationPackage);
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => backHandler.remove();
  }, []);

  const handleBackButton = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Dashboard",
        },
      ],
    });
    return true;
  };

  return (
    <ScrollView bounce={false} style={styles.container}>
      <Image source={require("../../../assets/header/confirmacao-compra.jpg")} style={styles.image} />

      <View style={styles.body}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>{data.message_bold} </Text>
          {data.message}
        </Text>

        <Text style={styles.subTitle}>
          Todos os detalhes foram enviados para o e-mail
          <Text style={styles.subTitleBold}> {user?.email}</Text>
        </Text>

        <Text style={styles.hideText}>Plano Utilizado:</Text>

        {data.plan && (
          <LinearGradient
            start={[1, 0.5]}
            colors={[data.plan.colors[1], data.plan.colors[0]]}
            style={styles.card}>
            <View style={[styles.avatar, { borderColor: data.plan.colors[1] }]}>
              <Image
                style={{ width: 36, height: 36, borderRadius: 999 }}
                source={{
                  uri: user?.image,
                }}
              />
            </View>
            <View>
              <Text style={styles.name}>{data?.plan?.name}</Text>
              <Text style={styles.updated_credit}>
                Saldo atualizado: R${data?.updated_credit}
              </Text>
            </View>
          </LinearGradient>
        )}

        <TravelCard display={2} {...{ data: data.package_infos }} />

        <Travel {...{ data: data.package_infos, display: data.hour_voo ? 0 : 1 }} />

        <InfoHotel display={2} {...{ data: data.package_infos }} />

        <CustomButton
          onPress={
            () => navigation.navigate({name: "MyReservations" }) 
          }
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Ver detalhes desse pacote`}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.05
  },
  content: {},
  card: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    marginTop: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    borderWidth: 1.5,
    borderRadius: 999,
    padding: 2.5,
    marginRight: 12,
  },
  hideText: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    fontSize: 16,
  },
  titleBold: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  subTitle: {
    color: "#777",
    marginVertical: 12,
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
  },
  subTitleBold: {
    color: BLUE_COLOR,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  body: {
    paddingHorizontal: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: BLUE_COLOR,
    borderRadius: 100,
    marginVertical: 15,
    height: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  name: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 20,
    color: "white",
  },
  updated_credit: {
    color: "white",
    opacity: 0.9,
    fontFamily: FONT_DEFAULT_STYLE,
  },
});

export default CongratulationPackage;
