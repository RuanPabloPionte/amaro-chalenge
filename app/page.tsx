import ItemCard from "@/components/ItemCard";
import prudcts from "@/products.json";

export default function Home() {
  // console.log(products[0]);
  return (
    <main>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-5 gap-2 lg:gap-4">
        {prudcts.map((prudct, index) => (
          <ItemCard key={index} {...prudct} />
        ))}
      </section>
    </main>
  );
}
