import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Alert } from "react-native";
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
import { ModalAlert } from "../../components/ModalAlert";

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

  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalDeleteAccount, setModalDeleteAccount] = useState(false);

  const [texts, setTexts] = useState({
    title: '',
    message: '',
  });

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
    const title = "E-mail alterado";
    const message = "Seu e-mail foi atualizado com sucesso."
    setTexts({ title, message });

    api
      .put("/usuario/atualizar/email", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "E-mail alterado com sucesso") {
          setIsVisible(false);
          setModalSuccess(!modalSuccess);
          verifyUser();
        } else {
          setModalError(!modalError);
        }
      })
      .catch(error => {
        console.log(error);
        setModalError(!modalError);
      });
  };

  const changePassword = body => {
    if (body.new_password !== body.new_password_confirmation) {
      const title = "Aviso";
      const message = "As senhas digitadas precisam ser iguais."
      setTexts({ title, message });

      // foi utilizado o modal success pois simplifica a implementação do código sem ter q criar outro modal ou um lógica mais compléxa.
      setModalSuccess(!modalSuccess);
      return;
    }

    const title = "Senha alterada";
    const message = "Sua senha foi atualizada com sucesso."
    setTexts({ title, message });

    api
      .put("/usuario/atualizar/senha", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "Senha alterada com sucesso") {
          setIsVisible(false);
          setModalSuccess(!modalSuccess);
        } else {
          setModalError(!modalError);
        }
      })
      .catch(error => {
        console.log(error);
          setModalError(!modalError);
      });
  };

  const updateCreditCard = body => {
    const title = "Cartão alterado";
    const message = "Seu cartão foi atualizado com sucesso."
    setTexts({ title, message });

    api
      .post("/cartao/criar", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "Cartão Cadastrado") {
          setIsVisible(false);
          setModalSuccess(!modalSuccess);
          verifyUser();
        } else {
          setModalError(!modalError);
        }
      })
      .catch(error => {
        console.log(error);
        setModalError(!modalError);
      });
  };

  const changeAddress = body => {
    const title = "Endereço alterado";
    const message = "Seu endereço foi atualizado com sucesso."
    setTexts({ title, message });

    api
      .put("/usuario/atualizar", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "Usuario Atualizado") {
          setIsVisible(false);
          setModalSuccess(!modalSuccess);
          verifyUser();
        } else {
          setModalError(!modalError);
        }
      })
      .catch(error => {
        console.log(error);
        setModalError(!modalError);
      });
  };

  async function onConfirmDelete() {
    try {
      setDeleting(true);
      await api.delete("/usuario/deletar");
      await logoutAccount();
    } catch (error) {
      const title = "Erro";
      const message = error.message
      setTexts({ title, message });

      setModalDeleteAccount(!modalDeleteAccount);
      setDeleting(false);
    }
  }

  const deleteUser = () => {
    const title = "Aviso";
    const message = "Tem certeza que deseja excluir sua conta?"
    setTexts({ title, message });

    setModalDeleteAccount(!modalDeleteAccount);
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

    const title = "Usuário atualizado";
    const message = "Suas informações foram atualizadas com sucesso."
    setTexts({ title, message });

    api
      .put("/usuario/atualizar", body)
      .then(res => {
        if (res.status == 200 && res.data.message == "Usuario Atualizado") {
          setIsVisible(false);
          setModalSuccess(!modalSuccess);
          verifyUser();
        } else {
          setModalError(!modalError);
        }
      })
      .catch(error => {
        console.log(error);
        setModalError(!modalError);
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
        lenght={20}
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
          <Text
            style={styles.boldPrimaryText}
            onPress={() => openModal("Alterar cartão", "Salvar", updateCreditCard)}>
            {user.credit_card ? "Editar" : "Cadastrar"}
          </Text>
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

        {/* Modal criado pala confirmação de alteração de cadastro ou para mostrar que deu algum erro na hora da alteração. */}
        <ModalAlert
          modalVisible={modalSuccess || modalError}
          setModalVisible={modalSuccess ? setModalSuccess : setModalError}
          title={modalSuccess ? texts.title : 'Aviso'}
          text={modalSuccess ? texts.message : "Aconteceu um erro, tente novamente mais tarde."}
          textFirstButton='Voltar'
        />

        {/* Modal criado para exclusão de conta */}
        <ModalAlert
          modalVisible={modalDeleteAccount}
          setModalVisible={setModalDeleteAccount}
          title={texts.title}
          text={texts.message}
          textFirstButton='Confirmar'
          firstButtonFunction={() => onConfirmDelete()}
          secondButton
          textSecondButton='Voltar'
          secondButtonFunction={() => setModalDeleteAccount(!modalDeleteAccount)}
        />

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
});

export default BodyMyAccount;
