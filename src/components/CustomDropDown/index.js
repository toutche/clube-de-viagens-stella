import { useState, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PRIMARY_COLOR } from "../../utils/variables";

import { Fontisto, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomIcon from "../CustomIcon";

export function CustomDropdown({ icon, type, title, onPress, children, currentIndex }) {
  //   const Icon = type || null;

  return (
    <View style={styles.details}>
      <View style={styles.cardContainer} activeOpacity={30}>
        <TouchableOpacity onPress={onPress} style={styles.headerCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomIcon
              type={MaterialCommunityIcons}
              name={icon}
              size={24}
              color={"black"}
              containerStyle={{ marginRight: 10 }}
            />

            {/* 
            <Fontisto name={"map"} size={24} color='black' style={{ marginRight: 10 }} /> */}
            <Text>{title}</Text>
          </View>
          <Entypo
            name={currentIndex ? "chevron-up" : "chevron-down"}
            size={30}
            color={"##d1d1d1"}
          />
        </TouchableOpacity>
        <View style={styles.card}>{currentIndex && <>{children}</>}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    width: "95%",
    alignSelf: "center",
    paddingBottom: 15,
  },
  cardContainer: { flexGrow: 1, borderWidth: 1, borderRadius: 10, borderColor: "#d1d1d1" },
  headerCard: {
    height: 70,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
  },
});
