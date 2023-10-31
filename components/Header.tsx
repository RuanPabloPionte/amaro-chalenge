"use client";
import { useCart } from "@/context/CartContex";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  IoPersonOutline,
  IoBagOutline,
  IoSearchOutline,
} from "react-icons/io5";

function Header() {
  const { cart } = useCart();
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between shadow-md shadow-black p-3">
        {/* image */}
        <Link href={"/"} className="flex gap-2 order-1">
          <HiOutlineMenu className="md:hidden text-2xl" />
          <Image
            width={100}
            height={40}
            alt="amaro-logo"
            src="/Logotipo_da_Amaro.png"
            className="md:p-2"
          />
        </Link>

        {/* icons */}
        <div className="flex gap-3 text-2xl md:text-3xl order-2 md:order-3">
          <span>
            <IoPersonOutline />
          </span>
          <Link href="/cart" className="flex items-center relative">
            {cart.length > 0 && (
              <span className=" bg-red-600 text-white rounded-full px-[5px] text-sm text-center absolute top-[-5px] right-[-6px]">
                {cart.length}
              </span>
            )}
            <IoBagOutline />
          </Link>
        </div>
        <div className="md:order-2 order-last w-[100vw] md:w-[30vw] text-lg relative  my-3 md:m-0">
          <input
            className=" bg-slate-100  p-2 w-full border  border-black rounded-md"
            type="text"
            placeholder="O que você está procurando?"
          />
          <IoSearchOutline className="absolute top-3 right-2 text-2xl" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
