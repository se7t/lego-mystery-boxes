import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/changa-one";
import "@fontsource/exo-2/variable.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
