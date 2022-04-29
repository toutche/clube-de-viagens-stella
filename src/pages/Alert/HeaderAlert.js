import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { PRIMARY_COLOR } from "../../utils/variables";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import Logo from "../../../assets/logoWW.png";
const HeaderAlert = ({ navigation }) => {
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

        <Image style={styles.logo} source={Logo} />

        <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  header: {
    padding: 30,
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
  },
  iconLeft: {
    padding: 10,
    left: 5,
    position: "absolute",
  },
  iconRight: {
    padding: 10,
    right: 5,
    position: "absolute",
  },
});

export default HeaderAlert;
