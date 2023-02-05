import Head from "next/head";
import { useContext } from "react";
import { MinifigContext } from "@/lib/MinifigContext";
import Button from "@/components/Button";

export default function Home() {
  const { getMinifigs } = useContext(MinifigContext);

  return (
    <>
      <Head>
        <title>Lego Minifig Mystery Boxes | se7t.dev</title>
        <meta
          name="description"
          content="Grab your free LEGO Minifig from the Harry Potter Universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8">
        <h1 className="text-bold text-center font-display text-5xl uppercase text-white sm:text-6xl">
          Lego Minifig Mystery Box
        </h1>

        <Button href="/cards" onClickAction={getMinifigs}>
          Let{"'"}s Go!
        </Button>
      </div>
    </>
  );
}
