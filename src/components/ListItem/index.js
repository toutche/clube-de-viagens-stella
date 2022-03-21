import React from "react";
import { View, StyleSheet, Image, Text, Platform } from "react-native";
import CustomButton from "../../components/CustomButton";
import FavoriteIcon from "../FavoriteIcon";
import ShareIcon from "../../components/ShareIcon";
import {
  BLUE_COLOR,
  FONT_DEFAULT_BOLD_STYLE,
  FONT_DEFAULT_STYLE,
  GREEN_COLOR,
  LIGHT_BLUE,
} from "../../utils/variables";
import Hide from "../Hide";

const ListItem = ({ item, index, display, navigation, shareOpen, plan }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.img }} />

      {plan && <Hide containerStyle={styles.hideIcon} item={item} />}

      <FavoriteIcon
        favorite={item.favorite}
        containerStyle={[styles.favoriteIcon, !plan && { top: 20 }]}
        id_package={item.id}
      />

      <ShareIcon shareOpen={shareOpen} containerStyle={[styles.shareIcon, !plan && { top: 75 }]} />

      <View style={styles.bodyItem}>
        <View style={styles.priceItem}>
          <View style={styles.price_differenceView}>
            <Text style={styles.price_difference}>Economize até R$ {item.price_difference}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text style={styles.price_discount}> R${item.price}</Text>

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
                fontSize: 15,
              }}>
              R$ {item.price_discount}
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
              fontSize: 12,
              marginTop: Platform.OS === "ios" ? -2 : -4,
            }}>
            Preço exclusivo para assinantes
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            marginHorizontal: 15,
            borderColor: "#e1e1e1",
            marginBottom: 10,
            paddingBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: FONT_DEFAULT_STYLE,
              fontSize: 16.5,
              textAlign: "center",
              color: "#444",
            }}>
            {item.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontFamily: FONT_DEFAULT_STYLE,
                color: BLUE_COLOR,
                fontSize: 16,
                textAlign: "center",
              }}>
              {item.date.display}
            </Text>
            {item.number_days && (
              <Text
                style={{
                  fontFamily: FONT_DEFAULT_STYLE,
                  color: "#777",
                  fontSize: 16,
                  textAlign: "center",
                }}>
                <Text
                  style={{
                    fontSize: Platform.OS === "ios" ? 15 : 14,
                    marginHorizontal: Platform.OS === "ios" ? -5 : undefined,
                  }}>
                  │
                </Text>
                {item.number_days}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.containerButtons}>
          <CustomButton
            containerStyle={[
              styles.button,
              {
                backgroundColor: "white",
                borderColor: "#d1d1d1",
                borderWidth: 1,
                flex: 0.35,
              },
            ]}
            titleStyle={[
              styles.textButton,
              {
                color: BLUE_COLOR,
              },
            ]}
            title={"Detalhes"}
            onPress={() =>
              navigation.navigate({
                name: display ? "DetailsContractedPackages" : "DetailsPackages",
                params: {
                  id: item.id,
                },
                merge: true,
              })
            }
          />
          <CustomButton
            containerStyle={[
              styles.button,
              {
                backgroundColor: BLUE_COLOR,
                flex: 0.55,
              },
            ]}
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

        <Text style={styles.textLatest}>
          {item.latest_information.text}
          <Text
            style={[
              styles.textLatest,
              {
                fontFamily: FONT_DEFAULT_BOLD_STYLE,
                marginRight: Platform.OS === "ios" ? 5 : undefined,
              },
            ]}>
            {` R$${item.latest_information.total_amount_people}`}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  hideIcon: {
    position: "absolute",
    top: 10,
    right: 30,
    backgroundColor: "rgba(232,188,13,.3)",
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIcon: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 30,
    top: 65,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  shareIcon: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 30,
    top: 120,
    position: "absolute",
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 11.5,
    textAlign: "center",
  },
  price_discount: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#777",
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  priceItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: "white",
    position: "absolute",
    paddingTop: 15,
    paddingBottom: 5,
    elevation: 5,
    width: "85%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: -30,
  },
  bodyItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: "82%",
    top: -30,
    paddingTop: 35,
    paddingBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 2,
  },
  textLatest: {
    fontFamily: FONT_DEFAULT_STYLE,
    marginHorizontal: 7,
    color: GREEN_COLOR,
    textAlign: "center",
    fontSize: 13,
    marginTop: 7,
    marginBottom: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
    color: "#777",
  },
  image: {
    width: "90%",
    height: undefined,
    aspectRatio: 1.3,
    borderRadius: 20,
  },
  containerButtons: {
    height: 40,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  button: {
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 15,
    color: "white",
  },
});

export default ListItem;
