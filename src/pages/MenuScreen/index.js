import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import CustomIcon from '../../components/CustomIcon';
import RenderItem from '../../components/Menu/RenderItem';

import { PRIMARY_COLOR } from '../../utils/variables';
import { logScreen } from '../../services/firebase';
import { ScreenView } from '../../services/firebase/constant';

export function MenuScreen({ navigation }) {
  useEffect(() => {
    logScreen(ScreenView.MenuScreen);
  }, []);

  return(
    <View style={styles.container}>
        <View style={styles.line}>
          <RenderItem
            id={"MyReservations"}
            text={"Reservas"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/reservas-white.png"}
          />
          <RenderItem
              id={"MyPlan"}
              text={"Meu Plano"}
              selected={"https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-red.png"}
              noSelected={
                "https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-white.png"
              }
            />
            <RenderItem
              id={"MyAccount"}
              text={"Minha Conta"}
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
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/favoritos-white.png"}
          />
          <RenderItem
            id={"Wallet"}
            text={"Carteira"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/carteira-white.png"}
          />
          <RenderItem
            id={"Alert"}
            text={"Alertas"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/alertas-white.png"}
          />
        </View>

        <View style={styles.separator} />
      
        <View style={styles.line}>
          <RenderItem
            id={"About"}
            text={"Sobre"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sobre-white.png"}
          />
          <RenderItem
            id={"Escorts"}
            text={"Viajantes"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-red.png"}
            noSelected={
              "https://toutche.com.br/clube_de_ferias/icones/menu/acompanhantes-white.png"
            }
          />
          <RenderItem
            id={"Contact"}
            text={"Contato"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/contato-white.png"}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.line}>
          <RenderItem
            id={"Benefits"}
            text={"Plano Copa"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/vantagens-white.png"}
          />
          <RenderItem
            id={"Docs"}
            text={"Docs"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/documentos-white.png"}
          />
          <RenderItem
            text={"Sair"}
            selected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-red.png"}
            noSelected={"https://toutche.com.br/clube_de_ferias/icones/menu/sair-white.png"}
          />
        </View>

      <CustomIcon
        size={26}
        onPress={() => navigation.navigate('Dashboard')}
        color={PRIMARY_COLOR}
        type={AntDesign}
        name={"close"}
        containerStyle={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    paddingTop: 40,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  line: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  separator: {
    marginVertical: 20,
  },
  icon: {
    backgroundColor: "lightgray",
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