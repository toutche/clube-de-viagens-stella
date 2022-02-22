import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomIcon from "../CustomIcon";
import { PRIMARY_COLOR } from "../../utils/variables";
import RenderItem from "./RenderItem";
import FakeItem from "./FakeItem";
import { useAuth } from "../../contexts/auth";

const Menu = ({ isVisible = true, onClose }) => {
  const { user } = useAuth();

  return (
    <Modal
      statusBarTranslucent
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.line}>
            <RenderItem
              id={"Dashboard"}
              text={"Reservas"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-white.png"}
            />
            <RenderItem
              id={"Dashboar"}
              text={"Meu Plano"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-red.png"}
              noSelected={
                "https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-white.png"
              }
            />
            <RenderItem
              id={"Dashboar"}
              text={"Minha Conta"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/minha-conta-red.png"}
              noSelected={
                "https://toutche.com.br/clube_de_ferias/icones/menu/minha-conta-white.png"
              }
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.line}>
            <RenderItem
              id={"Dashboar"}
              text={"Favoritos"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-white.png"}
            />
            <RenderItem
              id={"Wallet"}
              text={"Carteira"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-white.png"}
            />
            <RenderItem
              id={"Alert"}
              text={"Alertas"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-white.png"}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.line}>
            <RenderItem
              id={"Dashboar"}
              text={"Sobre"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-white.png"}
            />
            <RenderItem
              id={"Dashboar"}
              text={"Acompanhantes"}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-red.png"}
              noSelected={
                "https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-white.png"
              }
            />
            <RenderItem
              id={"Contact"}
              text={"Contato"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-white.png"}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.line}>
            <RenderItem
              id={"Dashboar"}
              text={"Vantagens"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-white.png"}
            />
            <RenderItem
              id={"Dashboar"}
              text={"Documentos"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-white.png"}
            />
            <RenderItem
              text={"Sair"}
              onClose={onClose}
              onClose={onClose}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-red.png"}
              noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-white.png"}
            />
          </View>
        </View>
      </View>

      <CustomIcon
        onPress={onClose}
        size={26}
        color={PRIMARY_COLOR}
        type={AntDesign}
        name={"close"}
        containerStyle={styles.icon}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  content: {
    paddingTop: 40,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  line: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  separator: {
    marginVertical: 10,
  },
  icon: {
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    position: "absolute",
    alignSelf: "center",
  },
});

export default Menu;
