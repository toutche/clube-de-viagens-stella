import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";

const Map = ({ address, region }) => {
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
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Endereço</Text>
          <Text style={styles.subTitle}>{address}</Text>
        </View>
      </View>

      <CustomButton
        type={AntDesign}
        name={'file1'}
        color={BLUE_COLOR}
        size={18}
        titleStyle={styles.button_text_address}
        title={"Copiar Endereço"}
        onPress={copyToClipboard}
        containerStyle={styles.button_address}
      />

      <MapView
        region={region}
        style={styles.map}>
        <Marker coordinate={{
          latitude: region.latitude,
          longitude: region.longitude
        }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 4,
  },
  button_address: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  button_text_address: {
    color: BLUE_COLOR,
    marginRight: 4
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
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#555",
    fontSize: 17,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 13,
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 300,
    borderRadius: 50,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 15,
    marginLeft: 25,
  },
});

export default Map;
