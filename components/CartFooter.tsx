import React from "react";

type CartFooterProps = {
  totalPrice: string;
};

function CartFooter({ totalPrice }: CartFooterProps) {
  return (
    <>
      <p className="text-lg">Resumo de compra</p>
      <p className=" flex justify-between w-full py-3 border-b-2 text-slate-500 font-light">
        <span>Subtotal</span>
        <span>{`R$ ${totalPrice}`}</span>
      </p>
      <div className="font-bold my-3">
        <div className="flex justify-between items-center">
          <p>Total a pagar</p>
          <div className="cart__footer__payment-price">
            <span>{`R$ ${totalPrice}`}</span>
          </div>
        </div>
        <div className=" flex justify-end ml-[2.4rem] p-3 text-end  font-light broder ">
          <p className=" ml-[3rem] text-lg text-slate-500">
            Via PIX com +5% OFF ou em até 6x de R$&nbsp;66,64 no cartão de
            crédito
          </p>
        </div>
      </div>
      <button className="w-full p-2 bg-slate-300 rounded-md mb-2 ">
        Finalizar Compra
      </button>
    </>
  );
}

export default CartFooter;
