import React from "react";
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import { Ionicons } from '@expo/vector-icons';

const item =
  "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg";

const ProfileAvatar = ({ leftSize = 55, isShow = false }) => {
  const { user, verifyUser } = useAuth();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.left,
          {
            width: leftSize,
            height: leftSize,
          },
        ]}>
        <Image style={styles.image} source={{ uri: user.image || 'https://toutche.com.br/clube_de_ferias/maquina-fotografica.png' }} />
      </View>
      <View style={styles.right}>
        <View style={{flexDirection: "row"}}>
          <View>
            {isShow && user.plan && (
              <View style={[styles.viewHide, { backgroundColor: user.plan.color }]}>
                <Text style={styles.iconHide}>●</Text>
                <Text style={[styles.textHide]}>{user?.plan?.name?.split(" ")[1]}</Text>
              </View>
            )}
            <Text
              style={[styles.title, isShow && user.plan && { top: 2.5 }]}>{`Olá ${user.name}`}</Text>
            <Text style={[styles.subTitle, isShow && user.plan && { top: 1 }]}>
              Crédito: R${user?.wallet?.credit || 0}
            </Text>
          </View>

          <TouchableOpacity style={{marginLeft: 16}} onPress={verifyUser}>
            <Ionicons name="refresh" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewHide: {
    position: "absolute",
    top: -14,
    left: 22,
    backgroundColor: "#e8bc0d",
    paddingHorizontal: 8,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconHide: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 7,
    color: "white",
    marginRight: 1,
  },
  textHide: {
    fontSize: 10.5,
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    marginLeft: 1,
  },
  title: {
    fontSize: 11,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    color: "white",
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 11,
    color: "white",
  },
  image: {
    flex: 1,
    borderRadius: 100,
  },
  left: {
    zIndex: 2,
    borderWidth: 2,
    borderRadius: 100,
    padding: 3,
    borderColor: "#f0c61e",
    backgroundColor: PRIMARY_COLOR,
    elevation: 6,
  },
  right: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    right: 20,
    marginRight: -20,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#ff1324",
    borderWidth: 2,
    elevation: 5,
    borderColor: "rgba(0,0,0,0.01)",
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
  },
  textBold: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
});

export default ProfileAvatar;
