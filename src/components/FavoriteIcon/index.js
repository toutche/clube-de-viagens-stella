import React, { useRef, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../utils/variables";
import * as Animatable from "react-native-animatable";
import api from "../../services/api";

const FavoriteIcon = ({item, containerStyle, favorite = false, id_package, refreshList = undefined }) => {
  const buttonRef = useRef(null);
  const [check, setCheck] = useState(favorite);

  const pressHandler = () => {
    buttonRef.current.pulse();

    const id = +item?.id || +id_package;
    
    console.log(id);

    if (!check) {
      api.post("/desejos/cadastrar", {
        id_package: id
      })
      .then((res) => {
        if(res.status === 200) {
          setCheck(!check);
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
          setCheck(!check);
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
