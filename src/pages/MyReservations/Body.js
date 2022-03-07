import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListPackages from "./ListPackages";

export default ({ itens = [{}, {}, {}], navigation, openModal }) => {
  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps={"always"}
        renderItem={({ item, index }) => ListPackages({ item, index, navigation, openModal })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6ff",
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  separator: {
    height: 10,
  },
});
