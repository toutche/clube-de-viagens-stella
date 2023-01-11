import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import Logo from "../../../assets/LogoRR.png";
import CardBackground from "../../../assets/img/carimbos.png";
import { useAuth } from "../../contexts/auth";
import { maskDocument } from "../../utils/masks";
import * as ImagePicker from "expo-image-picker";
import api from "../../services/api";
import { ModalAlert } from "../../components/ModalAlert";

const HeaderMyAccount = ({ navigation }) => {
  const { user } = useAuth();

  const [modalVisiblePermission, setModalVisiblePermission] = useState(false);
  const [modalVisibleError, setModalVisibleError] = useState(false);

  const [modalVisibleGetPicture, setModalVisibleGetPicture] = useState(false);

  const [textModal, setTextModal] = useState({
    title: '',
    message: '',
  })

  const [image, setImage] = useState(
    user.image || "https://toutche.com.br/clube_de_ferias/maquina-fotografica.png",
  );

  const getDate = date => new Date(date).toLocaleDateString().toString();

  function changeRegisterDateToBrDate() {
    const createdPlanAmericanDate = (getDate(user?.plan?.created_at).split('/'))[1] + '/' + (getDate(user?.plan?.created_at).split('/'))[0] + '/' + (getDate(user?.plan?.created_at).split('/'))[2];
    const registerAmericanDate = (getDate(user?.created_at).split('/'))[1] + '/' + (getDate(user?.created_at).split('/'))[0] + '/' + (getDate(user?.created_at).split('/'))[2];

    if (user.plan) {
      return createdPlanAmericanDate;
    }

    return registerAmericanDate;
  }

  changeRegisterDateToBrDate();

  const hasMediaPermission = async option => {
    if (Platform.OS !== "web") {
      let result = undefined;

      if (option === "CAMERA") {
        result = await ImagePicker.requestCameraPermissionsAsync();
      } else {
        result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      }

      if (result?.status !== "granted") {
        setTextModal({
          title: 'Permissão',
          message: "Precisamos das permissões de acesso a câmera e a galeria.",
        })
        setModalVisiblePermission(!modalVisiblePermission);
        return false;
      }
      return true;
    }
  };

  const pickImage = async option => {
    const hasPermission = await hasMediaPermission(option);
    if (!hasPermission) {
      return;
    }

    let result = undefined;

    if (option === "CAMERA") {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0,
      });
    }

    if (!result.canceled) {
      let imageObject = undefined;
  
      imageObject = {
        uri: result.assets[0].uri,
        type: "image/jpeg",
        name: "user.jpg",
      };

      const body = new FormData();
      body.append("image", imageObject);

      const { data } = await api
        .post("/usuario/atualizar/imagem", body, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .catch(error => {
          console.log(error);
          setModalVisibleError(!modalVisibleError);
        });

      if (data?.message == "Imagem do perfil atualizada") {
        setTextModal({
          title: 'Sucesso',
          message: data.message,
        })
        setModalVisiblePermission(!modalVisiblePermission);
      } else {
        setModalVisibleError(!modalVisibleError);
      }
    }
  };

  const chooseImage = () => {
    setTextModal({
      title: 'Sua Foto',
      message: `Deseja tirar uma foto agora ou escolher da galeria?`,
    })

    setModalVisibleGetPicture(!modalVisibleGetPicture);
    // return Alert.alert("Sua foto", `Deseja tirar uma foto agora ou escolher da galeria?`, [
    //   {
    //     text: "Cancelar",
    //     style: "cancel",
    //   },
    //   {
    //     text: "Câmera",
    //     onPress: () => pickImage("CAMERA"),
    //   },
    //   {
    //     text: "Galeria",
    //     onPress: () => pickImage("MEDIA_LIBRARY"),
    //   },
    // ]);
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.header}>
        <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={styles.iconLeft}
        />
      </View>

      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 24,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ImageBackground
          style={{ height: undefined, width: "100%", aspectRatio: 1.7 }}
          imageStyle={{ borderRadius: 20 }}
          source={CardBackground}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image style={styles.logo} source={Logo} />

            <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingBottom: 16 }}>
              <View style={{ marginRight: 16 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ height: 70, aspectRatio: 0.3, resizeMode: "contain" }}
                    source={{ uri: user.images.brackets.left }}
                  />
                  <TouchableOpacity onPress={chooseImage}>
                    <View
                      style={{
                        borderRadius: 999,
                        borderColor: "rgba(0, 0, 0, 0.2)",
                        borderWidth: 8,
                        height: 70,
                        width: 70,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Image style={styles.image} source={{ uri: user.image }} />
                      {/* <Image style={styles.image} source={{ uri: image }} /> */}
                    </View>
                  </TouchableOpacity>
                  <Image
                    style={{
                      height: 70,
                      aspectRatio: 0.3,
                      resizeMode: "contain",
                    }}
                    source={{ uri: user.images.brackets.right }}
                  />
                </View>
                {user.plan !== false && (
                  <View
                    style={{
                      backgroundColor: user.plan.color,
                      borderRadius: 100,
                      padding: 4,
                      marginTop: 8,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <View
                      style={{
                        backgroundColor: "#696969",
                        borderRadius: 100,
                        height: 22,
                        width: 22,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 8,
                      }}>
                      <View
                        style={{
                          backgroundColor: user.plan.color,
                          width: 16,
                          height: 16,
                          borderRadius: 999,
                        }}
                      />
                    </View>
                    <Text style={styles.planText}>{user.plan.name.replace("Plano", "")}</Text>
                  </View>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.cardText, { color: "#000", marginBottom: 8 }]}>
                  {(user.name + " " + user.last_name).toLocaleUpperCase()}
                </Text>
                <Text style={[styles.cardText, { marginBottom: 8 }]}>{`CPF: ${maskDocument(
                  user.document,
                )}`}</Text>
                <Text style={[styles.cardText]}>
                  {user.plan
                    ? `ASSINANTE DESDE ${changeRegisterDateToBrDate()}`
                    : `MEMBRO DESDE ${changeRegisterDateToBrDate()}`}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ModalAlert
        modalVisible={modalVisiblePermission || modalVisibleError}
        setModalVisible={modalVisiblePermission ? setModalVisiblePermission : setModalVisibleError}
        title={modalVisiblePermission ? textModal.title : "Aviso"}
        text={modalVisiblePermission ? textModal.message : "Aconteceu um erro, tente novamente mais tarde."
        }
        textFirstButton='Voltar'
      />

      <ModalAlert
        modalVisible={modalVisibleGetPicture}
        setModalVisible={setModalVisibleGetPicture}
        title={textModal.title}
        text={textModal.message}
        textFirstButton='Galeria'
        firstButtonFunction={() => pickImage("MEDIA_LIBRARY")}
        secondButton
        textSecondButton='Voltar'
        secondButtonFunction={() => setModalVisibleGetPicture(!modalVisibleGetPicture)}
        thirdButton
        textThirdButton='Câmera'
        thirdButtonFunction={() => pickImage("CAMERA")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 30 : 25,
  },
  right: {
    paddingVertical: 2,
    paddingRight: 8,
  },
  check: {
    color: "white",
    fontSize: 16,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  yourTravel: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#e1e1e1",
    fontSize: 11,
    bottom: 2,
  },
  benefits: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 12,
  },
  subscribers: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 12,
  },
  header: {
    marginTop: 20,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginHorizontal: 8,
  },
  iconLeft: {
    padding: 10,
    left: 5,
    position: "absolute",
  },
  logo: {
    width: 120,
    height: 60,
    alignSelf: "center",
    marginVertical: 12,
  },
  audit: {
    marginLeft: -2,
    width: 36,
    height: 36,
  },
  medal: {
    aspectRatio: 0.9,
    width: undefined,
    height: 22,
  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 100,
  },
  cardText: {
    fontSize: 12,
    fontFamily: FONT_DEFAULT_STYLE,
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: "#696969",
    overflow: "hidden",
  },
  planText: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#fff",
  },
});

export default HeaderMyAccount;
