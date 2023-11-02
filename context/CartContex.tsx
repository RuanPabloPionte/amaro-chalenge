"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartEntry = {
  product: Product;
  chosenSize: string;
  quantity: number;
};

type CartContextType = {
  cart: CartEntry[];
  addProduct: (product: Product, chosenSize: string) => void;
  deleteProduct: (productId: number) => void;
  decreaseQuantity: (productId: number, chosenSize: string) => void;
  increaseQuantity: (productId: number, chosenSize: string) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = (props: { children: ReactNode }) => {
  const initialCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("amaro-cart") || "[]")
      : [];
  const [cart, setCart] = useState<CartEntry[]>(initialCart);

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      localStorage.setItem("amaro-cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addProduct = (product: Product, chosenSize: string) => {
    const updatedCart = [...cart, { product, chosenSize, quantity: 1 }];
    setCart(updatedCart);
  };

  const deleteProduct = (productId: number) => {
    const removedProductCart = cart.find(
      (cart) => productId === Number(cart.product.id)
    );
    if (
      confirm(
        `Tem certeza que quer remover o item ${removedProductCart?.product?.name}`
      )
    ) {
      const updatedCart = cart.filter(
        (cart) => productId !== Number(cart.product.id)
      );
      setCart(updatedCart);
    }
  };

  const decreaseQuantity = (productId: number, chosenSize: string) => {
    const updatedCart = cart.map((cartEntry) => {
      if (
        cartEntry.product.id === productId &&
        cartEntry.chosenSize === chosenSize
      ) {
        cartEntry.quantity--;
      }
      return cartEntry;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (productId: number, chosenSize: string) => {
    const updatedCart = cart.map((cartEntry) => {
      if (
        cartEntry.product.id === productId &&
        cartEntry.chosenSize === chosenSize
      ) {
        cartEntry.quantity++;
      }
      return cartEntry;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        deleteProduct,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
