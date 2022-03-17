import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import QuantifyTravel from "../QuantifyTravel";
import { useAuth } from "../../contexts/auth";

const InfoHotel = ({ display = 0, data }) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user.images.checkout.hotel }}
          style={{ width: 18, height: undefined, aspectRatio: 0.65 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hotel</Text>
          <Text style={styles.subTitle}>{data?.hotel}</Text>
        </View>
      </View>

      {display !== 2 && <View style={styles.separator} />}

      {display === 0 && (
        <View style={styles.one}>
          <AntDesign name='checkcircleo' size={20} color={BLUE_COLOR} />
          <Text style={styles.oneText}>All Inclusive</Text>
        </View>
      )}

      {display === 1 && (
        <View style={styles.two}>
          <QuantifyTravel />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
  },
  two: {},
  one: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },
  oneText: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 12.5,
    marginLeft: 5,
  },
  separator: {
    height: 1.5,
    marginHorizontal: 5,
    backgroundColor: "#d1d1d1",
    marginVertical: 5,
  },
  header: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#555",
    fontSize: 14.5,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 13,
  },
});

export default InfoHotel;
