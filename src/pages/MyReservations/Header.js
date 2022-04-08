import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import CustomStatusBar from "../../components/CustomStatusBar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProfileAvatar from "../../components/ProfileAvatar";
import { PRIMARY_COLOR } from "../../utils/variables";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomStatusBar />

      <View style={styles.header}>
        <ProfileAvatar isShow={true} />

        <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={AntDesign}
          name={"arrowleft"}
          containerStyle={styles.iconLeft}
        />

        <CustomIcon
          size={26}
          onPress={() => navigation.goBack()}
          type={Ionicons}
          name={"notifications-outline"}
          containerStyle={styles.iconRight}
        />
      </View>
      <View style={styles.bottom}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sun_white_icon.svg/1200px-Sun_white_icon.svg.png",
          }}
          style={styles.icon}
        />
        <Text style={styles.text}>Minhas Reservas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  header: {
    width: "100%",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 18,
  },
  text: {
    fontSize: 17,
    color: "white",
    opacity: 0.9,
    marginLeft: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLeft: {
    left: 5,
    padding: 10,
    position: "absolute",
  },
  iconRight: {
    right: 5,
    padding: 10,
    position: "absolute",
  },
});
