import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";
import Banner from "../../components/Banner";
import ListItem from "../../components/ListItem";
import { CONTENT_OFFSET_THRESHOLD, FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useFilter } from "../../contexts/filter";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import ButtonFilter from "./ButtonFilter";
import CustomIcon from "../../components/CustomIcon";
import { FontAwesome } from "@expo/vector-icons";
import Calendar from "../../components/Calendar";
import { formatDateToBRL } from "../../utils";
import { AntDesign } from "@expo/vector-icons";

const BodyDashboard = ({
  display = 0,
  navigation,
  openAutoComplete,
  openBottomSheet,
  filterId,
}) => {
  const {
    user: { plan },
  } = useAuth();

  const {
    onFilterOriginDestiny,
    onFilterHotels,
    filterOrigin,
    filterDestiny,
    filterDays,
    filterMouth,
    filterYear,
    filterCheck,
    filterPeople,
    filterUpdate,
    setFilterCheck,
    orderPrice,
    segmentsIds,
  } = useFilter();
  const total = useRef(null);
  const page = useRef(1);
  const listRef = useRef(null);

  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);

  useEffect(() => {
    loadPage();
  }, []);

  useDidMountEffect(() => {
    setFeed([]);
    loadPage(1, true, true);
  }, [filterUpdate, orderPrice, display]);

  const loadPage = async (pageNumber = page.current, shouldRefresh = false, update = false) => {
    if (feed?.length === total.current && !update) return;
    if (loading) return;

    setLoading(true);

    if (display === 0) {
      let ids;
      for (let i = 0; i < segmentsIds.length; i++) {
        if (ids) ids = ids + `,${segmentsIds[i]}`;
        else ids = `&segments_ids=${segmentsIds[i]}`;
      }

      let url = `/pacote-viagem/listar?per_page=10&page=${pageNumber}&order_price=${
        ids ? orderPrice + ids : orderPrice
      }`;

      if (filterDestiny?.key) {
        if (filterDestiny?.key && filterOrigin?.key) {
          url += `&destiny_id=${filterDestiny?.value2}&origin_id=${filterOrigin?.value2}`;
        } else {
          url += `&destiny_id=${filterDestiny?.key}`;
        }

        if (filterDays) url += `&qtd_days=${filterDays}`;
      }
      if (filterMouth && filterYear) url += `&month=${filterMouth}&year=${filterYear}`;

      const response = await api.get(url);
      const totalItems = response.data.data.pagination.total_registers;
      const data = response.data.data.packages;

      total.current = totalItems;
      page.current = pageNumber + 1;

      if (totalItems === 0)
        Alert.alert(
          "Que pena ):",
          "O destino escolhido não está mais disponível, refaça a sua busca!",
        );

      setFeed(shouldRefresh ? data || [] : [...feed, ...data]);
    } else if (display === 1) {
      if (
        filterDestiny?.key &&
        filterCheck?.in &&
        filterCheck?.out &&
        filterPeople?.adult !== undefined &&
        filterPeople?.children !== undefined
      ) {
        let city_code = String(filterDestiny.key);
        let start_date = String(filterCheck.in).split("/").reverse().join("-");
        let end_date = String(filterCheck.out).split("/").reverse().join("-");
        let qtd_people = String(filterPeople.adult);
        let qtd_children = String(filterPeople.children);

        let url = `/hotel/get/all?per_page=5&page=${pageNumber}&order_price=${orderPrice}&city_code=${city_code}&start_date=${start_date}&end_date=${end_date}&qtd_people=${qtd_people}&qtd_children=${qtd_children}`;

        const response = await api.post(url);
        const totalItems = response.data.pagination.total_registers;
        const data = response.data.hotels;

        total.current = totalItems;
        page.current = pageNumber + 1;
        setFeed(shouldRefresh ? data || [] : [...feed, ...data]);
      }
    }
    setLoading(false);
  };

  const refreshList = async () => {
    setFeed([]);
    setRefreshing(true);

    await loadPage(1, true, true);

    setRefreshing(false);
  };

  const ListHeaderItemHotels = () => (
    <>
      <View style={styles.containerButtons}>
        <ButtonFilter
          {...{
            title: `${filterDestiny?.value || "Destino"}`,
            iconName: "map-marker-outline",
            iconSize: 22,
            marginLeft: 2,
            style: styles.button,
            onPress: () => {
              filterId.current = "destiny";
              openAutoComplete();
            },
          }}
        />
        <ButtonFilter
          {...{
            title: `Data - ${formatDateToBRL(filterCheck?.in) || "Check-in"} - ${
              formatDateToBRL(filterCheck?.out) || "Check-out"
            }`,
            iconName: "calendar-month",
            iconSize: 22,
            marginLeft: 2,
            style: styles.button,
            onPress: async () => {
              filterId.current = "check";
              const response = await Calendar.show();

              if (response) {
                setFilterCheck({
                  in: response.start,
                  out: response.end,
                });
              }
            },
          }}
        />
        <ButtonFilter
          {...{
            title: `${filterPeople?.adult || 0} Adulto - ${filterPeople?.children || 0} Crianças`,
            iconName: "user",
            iconType: "SimpleLine",
            iconSize: 16,
            marginLeft: 4,
            style: styles.button,
            onPress: () => {
              filterId.current = "people";
              openBottomSheet();
            },
          }}
        />
        <ButtonFilter
          {...{
            title: "Buscar",
            iconName: "filter-outline",
            iconSize: 22,
            marginLeft: 2,
            style: [styles.button, { backgroundColor: PRIMARY_COLOR }],
            color: "white",
            onPress: onFilterHotels,
          }}
        />
      </View>
      <Text style={styles.textHotels}>Confirmação e preço sujeito a disponibilidade</Text>
    </>
  );

  const ListHeaderItemPackages = () => (
    <>
      <View style={styles.containerButtons}>
        <ButtonFilter
          {...{
            title: `${filterOrigin?.value || "Origem"}`,
            iconName: "map-marker-outline",
            iconSize: 22,
            marginLeft: 2,
            style: styles.button,
            onPress: () => {
              filterId.current = "origin";
              openAutoComplete();
            },
          }}
        />
        <ButtonFilter
          {...{
            title: `${filterDestiny?.value || "Destino"}`,
            iconName: "map-marker-outline",
            iconSize: 22,
            marginLeft: 2,
            style: styles.button,
            onPress: () => {
              filterId.current = "destiny";
              openAutoComplete();
            },
          }}
        />
        {/*<View style={styles.twoButtons}>*/}
        {/*<ButtonFilter {...{
            title: filterDays || "Quantos dias?",
            iconName: "calendar-month",
            iconSize: 22,
            marginLeft: 3,
            style: styles.buttonRow,
            onPress: () => {
              filterId.current = 'days'
              openBottomSheet()
            }
          }} />*/}
        <ButtonFilter
          {...{
            title: filterMouth && filterYear ? `${filterMouth}/${filterYear}` : "Qual mês/ano?",
            iconName: "calendar-month",
            iconSize: 22,
            marginLeft: 3,
            style: styles.buttonRow,
            onPress: () => {
              filterId.current = "mouth/year";
              openBottomSheet();
            },
          }}
        />
        {/*</View>*/}
        <ButtonFilter
          {...{
            title: "Buscar",
            iconName: "filter-outline",
            iconSize: 22,
            marginLeft: 2,
            style: [styles.button, { backgroundColor: PRIMARY_COLOR }],
            color: "white",
            onPress: onFilterOriginDestiny,
          }}
        />
      </View>
      <Text style={styles.textPackage}>Destinos mais procurados</Text>
    </>
  );

  const ListLoading = () => (
    <ActivityIndicator style={{ marginVertical: 30 }} size={"large"} color={PRIMARY_COLOR} />
  );

  async function openWhatsapp() {
    const response = await api.get("/links");
    const link = response.data.whatsapp;

    const result = await Linking.canOpenURL(link);
    if (result) await Linking.openURL(link);
    else
      Alert.alert("Aviso!", "Entre em contato pelo nosso email.", [
        {
          text: "Entre em Contato",
          onPress: () => navigation.navigate("Contact"),
        },
      ]);
  }

  // const openWhatsapp = async () => {
  //   // const url = `https://wa.me/5521993184756`;
  //   // let rotaLink = `/links`;
  //   // const response = await api.post(rotaLink);
  //   // console.log(response);
  //   // const result = await Linking.canOpenURL(url);
  //   // if (result) await Linking.openURL(url);
  //   // else Alert.alert("Aviso", "Confira se o Whatsapp está instalado no dispositivo");
  // };

  return (
    <View style={styles.container}>
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <TouchableOpacity
          onPress={() => {
            listRef.current.scrollToOffset({ offset: 0, animated: true });
          }}
          style={styles.scrollUpButton}>
          <AntDesign name='arrowup' size={32} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      )}
      <FlatList
        data={feed}
        ListHeaderComponent={display === 1 ? ListHeaderItemHotels : ListHeaderItemPackages}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading ? ListLoading : <Banner />}
        contentContainerStyle={{ paddingTop: 20 }}
        ref={listRef}
        onScroll={event => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
        renderItem={({ item, index }) => (
          <ListItem {...{ item, index, display, navigation, plan }} />
        )}
      />
      <CustomIcon
        size={35}
        color={"white"}
        type={FontAwesome}
        name={"whatsapp"}
        onPress={openWhatsapp}
        containerStyle={{
          width: 54,
          height: 54,
          backgroundColor: "#25D366",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e1e1",
  },
  textPackage: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 15,
    color: PRIMARY_COLOR,
    marginBottom: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },

  textHotels: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  containerButtons: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  twoButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    width: "100%",
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    width: "100%",
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 12,
  },
  scrollUpButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    bottom: 65,
    height: 55,
    margin: 10,
    justifyContent: "center",
    opacity: 0.55,
    position: "absolute",
    right: 0,
    width: 55,
    zIndex: 1,
  },
});

export default BodyDashboard;
