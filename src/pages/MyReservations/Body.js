import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListPackages from "./ListPackages";

export default ({ itens = [{}, {}, {}], navigation, openModal }) => {
  const Separator = () => <View style={styles.separator} />;

  const EmptyList = () => <Text style={styles.text}>Ainda não há reservas ativas.</Text>

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps={"always"}
        renderItem={({ item, index }) =>
          ListPackages({ item, index, navigation, openModal })
        }
        ListEmptyComponent={EmptyList}
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
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  separator: {
    height: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: "#777",
  },
});
