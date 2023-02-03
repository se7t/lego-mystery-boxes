import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/changa-one";
import "@fontsource/exo-2/variable.css";
import MinifigContext from "@/lib/MinifigContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MinifigContext.Provider value={{}}>
      <Component {...pageProps} />
    </MinifigContext.Provider>
  );
}
