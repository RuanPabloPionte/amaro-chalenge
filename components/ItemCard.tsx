"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContex";
import ToastCart from "./ToastCart";

type ItemCartProps = {
  product: Product;
  query?: string;
};

function ItemCard({ product, query }: ItemCartProps) {
  const [openToast, setOpenToast] = useState(false);
  const [sizeCode, setSizeCode] = useState("");
  const { addProduct } = useCart();

  const formatedQuerry = query?.toUpperCase().trim();
  const shouldRenderItem =
    !formatedQuerry || product.name.toUpperCase().includes(formatedQuerry);

  if (!shouldRenderItem) {
    return null;
  }
  return (
    <div className="p-5 gap-3 flex justify-center align-center flex-wrap bg-slate-200 rounded-md border border-black shadow-black shadow-md">
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
              className={`border border-black p-2 rounded-md 
              ${size.available && "border-dashed"}
              ${sizeCode === size.sku ? "bg-green-300" : ""}
              `}
              key={size.sku}
              onClick={() => {
                // verificar se ele já clicou ou não no botão
                sizeCode === size.sku ? setSizeCode("") : setSizeCode(size.sku);
              }}
            >
              {size.size}
            </button>
          ) : null
        )}
      </div>
      <button
        onClick={() => {
          if (sizeCode !== "") {
            addProduct(product, sizeCode);
            setOpenToast(true);
            setTimeout(() => {
              setOpenToast(false);
            }, 2 * 1000);

            setSizeCode("");
          } else {
            alert("Por favor selecione um tamanho");
          }
        }}
        className="border border-black rounded-md p-3 bg-slate-300 hover:bg-emerald-300 transition-all duration-[0.7s] shadow-md shadow-sky-400"
      >
        Comprar
      </button>

      {openToast && <ToastCart />}
    </div>
  );
}

export default ItemCard;
