import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomIcon from "../../components/CustomIcon";

export default ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        // color={"#222"}
        color={"white"}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      />

      {/* <Image source={{ uri: data?.data?.background }} style={styles.image} /> */}
      <Image
        resizeMode={"cover"}
        source={{
          uri: "https://images-store.us-southeast-1.linodeobjects.com/Foto-Capa---Plano-Copa-2026-01.png",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    aspectRatio: 1.5,
    width: "100%",
    height: undefined,
    marginBottom: 5,
    marginTop: 35,
  },
  icon: {
    left: 5,
    top: 28,
    padding: 10,
    zIndex: 999,
    position: "absolute",
  },
});
