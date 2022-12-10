import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import * as Location from 'expo-location';
import { Entypo, Feather } from '@expo/vector-icons'; 
import { useFilter } from "../../contexts/filter";
import { BackHandler } from "react-native";
import ClipboardToast from 'react-native-clipboard-toast';

const Map = ({ address, region, name, navigation }) => {
  const [location, setLocation] = useState([]);
  const [isEnable, setIsEnable] = useState(false);
  const [status, setStatus] = useState('granted');
  const { autoScroll, setAutoScroll } = useFilter();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setStatus(status)
      if (status !== 'granted') {
        setErrorMsg('Permissão de localização não foi concedida.');
        return;
      }
      let address = await Location.reverseGeocodeAsync(region);
      setLocation(address.length && address[0]);
    })();
  }, []);

  useEffect(() => {
    const backAction = () => {
      setAutoScroll(false);
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  
  const copyToClipboard = () => {
    Clipboard.setString( status !== 'granted' ? name : 
      `${location.country && location.country}
      ${location.region !== null && location.region !== 's/n' && location.region && ', '}
      ${location.region !== null && location.region !== 's/n' && location.region ? location.region : ''}
      ${location.country && ', '}
      ${location.street && location.street}
      ${location.streetNumber !== null && location.streetNumber && location.streetNumber !== 's/n' ? ', ' : ''}
      ${location.streetNumber !== 's/n' && location.streetNumber !== null ? location.streetNumber : ''}
      ${location.subregion && location.subregion !== null ? ', ' : ''}
      ${location.subregion !== null ? location.subregion : ''}`
    );
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
        <View style={{ flex: 1, height: 50, justifyContent: 'center' }}>
          <Text style={styles.title}>Endereço</Text>
          <Text>
            <View style={{ flexDirection: 'row', width: 200 }}>
              <ClipboardToast
                textToShow={status !== 'granted' ? name : (
                  `${location.country && location.country}
                  ${location.region !== null && location.region !== 's/n' && location.region && ', '}
                  ${location.region !== null && location.region !== 's/n' && location.region ? location.region : ''}
                  ${location.country && ', '}
                  ${location.street && location.street}
                  ${location.streetNumber !== null && location.streetNumber && location.streetNumber !== 's/n' ? ', ' : ''}
                  ${location.streetNumber !== 's/n' && location.streetNumber !== null ? location.streetNumber : ''}
                  ${location.subregion && location.subregion !== null ? ', ' : ''}
                  ${location.subregion !== null ? location.subregion : ''}`
                  )}
                textToCopy={'Regular Text'}
                toastText={'Endereço copiado!'}
                id={'resular'}
                containerStyle={styles.subTitle}
                textStyle={[styles.subTitle]}
                accessibilityLabel={'click me to copy'}
                toastOnShow={copyToClipboard}
              />
              <Feather name="copy" size={18} color="blue" onPress={copyToClipboard} />
            </View>
          </Text>
        </View>
        <TouchableOpacity
        onPress={() => {
          setIsEnable(!isEnable)
          setAutoScroll(!autoScroll);
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: 50,
        }}>
          {
            isEnable ?
            // <FontAwesome5 name="smile" size={32} color="black" />
            <Entypo name="arrow-with-circle-up" size={32} color="black" />
            :
            <Entypo name="arrow-with-circle-down" size={32} color="rgba(0, 0, 0, 0.5)" />
            // <Entypo name="emoji-sad" size={32} color="black" />
          }
        </TouchableOpacity>
      </View>

      {
        isEnable &&
        <MapView
        region={region}
        style={styles.map}>
          <Marker coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }} />
        </MapView>  
      }
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
    marginRight: 5,
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
  clipboardToastContainer: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  clipboardText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Map;
