"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContex";
import CartContent from "@/components/CartContent";

function Cart() {
  const { cart } = useCart();
  const [cartList, setCartList] = useState([] as CartEntry[]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const cartList = cart.reduce((productList, cart) => {
      // agrupa os produtos por id e tamanho
      const productIndex = productList.findIndex(
        (entry) =>
          entry.product.id === cart.product.id &&
          entry.chosenSize === cart.chosenSize
      );

      // produto novo ainda não existe
      if (productIndex === -1) {
        return [...productList, cart];
      }

      // produto que já existia
      productList[productIndex].quantity++;
      return productList;
    }, [] as CartEntry[]);
    setCartList(cartList);

    const getTotalPrice = () => {
      const totalPrice = cartList.reduce((total, cart) => {
        let priceInNumber = parseFloat(
          cart.product.actual_price.slice(3).replace(",", ".")
        );
        return total + priceInNumber * cart.quantity;
      }, 0);
      setTotalPrice(totalPrice);
    };
    getTotalPrice();
  }, [cart]);
  // console.log(cartList);
  return (
    <section className="bg-slate-200 min-h-screen ">
      {cartList.map((cartEntry) => {
        return <CartContent key={cartEntry.product.id} cartEntry={cartEntry} />;
      })}
      <p>quantidade de produtos: {cart.length}</p>
      <p>Total: {totalPrice}</p>
    </section>
  );
}

export default Cart;
