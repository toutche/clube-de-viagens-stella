import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import ListItem from "../../components/ListItem";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useFilter } from "../../contexts/filter";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const BodyDashboard = ({ display = 1, navigation, shareOpen }) => {
  const {
    user: { plan },
  } = useAuth();

  const {
    filterUpdate,
    orderPrice,
    segmentsIds,
  } = useFilter()

  const total = useRef();
  const page = useRef(1);
  const feed = useRef([]);

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadPage = async (pageNumber = page.current, shouldRefresh = false, update = false) => {
    if (feed.current?.length === total.current && !update) return;
    if (loading) return;

    setLoading(true);

    let ids
    for (let i = 0; i < segmentsIds.length; i++) {
      if (ids)
        ids = ids + `,${segmentsIds[i]}`
      else
        ids = `&segments_ids=${segmentsIds[i]}`
    }

    const response = await api.get(`/pacote-viagem/listar?per_page=10&page=${pageNumber}&order_price=${ids ? orderPrice + ids : orderPrice}`);
    const totalItems = response.data.data.pagination.total_registers;
    const data = response.data.data.packages;


    setTimeout(() => {
      total.current = totalItems;
      page.current = pageNumber + 1;
      feed.current = shouldRefresh ? data || [] : [...feed.current, ...data];

      setLoading(false);
    }, 100);
  };

  const refreshList = async () => {
    feed.current = [];
    setRefreshing(true);

    await loadPage(1, true, true);

    setRefreshing(false);
  };

  useDidMountEffect(() => {
    feed.current = [];
    loadPage(1, true, true);
  }, [filterUpdate, orderPrice])

  useEffect(() => {
    loadPage();
  }, []);

  const Item = (title, icon, name, size, left, button) => {
    const Icon = icon;
    return (
      <TouchableOpacity style={[button, { marginVertical: left === 2 ? 10 : 0 }]}>
        <Icon name={name} size={size} color={PRIMARY_COLOR} />
        <Text style={[styles.textButton, { marginLeft: left }]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const ListHeaderItemAccommodation = () => (
    <>
      <View style={styles.containerButtons}>
        {Item("Destino", MaterialCommunityIcons, "map-marker-outline", 22, 0, styles.button)}
        {Item(
          "Data - Check-in - Check-out",
          MaterialCommunityIcons,
          "calendar-month",
          22,
          2,
          styles.button,
        )}
        {Item(
          `${0} Adulto - ${0} Criança - ${0} Quarto`,
          SimpleLineIcons,
          "user",
          18,
          3,
          styles.button,
        )}
      </View>
      <Text style={styles.text}>Confirmação e preço sujeito a disponibilidade</Text>
    </>
  );

  const ListHeaderItemPackages = () => (
    <>
      <View style={styles.containerButtons}>
        {Item("Origem", MaterialCommunityIcons, "map-marker-outline", 22, 0, styles.button)}
        {Item("Destino", MaterialCommunityIcons, "map-marker-outline", 22, 2, styles.button)}
        <View style={styles.twoButtons}>
          {Item(`Quantos dias?`, MaterialCommunityIcons, "calendar-month", 22, 3, styles.buttonRow)}
          {Item(`Qual mês?`, MaterialCommunityIcons, "calendar-month", 22, 3, styles.buttonRow)}
        </View>
      </View>
      <Text style={styles.textPackage}>Destinos mais procurados</Text>
    </>
  );

  const ListLoading = () => (
    <ActivityIndicator style={{ marginVertical: 30 }} size={"large"} color={PRIMARY_COLOR} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={feed.current}
        ListHeaderComponent={display === 1 ? ListHeaderItemAccommodation : ListHeaderItemPackages}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && ListLoading}
        contentContainerStyle={{ paddingTop: 30 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"always"}
        renderItem={({ item, index }) =>
          ListItem({ item, index, display, navigation, shareOpen, plan })
        }
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
    marginVertical: 15,
    textAlign: "center",
    textTransform: "uppercase",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
    color: "#777",
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
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    width: "48%",
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    width: "100%",
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
  },
  textButton: {
    textAlign: "center",
    fontSize: 13.5,
    color: PRIMARY_COLOR,
  },
});

export default BodyDashboard;
