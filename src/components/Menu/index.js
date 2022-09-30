import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import { AntDesign, arrowleft } from "@expo/vector-icons";
import CustomIcon from "../CustomIcon";
import { PRIMARY_COLOR } from "../../utils/variables";
import RenderItem from "./RenderItem";
import FakeItem from "./FakeItem";
import { useAuth } from "../../contexts/auth";
import { BlurView } from "expo-blur";

const Menu = ({ isVisible = true, onClose }) => {
  const { user } = useAuth();

  return (
    <Modal
      statusBarTranslucent
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
        <BlurView tint="dark" intensity={115} style={styles.blurContainer}>
          <View style={styles.container}>
            <View style=
              {
                {
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  // height: 100
                  flex: 1,
                }
              }
            >
              <CustomIcon
                onPress={onClose}
                size={32}
                color={'white'}
                type={AntDesign}
                name={"arrowleft"}
                containerStyle={styles.icon}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.line}>
                
                <RenderItem
                  id={"MyReservations"}
                  text={"Reservas"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-white.png"}
                />
                <RenderItem
                  id={"MyPlan"}
                  text={"Meu Plano"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-red.png"}
                  noSelected={
                    "https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-white.png"
                  }
                />
                <RenderItem
                  id={"MyAccount"}
                  text={"Minha Conta"}
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
                  id={"Favorites"}
                  text={"Favoritos"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-white.png"}
                />
                <RenderItem
                  id={"Wallet"}
                  text={"Carteira"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-white.png"}
                />
                <RenderItem
                  id={"Alert"}
                  text={"Alertas"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-white.png"}
                />
              </View>

              <View style={styles.separator} />

              <View style={styles.line}>
                <RenderItem
                  id={"About"}
                  text={"Sobre"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-white.png"}
                />
                <RenderItem
                  id={"Escorts"}
                  text={"Viajantes"}
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
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-white.png"}
                />
              </View>

              <View style={styles.separator} />

              <View style={styles.line}>
                <RenderItem
                  id={"Benefits"}
                  text={"Vantagens"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-white.png"}
                />
                <RenderItem
                  id={"Docs"}
                  text={"Docs"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-white.png"}
                />
                <RenderItem
                  text={"Sair"}
                  onClose={onClose}
                  selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-red.png"}
                  noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-white.png"}
                />
              </View>
            </View>
          </View>
        </BlurView>
      {/* <CustomIcon
        onPress={onClose}
        size={26}
        color={PRIMARY_COLOR}
        type={AntDesign}
        name={"close"}
        containerStyle={styles.icon}
      /> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    justifyContent: 'space-evenly',
    flex: 1,
  },
  content: {
    paddingTop: 40,
    // backgroundColor: "white",
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    height: '80%',
    paddingBottom: 20,
  },
  line: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  separator: {
    marginVertical: 10,
  },
  icon: {
    // backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    marginLeft: 40,
    position: "absolute",
    alignSelf: "center",
  },
  blurContainer: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,.5)",
    paddingBottom: 100
  }
});

export default Menu;
