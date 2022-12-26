import React, { useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../utils/variables";
import * as Animatable from "react-native-animatable";
import api from "../../services/api";
import { useFilter } from "../../contexts/filter";

const FavoriteIcon = ({item, containerStyle, id_package, refreshList = undefined }) => {
  const buttonRef = useRef(null);
  const { selectedFavorite, setSelectedFavorite } = useFilter();
  
  const id = +item?.id || +id_package;
  
  const pressHandler = () => {
    buttonRef.current.pulse();

    if (!selectedFavorite.some((element) => +element === +id)) {
      api.post("/desejos/cadastrar", {
        id_package: id
      })
      .then((res) => {
        if(res.status === 200) {
          setSelectedFavorite([...selectedFavorite, id]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
    else {
      api.delete(`/desejos/${id}/deletar`)
      .then((res) => {
        if(res.status === 200) {
          const newList = selectedFavorite.filter((element) => +element !== +id);
          setSelectedFavorite([...newList]);
          refreshList && refreshList();
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <Animatable.View style={containerStyle} ref={buttonRef} useNativeDriver duration={1000}>
        <AntDesign
          style={styles.icon}
          name={selectedFavorite.some((element) => +element === +id) ? "heart" : "hearto"}
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
