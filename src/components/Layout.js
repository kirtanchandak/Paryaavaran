import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <header>
        <Header />
      </header>
      <main className="container m-auto mt-4 px-4">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
