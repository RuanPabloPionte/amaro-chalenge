"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = (props: { children: ReactNode }) => {
  const initialCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("amaro-cart") || "[]")
      : [];
  const [cart, setCart] = useState<Product[]>(initialCart);

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      localStorage.setItem("amaro-cart", JSON.stringify(cart));
    }
  }, [cart]);
  const addProduct = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const deleteProduct = (productId: number) => {
    const removedProduct = cart.find(
      (product) => productId === Number(product.id)
    );
    if (
      confirm(`Tem certeza que quer remover o itme ${removedProduct?.name}`)
    ) {
      const updatedCart = cart.filter(
        (product) => productId !== Number(product.id)
      );
      setCart(updatedCart);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
