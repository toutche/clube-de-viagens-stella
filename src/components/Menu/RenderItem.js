import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { logout } from "../../services/auth";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

const RenderItem = ({ id, onClose, text, selected, noSelected }) => {
  const { name } = useRoute();
  const { logoutAccount } = useAuth();
  const navigation = useNavigation();

  const onGo = () => {
    id ? navigation.navigate(id) : logoutAccount();
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onGo}
        style={[
          styles.content,
          {
            backgroundColor: name === id ? PRIMARY_COLOR : "#e1e1e1",
          },
        ]}>
        <Image style={styles.icon} source={{ uri: name === id ? noSelected : selected }} />
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          {
            color: name === id ? PRIMARY_COLOR : "#777",
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14,
    top: 5,
    width: 80,
    textAlign: "center",
  },
  content: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default RenderItem;
