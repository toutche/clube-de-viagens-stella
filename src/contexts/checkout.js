import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import api from "../services/api";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {
  const [travelers, setTravelers] = useState([]);
  const [data, setData] = useState([]);

  const getTravelers = (hotelData) => {
    let qtd_pax = hotelData.filterPeople.adult + hotelData.filterPeople.children;
    let paxs = []
    
    for(let i = 1; i <= hotelData.filterPeople.adult; i += 1) {
      paxs.push(`Adulto ${i}`);
    }
    for(let i = 1; i <= hotelData.filterPeople.children; i += 1) {
      paxs.push(`Criança ${i}`);
    }

    return {
      qtd_pax, 
      paxs
    }
  }

  const getScheduling = (id, hotelData=undefined) => {
    if (hotelData) {
      api.post('/hotel/get', {
        start_date: String(hotelData.filterCheck.in).split('/').reverse().join('-'),
        end_date: String(hotelData.filterCheck.out).split('/').reverse().join('-'),
        qtd_people: String(hotelData.filterPeople.adult),
        city_code: String(hotelData.filterDestiny.key),
        hotel: hotelData.item.id,
        hotel_key_detail: hotelData.item.keyDetail
      }).then((res) => {
        let t = getTravelers(hotelData);
        setData({...res.data, ...t})
      }).catch(e => console.log(e));
    }
    else {
      api
        .get(`/pacote-viagem/${id}/get/agendamento`)
        .then(({ data }) => setData(data))
        .catch(e => console.log(e));
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        data,
        travelers,
        setTravelers,
        getScheduling,
      }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export function useCheckout() {
  const context = useContext(CheckoutContext);
  return context;
}
