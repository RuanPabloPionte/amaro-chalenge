import ItemCard from "@/components/ItemCard";
import prudcts from "@/products.json";

export default function Home() {
  // console.log(products[0]);
  return (
    <main>
      <h1>Amaro</h1>
      <section className="grid grid-cols-2">
        {prudcts.map((prudct, index) => (
          <ItemCard key={index} {...prudct} />
        ))}
      </section>
    </main>
  );
}
