"use client";
import { ReactNode, createContext, useContext } from "react";
import Products from "@/products.json";

type ContextType = {
  products: Product[];
};

const ProductContext = createContext<ContextType>({
  products: [],
});

function ProductsContextProvider({ children }: { children: ReactNode }) {
  const products: Product[] = Products.map((product) => ({
    ...product,
    id: Math.floor(Math.random() * 100200),
  }));

  return (
    <ProductContext.Provider value={{ products: products }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
export default ProductsContextProvider;
