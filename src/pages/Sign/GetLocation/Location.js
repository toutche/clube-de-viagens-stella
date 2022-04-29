import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { useAuth } from "../../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR, TEXT_COLOR_BKCOLORFUL } from "../../../utils/variables";
import api from "../../../services/api";

const GetLocation = ({
  isKeyboard,
  address = "",
  addressArr = [],
  numberAddress = "",
  changePanel,
  navigation,
  onChangeKeyboard,
}) => {

  
  const { updateUser, loadingApi } = useAuth();
  
  const [number, setNumber] = useState(numberAddress);
  const [complement, setComplement] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("BR");
  const [cep, setCEP] = useState("");
  const [edit, setEdit] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Editar")

  const check = (string) => {
    if(string === null || string === undefined || string.length === 0) {
      return { ok: false }
    } else {
      return { ok: true }
    }
  }

  const updateAddressHandler = (event) => {
    try {
  
        if( ! check(cep).ok ) throw { message: "Informe o número da seu CEP" }
        if( ! check(street).ok ) throw { message: "Informe o nome da sua rua" }
        if( ! check(neighborhood).ok ) throw { message: "Informe o nome do seu bairro" }
        if( ! check(city).ok ) throw { message: "Informe o nome da sua cidade" }
        if( ! check(region).ok ) throw { message: "Informe o nome do seu estado" }
        if( ! check(number).ok ) throw { message: "Informe o número da sua residência" }

        updateUser(
          {
            address,
            cep,
            street,
            neighborhood,
            city,
            region,
            country,
            number,
            complement,
          },
          navigation,
        )
      
    } catch(e) {
      alert(e.message)
    }
  }

  const editHandler = () => {
    // const addressArr = address.split(/-|,/);
    setEditButtonText( edit ? "Editar" : "Descartar" )
    setEdit( edit => !edit );
    
    (async () => {
      try {
        addressArr.forEach(address => {
          if( address.match(/[0-9]{5}-[\d]{3}/g) ) {
            setCEP(address)
          }
        })
        if( ! check(cep).ok ) throw { message: "no cep" }
        await api.get(`https://ws.apicep.com/cep/${cep}.json`)
        .then(response => {
          if(response.data.ok) {
            setStreet(response.data.address)
            setCity(response.data.city)
            setNeighborhood(response.data.district)
            setRegion(response.data.state)
          } else {
            throw { message: response.data.message }
          }
        })
        .catch(e => {
          throw e
        })
      } catch(e) {
        if(e.message === "no cep") {
          if(addressArr[0].match(/^\d+$/)) {
            setNumber(addressArr[0])
            setStreet(addressArr[1])
            setNeighborhood(addressArr[2])
            setCity(addressArr[3])
            setRegion(addressArr[4])
            setCountry(address[5])
          } else {
            setStreet(addressArr[0])
            setNeighborhood(addressArr[1])
            setCity(addressArr[2])
            setRegion(addressArr[3])
            setCountry(addressArr[4])
          }
        } else {
          console.error(e.message)
        }
      }
    })()
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={[
          styles.content,
          {
            marginTop: isKeyboard ? 50 : 0,
          },
        ]}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Endereço</Text>
          <TouchableOpacity
            onPress={() => {
              changePanel(1);
              onChangeKeyboard(false);
              editHandler();
            }}
            style={styles.buttonEdit}>
            <Text style={styles.edit}>{editButtonText}</Text>
          </TouchableOpacity>
        </View>
        {
          edit ? 
          <View >
            <Text style={styles.text}>Rua</Text>
            <TextInput 
              value={street}
              onChangeText={(street) => { setStreet(street) }}
              style={styles.input}
            />
            <Text style={styles.text}>Bairro</Text>
            <TextInput 
              value={neighborhood}
              onChangeText={(neighborhood) => { setNeighborhood(neighborhood) }}
              style={styles.input}
            />
            <Text style={styles.text}>Cidade</Text>
            <TextInput 
              value={city}
              onChangeText={(city) => { setCity(city) }}
              style={styles.input}
            />
            <Text style={styles.text}>Estado</Text>
            <TextInput 
              value={region}
              onChangeText={(region) => { setRegion(region) }}
              style={styles.input}
            />
            <Text style={styles.text}>CEP</Text>
            <TextInput 
              value={cep}
              onChangeText={(cep) => { setCEP(cep) }}
              style={styles.input}
            />
          </View>
          
          : 
          <Text style={styles.subtitle}>{address}</Text>
        }    

        <Text style={styles.text}>Número</Text>

        <TextInput
          value={number}
          keyboardType={"numeric"}
          maxLength={8}
          onChangeText={(number) => { setNumber(number) }}
          style={styles.input}
        />

        <Text style={styles.text}>Complemento(Ex: Apto/Bloco/Casa)</Text>

        <TextInput
          value={complement}
          onChangeText={setComplement}
          style={styles.input}
        />

      </ScrollView>

      <CustomButton
        loadingApi={loadingApi}
        onPress={() =>
          updateAddressHandler()
        }
        containerStyle={styles.button}
        titleStyle={styles.buttonText}
        title={"Confirmar"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    marginTop: 2,
  },
  content: {
    backgroundColor: "white",
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    maxHeight: 280
  },
  input: {
    fontSize: 14.5,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 100,
    height: 40,
    paddingHorizontal: 15,
  },
  containerTitle: {
    marginLeft: 10,
    flexDirection: "row",
  },
  buttonEdit: {
    alignItems: "center",
    justifyContent: "center",
    bottom: -1,
    left: 5,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14,
    color: "#444",
  },
  subtitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 10,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    marginBottom: 3,
    marginTop: 5,
    marginLeft: 10,
    color: "#444",
    fontSize: 14,
  },
  edit: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "red",
  },
  buttonText: {
    paddingHorizontal: 5,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    marginTop: 15,
    borderRadius: 25,
    borderColor: TEXT_COLOR_BKCOLORFUL,
    backgroundColor: TEXT_COLOR_BKCOLORFUL,
    borderWidth: 1,
  },
});

export default GetLocation;
