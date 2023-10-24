import Image from "next/image";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import {
  IoPersonOutline,
  IoBagOutline,
  IoSearchOutline,
} from "react-icons/io5";

function Header() {
  return (
    <header>
      <nav className="flex flex-wrap justify-between shadow-md shadow-black p-3">
        {/* image */}
        <div className="flex gap-2 order-1">
          <HiOutlineMenu className="md:hidden text-2xl" />
          <Image
            width={100}
            height={40}
            alt="amaro-logo"
            src="/Logotipo_da_Amaro.png"
            className="md:p-2"
          />
        </div>

        {/* icons */}
        <div className="flex gap-3 text-2xl md:text-3xl order-2 md:order-3">
          <span>
            <IoPersonOutline />
          </span>
          <span>
            <IoBagOutline />
          </span>
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
