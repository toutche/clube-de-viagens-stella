import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";

const CustomPicker = ({ isVisiblePicker, closePicker, setIndex, dataPicker = [] }) => {
  return (
    <Modal
      animationType={"fade"}
      onRequestClose={closePicker}
      visible={isVisiblePicker}
      transparent
      statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closePicker}>
        <View style={styles.container}>
          <View style={[styles.content, { backgroundColor: "white" }]}>
            {dataPicker.map((i, k) => {
              return (
                <View style={styles.item} key={k}>
                  <TouchableOpacity
                    onPress={() => {
                      setIndex(i?.number);
                      closePicker();
                    }}
                    style={styles.button}>
                    <Text style={[styles.text]}>
                      {i?.number}x de {i?.price}
                    </Text>
                  </TouchableOpacity>
                  {k + 1 !== dataPicker.length && (
                    <View style={{ height: 1.5, backgroundColor: "#d1d1d1" }} />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 8,
    width: "100%",
    height: undefined,
  },
  item: {
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    fontSize: 14.5,
  },
});

export default CustomPicker;
