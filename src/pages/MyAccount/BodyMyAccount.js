import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import {
  PRIMARY_COLOR,
  TITLE_COLOR_BKCOLORFUL,
  FONT_DEFAULT_BOLD_STYLE,
  BLUE_COLOR,
} from "../../utils/variables";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { MaterialCommunityIcons, FontAwesome, EvilIcons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import { maskPhone } from "../../utils/masks";
import CustomButton from "../../components/CustomButton";
import CustomModal from "./CustomModal";

const BodyMyAccount = ({ item }) => {
  const { user, verifyUser, logoutAccount } = useAuth();
  const [name, setName] = useState(user.name + " " + user.last_name);
  const [nickname, setNickName] = useState(user?.nickname);
  const [phoneNumber, setPhoneNumber] = useState(user.mobile_phone);
  const [address, setAddress] = useState(
    `${user.address || ""}, ${user.number || ""}${user.complement || ""}, ${
      user.neighborhood || ""
    }, ${user.city || ""}, ${user.state || ""}`,
  );

  const [loading, setLoading] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [icon, setIcon] = useState({
    lib: undefined,
    name: undefined,
    size: undefined,
  });
  const [action, setAction] = useState({
    handler: undefined,
    title: undefined,
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [title, setTitle] = useState("");

  const openModal = (
    title,
    actionTitle,
    actionHandler,
    forgotPassword = false,
    lib = undefined,
    name = undefined,
    size = undefined,
  ) => {
    setIcon({
      lib,
      name,
      size,
    });
    setAction({
      handler: actionHandler,
      title: actionTitle,
    });
    setTitle(title);
    setIsVisible(true);
    setForgotPassword(forgotPassword);
  };

  const changeEmail = body => {
    api
      .put("/usuario/atualizar/email", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "E-mail alterado com sucesso") {
          setIsVisible(false);
          Alert.alert("E-mail alterado", "Seu e-mail foi atualizado com sucesso.");
          verifyUser();
        } else {
          Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
      });
  };

  const changePassword = body => {
    if (body.new_password !== body.new_password_confirmation) {
      Alert.alert("Aviso", "As senhas digitadas não são iguais.");
      return;
    }

    api
      .put("/usuario/atualizar/senha", body)
      .then(res => {
        // console.log(res.status, res.data);
        if (res.status == 200 && res.data.message == "Senha alterada com sucesso") {
          setIsVisible(false);
          Alert.alert("Senha alterada", "Sua senha foi atualizada com sucesso.");
        } else {
          Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
      });
  };

  const updateCreditCard = body => {
    api
      .post("/cartao/criar", body)
      .then(res => {
        // console.log(res.status, res.data);
        if (res.status == 200 && res.data.message == "Cartão Cadastrado") {
          setIsVisible(false);
          Alert.alert("Cartão alterado", "Seu cartão foi atualizado com sucesso.");
          verifyUser();
        } else {
          Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
      });
  };

  const changeAddress = body => {
    api
      .put("/usuario/atualizar", body)
      .then(res => {
        // console.log(res.status, res.data);
        if (res.status == 200 && res.data.message == "Usuario Atualizado") {
          setIsVisible(false);
          Alert.alert("Endereço alterado", "Seu endereço foi atualizado com sucesso.");
          verifyUser();
        } else {
          Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
      });
  };

  const deleteUser = () => {
    Alert.alert("Aviso", "Tem certeza que deseja excluir sua conta?", [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            setDeleting(true);
            await api.delete("/usuario/deletar");
            await logoutAccount();
          } catch (error) {
            Alert.alert("Erro", error.message);
            setDeleting(false);
          }
        },
      },
    ]);
  };

  const updateUser = () => {
    setLoading(true);

    let [first_name, ...last_name] = name.split(" ");
    last_name = last_name.join(" ") || first_name;

    const body = {
      name: first_name,
      last_name: last_name,
      phone_number: phoneNumber,
      nickname,
    };

    api
      .put("/usuario/atualizar", body)
      .then(res => {
        // console.log(res.status, res.data);
        if (res.status == 200 && res.data.message == "Usuario Atualizado") {
          setIsVisible(false);
          Alert.alert("Usuário atualizado", "Suas informações foram atualizadas com sucesso.");
          verifyUser();
        } else {
          Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Aviso", "Aconteceu um erro, tente novamente mais tarde.");
      });

    setLoading(false);
  };

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.containerScroll}>
      <CustomModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        icon={icon}
        title={title}
        action={action}
        forgotPassword={forgotPassword}
      />

      <CustomInput
        placeholder='Qual seu nome completo?'
        containerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        color='#c0c0c0'
        size={16}
        type={FontAwesome}
        name={"user-o"}
        autoCapitalize={"words"}
        value={name}
        onChangeText={text => setName(text)}
      />

      <CustomInput
        placeholder='Como gostaria de ser chamado?'
        containerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        color='#c0c0c0'
        size={16}
        type={FontAwesome}
        name={"user"}
        autoCapitalize={"words"}
        value={nickname}
        onChangeText={setNickName}
      />

      <CustomInput
        placeholder='Seu celular?'
        containerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        color='#c0c0c0'
        size={24}
        lenght={15}
        type={FontAwesome}
        name={"mobile"}
        keyboardType={"phone-pad"}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(maskPhone(text))}
      />

      <CustomInput
        placeholder='Melhor e-mail para contato?'
        containerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        color='#c0c0c0'
        size={16}
        type={FontAwesome}
        name={"envelope"}
        keyboardType={"email-address"}
        value={user.email}
        rightIconLib={EvilIcons}
        rightIconName={"pencil"}
        rightIconAction={() =>
          openModal("Alterar E-mail", "Alterar", changeEmail, true, FontAwesome, "envelope", 16)
        }
        rightIconSize={32}
        rightIconColor={PRIMARY_COLOR}
        editable={false}
      />

      <CustomInput
        containerStyle={styles.inputContainerStyle}
        inputStyle={{ color: "#000" }}
        color='#c0c0c0'
        size={20}
        type={MaterialCommunityIcons}
        name={"lock-reset"}
        value={"Alterar senha ⁕⁕⁕⁕⁕⁕"}
        rightIconLib={EvilIcons}
        rightIconName={"pencil"}
        rightIconAction={() =>
          openModal(
            "Alterar senha",
            "Salvar",
            changePassword,
            true,
            MaterialCommunityIcons,
            "lock-reset",
            20,
          )
        }
        rightIconSize={32}
        rightIconColor={PRIMARY_COLOR}
        editable={false}
      />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.boldGreyText}>
            {user.credit_card ? user.credit_card.holder_name : "Cartão de Crédito"}
          </Text>
          <View style={styles.removeEditButtonWrapper}>
            <Text
              style={styles.boldPrimaryText}
              onPress={() => openModal("Alterar cartão", "Salvar", updateCreditCard)}>
              {user.credit_card ? "Editar" : "Cadastrar"}
            </Text>
            {!user.plan && 
              <TouchableOpacity>
                <Text style={styles.removeButtonText}>
                  Remover
                </Text>
              </TouchableOpacity>
            }
          </View>
        </View>
        {user.credit_card && (
          <View style={styles.cardBody}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontFamily: FONT_DEFAULT_BOLD_STYLE }}>
                {user.credit_card.last_digits}
              </Text>
            </View>

            <FontAwesome name='check' size={24} color={BLUE_COLOR} />
          </View>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.boldGreyText}>Endereço</Text>
          <Text
            style={styles.boldPrimaryText}
            onPress={() => openModal("Alterar endereço", "Salvar", changeAddress)}>
            Editar
          </Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={{ fontFamily: FONT_DEFAULT_BOLD_STYLE }}>{address}</Text>
        </View>
      </View>

      <CustomButton
        onPress={updateUser}
        containerStyle={styles.buttonSave}
        titleStyle={styles.buttonText}
        title={"Salvar"}
        disabled={loading || isDeleting}
        loadingApi={loading}
      />

      <CustomButton
        onPress={deleteUser}
        containerStyle={styles.buttonDelete}
        titleStyle={styles.buttonText}
        title={"Excluir conta"}
        disabled={loading || isDeleting}
        loadingApi={isDeleting}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  containerScroll: {
    backgroundColor: "#e6e6e6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  inputContainerStyle: {
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
  },
  buttonSave: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 16,
    width: "100%",
    borderRadius: 25,
    backgroundColor: BLUE_COLOR,
  },
  buttonDelete: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 16,
    width: "100%",
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
  },
  buttonText: {
    paddingHorizontal: 5,
    color: TITLE_COLOR_BKCOLORFUL,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 13,
    textAlign: "center",
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 16,
  },
  cardHeader: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
  },
  cardBody: {
    flexDirection: "row",
    padding: 16,
    borderTopColor: "#c0c0c0",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boldGreyText: {
    color: "#c0c0c0",
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  boldPrimaryText: {
    color: PRIMARY_COLOR,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  customInput: {
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
    borderRadius: 999,
    borderWidth: 1,
    marginVertical: 16,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchInput: {
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
    borderRadius: 999,
    borderWidth: 1,
    marginTop: 16,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  removeEditButtonWrapper: {
    flexDirection: "row",
  },
  removeButtonText: {
    marginLeft: 16,
    color: PRIMARY_COLOR,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
});

export default BodyMyAccount;
