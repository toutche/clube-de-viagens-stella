import React, { useRef, useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../utils/variables";
import * as Animatable from "react-native-animatable";
import api from "../../services/api";
import { logEvent } from "../../services/firebase";
import { ContentType, EventType, ScreenName } from "../../services/firebase/constant";

const FavoriteIcon = ({ containerStyle, favorite = false, id_package, refreshList = undefined }) => {
  const buttonRef = useRef(null);
  const [check, setCheck] = useState(favorite);

  const pressHandler = () => {
    buttonRef.current.pulse();
    logEvent(EventType.selectContent, {
      screen_name: ScreenName.dashboard,
      content_type: check ? ContentType.unlike : ContentType.like,
      description: {
          id: id_package,
      }
  });
    if (!check) {
      api.post("/desejos/cadastrar", {
        id_package
      })
      .then((res) => {
        if(res.status === 200 && res.data.message === "Desejo cadastrado com sucesso") {
          setCheck(!check);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
    else {
      api.delete(`/desejos/${id_package}/deletar`)
      .then((res) => {
        if(res.status === 200 && res.data.message === "Desejo excluído") {
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
