"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContex";
import CartContent from "@/components/CartContent";
import CartHeader from "@/components/CartHeader";
import CartFooter from "@/components/CartFooter";

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
    <main className="bg-slate-200 min-h-screen  ">
      <CartHeader />
      <section className="grid grid-cols-1 md:grid-cols-3 md:m-4">
        <section className="mx-3 col-span-2 md:mx-0">
          {cartList.map((cartEntry) => {
            return (
              <CartContent key={cartEntry.product.id} cartEntry={cartEntry} />
            );
          })}
        </section>
        <section className="bg-white max-h-[60vh] w-full my-2 md:m-2 px-3 p-2 grid gap-2  md:static">
          <CartFooter totalPrice={totalPrice.toFixed(2)} />
        </section>
      </section>
    </main>
  );
}

export default Cart;
