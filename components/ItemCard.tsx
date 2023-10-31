"use client";
// - The app must be responsive. Use a **mobile-first** approach.
// - For each item on the catalog, the following information must be present on the page:
//     - Image
//     - Name
//     - Price
//     - Promo Status
//     - Promo price (if available)
//     - Available Sizes
//     - Sale badge
// - It must be possible to add products by size to the cart.
// - It must be possible to view the cart with the items you've added (name, image, price, quantity) and the grand total.
// - The cart should be persisted between reloads.
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContex";
import ToastCart from "./ToastCart";

type ItemCartProps = {
  product: Product;
};

function ItemCard({ product }: ItemCartProps) {
  const [openToast, setOpenToast] = useState(false);
  const [sizeCode, setSizeCode] = useState(" ");
  const { addProduct } = useCart();
  return (
    <div className="p-3 gap-3 flex justify-center align-center flex-wrap bg-slate-200 rounded-md border border-black shadow-black shadow-md">
      <Image
        src={product.image}
        width={300}
        height={500}
        alt={product.name}
        className="w-full"
      />
      <div className=" text-lg lg:text-2xl font-semibold">
        <p className="text-center">{product.name}</p>
        <div>
          {product.discount_percentage ? (
            <>
              <span className="line-through">{product.regular_price}</span>
              <span className="text-emerald-600 mx-2">{`(${product.discount_percentage}) OFF`}</span>
              <p>{product.actual_price}</p>
            </>
          ) : (
            product.regular_price
          )}
        </div>
      </div>
      <div className="flex gap-2 w-full my-2 justify-center">
        {product.sizes.map((size) =>
          product.sizes.length > 3 ? (
            <button
              disabled={size.available}
              className={`border border-black p-2 rounded-md ${
                size.available && "border-dashed"
              }`}
              key={size.sku}
              onClick={() => console.log(size.sku)}
            >
              {size.size}
            </button>
          ) : null
        )}
      </div>
      <button
        onClick={() => {
          addProduct(product);
          setOpenToast(true);
          setTimeout(() => {
            setOpenToast(false);
          }, 2 * 1000);
        }}
        className="border border-black rounded-md p-3 bg-slate-300 hover:bg-emerald-300 transition-all duration-[0.7s] shadow-md shadow-sky-400"
      >
        Add to Cart
      </button>

      {openToast && <ToastCart />}
    </div>
  );
}

export default ItemCard;
