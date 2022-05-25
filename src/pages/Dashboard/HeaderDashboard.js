import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import SlidesDashboard from "./SlidesDashboard";
import ButtonsChoice from "./ButtonsChoice";
import api from "../../services/api";
import { useFilter } from "../../contexts/filter";

const HeaderDashboard = ({ navigation, option, setOption, menuOpen }) => {
  const { clearAll, setOrderPrice } = useFilter()

  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/interesses/show-filtrar").then(res => {
      setFilter(res.data);
    });

    api.get("/interesses/listar").then(res => {
      setData(res.data);
    });
  }, []);

  const handlePress = (value) => {
    clearAll()
    option === 0 && setOrderPrice('desc')
    setOption(value)
  }

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.profile}>
        <CustomIcon
          size={22}
          onPress={menuOpen}
          type={SimpleLineIcons}
          name={"menu"}
          containerStyle={styles.iconLeft}
        />

        <CustomIcon
          size={26}
          onPress={() => navigation.navigate("Alert")}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        />

        <ProfileAvatar isShow source={'dashboard'} />
      </View>

      <SlidesDashboard {...{ filter, data, option }} />

      <Text style={styles.title}>
        {option === 0 ? "Conquiste as suas férias dos sonhos" : "Hospedagens em locais incríveis"}
      </Text>
      <Text style={styles.subTitle}>
        {option === 0 ? "Pacotes com preços exclusivos" : "com preços exclusivos"}
      </Text>

      <ButtonsChoice value={option} onPress={handlePress} />
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

export default HeaderDashboard;
