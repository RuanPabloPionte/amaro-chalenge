"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useProductContext } from "@/context/ProductsContext";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function HeaderSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="md:order-2 order-last w-[100vw] md:w-[30vw] text-lg relative  my-3 md:m-0">
      <input
        className=" bg-slate-100  p-2 w-full border  border-black rounded-md"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="O que você está procurando?"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearchOutline className="absolute top-3 right-2 text-2xl" />
    </div>
  );
}

export default HeaderSearch;
