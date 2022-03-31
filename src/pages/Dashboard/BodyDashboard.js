import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import ListItem from "../../components/ListItem";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useFocusEffect } from '@react-navigation/native';
import { useFilter } from "../../contexts/filter";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import ButtonFilter from "./ButtonFilter";

const BodyDashboard = ({ display = 1, navigation, shareOpen, openAutoComplete, filterId }) => {
  const {
    user: { plan },
  } = useAuth();

  const {
    filterOrigin,
    filterDestiny,
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

    const url_with_destiny_origin = filterDestiny?.key && filterOrigin?.key
      ? `&origin_id=${filterOrigin?.key}&destiny_id=${filterDestiny?.key}`
      : filterDestiny?.key && !filterOrigin?.key ? `&destiny_id=${filterDestiny?.key}`
        : null
    console.log(`/pacote-viagem/listar?per_page=10&page=${pageNumber}&order_price=${ids ? orderPrice + ids : orderPrice}` + url_with_destiny_origin)
    const response = await api.get(`/pacote-viagem/listar?per_page=10&page=${pageNumber}&order_price=${ids ? orderPrice + ids : orderPrice}` + url_with_destiny_origin);
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

  const ListHeaderItemAccommodation = () => (
    <>
      <View style={styles.containerButtons}>

      </View>
      <Text style={styles.text}>Confirmação e preço sujeito a disponibilidade</Text>
    </>
  );

  const ListHeaderItemPackages = () => (
    <>
      <View style={styles.containerButtons}>
        <ButtonFilter {...{
          title: `${filterOrigin?.value || 'Origem'}`,
          iconName: "map-marker-outline",
          iconSize: 22,
          marginLeft: 2,
          style: styles.button,
          onPress: () => {
            filterId.current = 'origin'
            openAutoComplete()
          }
        }} />
        <ButtonFilter {...{
          title: `${filterDestiny?.value || 'Destino'}`,
          iconName: "map-marker-outline",
          iconSize: 22,
          marginLeft: 2,
          style: styles.button,
          onPress: () => {
            filterId.current = 'destiny'
            openAutoComplete()
          }
        }} />
        <View style={styles.twoButtons}>
          <ButtonFilter {...{
            title: "Quantos dias?",
            iconName: "calendar-month",
            iconSize: 22,
            marginLeft: 3,
            style: styles.buttonRow,
            onPress: () => { }
          }} />
          <ButtonFilter {...{
            title: "Qual mês?",
            iconName: "calendar-month",
            iconSize: 22,
            marginLeft: 3,
            style: styles.buttonRow,
            onPress: () => { }
          }} />
        </View>
        <ButtonFilter {...{
          title: "Filtrar",
          iconName: "filter-outline",
          iconSize: 22,
          marginLeft: 2,
          style: [styles.button, { backgroundColor: PRIMARY_COLOR }],
          color: 'white',
          onPress: () => loadPage(1, true, true)
        }} />
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
        contentContainerStyle={{ paddingTop: 20 }}
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
    marginBottom: 12,
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
    marginBottom: 12
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
    marginBottom: 12
  },
});

export default BodyDashboard;
