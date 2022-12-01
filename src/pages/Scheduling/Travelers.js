import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import QuantifyTravel from "../../components/QuantifyTravel";
import { BLUE_COLOR, FONT_DEFAULT_STYLE } from "../../utils/variables";
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Travelers = ({ onPress, users = [] }) => {
  // const renderItem = text => {
  //   return (
  //     <View style={styles.item}>
  //       <AntDesign name='checkcircleo' size={16} color='#287dfd' />
  //       <Text style={styles.itemText}>{text}</Text>
  //     </View>
  //   );
  // };

  const [showRegisterChildrenModal, setShowRegisterChildrenModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Viajantes</Text>

        {users.length > 0 && <QuantifyTravel users={users} />}

        <CustomButton
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={`Nomear Viajantes`}
          onPress={onPress}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Crianças menores de 12 anos</Text>

        {users.length > 0 && <QuantifyTravel users={users} />}

        <TouchableOpacity
          style={styles.viewRegisterChildren}
          onPress={() => setShowRegisterChildrenModal(!showRegisterChildrenModal)}
        >
          <CustomButton
            containerStyle={styles.button2}
            titleStyle={styles.textButton}
            title={`Nomear Criança(s)`}
            onPress={() => setShowRegisterChildrenModal(!showRegisterChildrenModal)}
          />
          <View style={styles.icon}>
            {
              showRegisterChildrenModal
                ? <SimpleLineIcons
                  name="arrow-up"
                  size={24}
                  color={BLUE_COLOR}
                />
                : <SimpleLineIcons
                  name="arrow-down"
                  size={24}
                  color={BLUE_COLOR}
                />
            }
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "99%",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  viewRegisterChildren: {
    borderColor: BLUE_COLOR,
    borderWidth: 1.5,
    alignItems: "center",
    flexDirection: 'row',
    borderRadius: 100,
    height: 50,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    borderColor: BLUE_COLOR,
    borderWidth: 1.5,
    alignItems: "center",
    flexDirection: 'row',
    borderRadius: 100,
    height: 50,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
  textButton: {
    fontSize: 14.5,
    color: BLUE_COLOR,
    textAlign: "center",
  },
  separator: {
    width: 10,
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#e1e1e1",
    borderRadius: 100,
    width: "100%",
    justifyContent: "center",
    paddingVertical: 15,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: BLUE_COLOR,
    fontFamily: FONT_DEFAULT_STYLE,
    marginLeft: 5,
    fontSize: 13,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#444",
    fontSize: 16,
    marginTop: 5,
  },
});

export default Travelers;
