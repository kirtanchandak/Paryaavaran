import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import data from "@/utils/data";

export default function Home() {
  return (
    <>
      <main>
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.products.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
