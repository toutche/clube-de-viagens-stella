import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";
import { PRIMARY_COLOR } from "../../utils/variables";

const item =
  "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg";

const ProfileAvatar = ({ leftSize = 55, isShow = false }) => {
  const { user } = useAuth();
  //console.log(user.plan);
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
        <Image style={styles.image} source={{ uri: item }} />
      </View>
      <View style={styles.right}>
        {isShow && user.plan && (
          <View style={styles.viewHide}>
            <Text style={styles.iconHide}>●</Text>
            <Text style={styles.textHide}>{user?.plan?.name?.split(" ")[1]}</Text>
          </View>
        )}
        <Text
          style={[styles.title, isShow && user.plan && { top: 3.5 }]}>{`Olá ${user.name}`}</Text>
        <Text style={[styles.subTitle, isShow && user.plan && { top: 1 }]}>
          Crédito: R${parseFloat(user?.wallet?.credit).toFixed(2) || 0}
        </Text>
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
    top: -9.5,
    left: 22,
    backgroundColor: "#e8bc0d",
    paddingHorizontal: 8,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconHide: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
    marginRight: 1,
  },
  textHide: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "white",
    marginLeft: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  subTitle: {
    top: -1.5,
    fontSize: 12,
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
});

export default ProfileAvatar;
