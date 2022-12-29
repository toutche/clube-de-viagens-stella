import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import SlidesDashboard from "./SlidesDashboard";
import ButtonsChoice from "./ButtonsChoice";
import api from "../../services/api";
import { useFilter } from "../../contexts/filter";
import * as Notifications from 'expo-notifications';

const HeaderDashboard = ({ navigation, option, setOption }) => {
  const { clearAll, setOrderPrice, readAlerts  } = useFilter();

  const [filter, setFilter] = useState([]);
  const [numberNotifications, setNumberNotifications] = useState(0);
  const [recievedNotifications, setRecievedNotifications] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/usuario/alerts/unread").then(({ data }) => {
      setNumberNotifications(data.notifications);
    });

    let array = [];
    Notifications.addNotificationReceivedListener(notification => {
      array.push(notification);
      setNumberNotifications(numberNotifications + array.length);
    });

    api.get("/interesses/show-filtrar").then(res => {
      setFilter(res.data);
    });

    api.get("/interesses/listar").then(res => {
      setData(res.data);
    });
  }, []);

  function handlePlanoCopa() {
    navigation.navigate("MyPlan");
  }

  const handlePress = value => {
    clearAll();
    option === 0 && setOrderPrice("desc");
    setOption(value);
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.profile}>
        <CustomIcon
          size={22}
          onPress={() => navigation.navigate('MenuScreen')}
          type={SimpleLineIcons}
          name={"menu"}
          containerStyle={styles.iconLeft}
        />

        <ProfileAvatar isShow source={"dashboard"} />
      
        <View style={{
          position: 'absolute',
          width: 50,
          height: 50,
          right: 0,
        }}>
          <CustomIcon
            size={26}
            onPress={() => navigation.navigate("Alert")}
            type={Ionicons}
            name={"notifications-outline"}
            containerStyle={styles.iconRight}
          />
          {
            numberNotifications !== 0 &&
            <Text style={{
              position: 'absolute',
              color: '#606060',
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#Ffc5c5',
              borderRadius: 100,
              width: 15,
              top: 3,
              right: 12,
            }}>{ numberNotifications }</Text>
          }
        </View>
        
      </View>

      <SlidesDashboard {...{ filter, data, option }} />

      <TouchableOpacity
        onPress={handlePlanoCopa}
        style={{
          alignSelf: "center",
          backgroundColor: "blue",
          height: 110,
          width: 420,
        }}>
        {/* <Image source={Gif} /> */}
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://images-store.us-southeast-1.linodeobjects.com/gif-copa-banner-2.gif",
          }}
        />

        {/* <Text style={styles.title}>
          {option === 0 ? "Conquiste as suas férias dos sonhos" : "Hospedagens em locais incríveis"}
        </Text>
        <Text style={styles.subTitle}>
          {option === 0 ? "Pacotes com preços exclusivos" : "com preços exclusivos"}
        </Text> */}
      </TouchableOpacity>

      {/* <Text style={styles.title}>
        {option === 0 ? "Conquiste as suas férias dos sonhos" : "Hospedagens em locais incríveis"}
      </Text>
      <Text style={styles.subTitle}>
        {option === 0 ? "Pacotes com preços exclusivos" : "com preços exclusivos"}
      </Text> */}

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
