import React from "react";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import Logo from "../../../assets/logoWW.png";
import { useAuth } from "../../contexts/auth";

const HeaderPlanScreen = ({ navigation }) => {
  const { user } = useAuth();

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
          <View style={{ marginRight: 5 }}>
            <Text style={styles.check}>Confira nossos Planos</Text>
            <Text style={styles.yourTravel}>Sua viagem dos sonhos está aqui.</Text>
          </View>
          <Image style={styles.audit} source={{ uri: user.images.audit }} />
        </View>

        <View style={styles.separator} />

        <View style={[styles.content, styles.right]}>
          <Image style={styles.medal} source={{ uri: user.images.medal }} />
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
    paddingBottom: Platform.OS === "ios" ? 30 : 25,
  },
  right: {
    paddingVertical: 2,
    paddingRight: 8,
  },
  check: {
    color: "white",
    fontSize: 16,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  yourTravel: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#e1e1e1",
    fontSize: 11,
    bottom: 2,
  },
  benefits: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 12,
  },
  subscribers: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 12,
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
  audit: {
    marginLeft: -2,
    width: 36,
    height: 36,
  },
  medal: {
    aspectRatio: 0.9,
    width: undefined,
    height: 22,
  },
});

export default HeaderPlanScreen;
