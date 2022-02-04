import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Platform,
} from "react-native";
import Dot from "../Dot";

const Carousel = ({ data }) => {
  const { width } = useWindowDimensions();

  const ref = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewChanged = useRef(({ viewableItems, changed }) => {
    setIndex(viewableItems[0]?.index);
  }, []);

  const [index, setIndex] = useState(0);

  const renderMap = () => {
    return data.map((_, i) => {
      if (i < data.length) return <Dot key={i} index={i} currentIndex={index} carousel />;
    });
  };

  return (
    <>
      <View
        style={{
          zIndex: 1,
          flexDirection: "row",
          position: "absolute",
          bottom: Platform.OS === "ios" ? 145 : 150,
          alignSelf: "center",
          alignItems: "center",
        }}>
        {renderMap()}
      </View>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.container, { width }]}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewChanged.current}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    width: "100%",
    height: undefined,
    aspectRatio: 1.1,
  },
});

export default Carousel;
