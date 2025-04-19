"use client"    

import { createContext,useContext, useState } from "react";

const ProductContext = createContext()

export const ProductContextProvider = ({children})=> {
    const [products,setProducts] = useState("this is empty products")


    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = ()=> {
    return useContext(ProductContext)
}