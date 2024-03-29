import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import QuantifyTravel from "../../components/QuantifyTravel";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";

const Travelers = ({ onPress, users = [] }) => {
  const renderItem = text => {
    return (
      <View style={styles.item}>
        <AntDesign name='checkcircleo' size={16} color='#287dfd' />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viajantes</Text>

      {users.length > 0 && <QuantifyTravel users={users} />}

      <CustomButton
        containerStyle={styles.button}
        titleStyle={styles.textButton}
        title={`Nomear Viajantes`}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  button: {
    borderColor: BLUE_COLOR,
    borderWidth: 1.5,
    borderRadius: 100,
    height: 50,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  textButton: {
    fontSize: 14.5,
    color: BLUE_COLOR,
    textAlign: "center",
  },
  separator: {
    width: 10,
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    borderRadius: 100,
    width: "100%",
    justifyContent: "center",
    paddingVertical: 15,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: BLUE_COLOR,
    fontFamily: FONT_DEFAULT_STYLE,
    marginLeft: 5,
    fontSize: 13,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#444",
    fontSize: 16,
    marginTop: 5,
  },
});

export default Travelers;
