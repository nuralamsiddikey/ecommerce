"use client";

import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState({
    product_id: null,
    full_name: "",
    phone: "",
    quantity: 1,
    division: "",
    city: "",
    police_station: "",
    address_line: "",
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
