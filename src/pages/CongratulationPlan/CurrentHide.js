import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE } from "../../utils/variables";

const CurrentHide = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plano contrato em 20/08/2021:</Text>
      <LinearGradient
        start={[1, 0.5]}
        colors={[data?.plan?.colors[1], data?.plan?.colors[0]]}
        style={styles.content}>
        <View style={[styles.stamp, { backgroundColor: data?.plan.colors[2] }]}>
          <View
            style={{
              backgroundColor: data?.plan.colors[3],
              width: "70%",
              height: "70%",
              borderRadius: 999,
            }}
          />
        </View>
        <View>
          <Text style={styles.hide}>{data?.plan?.name}</Text>
          <Text style={styles.valueBold}>
            {data?.plan?.price}
            <Text style={styles.value}> {data?.plan?.frequency}</Text>
          </Text>
          <View style={styles.containerDiscount}>
            <Text style={styles.discountBold}>
              {data?.plan?.discount}
              <Text style={styles.discount}> {data?.plan?.discount_text}</Text>
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 4,
  },
  stamp: {
    marginLeft: 20,
    marginRight: 24,
    height: 45,
    width: 45,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  hide: {
    fontSize: 22,
    color: "white",
    fontFamily: FONT_DEFAULT_STYLE,
  },
  valueBold: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 14,
    color: "white",
    top: -3,
  },
  value: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "rgba(255,255,255,.8)",
  },
  containerDiscount: {
    backgroundColor: "#12aaeb",
    borderRadius: 100,
  },
  discountBold: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: "white",
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  discount: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
  },
});

export default CurrentHide;
