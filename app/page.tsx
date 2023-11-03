import ItemCard from "@/components/ItemCard";
import products from "@/products.json";
import Header from "@/components/Header";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

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
