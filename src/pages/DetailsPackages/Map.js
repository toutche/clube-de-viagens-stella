import React, { useEffect, useState } from "react";
import { StyleSheet, Text, BackHandler, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Clipboard from "expo-clipboard";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import { useFilter } from "../../contexts/filter";
import { consts } from "../../utils/consts";
import { CustomDropdown } from "../../components/CustomDropDown";
import { Fontisto, Entypo, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import ClipboardToast from "react-native-clipboard-toast";

const Map = ({ address, region, name, navigation }) => {
  const [location, setLocation] = useState([]);
  const [dataLocation, setDataLocation] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [status, setStatus] = useState("granted");
  const { autoScroll, setAutoScroll } = useFilter();
  const [currentIndex, setCurrentIndex] = useState(false);

  async function getLocation() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${consts.google_key}`,
    );
    const data = await response.json();
    setDataLocation(data?.results[0]?.formatted_address);
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const backAction = () => {
      setAutoScroll(false);
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString(dataLocation ? dataLocation : name);
  };

  return (
    <View>
      <CustomDropdown
        onPress={() => setCurrentIndex(currentIndex ? false : true)}
        currentIndex={currentIndex}
        title={"Localização"}
        type={MaterialCommunityIcons}
        icon={"map-marker-distance"}>
        {
          <View style={{ padding: 15 }}>
            <View>
              <Text style={{ fontWeight: "bold", size: 20 }}>Endereço</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesome style={{ marginRight: 10 }} name='map-marker' size={24} color='red' />
                <View>
                  <ClipboardToast
                    textToShow={dataLocation ? dataLocation : name}
                    textToCopy={"Regular Text"}
                    toastText={"Endereço copiado!"}
                    id={"resular"}
                    containerStyle={styles.subTitle}
                    textStyle={[styles.subTitle]}
                    accessibilityLabel={"click me to copy"}
                    toastOnShow={copyToClipboard}
                  />
                  {/* {dataLocation ? dataLocation : name} */}
                </View>
              </View>
            </View>
            <MapView region={region} style={styles.map}>
              <Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
              />
            </MapView>
          </View>
        }
      </CustomDropdown>
    </View>
  );
};

const styles = StyleSheet.create({
  button_address: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  button_text_address: {
    color: BLUE_COLOR,
    marginRight: 4,
  },

  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 13,
    marginRight: 5,
    // width: "100%",
  },
  map: {
    marginTop: 10,
    width: "100%",
    height: 300,
  },
  clipboardToastContainer: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  clipboardText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Map;
