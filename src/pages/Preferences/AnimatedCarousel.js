import React, { useRef, useState } from "react";
import { FlatList, useWindowDimensions, Animated, View, StyleSheet, Text } from "react-native";
import Copyright from "../../components/Copyright";

import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import { PRIMARY_COLOR } from "../../utils/variables";

import OverflowButton from "./OverflowButton";
import RenderSlides from "./RenderSlides";

export default ({ data = [], navigation }) => {
  const { verifyUser, setAuth } = useAuth();
  const { width, height } = useWindowDimensions();

  const ITEM_WIDTH = width * 0.8;
  const ITEM_HEIGHT = height * 0.5;

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const ListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewChanged = useRef(({ viewableItems, changed }) => {
    setIndex(viewableItems[0].index);
  }, []);

  const checkItem = index => {
    let list = data[5];
    list.activities[index].check = !list.activities[index].check;
    setRefreshing(!refreshing);
  };

  const pressCheck = () => {
    let array = questions.slice();
    array[index] = true;
    setQuestions(array);
    ListRef.current.scrollToIndex({ animated: true, index: index + 1, viewPosition: 0 });
  };

  const pressClose = () => {
    let array = questions.slice();
    array[index] = false;
    setQuestions(array);
    ListRef.current.scrollToIndex({ animated: true, index: index + 1, viewPosition: 0 });
  };

  const handlerPress = async () => {
    if (index === 5) {
      const activities = data[5].activities;
      setLoading(true);
      const question = await api.post("/questionario/criar", {
        question_1: questions[0] || null,
        question_2: questions[1] || null,
        question_3: questions[2] || null,
        question_4: questions[3] || null,
        question_5: questions[4] || null,
      });

      let id = activities.filter(i => i.check === true);
      id = id.map(item => item.id);

      const activity = await api.post("/interesses/criar", {
        id,
      });

      if (activity.data && question.data) {
        //verifyUser(navigation)
        setAuth(true);
      }
      setLoading(false);
    } else {
      ListRef.current.scrollToIndex({ animated: false, index: 5, viewPosition: 0 });
      setIndex(5);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.index}>
        {index + 1} de {data.length}
      </Text>
      <FlatList
        ref={ListRef}
        data={data}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewChanged.current}
        keyExtractor={(_, index) => String(index)}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 25,
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        scrollEventThrottle={32}
        renderItem={({ item, index }) => {
          return (
            <>
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.5,
                  zIndex: -11,
                  right: width / 10,
                  position: "absolute",
                  top: -18,
                  width: width * 0.8,
                  borderRadius: 14,
                  height: ITEM_HEIGHT,
                }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.65,
                  zIndex: -10,
                  right: width / 10,
                  position: "absolute",
                  top: -9,
                  width: width * 0.8,
                  borderRadius: 14,
                  height: ITEM_HEIGHT,
                }}
              />
              <RenderSlides
                item={item}
                index={index}
                width={width}
                ITEM_WIDTH={ITEM_WIDTH}
                ITEM_HEIGHT={ITEM_HEIGHT}
                pressCheck={pressCheck}
                pressClose={pressClose}
                checkItem={checkItem}
              />
            </>
          );
        }}
      />
      <OverflowButton loadingApi={loading} data={data} index={index} onPress={handlerPress} />
      <Copyright display={1} isTransparent={index === 5 && height < 600 ? true : false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
  },
  index: {
    color: "#ffd4d5",
    paddingHorizontal: 20,
    paddingTop: 2,
    paddingBottom: 4,
    backgroundColor: "#ff1f2f",
    borderRadius: 100,
  },
});
