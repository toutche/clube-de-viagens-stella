import React, { useEffect, useState } from "react";
import { View, StyleSheet, BackHandler, Image, TextInput } from "react-native";

import api from "../../services/api";

import CustomButton from "../CustomButton";

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, GREEN_COLOR, PRIMARY_COLOR, YELLOW_COLOR } from "../../utils/variables";

import { useAuth } from "../../contexts/auth";
import { useFilter } from '../../contexts/filter';
import { Alert } from "react-native";

const InsertCupom = ({ data, navigation }) => {
  const { user } = useAuth();
  const [validCupom, setValidCupom] = useState(false);
  const { cupom, setCupom, cupomExists, setCupomExists } = useFilter();

  const handlePress = () => {
    api
      .get(`/promotions/check?cupom=${cupom}&plano=${data.id}`)
      .then(res => {
        setCupomExists(res.data.type)
        if (!res.data.type) {
          setTimeout(() => {
            setValidCupom(true);
          }, 2000);
          setValidCupom(false);
        }
      })
      .catch(e => console.log("error", e.response.data))
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Espera!", "Deseja realmente sair?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => {
          navigation.goBack()
          setCupomExists(null)
        } }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.externalContainer}>
      <View style={[styles.container, {
        backgroundColor: 'white',
      }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: user.images["sale-discount"] }}
            style={{ width: 22, height: undefined, aspectRatio: 0.8, marginLeft: 8 }}
          />
          <TextInput
            placeholder="Digite seu cupom"
            onChangeText={(text) => setCupom(text)}
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            autoCapitalize='characters'
            value={cupom}
            style={[styles.inputCupom, {
              color: 'black'
            }]}
          />
        </View>
        <CustomButton
          containerStyle={[styles.button, {
            backgroundColor: cupomExists ? 'green' : "#ef091a"
          }]}
          titleStyle={styles.textButton}
          title={
            ( cupomExists === null ? "Aplicar" : (
              cupomExists === true ? <AntDesign name="check" size={18} color="white" /> : (
              !validCupom ? <Ionicons name="close" size={18} color="white" /> : 'Aplicar'
              )
            ))
          }
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 100,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: "rgba(0,0,0,0.01)",
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    left: 8,
    fontSize: 13.5,
    color: "white",
  },
  textButton: {
    fontSize: 13.5,
    color: "white",
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: "rgba(0,0,0,0.01)",
    width: 80,
  },inputCupom: {
    color: 'white',
    fontWeight: '700',
    width: 220,
    marginHorizontal: 10,
  },
});

export default InsertCupom;
