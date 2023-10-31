"use client";
import ItemCard from "@/components/ItemCard";
import { useProductContext } from "@/context/ProductsContext";

export default function Home() {
  const { products } = useProductContext();

  // console.log(products[0]);
  return (
    <main>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-5 gap-2 lg:gap-4">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </section>
    </main>
  );
}
