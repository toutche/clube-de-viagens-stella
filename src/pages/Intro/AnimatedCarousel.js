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
  PixelRatio
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import OverflowButton from "./OverflowButton";
import ChoiceButtons from "./ChoiceButtons";
import {
  FONT_DEFAULT_BOLD_STYLE,
  FONT_DEFAULT_STYLE,
  PRIMARY_COLOR,
  TEXT_COLOR_BKCOLORFUL,
} from "../../utils/variables";

import Icon from "../../../assets/img/Aviao_Branco.png";

const Slides = [
  {
    title: "Garanta agora o seu lugar na Copa de 2026!",
    list: [
      "Prioridade de compra nos pacotes da Copa 2026.",
      "11% de desconto na compra de qualquer pacote e hotéis.",
      "Atendimento exclusivo e personalizado.",
      "Todos os benefícios do Clube de Férias.",
      "Sem carência, sem fidelidade e sem comprometer o limite do cartão.",
    ],
    titleFooter: "Com o Clube de Férias é assim: você ON em todas as Copas!",
    image: {
      uri: "https://images-store.us-southeast-1.linodeobjects.com/Foto-Capa---Plano-Copa-2026-01.png",
    },
    button: "Copa",
    aspectRatio: 1.5,
    onPress: () => {},
  },
  {
    title: "Conheça mais sobre o Clube de Férias!",
    titleFooter: "",
    image: require("../../../assets/header/Intro-01.jpg"),
    button: "O Clube",
    aspectRatio: 0.8,
    onPress: navigation => navigation.navigate("VideoScreen"),
  },
  // {
  //   title: "Conecte-se a sua viagem dos sonhos!",
  //   list: [
  //     "Escolha entre mais de 10 mil hotéis",
  //     "Descontos exclusivos ilimitados para você curtir como quiser.",
  //     "Atendimento diferenciado, para você não ter que se preocupar.",
  //     "Não vai mais viajar? Não esquenta!",
  //     "Aqui não tem fidelidade.",
  //     "Chegou agora e já quer viajar?",
  //     "Deixa com a gente. Aqui você pode planejar sua viagem desde o primeiro mês. Tudo isso, sem comprometer o limite do seu cartão.",
  //   ],
  //   titleFooter: "",
  //   image: require("../../../assets/header/Intro-02.jpg"),
  //   button: "Vantagens",
  //   aspectRatio: 1.5,
  //   onPress: () => {},
  // },
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

var FONT_SIZE_TEXT = 18;
var FONT_SIZE_TITLE = 15;
if(PixelRatio.get() <= 2) {
  FONT_SIZE_TEXT = 14;
} else if(PixelRatio.get() >= 3) {
  FONT_SIZE_TEXT = 20;
  var FONT_SIZE_TITLE = 18;
}

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
                {index !== 1 &&
                  index !== 2 &&
                  item.list.map((it, key) => (
                    <Text key={key} style={[styles.text, { marginBottom: 10 }]}>
                      <Image style={{ width: 25, height: 25 }} source={Icon} />
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
    marginTop: 20,
    paddingHorizontal: "5%",
  },
  title: {
    textAlign: "center",
    fontSize: FONT_SIZE_TITLE,
    color: TEXT_COLOR_BKCOLORFUL,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    fontSize: FONT_SIZE_TEXT,
    color: TEXT_COLOR_BKCOLORFUL,
    marginBottom: 45,
    opacity: 0.8,
  },
});
