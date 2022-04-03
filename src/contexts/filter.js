import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {

    const [filterOrigin, setFilterOrigin] = useState()
    const [filterDestiny, setFilterDestiny] = useState()

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
                    onPress: clearFilter,
                    style: "destructive"
                },
                {
                    text: "Filtrar",
                    onPress: () => {
                        setFilterIdsCategory(true)
                        setFilterUpdate(state => !state)
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

    const clearFilter = () => {
        if (filterIdsCategory) {
            setSegmentsIds([])
            setFilterIdsCategory(false)
            setFilterUpdate(state => !state)
        }
    }

    const forceUpdateList = () => {
        setFilterUpdate(state => !state)
    }

    return (
        <FilterContext.Provider
            value={{
                filterOrigin,
                setFilterOrigin,
                filterDestiny,
                setFilterDestiny,
                filterUpdate,
                filterIdsCategory,
                setFilterIdsCategory,
                orderPrice,
                setOrderPrice,
                segmentsIds,
                setSegmentsIds,
                toggleFilter,
                toggleOrder,
                clearFilter,
                forceUpdateList
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export function useFilter() {
    const context = useContext(FilterContext);
    return context;
}
