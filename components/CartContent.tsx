import { useCart } from "@/context/CartContex";
import Image from "next/image";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

type CartContentProps = {
  cartEntry: CartEntry;
};

function CartContent({ cartEntry }: CartContentProps) {
  const { deleteProduct, updateQuantity } = useCart();

  return (
    <>
      <div
        className="relative flex m-2 p-2 gap-1 bg-white"
        key={cartEntry.product.id}
      >
        <Image
          src={cartEntry.product.image}
          width={80}
          height={100}
          alt={cartEntry.product.name}
        />
        <button
          onClick={() => deleteProduct(cartEntry.product.id)}
          className="absolute top-5 right-5"
        >
          <AiOutlineClose />
        </button>

        <div className="flex flex-wrap m-2 w-[80%] gap-2">
          <p className=" text-lg">{cartEntry.product.name}</p>
          <div className="w-full font-semibold ">
            <p>
              Cor:{" "}
              <span className="text-black/50">
                {cartEntry.product.color.toUpperCase()}
              </span>{" "}
            </p>
            <p>
              Tam:{" "}
              <span className="text-black/50">
                {cartEntry.chosenSize.slice(-2).replace("_", "")}
              </span>{" "}
            </p>
          </div>
          <div className="flex justify-between items-center gap-3 w-full mt-2">
            <div className="flex gap-2 ">
              <button
                onClick={() =>
                  updateQuantity(cartEntry.product.id, cartEntry.chosenSize, -1)
                }
                className="text-2xl text-slate-500"
              >
                <CiCircleMinus />
              </button>
              <p>{cartEntry.quantity}</p>
              <button
                // não da para usar o addProduct aqui pq vai causar um problema quando vc da refresh, ele add mais  outro produto sempre que sua paguna rerenderizar
                // comentario so para mim , apagar dps
                // my theory is  the following, cause the useEffect uses the cart state as dependence when the we use the addProduct a remont is triggered, but the product that we add persist in the state which when cause a another remont the product still there and is add into the cartlist again and this process repeat itself.
                onClick={() => {
                  updateQuantity(cartEntry.product.id, cartEntry.chosenSize, 1);
                }}
                className="text-2xl text-slate-500"
              >
                <CiCirclePlus />
              </button>
            </div>
            <p>{cartEntry.product.actual_price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContent;
