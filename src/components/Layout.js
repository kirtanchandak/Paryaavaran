import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Paryaavaran" : "Paryaavaran"}</title>
        <meta name="description" content="Eco-Friendly Shopping App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-col min-h-screen justify-between ">
        <header>
          <Header />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
