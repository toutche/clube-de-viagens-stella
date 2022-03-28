import React, { memo, useState } from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useFilter } from "../../contexts/filter";
import { FONT_DEFAULT_STYLE, PRIMARY_COLOR } from "../../utils/variables";

const SlidesDashboard = ({ filter = {}, data = [] }) => {
  const {
    filterIds,
    orderPrice,
    segmentsIds,
    setSegmentsIds,
    toggleFilter,
    toggleOrder
  } = useFilter()

  const ListItem = ({ item, index }) => {

    const handlerPress = () => {
      const array = segmentsIds.slice()
      if (array.indexOf(item.id) !== -1) {
        array.splice(array.indexOf(item.id), 1);
      } else {
        array.push(item.id)
      }

      setSegmentsIds(array)
    };

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={handlerPress}
          style={[styles.imageView, { borderColor: segmentsIds.indexOf(item.id) !== -1 ? "#f0c61e" : "white" }]}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {item?.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.filter_button}>
        <TouchableOpacity
          onPress={toggleFilter}
          style={[styles.imageView, { borderColor: filterIds ? "#f0c61e" : "white" }]}>
          <Image style={styles.image} source={{ uri: filter?.img }} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {filter?.name}
        </Text>
      </View>

      <View style={styles.order_button}>
        <TouchableOpacity
          onPress={toggleOrder}
          style={[styles.imageView, { borderColor: orderPrice === 'desc' ? "#f0c61e" : "white" }]}>
          <Image style={styles.image} source={{ uri: filter?.img }} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {filter?.name}
        </Text>
      </View>

      <FlatList
        data={data}
        horizontal
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
    flexDirection: 'row'
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
    paddingRight: 8,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    width: 65,
  },
  filter_button: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    width: 65,
    paddingLeft: 8,
  },
  order_button: {
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
