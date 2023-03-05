import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ShopContext } from "@/utils/Store";

function CartItem({ product }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemCount = cartItems[product.id];
  return (
    <div className="flex">
      <div className="flex flex-col bg-gray-200 justify-center m-5 rounded h-52 w-[380px] shadow-xl">
        <div className="flex">
          <Image
            src={product.image}
            alt=""
            width={200}
            height={200}
            className="px-5"
          />
          <div>
            <h1 className="font-bold text-xl">{product.name}</h1>
            <h1 className="font-bold mt-3">₹{product.price}</h1>
            <div className="flex space-x-3">
              <button
                className="bg-slate-600 px-2 mt-3 text-white rounded-sm"
                onClick={() => addToCart(product.id)}
              >
                +
              </button>
              <input
                type="text"
                value={cartItemCount}
                className="w-7 h-7 text-center mt-3 rounded-sm"
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), product.id)
                }
              />
              <button
                className="bg-slate-600 px-2 mt-3 text-white rounded-sm"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
