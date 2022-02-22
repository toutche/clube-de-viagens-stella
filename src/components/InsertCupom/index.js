import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE } from "../../utils/variables";
import CustomButton from "../CustomButton";

const InsertCupom = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: user.images["sale-discount"] }}
          style={{ width: 22, height: undefined, aspectRatio: 0.8, marginLeft: 8 }}
        />
        <Text style={styles.text}>Insira seu cupom (opcional)</Text>
      </View>
      <CustomButton
        containerStyle={styles.button}
        titleStyle={styles.textButton}
        title={"Aplicar"}
      />
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
    backgroundColor: "#ef091a",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
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
    color: "#e8bc0d",
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ef091a",
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: "rgba(0,0,0,0.01)",
  },
});

export default InsertCupom;
