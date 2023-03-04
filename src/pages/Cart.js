import React from "react";
import data from "@/utils/data";
import CartItem from "@/components/CartItem";
import { ShopContext } from "@/utils/Store";
import { useContext } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function Cart({ product }) {
  const { cartItems } = useContext(ShopContext);

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
      </Layout>
    </>
  );
}

export default Cart;
