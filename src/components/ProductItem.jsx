import React from "react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div legacyBehavior className="card">
      <Link href={`product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow h-96 w-96"
        />
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`product/${product.slug}`}>
          <h2 className="text-lg font-bold">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>₹{product.price}</p>
        <button className=" primary-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
