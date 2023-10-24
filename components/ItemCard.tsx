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
  const hasDescount = discount_percentage && true;
  return (
    <div className="p-3 gap-3 flex justify-center align-center flex-wrap bg-slate-200 rounded-md border border-black shadow-black shadow-md">
      <Image
        src={image}
        width={300}
        height={500}
        alt={name}
        className="w-full"
      />
      <div className=" text-lg lg:text-2xl font-semibold">
        <p className="text-center">{name}</p>
        <p>
          {discount_percentage ? (
            <>
              <span className="line-through">{regular_price}</span>
              <span className="text-emerald-600 mx-2">{`(${discount_percentage}) OFF`}</span>
              <p>{actual_price}</p>
            </>
          ) : (
            regular_price
          )}
        </p>
      </div>
      <div className="flex gap-2 w-full my-2 justify-center">
        {sizes.map((size) =>
          sizes.length > 3 ? (
            <p
              className={`border border-black p-2 rounded-md ${
                size.available && "border-dashed"
              }`}
              key={size.sku}
            >
              {size.size}
            </p>
          ) : null
        )}
      </div>
      <button className="border border-black rounded-md p-3 bg-slate-300 hover:bg-emerald-300 transition-all duration-[0.7s] shadow-md shadow-sky-400">
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;
