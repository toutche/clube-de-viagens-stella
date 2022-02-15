import React, { useState } from "react";
import { Platform, View, StyleSheet, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CustomIcon from "../../components/CustomIcon";
import { BLUE_COLOR, LIGHT_BLUE, YELLOW_COLOR } from "../../utils/variables";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

const Card = ({ plan, isPlan = false }) => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    api
      .post("/plano/get", { id: plan.id })
      .then(({ data }) => {
        navigation.navigate({
          name: "Checkout",
          params: {
            data: data,
          },
          merge: true,
        });
      })
      .catch(e => console.log(e))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 200),
      );
  };

  return (
    <View>
      <LinearGradient start={[1, 0.5]} colors={[plan.colors[1], plan.colors[0]]} style={styles.top}>
        <View style={styles.header}>
          <View style={[styles.stamp, { backgroundColor: plan.colors[2] }]}>
            {!isPlan ? (
              <View
                style={{
                  backgroundColor: plan.colors[3],
                  width: "70%",
                  height: "70%",
                  borderRadius: 999,
                }}
              />
            ) : (
              <Image
                style={styles.stampIcon}
                source={{
                  uri: user.images.crown,
                }}
              />
            )}
          </View>
          <View>
            <Text style={styles.name}>{plan.name}</Text>
            <Text style={styles.amount}>
              Assinatura R${plan.amount} <Text>/mês</Text>
            </Text>
          </View>
          {!isPlan && (
            <CustomIcon
              loadingApi={loading}
              onPress={handlePress}
              size={26}
              type={Entypo}
              name={"chevron-right"}
              containerStyle={styles.chevron}
            />
          )}
        </View>
        <View style={styles.discount}>
          <View>
            <Text style={[styles.package, { fontSize: 16 }]}>
              Pacote {"> "}{" "}
              <Text style={{ fontSize: 14, textDecorationLine: "line-through" }}>
                {plan?.item_amount}
              </Text>{" "}
              <Text style={styles.iconBall}>●</Text>{" "}
              <Text style={{ fontSize: 14 }}>{plan?.item_amount_discount}</Text>
            </Text>
          </View>

          <View style={styles.right}>
            <Text
              style={{
                fontSize: 18,
                color: BLUE_COLOR,
                marginHorizontal: Platform.OS === "ios" ? 3 : undefined,
              }}>
              │
            </Text>
            <View>
              <Text style={[styles.discountPercent, { bottom: -1.5 }]}>
                Até {parseInt(plan?.discount)}% de
              </Text>
              <Text style={[styles.discountPercent, { top: -1.5 }]}>desconto exclusivo</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottom}>
        <View style={styles.contentBottom}>
          <Image
            style={styles.iconCurrentPlan}
            source={{
              uri: user.images["world-plan"],
            }}
          />
          <Text style={styles.summary}>{plan?.summary}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconCurrentPlan: {
    width: 50,
    height: 50,
  },
  contentBottom: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(18,170,235,0.25)",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  summary: {
    flex: 1,
    color: LIGHT_BLUE,
    fontSize: 14,
    marginLeft: 10,
  },
  chevron: {
    position: "absolute",
    right: 0,
    width: 45,
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "white",
  },
  iconBall: {
    color: BLUE_COLOR,
  },
  package: {
    color: "white",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  discountPercent: {
    fontSize: 11,
    color: "white",
  },
  top: {
    backgroundColor: YELLOW_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 7,
    alignItems: "center",
  },
  stamp: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  stampIcon: {
    width: "80%",
    height: "80%",
  },
  discount: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: LIGHT_BLUE,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  amount: {
    fontSize: 15,
    color: "#e1e1e1",
  },
  name: {
    fontSize: 22,
    color: "white",
  },
});

export default Card;
