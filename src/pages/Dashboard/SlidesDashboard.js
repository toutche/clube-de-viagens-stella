import React, { memo, useState } from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

const SlidesDashboard = ({ filter = {}, data = [] }) => {
  const ListItem = ({ item, index }) => {
    const [check, setCheck] = useState(false);

    const handlerPress = () => {
      setCheck(!check);
    };

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={handlerPress}
          style={[styles.imageView, { borderColor: check ? "#f0c61e" : "white" }]}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        ListHeaderComponent={() => (
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() => alert("Filtrar")}
              style={[styles.imageView, { borderColor: "#f0c61e" }]}>
              <Image style={styles.image} source={{ uri: filter?.img }} />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.title}>
              {filter?.name}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={separator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentFlatlist}
        keyboardShouldPersistTaps={"always"}
        renderItem={({ item, index }) => <ListItem item={item} index={item} />}
      />
    </View>
  );
};

const separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    margin: 2,
  },
  imageView: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 100,
  },
  image: {
    height: 30,
    width: 30,
  },
  contentFlatlist: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    width: 65,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "white",
    fontSize: 13,
    marginTop: 2,
    width: "100%",
    textAlign: "center",
  },
});

export default memo(SlidesDashboard);
