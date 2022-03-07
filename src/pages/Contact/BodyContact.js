import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import api from "../../services/api";
import Picker from "../../components/Picker";

export default ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [isVisiblePicker, setVisiblePicker] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    subjectText: "",
    message: "",
  });

  const handlePress = () => {
    setLoading(true);

    api
      .post("/contact/create", {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      })
      .then(({ data }) => {
        if (data.message) {
          Alert.alert("Sucesso", data.message);
        }
      })
      .catch(e => console.log(e))
      .finally(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          subject: "",
          subjectText: "",
          message: "",
        });
      });
  };

  const onChange = subject => {
    setForm({
      ...form,
      subject: subject.key,
      subjectText: subject.value,
    });
  };

  const openPicker = () => {
    setVisiblePicker(true);
  };

  const closePicker = () => {
    setVisiblePicker(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
      <Picker
        {...{
          dataPicker: data?.options,
          isVisiblePicker,
          closePicker,
          onChange,
        }}
      />

      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.containerScroll}>
        <Text style={styles.title}>Entre em contato</Text>
        <Text style={styles.subTitle}>Podemos ajudar?</Text>
        <CustomInput
          containerStyle={styles.containerInput}
          inputStyle={styles.input}
          size={16}
          color={"#c1c1c1"}
          placeholder='Nome completo'
          placeholderTextColor={"#a1a1a1"}
          uri={data?.icons?.name}
          value={form.name}
          onChangeText={text =>
            setForm({
              ...form,
              name: text,
            })
          }
        />
        <CustomInput
          containerStyle={styles.containerInput}
          inputStyle={styles.input}
          placeholder='E-mail'
          placeholderTextColor={"#a1a1a1"}
          size={16}
          uri={data?.icons?.email}
          color={"#c1c1c1"}
          value={form.email}
          onChangeText={text =>
            setForm({
              ...form,
              email: text,
            })
          }
        />

        <TouchableOpacity onPress={openPicker} style={styles.fakeButton}>
          <Image source={{ uri: data?.icons?.subject }} style={styles.image} />
          <Text style={[styles.fakeText, { color: form.subjectText ? "#555" : "#a1a1a1" }]}>
            {form.subjectText || "Assunto"}
          </Text>
        </TouchableOpacity>

        <CustomInput
          containerStyle={styles.containerInputMessage}
          inputStyle={styles.inputMessage}
          placeholder='Mensagem'
          placeholderTextColor={"#a1a1a1"}
          size={16}
          color={"#c1c1c1"}
          uri={data?.icons?.message}
          value={form.message}
          onChangeText={text =>
            setForm({
              ...form,
              message: text,
            })
          }
          multiline
          lenght={300}
        />
        <CustomButton
          onPress={handlePress}
          loadingApi={loading}
          loadingApiColor={"white"}
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Enviar`}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
  },
  image: {
    width: 20,
    height: 20
  },
  fakeButton: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#c1c1c1",
  },
  fakeText: {
    fontFamily: FONT_DEFAULT_STYLE,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14.5,
  },
  containerScroll: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  containerInputMessage: {
    height: 100,
    borderRadius: 15,
    paddingVertical: 10,
    borderColor: "#c1c1c1",
    alignItems: "flex-start",
  },
  inputMessage: {
    color: "#555",
    textAlignVertical: "top",
    bottom: 2,
    height: "100%",
  },
  containerInput: {
    borderColor: "#c1c1c1",
  },
  input: {
    color: "#555",
  },
  button: {
    backgroundColor: BLUE_COLOR,
    borderRadius: 100,
    height: 50,
    marginVertical: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 14.5,
    color: "white",
    textAlign: "center",
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    color: "#444",
    marginTop: 20,
    fontSize: 17.5,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    marginBottom: 4,
    fontSize: 14,
    color: "#777",
  },
});
