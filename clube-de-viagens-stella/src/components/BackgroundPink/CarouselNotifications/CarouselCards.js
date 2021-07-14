import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH, SLIDER_HEIGHT, ITEM_HEIGHT } from './CarouselCardItem'


const CarouselCards = () => {
  
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  const data = [
    {
      title: "Direcionando para o clube de viagens...",
       img: "https://picsum.photos/id/10/200/300",
       text: "Parabéns, agora conhecemos as suas preferências e podemos oferecer as melhores opções de viagens para você :)"
    },
    {
      title: "Prefere campo ou cidade?",
      img: "../../../assets/img/logoquadrado.png",
      text: "Parabéns, agora conhecemos as suas preferências e podemos oferecer as melhores opções de viagens para você :)"
    },
    {
      title: "Prefere praias brasileiras ou no exterior?",
      img: "https://picsum.photos/id/12/200/300",
      text: "Parabéns, agora conhecemos as suas preferências e podemos oferecer as melhores opções de viagens para você :)"
    }
  ]

  return (
    <View>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemHeight={ITEM_HEIGHT}        
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />      
    </View>
  )
}

export default CarouselCards





