import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CurrentHide = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plano contrato em 20/08/2021:</Text>
      <LinearGradient
        start={[1, 0.5]}
        colors={[data?.plan?.colors[1], data?.plan?.colors[0]]}
        style={styles.content}>
        <View style={styles.icon}></View>
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
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fcc509",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 4,
  },
  icon: {
    backgroundColor: "rgba(232,188,13,1)",
    height: 45,
    width: 45,
    marginHorizontal: 20,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hide: {
    fontSize: 22,
    color: "white",
  },
  valueBold: {
    fontSize: 14,
    color: "white",
    top: -3,
  },
  value: {
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
    fontWeight: "bold",
  },
  discount: {
    fontWeight: "normal",
    color: "white",
  },
});

export default CurrentHide;
