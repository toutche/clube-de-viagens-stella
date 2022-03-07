import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import api from "../../services/api";
import Card from "./Card";

const renderIfHavePlan = ({ current_plan, plans = [] }) => (
  <>
    <Card plan={current_plan} isPlan />
    {plans.length !== 0 ? (
      <>
        <Text style={[styles.title, { marginTop: 12, fontSize: 17 }]}>Conquiste mais sonhos</Text>

        {plans.map((i, k) => (
          <View key={k}>
            <Card plan={i} />
            <View style={styles.separator} />
          </View>
        ))}
      </>
    ) : null}
  </>
);

const renderIfDontHavePlan = ({ plans = [] }) => (
  <View>
    {plans.map((i, k) => (
      <View key={k}>
        <Card plan={i} />
        <View style={styles.separator} />
      </View>
    ))}
    <Text style={{ color: "#555", fontSize: 14, opacity: 0.8, fontFamily: FONT_DEFAULT_STYLE }}>
      *Para conquistar seu desconto exclusivo você deverá estar adimplente no plano escolhido.
    </Text>
    <Text
      style={{
        color: "#555",
        textAlignVertical: "center",
        fontSize: 12,
        paddingBottom: 20,
        paddingTop: 5,
      }}>
      Ao contratar, você concordar com os{" "}
      <Text
        onPress={() => alert("ok")}
        style={{ textDecorationLine: "underline", fontFamily: FONT_DEFAULT_STYLE }}>
        termos e condições de uso
      </Text>
    </Text>
  </View>
);

const BodyPlanScreen = ({ item }) => {
  const [isPlan, setPlan] = useState(null);

  useEffect(() => {
    api
      .post(`/plano/current/hotel-package`, { package_id: item.id })
      .then(res => {
        setPlan(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.containerScroll}>
      {isPlan === null ? null : (
        <>
          <Text style={styles.title}>
            {isPlan?.current_plan
              ? "Plano atual"
              : "Escolha o melhor plano e faça parte do Clube :)"}
          </Text>

          {isPlan?.current_plan ? renderIfHavePlan(isPlan) : renderIfDontHavePlan(isPlan)}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  separator: {
    height: 20,
  },
  containerScroll: {
    paddingHorizontal: "5%",
    backgroundColor: "#e6e6e6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
    paddingTop: 50,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    color: "#555",
    marginTop: 12,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default BodyPlanScreen;
