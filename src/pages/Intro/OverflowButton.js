import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Dot from "../../components/Dot";
import CustomButton from "../../components/CustomButton";

const OverflowButton = ({ index, onPress, data }) => {
  const { width } = useWindowDimensions();

  const renderMap = () => {
    return data.map((_, i) => {
      if (i < 6) return <Dot key={i} index={i} currentIndex={index} />;
    });
  };

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.renderComponent}>
        {renderMap()}
        <CustomButton
          onPress={onPress}
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          iconStyle={{ marginLeft: 5 }}
          title={index === 2 ? "Continuar" : "Pular"}
          type={AntDesign}
          name={"arrowright"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 15
  },
  renderComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    right: "10%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#f9f0f0",
    fontSize: 17,
  },
});

export default OverflowButton;
