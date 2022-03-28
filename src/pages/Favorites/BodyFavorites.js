import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import ListItem from "../../components/ListItem";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

const BodyFavorites = ({ display = 1, navigation, shareOpen }) => {
  const {
    user: { plan },
  } = useAuth();

  const total = useRef();
  const feed = useRef([]);

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadPage = async (shouldRefresh = false) => {
    if (feed.current.length === total.current) return;
    if (loading) return;

    setLoading(true);

    const response = await api.get(`/desejos/listar`);

    const totalItems = response.data.length;
    const data = response.data;

    setTimeout(() => {
      total.current = totalItems;
      feed.current = shouldRefresh ? data : [...feed.current, ...data];

      setLoading(false);
    }, 100);
  };

  const refreshList = async () => {
    feed.current = [];
    setRefreshing(true);

    await loadPage(true);

    setRefreshing(false);
  };

  useEffect(() => {
    loadPage();
  }, []);

  const ListHeaderItemAccommodation = () => (
    <Text style={styles.text}>Confirmação e preço sujeito a disponibilidade</Text>
  );

  const ListLoading = () => (
    <ActivityIndicator style={{ marginVertical: 30 }} size={"large"} color={PRIMARY_COLOR} />
  );

  const EmptyList = () => <Text style={styles.text}>Ainda não há favoritos.</Text>

  return (
    <View style={styles.container}>
      <FlatList
        data={feed.current}
        ListHeaderComponent={ListHeaderItemAccommodation}
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
          ListItem({ item, index, display, navigation, shareOpen, plan, refreshList })
        }
        ListEmptyComponent={EmptyList}
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
    marginTop: 15,
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

export default BodyFavorites;
