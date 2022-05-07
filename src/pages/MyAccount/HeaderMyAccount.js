import React from "react";
import { StyleSheet, View, Text, Image, Platform, ImageBackground } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";
import { FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import Logo from "../../../assets/LogoRR.png";
import CardBackground from "../../../assets/img/carimbos.png"
import { useAuth } from "../../contexts/auth";
import { maskDocument } from '../../utils/masks';

const HeaderMyAccount = ({ navigation }) => {
  const { user } = useAuth();

  console.log(user);

  const getDate = (date) => new Date(date).toLocaleDateString()

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
          style={{ borderRadius: 20, flex: 1}}
          imageStyle={{ borderRadius: 20}} 
          source={CardBackground} >
        
        {/*<View style={{marginHorizontal: 8, marginVertical: 32}}> */}

        {/* <Image style={{ borderRadius: 20, height: 260, flex: 1}} source={CardBackground} /> */}
        
        <View style={{marginHorizontal: 8, marginTop: 8, marginBottom: 20}}>
          <Image style={styles.logo} source={Logo} />
          
          <View style={{flexDirection: "row", paddingHorizontal: 16}}>
            <View style={{marginRight: 16}}>
              <View style={{flexDirection: "row"}}>
                <Image style={{height: 70, aspectRatio: 0.3, resizeMode: 'contain'}} source={{ uri: user.images.brackets.left }} />
                <View style={{borderRadius: 100, borderColor: "rgba(0, 0, 0, 0.2)", borderWidth: 8, height: 70, width: 70, justifyContent: "center", alignItems: "center"}}>
                  <Image style={styles.image} source={{ uri: user.image }} />
                </View>
                <Image style={{height: 70, aspectRatio: 0.3, resizeMode: 'contain'}} source={{ uri: user.images.brackets.right }} />
              </View>
              {user.plan !== false && 
                <View style={{backgroundColor: user.plan.color, borderRadius: 100, padding: 4, marginTop: 8, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <View style={{backgroundColor: "#696969", borderRadius: 100, height: 22, width: 22, justifyContent: "center", alignItems: "center", marginRight: 8}}>
                    <View
                      style={{
                        backgroundColor: user.plan.color,
                        width: 16,
                        height: 16,
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <Text style={styles.planText}>{user.plan.name.replace('Plano', '')}</Text>
                </View>
              }
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.cardText, {color: '#000', marginBottom: 8}]}>{(user.name + " " + user.last_name).toLocaleUpperCase()}</Text>
              <Text style={[styles.cardText, {marginBottom: 8}]}>{`CPF: ${maskDocument(user.document)}`}</Text>
              <Text style={[styles.cardText]}>
                { 
                  user.plan 
                  ? `ASSINANTE DESDE ${getDate(user.created_at)}` 
                  : `MEMBRO DESDE ${getDate(user.created_at)}`
                }
              </Text>
            </View>
          </View>
        </View>
        </ImageBackground>
      </View>
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
    width: 140,
    height: 80,
    alignSelf: "center",
    marginBottom: 8,
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
    borderRadius: 100
  },
  cardText: {
    fontFamily: FONT_DEFAULT_STYLE,
    backgroundColor: "#fff", 
    padding: 8, 
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
