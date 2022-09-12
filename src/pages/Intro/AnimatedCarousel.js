import React, { useRef, useState, useEffect } from "react";
import {
  FlatList,
  useWindowDimensions,
  Animated,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import OverflowButton from "./OverflowButton";
import ChoiceButtons from "./ChoiceButtons";
import {
  FONT_DEFAULT_BOLD_STYLE,
  FONT_DEFAULT_STYLE,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../utils/variables";

const Slides = [
  {
    title: "Conheça mais sobre o Clube de Férias!",
    titleFooter: "",
    image: require("../../../assets/header/Intro-01.jpg"),
    button: "O Clube",
    aspectRatio: 0.8,
    onPress: navigation => Platform.OS === "android" && navigation.navigate("VideoScreen"),
  },
  {
    title: "Conecte-se a sua viagem dos sonhos!",
    list: [
      "Escolha entre mais de 10 mil hotéis",
      "Descontos exclusivos ilimitados para você curtir como quiser.",
      "Atendimento diferenciado, para você não ter que se preocupar.",
      "Não vai mais viajar? Não esquenta!",
      "Aqui não tem fidelidade.",
      "Chegou agora e já quer viajar?",
      "Deixa com a gente. Aqui você pode planejar sua viagem desde o primeiro mês. Tudo isso, sem comprometer o limite do seu cartão.",
    ],
    titleFooter: "",
    image: require("../../../assets/header/Intro-02.jpg"),
    button: "Vantagens",
    aspectRatio: 1.5,
    onPress: () => {},
  },
  {
    title: "O desconto que você sempre quis!",
    text: [
      "Sabe o que gostamos mais do que viajar?",
      "Viabilizar sonhos!",
      "Aqui no Clube de Férias, você vai encontrar as melhores viagens, com condições incríveis e as mais diversas opções para você aproveitar como e com quem quiser. Nossos descontos são exclusivos e ilimitados em pacotes para viagens e hotéis no Brasil e no mundo, para não faltar histórias para contar e nem momentos únicos para compartilhar",
    ],
    titleFooter:
      "É hora de preparar suas férias. E aí, preparado? Qual será o seu próximo destino?",
    image: require("../../../assets/header/Intro-03.jpg"),
    button: "Produtos",
    aspectRatio: 1.5,
    onPress: () => {},
  },
];

export default ({ navigation }) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const ListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewChanged = useRef(({ viewableItems, changed }) => {
    setIndex(viewableItems[0].index);
  }, []);

  const [index, setIndex] = useState(0);

  const handlerChoice = index =>
    ListRef.current.scrollToIndex({ animated: false, index, viewPosition: 0 });

  const jumpButton = () => navigation.navigate("Sign");

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingBottom: 24 + insets.bottom }]}>
      <FlatList
        ref={ListRef}
        data={Slides}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewChanged.current}
        keyExtractor={(_, index) => String(index)}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        initialNumToRender={0}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <View style={{ width }}>
              <TouchableWithoutFeedback onPress={() => item.onPress(navigation)}>
                <Image
                  style={[styles.image, { aspectRatio: item.aspectRatio }]}
                  resizeMode={"cover"}
                  source={item.image}
                />
              </TouchableWithoutFeedback>
              <View style={styles.contentText}>
                <Text style={styles.title}>{item.title}</Text>
                {index !== 0 &&
                  index !== 1 &&
                  item.text.map((it, key) => (
                    <Text key={key} style={index === 2 && key === 1 ? styles.title : styles.text}>
                      {it}
                    </Text>
                  ))}
                {index !== 0 &&
                  index !== 2 &&
                  item.list.map((it, key) => (
                    <Text
                      key={key}
                      style={[styles.text, { marginBottom: key === 2 || key === 4 ? 16 : 0 }]}>
                      {index === 1 && key != 3 && key != 5 && (
                        <Ionicons name='md-triangle' size={10} color='yellow' />
                      )}{" "}
                      {it}
                    </Text>
                  ))}
                <Text style={styles.title}>{item.titleFooter}</Text>
              </View>
            </View>
          );
        }}
      />

      <ChoiceButtons data={Slides} index={index} onPress={handlerChoice} />
      <OverflowButton data={Slides} index={index} onPress={jumpButton} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: undefined,
  },
  contentText: {
    paddingHorizontal: "5%",
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    color: TEXT_COLOR_BKCOLORFUL,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    marginTop: 7,
    marginBottom: 7,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    fontSize: 13.5,
    color: TEXT_COLOR_BKCOLORFUL,
    marginBottom: 5,
    opacity: 0.8,
  },
  innerTitle: {
    marginTop: 15,
  },
  mgTop: {
    marginTop: 10,
  },
});
