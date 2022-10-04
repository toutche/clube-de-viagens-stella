import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { useFilter } from "../../contexts/filter";

const HeaderFavorites = ({ navigation, option }) => {
  const { isVisibleMenu, setVisibleMenu } = useFilter()

  const navigationFunc = () => {
    navigation.goBack()
    setVisibleMenu(!isVisibleMenu) 
  }

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.profile}>
        <CustomIcon
          onPress={() => navigationFunc()}
          size={26}
          type={AntDesign}
          name={'arrowleft'}
          containerStyle={styles.iconLeft}
        />

        {/* <CustomIcon
          size={26}
          onPress={() => navigation.navigate("Wallet")}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        /> */}

        <ProfileAvatar isShow />
      </View>

      <Text style={styles.title}>Meus favoritos</Text>
      <Text style={styles.subTitle}>
        {option === 0 ? "Pacotes com preços exclusivos" : "Hospedagens com preços exclusivos"}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  iconLeft: {
    padding: 10,
    position: "absolute",
    left: 5,
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
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 12.5,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
});

export default HeaderFavorites;
