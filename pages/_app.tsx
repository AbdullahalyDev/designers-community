import type { AppProps } from "next/app";

import "@/public/styles/bootstrap/bootstrap.css";
import "@/public/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
