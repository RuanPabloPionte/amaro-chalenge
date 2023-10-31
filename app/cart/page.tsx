"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContex";

type CartEntry = {
  product: Product;
  quantity: number;
};

function Cart() {
  const { cart } = useCart();
  const [cartList, setCartList] = useState([] as CartEntry[]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const cartList = cart.reduce((productList, product) => {
      const productIndex = productList.findIndex(
        (entry) => entry.product.id === product.id
      );

      // produto novo ainda não existe
      if (productIndex === -1) {
        return [
          ...productList,
          {
            product,
            quantity: 1,
          },
        ];
      }

      // produto que já existia
      productList[productIndex].quantity++;
      return productList;
    }, [] as CartEntry[]);
    setCartList(cartList);

    const getTotalPrice = () => {
      const totalPrice = cart.reduce((total, price) => {
        let priceInNumber = parseFloat(
          price.actual_price.slice(3).replace(",", ".")
        );
        return total + priceInNumber;
      }, 0);
      setTotalPrice(totalPrice);
    };
    getTotalPrice();
  }, [cart]);
  return (
    <div>
      {cartList.map((cart) => (
        <div key={cart.product.id}>
          <p>{cart.product.name}</p>
        </div>
      ))}
      <p>quantidade de produtos: {cart.length}</p>
      <p>Total: {totalPrice}</p>
    </div>
  );
}

export default Cart;
