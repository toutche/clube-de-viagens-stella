import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";
import CustomButton from "../../components/CustomButton";
import Hide from "../../components/Hide";
import FavoriteIcon from "../../components/FavoriteIcon";
import ShareIcon from "../../components/ShareIcon";
import CustomIcon from "../../components/CustomIcon";
import { AntDesign } from "@expo/vector-icons";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, LIGHT_BLUE, PRIMARY_COLOR } from "../../utils/variables";
import Carousel from "../../components/Carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFilter } from "../../contexts/filter";

export default ({ item, navigation, plan }) => {
  const insets = useSafeAreaInsets();
  const { autoScroll, setAutoScroll } = useFilter();

  return (
    <View style={styles.container}>
      <Carousel data={item.gallery} />

      <CustomIcon
        onPress={() => {
          autoScroll && setAutoScroll(false);
          navigation.goBack();
          // navigation.navigate("Dashboard");
        }}
        size={30}
        type={AntDesign}
        color={PRIMARY_COLOR}
        name={"arrowleft"}
        containerStyle={[styles.icon, { top: insets.top + 8 }]}
      />

      {plan && <Hide containerStyle={[styles.hideIcon, { top: insets.top + 15 }]} item={item} />}

      <FavoriteIcon
        item={item}
        favorite={item.favorite}
        containerStyle={[styles.favorite, { top: insets.top + (plan ? 70 : 30) }]}
      />

      <ShareIcon
        item={item}
        option={0}
        containerStyle={[styles.share, { top: insets.top + (plan ? 125 : 85) }]}
      />

      <Image
        style={[styles.responsible_tourism, { top: insets.top + (plan ? 180 : 140) }]}
        source={{ uri: item.icon_responsible_tourism }}
      />

      <View style={styles.content}>
        <View style={styles.price_differenceView}>
          <Text style={styles.price_difference}>
            Economize até {item?.currency || "R$"} {item.price_difference}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: FONT_DEFAULT_STYLE,
            color: BLUE_COLOR,
            fontSize: 14,
            marginBottom: Platform.OS === "ios" ? -2 : -4,
            marginTop: -1,
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
              fontFamily: FONT_DEFAULT_STYLE,
              color: "#777",
              fontSize: 16,
              textDecorationLine: "line-through",
            }}>
            {item?.currency || "R$"} {item.price}
          </Text>

          <Text
            style={{
              fontSize: 13,
              fontFamily: FONT_DEFAULT_STYLE,
              color: BLUE_COLOR,
              marginHorizontal: 2,
            }}>
            ●
          </Text>

          <Text
            style={{
              fontFamily: FONT_DEFAULT_STYLE,
              color: BLUE_COLOR,
              fontSize: 16,
            }}>
            {item?.currency || "R$"} {item.price_discount}
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: BLUE_COLOR,
              bottom: 1,
              fontFamily: FONT_DEFAULT_STYLE,
              marginHorizontal: Platform.OS === "ios" ? -3 : undefined,
            }}>
            │
          </Text>

          <View
            style={{
              bottom: 1.5,
            }}>
            <Text
              style={{
                fontFamily: FONT_DEFAULT_STYLE,
                fontSize: 10,
                marginBottom: -2,
                color: BLUE_COLOR,
              }}>
              por
            </Text>
            <Text
              style={{
                fontFamily: FONT_DEFAULT_STYLE,
                fontSize: 10,
                marginTop: -2,
                color: BLUE_COLOR,
              }}>
              pessoa
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: FONT_DEFAULT_STYLE,
            color: "#777",
            fontSize: 13,
            marginTop: Platform.OS === "ios" ? -2 : -4,
          }}>
          Preço exclusivo para assinantes
        </Text>
        <Text
          style={{
            fontFamily: FONT_DEFAULT_STYLE,
            color: "#777",
            fontSize: 10,
            marginVertical: 6,
            textAlign: "center",
          }}>
          Os valores e disponibilidade estão sujeitos a alteração sem aviso prévio
        </Text>
      </View>
      <CustomButton
        containerStyle={styles.button}
        titleStyle={styles.textButton}
        onPress={() => {
          navigation.navigate({
            name: plan ? "Scheduling" : "PlanScreen",
            params: {
              item,
            },
            merge: true,
          });
        }}
        title={plan ? "Reservar Agora" : "Faça parte do clube"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
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
    top: -20,
    marginBottom: -12,
    borderRadius: 20,
    elevation: 5,
    width: "90%",
    paddingTop: 15,
    paddingBottom: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  button: {
    height: 45,
    width: "70%",
    alignSelf: "center",
    bottom: -15,
    elevation: 5,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "#287dfd",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 17,
    color: "white",
  },
  icon: {
    left: 5,
    padding: 10,
    position: "absolute",
  },
  responsible_tourism: {
    height: 60,
    width: 60,
    borderRadius: 100,
    right: 10,
    position: "absolute",
  },
  hideIcon: {
    position: "absolute",
    right: 15,
    backgroundColor: "rgba(232,188,13,.4)",
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
