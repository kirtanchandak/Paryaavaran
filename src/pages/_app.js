import "@/styles/globals.css";
import ShopContextProvider from "@/utils/Store";

export default function App({ Component, pageProps }) {
  return (
    <ShopContextProvider>
      <Component {...pageProps} />
    </ShopContextProvider>
  );
}
