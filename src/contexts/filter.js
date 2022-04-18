import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
    const [filterOrigin, setFilterOrigin] = useState()
    const [filterDestiny, setFilterDestiny] = useState()
    const [filterDays, setFilterDays] = useState()
    const [filterMouth, setFilterMouth] = useState()
    const [filterYear, setFilterYear] = useState()
    const [filterCheck, setFilterCheck] = useState()
    const [filterPeople, setFilterPeople] = useState()

    const [filterIdsCategory, setFilterIdsCategory] = useState(false)
    const [filterUpdate, setFilterUpdate] = useState(false)
    const [orderPrice, setOrderPrice] = useState('asc')
    const [segmentsIds, setSegmentsIds] = useState([])

    const toggleFilter = () => {
        Alert.alert(
            "Filtrar",
            `Deseja filtrar?`,
            [
                {
                    text: filterIdsCategory ? "Limpar" : "Voltar",
                    onPress: filterIdsCategory ? clearFilterCategory : null,
                    style: "destructive"
                },
                {
                    text: "Filtrar",
                    onPress: () => {
                        setFilterIdsCategory(true)
                        forceUpdateList()
                    },
                    style: "destructive"
                },
            ],
        );
    }

    const toggleOrder = () => {
        if (orderPrice === 'desc') {
            setOrderPrice('asc')
            return
        }
        setOrderPrice('desc')
    }

    const clearFilterCategory = () => {
        setSegmentsIds([])
        setFilterIdsCategory(false)
        forceUpdateList()
    }

    const onFilterOriginDestiny = () => {
        Alert.alert(
            "Filtrar",
            `Deseja filtrar?`,
            [
                {
                    text: filterOrigin || filterDestiny || filterDays || filterMouth || filterYear ? "Limpar" : "Voltar",
                    onPress: filterOrigin || filterDestiny || filterDays || filterMouth || filterYear ? clearFilterOriginDestiny : null,
                    style: "destructive"
                },
                {
                    text: "Filtrar",
                    onPress: forceUpdateList,
                    style: "destructive"
                },
            ],
        );
    }

    const onFilterHotels = () => {
        Alert.alert(
            "Filtrar",
            `Deseja filtrar?`,
            [
                {
                    text: filterCheck?.in || filterCheck?.out || filterPeople?.adult || filterPeople?.children ? "Limpar" : "Voltar",
                    onPress: filterCheck?.in || filterCheck?.out || filterPeople?.adult || filterPeople?.children ? clearFilterHotels : null,
                    style: "destructive"
                },
                {
                    text: "Filtrar",
                    onPress: forceUpdateList,
                    style: "destructive"
                },
            ],
        );
    }

    const clearFilterOriginDestiny = () => {
        setFilterOrigin()
        setFilterDestiny()
        setFilterDays()
        setFilterMouth()
        setFilterYear()
        forceUpdateList()
    }

    const clearFilterHotels = () => {
        clearFilterOriginDestiny()
        setFilterCheck()
        setFilterPeople()
    }

    const clearAll = () => {
        clearFilterCategory()
        setOrderPrice('asc')
        clearFilterOriginDestiny()
        clearFilterHotels()
    }

    const forceUpdateList = () => {
        setFilterUpdate(state => !state)
    }

    return (
        <FilterContext.Provider
            value={{
                orderPrice,
                filterIdsCategory,
                filterDays,
                filterOrigin,
                filterDestiny,
                filterMouth,
                filterYear,
                filterCheck,
                filterPeople,
                segmentsIds,
                filterUpdate,
                setFilterPeople,
                setFilterCheck,
                setFilterDays,
                setFilterOrigin,
                setFilterDestiny,
                setFilterMouth,
                setFilterYear,
                setFilterIdsCategory,
                setOrderPrice,
                setSegmentsIds,
                toggleFilter,
                toggleOrder,
                onFilterOriginDestiny,
                onFilterHotels,
                clearFilterCategory,
                clearFilterOriginDestiny,
                clearAll,
                forceUpdateList,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export function useFilter() {
    const context = useContext(FilterContext);
    return context;
}
