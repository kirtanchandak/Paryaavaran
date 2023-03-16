import "@/styles/globals.css";
import ShopContextProvider from "@/utils/Store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ShopContextProvider>
        <Component {...pageProps} />
      </ShopContextProvider>
    </SessionProvider>
  );
}
