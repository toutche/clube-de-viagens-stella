import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { logout } from "../../services/auth";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { ModalAlert } from "../ModalAlert";

const RenderItem = ({ id, onClose, text, selected, noSelected }) => {
  const { name } = useRoute();
  const { logoutAccount } = useAuth();
  const navigation = useNavigation();

  const [visibleModal, setVisibleModal] = useState(false);
  const [textModal, setTextModal] = useState({
    title: '',
    message: '',
  });

  const onGo = () => {
    if (id) navigation.navigate(id);
    else {
      setTextModal({
        title: "Sair",
        message: "Deseja realmente sair do app?",
      });

      setVisibleModal(!visibleModal);
    }
  };

  function secondButtonModal() {
    setVisibleModal(!visibleModal);
  }

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
      <ModalAlert
        modalVisible={visibleModal}
        setModalVisible={setVisibleModal}
        title={textModal.title}
        text={textModal.message}
        textFirstButton='Sair'
        firstButtonFunction={() => logoutAccount()}
        secondButton
        textSecondButton='Voltar'
        secondButtonFunction={secondButtonModal}
      />
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
    width: 90,
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
