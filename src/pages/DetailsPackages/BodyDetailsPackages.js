import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import AlertCovid from "../../components/AlertCovid";
import { BLUE_COLOR } from "../../utils/variables";
import Map from "./Map";

const BodyDetailsPackages = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#d1d1d1",
          marginBottom: 10,
          marginHorizontal: 15,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
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
              color: BLUE_COLOR,
              fontSize: 16,
              textAlign: "center",
            }}>
            {item.subname}
          </Text>
          {item.number_days && <Text style={styles.pipe}>│ </Text>}
          {item.number_days && (
            <Text
              style={{
                color: "#777",
                fontSize: 16,
                textAlign: "center",
              }}>
              {item.number_days}
            </Text>
          )}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginHorizontal: 15,
          paddingBottom: 5,
          flexWrap: "wrap",
          borderBottomWidth: 1,
          borderColor: "#d1d1d1",
        }}>
        {item.facilities.map(i => {
          return (
            <View key={i.description} style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode={"contain"}
                source={{ uri: i.icon }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  marginRight: 15,
                  textAlignVertical: "center",
                  fontSize: 14.5,
                  color: "#444",
                }}>
                {i.description}
              </Text>
            </View>
          );
        })}
      </View>

      {item.flights.map((i, n) => {
        return (
          <View key={i.date}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 12,
              }}>
              <Image
                style={{ width: 22, height: 22, left: -5 }}
                resizeMode={"contain"}
                source={{ uri: i.icon }}
              />

              <View style={{ marginLeft: 2 }}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR }}>{i.type}</Text>
                <Text style={{ fontSize: 11, color: "#444" }}>{i.date}</Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR }}>{i.origin_hour}</Text>
                <Text style={{ fontSize: 11, color: "#444" }}>{i.origin_airport}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 60,
                  marginHorizontal: 10,
                }}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR }}>{i.stops}</Text>
                <Image
                  style={{
                    width: "100%",
                    height: 11,
                  }}
                  resizeMode={"contain"}
                  source={{ uri: i.icon_divisor }}
                />
              </View>

              <View style={{}}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR }}>{i.destiny_hour}</Text>
                <Text style={{ fontSize: 11, color: "#444" }}>{i.destiny_airport}</Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: "#d1d1d1",
                marginHorizontal: n !== 0 ? 15 : 20,
                marginTop: 15,
                marginBottom: n !== 0 ? 15 : 0,
              }}
            />
          </View>
        );
      })}

      {item.alert_covid && <AlertCovid />}

      <View style={styles.details}>
        <Text style={styles.title}>Comodidades do estabelecimento</Text>

        <Text style={styles.subTitle}>Internet</Text>
        <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

        <Text style={styles.subTitle}>Estacionamento e transporte</Text>
        <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

        <Text style={styles.subTitle}>Estacionamento e transporte</Text>
        <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>

        <Text style={styles.subTitle}>Estacionamento e transporte</Text>
        <Text style={styles.subText}>Disponivel em todos os quartos: Wi-fi gratis</Text>
      </View>

      <Map address={item.address} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pipe: {
    marginHorizontal: Platform.OS === "ios" ? 3 : undefined,
  },
  details: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    color: "#333",
    fontSize: 15,
  },
  text: {
    fontSize: 12.5,
    color: "#777",
    marginTop: 2,
    marginBottom: 10,
  },
  subTitle: {
    color: "#287dfd",
    fontSize: 15,
    marginTop: 5,
  },
  subText: {
    marginTop: 2,
    color: "#777",
  },
});

export default BodyDetailsPackages;
