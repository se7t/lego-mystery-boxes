import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
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

        <Link
          href="/"
          className="active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700"
        >
          Let{"'"}s Go!
        </Link>
      </div>
    </>
  );
}
