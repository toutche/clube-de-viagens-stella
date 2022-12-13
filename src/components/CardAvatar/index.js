import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomAvatar from "../CustomAvatar";
import BackgroundCard from "../../../assets/img/carimbos.png";
import Logo from "../../../assets/LogoRR.png";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";
import { useAuth } from "../../contexts/auth";

const CardAvatar = ({ data }) => {
  const { user } = useAuth();

  const renderText = (text, style) => {
    return (
      <View style={style}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundCard}
        imageStyle={styles.image}
        style={styles.imageContainer}>
        <Image style={styles.logo} source={Logo} />
        <View style={{ flexDirection: "row", flex: 1, alignItems: "flex-end", marginBottom: 15 }}>
          <View style={styles.containerAvatar}>
            <CustomAvatar
              item={
                "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
              }
            />
          </View>
          <View style={styles.containerText}>
            {renderText(user?.name, styles.name)}
            {renderText(user?.cpf, styles.cpf)}
            {renderText(data?.date_contracting_plan, styles.subscriber)}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  logo: {
    width: 130,
    height: 130,
    top: -20,
    position: "absolute",
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.8,
  },
  containerAvatar: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  containerText: {
    justifyContent: "center",
    flex: 0.92,
  },
  image: {
    borderRadius: 15,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    textTransform: "uppercase",
    fontSize: 12.5,
    color: "#555",
  },
  name: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  cpf: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 5,
    fontFamily: FONT_DEFAULT_STYLE,
  },
  subscriber: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
    fontFamily: FONT_DEFAULT_STYLE,
  },
});

export default CardAvatar;
