import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import CustomIcon from "../../components/CustomIcon";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const RenderSlides = ({
  item,
  index,
  pressCheck,
  pressClose,
  checkItem,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  width,
}) => {
  const { height } = useWindowDimensions();
  const renderModelOne = () => (
    <View
      style={{
        backgroundColor: "#FFF",
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 10,
        alignItems: "center",
      }}>
      <ImageBackground
        imageStyle={{
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        resizeMode={"cover"}
        source={{ uri: item.poster }}
        style={{
          alignItems: "center",
          width: "100%",
          height: height / 2.9,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        <Text style={styles.toast}>{item.toast}</Text>
      </ImageBackground>

      <Text style={styles.text}>{item.text}</Text>

      <View style={styles.viewButtons}>
        <CustomIcon
          onPress={pressClose}
          type={AntDesign}
          color={"#e10717"}
          size={30}
          name={"close"}
          containerStyle={styles.icon}
        />
        <CustomIcon
          onPress={pressCheck}
          type={AntDesign}
          color={"#287dfd"}
          size={30}
          name={"check"}
          containerStyle={styles.icon}
        />
      </View>
    </View>
  );

  const renderModelTwo = () => (
    <View
      style={{
        backgroundColor: "#FFF",
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 10,
        alignItems: "center",
      }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
      <Text style={styles.note}>{item.note}</Text>
      <Text style={styles.activitiesText}>
        {item.activitiesText + " "}
        <Text style={styles.subActivitiesText}>({item.activities.length})</Text>
      </Text>

      <ScrollView style={styles.scrollViewMap}>
        {item.activities.map((it, id) => {
          return (
            <CheckBox
              onPress={() => checkItem(id)}
              key={id}
              title={it.name}
              checked={it.check}
              textStyle={{
                color: it.check ? "#287dfd" : "#c9c9c9",
                fontSize: 16,
                fontWeight: "normal",
              }}
              size={50}
              containerStyle={{
                width: "100%",
                backgroundColor: "white",
                borderWidth: 0,
                marginVertical: -7,
              }}
              checkedIcon={
                <MaterialCommunityIcons name='check-box-outline' size={28} color={"#287dfd"} />
              }
              uncheckedIcon={
                <MaterialCommunityIcons name='checkbox-blank-outline' size={28} color='#c9c9c9' />
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <View
      style={{
        marginHorizontal: width * 0.1,
        borderRadius: 14,
      }}>
      {index !== 2 ? renderModelOne() : renderModelTwo()}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "90%",
    color: "#626262",
    fontSize: 17,
    paddingTop: 5,
    paddingHorizontal: 15,
    textAlign: "center",
  },
  toast: {
    backgroundColor: "rgba(0,0,0,0.75)",
    textAlign: "center",
    color: "#cacac9",
    paddingVertical: 3.5,
    paddingHorizontal: 15,
    position: "absolute",
    borderRadius: 100,
    bottom: 5,
  },
  viewButtons: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    bottom: 7,
    position: "absolute",
  },
  icon: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 100,
    padding: 5,
  },
  title: {
    paddingTop: 10,
    fontSize: 17,
    color: "#333333",
  },
  subTitle: {
    color: "#777",
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
  },
  note: {
    color: "#333",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#d1d1d1",
  },
  activitiesText: {
    fontSize: 17,
    paddingVertical: 5,
    color: "#333",
  },
  subActivitiesText: {
    color: "#777",
  },
  scrollViewMap: {
    flex: 1,
    width: "95%",
    marginBottom: 5,
  },
});

export default RenderSlides;
