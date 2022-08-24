import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import api from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import CustomIcon from "../../components/CustomIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/CustomStatusBar";
import { PRIMARY_COLOR } from "../../utils/variables";
import { Video } from "expo-av";

export default ({ navigation, route: { params } }) => {
  const insets = useSafeAreaInsets();

  const video = React.useRef(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    api
      .get("/video")
      .then(res => {
        setUrl(res.data.video);
      })
      .catch(e => console.log(e));
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar />

      <CustomIcon
        onPress={goBack}
        size={30}
        type={AntDesign}
        name={"arrowleft"}
        containerStyle={[styles.icon, { top: insets.top + 8 }]}
      />

      <View style={styles.container}>
        {url && Platform.OS === "android" ? (
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: url }}
            shouldPlay={true}
            useNativeControls
            resizeMode='contain'
          />
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={"large"} color={PRIMARY_COLOR} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  icon: {
    top: 0,
    left: 12,
    zIndex: 999,
    position: "absolute",
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
});
