import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, ActivityIndicator, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import Body from "./Body";
import Header from "./Header";
import axios from "axios";
import { consts } from "../../utils/consts";

export default ({ route, navigation }) => {
  const { user } = useAuth();
  const { id } = route.params;

  const [item, setItem] = useState([]);

  const getLatLog = data => {
    const hotel = data.hotel;
    let region = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };

    if (hotel && hotel.latitude && hotel.longitude) {
      region = {
        ...region,
        latitude: parseFloat(hotel.latitude),
        longitude: parseFloat(hotel.longitude),
      };
    } else {
      axios
        .get(
          `https://maps.google.com/maps/api/geocode/json?address=${data.address}&key=${consts.google_key}`,
        )
        .then(res => {
          let loc = res.data.results[0].geometry.location;
          region = {
            ...region,
            latitude: parseFloat(loc.lat),
            longitude: parseFloat(loc.lng),
          };
        })
        .catch(err => console.log(err));
    }

    data = {
      ...data,
      region,
    };

    return data;
  };

  useEffect(() => {
    api
      .get(`/pacote-viagem/${id}/get`)
      .then(({ data }) => {
        setTimeout(() => {
          setItem(getLatLog(data));
        }, 100);
      })
      .catch(e => console.log(e));
  }, []);

  if (item.length === 0)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
      </View>
    );

  return (
    <ScrollView bounces={false} style={styles.container}>
      <Header navigation={navigation} item={item} plan={user.plan} />
      <Body item={item} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
