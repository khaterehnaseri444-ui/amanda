import Layout from "@/components/partial/Layout";
import { WishProvider } from "@/core/context/wishContext/WishContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WishProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WishProvider>
  )
}
