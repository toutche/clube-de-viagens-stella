import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import { FONT_DEFAULT_STYLE, LIGHT_BLUE, PRIMARY_COLOR } from "../../utils/variables";
import { LinearGradient } from "expo-linear-gradient";
import CustomIcon from "../../components/CustomIcon";
import { Entypo } from "@expo/vector-icons";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

const ListItem = ({ item, index, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handlePress = () => {
    setLoading(true);
    api
      .post("/plano/get", { id: item.id })
      .then(({ data }) => {
        navigation.navigate({
          name: "CheckoutPlan",
          params: { data },
          merge: true,
        });
      })
      .catch(e => console.log("erro:", e))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 200),
      );
  };

  return (
    <LinearGradient start={[1, 0.5]} colors={[item.colors[1], item.colors[0]]} style={styles.card}>
      <View style={styles.content}>
        <View
          style={[styles.crown, { borderColor: item.colors[2], backgroundColor: item.colors[3] }]}>
          {item.plan ? (
            <Image style={styles.stampIcon} source={{ uri: user.images.crown }} />
          ) : null}
        </View>

        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>{item.name}</Text>
          <Text style={[styles.text, { fontSize: 13.5 }]}>
            {item.price}
            <Text style={[styles.text, { color: "#d1d1d1" }]}> {item.price_text}</Text>
          </Text>

          <View style={styles.container_discount}>
            <Text style={styles.text_discount}>
              {item.phrase_discount}
              <Text style={[styles.text_discount, { color: "#d1d1d1" }]}>
                {item.phrase_discount_after}
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {!item.plan ? (
        <CustomIcon
          loadingApi={loading}
          onPress={handlePress}
          size={26}
          type={Entypo}
          name={"chevron-right"}
          containerStyle={styles.chevron}
        />
      ) : null}
    </LinearGradient>
  );
};

export default ({ data = [], navigation }) => {
  const actualPlan = data.map(function (item) {
    return item.plan ? item.plan : "";
  });

  const headerList = () => <Text style={styles.title}>{actualPlan}</Text>;

  const footerList = () => {
    return(
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "blue",
          alignSelf: "center",
          marginTop: 15,
          marginBottom: 50,
          borderRadius: 10,
        }}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
          source={{
            uri: "https://images-store.us-southeast-1.linodeobjects.com/Gif-Banner-Planos.gif",
          }}
        />
      </View>
    );
  };

  const separatorList = () => <View style={{ height: 12 }} />;

  return (
    <View style={styles.container_bg}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        bounces={false}
        style={styles.container}
        ListHeaderComponent={headerList}
        ListFooterComponent={footerList}
        ItemSeparatorComponent={separatorList}
        contentContainerStyle={styles.container_list}
        renderItem={({ item, index }) => <ListItem {...{ item, index, navigation }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  stampIcon: {
    width: 40,
    height: 40,
  },
  container_discount: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  text_discount: {
    fontSize: 12,
    color: "#f1f1f1",
  },
  text: {
    color: "#f1f1f1",
    fontFamily: FONT_DEFAULT_STYLE,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  container_list: {
    paddingHorizontal: "5%",
    backgroundColor: "#e6e6e6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
  },
  container_bg: {
    backgroundColor: "#e6e6e6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    color: "#555",
    paddingTop: 24,
    paddingBottom: 16,
    fontSize: 16,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  chevron: {
    width: 45,
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "white",
  },
  crown: {
    width: 50,
    height: 50,
    borderRadius: 999,
    borderWidth: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
});
