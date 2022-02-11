import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import api from "../services/api";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {
  const [travelers, setTravelers] = useState([]);
  const [data, setData] = useState([]);

  const getScheduling = id => {
    api
      .get(`/pacote-viagem/${id}/get/agendamento`)
      .then(({ data }) => setData(data))
      .catch(e => console.log(e));
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
