import React, { useRef, useState } from "react";
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
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
    image: require("../../../assets/header/Intro-01.jpg"),
    button: "O Clube",
    aspectRatio: 0.8,
    onPress: (navigation) => navigation.navigate('VideoScreen')
  },
  {
    title: "Conecte-se a sua viagem dos sonhos!",
    text: [
      "São mais de 10 mil hotéis para você escolher!",
      "Desconto exclusivo ilimitado de até 12% sobre o valor do pacote/hospedagem, conforme o plano, para você aproveitar ainda mais!",
      "Atendimento Exclusivo e qualificado Stella Barros.",
      "Tudo isso, sem comprometer o limite do seu cartão de crédito e sem fidelidade!",
      "E o melhor, você pode começar a usar a partir da primeira mensalidade!",
    ],
    image: require("../../../assets/header/Intro-02.jpg"),
    button: "Vantagens",
    aspectRatio: 1.1,
    onPress: () => { }
  },
  {
    title: "Descontos exclusivos para assinantes",
    text: [
      "Por termos uma indisfarçavel paixão por viajar, reunimos aqui as melhores experiências em mais de 10 mil hotéis e pacotes no brasil e no mundo, com descontos exclusivos ilimitados, para você, sua família e amigos terem índices altíssimos de felicidade e inumeráveis histórias para compartilhar!",
      "E aí, tá preparado para sua próxima viagem?",
      "Embarque conosco, Faça parte do clube de férias!",
    ],
    image: require("../../../assets/header/Intro-03.jpg"),
    button: "Produtos",
    aspectRatio: 1.5,
    onPress: () => { }
  },
];

export default ({ navigation }) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets()

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
    <ScrollView bounces={false} style={styles.container} contentContainerStyle={[styles.content, { paddingBottom: 24 + insets.bottom }]}>
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
                  item.text.map((it, key) => (
                    <Text key={key} style={styles.text}>
                      {index === 1 && <FontAwesome color={"white"} size={9} name={"circle"} />} {it}
                    </Text>
                  ))}
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
    fontSize: 17,
    color: TEXT_COLOR_BKCOLORFUL,
    fontFamily: FONT_DEFAULT_BOLD_STYLE,
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontFamily: FONT_DEFAULT_STYLE,
    textAlign: "center",
    fontSize: 13.5,
    color: TEXT_COLOR_BKCOLORFUL,
    marginBottom: 5,
    opacity: 0.8,
  },
});
