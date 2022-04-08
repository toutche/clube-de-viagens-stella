import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
    const [filterOrigin, setFilterOrigin] = useState()
    const [filterDestiny, setFilterDestiny] = useState()
    const [filterDays, setFilterDays] = useState()
    const [filterMouth, setFilterMouth] = useState()
    const [filterYear, setFilterYear] = useState()

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

    const clearFilterOriginDestiny = () => {
        setFilterOrigin()
        setFilterDestiny()
        setFilterDays()
        setFilterMouth()
        setFilterYear()
        forceUpdateList()
    }

    const clearAll = () => {
        setOrderPrice('asc')
        clearFilterOriginDestiny()
        clearFilterCategory()
    }

    const forceUpdateList = () => {
        setFilterUpdate(state => !state)
    }

    return (
        <FilterContext.Provider
            value={{
                filterDays,
                setFilterDays,
                filterOrigin,
                setFilterOrigin,
                filterDestiny,
                setFilterDestiny,
                filterMouth,
                setFilterMouth,
                filterYear,
                setFilterYear,
                filterUpdate,
                filterIdsCategory,
                setFilterIdsCategory,
                orderPrice,
                setOrderPrice,
                segmentsIds,
                setSegmentsIds,
                toggleFilter,
                toggleOrder,
                onFilterOriginDestiny,
                clearFilterCategory,
                clearFilterOriginDestiny,
                forceUpdateList,
                clearAll
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export function useFilter() {
    const context = useContext(FilterContext);
    return context;
}
