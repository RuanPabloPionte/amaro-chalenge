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
      <nav className="flex flex-wrap justify-between shadow-md shadow-black p-4">
        {/* image */}
        <div className="flex gap-2 ">
          <HiOutlineMenu className="md:hidden text-2xl" />
          <Image
            width={100}
            height={40}
            alt="amaro-logo"
            src="/Logotipo_da_Amaro.png"
          />
        </div>
        {/* icons */}
        <div className="flex gap-3 text-2xl">
          <span>
            <IoPersonOutline />
          </span>
          <span>
            <IoBagOutline />
          </span>
        </div>
        <div className="w-[100vw] text-lg">
          <input
            className="relative bg-slate-100 m-2 my-3 p-2 w-full border  border-black rounded-md"
            type="text"
            placeholder="O que você está procurando?"
          />
          <IoSearchOutline className="absolute top-[8%] right-[20px] text-2xl" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
