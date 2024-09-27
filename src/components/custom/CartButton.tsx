"use client";
import { RootState } from "@/store";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
export default function CartButton() {
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems.length
  );
  return (
    <>
      <div className="cursor-pointer">
        <Link href={"/pages/cart"} className="flex">
          <CiShoppingCart size={35} />{" "}
          <span className="relative top-[-6px] left-[-15px] bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cartItems}
          </span>
        </Link>
      </div>
    </>
  );
}
