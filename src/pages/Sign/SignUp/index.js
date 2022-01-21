import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, Alert } from "react-native";
import CustomInput from "../../../components/CustomInput";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "../../../contexts/auth";
import Style from "./style";
import Copyright from "../../../components/Copyright";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomAvatar from "../../../components/CustomAvatar";
import { maskPhone } from "../../../utils/masks";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const titlePage = "É novo por aqui? Cadastre-se";

export default ({ navigation }) => {
  const { signUp, loadingApi } = useAuth();
  const [check, setCheck] = useState(false);

  const [user, setUser] = useState({
    name: "eduardo",
    email: "eduardo_alvez51@outlook.com",
    phone_number: "16997057588",
    password: "123456",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setUser({
        ...user,
        image: result.uri,
      });
    }
  };

  const handlerPress = () => {
    if (check) signUp(user, navigation);
    else Alert.alert("Aviso", "Para continuar aceite os termos");
  };

  return (
    <ScrollView style={Style.container} contentContainerStyle={Style.content}>
      <Image source={require("../../../../assets/header/SignUp.jpg")} style={Style.image} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={Style.icon}
      />

      <View style={Style.body}>
        <Text style={Style.title}>{titlePage}</Text>

        <CustomAvatar
          handlerPress={pickImage}
          item={
            user.image ||
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
          }
        />

        <CustomInput
          placeholder='Qual seu nome?'
          size={16}
          type={FontAwesome}
          name={"user"}
          value={user.name}
          onChangeText={text =>
            setUser({
              ...user,
              name: text,
            })
          }
        />

        <CustomInput
          placeholder='Seu celular?'
          size={18}
          lenght={15}
          type={FontAwesome}
          name={"mobile"}
          value={user.phone_number}
          onChangeText={text =>
            setUser({
              ...user,
              phone_number: maskPhone(text),
            })
          }
        />

        <CustomInput
          placeholder='Melhor e-mail para contato?'
          size={16}
          type={FontAwesome}
          name={"envelope"}
          value={user.email}
          onChangeText={text =>
            setUser({
              ...user,
              email: text,
            })
          }
        />

        <CustomInput
          placeholder='Cadastre uma senha...'
          size={16}
          type={FontAwesome}
          name={"lock"}
          secureTextEntry
          value={user.password}
          onChangeText={text =>
            setUser({
              ...user,
              password: text,
            })
          }
        />

        <CheckBox
          onPress={() => setCheck(!check)}
          checked={check}
          title={"Aceitar política de privacidade e termos e condições"}
          textStyle={{
            color: "white",
            fontSize: 14,
          }}
          center
          size={28}
          containerStyle={{
            width: "95%",
            backgroundColor: "transparent",
            borderWidth: 0,
            marginTop: 0,
            marginBottom: 10,
          }}
          checkedIcon={<MaterialIcons name='check-box' size={28} color={"white"} />}
          uncheckedIcon={<MaterialIcons name='check-box-outline-blank' size={28} color='white' />}
        />

        <CustomButton
          onPress={handlerPress}
          loadingApi={loadingApi}
          containerStyle={Style.button}
          titleStyle={Style.buttonText}
          title={"Cadastrar"}
        />
      </View>

      <Copyright display={2} />
    </ScrollView>
  );
};
