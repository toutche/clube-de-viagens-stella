import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import AlertCovid from "../../components/AlertCovid";
import { useAuth } from "../../contexts/auth";
import { useFilter } from "../../contexts/filter";
import { BLUE_COLOR, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import Map from "./Map";
import api from "../../services/api";
import ListItem from "../../components/ListItem";
import { Entypo } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";

export default ({ item, display = 0, navigation }) => {
  const {
    user: { plan },
  } = useAuth();

  const { filterUpdate, setFilterCheck, orderPrice, segmentsIds } = useFilter();
  const total = useRef(null);
  const page = useRef(1);
  const listRef = useRef(null);

  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(false);

  function backAction() {
    navigation.navigate("Dashboard");
    return true;
  }

  useEffect(() => {
    loadPage();

    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  useDidMountEffect(() => {
    setFeed([]);
    loadPage(1, true, true);
  }, [filterUpdate, orderPrice, display]);

  const loadPage = async (pageNumber = page.current, shouldRefresh = false, update = false) => {
    if (feed?.length === total.current && !update) return;
    if (loading) return;

    setLoading(true);

    let idCategory = item.segments;
    let url = `/pacote-viagem/listar?per_page=10&page=1&segments_ids=${idCategory}`;

    // let url = `/pacote-viagem/listar?per_page=10&page=${pageNumber}`;

    const response = await api.get(url);

    const totalItems = response.data.data.pagination.total_registers;
    const data = response.data.data.packages;

    total.current = totalItems;
    page.current = pageNumber + 1;

    setFeed(shouldRefresh ? data || [] : [...feed, ...data]);

    setLoading(false);
  };

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
            fontFamily: FONT_DEFAULT_STYLE,
            fontSize: 18,
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
              fontSize: 15.5,
              textAlign: "center",
            }}>
            {item.subname}
            {item.number_days && <Text style={styles.pipe}>│ </Text>}
            {item.number_days && (
              <Text
                style={{
                  fontFamily: FONT_DEFAULT_STYLE,
                  color: "#777",
                  fontSize: 16,
                  textAlign: "center",
                }}>
                {item.number_days}
              </Text>
            )}
          </Text>
        </View>

        {item.hotel?.room ? (
          <Text
            style={{
              fontFamily: FONT_DEFAULT_STYLE,
              color: "#777",
              fontSize: 15.5,
              textAlign: "center",
            }}>
            {item.hotel.room}
          </Text>
        ) : null}
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
        <Text style={styles.title}>Comodidades do estabelecimento</Text>

        {item.facilities.map((i, n) => {
          return (
            <View key={n} style={{ flexDirection: "row", marginBottom: 8 }}>
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode={"contain"}
                source={{ uri: i.icon }}
              />
              <Text
                style={{
                  fontFamily: FONT_DEFAULT_STYLE,
                  marginLeft: 4,
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
          <View key={n}>
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
                <Text style={{ fontSize: 11, color: BLUE_COLOR, fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.type}
                </Text>
                <Text style={{ fontSize: 11, color: "#444", fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.date}
                </Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR, fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.origin_hour}
                </Text>
                <Text style={{ fontSize: 11, color: "#444", fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.origin_airport}
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 60,
                  marginHorizontal: 10,
                }}>
                <Text style={{ fontSize: 11, color: BLUE_COLOR, fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.stops}
                </Text>
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
                <Text style={{ fontSize: 11, color: BLUE_COLOR, fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.destiny_hour}
                </Text>
                <Text style={{ fontSize: 11, color: "#444", fontFamily: FONT_DEFAULT_STYLE }}>
                  {i.destiny_airport}
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                backgroundColor: "#d1d1d1",
                marginHorizontal: n !== 0 ? 15 : 20,
                marginTop: 15,
              }}
            />
          </View>
        );
      })}

      {item.alert_covid && <AlertCovid text_alert={item.text_alert} />}

      {item.day_by_day.length > 0 && (
        <View style={styles.details}>
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(currentIndex ? false : true);
            }}
            style={styles.cardContainer}
            activeOpacity={30}>
            <View style={styles.headerCard}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto name='map' size={24} color='black' style={{ marginRight: 10 }} />
                <Text>Confira nosso roteiro</Text>
              </View>
              <Entypo
                name={currentIndex ? "chevron-up" : "chevron-down"}
                size={30}
                color={"##d1d1d1"}
              />
            </View>
            {item.day_by_day.map((i, n) => (
              <View style={styles.card}>
                {currentIndex && (
                  <View style={{ borderTopWidth: 0.3, paddingTop: 20 }}>
                    <Text style={styles.heading}>Dia {i.day}</Text>
                    <Text style={styles.body}>{i.description}</Text>
                  </View>
                )}
              </View>
            ))}
          </TouchableOpacity>
        </View>
      )}

      <Map name={item.subname} address={item.address} region={item.region} />

      <View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}>
          Sugestões de viagens
        </Text>
        <FlatList
          data={feed}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadPage()}
          horizontal
          contentContainerStyle={{
            paddingTop: 20,
            height: 550,
          }}
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps={"always"}
          renderItem={({ item, index }) => (
            <ListItem {...{ item, index, display, navigation, plan }} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  pipe: {
    color: "#777",
    fontFamily: FONT_DEFAULT_STYLE,
    marginHorizontal: Platform.OS === "ios" ? -3 : undefined,
  },
  details: {
    width: "95%",
    alignSelf: "center",
    // paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 15.5,
    marginBottom: 15,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: BLUE_COLOR,
    fontSize: 15,
    marginTop: 8,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    marginTop: 2,
    color: "#777",
  },
  cardContainer: { flexGrow: 1, borderWidth: 1, borderRadius: 10, borderColor: "#d1d1d1" },
  // card: { alignItems: "center", justifyContent: "center" },
  heading: {
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
    color: PRIMARY_COLOR,
  },
  body: {
    fontSize: 14,
    lineHeight: 20 * 1,
    textAlign: "left",
    marginHorizontal: 20,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    paddingBottom: 20,
  },
  headerCard: {
    height: 70,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
