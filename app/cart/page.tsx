"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContex";
import Image from "next/image";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

type CartEntry = {
  product: Product;
  chosenSize: string;
  quantity: number;
};

function Cart() {
  const { cart, addProduct, deleteProduct } = useCart();
  const [cartList, setCartList] = useState([] as CartEntry[]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const cartList = cart.reduce((productList, cart) => {
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
      const totalPrice = cart.reduce((total, cart) => {
        let priceInNumber = parseFloat(
          cart.product.actual_price.slice(3).replace(",", ".")
        );
        return total + priceInNumber;
      }, 0);
      setTotalPrice(totalPrice);
    };
    getTotalPrice();
  }, [cart]);
  return (
    // - It must be possible to view the cart with the items you've added (name, image, price, quantity) and the grand total.
    <div className="bg-slate-200 min-h-screen ">
      {cartList.map((cart) => (
        <div
          className="relative flex m-2 p-2 gap-1 bg-white"
          key={cart.product.id}
        >
          <Image
            src={cart.product.image}
            width={80}
            height={100}
            alt={cart.product.name}
          />
          <button
            onClick={() => deleteProduct(cart.product.id)}
            className="absolute top-5 right-5"
          >
            <AiOutlineClose />
          </button>

          <div className="flex flex-wrap m-2 w-[80%] gap-2">
            <p className=" text-lg">{cart.product.name}</p>
            <div className="w-full font-semibold ">
              <p>
                Cor:{" "}
                <span className="text-black/50">
                  {cart.product.color.toUpperCase()}
                </span>{" "}
              </p>
              <p>
                Tam:{" "}
                <span className="text-black/50">
                  {cart.chosenSize.slice(11)}
                </span>{" "}
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 w-full mt-2">
              <div className="flex gap-2 ">
                <button className="text-2xl text-slate-500">
                  <CiCircleMinus />
                </button>
                <p>{cart.quantity}</p>
                <button
                  onClick={() => addProduct(cart.product, cart.chosenSize)}
                  className="text-2xl text-slate-500"
                >
                  <CiCirclePlus />
                </button>
              </div>
              <p>{cart.product.actual_price}</p>
            </div>
          </div>
        </div>
      ))}
      <p>quantidade de produtos: {cart.length}</p>
      <p>Total: {totalPrice}</p>
    </div>
  );
}

export default Cart;
