import React, { useEffect } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import { BLUE_COLOR } from "../../utils/variables";
import BodyPlanScreen from "./BodyPlanScreen";
import HeaderPlanScreen from "./HeaderPlanScreen";

const PlanScreen = ({ navigation, route }) => {
  const { item } = route.params;

  useEffect(() => {
    logScreen(ScreenView.PlanScreen);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderPlanScreen navigation={navigation} />

      <View style={styles.containerPackage}>
        <Image style={styles.image} source={{ uri: item.img }} />
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: BLUE_COLOR,
                fontSize: 16,
                flex: 1,
              }}>
              {item?.subname}
            </Text>
            {item?.number_days && <Text style={styles.pipe}>│</Text>}
            {item?.number_days && (
              <Text
                style={{
                  color: BLUE_COLOR,
                  fontSize: 16,
                  textAlign: "center",
                }}>
                {item?.number_days}
              </Text>
            )}
          </View>
        </View>
      </View>

      <BodyPlanScreen item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pipe: {
    color: BLUE_COLOR,
    marginHorizontal: Platform.OS === "ios" ? 7 : undefined,
  },
  containerPackage: {
    backgroundColor: "white",
    top: -40,
    marginBottom: -90,
    zIndex: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
});

export default PlanScreen;
