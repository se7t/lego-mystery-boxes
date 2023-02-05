import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/changa-one";
import "@fontsource/exo-2/variable.css";
import { MinifigProvider } from "@/lib/MinifigContext";
import { ViewSource } from "@/components/ViewSource";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MinifigProvider>
      <Component {...pageProps} />
      <ViewSource />
    </MinifigProvider>
  );
}
