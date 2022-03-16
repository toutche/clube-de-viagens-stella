import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { PRIMARY_COLOR, BLUE_COLOR, FONT_DEFAULT_STYLE, FONT_DEFAULT_BOLD_STYLE, LIGHT_BLUE } from "../../utils/variables";
import api from "../../services/api";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";

const BodyAlert = ({ }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/alerts/list").then(({ data }) => {
      setData(data);
    });
  }, []);

  const _renderTypeOne = (item) => (
    <View style={[styles.container_item, { flexDirection: 'row', justifyContent: 'space-between' }]}>
      <View>
        <Text style={styles.created_at}>{moment(item.created_at).format("DD/MM/YYYY")} - {moment(item.created_at).format("HH:MM")}hs</Text>
        <LinearGradient
          start={[1, 0.5]}
          colors={[item?.plan_color2, item?.plan_color1]}
          style={styles.container_plan}>
          <View style={styles.container_card}>
            <View style={[styles.plan_circle_external, { backgroundColor: item.plan_color3 }]}>
              <View style={[styles.plan_circle_internal, { backgroundColor: item.plan_color4 }]} />
            </View>
            <Text style={styles.text_plan}>{item.headline}</Text>
          </View>
        </LinearGradient>
        <Text style={styles.sub_headline}>{item?.sub_headline}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.plan_price}>{item?.plan_price} <Text style={styles.font_default}>/mês</Text></Text>
        <View style={styles.container_plan_discount}>
          <Text style={styles.plan_discount}>{item?.plan_discount} <Text style={styles.font_default}>{item?.plan_discount2}</Text></Text>
        </View>
      </View>
    </View>
  );

  const _renderTypeTwo = (item) => {
    return (
      <View style={styles.container_item}>
        <Text style={styles.created_at}>{moment(item.created_at).format("DD/MM/YYYY")} - {moment(item.created_at).format("HH:MM")}hs</Text>
        <Text style={styles.headline}>{item?.headline}</Text>
        <Text style={[styles.sub_headline, { fontSize: 13 }]}>{item?.sub_headline}</Text>
      </View>
    );
  };

  const separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.alerts}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps={"always"}
        ItemSeparatorComponent={separator}
        bounces={false}
        contentContainerStyle={styles.container_list}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.content_list}>
              <View style={styles.before} />
              {item.plan
                ? _renderTypeOne(item)
                : _renderTypeTwo(item)
              }
            </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  container_plan_discount: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  font_default: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontWeight: 'normal'
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plan_discount: {
    fontSize: 9,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  plan_price: {
    fontSize: 15,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    marginBottom: 2
  },
  headline: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 18,
    color: '#333',
  },
  created_at: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 13.5,
    color: '#555',
  },
  sub_headline: {
    fontSize: 10,
    color: '#555',
    fontFamily: FONT_DEFAULT_STYLE,
  },
  text_plan: {
    color: '#e1e1e1',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: FONT_DEFAULT_STYLE
  },
  container_card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  plan_circle_external: {
    width: 24,
    height: 24,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plan_circle_internal: {
    width: 15,
    height: 15,
    borderRadius: 999
  },
  separator: {
    height: 16,
  },
  container_plan: {
    paddingVertical: 10,
    marginVertical: 6,
    borderRadius: 999,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container_list: {
    flexGrow: 1,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  before: {
    width: 4,
    height: '100%',
    backgroundColor: BLUE_COLOR
  },
  content_list: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 4,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden'
  },
  container_item: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#333",
    fontSize: 18,
  },

});

export default BodyAlert;
