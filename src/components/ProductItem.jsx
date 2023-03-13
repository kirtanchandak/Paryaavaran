import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShopContext } from "@/utils/Store";

function ProductItem({ product }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[product.id];
  return (
    <div legacybehavior="true" className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="rounded shadow h-96 w-96"
          height={500}
          width={500}
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-bold">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>₹{product.price}</p>
        <button className="primary-btn" onClick={() => addToCart(product.id)}>
          Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
