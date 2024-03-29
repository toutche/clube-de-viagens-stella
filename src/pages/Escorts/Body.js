import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { AntDesign, EvilIcons, SimpleLineIcons } from "@expo/vector-icons";
import CustomIcon from "../../components/CustomIcon";
import api from "../../services/api";
import { ModalAlert } from "../../components/ModalAlert";

export default ({ data = [], navigation, getEscorts }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalError, setVisibleModalError] = useState(false);
  const [visibleModalSuccess, setVisibleModalSuccess] = useState(false);

  const [modal,setModal] = useState({
    modal: false,
    error: false,
    success: false
  })

  const [deleteData, setDeleteData] = useState({
    id: '',
    name: '',
  });

  function requestDeleteApi() {
    api
      .delete(`/familiar/${deleteData.id}/deletar`)
      .then(({ status, data }) => {
        if (status == 200 && data.message == "Familiar deletado") {
          getEscorts();
          setVisibleModalSuccess(!visibleModalSuccess);
        } else {
          setModal({...modal, error: !modal.error})
          setVisibleModalError(!visibleModalError);
        }
      })
      .catch(error => {
        setVisibleModalError(!visibleModalError);
        console.log("Ocorreu um erro", error);
      });
  }

  const handleDelete = (id, name) => {
    setDeleteData({
      id, name,
    })
    setVisibleModal(!visibleModal);
  };

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.containerScroll}>
      <Text style={styles.title}>Gestão de viajantes</Text>

      <View style={styles.content_list}>
        {data?.members?.map((i, k) => {
          return (
            <View key={k}>
              <View style={styles.content_item}>
                <View style={styles.content_text}>
                  <Text style={styles.title_item}>
                    {i?.name} {i?.last_name}
                  </Text>
                  <View style={styles.icon_item}>
                    <View
                      style={{ justifyContent: "center", alignItems: "center", marginRight: 6 }}>
                      <SimpleLineIcons name='user' size={15} color={BLUE_COLOR} />
                    </View>
                    <Text style={styles.date_item}>{i?.age} anos</Text>
                  </View>
                </View>
                <View style={styles.icon_item}>
                  <CustomIcon
                    onPress={() =>
                      navigation.navigate({
                        name: "DetailsEscort",
                        params: { i, k },
                      })
                    }
                    size={33}
                    color={PRIMARY_COLOR}
                    type={EvilIcons}
                    name={"pencil"}
                    containerStyle={styles.icon}
                  />
                  <CustomIcon
                    onPress={() => {
                      handleDelete(i.id, i.name);
                    }}
                    size={33}
                    color={PRIMARY_COLOR}
                    type={EvilIcons}
                    name={"trash"}
                    containerStyle={styles.icon}
                  />
                </View>
              </View>
              {k !== data.length - 1 && <View style={styles.separator} />}
            </View>
          );
        })}
      </View>

      {/* Modal para confirmar ou cancelar exclusão de familiar! */}
      <ModalAlert
        modalVisible={visibleModal}
        setModalVisible={setVisibleModal}
        title="Confirmar exclusão"
        text={`Confirmar a exclusão do viajante ${deleteData.name}?`}
        textFirstButton='Continuar'
        secondButton
        firstButtonFunction={() => requestDeleteApi()}
        textSecondButton='Voltar'
        secondButtonFunction={() => setVisibleModal(!visibleModal)}
      />

      {/* Modal para mostrar erro caso nao exclua e sucesso caso exclua */}
      <ModalAlert
        modalVisible={visibleModalError || visibleModalSuccess}
        setModalVisible={visibleModalError ? setVisibleModalError : setVisibleModalSuccess}
        title={visibleModalError ? "Erro" : "Viajante excluído"}
        text={visibleModalError
          ? `Não foi possível excluir o viajante ${deleteData.name}. Por favor, tente novamente.`
          : `Viajante ${deleteData.name} foi excluído com sucesso.`
        }
        textFirstButton='Voltar'
      />

      <CustomButton
        onPress={() =>
          navigation.navigate({
            name: "NewEscort",
            params: data?.icons_form,
            merge: true,
          })
        }
        left
        type={AntDesign}
        name={"pluscircleo"}
        color={BLUE_COLOR}
        size={24}
        containerStyle={styles.buttonPlus}
        titleStyle={styles.textButtonPlus}
        title={`Adicionar novo acompanhante`}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  icon_item: {
    flexDirection: "row",
  },
  icon: {
    padding: 2,
  },
  containerScroll: {
    backgroundColor: "#e6e6e6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 28,
  },
  buttonLeft: {
    borderWidth: 1.5,
    borderColor: "#c1c1c1",
    borderRadius: 100,
    height: 50,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLeft: {
    fontSize: 13.5,
    color: "#b1b1b1",
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginLeft: 10,
  },
  buttonRight: {
    borderRadius: 100,
    backgroundColor: BLUE_COLOR,
    height: 50,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonRight: {
    fontSize: 13.5,
    color: "white",
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginLeft: 10,
  },
  buttonPlus: {
    marginTop: 28,
    marginBottom: 25,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: BLUE_COLOR,
    borderRadius: 100,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonPlus: {
    fontSize: 13.5,
    color: BLUE_COLOR,
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginLeft: 10,
  },
  content_list: {
    borderRadius: 12,
    backgroundColor: "white",
  },
  separator: {
    height: 2,
    backgroundColor: "#e1e1e1",
  },
  content_item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  content_text: {
    flex: 1,
  },
  title_item: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#555",
    fontSize: 15,
  },
  date_item: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#a1a1a1",
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
    fontSize: 18,
    textAlign: "center",
    fontFamily: FONT_DEFAULT_STYLE,
  },
  chevron: {
    width: 45,
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#d1d1d1",
  },
});
