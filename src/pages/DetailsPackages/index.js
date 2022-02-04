import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, ActivityIndicator, View } from "react-native";
import ShareModal from "../../components/ShareModal";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";
import BodyDetailsPackages from "./BodyDetailsPackages";
import HeaderDetailsPackages from "./HeaderDetailsPackages";

const DetailsPackages = ({ route, navigation }) => {
  const { user } = useAuth();
  const { id } = route.params;

  const [isVisible, setVisible] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    api
      .get(`/pacote-viagem/${id}/get`)
      .then(({ data }) => {
        setTimeout(() => {
          setItem(data);
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
      <ShareModal onClose={() => setVisible(!isVisible)} isVisible={isVisible} />
      <HeaderDetailsPackages
        shareOpen={() => setVisible(!isVisible)}
        navigation={navigation}
        item={item}
        plan={user.plan}
      />
      <BodyDetailsPackages item={item} />
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

export default DetailsPackages;
