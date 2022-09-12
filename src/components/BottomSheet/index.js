import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useFilter } from "../../contexts/filter";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { IS_IOS } from "../../utils/consts";
import { maskOnlyNumbers } from "../../utils/masks";
import { AntDesign } from "@expo/vector-icons";

const initial_form = {
  days: "",
  mouth: "",
  year: "",
  checkIn: "",
  checkOut: "",
  adult: "",
  children: "",
  ages: [],
};

export default ({ isVisible, onClose, id }) => {
  const {
    filterDays,
    filterMouth,
    filterYear,
    filterPeople,
    setFilterPeople,
    setFilterDays,
    setFilterMouth,
    setFilterYear,
  } = useFilter();

  const [form, setForm] = useState({
    days: filterDays || "",
    mouth: filterMouth || "",
    year: filterYear || "",
    adult: filterPeople?.adult || "",
    children: filterPeople?.children || "",
    ages: [],
  });

  const _renderDays = (
    <>
      <TextInput
        placeholder='Quantos dias?'
        placeholderTextColor={"#ccc"}
        keyboardType={"numeric"}
        maxLength={3}
        onChangeText={text =>
          setForm({
            ...form,
            days: maskOnlyNumbers(text),
          })
        }
        value={form.days}
        style={styles.input}
      />
    </>
  );

  const _renderMouthYear = (
    <>
      <TextInput
        placeholder='MM'
        placeholderTextColor={"#ccc"}
        keyboardType={"numeric"}
        maxLength={2}
        onChangeText={text =>
          setForm({
            ...form,
            mouth: maskOnlyNumbers(text),
          })
        }
        value={form.mouth}
        style={styles.input}
      />
      <TextInput
        placeholder='AAAA'
        placeholderTextColor={"#ccc"}
        keyboardType={"numeric"}
        maxLength={4}
        onChangeText={text =>
          setForm({
            ...form,
            year: maskOnlyNumbers(text),
          })
        }
        value={form.year}
        style={styles.input}
      />
    </>
  );

  const _renderAgeInputs = () => {
    const inputs = [];

    for (let i = 0; i < form.children; i++) {
      inputs.push(
        <View
          key={i}
          style={[styles.input, { flexDirection: "row", justifyContent: "space-between" }]}>
          <AntDesign
            name='minuscircle'
            size={24}
            color={PRIMARY_COLOR}
            onPress={() => {
              const ages = form.ages.map((age, index) =>
                index === i && age > 2 ? (age -= 1) : age,
              );
              setForm({
                ...form,
                ages,
              });
            }}
          />
          <TextInput
            placeholder={"Idade"}
            placeholderTextColor={"#ccc"}
            keyboardType={"numeric"}
            maxLength={2}
            value={form.ages[i].toString()}
            onChangeText={undefined}
          />
          <AntDesign
            name='pluscircle'
            size={24}
            color={PRIMARY_COLOR}
            onPress={() => {
              const ages = form.ages.map((age, index) =>
                index === i && age < 11 ? (age += 1) : age,
              );
              setForm({
                ...form,
                ages,
              });
            }}
          />
        </View>,
      );
    }

    return (
      <>
        {form.ages.length > 0 && (
          <Text style={{ fontFamily: FONT_DEFAULT_STYLE, marginBottom: 8 }}>
            Idades das crianças
          </Text>
        )}
        {inputs}
      </>
    );
  };

  const _renderPeople = (
    <>
      <TextInput
        placeholder='Quantos adultos?'
        placeholderTextColor={"#ccc"}
        keyboardType={"numeric"}
        maxLength={2}
        onChangeText={text =>
          setForm({
            ...form,
            adult: maskOnlyNumbers(text),
          })
        }
        value={form.adult}
        style={styles.input}
      />
      <TextInput
        placeholder='Quantas crianças?'
        placeholderTextColor={"#ccc"}
        keyboardType={"numeric"}
        maxLength={2}
        onChangeText={text => {
          const ages = [];

          for (let i = 0; i < parseInt(text); i++) {
            ages.push(2);
          }

          setForm({
            ...form,
            children: maskOnlyNumbers(text),
            ages: ages,
          });
        }}
        value={form.children}
        style={styles.input}
      />
      {_renderAgeInputs()}
    </>
  );

  const handlePress = () => {
    if (id === "days") {
      setFilterDays(Number(form.days));
    } else if (id === "mouth/year") {
      setFilterMouth(Number(form.mouth));
      setFilterYear(Number(form.year));
    } else if (id === "people") {
      setFilterPeople({
        adult: Number(form.adult),
        children: Number(form.children),
      });
    }
    setForm(initial_form);
    onClose();
  };

  const _renderBottomSheet = () => {
    if (id === "days") return _renderDays;
    else if (id === "mouth/year") return _renderMouthYear;
    else if (id === "people") return _renderPeople;
  };

  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={isVisible}
      animationType='fade'
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <>
          <KeyboardAvoidingView behavior='height' style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.content}>
                <ScrollView
                  contentContainerStyle={{ alignItems: "center" }}
                  style={{ width: "100%" }}>
                  {_renderBottomSheet()}
                </ScrollView>
                <TouchableOpacity onPress={handlePress} style={styles.button_container}>
                  <Text style={styles.button_text}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "flex-end",
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container_input_date: {
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "#d1d1d1",
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    includeFontPadding: false,
  },
  text_input_date: {
    includeFontPadding: false,
    fontSize: 14.5,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  input: {
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "#d1d1d1",
    fontSize: 14.5,
    paddingVertical: IS_IOS ? 8 : 4,
    paddingHorizontal: 12,
    marginBottom: 8,
    width: "90%",
    includeFontPadding: false,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  button_container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    height: 50,
    marginTop: 8,
    marginBottom: 4,
    backgroundColor: PRIMARY_COLOR,
  },
  button_text: {
    color: "white",
    fontSize: 14.5,
    fontFamily: FONT_DEFAULT_STYLE,
  },
});
