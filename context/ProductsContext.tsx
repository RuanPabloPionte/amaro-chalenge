"use client";
import { ReactNode, createContext, useContext } from "react";
import products from "@/products.json";

type ContextType = {
  products: Product[];
};

const ProductContext = createContext<ContextType>({
  products: [],
});

function ProductsContextProvider({ children }: { children: ReactNode }) {
  return (
    <ProductContext.Provider value={{ products: products }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
export default ProductsContextProvider;
