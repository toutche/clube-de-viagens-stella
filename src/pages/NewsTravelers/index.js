import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign } from "@expo/vector-icons";
import BodyNewsTravelers from "./BodyNewsTravelers";
import api from "../../services/api";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { useCheckout } from "../../contexts/checkout";

const NewsTravelers = ({ navigation }) => {
  const { data, travelers, setTravelers } = useCheckout();

  const inputId = useRef(null);

  const [thisData, setData] = useState([]);
  const [form, setForm] = useState(travelers || []);
  const [isVisible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShowModal = () => {
    api
      .get("/familiar/listar")
      .then(({ data }) => {
        setData(data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  };

  const handlerPress = () => {
    setTravelers(form);
    navigation.goBack();
  };

  const openModal = (bool, id) => {
    setLoading(true);
    inputId.current = id;
    setVisible(bool);
  };

  const selectTraveler = id => {
    let array = [...form];
    if (inputId.current !== null) {
      array[inputId.current] = thisData[id];
      setForm(array);
    }
    setVisible(false);
  };

  const _listUsers = ({ item, index }) => (
    <TouchableOpacity onPress={() => selectTraveler(index)} style={styles.item}>
      <Text style={styles.itemText}>{item?.name}</Text>
      <Text style={styles.itemText}>{item?.age}</Text>
      <Text style={styles.itemText}>{item?.cpf}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Modal onShow={onShowModal} animationType='slide' statusBarTranslucent visible={isVisible}>
        <View style={{ flex: 1 }}>
          <CustomHeader
            rightIcon={AntDesign}
            rightName={"close"}
            rightSize={26}
            handlerRight={() => setVisible(false)}
            title={"Lista de Viajantes"}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}>
            {loading ? (
              <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
            ) : (
              <FlatList
                data={thisData}
                contentContainerStyle={styles.flatlist}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => _listUsers({ item, index })}
              />
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <CustomHeader
          leftIcon={AntDesign}
          leftName={"arrowleft"}
          leftSize={26}
          handlerLeft={() => navigation.goBack()}
          title={"Viajantes"}
        />
        {<BodyNewsTravelers {...{ data, openModal, form, setForm, handlerPress }} />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingHorizontal: 15,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
  },
  itemText: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14.5,
    color: "#444",
  },
  separator: {
    height: 1.5,
    backgroundColor: "#d1d1d1",
  },
});

export default NewsTravelers;
