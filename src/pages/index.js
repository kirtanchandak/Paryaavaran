import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paryaavaran</title>
        <meta name="description" content="Eco-Friendly Shopping App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>Home Page</Layout>
      </main>
    </>
  );
}
