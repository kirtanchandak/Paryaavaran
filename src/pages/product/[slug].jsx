import Layout from "@/components/Layout";
import data from "@/utils/data";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ShopContext } from "@/utils/Store";

function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  const { addToCart } = useContext(ShopContext);
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>₹{product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status:</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unavaliable"}</div>
            </div>
            <div
              className="primary-btn w-full"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductScreen;
