import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FlatList, useWindowDimensions, Animated, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';
import { PRIMARY_COLOR } from '../../utils/variables';

import OverflowButton from './OverflowButton';
import RenderSlides from './RenderSlides';


export default ({ data = [], navigation }) => {
    const { questionary, loadingApi } = useAuth()
    const { width, height } = useWindowDimensions()

    const ITEM_WIDTH = width * 0.8
    const ITEM_HEIGHT = height * 0.5

    const [index, setIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const ListRef = useRef(null)
    const scrollX = useRef(new Animated.Value(0)).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const viewChanged = useRef(({ viewableItems, changed }) => {
        setIndex(viewableItems[0].index)
    }, [])

    const checkItem = index => {
        let list = data[5]
        list.activities[index].check = !list.activities[index].check
        setRefreshing(!refreshing)
    }

    const pressCheck = () => {
        let array = questions.slice()
        array[index] = true
        setQuestions(array)
        ListRef.current.scrollToIndex({ animated: true, index: index + 1, viewPosition: 0 })
    }

    const pressClose = () => {
        let array = questions.slice()
        array[index] = false
        setQuestions(array)
        ListRef.current.scrollToIndex({ animated: true, index: index + 1, viewPosition: 0 })
    }

    const handlerPress = () => {
        if (index === 5)
            questionary(
                questions,
                data[5].activities
            )
        else {
            ListRef.current.scrollToIndex({ animated: false, index: 5, viewPosition: 0 })
            setIndex(5)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.index}>{index + 1} de {data.length}</Text>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 25
                }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                horizontal
                scrollEventThrottle={32}
                renderItem={({ item, index }) => {
                    return (
                        <>
                            <View style={{
                                backgroundColor: 'white',
                                opacity: 0.5,
                                zIndex: -11,
                                right: width / 10,
                                position: 'absolute',
                                top: -18,
                                width: width * 0.8,
                                borderRadius: 14,
                                height: ITEM_HEIGHT
                            }} />
                            <View style={{
                                backgroundColor: 'white',
                                opacity: 0.65,
                                zIndex: -10,
                                right: width / 10,
                                position: 'absolute',
                                top: -9,
                                width: width * 0.8,
                                borderRadius: 14,
                                height: ITEM_HEIGHT
                            }} />
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
                    )
                }}
            />
            <OverflowButton
                loadingApi={loadingApi}
                data={data}
                index={index}
                onPress={handlerPress}
            />
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY_COLOR,
    },
    index: {
        color: '#ffd4d5',
        paddingHorizontal: 20,
        paddingVertical: 2,
        backgroundColor: '#ff1f2f',
        borderRadius: 100,
    },
})
