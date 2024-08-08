import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const { setIsOpen, itemAmount } = useContext(CartContext)
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      <div className="font-semibold">Shopping Bag({itemAmount})</div>
      <div onClick={() => setIsOpen(false)}>
        <IoCloseOutline className="text-3xl hover:scale-110 cursor-pointer duration-300 translate-all text-red-700" />
      </div>

    </div>
  )
};

export default CartTop;
