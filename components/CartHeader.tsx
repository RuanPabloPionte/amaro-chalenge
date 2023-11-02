import AmaroLogo from "./AmaroLogo";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Link from "next/link";

function CartHeader() {
  return (
    <nav className="p-5 mb-3 bg-white flex items-center justify-between">
      <Link
        href={"/"}
        className="flex justify-center items-center gap-1 text-xl "
      >
        <MdArrowBackIosNew />
        Voltar
      </Link>
      <Link href={"/"}>
        <AmaroLogo />
      </Link>
      <AiOutlineQuestionCircle className="text-2xl" />
    </nav>
  );
}

export default CartHeader;
