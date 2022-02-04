import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import { PRIMARY_COLOR } from "../../utils/variables";
import Logo from "../../../assets/logoWW.png";

const HeaderPlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.header}>
        <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={styles.iconLeft}
        />

        <Image resizeMethod='resize' resizeMode='contain' style={styles.logo} source={Logo} />
      </View>

      <View
        style={[
          styles.content,
          {
            paddingBottom: 20,
            justifyContent: "center",
            paddingHorizontal: 10,
            width: "100%",
          },
        ]}>
        <View style={styles.content}>
          <View style={{ marginRight: 6 }}>
            <Text style={styles.compare}>Compare nossos Planos</Text>
            <Text style={styles.yourTravel}>Sua viagem dos sonhos está aqui.</Text>
          </View>
          <Image style={styles.auditoria} source={Logo} />
        </View>

        <View style={styles.separator} />

        <View style={[styles.content, styles.right]}>
          <Image style={styles.auditoria} source={Logo} />
          <View style={{ marginLeft: 6 }}>
            <Text style={styles.benefits}>Vantagens</Text>
            <Text style={styles.subscribers}>dos assinantes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    paddingBottom: 35,
  },
  right: {
    backgroundColor: "#ef091a",
    borderWidth: 1,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: "rgba(0,0,0,0.00001)",
    paddingVertical: 2,
    paddingLeft: 10,
    paddingRight: 8,
  },
  compare: {
    color: "white",
    fontSize: 16,
  },
  yourTravel: {
    color: "#d1d1d1",
    fontSize: 12.5,
  },
  benefits: {
    color: "white",
    fontSize: 12.5,
  },
  subscribers: {
    color: "white",
    fontSize: 12.5,
  },
  header: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    marginHorizontal: 8,
  },
  iconLeft: {
    padding: 10,
    left: 5,
    position: "absolute",
  },
  logo: {
    width: 140,
    height: 140,
    marginVertical: -30,
  },
  auditoria: {
    width: 25,
    height: 25,
  },
});

export default HeaderPlanScreen;
