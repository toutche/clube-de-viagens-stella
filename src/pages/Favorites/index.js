import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ShareModal from "../../components/ShareModal";
import BodyFavorites from "./BodyFavorites";
import HeaderFavorites from "./HeaderFavorites";

const Favorites = ({ navigation }) => {
  const [option, setOption] = useState(0);
  const [isVisibleShare, setVisibleShare] = useState(false);

  return (
    <View style={styles.container}>
      <ShareModal onClose={() => setVisibleShare(!isVisibleShare)} isVisible={isVisibleShare} />
      <HeaderFavorites
        option={option}
        setOption={value => setOption(value)}
        navigation={navigation}
      />
      <BodyFavorites
        shareOpen={() => setVisibleShare(!isVisibleShare)}
        navigation={navigation}
        display={option}
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
