import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

const Hide = ({ containerStyle, item }) => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({
          name: "PlanScreen",
          params: {
            item,
          },
          merge: true,
        })
      }
      style={containerStyle}>
      <Image
        style={{
          width: 33,
          height: 33,
          borderRadius: 100,
        }}
        source={{
          uri: "https://e7.pngegg.com/pngimages/15/708/png-clipart-crown-crown.png",
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14.5,
    color: "white",
    marginLeft: 1,
  },
  icon: {
    fontSize: 10,
    color: "white",
    marginRight: 1,
  },
});

export default Hide;
