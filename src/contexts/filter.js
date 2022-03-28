import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {

    const [filterIds, setFilter] = useState(false)
    const [filterUpdate, setFilterUpdate] = useState(false)
    const [orderPrice, setOrderPrice] = useState('asc')
    const [segmentsIds, setSegmentsIds] = useState([])

    const toggleFilter = () => {
        Alert.alert(
            "Filtrar",
            `Deseja filtrar?`,
            [
                {
                    text: filterIds ? "Limpar" : "Voltar",
                    onPress: clearFilter,
                    style: "destructive"
                },
                {
                    text: "Filtrar",
                    onPress: () => {
                        setFilter(true)
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
        if (filterIds) {
            setSegmentsIds([])
            setFilter(false)
            setFilterUpdate(state => !state)
        }
    }

    return (
        <FilterContext.Provider
            value={{
                filterUpdate,
                filterIds,
                setFilter,
                orderPrice,
                setOrderPrice,
                segmentsIds,
                setSegmentsIds,
                toggleFilter,
                toggleOrder,
                clearFilter
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export function useFilter() {
    const context = useContext(FilterContext);
    return context;
}
