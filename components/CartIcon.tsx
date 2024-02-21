"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContex";

import { IoBagOutline } from "react-icons/io5";
function CartIcon() {
  const { cart } = useCart();

  return (
    <Link href="/cart" className="flex items-center relative">
      {cart.length > 0 && (
        <span className=" bg-red-600 text-white rounded-full px-[5px] text-sm text-center absolute top-[-5px] right-[-6px]">
          {cart.length}
        </span>
      )}
      <IoBagOutline />
    </Link>
  );
}

export default CartIcon;
