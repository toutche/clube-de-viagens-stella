import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FlatList, useWindowDimensions, Animated, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';

import OverflowButton from './OverflowButton';
import RenderSlides from './RenderSlides';

const Slides = [
    {
        text: 'Em suas viagens, você costuma se hospedar em hotéis econômicos?',
        toast: 'Hotéis econômicos',
        poster: 'https://mfiles.alphacoders.com/806/806684.jpg'
    },
    {
        text: 'Em suas viagens, você costuma se hospedar em hotéis econômicos?',
        toast: 'Hotéis econômicos',
        poster: 'https://mfiles.alphacoders.com/806/806684.jpg'
    },
    {
        text: 'Em suas viagens, você costuma se hospedar em hotéis econômicos?',
        toast: 'Hotéis econômicos',
        poster: 'https://mfiles.alphacoders.com/806/806684.jpg'
    },
    {
        text: 'Em suas viagens, você costuma se hospedar em hotéis econômicos?',
        toast: 'Hotéis econômicos',
        poster: 'https://mfiles.alphacoders.com/806/806684.jpg'
    },
    {
        text: 'Em suas viagens, você costuma se hospedar em hotéis econômicos?',
        toast: 'Hotéis econômicos',
        poster: 'https://mfiles.alphacoders.com/806/806684.jpg'
    },

    {
        title: 'Estamos finalizando!',
        subTitle: 'Só mais uma pergunta! Para que possamos entender um pouco mais do seu perfil, conte-nos sobre seus interesses e os meses que normalmente você faz as suas viagens?',
        note: 'Selecione quantos desejar :)',
        activitiesText: 'Atividades',
        activities: [
            {
                name: 'Praia',
                id: 2,
                check: true
            },
            {
                name: 'Montanha',
                check: false
            },
            {
                name: 'Natureza',
                check: true
            },
            {
                name: 'Gastronomia',
                check: false
            },
            {
                name: 'Resort',
                check: false
            }
        ]
    }
]

export default () => {
    const { width, height } = useWindowDimensions()

    const ITEM_WIDTH = width * 0.8
    const ITEM_HEIGHT = height * 0.5
    const VISIBLE_ITEMS = 3

    const [data, setData] = useState(Slides)
    const [index, setIndex] = useState(0)
    const scrollYIndex = useRef(new Animated.Value(0)).current
    const scrollYAnimated = useRef(new Animated.Value(0)).current
    const setActiveIndex = useCallback(activeIndex => {
        scrollYIndex.setValue(activeIndex)
        setIndex(activeIndex)
    }, [])

    useEffect(() => {
        if (index === data.length - VISIBLE_ITEMS && data.length === 6) setData([...data, ...Slides])
    }, [index])

    useEffect(() => {
        Animated.spring(scrollYAnimated, {
            toValue: scrollYIndex,
            useNativeDriver: true,
        }).start()
    }, [])

    const pressCheck = () => {
        setActiveIndex(index + 1)
    }

    const pressClose = () => {
        setActiveIndex(index - 1)
    }

    return (
        <FlingGestureHandler
            key='left'
            direction={Directions.LEFT}
            onHandlerStateChange={e => {
                if (e.nativeEvent.state === State.END) {
                    if (index > 4) return
                    setActiveIndex(index + 1)
                }
            }}>
            <FlingGestureHandler
                key='right'
                direction={Directions.RIGHT}
                onHandlerStateChange={e => {
                    if (e.nativeEvent.state === State.END) {
                        if (index < 1) return
                        setActiveIndex(index - 1)
                    }
                }}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.index}>{index + 1} de {Slides.length}</Text>
                    <FlatList
                        data={data}
                        keyExtractor={(_, index) => String(index)}
                        keyboardShouldPersistTaps='always'
                        inverted
                        contentContainerStyle={{
                            height: ITEM_HEIGHT + 30,
                            width: ITEM_WIDTH,
                            justifyContent: 'center'
                        }}
                        scrollEnabled={false}
                        removeClippedSubviews={false}
                        CellRendererComponent={({
                            item,
                            index,
                            children,
                            style,
                            ...props
                        }) => {
                            const newStyle = [style, { zIndex: data.length - index }];
                            return <View style={newStyle} index={index} {...props}>{children}</View>
                        }}
                        renderItem={({ item, index }) => {
                            const inputRange = [index - 1, index, index + 1]
                            const translateY = scrollYAnimated.interpolate({
                                inputRange,
                                outputRange: [-5, 8, 100]
                            })
                            const scale = scrollYAnimated.interpolate({
                                inputRange,
                                outputRange: [0.98, 1, 1.3]
                            })
                            const opacity = scrollYAnimated.interpolate({
                                inputRange,
                                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]
                            })
                            return (
                                <Animated.View
                                    style={{
                                        position: 'absolute',
                                        top: -ITEM_HEIGHT / 2,
                                        opacity,
                                        transform: [
                                            { translateY },
                                            { scale }
                                        ]
                                    }}>
                                    <RenderSlides
                                        item={item}
                                        index={index}
                                        ITEM_WIDTH={ITEM_WIDTH}
                                        ITEM_HEIGHT={ITEM_HEIGHT}
                                        pressCheck={pressCheck}
                                        pressClose={pressClose}
                                    />
                                </Animated.View>
                            )
                        }}
                    />
                    <OverflowButton
                        data={Slides}
                        index={index}
                        onPress={() => setActiveIndex(5)}
                        scrollYAnimated={scrollYAnimated}
                    />
                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    index: {
        color: '#ffd4d5',
        paddingHorizontal: 20,
        paddingVertical: 2,
        backgroundColor: '#ff1f2f',
        borderRadius: 100,
    },
})
