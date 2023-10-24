// - The app must be responsive. Use a **mobile-first** approach.
// - For each item on the catalog, the following information must be present on the page:
//     - Image
//     - Name
//     - Price
//     - Promo Status
//     - Promo price (if available)
//     - Available Sizes
//     - Sale badge
// - It must be possible to add products by size to the cart.
// - It must be possible to view the cart with the items you've added (name, image, price, quantity) and the grand total.
// - The cart should be persisted between reloads.

import Image from "next/image";

function ItemCard({
  image,
  name,
  regular_price,
  actual_price,
  discount_percentage,
  sizes,
}: Product) {
  //   console.log(products);
  return (
    <div
      className="p-3"
      style={{
        border: "2px solid red",
      }}
    >
      <Image src={image} width={200} height={400} alt={name} />
      <p>{name}</p>
      <p>{regular_price}</p>
      <p>{actual_price}</p>
      <p>{discount_percentage}</p>
      {/* <p>{actual_price}</p> */}

    </div>
  );
}

export default ItemCard;
