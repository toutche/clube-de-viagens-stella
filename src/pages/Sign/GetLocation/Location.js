import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { useAuth } from "../../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR, TEXT_COLOR_BKCOLORFUL } from "../../../utils/variables";

const GetLocation = ({
  isKeyboard,
  address = "",
  numberAddress = "",
  changePanel,
  navigation,
  onChangeKeyboard,
}) => {
  const { updateUser, loadingApi } = useAuth();

  const [number, setNumber] = useState(numberAddress);
  const [complement, setComplement] = useState("");

  return (
    <View style={styles.container}>
      <View
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
              changePanel(0);
              onChangeKeyboard(false);
            }}
            style={styles.buttonEdit}>
            <Text style={styles.edit}>Editar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{address}</Text>

        <Text style={styles.text}>Número</Text>

        <TextInput
          value={number}
          keyboardType={"numeric"}
          maxLength={8}
          onChangeText={text => setNumber(text)}
          style={styles.input}
        />

        <Text style={styles.text}>Complemento(Ex: Apto/Bloco/Casa)</Text>
        <TextInput
          value={complement}
          onChangeText={text => setComplement(text)}
          style={styles.input}
        />
      </View>
      <CustomButton
        loadingApi={loadingApi}
        onPress={() =>
          updateUser(
            {
              address,
              number,
              complement,
            },
            navigation,
          )
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
