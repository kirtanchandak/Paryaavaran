import React, { useEffect } from "react";
import data from "@/utils/data";
import CartItem from "@/components/CartItem";
import { ShopContext } from "@/utils/Store";
import { useContext } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import router from "next/router";

function Cart({ product }) {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-3xl font-bold my-5">Shopping Cart</h1>

          {data.products.map((product) => {
            if (cartItems[product.id] > 0)
              return <CartItem product={product} key={product.id}></CartItem>;
          })}
        </div>
        <div className="flex">
          <div className="checkout flex flex-col justify-center gap-4 bg-gray-200 w-[270px] h-48 rounded shadow-lg">
            <p className="font-bold  ml-3">Subtotal: ₹{totalAmount}</p>
            <div className="flex gap-3 items-center justify-center">
              <Link href="/">
                <button className="cart-btn">Continue Shopping</button>
              </Link>

              <button
                className="cart-btn"
                onClick={() => router.push("login?redirect=/shipping")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
