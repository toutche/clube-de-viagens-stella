import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { logout } from "../../services/auth";
import { useAuth } from "../../contexts/auth";
import { PRIMARY_COLOR } from "../../utils/variables";

const RenderItem = ({ id, onClose, text }) => {
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
        <AntDesign
          name={name === id ? "heart" : "hearto"}
          color={name === id ? "white" : PRIMARY_COLOR}
          size={24}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
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
    fontSize: 15,
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
});

export default RenderItem;
