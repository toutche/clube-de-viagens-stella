import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const Map = ({ location, address }) => {
  const copyToClipboard = () => {
    Clipboard.setString(address);
  };

  return (
    <View>
      <Text style={styles.text}>Localização</Text>

      <View style={styles.button}>
        <MaterialCommunityIcons
          style={styles.icon}
          name='map-marker-radius-outline'
          size={36}
          color='#287dfd'
        />
        <View>
          <Text style={styles.title}>Endereço</Text>
          <Text style={styles.subTitle}>{address}</Text>
        </View>
      </View>

      <CustomButton titleStyle={styles.text} title={"Copiar Endereço"} onPress={copyToClipboard} />

      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: "#555",
    fontSize: 17,
  },
  subTitle: {
    color: "#287dfd",
    fontSize: 13,
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 300,
    borderRadius: 50,
  },
  text: {
    color: "#287dfd",
    fontSize: 15,
    marginLeft: 25,
  },
});

export default Map;
