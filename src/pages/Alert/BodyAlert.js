import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { PRIMARY_COLOR, BLUE_COLOR, FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE, LIGHT_BLUE } from "../../utils/variables";
import ListAlert from "./ListAlert";
import api from "../../services/api";
import moment from "moment";

const BodyAlert = ({ }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/alerts/list").then(({ data }) => {
      console.log(data)
      setData(data);
    });
  }, []);

  const header = () => (
    <>
      <View style={styles.header}>
        <View style={styles.before} />
        <View style={styles.header_content}>
          <View style={styles.header_hide}>
            <Text style={styles.date}>
              {moment(data?.plan?.created_at).format("DD/MM/YYYY - HH:MM")}hs
            </Text>
            <View style={styles.current_plan}>
              <Text style={styles.current_plan_text}>{data?.plan?.name}</Text>
            </View>
            <Text style={styles.header_contracted}>
              Plano contratado em {moment(data?.plan?.created_at).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={styles.header_value}>
            <Text style={styles.text_value}>
              R$ 490,00 <Text style={styles.text_no_bold}>/mês</Text>
            </Text>
            <View style={styles.view_discount}>
              <Text style={styles.text_discount}>
                Até 8% <Text style={styles.text_no_bold}>de desconto exclusivo</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );

  const separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.alerts}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps={"always"}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.headerComponentStyle}
        ItemSeparatorComponent={separator}
        contentContainerStyle={styles.containerScroll}
        renderItem={({ item, index }) => ListAlert({ item, index })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flexGrow: 1,
  },
  text_discount: {
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    fontSize: 8,
    textAlign: 'center',
    color: 'white'
  },
  view_discount: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  text_value: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    fontFamily: FONT_DEFAULT_BOLD_STYLE
  },
  text_no_bold: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontWeight: 'normal'
  },
  current_plan: {
    borderRadius: 999,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    left: -4,
    height: 36,
    width: 170,
    marginVertical: 4
  },
  current_plan_text: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14.5,
    color: '#f1f1f1'
  },
  header_contracted: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#777",
    fontSize: 10
  },
  headerComponentStyle: {
    marginBottom: 16,
  },
  header: {
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 4,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  header_content: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  header_hide: {
    flex: 0.55,
  },
  header_value: {
    flex: 0.45,
    marginLeft: 4,
    marginRight: 4,
  },
  before: {
    backgroundColor: BLUE_COLOR,
    width: 4,
    height: "100%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  separator: {
    height: 16,
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 18,
  },
  date: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#777",
    fontSize: 13,
  },
  description: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13,
    color: "#777",
  },
});

export default BodyAlert;
