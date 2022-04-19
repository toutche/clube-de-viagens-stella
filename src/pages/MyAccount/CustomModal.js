import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet, useWindowDimensions, Platform, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR, BLUE_COLOR, TITLE_COLOR_BKCOLORFUL, FONT_DEFAULT_BOLD_STYLE } from "../../utils/variables";
import CustomButton from "../../components/CustomButton";
import { CreditCardInput } from '../../components/CreditInput';
import CustomInput from "../../components/CustomInput";
import { useAuth } from "../../contexts/auth";

const CustomModal = ({ 
  isVisible, 
  onClose, 
  icon,
  title,
  action,
  forgotPassword
  }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState(80);

  const [password, setPassword] = useState({
    password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [email, setEmail] = useState({
    new_email: "",
    new_email_confirmation: "",
    password: "",
  });

  const [card, setCard] = useState({
    card_number: "",
    holder_name: "",
    holder_cpf: "",
    validade_year: "",
    validate_month: "",
    cvv: "",
  });

  const [address, setAddress] = useState({
    zipCode: user.zip_code,
    state: user.state,
    city: user.city,
    address: user.address, 
    neighborhood: user.neighborhood,
    number: user.number.toString(), 
    complement: user.complement
  });

  useEffect(() => {
    title === "Alterar cartão" || title === "Alterar endereço"
    ? setHeight(300)
    : setHeight(20);
  });

	const Icon = icon.lib;

  const onCreditCardChange = ({ values }) => {
    setCard({
      card_number: values.number,
      holder_name: values.name,
      holder_cpf: values.CPF,
      validade_year: values.expiry.split("/")[1],
      validate_month: values.expiry.split("/")[0],
      cvv: values.cvc,
    });
  };

  const passwordInputs = () => 
    <View style={{flex: 1, marginHorizontal: 16}}>
      <CustomInput
        placeholder='Senha atual'
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
        placeholderTextColor={"#000"}
        secureTextEntry
        value={password.password}
        onChangeText={text =>
          setPassword({
            ...password,
            password: text,
          })
        }
      />

      <CustomInput
        placeholder='Nova senha'
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
        placeholderTextColor={"#000"}
        secureTextEntry
        value={password.new_password}
        onChangeText={text =>
          setPassword({
            ...password,
            new_password: text,
          })
        }
      />

      <CustomInput
        placeholder='Repita a nova senha'
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainer}
        placeholderTextColor={"#000"}
        secureTextEntry
        value={password.new_password_confirmation}
        onChangeText={text =>
          setPassword({
            ...password,
            new_password_confirmation: text,
          })
        }
      />
    </View>

const emailInputs = () => 
  <View style={{flex: 1, marginHorizontal: 16}}>
    <CustomInput
      placeholder='Novo e-mail'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      keyboardType={"email-address"}
      value={email.new_email}
      onChangeText={text =>
        setEmail({
          ...email,
          new_email: text,
        })
      }
    />

    <CustomInput
      placeholder='Repita o novo e-mail'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      keyboardType={"email-address"}
      value={email.new_email_confirmation}
      onChangeText={text =>
        setEmail({
          ...email,
          new_email_confirmation: text,
        })
      }
    />
    
    <CustomInput
      placeholder='Senha'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      secureTextEntry
      value={email.password}
      onChangeText={text =>
        setEmail({
          ...email,
          password: text,
        })
      }
    />
  </View>

const creditCardAdvisory = () =>
  <View style={{flex: 1}}>
    <Text 
      style={[styles.modalTitle, {marginBottom: 16, color: PRIMARY_COLOR, marginHorizontal: 16}]}
    >
      Aviso: Caso tenha uma assinatura ativa, a mesma também será atualizada para este novo cartão.
    </Text>
    <CreditCardInput requiresName onChange={onCreditCardChange} />
  </View>

const addressInputs = () => 
  <View style={{flex: 1, marginHorizontal: 16}}>
    <CustomInput
      placeholder='CEP'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      keyboardType={"number-pad"}
      lenght={8}
      value={address.zipCode}
      onChangeText={text =>
        setAddress({
          ...address,
          zipCode: text,
        })
      }
    />

    <CustomInput
      placeholder='Estado'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.state}
      onChangeText={text =>
        setAddress({
          ...address,
          state: text,
        })
      }
    />

    <CustomInput
      placeholder='Cidade'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.city}
      onChangeText={text =>
        setAddress({
          ...address,
          city: text,
        })
      }
    />

    <CustomInput
      placeholder='Endereço'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.address}
      onChangeText={text =>
        setAddress({
          ...address,
          address: text,
        })
      }
    />

    <CustomInput
      placeholder='Bairro'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.neighborhood}
      onChangeText={text =>
        setAddress({
          ...address,
          neighborhood: text,
        })
      }
    />

    <CustomInput
      placeholder='Complemento'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.complement}
      onChangeText={text =>
        setAddress({
          ...address,
          complement: text,
        })
      }
    />

    <CustomInput
      placeholder='Número'
      inputStyle={styles.inputStyle}
      containerStyle={styles.inputContainer}
      placeholderTextColor={"#000"}
      value={address.number}
      onChangeText={text =>
        setAddress({
          ...address,
          number: text,
        })
      }
    />
  </View>

  const handlePress = () => {
    const body = title === "Alterar senha" 
    ? password
    : title === "Alterar E-mail" 
    ? email
    : title === "Alterar cartão" 
    ? card
    : address;

    setLoading(true);
    action.handler(body);
    setLoading(false);
    
    setPassword({
      password: "",
      new_password: "",
      new_password_confirmation: "",
    });
  
    setEmail({
      new_email: "",
      new_email_confirmation: "",
      password: "",
    });
  }

  return (
    <Modal
      statusBarTranslucent
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      onDismiss={onClose}>

      <View style={styles.container} />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView 
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#fff",
            height: height,
            overflow: "hidden"
          }}
        >
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, borderColor: "#f5f5f5", borderBottomWidth: 2}}>
            {Icon && <Icon name={icon.name} size={icon.size} color={PRIMARY_COLOR} style={{marginRight: 16}}/>}
            <Text style={styles.modalTitle}>{title}</Text>
          </View>

          <View style={{marginVertical: 16}}>
            {title === "Alterar senha" && passwordInputs()}

            {title === "Alterar E-mail" && emailInputs()}

            {title === "Alterar cartão" && creditCardAdvisory()}

            {title === "Alterar endereço" && addressInputs()}

            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 16}}>
              <CustomButton 
                onPress={onClose} 
                title={"Cancelar"} 
                containerStyle={styles.dismissButton} 
                titleStyle={styles.dismissButtonText} 
                disabled={loading}
                loadingApi={loading}
                loadingApiColor={"#c0c0c0"} />
              <CustomButton 
                onPress={handlePress} 
                title={action.title} 
                containerStyle={styles.successButton} 
                titleStyle={styles.successButtonText} 
                disabled={loading}
                loadingApi={loading}
                loadingApiColor={TITLE_COLOR_BKCOLORFUL} />
            </View>

            {forgotPassword && 
              <Text style={styles.forgotPassword} onPress={action.handler}>Esqueceu a sua senha?</Text>
            }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,50,150,.5)",
  },
  bow: {
    backgroundColor: "transparent",
    borderColor: "rgba(0,0,0,.5)",
    borderWidth: 55,
    borderRadius: 1000,
    position: "absolute",
    alignSelf: "center",
  },
  icon: {
    backgroundColor: PRIMARY_COLOR,
    width: 80,
    height: 70,
    zIndex: 10,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: -5,
    position: "absolute",
    alignSelf: "center",
  },
	modalTitle: {
		fontFamily: FONT_DEFAULT_STYLE,
		textAlign: "center",
    fontSize: 16,
	},
  successButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    borderColor: BLUE_COLOR,
    backgroundColor: BLUE_COLOR,
    borderWidth: 1,
    marginLeft: 16,
  },
  successButtonText: {
    paddingHorizontal: 5,
    color: TITLE_COLOR_BKCOLORFUL,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 13,
    textAlign: "center",
    textTransform: "uppercase",
  },
  dismissButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    marginRight: 16,
  },
  dismissButtonText: {
    paddingHorizontal: 5,
    color: "#c0c0c0",
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 13,
    textAlign: "center",
    textTransform: "uppercase",
  },
  forgotPassword: {
		fontFamily: FONT_DEFAULT_STYLE,
		textAlign: "center",
    textDecorationLine: "underline",
    color: BLUE_COLOR
  },
  inputContainer: { 
    backgroundColor: "#f5f5f5",
    borderColor: "#c0c0c0",
  },
  inputStyle: {
		fontFamily: FONT_DEFAULT_STYLE,
    color: "#000",
  }
});

export default CustomModal;
