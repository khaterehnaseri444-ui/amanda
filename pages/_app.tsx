import Layout from "@/components/partial/Layout";
import { WishProvider } from "@/core/context/wishContext/WishContext";
import { Store } from "@/core/redux/app/Store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <WishProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WishProvider>
    </Provider>
  )
}
