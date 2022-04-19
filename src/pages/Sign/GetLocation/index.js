import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
  BackHandler,
} from "react-native";

import {
  FONT_DEFAULT_STYLE,
  FONT_SIZE_BODY,
  FONT_SIZE_SUBTITLE,
  HEIGHT,
  PRIMARY_COLOR,
  SECOND_COLOR,
  TEXT_COLOR_BKCOLORFUL,
  TEXT_COLOR_BKWHITE,
  WIDTH,
} from "../../../utils/variables";

import Copyright from "../../../components/Copyright";
import Location from "./Location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { AntDesign } from "@expo/vector-icons";
import { consts } from "../../../utils/consts";
import CustomIcon from "../../../components/CustomIcon";
import { logout } from "../../../services/auth";
const titlePage = "Poxa, não achamos o seu endereço :(";
const subtitlePage = "Você pode nos ajudar e indicar o seu endereço?.";
const text = "Sabendo um pouco mais de você, poderemos conectar você com a sua próxima viagem!";

const GetLocation = ({ navigation }) => {
  const googleRef = useRef();

  const [panel, setPanel] = useState(0);
  const [isKeyboard, setIsKeyboard] = useState(false);

  const [address, setAddress] = useState("");
  const [addressArr, setAddressArr] = useState([]);
  const [number, setNumber] = useState("");

  useEffect(() => {
    address && googleRef?.current?.setAddressText(address);
  }, [panel]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    const didShow = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    const didHide = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      backHandler.remove();
      didShow.remove();
      didHide.remove();
    };
  }, []);

  const keyboardDidShow = () => {
    setIsKeyboard(true);
  };

  const keyboardDidHide = () => {
    setIsKeyboard(false);
  };

  const handleBackButton = () => {
    if (navigation.canGoBack())
      navigation.goBack();
    else {
      logout();
      navigation.replace("Sign");
    }
  };

  const formatted_address = (details) => {
    let array = []

    for (let i = 0; i < details.length; i++) {
      array[i] = details[i].short_name;
    }

    return array
  }

  const pressHander = (datas, details) => {
    setPanel(1);
    setAddress(details.formatted_address);
    setAddressArr(formatted_address(details.address_components))
    setNumber("");
    setIsKeyboard(false);
  };

  return (
    <View style={Style.container}>
      {!isKeyboard &&
        <>
          <Image source={require("../../../../assets/header/Location.jpg")} style={Style.image} />

          <CustomIcon
            size={26}
            onPress={handleBackButton}
            color={"#222"}
            type={AntDesign}
            name={"arrowleft"}
            containerStyle={Style.icon}
          />
        </>
      }

      <View style={Style.body}>
        {!isKeyboard ?
          panel ?
            <Text style={Style.title}>Complete o seu endereço</Text>
            :
            <>
              <Text style={Style.title}>{titlePage}</Text>

              <Text style={Style.subtitle}>{subtitlePage}</Text>

              <Text style={Style.subtitle}>{text}</Text>
            </>
          : null}

        {panel ?
          <Location
            isKeyboard={isKeyboard}
            address={address}
            addressArr={addressArr}
            numberAddress={number}
            onChange={text => setAddress(text)}
            changePanel={index => setPanel(index)}
            onChangeKeyboard={onChange => setIsKeyboard(onChange)}
            navigation={navigation}
          />
          :
          <GooglePlacesAutocomplete
            ref={googleRef}
            placeholder='Digite o seu endereço'
            enablePoweredByContainer={false}
            minLength={1}
            returnKeyType='search'
            listViewDisplayed='auto'
            fetchDetails
            renderLeftButton={() => <AntDesign size={22} color={PRIMARY_COLOR} name={"search1"} />}
            renderDescription={row => row.description}
            onPress={pressHander}
            query={{
              key: consts.google_key,
              language: "pt-BR",
              components: "country:br",
            }}
            styles={autoCompleteStyle(isKeyboard)}
            nearbyPlacesAPI='GooglePlacesSearch'
            GooglePlacesSearchQuery={{
              rankby: "distance",
              type: "store",
            }}
            GooglePlacesDetailsQuery={{ fields: "formatted_address,geometry,address_component" }}
            filterReverseGeocodingByTypes={["locality", "administrative_area_level_3"]}
            debounce={200}
          />
        }
      </View>

      {!isKeyboard ? <Copyright display={1} /> : null}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
  },
  icon: {
    left: 5,
    top: 30,
    padding: 10,
    position: "absolute",
  },
  contentComplete: {
    backgroundColor: "white",
    paddingVertical: 50,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
  },
  image: {
    aspectRatio: 1.5,
    width: "100%",
    height: undefined,
  },
  body: {
    flex: 1,
    paddingHorizontal: "10%",
  },
  title: {
    fontSize: 16,
    fontFamily: FONT_DEFAULT_STYLE,
    color: TEXT_COLOR_BKCOLORFUL,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5,
  },
  subtitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});

const autoCompleteStyle = isKeyboard => ({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: isKeyboard ? 50 : 15,
    flex: 0,
  },
  textInputContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 45,
    paddingLeft: 15,
    paddingRight: 5,
    borderColor: "#d1d1d1",
    borderRadius: 100,
    width: "100%",
  },
  textInput: {
    fontFamily: FONT_DEFAULT_STYLE,
    height: "100%",
    borderRadius: 100,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingBottom: 2,
    paddingLeft: 5,
    fontSize: 15,
  },
  listView: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    marginVertical: 10,
    width: "100%",
    position: "absolute",
    elevation: 5,
    top: 50,
    maxHeight: 168,
    backgroundColor: "white",
    overflow: 'hidden'
  },
  description: {
    fontSize: 14,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  row: {
    padding: 18,
  },
});

export default GetLocation;
