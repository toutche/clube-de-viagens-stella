import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import CustomStatusBar from "../../components/CustomStatusBar";
import { PRIMARY_COLOR } from "../../utils/variables";
import SlidesDashboard from "./SlidesDashboard";
import ButtonsChoice from "./ButtonsChoice";
import api from "../../services/api";

const HeaderDashboard = ({ navigation, option, setOption, menuOpen }) => {
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
          onPress={() => navigation.navigate("Wallet")}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        />

        <ProfileAvatar isShow />
      </View>

      <SlidesDashboard filter={filter} data={data} />

      <Text style={styles.title}>
        {option === 0 ? "Conquiste as suas férias dos sonhos" : "Hospedagens em locais incríveis"}
      </Text>
      <Text style={styles.subTitle}>
        {option === 0 ? "Pacotes com preços exclusivos" : "com preços exclusivos"}
      </Text>

      <ButtonsChoice value={option} onPress={value => setOption(value)} />
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
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    fontSize: 12.5,
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
});

export default HeaderDashboard;
