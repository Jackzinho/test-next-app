import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className} overflow-x-hidden min-h-screen flex flex-col justify-between`}>
      <Component {...pageProps} />
    </div>
  );
}
