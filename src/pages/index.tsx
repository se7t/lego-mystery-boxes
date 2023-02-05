import Head from "next/head";
import { useContext } from "react";
import { MinifigContext } from "@/lib/MinifigContext";

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
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        <h1 className="text-bold text-center font-display text-5xl uppercase text-white sm:text-6xl">
          Lego Minifig Mystery Box
        </h1>

        <a
          onClick={getMinifigs}
          className="px-25 font-sans cursor-pointer rounded-full bg-blue-500 px-24 py-3 text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700"
        >
          Let{"'"}s Go!
        </a>
      </div>
    </>
  );
}
