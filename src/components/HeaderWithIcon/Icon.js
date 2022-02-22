import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Icon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    backgroundColor: "#d90716",
    elevation: 5,
    borderRadius: 100,
    padding: 12,
  },
  image: {
    flex: 1,
    borderRadius: 100,
  },
});

export default Icon;
