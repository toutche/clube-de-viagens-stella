import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";

const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [filterOrigin, setFilterOrigin] = useState();
  const [filterDestiny, setFilterDestiny] = useState();
  const [filterDays, setFilterDays] = useState();
  const [filterMouth, setFilterMouth] = useState();
  const [filterYear, setFilterYear] = useState();
  const [filterCheck, setFilterCheck] = useState();
  const [filterPeople, setFilterPeople] = useState();

  const [filterIdsCategory, setFilterIdsCategory] = useState(false);
  const [filterUpdate, setFilterUpdate] = useState(false);
  const [orderPrice, setOrderPrice] = useState("asc");
  const [segmentsIds, setSegmentsIds] = useState([]);

  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const [numberNotifications, setNumberNotifications] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);

  const toggleFilter = () => {
    setFilterIdsCategory(true);
    forceUpdateList();
  };

  const toggleOrder = () => {
    if (orderPrice === "desc") {
      setOrderPrice("asc");
      return;
    }
    setOrderPrice("desc");
  };

  const clearFilterCategory = () => {
    setSegmentsIds([]);
    setFilterIdsCategory(false);
    forceUpdateList();
  };

  const onFilterOriginDestiny = () => {
    Alert.alert("Buscar", `Deseja Buscar?`, [
      {
        text:
          filterOrigin || filterDestiny || filterDays || filterMouth || filterYear
            ? "Limpar"
            : "Não",
        onPress:
          filterOrigin || filterDestiny || filterDays || filterMouth || filterYear
            ? clearFilterOriginDestiny
            : null,
        style: "destructive",
      },
      {
        text: "Sim",
        onPress: forceUpdateList,
        style: "destructive",
      },
    ]);
  };

  const onFilterHotels = () => {
    Alert.alert("Buscar", `Deseja Buscar?`, [
      {
        text:
          filterCheck?.in || filterCheck?.out || filterPeople?.adult || filterPeople?.children
            ? "Limpar"
            : "Não",
        onPress:
          filterCheck?.in || filterCheck?.out || filterPeople?.adult || filterPeople?.children
            ? clearFilterHotels
            : null,
        style: "destructive",
      },
      {
        text: "Sim",
        onPress: forceUpdateList,
        style: "destructive",
      },
    ]);
  };

  const clearFilterOriginDestiny = () => {
    setFilterOrigin();
    setFilterDestiny();
    setFilterDays();
    setFilterMouth();
    setFilterYear();
    forceUpdateList();
  };

  const clearFilterHotels = () => {
    clearFilterOriginDestiny();
    setFilterCheck();
    setFilterPeople();
  };

  const clearAll = () => {
    clearFilterCategory();
    setOrderPrice("asc");
    clearFilterOriginDestiny();
    clearFilterHotels();
  };

  const forceUpdateList = () => {
    setFilterUpdate(state => !state);
  };

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

        numberNotifications, setNumberNotifications,
        isVisibleMenu, setVisibleMenu,
        autoScroll, setAutoScroll,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  const context = useContext(FilterContext);
  return context;
}
