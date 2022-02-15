import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { BLUE_COLOR, LIGHT_BLUE } from "../../utils/variables";

const TravelCard = ({ display = 0, data }) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: display === 0 ? 15 : 5,
        },
      ]}>
      <Image
        source={{
          uri: data?.img,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={[styles.subTitle, { color: display === 0 ? "#777" : BLUE_COLOR }]}>
          {`${data?.number_days} dias | ${data?.phrase_effect}`}
        </Text>
        <View style={styles.borderBottom} />

        {display === 1 && (
          <View style={styles.details}>
            <View>
              <Text style={styles.oldValue}>R$ {data?.price}</Text>
              <Text style={styles.newValue}>R$ {data?.price_discount}</Text>
            </View>
            <View style={styles.economic}>
              <View style={styles.arrow} />
              <Text style={styles.economicText}>Economize R$ {data?.price_difference}</Text>
              <View style={styles.separator} />
              <Text style={styles.discountText}>{data?.percentual_plan}</Text>
            </View>
          </View>
        )}

        {display === 2 && (
          <View style={styles.details}>
            <Text style={styles.oldValue}>R$ 17.999,00</Text>
            <Text style={styles.ball}> ● </Text>
            <Text style={styles.newValue}>R$ 15.999,00</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    padding: 12,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    flexDirection: "row",
  },
  ball: {
    textAlignVertical: "center",
    fontSize: 10,
    color: BLUE_COLOR,
  },
  arrow: {
    position: "absolute",
    left: -1.5,
    width: 20,
    height: 20,
    backgroundColor: LIGHT_BLUE,
    borderRadius: 2.5,
    transform: [{ rotate: "45deg" }],
  },
  newValue: {
    color: BLUE_COLOR,
    fontSize: 14.5,
  },
  oldValue: {
    color: "#777",
    textDecorationLine: "line-through",
    fontSize: 14.5,
  },
  economicText: {
    color: "white",
    fontSize: 12,
  },
  discountText: {
    color: "white",
    fontSize: 10,
  },
  separator: {
    height: 2,
    top: 0.5,
    backgroundColor: "rgba(255,255,255,.2)",
  },
  economic: {
    justifyContent: "center",
    backgroundColor: LIGHT_BLUE,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  details: {
    flexDirection: "row",
    paddingTop: 5,
  },
  title: {
    fontSize: 15,
    color: "#555",
  },
  subTitle: {
    fontSize: 13,
    top: -2,
  },
  borderBottom: {
    backgroundColor: "#d1d1d1",
    height: 2,
  },
  content: {
    marginLeft: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

export default TravelCard;
