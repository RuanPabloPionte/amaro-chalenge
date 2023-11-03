import Link from "next/link";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import CartIcon from "./CartIcon";
import AmaroLogo from "./AmaroLogo";
import HeaderSearch from "./HeaderSearch";

function Header() {
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between shadow-md shadow-black p-3">
        {/* image */}
        <Link href={"/"} className="flex gap-2 order-1">
          <HiOutlineMenu className="md:hidden text-2xl" />
          <AmaroLogo />
        </Link>

        {/* icons */}
        <div className="flex gap-3 text-2xl md:text-3xl order-2 md:order-3">
          <span>
            <IoPersonOutline />
          </span>
          <CartIcon />
        </div>
        <HeaderSearch />
      </nav>
    </header>
  );
}

export default Header;
