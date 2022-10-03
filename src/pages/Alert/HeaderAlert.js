import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { PRIMARY_COLOR, FONT_DEFAULT_BOLD_STYLE } from "../../utils/variables";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import Logo from "../../../assets/logoWW.png";
import { useFilter } from "../../contexts/filter";
const HeaderAlert = ({ navigation }) => {
  const { isVisibleMenu, setVisibleMenu } = useFilter()
  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.header}>
        <CustomIcon
          size={26}
          onPress={() => {
            navigation.goBack()
            setVisibleMenu(!isVisibleMenu)
          }}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={styles.iconLeft}
        />

        <Image style={styles.logo} source={Logo} />

        {/* <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        /> */}

        <Text style={styles.title}>Alertas</Text>
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
    width: 80,
    height: 80,
    alignSelf: "center",
    aspectRatio: 4 / 2,
    marginBottom: 8,
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
  title: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});

export default HeaderAlert;
