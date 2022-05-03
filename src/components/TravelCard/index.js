import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, LIGHT_BLUE } from "../../utils/variables";
import { FontAwesome } from "@expo/vector-icons";

const TravelCard = ({ display = 0, display_footer = 0, data }) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: display === 0 || display === 3 ? 15 : 0,
        },
      ]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: data?.img,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={[styles.subTitle, { color: display === 0 ? "#777" : BLUE_COLOR }]}>
            {
              data?.phrase_effect 
              ? `${data?.number_days?.replace(' dias', '')} dias | ${data?.phrase_effect}`
              : data?.regime 
              ? `${data?.number_days?.replace(' dias', '')} dias | ${data?.regime}`
              : `${data?.number_days?.replace(' dias', '')} dias`
            }
          </Text>
          <View style={styles.borderBottom} />
          {data?.phrase_amount && <Text style={styles.infosPackage}>{data?.phrase_amount}</Text>}

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
              <Text style={styles.oldValue}>R$ {data?.price}</Text>
              <Text style={styles.ball}> ● </Text>
              <Text style={styles.newValue}>R$ {data?.price_discount}</Text>
            </View>
          )}
        </View>
      </View>
      
      {display === 3 && (
        <View style={styles.detailsPackage}>
          {data?.flight && <Text style={styles.infosPackage}><FontAwesome name='plane' size={15} /> Aéreo </Text>}
          {data?.hotel_name && <Text style={styles.infosPackage}><FontAwesome name='hotel' size={15} /> Hotel </Text>}
          {data?.service_description && <Text style={styles.infosPackage}><FontAwesome name='bus' size={15} /> Serviço </Text>}
        </View>
      )}
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
    
  },
  innerContainer: {
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
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 14.5,
  },
  oldValue: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#777",
    textDecorationLine: "line-through",
    fontSize: 14.5,
  },
  economicText: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 10.5,
  },
  discountText: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 10,
  },
  separator: {
    height: 2,
    top: 0.5,
    backgroundColor: "rgba(255,255,255,.2)",
  },
  economic: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: LIGHT_BLUE,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  details: {
    flexDirection: "row",
    paddingTop: 5,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 15,
    color: "#555",
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13,
    top: -2,
  },
  borderBottom: {
    backgroundColor: "#d1d1d1",
    height: 2,
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  detailsPackage: {
    flex: 1,
    width: "100%",
    marginTop: 15,
    paddingLeft: 20,
  },
  infosPackage: {
    fontFamily: FONT_DEFAULT_STYLE,
    marginTop: 5
  }
});

export default TravelCard;
