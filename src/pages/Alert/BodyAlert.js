import React from "react";
import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { PRIMARY_COLOR, BLUE_COLOR } from "../../utils/variables";
import ListAlert from "./ListAlert";

const BodyAlert = ({
  data = [
    {
      text: "odsadaslçdksdçlfãsdkjfçladsjfçls",
    },
    {
      text: "odsadaslçdksdçlfãsdkjfçladsjfçls",
    },
  ],
}) => {
  const header = () => (
    <>
      <View style={styles.header}>
        <View style={styles.before} />
        <View style={styles.headerContent}>
          <View style={styles.headerHide}>
            <Text>25/04/2021 - 12:08hsss</Text>
            <Text>Alerta 1</Text>
            <Text>bla bla bla bla bla bla</Text>
          </View>
          <View style={styles.headerValue}>
            <Text>
              R$ 490,00 <Text>/mês</Text>
            </Text>
            <Text>Até 8% de desconto exclusivo</Text>
          </View>
        </View>
      </View>
      {separator()}
    </>
  );

  const separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps={"always"}
        ListHeaderComponent={header}
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
  header: {
    backgroundColor: "#FFF",
    elevation: 3,
    borderRadius: 10,
    flexDirection: "row",
  },
  headerContent: {
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerHide: {
    flex: 0.5,
    marginRight: 10,
  },
  headerValue: {
    flex: 0.5,
  },
  before: {
    backgroundColor: BLUE_COLOR,
    width: 4,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  separator: {
    height: 15,
  },
  containerScroll: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexGrow: 1,
  },
});

export default BodyAlert;
