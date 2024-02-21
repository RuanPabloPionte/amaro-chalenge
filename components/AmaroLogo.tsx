import Image from "next/image";

function AmaroLogo() {
  return (
    <div>
      <Image
        width={100}
        height={40}
        alt="amaro-logo"
        src="/Logotipo_da_Amaro.png"
        className="md:p-2"
      />
    </div>
  );
}

export default AmaroLogo;
