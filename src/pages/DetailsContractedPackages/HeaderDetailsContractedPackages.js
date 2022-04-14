import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import Hide from "../../components/Hide";
import FavoriteIcon from "../../components/FavoriteIcon";
import ShareIcon from "../../components/ShareIcon";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import api from "../../services/api"

const HeaderDetailsContractedPackages = ({ item, navigation, shareOpen }) => {
  
  const [gallery, setGallery] = useState([])
  
  useEffect(() => {
    (async () => {
      await api.get(`/pacote-viagem/${item.id}/get`).then( res => {
        setGallery(res.data.gallery)
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      
      <Carousel data={gallery} />
      
      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      />

      <Hide containerStyle={styles.hide} />

      <FavoriteIcon containerStyle={styles.like} />

      <ShareIcon shareOpen={shareOpen} containerStyle={styles.share} />

      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: "absolute",
  },
  hide: {
    position: "absolute",
    top: 40,
    right: 15,
    backgroundColor: "rgba(232,188,13,.7)",
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 95,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  share: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 150,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.2,
  },
});

export default HeaderDetailsContractedPackages;
