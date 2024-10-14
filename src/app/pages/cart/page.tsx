"use client";

import Navbar from "@/components/custom/Navbar";
import { RootState } from "@/store";
import {
  AddtoCart,
  DecreaseQuantity,
  RemoveFromCart,
} from "@/store/Slices/CartItemSlice";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartItems.cartItems
  );
  const [discount, setDiscount] = useState(0); // State for discount if applicable

  const handleIncrease = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    dispatch(AddtoCart(id));
  };

  const handleDecrease = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) => {
    dispatch(DecreaseQuantity(id));
  };

  const handleRemove = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: number
  ) => {
    dispatch(RemoveFromCart(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-md shadow-md flex items-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={200}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-700">{item.category}</p>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-lg font-semibold">
                    {/* ${item.price.toFixed(2)} */}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={(e) => handleIncrease(e, item.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Increase
                    </button>
                    <button
                      onClick={(e) => handleDecrease(e, item.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Decrease
                    </button>
                    <button
                      onClick={(e) => handleRemove(e, item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Summary</h2>
          <p>Total Items: {calculateTotalItems()}</p>
          <p>Total Price: ${calculateTotal().toFixed(2)}</p>
          {discount > 0 && <p>Discount Applied: ${discount.toFixed(2)}</p>}
        </div>
      </div>
    </>
  );
}
