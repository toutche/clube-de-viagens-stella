import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import CustomButton from "../../components/CustomButton";
import Hide from "../../components/Hide";
import FavoriteIcon from "../../components/FavoriteIcon";
import ShareIcon from "../../components/ShareIcon";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../utils/variables";

const HeaderDetailsPackages = ({ item, navigation, shareOpen }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.img }} />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={styles.icon}
      />

      <Hide containerStyle={styles.hide} />

      <FavoriteIcon containerStyle={styles.favorite} />

      <ShareIcon shareOpen={shareOpen} containerStyle={styles.share} />

      <View style={styles.content}>
        <View style={styles.price_differenceView}>
          <Text style={styles.price_difference}>Economize até R$ {item.price_difference}</Text>
        </View>

        <Text
          style={{
            color: "#287dfd",
            fontSize: 14,
            marginBottom: -4,
            marginTop: -2,
          }}>
          A partir de
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "#777",
              fontSize: 16,
              textDecorationLine: "line-through",
            }}>
            R$ {item.price_discount}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "#287dfd",
              marginHorizontal: 2,
            }}>
            ●
          </Text>

          <Text
            style={{
              color: "#287dfd",
              fontSize: 16,
            }}>
            R$ {item.price}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#287dfd",
              bottom: 1,
            }}>
            │
          </Text>

          <View
            style={{
              bottom: 1.5,
            }}>
            <Text
              style={{
                fontSize: 10,
                marginBottom: -2,
                color: "#287dfd",
              }}>
              por
            </Text>
            <Text
              style={{
                fontSize: 10,
                marginTop: -2,
                color: "#287dfd",
              }}>
              pessoa
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#777",
            fontSize: 13,
            marginTop: -4,
          }}>
          Preço exclusivo para assinantes
        </Text>

        <CustomButton
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={"Reservar Agora"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  price_differenceView: {
    backgroundColor: LIGHT_BLUE,
    position: "absolute",
    height: 25,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: -13,
  },
  price_difference: {
    color: "white",
    fontSize: 11.5,
    textAlign: "center",
  },
  headerTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 12.5,
  },
  content: {
    top: -50,
    marginBottom: -12,
    borderRadius: 20,
    elevation: 5,
    width: "90%",
    paddingTop: 15,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  button: {
    height: 45,
    width: "70%",
    alignSelf: "center",
    bottom: -45 / 2,
    elevation: 5,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "#287dfd",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    color: "white",
  },
  icon: {
    left: 5,
    top: 30,
    padding: 10,
    position: "absolute",
  },
  hide: {
    position: "absolute",
    top: 45,
    right: 15,
    backgroundColor: "rgba(232,188,13,.7)",
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  favorite: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 100,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  share: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 155,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.1,
  },
});

export default HeaderDetailsPackages;
