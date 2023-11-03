"use client";
import ItemCard from "@/components/ItemCard";
import { useProductContext } from "@/context/ProductsContext";
import Header from "@/components/Header";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const { products } = useProductContext();
  const query = searchParams?.query || "";

  // console.log(products[0]);
  return (
    <main>
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-4 mx-9 gap-6 lg:gap-4 ">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} query={query} />
        ))}
      </section>
    </main>
  );
}
