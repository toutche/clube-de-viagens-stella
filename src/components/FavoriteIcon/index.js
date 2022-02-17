import React, { useRef, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../utils/variables";
import * as Animatable from "react-native-animatable";

const FavoriteIcon = ({ containerStyle, favorite = false }) => {
  const buttonRef = useRef(null);
  const [check, setCheck] = useState(check);

  const pressHandler = () => {
    setCheck(!check);
    buttonRef.current.pulse();
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <Animatable.View style={containerStyle} ref={buttonRef} useNativeDriver duration={1000}>
        <AntDesign
          style={styles.icon}
          name={check ? "heart" : "hearto"}
          size={24}
          color={PRIMARY_COLOR}
        />
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 2,
  },
});

export default FavoriteIcon;
