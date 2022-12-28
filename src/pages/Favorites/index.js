import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";
import BodyFavorites from "./BodyFavorites";
import HeaderFavorites from "./HeaderFavorites";

const Favorites = ({ navigation }) => {
  useEffect(() => {
    logScreen(ScreenView.Favorites);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderFavorites
        option={0}
        navigation={navigation}
      />
      <BodyFavorites
        navigation={navigation}
        display={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
